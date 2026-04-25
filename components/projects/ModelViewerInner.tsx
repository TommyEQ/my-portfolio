'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'
import { Suspense } from 'react'

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} scale={1} />
}

export default function ModelViewerInner({ url }: { url: string }) {
  return (
    <Canvas camera={{ position: [3, 3, 3], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model url={url} />
        <Environment preset="studio" />
      </Suspense>
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={1.5}
      />
    </Canvas>
  )
}
