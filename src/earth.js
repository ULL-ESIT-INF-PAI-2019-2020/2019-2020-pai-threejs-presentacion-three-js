"use strict;"
const INSTRUCTIONS = "Para mover la cámara se hace uso únicamente del ratón. " +
                     "\n\nSi quieres rotar la Tierra se tiene que mantener pulsado " +
                     "el click izquierdo del ratón y luego mueves el ratón." +
                     "\n\nSi quieres cambiar la tierra de posición, lo que tienes que " +
                     "hacer es mantener pulsado el click derecho del ratón y moverlo " +
                     "\n\nPara hacer zoom, tienes que usar la rueda del ratón";
function init() {
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // creamos la esfera
  let sphere = new THREE.SphereGeometry(2, 32, 32);
  let earthTexture = new THREE.TextureLoader().load('../img/earth_texture.png');
  let material = new THREE.MeshPhongMaterial({map: earthTexture});
  let earthMesh = new THREE.Mesh(sphere, material);

  // Añadimos luz
  let light = new THREE.DirectionalLight( 0xffffff );
  light.position.set( 0, 1, 1 ).normalize();
  
  // Posicionamos la tierra y la camara
  earthMesh.position.set(0,0,0);
  camera.position.z = 5;
  camera.position.x = 0;
  camera.position.y = 2.9;

  // Añadimos relieve al planeta
  material.bumpMap = new THREE.TextureLoader().load('../img/earth_height.png');
  material.bumpScale = 0.05;

  // Añadimos las nubes
  let cloudSphere = new THREE.SphereGeometry(2, 32 ,32);
  let clouds = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load('../img/cloud_texture.png'),
    side: THREE.DoubleSide,
    opacity: 0.3,
    transparent: true,
    depthWriter: false,
    specularMap: new THREE.TextureLoader().load('../img/cloud_transparency.png'),
    specular: new THREE.Color('grey')
  });
  let cloudMesh = new THREE.Mesh(cloudSphere, clouds);
  earthMesh.add(cloudMesh);

  //Control de la cámara
  let controls = new THREE.OrbitControls(camera);
  let lightControls = new THREE.OrbitControls(light);
  controls.addEventListener('change', render);
  controls.autorotate = true;
  lightControls.autorotate = true;

  // Añadimos brillo al mar
  material.specularMap = new THREE.TextureLoader().load('../img/earth_reflectivity.png');
  material.specular = new THREE.Color('grey');

  // Metemos la esfera y la luz en la escena
  scene.add(earthMesh);
  scene.add(light);
  camera.lookAt(scene);
  camera.rotation.x = 5.8;
  render();

  //función render
  function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }
}

function showInstructions() {
  let x = document.getElementById("info").style;
  if (x.display === "none" || x.display === '') {
    x.display = "block";
  } else {
    x.display = "none";
  }
}