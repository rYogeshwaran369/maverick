// import * as THREE from 'three';

// // Create a scene, camera, and renderer
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Load the Spline scene as a texture
// const loader = new THREE.TextureLoader();
// loader.load(
//   'https://prod.spline.design/M9LWAAuLQScUNpX6/scene.splinecode',
//   (texture) => {
//     const backgroundGeometry = new THREE.PlaneGeometry(2, 2, 0);
//     const backgroundMaterial = new THREE.MeshBasicMaterial({ map: texture });
//     const backgroundMesh = new THREE.Mesh(backgroundGeometry, backgroundMaterial);

//     // Rotate the background plane so it faces the camera
//     backgroundMesh.rotation.x = Math.PI;

//     scene.add(backgroundMesh);
//   }
// );

// // Set up camera position
// camera.position.z = 5;

// // Animation loop
// const animate = () => {
//   requestAnimationFrame(animate);

//   // Add any animations or updates to your scene here

//   renderer.render(scene, camera);
// };

// animate();

import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <Spline scene="https://prod.spline.design/u9DMv-eA3Hs8-PAc/scene.splinecode" />
  );
}
