"use strict";
window.onload = init;

function init() {

  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  let geometryFigure = new THREE.BoxGeometry(4, 4, 4);
  
  
  let loader = new THREE.TextureLoader()
  let texture = loader.load('../img/rubiks.jpg');
  let material = new THREE.MeshBasicMaterial({map: texture});


  /*
  let materials = [
      new THREE.MeshBasicMaterial( { map: loader.load('../img/rubik-yellow.png')} ),
      new THREE.MeshBasicMaterial( { map: loader.load('../img/rubik-red.png')} ),
      new THREE.MeshBasicMaterial( { map: loader.load('../img/rubik-orange.png')} ),
      new THREE.MeshBasicMaterial( { map: loader.load('../img/rubik-blue.png')} ),
      new THREE.MeshBasicMaterial( { map: loader.load('../img/rubik-white.png')} ),
      new THREE.MeshBasicMaterial( { map: loader.load('../img/rubik-green.png')} )
  ];

  let material = new THREE.MeshFaceMaterial(materials);
  */

  let cube = new THREE.Mesh(geometryFigure, material);
  scene.add(cube);
  camera.position.z = 10;
  camera.lookAt(cube);
  console.log(camera);
  
  
  // let light = new THREE.DirectionalLight( 0xffffff );
  // light.position.set( 0, 0, 10 ).normalize();
  // scene.add(light);
  
  render();



  function render() {
    requestAnimationFrame(render);
    cube.rotation.y += 0.005;
    cube.rotation.x += 0.005;
    //camera.rotation.x += 0.001;
    //camera.rotation.y += 0.001;
    //camera.rotation.z += 0.01;
    renderer.render(scene, camera);

  }

  
  window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.updateProjectionMatrix();

  });

}



