"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface BenchmarkMetric {
  name: string
  value: number
  unit: string
  bitcoinValue: number
  improvement: number
}

interface PerformanceVisualizerProps {
  className?: string
}

const benchmarks: BenchmarkMetric[] = [
  {
    name: "Transaction Throughput",
    value: 15,
    unit: "TPS",
    bitcoinValue: 7,
    improvement: 114, // (15-7)/7 * 100
  },
  {
    name: "Block Time",
    value: 180,
    unit: "sec",
    bitcoinValue: 600,
    improvement: 70, // (600-180)/600 * 100
  },
  {
    name: "Energy per Transaction",
    value: 117.3,
    unit: "kWh/tx",
    bitcoinValue: 1173,
    improvement: 90, // (1173-117.3)/1173 * 100
  },
  {
    name: "Network Latency",
    value: 150,
    unit: "ms",
    bitcoinValue: 300,
    improvement: 50, // (300-150)/300 * 100
  },
  {
    name: "Storage per Block",
    value: 0.5,
    unit: "MB",
    bitcoinValue: 1.0,
    improvement: 50, // (1-0.5)/1 * 100
  },
  {
    name: "Validation Time",
    value: 2.1,
    unit: "sec",
    bitcoinValue: 4.2,
    improvement: 50, // (4.2-2.1)/4.2 * 100
  },
]

type MetricKey = "Transaction Processing" | "Block Processing" | "Energy Usage"

const timeSeriesData = {
  "Transaction Processing": {
    tritcoinValues: [10.8, 11.2, 11.5, 12.1, 12.4, 12.9, 13.2, 13.7, 14.1, 14.3, 14.5, 14.8, 15],
    bitcoinAverage: 7,
    unit: "TPS",
    maxValue: 17,
  },
  "Block Processing": {
    tritcoinValues: [210, 205, 200, 195, 190, 188, 186, 184, 182, 181, 180, 180, 180],
    bitcoinAverage: 600,
    unit: "sec",
    maxValue: 240,
  },
  "Energy Usage": {
    tritcoinValues: [145, 140, 136, 132, 128, 125, 122, 120, 119, 118, 117.3, 117.3, 117.3],
    bitcoinAverage: 1173,
    unit: "kWh/tx",
    maxValue: 150,
  },
}

export function PerformanceVisualizer({ className }: PerformanceVisualizerProps) {
  const [activeMetric, setActiveMetric] = useState<MetricKey>("Transaction Processing")
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const data = timeSeriesData[activeMetric]
    drawChart(ctx, canvas.width, canvas.height, data)
  }, [activeMetric])

  const drawChart = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    data: (typeof timeSeriesData)[MetricKey],
  ) => {
    ctx.clearRect(0, 0, width, height)

    // Colors
    const gridColor = "#424242"
    const tritcoinColor = "#F6C611" // yellow/gold
    const bitcoinColor = "#F7931A" // bitcoin orange
    const textColor = "#BBBBBB"

    // Dimensions
    const padding = { top: 40, right: 30, bottom: 30, left: 60 }
    const chartWidth = width - padding.left - padding.right
    const chartHeight = height - padding.top - padding.bottom

    // Draw grid
    ctx.strokeStyle = gridColor
    ctx.lineWidth = 0.5

    // Horizontal grid lines
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (chartHeight / 4) * i
      ctx.beginPath()
      ctx.moveTo(padding.left, y)
      ctx.lineTo(width - padding.right, y)
      ctx.stroke()

      // Y-axis labels
      const value = data.maxValue - (data.maxValue / 4) * i
      ctx.fillStyle = textColor
      ctx.font = "12px Inter"
      ctx.textAlign = "right"
      ctx.fillText(`${value.toFixed(1)} ${data.unit}`, padding.left - 10, y + 4)
    }

    // Vertical grid lines
    for (let i = 0; i <= 12; i++) {
      const x = padding.left + (chartWidth / 12) * i
      ctx.beginPath()
      ctx.moveTo(x, padding.top)
      ctx.lineTo(x, height - padding.bottom)
      ctx.stroke()
    }

    // Draw Bitcoin average line
    const bitcoinY = padding.top + chartHeight - (chartHeight * data.bitcoinAverage) / data.maxValue
    ctx.strokeStyle = bitcoinColor
    ctx.lineWidth = 2
    ctx.setLineDash([5, 5])
    ctx.beginPath()
    ctx.moveTo(padding.left, bitcoinY)
    ctx.lineTo(width - padding.right, bitcoinY)
    ctx.stroke()
    ctx.setLineDash([])

    // Draw TritCoin line
    ctx.strokeStyle = tritcoinColor
    ctx.lineWidth = 3
    ctx.beginPath()

    data.tritcoinValues.forEach((value, i) => {
      const x = padding.left + (chartWidth / (data.tritcoinValues.length - 1)) * i
      const y = padding.top + chartHeight - (chartHeight * value) / data.maxValue

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()

    // Add legend
    ctx.font = "14px Inter"

    // TritCoin legend
    ctx.fillStyle = textColor
    ctx.textAlign = "left"
    ctx.strokeStyle = tritcoinColor
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(padding.left, padding.top - 15)
    ctx.lineTo(padding.left + 30, padding.top - 15)
    ctx.stroke()
    ctx.fillText("TritCoin", padding.left + 40, padding.top - 10)

    // Bitcoin Average legend
    ctx.strokeStyle = bitcoinColor
    ctx.setLineDash([5, 5])
    ctx.beginPath()
    ctx.moveTo(padding.left + 120, padding.top - 15)
    ctx.lineTo(padding.left + 150, padding.top - 15)
    ctx.stroke()
    ctx.setLineDash([])
    ctx.fillText("Bitcoin Average", padding.left + 160, padding.top - 10)
  }

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {/* Disclaimer */}
      <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg text-zinc-400 text-sm">
        <span className="font-semibold text-yellow-500">Disclaimer:</span> The performance data shown is estimated based
        on theoretical and experimental optimization of balanced ternary compared to binary computation. Actual
        performance may vary in production environments. Bitcoin data is based on public network averages.
      </div>

      {/* Metric selection tabs */}
      <div className="flex gap-2">
        {(Object.keys(timeSeriesData) as MetricKey[]).map((metric) => (
          <button
            key={metric}
            onClick={() => setActiveMetric(metric)}
            className={cn(
              "px-4 py-2 rounded-md transition-colors",
              activeMetric === metric
                ? "bg-yellow-500 text-black font-medium"
                : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800",
            )}
          >
            {metric}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="relative w-full bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden">
        <canvas ref={canvasRef} width={800} height={300} className="w-full h-[300px]" />
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {benchmarks.map((metric) => (
          <div
            key={metric.name}
            className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:translate-y-[-2px] transition-transform"
          >
            <h3 className="text-lg font-medium text-yellow-500 mb-2">{metric.name}</h3>
            <div className="text-2xl font-bold text-white mb-1">
              {metric.value} {metric.unit}
            </div>
            <div className="text-sm text-zinc-400 mb-2">
              Bitcoin: {metric.bitcoinValue} {metric.unit}
            </div>
            <div
              className={cn(
                "inline-block px-2 py-1 rounded text-sm font-medium",
                metric.improvement > 0 ? "bg-yellow-900/30 text-yellow-400" : "bg-red-900/30 text-red-400",
              )}
            >
              {metric.improvement > 0 ? "+" : ""}
              {metric.improvement}% vs Bitcoin
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

