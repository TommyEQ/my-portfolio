'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'
import { Suspense } from 'react'

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} />
}

export default function ModelViewer({ url }: { url: string }) {
  if (!url) return null

  return (
    <div style={{ width: '100%', height: '500px' }} className="rounded-lg border bg-muted">
      <Canvas camera={{ position: [3, 3, 3], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model url={url} />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={1.5} enableZoom enablePan={false} />
      </Canvas>
    </div>
  )
}
