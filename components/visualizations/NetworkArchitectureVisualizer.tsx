"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

interface Point {
  x: number
  y: number
}

interface Node {
  point: Point
  connections: number[]
  role: "validator" | "relay" | "client"
  label: string
}

export function NetworkArchitectureVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Generate a fixed network structure
  const generateNetwork = (): Node[] => {
    const points: Node[] = []
    const size = 600
    const margin = 50

    // Center point
    const centerX = size / 2
    const centerY = size / 2
    const radius = (size - 2 * margin) / 2

    // Add center node (client)
    points.push({
      point: { x: centerX, y: centerY },
      connections: [],
      role: "client",
      label: "Client Node",
    })

    // Add three main validator nodes at triangle corners
    for (let i = 0; i < 3; i++) {
      const angle = (i * 2 * Math.PI) / 3 - Math.PI / 2
      points.push({
        point: {
          x: centerX + radius * Math.cos(angle),
          y: centerY + radius * Math.sin(angle),
        },
        connections: [0], // Connect to center
        role: "validator",
        label: `Validator ${i + 1}`,
      })
    }

    // Add three relay nodes at midpoints
    for (let i = 0; i < 3; i++) {
      const angle1 = (i * 2 * Math.PI) / 3 - Math.PI / 2
      const angle2 = (((i + 1) % 3) * 2 * Math.PI) / 3 - Math.PI / 2

      points.push({
        point: {
          x: centerX + (radius * 0.6 * (Math.cos(angle1) + Math.cos(angle2))) / 2,
          y: centerY + (radius * 0.6 * (Math.sin(angle1) + Math.sin(angle2))) / 2,
        },
        connections: [0, i + 1, ((i + 1) % 3) + 1], // Connect to center and adjacent validators
        role: "relay",
        label: `Relay ${i + 1}`,
      })
    }

    // Connect validators to each other
    for (let i = 1; i <= 3; i++) {
      points[i].connections.push(((i - 1 + 1) % 3) + 1)
      points[i].connections.push(((i - 1 + 2) % 3) + 1)
    }

    // Connect center to all nodes
    points[0].connections = [1, 2, 3, 4, 5, 6]

    return points
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Generate network with fixed structure
    const network = generateNetwork()

    // Render function
    const render = () => {
      if (!ctx || !canvas) return

      // Set background
      ctx.fillStyle = "#111"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines
      ctx.strokeStyle = "#222"
      ctx.lineWidth = 0.5

      // Horizontal grid lines
      for (let y = 0; y < canvas.height; y += 30) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical grid lines
      for (let x = 0; x < canvas.width; x += 30) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw connections
      ctx.beginPath()
      network.forEach((node) => {
        node.connections.forEach((targetIdx) => {
          // Ensure target exists before drawing connection
          if (network[targetIdx]) {
            const target = network[targetIdx]
            ctx.moveTo(node.point.x, node.point.y)
            ctx.lineTo(target.point.x, target.point.y)
          }
        })
      })
      ctx.strokeStyle = "#444"
      ctx.lineWidth = 1.5
      ctx.stroke()

      // Draw nodes
      network.forEach((node) => {
        ctx.beginPath()

        // Node circle
        const nodeRadius = node.role === "client" ? 15 : 12
        ctx.arc(node.point.x, node.point.y, nodeRadius, 0, Math.PI * 2)

        // Color based on node role
        ctx.fillStyle = node.role === "validator" ? "#f59e0b" : node.role === "relay" ? "#10b981" : "#3b82f6"

        ctx.fill()
        ctx.strokeStyle = "#333"
        ctx.lineWidth = 1
        ctx.stroke()

        // Draw node label
        ctx.fillStyle = "#fff"
        ctx.font = "12px monospace"
        ctx.textAlign = "center"

        // Position label based on node position
        const labelY = node.role === "client" ? node.point.y + 35 : node.point.y + 25

        ctx.fillText(node.label, node.point.x, labelY)

        // Draw role below label
        ctx.fillStyle = node.role === "validator" ? "#f59e0b" : node.role === "relay" ? "#10b981" : "#3b82f6"
        ctx.font = "10px monospace"
        ctx.fillText(node.role.toUpperCase(), node.point.x, labelY + 15)
      })

      // Draw title
      ctx.fillStyle = "#fff"
      ctx.font = "bold 16px monospace"
      ctx.textAlign = "center"
      ctx.fillText("TRITCOIN NETWORK ARCHITECTURE", canvas.width / 2, 30)

      // Draw legend
      const legendX = 30
      let legendY = canvas.height - 90

      ctx.textAlign = "left"
      ctx.font = "bold 12px monospace"
      ctx.fillStyle = "#fff"
      ctx.fillText("NODE TYPES:", legendX, legendY)

      legendY += 20
      ctx.beginPath()
      ctx.arc(legendX + 10, legendY - 4, 8, 0, Math.PI * 2)
      ctx.fillStyle = "#f59e0b"
      ctx.fill()
      ctx.stroke()
      ctx.fillStyle = "#fff"
      ctx.font = "12px monospace"
      ctx.fillText("VALIDATOR: Transaction verification", legendX + 25, legendY)

      legendY += 20
      ctx.beginPath()
      ctx.arc(legendX + 10, legendY - 4, 8, 0, Math.PI * 2)
      ctx.fillStyle = "#10b981"
      ctx.fill()
      ctx.stroke()
      ctx.fillStyle = "#fff"
      ctx.fillText("RELAY: Network distribution", legendX + 25, legendY)

      legendY += 20
      ctx.beginPath()
      ctx.arc(legendX + 10, legendY - 4, 8, 0, Math.PI * 2)
      ctx.fillStyle = "#3b82f6"
      ctx.fill()
      ctx.stroke()
      ctx.fillStyle = "#fff"
      ctx.fillText("CLIENT: User interaction", legendX + 25, legendY)

      // Remove shadow effects
      ctx.shadowBlur = 0
      ctx.shadowColor = "transparent"
    }

    // Initial render
    render()
  }, [])

  return (
    <Card className="p-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="relative aspect-square w-full max-w-2xl mx-auto">
        <canvas ref={canvasRef} width={600} height={600} className="w-full h-full" />
      </div>
      <div className="mt-4 text-sm text-terminal-dim">
        <p>
          The TritCoin network architecture follows a Sierpinski-inspired pattern for optimal distribution and
          redundancy. This structure provides natural fault tolerance and quantum-resistant communication paths through
          its triangular topology.
        </p>
      </div>
    </Card>
  )
}

