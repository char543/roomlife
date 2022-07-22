import React, { useRef, useState } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

function Smoke(props) {
  useFrame(({ clock }) => {
    const a = clock.getDelta();
    console.log(a);
  });
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  // Define external texture to load
  const texture = useTexture(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
  );
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
      <ambientLight intensity={0.35} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.2 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
        position={[0, 0, 0]}
      >
        <boxGeometry args={[3, 3, 3]} />
        <meshLambertMaterial map={texture} wireframe="false" color="#bc1dcd" />
      </mesh>
    </>
  );
}

function CanvasWrap() {
  return (
    <Canvas>
      <Smoke />
    </Canvas>
  );
}

export default CanvasWrap;
