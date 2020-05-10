"use strict"
const WHITE = "0xffffff";
function init() {
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Creating the sphere
  let sphere = new THREE.SphereGeometry(2, 32, 32);
  let earthTexture = new THREE.TextureLoader().load('../img/earth_texture.png');
  let material = new THREE.MeshPhongMaterial({map: earthTexture});
  let earthMesh = new THREE.Mesh(sphere, material);

  // Adding light
  let light = new THREE.DirectionalLight(WHITE);
  light.position.set(0, 1, 1).normalize();
  
  // Positioning the objects
  earthMesh.position.set(0,0,0);
  camera.position.z = 5;
  camera.position.x = 0;
  camera.position.y = 2.9;

  // Camera control
  let controls = new THREE.OrbitControls(camera);
  let lightControls = new THREE.OrbitControls(light);
  controls.addEventListener('change', render);
  controls.autorotate = true;
  lightControls.autorotate = true;

  // Adding relief to the map, it only a rendering change, the mesh stays the same
  material.bumpMap = new THREE.TextureLoader().load('../img/earth_height.png');
  material.bumpScale = 0.2;

  scene.add(earthMesh);
  scene.add(light);
  camera.lookAt(scene);
  camera.rotation.x = 5.8;
  render();

  // render anidmation funtion
  function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }


  // resize windows event
  window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.updateProjectionMatrix();

  });
}