'use client'

import { useEffect, useState } from 'react'

export default function ModelViewer({ url }: { url: string }) {
  const [View, setView] = useState<React.ComponentType<{ url: string }> | null>(null)

  useEffect(() => {
    import('./ModelViewerInner').then((mod) => {
      setView(() => mod.default)
    })
  }, [])

  if (!url) return null

  return (
    <div style={{ width: '100%', height: '500px' }} className="rounded-lg border bg-muted">
      {View ? <View url={url} /> : (
        <div className="flex items-center justify-center h-full text-muted-foreground">
          Loading 3D model...
        </div>
      )}
    </div>
  )
}
