import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Object3D } from 'three'
import { useTexture } from '@react-three/drei'

function Smoke() {
  const tempObject = useMemo(() => new Object3D(), [])
  const ref = useRef()
  const texture = useTexture(
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png',
  )

  const particles = useMemo(() => {
    const cloudParticles = []
    for (let p = 0; p < 150; p++) {
      const positionX = Math.random() * 500 - 250
      const positionZ = Math.random() * 500 - 250
      const rotationZ = Math.random() * 1000 - 100
      cloudParticles.push({
        positionX,
        positionZ,
        rotationZ,
      })
    }
    return cloudParticles
  }, [])

  useFrame(state => {
    particles.forEach((particle, i) => {
      let { positionX, positionZ, rotationZ } = particle
      tempObject.position.set(positionX, 0, positionZ)
      tempObject.rotation.set(0, 0, rotationZ)
      tempObject.updateMatrix()
      ref.current.setMatrixAt(i, tempObject.matrix)
    })
    particles.forEach(particle => (particle.rotationZ -= 0.001))
    ref.current.instanceMatrix.needsUpdate = true
  })

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
  )
}

function CanvasWrap() {
  return (
    <>
      <div className="fixed top-0 left-0 z-0 h-screen w-screen flex justify-center items-center">
        <Canvas
          onCreated={state => state.gl.setClearColor('black')}
          camera={{ fov: 105, position: [0, 0, 300], far: 6000 }}
        >
          <directionalLight
            color="#00dddd"
            intensity={0.25}
            position={[-1, 0, 1]}
          />
          <Suspense fallback={null}>
            <Smoke opacity="0.02" />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}

export default CanvasWrap
