"use strict";
//Colores
const RED =  "#FF0000";
const BLUE = "#1a1aff";

window.onload = init;

function init() {
  
  // Creamos la escena.
  let scene = new THREE.Scene();

  // Creamos una cámara, con un FOV(Field of view) de 75 grados, centrada en el centro,
  // con una distancia de renderizado solo a partir de 1 unidad de la camara,
  // con una distancia de renderizado de hasta 1000 unidades de distancia a la camara
  let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 1000);

  // El Rendered de THREE, es heredado de webgl.
  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  let controls = new THREE.OrbitControls( camera, renderer.domElement );
  
  let xAxis = new THREE.BoxGeometry(50, 1, 1);
  let yAxis = new THREE.BoxGeometry(1, 50, 1);
  let zAxis = new THREE.BoxGeometry(1, 1, 50);
  let ground = new THREE.BoxGeometry(50, 1, 50);
  //geometryFigure.setSize()
  let texture = new THREE.TextureLoader().load('../img/grass.jpg');
  let materialx = new THREE.MeshBasicMaterial({color: RED});
  let materialy = new THREE.MeshBasicMaterial({color: BLUE});
  let materialz = new THREE.MeshBasicMaterial();
  let groundMaterial = new THREE.MeshPhongMaterial({map: texture});
  //material.bumpMap   = new THREE.TextureLoader().load('../img/face.jpg');   
  //material.bumpScale = 0.1;

  let x = new THREE.Mesh(xAxis, materialx);
  let y = new THREE.Mesh(yAxis, materialy);
  let z = new THREE.Mesh(zAxis, materialz);
  let groundMesh = new THREE.Mesh(ground, groundMaterial);
  scene.add(x);
  scene.add(y);
  scene.add(z);
  scene.add(groundMesh);
  groundMesh.position.y = -0.5;


  camera.position.x = 0;
  camera.position.y = 3;
  camera.position.z = 10;
  camera.lookAt(scene)
  controls.update();
  controls.target.set(0,0,0);

  let Xmovement = 0.05;
  let Zmovement = -0.05;
  let rotationspeed = Math.PI / 400;
  render();
  let light = new THREE.DirectionalLight( 0xffffff );
  light.position.set( 0, 1, 1 ).normalize();
  scene.add(light);

  function render() {
    requestAnimationFrame(render);
    if(camera.position.x >= 10) {
      Xmovement = -0.05;
    } else if(camera.position.x <= -10) {
      Xmovement = 0.05;
    }
    if(camera.position.z >= 10) {
      Zmovement = -0.05;
    } else if(camera.position.z <= -10) {
      Zmovement = 0.05;
    }

    //console.log("x: ", camera.position.x, "z:", camera.position.z);

    // movimiento en rombos
 
    //camera.position.x += Xmovement;
    //camera.position.z += Zmovement;

    //camera.rotation.y += rotationspeed;
    //controls.update();
    //controls.target.set(0,0,0);

    renderer.render(scene, camera);

  }


  window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.updateProjectionMatrix();

  });

}