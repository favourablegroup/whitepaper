"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle, Lock, Unlock } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface TernarySteganographyVisualizerProps {
  width?: number
  height?: number
}

export function TernarySteganographyVisualizer({ width = 800, height = 400 }: TernarySteganographyVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isEmbedding, setIsEmbedding] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  // Animation frame reference
  const animationFrameRef = useRef<number>()
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set up canvas with device pixel ratio
    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    const drawWaveform = (time: number) => {
      ctx.clearRect(0, 0, width, height)

      // Background
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)"
      ctx.fillRect(0, 0, width, height)

      // Draw carrier wave (simulated audio)
      ctx.beginPath()
      ctx.strokeStyle = "rgba(255, 215, 0, 0.6)"
      ctx.lineWidth = 2

      for (let x = 0; x < width; x++) {
        const y = height / 2 + Math.sin(x * 0.02 + time) * 50 + Math.sin(x * 0.01 + time * 0.5) * 30

        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()

      // Draw embedded data visualization
      if (isEmbedding) {
        ctx.beginPath()
        ctx.strokeStyle = "rgba(0, 255, 127, 0.4)"
        ctx.lineWidth = 1

        for (let x = 0; x < width; x++) {
          const y = height / 2 + Math.sin(x * 0.1 + time * 2) * 20 * Math.sin(time) // Pulsing effect

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()

        // Add glowing effect
        ctx.shadowColor = "rgba(0, 255, 127, 0.5)"
        ctx.shadowBlur = 15
        ctx.stroke()
        ctx.shadowBlur = 0
      }
    }

    const animate = () => {
      timeRef.current += 0.01
      drawWaveform(timeRef.current)
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [width, height, isEmbedding])

  const steps = [
    {
      title: "Carrier Signal",
      description: "The original data (audio, image, or text) appears normal to observers.",
    },
    {
      title: "Ternary Encoding",
      description: "Secret data is converted to balanced ternary format for optimal embedding.",
    },
    {
      title: "Steganographic Embedding",
      description: "The ternary-encoded data is carefully woven into the carrier signal.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="relative backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-4 terminal-glow">
        <canvas ref={canvasRef} style={{ width, height }} className="rounded-lg" />
        <div className="absolute bottom-4 right-4 flex gap-2">
          <Button variant="terminal" size="sm" onClick={() => setIsEmbedding(!isEmbedding)}>
            {isEmbedding ? <Lock className="w-4 h-4 mr-2" /> : <Unlock className="w-4 h-4 mr-2" />}
            {isEmbedding ? "Hide Data" : "Show Data"}
          </Button>
          <Button variant="terminal-outline" size="sm" onClick={() => setShowExplanation(!showExplanation)}>
            <AlertCircle className="w-4 h-4 mr-2" />
            How it Works
          </Button>
        </div>
      </div>

      {showExplanation && (
        <div className="grid gap-4">
          {steps.map((step, index) => (
            <Alert
              key={index}
              className={`transition-opacity duration-500 ${currentStep === index ? "opacity-100" : "opacity-50"}`}
              onClick={() => setCurrentStep(index)}
            >
              <AlertTitle className="font-mono text-terminal-accent">{step.title}</AlertTitle>
              <AlertDescription className="font-mono">{step.description}</AlertDescription>
            </Alert>
          ))}
        </div>
      )}
    </div>
  )
}

