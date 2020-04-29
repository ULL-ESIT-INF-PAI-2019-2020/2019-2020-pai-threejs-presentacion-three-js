const RED =  "#FF0000";
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, windows.innerHeight);
document.body.appendChild(renderer.domElement);
let geometryFigure = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({color: RED});
let cube = new THREE.Mesh(geometryFigure, material);
scene.add(cube);
camera.position.z = 5;
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
