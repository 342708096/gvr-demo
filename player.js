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


class Player extends EventEmitter {
  constructor(container, config) {
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
        scaleX : 1,
        scaleY : 1,
        offsetX : 0,
        offsetY : 0,
        phiStart : Math.PI/180 * 90, //90deg
        phiLength : Math.PI * 2,
        thetaStart : 0,
        thetaLength: Math.PI,
    };
    Object.assign(this.config, config || {});


    this.lastRefresh = 0;
    this.deg = 45;
        // initialize video
    const video = this.video = document.createElement('video');
    Object.assign(this.video, {
      width: this.config.width,
      height: this.config.height,
      loop: this.config.loop,
            // preload : "metadata"
    });

    video.setAttribute('preload', 'auto');
    video.setAttribute('x5-video-player-type', 'h5');
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('x-webkit-airplay', 'true');
    video.setAttribute('playsinline', 'true');
    video.setAttribute('x5-video-player-fullscreen', 'false');
    video.setAttribute('crossorigin', 'anonymous');


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
    const renderer = this.renderer = new THREE.WebGLRenderer({antialias: false}); //关闭抗锯齿以提高性能
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

    //     // initialize geometry
    // const geometry = this.geometry = new THREE.SphereBufferGeometry(500, 64, 44);
    // geometry.scale(-1, 1, 1);
    //
    //     // initialize texture
    // const texture = this.texture = new THREE.VideoTexture(video);
    // texture.minFilter = THREE.LinearFilter;
    // texture.magFilter = THREE.LinearFilter;
    // texture.format = THREE.RGBAFormat; // THREE.RGAFormat
    // texture.generateMipmaps = false;
    // texture.flipY = false;
    // texture.needsUpdate = true;
    //
    //     // initialize mesh
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
    //
    // const mesh = new THREE.Mesh(geometry, material);
    //
    // scene.add(mesh);

  }

  load(url) {
    return new Promise((resolve, reject) => {
      const video = this.video;
      video.src = url;
      video.addEventListener('canplaythrough', resolve);
      video.addEventListener('loadedmetadata', () => {
        this.emit('timeupdate', {
          currentTime: video.currentTime,
          duration: video.duration
        });
      });
      video.addEventListener('error', reject);
      video.load();
    })
        .then(() => this.emit('load', this.video))
        .then(() => this.createSphereRenderer())
        .then(() => this.loopRender())
        .catch((e) => this.emit('error', e));
  }

  createSphereRenderer(){
    //texture
      const texture = this.texture = new THREE.VideoTexture(this.video);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.format = THREE.RGBFormat;
      texture.generateMipmaps = false;
      texture.needsUpdate = true;

      function createPhotosphere_ (texture, config) {
        config = config || {};
        const p = {
          scaleX : config.scaleX || 1,
          scaleY : config.scaleY || 1,
          offsetX : config.offsetX || 0,
          offsetY : config.offsetY || 0,
          phiStart : config.phiStart || Math.PI/180 * 90,
          phiLength : config.phiLength || Math.PI * 2,
          thetaStart : config.thetaStart || 0,
          thetaLength: config.thetaLength || Math.PI
        };

        const geometry = new THREE.SphereGeometry(100, 64, 45,
            p.phiStart, p.phiLength, p.thetaStart, p.thetaLength);
        geometry.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1));
        const uvs = geometry.faceVertexUvs[0];
        for (let i = 0; i < uvs.length; i ++) {
            for (let j = 0; j < 3; j ++) {
                uvs[i][j].x *= p.scaleX;
                uvs[i][j].x += p.offsetX;
                uvs[i][j].y *= p.scaleY;
                uvs[i][j].y += p.offsetY;
            }
        }

        const material = new THREE.MeshBasicMaterial({ map: texture });
        const out = new THREE.Mesh(geometry, material);
        //out.visible = false;
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
    this.controls.update();
    this.effect.render(this.scene, this.camera);
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

