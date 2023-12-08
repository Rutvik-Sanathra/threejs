import { useEffect, useRef } from "react";
import * as THREE from "three";
function Example4() {
  const refContainer = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // camera.position.z = 25;  => TorusGeometry
    camera.position.z = 50;

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);

      //* LIGHT
      const ambientLight = new THREE.AmbientLight("white",3);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight("yellow",1,100)
      pointLight.position.set(6,0,3)
      scene.add(pointLight);

    const lightGeometry = new THREE.SphereGeometry(1, 32, 16);
    const lightMesh = new THREE.MeshStandardMaterial({ color: "red" });
    const lightSphere = new THREE.Mesh(lightGeometry, lightMesh);
    lightSphere.position.set(6, 0, 3);
    scene.add(lightSphere);

      renderer.render(scene, camera);
  }, []);

  return <div ref={refContainer}></div>;
}

export default Example4;
