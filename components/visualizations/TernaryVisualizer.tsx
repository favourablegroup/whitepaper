"use client"

import { useEffect, useRef, useCallback } from "react"

interface TernaryVisualizerProps {
  size?: number
  depth?: number
}

export function TernaryVisualizer({ size = 500, depth = 6 }: TernaryVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const startTimeRef = useRef<number>(Date.now())

  const drawSierpinskiTriangle = useCallback(
    (ctx: CanvasRenderingContext2D, x: number, y: number, sideLength: number, level: number) => {
      if (level === 0) {
        // Calculate height of equilateral triangle
        const height = (sideLength * Math.sqrt(3)) / 2

        // Calculate vertices
        const x1 = x - sideLength / 2 // Left vertex
        const x2 = x + sideLength / 2 // Right vertex
        const y1 = y + height / 2 // Bottom vertices y
        const y2 = y - height / 2 // Top vertex y

        // Draw single triangle
        ctx.beginPath()
        ctx.moveTo(x, y2) // Top vertex
        ctx.lineTo(x1, y1) // Bottom left
        ctx.lineTo(x2, y1) // Bottom right
        ctx.closePath()
        ctx.fill()
        return
      }

      // Calculate new side length for sub-triangles
      const newSideLength = sideLength / 2
      const height = (sideLength * Math.sqrt(3)) / 2

      // Draw three smaller triangles to form Sierpinski pattern
      // Top triangle
      drawSierpinskiTriangle(ctx, x, y - height / 4, newSideLength, level - 1)
      // Bottom left triangle
      drawSierpinskiTriangle(ctx, x - sideLength / 4, y + height / 4, newSideLength, level - 1)
      // Bottom right triangle
      drawSierpinskiTriangle(ctx, x + sideLength / 4, y + height / 4, newSideLength, level - 1)
    },
    [],
  )

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const now = Date.now()
    const elapsed = now - startTimeRef.current
    const glowIntensity = Math.sin(elapsed / 1000) * 0.5 + 0.5 // Oscillates between 0 and 1

    // Clear canvas
    ctx.clearRect(0, 0, size, size)

    // Draw background
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
    ctx.fillRect(0, 0, size, size)

    // Set up shadow for glow effect
    ctx.shadowBlur = 25 + glowIntensity * 15
    ctx.shadowColor = "#FFD700"
    ctx.fillStyle = `rgba(255, 215, 0, ${0.8 + glowIntensity * 0.2})`

    // Calculate triangle size to fit canvas with padding
    const triangleSize = size * 0.8

    // Draw centered Sierpinski triangle
    drawSierpinskiTriangle(ctx, size / 2, size / 2, triangleSize, depth)

    // Request next frame
    animationFrameRef.current = requestAnimationFrame(animate)
  }, [size, depth, drawSierpinskiTriangle])

  useEffect(() => {
    startTimeRef.current = Date.now()
    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [animate])

  return (
    <div className="flex flex-col items-center my-8">
      <div className="relative backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-8 terminal-glow">
        <canvas
          ref={canvasRef}
          width={size}
          height={size}
          className="rounded transition-all duration-500"
          style={{
            filter: "contrast(1.1) brightness(1.1)",
          }}
        />
        <div className="absolute bottom-4 right-4 text-xs text-terminal-dim font-mono bg-black/50 px-2 py-1 rounded">
          Sierpinski Triangle L-System
        </div>
      </div>
    </div>
  )
}

