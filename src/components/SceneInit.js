import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

export default class SceneInit {
  constructor(canvasId) {
    // NOTE: Core components to initialize Three.js app.
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;

    // NOTE: Camera params;
    this.fov = 40;
    this.nearPlane = 1;
    this.farPlane = 1000;
    this.canvasId = canvasId;

    // NOTE: Additional components.
    this.clock = undefined;
    this.stats = undefined;
    this.controls = undefined;

    // NOTE: Lighting is basically required.
    this.ambientLight = undefined;
    this.directionalLight = undefined;
  }

  initialize() {
    this.scene = new THREE.Scene();
    // this.scene.background = new THREE.Color(0xffffff);
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      1,
      100
    );
    this.camera.position.set( 5, 2, 8 );

    // NOTE: Specify a canvas which is already created in the HTML.
    const canvas = document.getElementById(this.canvasId);
    this.renderer = new THREE.WebGLRenderer({
      canvas, antialias: true,
    });
    //build the container here
    const container = document.getElementById('test');
    this.renderer.setPixelRatio( window.devicePixelRatio);
    console.log("container.weith", container.clientWidth)
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setClearColor( 0xffffff, 0);
    this.renderer.outputEncoding = THREE.sRGBEncoding;


    const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmremGenerator.fromScene( new RoomEnvironment(), 0.04 ).texture;

    this.clock = new THREE.Clock();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set( 0, 0.5, 0 );
		this.controls.update();
    this.controls.enableZoom = false;
		this.controls.enablePan = false;
		this.controls.enableDamping = true;

    this.stats = Stats();
    container.appendChild(this.stats.dom);

    // if window resizes
    window.addEventListener('resize', () => this.onWindowResize(), false);

  }

  animate() {
    // NOTE: Window is implied.
    // requestAnimationFrame(this.animate.bind(this));
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
    this.stats.update();
    this.controls.update();
  }

  render() {
    // NOTE: Update uniform data on each render.
    // this.uniforms.u_time.value += this.clock.getDelta();
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    console.log("TEST clientwidth",test.clientWidth);
    console.log("TEST clientHeight",test.clientHeight);
    this.camera.aspect = test.clientWidth / test.clientHeight;
    //this.camera.aspect = window.innerWidth / window.innerHeight;
    //this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(test.clientWidth , test.clientHeight);
  }
}