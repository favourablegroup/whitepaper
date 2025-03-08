"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChevronDown, ChevronUp, Plus, Divide } from "lucide-react"
import { cn } from "@/lib/utils"

interface TritVisualizerProps {
  value: -1 | 0 | 1
  size?: "sm" | "md" | "lg"
}

const TritVisualizer = ({ value, size = "md" }: TritVisualizerProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  }

  const colorClasses = {
    "-1": "bg-red-500",
    "0": "bg-amber-500",
    "1": "bg-green-500",
  }

  return <div className={cn(sizeClasses[size], colorClasses[value.toString()])} />
}

interface SierpinskiTriangleProps {
  iteration: number
  className?: string
}

const SierpinskiTriangle = ({ iteration, className }: SierpinskiTriangleProps) => {
  // Function to draw Sierpinski triangle using the correct L-system parameters
  // axiom = "F-G-G", rules = {"F":"F-G+F+G-F", "G":"GG"}, iterations = 4
  const generateSierpinskiTriangle = (iteration: number) => {
    // Define L-system parameters
    const axiom = "F-G-G"
    const rules = {
      F: "F-G+F+G-F",
      G: "GG",
    }

    // Generate L-system string based on iteration
    let lSystemString = axiom
    for (let i = 0; i < iteration; i++) {
      lSystemString = lSystemString
        .split("")
        .map((char) => rules[char] || char)
        .join("")
    }

    // Convert the L-system string to SVG path
    let angle = 0
    const step = 10 / Math.pow(1.5, iteration) // Adjust step size based on iteration
    let x = 0
    let y = 0
    const commands: { x: number; y: number }[] = [{ x, y }]

    // Process the L-system string
    for (const char of lSystemString) {
      switch (char) {
        case "F":
        case "G":
          x += step * Math.cos((angle * Math.PI) / 180)
          y += step * Math.sin((angle * Math.PI) / 180)
          commands.push({ x, y })
          break
        case "+":
          angle += 120
          break
        case "-":
          angle -= 120
          break
      }
    }

    return commands
  }

  // Color based on iteration
  const color = iteration === 1 ? "#FF5555" : iteration === 2 ? "#4CAF50" : "#FF5555"

  // Generate triangle path
  const commands = generateSierpinskiTriangle(iteration)

  // Calculate bounds for proper scaling
  let minX = Number.POSITIVE_INFINITY,
    minY = Number.POSITIVE_INFINITY,
    maxX = Number.NEGATIVE_INFINITY,
    maxY = Number.NEGATIVE_INFINITY
  commands.forEach((cmd) => {
    minX = Math.min(minX, cmd.x)
    minY = Math.min(minY, cmd.y)
    maxX = Math.max(maxX, cmd.x)
    maxY = Math.max(maxY, cmd.y)
  })

  const width = maxX - minX
  const height = maxY - minY

  // Create SVG path from commands with proper scaling
  const pathData = commands
    .map((cmd, i) => {
      const x = ((cmd.x - minX) / width) * 200
      const y = ((cmd.y - minY) / height) * 200
      return `${i === 0 ? "M" : "L"}${x},${y}`
    })
    .join(" ")

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <svg width={220} height={220} viewBox="0 0 220 220">
        <path d={pathData} fill={color} fillOpacity={0.3} stroke={color} strokeWidth={1} />
      </svg>
      <div className="text-center mt-2 text-terminal-text">
        3<sup>{iteration}</sup> = {Math.pow(3, iteration)} triangles
      </div>
    </div>
  )
}

export function TernaryFoundationsVisualizer() {
  const [showDetails, setShowDetails] = useState(false)

  const ternaryExamples = [
    { decimal: 4, ternary: [1, 1, 1] },
    { decimal: -4, ternary: [-1, -1, -1] },
    { decimal: 8, ternary: [1, 0, -1, 0, 1] },
    { decimal: 0, ternary: [0] },
  ]

  return (
    <div className="space-y-6 p-6 bg-black/30 rounded-lg border border-terminal-border/30 mb-16">
      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold text-terminal-accent text-center">Theoretical Foundations</h2>

        {/* Balanced Ternary System */}
        <Card className="bg-black/20 border-terminal-border/30">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-terminal-accent">Balanced Ternary System</CardTitle>
            <button
              className="text-terminal-dim hover:text-terminal-accent transition-colors"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row justify-center gap-8 items-center md:items-start">
                <SierpinskiTriangle iteration={1} />
                <SierpinskiTriangle iteration={2} />
                <SierpinskiTriangle iteration={3} />
              </div>

              {showDetails && (
                <div className="mt-6 space-y-4">
                  <h3 className="text-lg font-semibold text-terminal-accent">Decimal to Ternary Examples</h3>
                  <div className="grid gap-4">
                    {ternaryExamples.map((example, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <span className="text-terminal-dim w-8">{example.decimal} =</span>
                        <div className="flex gap-1">
                          {example.ternary.map((trit, j) => (
                            <TritVisualizer key={j} value={trit} />
                          ))}
                        </div>
                        <span className="font-mono">{example.ternary.map((t) => (t === -1 ? "T" : t)).join("")}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Implementation Status */}
        <Card className="bg-black/20 border-terminal-border/30">
          <CardHeader>
            <CardTitle className="text-terminal-accent">Implementation Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-terminal-dim">Ternary Arithmetic</span>
                  <span className="text-terminal-accent">100%</span>
                </div>
                <Progress value={100} className="bg-black/40 h-2" indicatorClassName="bg-terminal-accent" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-terminal-dim">Galois Field Operations</span>
                  <span className="text-terminal-accent">95%</span>
                </div>
                <Progress value={95} className="bg-black/40 h-2" indicatorClassName="bg-terminal-accent" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-terminal-dim">T/ECC Implementation</span>
                  <span className="text-terminal-accent">90%</span>
                </div>
                <Progress value={90} className="bg-black/40 h-2" indicatorClassName="bg-terminal-accent" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Properties */}
        <Card className="bg-black/20 border-terminal-border/30">
          <CardHeader>
            <CardTitle className="text-terminal-accent">Key Properties</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-4 bg-black/20 rounded-lg">
                <div className="text-terminal-accent text-4xl mb-2">△</div>
                <h3 className="font-semibold text-terminal-text">Geometric Growth</h3>
                <p className="text-sm text-terminal-dim text-center mt-2">3ⁿ progression in spatial representation</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-black/20 rounded-lg">
                <Plus className="h-8 w-8 text-terminal-accent mb-2" />
                <h3 className="font-semibold text-terminal-text">Natural Balance</h3>
                <p className="text-sm text-terminal-dim text-center mt-2">Perfect symmetry around zero</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-black/20 rounded-lg">
                <Divide className="h-8 w-8 text-terminal-accent mb-2" />
                <h3 className="font-semibold text-terminal-text">Quantum Ready</h3>
                <p className="text-sm text-terminal-dim text-center mt-2">Optimized for quantum resistance</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

