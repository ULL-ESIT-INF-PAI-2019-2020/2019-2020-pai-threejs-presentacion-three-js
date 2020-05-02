"use strict";
window.onload = init;

function init() {
  const RED =  "#ff0000";
  const BLUE = "#1a1aff";

  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  let geometryFigure = new THREE.BoxGeometry(2, 2, 2);
  let material = new THREE.MeshNormalMaterial();
  // let material = new THREE.MeshBasicMaterial({color: BLUE});
  // let material = new THREE.MeshBasicMaterial({color: BLUE, vertexColors: THREE.FaceColors});
  let cube = new THREE.Mesh(geometryFigure, material);

  //geometryFigure = new THREE.SphereGeometry(2, 6, 6);
  //material = new THREE.MeshNormalMaterial();
  //let sphere = new THREE.Mesh(geometryFigure, material);

  //sphere.position.x = 4;
  //scene.add(sphere);
  //cube.geometry.faces[1].color = new THREE.Color(RED);
  //cube.geometry.faces[0].color = new THREE.Color(RED);
  //cube.geometry.colorsNeedUpdate = true;
  scene.add(cube);
  //cube.rotation.y = 1;
  //cube.rotation.z = 1;
  camera.position.z = 10;
  camera.lookAt(cube);
  console.log(camera);
  renderer.render(scene, camera);

  render();
  function render() {
    requestAnimationFrame(render);
    // cube.scale.y += 0.005;
    // cube.scale.x += 0.001;
    // cube.rotation.x += 0.05;
    // cube.rotation.y += 0.02;
    renderer.render(scene, camera);

  }

  
  window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.updateProjectionMatrix();
  });

}



