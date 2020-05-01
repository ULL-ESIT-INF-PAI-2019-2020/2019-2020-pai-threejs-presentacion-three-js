"use strict";
window.onload = init;

function init() {

  const RED =  "#FF0000";
  const BLUE = "#1a1aff";
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  let geometryFigure = new THREE.BoxGeometry(4, 4, 4);
  //geometryFigure.setSize()
  let loader = new THREE.TextureLoader()

  var materials = [
      new THREE.MeshBasicMaterial( { map: loader.load('../img/rubiks.jpg')} ),
      new THREE.MeshBasicMaterial( { map: loader.load('../img/rubiks.jpg')} ),
      new THREE.MeshBasicMaterial( { map: loader.load('../img/rubiks.jpg')} ),
      new THREE.MeshBasicMaterial( { map: loader.load('../img/rubiks.jpg')} ),
      new THREE.MeshBasicMaterial( { map: loader.load('../img/rubiks.jpg')} ),
      new THREE.MeshBasicMaterial( { map: loader.load('../img/rubiks.jpg')} )
  ];

  let material = new THREE.MeshFaceMaterial(materials);

  let cube = new THREE.Mesh(geometryFigure, material);
  scene.add(cube);
  camera.position.z = 10;
  camera.lookAt(cube);
  console.log(camera);
  render();
  var light = new THREE.DirectionalLight( 0xffffff );
  light.position.set( 0, 1, 1 ).normalize();
  scene.add(light);
  function render() {
    requestAnimationFrame(render);
    cube.rotation.y += 0.005;
    cube.rotation.x += 0.005;
    //camera.rotation.x += 0.001;
    //camera.rotation.y += 0.001;
    //camera.rotation.z += 0.01;
    renderer.render(scene, camera);

  }
}



