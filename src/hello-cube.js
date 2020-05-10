"use strict";
// only calls init after window is fully loaded
window.onload = init;

function init() {
  // colour
  const BLUE = "#1a1aff";

  // Setup camera scene and renderer
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  let renderer = new THREE.WebGLRenderer();
  // we change the render size
  renderer.setSize(window.innerWidth, window.innerHeight);
  // we add the renderer object to the document
  document.body.appendChild(renderer.domElement);


  // we create a box geometry
  let geometryFigure = new THREE.BoxGeometry(2, 2, 2);

  // we create a mesh material to work with
  let material = new THREE.MeshBasicMaterial({color: BLUE});
  
  // we create a mesh
  let cube = new THREE.Mesh(geometryFigure, material);

  // adding the cube to the  scene
  scene.add(cube);

  // camera positioning
  camera.position.z = 10;
  camera.lookAt(cube);
  console.log(camera);

  // render of the scene
  renderer.render(scene, camera);
}

