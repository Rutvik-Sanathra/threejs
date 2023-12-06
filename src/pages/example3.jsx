import { useEffect, useRef } from "react";
import * as THREE from "three";
function Example3() {
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
    camera.position.z = 5;

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);
    // var geometry = new THREE.CircleGeometry( 2, 23,5);
    var geometry = new THREE.SphereGeometry( 2, 23,5);
    // const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
    // var geometry = new THREE.CylinderGeometry(5, 5, 20, 32);
    // var geometry = new THREE.ConeGeometry(1,3);
    // var geometry = new THREE.CapsuleGeometry(1, 3, 2, 8);
    var material = new THREE.MeshBasicMaterial({ color: "red" });
    var cube = new THREE.Line(geometry, material);
    scene.add(cube);
    let q = 0;
    var animate = function () {
      requestAnimationFrame(animate);
      cube.position.x = 5 * Math.sin((q += 0.01));
    //   cube.position.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return <div ref={refContainer}></div>;
}

export default Example3;
