"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface Node {
  id: string
  value: number
  connections: string[]
}

interface NetworkGraphProps {
  nodes: Node[]
  width?: number
  height?: number
  theme?: "light" | "dark"
}

export const NetworkGraph: React.FC<NetworkGraphProps> = ({ nodes, width = 800, height = 600, theme = "light" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Theme colors
    const colors =
      theme === "light"
        ? {
            node: "#3A7CA5",
            connection: "#81C3D7",
            text: "#16425B",
          }
        : {
            node: "#81C3D7",
            connection: "#2F6690",
            text: "#F9F9F9",
          }

    // Draw network
    const nodePositions = new Map<string, { x: number; y: number }>()

    // Calculate node positions
    nodes.forEach((node, i) => {
      const angle = (2 * Math.PI * i) / nodes.length
      const radius = Math.min(width, height) * 0.4
      const x = width / 2 + radius * Math.cos(angle)
      const y = height / 2 + radius * Math.sin(angle)
      nodePositions.set(node.id, { x, y })
    })

    // Draw connections
    ctx.strokeStyle = colors.connection
    ctx.lineWidth = 1
    nodes.forEach((node) => {
      const pos = nodePositions.get(node.id)
      if (!pos) return

      node.connections.forEach((targetId) => {
        const targetPos = nodePositions.get(targetId)
        if (!targetPos) return

        ctx.beginPath()
        ctx.moveTo(pos.x, pos.y)
        ctx.lineTo(targetPos.x, targetPos.y)
        ctx.stroke()
      })
    })

    // Draw nodes
    nodes.forEach((node) => {
      const pos = nodePositions.get(node.id)
      if (!pos) return

      // Node circle
      ctx.fillStyle = colors.node
      ctx.beginPath()
      ctx.arc(pos.x, pos.y, 10, 0, Math.PI * 2)
      ctx.fill()

      // Node label
      ctx.fillStyle = colors.text
      ctx.font = "12px Inter"
      ctx.textAlign = "center"
      ctx.fillText(node.id, pos.x, pos.y + 25)
    })
  }, [nodes, width, height, theme])

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-terminal-code-bg/10 rounded-lg border border-terminal-border/30 terminal-glow">
      <canvas ref={canvasRef} width={width} height={height} className="rounded-lg" />
      <div className="flex gap-4 text-terminal-dim">
        <span>● Nodes</span>
        <span>― Connections</span>
      </div>
    </div>
  )
}

