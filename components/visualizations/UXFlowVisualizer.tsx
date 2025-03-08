"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface FlowNode {
  id: string
  label: string
  type: "start" | "end" | "action" | "decision" | "state"
  x?: number
  y?: number
}

interface FlowConnection {
  from: string
  to: string
  label?: string
}

interface UXFlowVisualizerProps {
  nodes: FlowNode[]
  connections: FlowConnection[]
  width?: number
  height?: number
  theme?: "light" | "dark"
}

export const UXFlowVisualizer: React.FC<UXFlowVisualizerProps> = ({
  nodes,
  connections,
  width = 800,
  height = 600,
  theme = "light",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [selectedNode, setSelectedNode] = useState<FlowNode | null>(null)
  const [hoveredNode, setHoveredNode] = useState<FlowNode | null>(null)

  const colors =
    theme === "light"
      ? {
          start: "#4CAF50",
          end: "#F44336",
          action: "#3A7CA5",
          decision: "#FFC107",
          state: "#81C3D7",
          connection: "#2F6690",
          text: "#16425B",
          background: "#FFFFFF",
        }
      : {
          start: "#81C3D7",
          end: "#F44336",
          action: "#3A7CA5",
          decision: "#FFC107",
          state: "#2F6690",
          connection: "#81C3D7",
          text: "#F9F9F9",
          background: "#16425B",
        }

  const calculateNodePositions = () => {
    const levelMap = new Map<string, number>()
    const visited = new Set<string>()

    const findLevel = (nodeId: string, level: number) => {
      if (visited.has(nodeId)) return
      visited.add(nodeId)
      levelMap.set(nodeId, Math.max(level, levelMap.get(nodeId) || 0))

      connections.filter((conn) => conn.from === nodeId).forEach((conn) => findLevel(conn.to, level + 1))
    }

    // Find start nodes
    const startNodes = nodes.filter((node) => node.type === "start")
    startNodes.forEach((node) => findLevel(node.id, 0))

    // Calculate x and y positions
    const levels = Array.from(levelMap.entries()).reduce((acc, [id, level]) => {
      if (!acc[level]) acc[level] = []
      acc[level].push(id)
      return acc
    }, [] as string[][])

    const nodeSpacing = width / (levels.length || 1)
    const verticalSpacing = height / (Math.max(...levels.map((l) => l.length)) || 1)

    levels.forEach((levelNodes, levelIndex) => {
      levelNodes.forEach((nodeId, nodeIndex) => {
        const node = nodes.find((n) => n.id === nodeId)
        if (node) {
          node.x = nodeSpacing * (levelIndex + 0.5)
          node.y = verticalSpacing * (nodeIndex + 0.5)
        }
      })
    })
  }

  const drawNode = (ctx: CanvasRenderingContext2D, node: FlowNode, isSelected: boolean, isHovered: boolean) => {
    if (node.x === undefined || node.y === undefined) return

    ctx.save()
    const nodeSize = isSelected || isHovered ? 35 : 30

    // Draw node shape
    ctx.fillStyle = colors[node.type]
    ctx.strokeStyle = isSelected ? "#000000" : colors[node.type]
    ctx.lineWidth = isSelected ? 2 : 1

    switch (node.type) {
      case "decision":
        ctx.beginPath()
        ctx.moveTo(node.x, node.y - nodeSize)
        ctx.lineTo(node.x + nodeSize, node.y)
        ctx.lineTo(node.x, node.y + nodeSize)
        ctx.lineTo(node.x - nodeSize, node.y)
        ctx.closePath()
        break
      case "start":
      case "end":
        ctx.beginPath()
        ctx.ellipse(node.x, node.y, nodeSize, nodeSize * 0.7, 0, 0, Math.PI * 2)
        ctx.closePath()
        break
      default:
        ctx.beginPath()
        ctx.roundRect(node.x - nodeSize, node.y - nodeSize, nodeSize * 2, nodeSize * 2, 8)
        break
    }

    ctx.fill()
    ctx.stroke()

    // Draw label
    ctx.fillStyle = colors.text
    ctx.font = "12px Inter"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(node.label, node.x, node.y)

    ctx.restore()
  }

  const drawConnection = (ctx: CanvasRenderingContext2D, from: FlowNode, to: FlowNode, label?: string) => {
    if (!from.x || !from.y || !to.x || !to.y) return

    ctx.save()
    ctx.strokeStyle = colors.connection
    ctx.lineWidth = 1

    // Draw arrow
    const angle = Math.atan2(to.y - from.y, to.x - from.x)
    const distance = Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2))
    const arrowSize = 10

    ctx.beginPath()
    ctx.moveTo(from.x, from.y)
    ctx.lineTo(to.x, to.y)
    ctx.stroke()

    // Arrow head
    ctx.translate(to.x, to.y)
    ctx.rotate(angle)
    ctx.beginPath()
    ctx.moveTo(-arrowSize, -arrowSize / 2)
    ctx.lineTo(0, 0)
    ctx.lineTo(-arrowSize, arrowSize / 2)
    ctx.stroke()

    // Connection label
    if (label) {
      ctx.rotate(-angle)
      ctx.fillStyle = colors.text
      ctx.font = "12px Inter"
      ctx.textAlign = "center"
      ctx.textBaseline = "bottom"
      ctx.fillText(label, 0, -10)
    }

    ctx.restore()
  }

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const clickedNode = nodes.find((node) => {
      if (!node.x || !node.y) return false
      const distance = Math.sqrt(Math.pow(x - node.x, 2) + Math.pow(y - node.y, 2))
      return distance < 35
    })

    setSelectedNode(clickedNode || null)
  }

  const handleCanvasMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const hoveredNode = nodes.find((node) => {
      if (!node.x || !node.y) return false
      const distance = Math.sqrt(Math.pow(x - node.x, 2) + Math.pow(y - node.y, 2))
      return distance < 35
    })

    setHoveredNode(hoveredNode || null)
  }

  useEffect(() => {
    calculateNodePositions()

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, width, height)

    // Draw connections
    connections.forEach((connection) => {
      const fromNode = nodes.find((n) => n.id === connection.from)
      const toNode = nodes.find((n) => n.id === connection.to)
      if (fromNode && toNode) {
        drawConnection(ctx, fromNode, toNode, connection.label)
      }
    })

    // Draw nodes
    nodes.forEach((node) => {
      drawNode(ctx, node, node === selectedNode, node === hoveredNode)
    })
  }, [nodes, connections, selectedNode, hoveredNode, width, height, theme])

  return (
    <div className="flex flex-col gap-8 p-4 bg-terminal-code-bg/10 rounded-lg border border-terminal-border/30 terminal-glow">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onClick={handleCanvasClick}
        onMouseMove={handleCanvasMouseMove}
        className="rounded-lg cursor-pointer"
      />

      {selectedNode && (
        <div className="p-6 rounded-lg bg-terminal-code-bg/20 border border-terminal-border/30">
          <h3 className="text-lg font-bold text-terminal-accent mb-2 flex items-center">
            {selectedNode.label}
            <span
              className={`ml-2 px-2 py-1 rounded-md text-xs ${
                selectedNode.type === "start"
                  ? "bg-green-500 text-white"
                  : selectedNode.type === "end"
                    ? "bg-red-500 text-white"
                    : selectedNode.type === "action"
                      ? "bg-blue-500 text-white"
                      : selectedNode.type === "decision"
                        ? "bg-yellow-500 text-black"
                        : "bg-gray-500 text-white"
              }`}
            >
              {selectedNode.type}
            </span>
          </h3>
          <div>
            Connected to:{" "}
            {connections
              .filter((conn) => conn.from === selectedNode.id || conn.to === selectedNode.id)
              .map((conn) => {
                const connectedNode = nodes.find((n) => n.id === (conn.from === selectedNode.id ? conn.to : conn.from))
                return connectedNode?.label
              })
              .join(", ")}
          </div>
        </div>
      )}
    </div>
  )
}

