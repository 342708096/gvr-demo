class Player {
    constructor(src) {
        this.lastRefresh = 0;
        // initialize video
        const video = this.video = document.createElement('video');
        Object.assign(this.video, {
            src,
            width: window.innerWidth,
            height: window.innerHeight,
            loop: true,
            preload : "metadata"
        });

        video.setAttribute('x5-video-player-type', 'h5');
        video.setAttribute('webkit-playsinline', 'true');
        video.setAttribute('x-webkit-airplay', 'true');
        video.setAttribute('playsinline', 'true');
        video.setAttribute('x5-video-player-fullscreen', "false");

        //initialize config
        this.config = {distance: 500};
        // Object.assign(this.config, config);

        //initialize camera
        const camera = this.camera = new THREE.PerspectiveCamera( 45, 2, 1, 1100 );
        camera.target = new THREE.Vector3( 0, 0, 0 );
        camera.zoom = 1.5;
        camera.rotation.reorder('YXZ');
        camera.layers.enable(1);
        camera.aspect = 2; //videoWidth / videoHeight;
        camera.updateProjectionMatrix();

        //initialize geometry
        const geometry =this.geometry = new THREE.SphereBufferGeometry( 500, 64, 44 );
        geometry.scale( - 1, 1, 1 );

        //initialize texture
        const texture = this.texture = new THREE.VideoTexture( video );
        texture.minFilter = THREE.LinearFilter;
        texture.format = THREE.RGBAFormat;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;
        texture.flipY = false;

        //initialize mesh
        const equirect_frag = "uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV ).bgra;\n}\n";

        const equirect_vert = "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n";

        const uniforms =  {
            tEquirect: { value: texture },
            tFlip: { value: 1 }
        };

        const material = new THREE.ShaderMaterial( {
            uniforms: uniforms,
            vertexShader: equirect_vert,
            fragmentShader: equirect_frag
        });

        const mesh = new THREE.Mesh( geometry, material );


        //initialize scene
        const scene = this.scene = new THREE.Scene();
        scene.add(mesh);

        //initialize renderer
        const renderer = this.renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( this.video.width , this.video.height);
    }
    play(){
        this.video.play();

        this.animate();
    }

    render(){
        const now = new Date().getTime();

        if (now - this.lastRefresh >= 30) {

            this.lastRefresh = now;

            this.texture.needsUpdate = true;
        }
        this.renderer.render(this.scene, this.camera);
    }

    appendToContainer(container){
        container.appendChild(this.renderer.domElement);
    }

    updateCameraPosition (x, y, z){
        this.camera.position.x = x;
        this.camera.position.y = y;
        this.camera.position.z = z;
        this.camera.lookAt( this.camera.target );
        this.render();
    }

    updateCameraPositionByDeg (theta, phi){
        theta = THREE.Math.degToRad(theta);
        phi  = THREE.Math.degToRad(90 - Math.max (-85, Math.min (85, phi)));
        this.updateCameraPosition(
            this.config.distance * Math.sin( phi ) * Math.cos( theta ),
            this.config.distance * Math.cos( phi ),
            this.config.distance * Math.sin( phi ) * Math.sin( theta )
        )
    }

    animate () {
        requestAnimationFrame( this.render.bind(this) );
    }

}