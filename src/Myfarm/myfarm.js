import * as THREE from 'three' ;
import { PLYLoader } from '../../node_modules/three/examples/jsm/loaders/PLYLoader' ;
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls' ;
import Stats from '../../node_modules/three/examples/jsm/libs/stats.module' ;
import { useRef } from 'react';
import { Loader } from 'three';

const Myfarm = () => {


var scene = new THREE.Scene();
var WIDTH, HIGHT = 650
const element = useRef(null)
scene.background = new THREE.Color(0xFFFFFF) ;

var camera = new THREE.PerspectiveCamera( 3, WIDTH/HIGHT, 0.1, 100 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( WIDTH, HIGHT );
var light = new THREE.SpotLight();
light.position.set(20, 20, 20)
scene.add(light);

element.current.appendChild( renderer.domElement );

camera.position.z = 5;


const controls = new OrbitControls(camera, renderer.domElement) ;

Loader.load('/result1.ply', function(geometry){

  geometry.computeVertexNormals() ;
  
  const material = new THREE.MeshPhysicalMaterial({
    color: 0x3e2723,
  
    metalness: .25,
    roughness: 0.1,
    transparent: true,
    transmission: 1.0,
    side: THREE.DoubleSide,
    clearcoat: 1.0,
    clearcoatRoughness: .25
});

  const mesh = new THREE.Mesh(geometry, material) ; 

  mesh.rotation.x = 0.01 ;
  mesh.rotation.y = 0.01 ;

  scene.add(mesh) ;

  },(xhr) => {
     console.log( (xhr.loaded / xhr.total * 100) + '% loaded')
  },
  (error) => {
      console.log(error);
  }
) ; 
const stats = Stats() ;

function animate() {
  requestAnimationFrame( animate );
  stats.update() ;
  render() ;
};

function render() {
  renderer.render( scene, camera );
}

animate();

}

export default Myfarm;