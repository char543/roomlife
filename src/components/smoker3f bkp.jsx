import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Object3D } from "three";
import { useTexture } from "@react-three/drei";

function Smoke() {
  const tempObject = useMemo(() => new Object3D(), []);
  const ref = useRef();
  const texture = useTexture(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
  );

  const particles = useMemo(() => {
    const cloudParticles = [];
    for (let p = 0; p < 150; p++) {
      //   const positionX = Math.random() * 800 - 400;
      //   const positionZ = Math.random() * 500 - 500;
      //   const rotationZ = Math.random() * 2 * Math.PI;
      const positionX = Math.random() * 500 - 250;
      const positionZ = Math.random() * 500 - 250;
      const rotationZ = Math.random() * 20 * Math.PI;

      cloudParticles.push({
        positionX,
        positionZ,
        rotationZ,
      });
    }
    return cloudParticles;
  }, []);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { positionX, positionZ, rotationZ } = particle;
      tempObject.position.set(positionX, 0, positionZ);
      tempObject.rotation.set(0, 0, rotationZ);
      tempObject.updateMatrix();
      ref.current.setMatrixAt(i, tempObject.matrix);
    });
    particles.forEach((particle) => (particle.rotationZ -= 0.001));
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[null, null, 40]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshLambertMaterial
        attach="material"
        map={texture}
        depthWrite={false}
        transparent
        opacity={0.55}
      />
    </instancedMesh>
  );
}

//revolving dibba for test
// function Dibba() {
//   const mesh = useRef();
//   useFrame(
//     () =>
//       (mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += 0.01)
//   );
//   return (
//     <mesh ref={mesh}>
//       <boxBufferGeometry attach="geometry" args={[20, 20, 20]} />
//       <meshLambertMaterial attach="material" />
//     </mesh>
//   );
// }

function CanvasWrap() {
  return (
    <>
      <Canvas camera={{ fov: 90, position: [0, 0, 50], far: 6000 }}>
        <directionalLight
          color="#ff1100"
          intensity={1.2}
          position={[0, 0, 200]}
        />
        <directionalLight
          color="#ff1100"
          intensity={0.2}
          position={[0, 0, -200]}
          rotation={[1, 0, 0]}
        />
        <ambientLight color="#555555" intensity={0.5} />
        <pointLight
          color="#d40027"
          intensity={30}
          position={[-200, 0, -40]}
          distance={500}
          decay={1.5}
        />
        <pointLight
          color="#d8547e"
          intensity={30}
          position={[100, 0, -40]}
          distance={500}
          decay={1}
        />
        <pointLight
          color="#ff0048"
          intensity={30}
          position={[300, 0, -50]}
          distance={500}
          decay={1.5}
        />
        <Suspense fallback={null}>
          <Smoke />
        </Suspense>
      </Canvas>
    </>
  );
}

export default CanvasWrap;
