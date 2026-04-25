'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Stage } from '@react-three/drei'
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
        <Suspense fallback={null}>
          <Stage environment="studio" intensity={0.5}>
            <Model url={url} />
          </Stage>
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
