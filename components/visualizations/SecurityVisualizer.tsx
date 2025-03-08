"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface SecurityMetric {
  category: string
  value: number
  threshold: number
  status: "safe" | "warning" | "critical"
}

interface AuditEvent {
  timestamp: number
  type: string
  severity: "low" | "medium" | "high"
  description: string
}

interface SecurityVisualizerProps {
  metrics: SecurityMetric[]
  auditEvents: AuditEvent[]
  width?: number
  height?: number
  theme?: "light" | "dark"
}

export const SecurityVisualizer: React.FC<SecurityVisualizerProps> = ({
  metrics,
  auditEvents,
  width = 800,
  height = 600,
  theme = "light",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null)

  const drawSecurityGraph = (ctx: CanvasRenderingContext2D, metric: SecurityMetric | null) => {
    ctx.clearRect(0, 0, width, height)

    const colors =
      theme === "light"
        ? {
            safe: "#4CAF50",
            warning: "#FFC107",
            critical: "#F44336",
            grid: "#E0E0E0",
          }
        : {
            safe: "#81C3D7",
            warning: "#FFC107",
            critical: "#F44336",
            grid: "#2F6690",
          }

    // Draw grid
    const gridSize = 50
    ctx.strokeStyle = colors.grid
    ctx.lineWidth = 0.5

    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()
    }

    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }

    if (metric) {
      // Draw security perimeter
      const centerX = width / 2
      const centerY = height / 2
      const radius = Math.min(width, height) * 0.4

      ctx.strokeStyle = colors[metric.status]
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * (metric.value / 100), 0, Math.PI * 2)
      ctx.stroke()

      // Draw threshold line
      ctx.strokeStyle = colors.warning
      ctx.setLineDash([5, 5])
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * (metric.threshold / 100), 0, Math.PI * 2)
      ctx.stroke()
      ctx.setLineDash([])

      // Draw metric value
      ctx.fillStyle = theme === "light" ? "#16425B" : "#F9F9F9"
      ctx.font = "24px Inter"
      ctx.textAlign = "center"
      ctx.fillText(`${metric.value}%`, centerX, centerY)
      ctx.font = "16px Inter"
      ctx.fillText(metric.category, centerX, centerY + 30)
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const selectedMetricData = metrics.find((m) => m.category === selectedMetric)
    drawSecurityGraph(ctx, selectedMetricData || null)
  }, [selectedMetric, metrics, width, height, theme])

  return (
    <div className="flex flex-col gap-8 p-4 bg-terminal-code-bg/10 rounded-lg border border-terminal-border/30 terminal-glow">
      <canvas ref={canvasRef} width={width} height={height / 2} className="rounded-lg" />

      <div className="grid md:grid-cols-3 gap-6">
        {metrics.map((metric) => (
          <div
            key={metric.category}
            className={`p-6 rounded-lg bg-terminal-code-bg/20 border-l-4 ${
              metric.status === "safe"
                ? "border-l-green-500"
                : metric.status === "warning"
                  ? "border-l-yellow-500"
                  : "border-l-red-500"
            } border border-terminal-border/30 cursor-pointer hover:translate-y-[-4px] transition-transform`}
            onClick={() => setSelectedMetric(metric.category)}
          >
            <h4 className="text-lg font-bold text-terminal-accent mb-2">{metric.category}</h4>
            <div className="h-2 bg-terminal-code-bg/30 rounded-full overflow-hidden">
              <div
                className={`h-full ${
                  metric.status === "safe"
                    ? "bg-green-500"
                    : metric.status === "warning"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                }`}
                style={{ width: `${metric.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-lg bg-terminal-code-bg/20 border border-terminal-border/30">
        <h4 className="text-lg font-bold text-terminal-accent mb-4">Recent Audit Events</h4>
        <div className="space-y-4 max-h-[300px] overflow-y-auto">
          {auditEvents.map((event, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg bg-terminal-code-bg/10 border-l-4 ${
                event.severity === "low"
                  ? "border-l-green-500"
                  : event.severity === "medium"
                    ? "border-l-yellow-500"
                    : "border-l-red-500"
              }`}
            >
              <div className="flex justify-between">
                <strong>{event.type}</strong>
                <span>{new Date(event.timestamp).toLocaleString()}</span>
              </div>
              <p className="mt-2">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

