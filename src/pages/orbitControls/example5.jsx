import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
const Example5 = () => {
  const refContainer = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: "red" });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
    var animate = function () {
        requestAnimationFrame(animate);
        controls.update();
      //   cube.position.x += 0.01;
      //   cube.position.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return <div ref={refContainer}></div>;
};

export default Example5;
