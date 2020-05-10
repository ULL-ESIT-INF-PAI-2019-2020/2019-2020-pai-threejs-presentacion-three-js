"use strict";
// only calls init after window is fully loaded
window.onload = init;

function init() {
  // colours
  const RED =  "#ff0000";
  const BLUE = "#1a1aff";

  // Scene object
  let scene = new THREE.Scene();
  
  // We create a camera object, with a 75 degrees field of view, with and aspect ratio
  // proportional to the window size, which renders only objects from 0.1 unit
  // away from the camera up to 1000 units away 
  let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

  // We create a renderer object, in this case a webgl one, you can pass it 
  // arguments, like the canvas you want to load it in
  let renderer = new THREE.WebGLRenderer();
  // we change the render size
  renderer.setSize(window.innerWidth, window.innerHeight);
  // we add the renderer object to the document
  document.body.appendChild(renderer.domElement);


  // we create a box geometry
  let geometryFigure = new THREE.BoxGeometry(2, 2, 2);

  // we create a mesh material to work with
  // let material = new THREE.MeshNormalMaterial();
  //let material = new THREE.MeshBasicMaterial({color: BLUE});
  let material = new THREE.MeshBasicMaterial({color: BLUE, vertexColors: THREE.FaceColors});
  
  // we create an object combining the two.
  let cube = new THREE.Mesh(geometryFigure, material);

  //geometryFigure = new THREE.SphereGeometry(2, 6, 6);
  //material = new THREE.MeshNormalMaterial();
  //let sphere = new THREE.Mesh(geometryFigure, material);

  //sphere.position.x = 4;
  //scene.add(sphere);
  //cube.geometry.faces[1].color = new THREE.Color(RED);
  cube.geometry.faces[0].color = new THREE.Color(RED);
  cube.geometry.colorsNeedUpdate = true;

  // adding the cube to the  scene
  scene.add(cube);
  //cube.rotation.y = 1;
  //cube.rotation.z = 1;

  // camera positioning
  camera.position.z = 10;
  camera.lookAt(cube);
  console.log(camera);

  // first render of the scene
  renderer.render(scene, camera);

  render();


  // Animation function
  function render() {
    // this function works similarly to setInterval, but it works by using 
    // the natural framerate of the browser, normally 60frames per second
    requestAnimationFrame(render);
    //cube.scale.y += 0.005;
    //cube.scale.x += 0.001;
    cube.rotation.x += 0.05;
    cube.rotation.y += 0.02;
    renderer.render(scene, camera);

  }

  // Redimension of the window size
  window.addEventListener('resize', function() {
    // We update camera proportions ex 16/8 -> 0.5, its necessary
    // to update the camera for changes to apply
    camera.aspect = window.innerWidth / window.innerHeight;
    // changing renderer size
    renderer.setSize(window.innerWidth, window.innerHeight);
    // Update camera
    camera.updateProjectionMatrix();
  });

}



