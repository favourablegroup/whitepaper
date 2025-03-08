"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface Milestone {
  id: string
  title: string
  description: string
  quarter: string
  status: "completed" | "in-progress" | "planned"
  dependencies?: string[]
  features: string[]
}

interface RoadmapVisualizerProps {
  milestones: Milestone[]
  width?: number
  height?: number
  theme?: "light" | "dark"
}

export const RoadmapVisualizer: React.FC<RoadmapVisualizerProps> = ({
  milestones,
  width = 800,
  height = 600,
  theme = "light",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null)
  const [selectedQuarter, setSelectedQuarter] = useState<string | null>(null)

  const colors =
    theme === "light"
      ? {
          completed: "#4CAF50",
          "in-progress": "#FFC107",
          planned: "#81C3D7",
          connection: "#2F6690",
          text: "#16425B",
          background: "#FFFFFF",
        }
      : {
          completed: "#81C3D7",
          "in-progress": "#FFC107",
          planned: "#2F6690",
          connection: "#81C3D7",
          text: "#F9F9F9",
          background: "#16425B",
        }

  const quarters = Array.from(new Set(milestones.map((m) => m.quarter))).sort()

  const drawRoadmap = (ctx: CanvasRenderingContext2D, filteredMilestones: Milestone[]) => {
    ctx.clearRect(0, 0, width, height)

    const nodeRadius = 30
    const verticalSpacing = height / (filteredMilestones.length + 1)
    const horizontalCenter = width / 2

    // Draw connections first
    ctx.strokeStyle = colors.connection
    ctx.lineWidth = 2
    filteredMilestones.forEach((milestone, index) => {
      const y = verticalSpacing * (index + 1)

      if (milestone.dependencies) {
        milestone.dependencies.forEach((depId) => {
          const depIndex = filteredMilestones.findIndex((m) => m.id === depId)
          if (depIndex !== -1) {
            const depY = verticalSpacing * (depIndex + 1)

            // Draw curved connection
            ctx.beginPath()
            ctx.moveTo(horizontalCenter, y)
            ctx.quadraticCurveTo(horizontalCenter + 100, (y + depY) / 2, horizontalCenter, depY)
            ctx.stroke()

            // Draw arrow
            const angle = Math.atan2(y - depY, 0)
            const arrowSize = 10

            ctx.save()
            ctx.translate(horizontalCenter, y)
            ctx.rotate(angle)
            ctx.beginPath()
            ctx.moveTo(-arrowSize, -arrowSize / 2)
            ctx.lineTo(0, 0)
            ctx.lineTo(-arrowSize, arrowSize / 2)
            ctx.stroke()
            ctx.restore()
          }
        })
      }
    })

    // Draw milestone nodes
    filteredMilestones.forEach((milestone, index) => {
      const y = verticalSpacing * (index + 1)

      // Draw node
      ctx.fillStyle = colors[milestone.status]
      ctx.beginPath()
      ctx.arc(horizontalCenter, y, nodeRadius, 0, Math.PI * 2)
      ctx.fill()

      // Draw text
      ctx.fillStyle = colors.text
      ctx.font = "12px Inter"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      // Draw milestone title
      ctx.fillText(milestone.title, horizontalCenter, y)

      // Draw quarter
      ctx.font = "10px Inter"
      ctx.fillText(milestone.quarter, horizontalCenter, y + nodeRadius + 15)

      // Draw status indicator
      const statusDotRadius = 5
      ctx.fillStyle = colors[milestone.status]
      ctx.beginPath()
      ctx.arc(
        horizontalCenter + nodeRadius + statusDotRadius,
        y - nodeRadius + statusDotRadius,
        statusDotRadius,
        0,
        Math.PI * 2,
      )
      ctx.fill()
    })
  }

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const verticalSpacing = height / (milestones.length + 1)
    const horizontalCenter = width / 2
    const nodeRadius = 30

    const clickedMilestone = milestones.find((milestone, index) => {
      const milestoneY = verticalSpacing * (index + 1)
      const distance = Math.sqrt(Math.pow(x - horizontalCenter, 2) + Math.pow(y - milestoneY, 2))
      return distance < nodeRadius
    })

    setSelectedMilestone(clickedMilestone || null)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const filteredMilestones = selectedQuarter ? milestones.filter((m) => m.quarter === selectedQuarter) : milestones

    drawRoadmap(ctx, filteredMilestones)
  }, [milestones, selectedQuarter, width, height, theme])

  return (
    <div className="flex flex-col gap-8 p-4 bg-terminal-code-bg/10 rounded-lg border border-terminal-border/30 terminal-glow">
      <div className="flex gap-4 flex-wrap">
        <button
          className={`px-4 py-2 rounded-md ${selectedQuarter === null ? "bg-terminal-accent text-white" : "bg-terminal-code-bg/30 text-terminal-dim"}`}
          onClick={() => setSelectedQuarter(null)}
        >
          All
        </button>
        {quarters.map((quarter) => (
          <button
            key={quarter}
            className={`px-4 py-2 rounded-md ${selectedQuarter === quarter ? "bg-terminal-accent text-white" : "bg-terminal-code-bg/30 text-terminal-dim"}`}
            onClick={() => setSelectedQuarter(quarter)}
          >
            {quarter}
          </button>
        ))}
      </div>

      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onClick={handleCanvasClick}
        className="rounded-lg cursor-pointer"
      />

      {selectedMilestone && (
        <div className="p-6 rounded-lg bg-terminal-code-bg/20 border border-terminal-border/30">
          <h3 className="text-xl font-bold text-terminal-accent mb-2 flex items-center justify-between">
            {selectedMilestone.title}
            <span
              className={`px-3 py-1 rounded-md text-sm ${
                selectedMilestone.status === "completed"
                  ? "bg-green-500 text-white"
                  : selectedMilestone.status === "in-progress"
                    ? "bg-yellow-500 text-black"
                    : "bg-blue-500 text-white"
              }`}
            >
              {selectedMilestone.status}
            </span>
          </h3>

          <p className="my-4">{selectedMilestone.description}</p>

          <h4 className="font-bold text-terminal-text mb-2">Features:</h4>
          <ul className="space-y-2">
            {selectedMilestone.features.map((feature, index) => (
              <li key={index} className="p-2 bg-terminal-code-bg/10 rounded-md text-sm">
                {feature}
              </li>
            ))}
          </ul>

          {selectedMilestone.dependencies && selectedMilestone.dependencies.length > 0 && (
            <div className="mt-4">
              <strong>Dependencies: </strong>
              {selectedMilestone.dependencies
                .map((depId) => {
                  const dep = milestones.find((m) => m.id === depId)
                  return dep?.title
                })
                .join(", ")}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

