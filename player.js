class EventEmitter {
  constructor() {
    this._events = undefined;
    this.prefixed = typeof Object.create !== 'function' ? '~' : false;
  }
  eventNames() {
    const events = this._events,
      names = [];

    if (!events) return names;
    for (const name in events) {
      if (Object.prototype.hasOwnProperty.call(events, name)) {
        names.push(this.prefixed ? name.slice(1) : name);
      }
    }

    if (Object.getOwnPropertySymbols) {
      return names.concat(Object.getOwnPropertySymbols(events));
    }

    return names;
  }
  listeners(event, exists) {
    const evt = this.prefixed ? this.prefixed + event : event;
    const available = this._events && this._events[evt];

    if (exists) return !!available;
    if (!available) return [];
    if (available.fn) return [available.fn];
    const l = available.length,
      ee = new Array(l);
    for (let i = 0; i < l; i++) {
      ee[i] = available[i].fn;
    }

    return ee;
  }
  emit(event, a1, a2, a3, a4, a5) {
    const evt = this.prefixed ? this.prefixed + event : event;

    if (!this._events || !this._events[evt]) return false;

    let listeners = this._events[evt],
      len = arguments.length,
      args,
      i;

    if (typeof listeners.fn === 'function') {
      if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

      switch (len) {
        case 1: return listeners.fn.call(listeners.context), true;
        case 2: return listeners.fn.call(listeners.context, a1), true;
        case 3: return listeners.fn.call(listeners.context, a1, a2), true;
        case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }

      for (i = 1, args = new Array(len - 1); i < len; i++) {
        args[i - 1] = arguments[i];
      }

      listeners.fn.apply(listeners.context, args);
    } else {
      const length = listeners.length;
      let j;

      for (i = 0; i < length; i++) {
        if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

        switch (len) {
          case 1: listeners[i].fn.call(listeners[i].context); break;
          case 2: listeners[i].fn.call(listeners[i].context, a1); break;
          case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
          default:
            if (!args) {
              for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
            }

            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }

    return true;
  }
  on(event, fn, context) {
    const listener = { fn, context: context || this, once: false },
      evt = this.prefixed ? this.prefixed + event : event;

    if (!this._events) this._events = this.prefixed ? {} : Object.create(null);
    if (!this._events[evt]) this._events[evt] = listener;
    else if (!this._events[evt].fn) this._events[evt].push(listener);
    else {
      this._events[evt] = [
        this._events[evt], listener
      ];
    }

    return this;
  }
  once(event, fn, context) {
    const listener = { fn, context: context || this, once: true },
      evt = this.prefixed ? this.prefixed + event : event;

    if (!this._events) this._events = this.prefixed ? {} : Object.create(null);
    if (!this._events[evt]) this._events[evt] = listener;
    else if (!this._events[evt].fn) this._events[evt].push(listener);
    else {
      this._events[evt] = [
        this._events[evt], listener
      ];
    }

    return this;
  }
  off(event, fn, context, once) {
    const evt = this.prefixed ? this.prefixed + event : event;

    if (!this._events || !this._events[evt]) return this;

    const listeners = this._events[evt],
      events = [];

    if (fn) {
      if (listeners.fn) {
        if (
                    listeners.fn !== fn
                    || (once && !listeners.once)
                    || (context && listeners.context !== context)
                ) {
          events.push(listeners);
        }
      } else {
        for (let i = 0, length = listeners.length; i < length; i++) {
          if (
                        listeners[i].fn !== fn
                        || (once && !listeners[i].once)
                        || (context && listeners[i].context !== context)
                    ) {
            events.push(listeners[i]);
          }
        }
      }
    }

        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
    if (events.length) {
      this._events[evt] = events.length === 1 ? events[0] : events;
    } else {
      delete this._events[evt];
    }

    return this;
  }
  removeAllListeners(event) {
    if (!this._events) return this;

    if (event) delete this._events[this.prefixed ? this.prefixed + event : event];
    else this._events = this.prefixed ? {} : Object.create(null);

    return this;
  }
}

THREE.VREffect = function (renderer, onError) {
    let vrDisplay,
vrDisplays;
    const eyeTranslationL = new THREE.Vector3();
    const eyeTranslationR = new THREE.Vector3();
    let renderRectL,
renderRectR;

    let frameData = null;

    if ('VRFrameData' in window) {
        frameData = new window.VRFrameData();
    }

    function gotVRDisplays(displays) {
        vrDisplays = displays;

        if (displays.length > 0) {
            vrDisplay = displays[0];
        } else if (onError) onError('HMD not available');
    }

    if (navigator.getVRDisplays) {
        navigator.getVRDisplays().then(gotVRDisplays).catch(() => {
            console.warn('THREE.VREffect: Unable to get VR Displays');
        });
    }

    //

    this.isPresenting = false;

    const scope = this;

    let rendererSize = renderer.getSize();
    let rendererUpdateStyle = false;
    let rendererPixelRatio = renderer.getPixelRatio();

    this.getVRDisplay = function () {
        return vrDisplay;
    };

    this.setVRDisplay = function (value) {
        vrDisplay = value;
    };

    this.getVRDisplays = function () {
        console.warn('THREE.VREffect: getVRDisplays() is being deprecated.');
        return vrDisplays;
    };

    this.setSize = function (width, height, updateStyle) {
        rendererSize = { width, height };
        rendererUpdateStyle = updateStyle;

        if (scope.isPresenting) {
            const eyeParamsL = vrDisplay.getEyeParameters('left');
            renderer.setPixelRatio(1);
            renderer.setSize(eyeParamsL.renderWidth * 2, eyeParamsL.renderHeight, false);
        } else {
            renderer.setPixelRatio(rendererPixelRatio);
            renderer.setSize(width, height, updateStyle);
        }
    };

    // VR presentation

    const canvas = renderer.domElement;
    const defaultLeftBounds = [0.0, 0.0, 0.5, 1.0];
    const defaultRightBounds = [0.5, 0.0, 0.5, 1.0];

    function onVRDisplayPresentChange() {
        const wasPresenting = scope.isPresenting;
        scope.isPresenting = vrDisplay !== undefined && vrDisplay.isPresenting;

        if (scope.isPresenting) {
            const eyeParamsL = vrDisplay.getEyeParameters('left');
            const eyeWidth = eyeParamsL.renderWidth;
            const eyeHeight = eyeParamsL.renderHeight;

            if (!wasPresenting) {
                rendererPixelRatio = renderer.getPixelRatio();
                rendererSize = renderer.getSize();

                renderer.setPixelRatio(1);
                renderer.setSize(eyeWidth * 2, eyeHeight, false);
            }
        } else if (wasPresenting) {
            renderer.setPixelRatio(rendererPixelRatio);
            renderer.setSize(rendererSize.width, rendererSize.height, rendererUpdateStyle);
        }
    }

    window.addEventListener('vrdisplaypresentchange', onVRDisplayPresentChange, false);

    this.setFullScreen = function (boolean) {
        return new Promise((resolve, reject) => {
            if (vrDisplay === undefined) {
                reject(new Error('No VR hardware found.'));
                return;
            }

            if (scope.isPresenting === boolean) {
                resolve();
                return;
            }

            if (boolean) {
                resolve(vrDisplay.requestPresent([{ source: canvas }]));
            } else {
                resolve(vrDisplay.exitPresent());
            }
        });
    };

    this.requestPresent = function () {
        return this.setFullScreen(true);
    };

    this.exitPresent = function () {
        return this.setFullScreen(false);
    };

    this.requestAnimationFrame = function (f) {
        if (vrDisplay !== undefined) {
            return vrDisplay.requestAnimationFrame(f);
        } else {
            return window.requestAnimationFrame(f);
        }
    };

    this.cancelAnimationFrame = function (h) {
        if (vrDisplay !== undefined) {
            vrDisplay.cancelAnimationFrame(h);
        } else {
            window.cancelAnimationFrame(h);
        }
    };

    this.submitFrame = function () {
        if (vrDisplay !== undefined && scope.isPresenting) {
            vrDisplay.submitFrame();
        }
    };

    this.autoSubmitFrame = true;

    // render

    const cameraL = new THREE.PerspectiveCamera();
    cameraL.layers.enable(1);

    const cameraR = new THREE.PerspectiveCamera();
    cameraR.layers.enable(2);

    this.render = function (scene, camera, renderTarget, forceClear) {
        if (vrDisplay && scope.isPresenting) {
            const autoUpdate = scene.autoUpdate;

            if (autoUpdate) {
                scene.updateMatrixWorld();
                scene.autoUpdate = false;
            }

            const eyeParamsL = vrDisplay.getEyeParameters('left');
            const eyeParamsR = vrDisplay.getEyeParameters('right');

            eyeTranslationL.fromArray(eyeParamsL.offset);
            eyeTranslationR.fromArray(eyeParamsR.offset);

            if (Array.isArray(scene)) {
                console.warn('THREE.VREffect.render() no longer supports arrays. Use object.layers instead.');
                scene = scene[0];
            }

            // When rendering we don't care what the recommended size is, only what the actual size
            // of the backbuffer is.
            const size = renderer.getSize();
            const layers = vrDisplay.getLayers();
            let leftBounds;
            let rightBounds;

            if (layers.length) {
                const layer = layers[0];

                leftBounds = layer.leftBounds !== null && layer.leftBounds.length === 4 ? layer.leftBounds : defaultLeftBounds;
                rightBounds = layer.rightBounds !== null && layer.rightBounds.length === 4 ? layer.rightBounds : defaultRightBounds;
            } else {
                leftBounds = defaultLeftBounds;
                rightBounds = defaultRightBounds;
            }

            renderRectL = {
                x: Math.round(size.width * leftBounds[0]),
                y: Math.round(size.height * leftBounds[1]),
                width: Math.round(size.width * leftBounds[2]),
                height: Math.round(size.height * leftBounds[3])
            };
            renderRectR = {
                x: Math.round(size.width * rightBounds[0]),
                y: Math.round(size.height * rightBounds[1]),
                width: Math.round(size.width * rightBounds[2]),
                height: Math.round(size.height * rightBounds[3])
            };

            if (renderTarget) {
                renderer.setRenderTarget(renderTarget);
                renderTarget.scissorTest = true;
            } else {
                renderer.setRenderTarget(null);
                renderer.setScissorTest(true);
            }

            if (renderer.autoClear || forceClear) renderer.clear();

            if (camera.parent === null) camera.updateMatrixWorld();

            camera.matrixWorld.decompose(cameraL.position, cameraL.quaternion, cameraL.scale);

            cameraR.position.copy(cameraL.position);
            cameraR.quaternion.copy(cameraL.quaternion);
            cameraR.scale.copy(cameraL.scale);

            cameraL.translateOnAxis(eyeTranslationL, cameraL.scale.x);
            cameraR.translateOnAxis(eyeTranslationR, cameraR.scale.x);

            if (vrDisplay.getFrameData) {
                vrDisplay.depthNear = camera.near;
                vrDisplay.depthFar = camera.far;

                vrDisplay.getFrameData(frameData);

                cameraL.projectionMatrix.elements = frameData.leftProjectionMatrix;
                cameraR.projectionMatrix.elements = frameData.rightProjectionMatrix;
            } else {
                cameraL.projectionMatrix = fovToProjection(eyeParamsL.fieldOfView, true, camera.near, camera.far);
                cameraR.projectionMatrix = fovToProjection(eyeParamsR.fieldOfView, true, camera.near, camera.far);
            }

            // render left eye
            if (renderTarget) {
                renderTarget.viewport.set(renderRectL.x, renderRectL.y, renderRectL.width, renderRectL.height);
                renderTarget.scissor.set(renderRectL.x, renderRectL.y, renderRectL.width, renderRectL.height);
            } else {
                renderer.setViewport(renderRectL.x, renderRectL.y, renderRectL.width, renderRectL.height);
                renderer.setScissor(renderRectL.x, renderRectL.y, renderRectL.width, renderRectL.height);
            }
            renderer.render(scene, cameraL, renderTarget, forceClear);

            // render right eye
            if (renderTarget) {
                renderTarget.viewport.set(renderRectR.x, renderRectR.y, renderRectR.width, renderRectR.height);
                renderTarget.scissor.set(renderRectR.x, renderRectR.y, renderRectR.width, renderRectR.height);
            } else {
                renderer.setViewport(renderRectR.x, renderRectR.y, renderRectR.width, renderRectR.height);
                renderer.setScissor(renderRectR.x, renderRectR.y, renderRectR.width, renderRectR.height);
            }
            renderer.render(scene, cameraR, renderTarget, forceClear);

            if (renderTarget) {
                renderTarget.viewport.set(0, 0, size.width, size.height);
                renderTarget.scissor.set(0, 0, size.width, size.height);
                renderTarget.scissorTest = false;
                renderer.setRenderTarget(null);
            } else {
                renderer.setViewport(0, 0, size.width, size.height);
                renderer.setScissorTest(false);
            }

            if (autoUpdate) {
                scene.autoUpdate = true;
            }

            if (scope.autoSubmitFrame) {
                scope.submitFrame();
            }

            return;
        }

        // Regular render mode if not HMD

        renderer.render(scene, camera, renderTarget, forceClear);
    };

    this.dispose = function () {
        window.removeEventListener('vrdisplaypresentchange', onVRDisplayPresentChange, false);
    };

    //

    function fovToNDCScaleOffset(fov) {
        const pxscale = 2.0 / (fov.leftTan + fov.rightTan);
        const pxoffset = (fov.leftTan - fov.rightTan) * pxscale * 0.5;
        const pyscale = 2.0 / (fov.upTan + fov.downTan);
        const pyoffset = (fov.upTan - fov.downTan) * pyscale * 0.5;
        return { scale: [pxscale, pyscale], offset: [pxoffset, pyoffset] };
    }

    function fovPortToProjection(fov, rightHanded, zNear, zFar) {
        rightHanded = rightHanded === undefined ? true : rightHanded;
        zNear = zNear === undefined ? 0.01 : zNear;
        zFar = zFar === undefined ? 10000.0 : zFar;

        const handednessScale = rightHanded ? -1.0 : 1.0;

        // start with an identity matrix
        const mobj = new THREE.Matrix4();
        const m = mobj.elements;

        // and with scale/offset info for normalized device coords
        const scaleAndOffset = fovToNDCScaleOffset(fov);

        // X result, map clip edges to [-w,+w]
        m[0 * 4 + 0] = scaleAndOffset.scale[0];
        m[0 * 4 + 1] = 0.0;
        m[0 * 4 + 2] = scaleAndOffset.offset[0] * handednessScale;
        m[0 * 4 + 3] = 0.0;

        // Y result, map clip edges to [-w,+w]
        // Y offset is negated because this proj matrix transforms from world coords with Y=up,
        // but the NDC scaling has Y=down (thanks D3D?)
        m[1 * 4 + 0] = 0.0;
        m[1 * 4 + 1] = scaleAndOffset.scale[1];
        m[1 * 4 + 2] = -scaleAndOffset.offset[1] * handednessScale;
        m[1 * 4 + 3] = 0.0;

        // Z result (up to the app)
        m[2 * 4 + 0] = 0.0;
        m[2 * 4 + 1] = 0.0;
        m[2 * 4 + 2] = zFar / (zNear - zFar) * -handednessScale;
        m[2 * 4 + 3] = (zFar * zNear) / (zNear - zFar);

        // W result (= Z in)
        m[3 * 4 + 0] = 0.0;
        m[3 * 4 + 1] = 0.0;
        m[3 * 4 + 2] = handednessScale;
        m[3 * 4 + 3] = 0.0;

        mobj.transpose();
        return mobj;
    }

    function fovToProjection(fov, rightHanded, zNear, zFar) {
        const DEG2RAD = Math.PI / 180.0;

        const fovPort = {
            upTan: Math.tan(fov.upDegrees * DEG2RAD),
            downTan: Math.tan(fov.downDegrees * DEG2RAD),
            leftTan: Math.tan(fov.leftDegrees * DEG2RAD),
            rightTan: Math.tan(fov.rightDegrees * DEG2RAD)
        };

        return fovPortToProjection(fovPort, rightHanded, zNear, zFar);
    }
};
THREE.VRControls = function (object, onError) {
    const scope = this;

    let vrDisplay,
vrDisplays;

    const standingMatrix = new THREE.Matrix4();

    let frameData = null;

    if ('VRFrameData' in window) {
        frameData = new VRFrameData();
    }

    function gotVRDisplays(displays) {
        vrDisplays = displays;

        if (displays.length > 0) {
            vrDisplay = displays[0];
        } else if (onError) onError('VR input not available.');
    }

    if (navigator.getVRDisplays) {
        navigator.getVRDisplays().then(gotVRDisplays).catch(() => {
            console.warn('THREE.VRControls: Unable to get VR Displays');
        });
    }

    // the Rift SDK returns the position in meters
    // this scale factor allows the user to define how meters
    // are converted to scene units.

    this.scale = 1;

    // If true will use "standing space" coordinate system where y=0 is the
    // floor and x=0, z=0 is the center of the room.
    this.standing = false;

    // Distance from the users eyes to the floor in meters. Used when
    // standing=true but the VRDisplay doesn't provide stageParameters.
    this.userHeight = 1.6;

    this.getVRDisplay = function () {
        return vrDisplay;
    };

    this.setVRDisplay = function (value) {
        vrDisplay = value;
    };

    this.getVRDisplays = function () {
        console.warn('THREE.VRControls: getVRDisplays() is being deprecated.');
        return vrDisplays;
    };

    this.getStandingMatrix = function () {
        return standingMatrix;
    };

    this.update = function () {
        if (vrDisplay) {
            let pose;

            if (vrDisplay.getFrameData) {
                vrDisplay.getFrameData(frameData);
                pose = frameData.pose;
            } else if (vrDisplay.getPose) {
                pose = vrDisplay.getPose();
            }

            if (pose.orientation !== null) {
                object.quaternion.fromArray(pose.orientation);
            }

            if (pose.position !== null) {
                object.position.fromArray(pose.position);
            } else {
                object.position.set(0, 0, 0);
            }

            if (this.standing) {
                if (vrDisplay.stageParameters) {
                    object.updateMatrix();

                    standingMatrix.fromArray(vrDisplay.stageParameters.sittingToStandingTransform);
                    object.applyMatrix(standingMatrix);
                } else {
                    object.position.setY(object.position.y + this.userHeight);
                }
            }

            object.position.multiplyScalar(scope.scale);
        }
    };

    this.dispose = function () {
        vrDisplay = null;
    };
};
class Player extends EventEmitter {
  constructor(container, video, config) {
    super();
    container = container || window.document.body;
    // initialize config
    this.config = {
        distance: 500,
        width: window.innerWidth,
        height: window.innerHeight,
        aspect: 2,
        loop: true,
        zoom: 1.5,
        cameraFOV: 45,
        scaleX: 1,
        scaleY: 1,
        offsetX: 0,
        offsetY: 0,
        phiStart: Math.PI / 180 * 90, // 90deg
        phiLength: Math.PI * 2,
        thetaStart: 0,
        thetaLength: Math.PI,
    };
    Object.assign(this.config, config || {});

    if (!video) {
      video = this.video = document.createElement('video');
      video.setAttribute('preload', 'auto');
      video.setAttribute('x5-video-player-type', 'h5');
      video.setAttribute('webkit-playsinline', 'true');
      video.setAttribute('x-webkit-airplay', 'true');
      video.setAttribute('playsinline', 'true');
      video.setAttribute('x5-video-player-fullscreen', 'true');
      video.setAttribute('crossorigin', 'anonymous');
    }

    this.video = video;
        // initialize video

    Object.assign(this.video, {
      width: this.config.width,
      height: this.config.height,
      loop: this.config.loop,
            // preload : "metadata"
    });
        // initialize camera
    const camera = this.camera = new THREE.PerspectiveCamera(this.config.cameraFOV, this.config.aspect, 1, 1000);
    // camera.target = new THREE.Vector3(0, 0, 0);
    camera.zoom = this.config.zoom;
    // camera.rotation.reorder('YXZ');
    camera.layers.enable(1);
    // camera.updateProjectionMatrix();
    const cameraDummy = this.cameraParent = new THREE.Object3D();
    cameraDummy.add(camera);

    const controls = this.controls = new THREE.VRControls(camera);

    // initialize renderer
    const renderer = this.renderer = new THREE.WebGLRenderer({ antialias: false }); // 关闭抗锯齿以提高性能
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(this.video.width, this.video.height);
    container.appendChild(renderer.domElement);
    //  effect

    const effect = this.effect = new THREE.VREffect(renderer);
    // Disable eye separation.
    effect.scale = 0;
    effect.setSize(this.video.width, this.video.height);

    // Present submission of frames automatically. This is done manually in
    // submitFrame().
    effect.autoSubmitFrame = true;


    // initialize scene
    const scene = this.scene = new THREE.Scene();
    const photoGroup = new THREE.Object3D();
    photoGroup.name = 'photo';
    scene.add(photoGroup);
    scene.add(camera.parent);
  }

  load(url) {
    return new Promise((resolve, reject) => {
      const video = this.video;
      // video.src = url;
      // video.addEventListener('canplaythrough', resolve);
      // video.addEventListener('loadeddata', resolve);
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, resolve);
      video.addEventListener('loadedmetadata', () => {
        this.emit('timeupdate', {
          currentTime: video.currentTime,
          duration: video.duration
        });
      });
      video.addEventListener('error', reject);
      video.load();
      const render_ = () => {
        this.createSphereRenderer();
        this.loopRender();
        video.removeEventListener('play', render_);
      };
      video.addEventListener('play', render_);
      // render_();
    })
        .then(() => this.emit('load', this.video))
        // .then(() => this.createSphereRenderer())
        // .then(() => this.loopRender())
        .catch((e) => this.emit('error', e));
  }

  createSphereRenderer() {
    // texture
      const texture = this.texture = new THREE.VideoTexture(this.video);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.format = THREE.RGBFormat;
      texture.generateMipmaps = false;
      texture.needsUpdate = true;

      // texture.flipY = false;

      function createPhotosphere_(texture, config) {
        config = config || {};
        const p = {
          scaleX: config.scaleX || 1,
          scaleY: config.scaleY || 1,
          offsetX: config.offsetX || 0,
          offsetY: config.offsetY || 0,
          phiStart: config.phiStart || Math.PI / 180 * 90,
          phiLength: config.phiLength || Math.PI * 2,
          thetaStart: config.thetaStart || 0,
          thetaLength: config.thetaLength || Math.PI
        };

        const geometry = new THREE.SphereGeometry(100, 64, 45,
            p.phiStart, p.phiLength, p.thetaStart, p.thetaLength);
        geometry.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1));
        const uvs = geometry.faceVertexUvs[0];
        for (let i = 0; i < uvs.length; i++) {
            for (let j = 0; j < 3; j++) {
                uvs[i][j].x *= p.scaleX;
                uvs[i][j].x += p.offsetX;
                uvs[i][j].y *= p.scaleY;
                uvs[i][j].y += p.offsetY;
            }
        }
        // const equirectFrag = 'uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV ).bgra;\n}\n';
        //
        // const equirectVert = 'varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n';
        //
        // const uniforms = {
        //   tEquirect: { value: texture },
        //   tFlip: { value: 1 }
        // };
        //
        // const material = new THREE.ShaderMaterial({
        //   uniforms,
        //   vertexShader: equirectVert,
        //   fragmentShader: equirectFrag
        // });
        // const material = new THREE.MeshBasicMaterial({ map: texture ,  overdraw: 0.5});

        const material = new THREE.ShaderMaterial({
          uniforms: {
              texture: { value: texture }
          },
          vertexShader: [
              'varying vec2 vUV;',
              'void main() {',
              '	vUV = vec2( uv.x, uv.y );',
              '	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
              '}'
          ].join('\n'),
          fragmentShader: [
              'uniform sampler2D texture;',
              'varying vec2 vUV;',
              'void main() {',
              ' gl_FragColor = texture2D( texture, vUV  ).bgra;',
              '}'
          ].join('\n')
        });
        // const material = new THREE.MeshLambertMaterial({map: texture});
        const out = new THREE.Mesh(geometry, material);
        // out.visible = false;
        out.renderOrder = -1;
        return out;
      }

      const sphereLeft = createPhotosphere_(texture),
          sphereRight = createPhotosphere_(texture);

      sphereLeft.layers.set(1); // leftEye 1 rightEye 2
      sphereLeft.eye = 1;
      sphereRight.layers.set(2);
      sphereRight.eye = 2;

      this.scene.getObjectByName('photo').children = [sphereLeft, sphereRight];
  }

  destroy() {
    this.video.pause();
    this.video.src = '';
    this.video = null;
  }

  play() {
    this.video.play();
  }

  loopRender() {
    requestAnimationFrame(this.loopRender.bind(this));
    try {
      this.controls.update();
      this.effect.render(this.scene, this.camera);
    } catch (e) {
      console.error(e);
    }
  }

  // updateCameraPosition(x, y, z) {
  //   this.camera.position.x = x;
  //   this.camera.position.y = y;
  //   this.camera.position.z = z;
  //   this.camera.lookAt(this.camera.target);
  //   this.render();
  // }

  // updateCameraPositionByDeg(theta, phi) {
  //   theta = THREE.Math.degToRad(theta);
  //   phi = THREE.Math.degToRad(90 - Math.max(-85, Math.min(85, phi)));
  //   this.updateCameraPosition(
  //           this.config.distance * Math.sin(phi) * Math.cos(theta),
  //           this.config.distance * Math.cos(phi),
  //           this.config.distance * Math.sin(phi) * Math.sin(theta)
  //       );
  // }

}

