'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, Center } from '@react-three/drei'
import { Suspense, Component, ReactNode, useState } from 'react'

class ErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  return (
    <Center>
      <primitive object={scene} scale={0.01} />
    </Center>
  )
}

export default function ModelViewer({ url }: { url: string }) {
  const [interacted, setInteracted] = useState(false)

  if (!url) return null

  return (
    <ErrorBoundary fallback={
      <div className="flex items-center justify-center rounded-lg border bg-muted text-muted-foreground" style={{ width: '100%', height: '500px' }}>
        Could not load 3D model
      </div>
    }>
      <div style={{ width: '100%', height: '500px', position: 'relative' }} className="rounded-lg border bg-muted">
        {!interacted && (
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10,
              pointerEvents: 'none',
            }}
            className="flex items-center gap-2 bg-black/50 text-white text-sm px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <span>🖱️ Drag to rotate · Scroll to zoom</span>
          </div>
        )}
        <Canvas
          camera={{ position: [0, 2, 5], fov: 50 }}
          onPointerDown={() => setInteracted(true)}
        >
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={null}>
            <Model url={url} />
            <Environment preset="studio" />
          </Suspense>
          <OrbitControls
            autoRotate={false}
            enableZoom={true}
            enablePan={false}
            minDistance={2}
            maxDistance={10}
          />
        </Canvas>
      </div>
    </ErrorBoundary>
  )
}
