'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'
import { Suspense, Component, ReactNode } from 'react'

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
  return <primitive object={scene} />
}

export default function ModelViewer({ url }: { url: string }) {
  if (!url) return null

  return (
    <ErrorBoundary fallback={
      <div className="flex items-center justify-center rounded-lg border bg-muted text-muted-foreground" style={{ width: '100%', height: '500px' }}>
        Could not load 3D model
      </div>
    }>
      <div style={{ width: '100%', height: '500px' }} className="rounded-lg border bg-muted">
        <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={null}>
            <Model url={url} />
            <Environment preset="studio" />
          </Suspense>
          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={0.5}
            enableZoom={true}
            enablePan={false}
            minDistance={3}
            maxDistance={15}
          />
        </Canvas>
      </div>
    </ErrorBoundary>
  )
}
