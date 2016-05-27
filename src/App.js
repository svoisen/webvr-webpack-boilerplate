export default class App {
    constructor() {
        this._bind('_animate', '_handleResize');
        this._setup3D();
        this._createScene();

        window.addEventListener('resize', this._handleResize, true);
        window.addEventListener('vrdisplaypresentchange', this._handleResize, true);
    }

    start() {
        requestAnimationFrame(this._animate);
    }

    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    _setup3D() {
        const renderer = this._renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setPixelRatio(window.devicePixelRatio);
        document.body.appendChild(renderer.domElement);

        const scene = this._scene = new THREE.Scene();
        const camera = this._camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
        const effect = this._effect = new THREE.VREffect(renderer);
        effect.setSize(window.innerWidth, window.innerHeight);

        const controls = this._controls = new THREE.VRControls(camera);
        controls.standing = true;

        const manager = this._manager = new WebVRManager(renderer, effect, {hideButton: false, isUndistorted:false});
    }

    _createScene() {
        const scene = this._scene;

        var grid = new THREE.GridHelper(500, 5, 0xffffff, 0xffffff);
        scene.add(grid);
    }

    _animate(timestamp) {
        const controls = this._controls;
        const manager = this._manager;
        const scene = this._scene;
        const camera = this._camera;

        controls.update();
        manager.render(scene, camera, timestamp);

        requestAnimationFrame(this._animate);
    }

    _handleResize(event) {
        const effect = this._effect;
        const camera = this._camera;

        effect.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }
}
