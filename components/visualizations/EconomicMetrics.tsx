"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

interface PowerMetric {
  operation: string
  binaryPower: number // watts
  ternaryPower: number // watts
  savings: number // percentage
}

const powerMetrics: PowerMetric[] = [
  {
    operation: "Basic Logic Gates",
    binaryPower: 0.7, // mW per gate
    ternaryPower: 0.4, // mW per gate
    savings: 42.8,
  },
  {
    operation: "Memory Access",
    binaryPower: 3.2, // mW per operation
    ternaryPower: 2.1, // mW per operation
    savings: 34.4,
  },
  {
    operation: "ALU Operations",
    binaryPower: 2.8, // mW per operation
    ternaryPower: 1.7, // mW per operation
    savings: 39.3,
  },
  {
    operation: "Data Transfer",
    binaryPower: 1.5, // mW per byte
    ternaryPower: 0.9, // mW per byte
    savings: 40.0,
  },
]

const annualCosts = {
  cooling: {
    binary: 12500000, // $12.5M for binary system cooling
    ternary: 7500000, // $7.5M for ternary system cooling
    savings: 5000000, // $5M savings
  },
  power: {
    binary: 18000000, // $18M for binary system power
    ternary: 11000000, // $11M for ternary system power
    savings: 7000000, // $7M savings
  },
}

export function EconomicMetrics() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set dimensions
    const padding = 60
    const width = canvas.width - padding * 2
    const height = canvas.height - padding * 2
    const barWidth = width / (powerMetrics.length * 3) // Space for 2 bars + gap per metric

    // Draw bars
    powerMetrics.forEach((metric, i) => {
      const x = padding + i * barWidth * 3

      // Binary bar
      ctx.fillStyle = "#ff6b6b"
      ctx.fillRect(x, height - (metric.binaryPower / 4) * height, barWidth, (metric.binaryPower / 4) * height)

      // Ternary bar
      ctx.fillStyle = "#4ecdc4"
      ctx.fillRect(
        x + barWidth,
        height - (metric.ternaryPower / 4) * height,
        barWidth,
        (metric.ternaryPower / 4) * height,
      )

      // Labels
      ctx.fillStyle = "#ffffff"
      ctx.font = "12px Inter"
      ctx.textAlign = "center"
      ctx.fillText(metric.operation, x + barWidth, height + 20)
      ctx.fillText(`${metric.savings}% saved`, x + barWidth, height + 40)
    })

    // Y-axis
    ctx.strokeStyle = "#ffffff"
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height + padding)
    ctx.stroke()

    // Y-axis labels
    ctx.textAlign = "right"
    for (let i = 0; i <= 4; i++) {
      const y = height - (i * height) / 4
      ctx.fillText(`${i} mW`, padding - 10, y + padding)
    }
  }, [])

  return (
    <div className="space-y-8">
      <Card className="p-6 bg-gray-900">
        <h3 className="text-xl font-bold mb-4 text-white">Power Consumption Comparison</h3>
        <canvas ref={canvasRef} width={800} height={400} className="w-full" />
        <div className="flex justify-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#ff6b6b]"></div>
            <span className="text-white">Binary</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#4ecdc4]"></div>
            <span className="text-white">Balanced Ternary</span>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-gray-900">
        <h3 className="text-xl font-bold mb-4 text-white">Annual Cost Savings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h4 className="font-medium text-white">Cooling Costs</h4>
            <p className="text-green-400">${(annualCosts.cooling.savings / 1000000).toFixed(1)}M annual savings</p>
            <div className="flex justify-between text-sm text-gray-300">
              <span>Binary: ${(annualCosts.cooling.binary / 1000000).toFixed(1)}M</span>
              <span>Ternary: ${(annualCosts.cooling.ternary / 1000000).toFixed(1)}M</span>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-white">Power Costs</h4>
            <p className="text-green-400">${(annualCosts.power.savings / 1000000).toFixed(1)}M annual savings</p>
            <div className="flex justify-between text-sm text-gray-300">
              <span>Binary: ${(annualCosts.power.binary / 1000000).toFixed(1)}M</span>
              <span>Ternary: ${(annualCosts.power.ternary / 1000000).toFixed(1)}M</span>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-gray-900">
        <h3 className="text-xl font-bold mb-4 text-white">Key Benefits</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Up to 42.8% power reduction in basic logic operations</li>
          <li>34-40% energy savings across different computational tasks</li>
          <li>$12M+ potential annual savings for large data centers</li>
          <li>Reduced cooling requirements and heat generation</li>
          <li>Smaller physical footprint for equivalent computing power</li>
        </ul>
      </Card>
    </div>
  )
}

