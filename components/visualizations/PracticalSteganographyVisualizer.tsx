"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Shield, FileText, HeartPulse, Scale, Lock, Eye, EyeOff, RefreshCw, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface FractalHashKey {
  id: string
  complexity: number
  strength: string
  color: string
}

interface DataType {
  id: string
  name: string
  icon: React.ReactNode
  size: string
  color: string
}

export function PracticalSteganographyVisualizer() {
  const [activeStep, setActiveStep] = useState(1)
  const [isEncrypted, setIsEncrypted] = useState(false)
  const [isEmbedded, setIsEmbedded] = useState(false)
  const [showData, setShowData] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isStored, setIsStored] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const fractalKeys: FractalHashKey[] = [
    { id: "key1", complexity: 3, strength: "3^729", color: "rgb(0, 255, 136)" },
    { id: "key2", complexity: 4, strength: "3^1458", color: "rgb(0, 200, 255)" },
    { id: "key3", complexity: 5, strength: "3^2187", color: "rgb(255, 100, 255)" },
  ]

  const dataTypes: DataType[] = [
    {
      id: "medical",
      name: "Medical Records",
      icon: <HeartPulse className="h-6 w-6" />,
      size: "2.4 MB",
      color: "rgb(255, 100, 100)",
    },
    {
      id: "legal",
      name: "Legal Contracts",
      icon: <Scale className="h-6 w-6" />,
      size: "1.8 MB",
      color: "rgb(100, 150, 255)",
    },
    {
      id: "financial",
      name: "Financial Data",
      icon: <FileText className="h-6 w-6" />,
      size: "3.2 MB",
      color: "rgb(100, 255, 150)",
    },
  ]

  const [selectedKey, setSelectedKey] = useState<FractalHashKey>(fractalKeys[2])
  const [selectedData, setSelectedData] = useState<DataType>(dataTypes[0])

  // Draw Sierpinski triangle using L-system approach
  const drawSierpinskiTriangle = (
    ctx: CanvasRenderingContext2D,
    centerX: number,
    centerY: number,
    size: number,
    iterations: number,
    color: string,
  ) => {
    // Draw a simple representation of a Sierpinski triangle
    // using an iterative approach instead of deep recursion

    // Start with a single triangle
    const triangles = [
      {
        x: centerX - size / 2,
        y: centerY + size / 2,
        size: size,
      },
    ]

    // For each iteration, replace each triangle with 3 smaller ones
    for (let i = 0; i < iterations; i++) {
      const newTriangles = []

      for (const triangle of triangles) {
        const newSize = triangle.size / 2

        // Top triangle
        newTriangles.push({
          x: triangle.x + newSize / 2,
          y: triangle.y - newSize,
          size: newSize,
        })

        // Bottom left triangle
        newTriangles.push({
          x: triangle.x,
          y: triangle.y,
          size: newSize,
        })

        // Bottom right triangle
        newTriangles.push({
          x: triangle.x + newSize,
          y: triangle.y,
          size: newSize,
        })
      }

      // Replace old triangles with new ones
      triangles.length = 0
      triangles.push(...newTriangles)
    }

    // Draw all triangles
    for (const triangle of triangles) {
      const { x, y, size } = triangle

      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + size, y)
      ctx.lineTo(x + size / 2, y - size * Math.sin(Math.PI / 3))
      ctx.closePath()
      ctx.fillStyle = color
      ctx.fill()
    }
  }

  // Draw the cover image with optional embedded data visualization
  const drawCoverImage = (ctx: CanvasRenderingContext2D, showEmbedded: boolean) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const width = canvas.width
    const height = canvas.height

    // Draw background (simulating an image)
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, "#1a1a2e")
    gradient.addColorStop(1, "#16213e")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    // Draw some "image features"
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const radius = Math.random() * 20 + 5

      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.1 + 0.05})`
      ctx.fill()
    }

    // Draw some lines
    for (let i = 0; i < 15; i++) {
      const x1 = Math.random() * width
      const y1 = Math.random() * height
      const x2 = Math.random() * width
      const y2 = Math.random() * height

      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.strokeStyle = `rgba(255, 255, 255, ${Math.random() * 0.1 + 0.02})`
      ctx.lineWidth = Math.random() * 2 + 0.5
      ctx.stroke()
    }

    // If showing embedded data, visualize it
    if (showEmbedded && isEmbedded) {
      // Draw a pattern of pixels representing embedded data
      const pixelSize = 3
      const gridSize = 20
      const startX = width / 2 - (gridSize * pixelSize) / 2
      const startY = height / 2 - (gridSize * pixelSize) / 2

      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          if (Math.random() > 0.7) {
            ctx.fillStyle = `rgba(${selectedData.color.slice(4, -1)}, 0.8)`
            ctx.fillRect(startX + i * pixelSize, startY + j * pixelSize, pixelSize, pixelSize)
          }
        }
      }
    }
  }

  // Animation for encryption process
  const animateEncryption = () => {
    setIsAnimating(true)
    setIsEncrypted(false)

    setTimeout(() => {
      setIsEncrypted(true)
      setIsAnimating(false)
    }, 1500)
  }

  // Animation for embedding process
  const animateEmbedding = () => {
    setIsAnimating(true)
    setIsEmbedded(false)

    setTimeout(() => {
      setIsEmbedded(true)
      setIsAnimating(false)
    }, 1500)
  }

  // Reset the visualization
  const resetVisualization = () => {
    setIsEncrypted(false)
    setIsEmbedded(false)
    setIsStored(false)
    setActiveStep(1)
  }

  // Update canvas when component mounts or state changes
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (activeStep === 1) {
      // Draw data and key
      drawCoverImage(ctx, false)
    } else if (activeStep === 2) {
      // Draw encrypted data
      drawCoverImage(ctx, false)

      if (isEncrypted) {
        // Draw simple Sierpinski triangle to represent encrypted data
        const triangleSize = 100
        drawSierpinskiTriangle(
          ctx,
          canvas.width / 2,
          canvas.height / 2,
          triangleSize,
          selectedKey.complexity,
          selectedData.color,
        )
      }
    } else if (activeStep === 3) {
      // Draw cover image with embedded data
      drawCoverImage(ctx, showData)
    }
  }, [activeStep, isEncrypted, isEmbedded, showData, selectedKey, selectedData])

  return (
    <div className="bg-black/30 border border-terminal-border/30 rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-terminal-accent mb-4">Quantum-Resistant Steganography</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-black/40 p-4 rounded-md border border-terminal-border/20">
          <h3 className="text-lg font-semibold text-terminal-accent mb-3">Sierpinski Fractal Hash Keys</h3>
          <p className="text-sm text-terminal-dim mb-4">
            Our 3^2187 fractal hash keys provide quantum-resistant encryption with 1046 bits of security.
          </p>

          <div className="space-y-2">
            {fractalKeys.map((key) => (
              <div
                key={key.id}
                className={cn(
                  "flex items-center justify-between p-2 rounded cursor-pointer transition-colors",
                  selectedKey.id === key.id
                    ? "bg-terminal-accent/20 border border-terminal-accent/50"
                    : "hover:bg-terminal-accent/10 border border-terminal-border/20",
                )}
                onClick={() => setSelectedKey(key)}
              >
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" style={{ color: key.color }} />
                  <span className="text-sm font-mono">{key.strength}</span>
                </div>
                <span
                  className="text-xs px-2 py-1 rounded-full"
                  style={{ backgroundColor: `${key.color}20`, color: key.color }}
                >
                  Level {key.complexity}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black/40 p-4 rounded-md border border-terminal-border/20">
          <h3 className="text-lg font-semibold text-terminal-accent mb-3">Sensitive Data</h3>
          <p className="text-sm text-terminal-dim mb-4">
            Securely store and transmit sensitive information on the blockchain.
          </p>

          <div className="space-y-2">
            {dataTypes.map((data) => (
              <div
                key={data.id}
                className={cn(
                  "flex items-center justify-between p-2 rounded cursor-pointer transition-colors",
                  selectedData.id === data.id
                    ? "bg-terminal-accent/20 border border-terminal-accent/50"
                    : "hover:bg-terminal-accent/10 border border-terminal-border/20",
                )}
                onClick={() => setSelectedData(data)}
              >
                <div className="flex items-center gap-2">
                  {data.icon}
                  <span className="text-sm">{data.name}</span>
                </div>
                <span
                  className="text-xs px-2 py-1 rounded-full"
                  style={{ backgroundColor: `${data.color}20`, color: data.color }}
                >
                  {data.size}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black/40 p-4 rounded-md border border-terminal-border/20">
          <h3 className="text-lg font-semibold text-terminal-accent mb-3">Security Features</h3>

          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-terminal-accent" />
              <span>Quantum-resistant encryption</span>
            </li>
            <li className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-terminal-accent" />
              <span>Perfect forward secrecy</span>
            </li>
            <li className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-terminal-accent" />
              <span>Statistical undetectability</span>
            </li>
            <li className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-terminal-accent" />
              <span>Blockchain immutability</span>
            </li>
          </ul>

          <div className="mt-4 p-3 bg-terminal-accent/10 rounded border border-terminal-accent/30">
            <p className="text-xs text-terminal-accent">
              Our 3^2187 key space provides 1046 bits of security, compared to 256 bits in traditional systems. This
              makes it resistant to quantum computing attacks.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex-1">
          <canvas
            ref={canvasRef}
            width={500}
            height={300}
            className="w-full h-[300px] rounded-lg border border-terminal-border/30 bg-black/20"
          />

          {activeStep === 3 && (
            <div className="flex justify-center mt-2">
              <Button variant="terminal-outline" size="sm" onClick={() => setShowData(!showData)} className="text-xs">
                {showData ? (
                  <>
                    <EyeOff className="h-3 w-3 mr-1" /> Hide Embedded Data
                  </>
                ) : (
                  <>
                    <Eye className="h-3 w-3 mr-1" /> Show Embedded Data
                  </>
                )}
              </Button>
            </div>
          )}
        </div>

        <div className="flex-1 bg-black/40 p-4 rounded-lg border border-terminal-border/20">
          <h3 className="text-lg font-semibold text-terminal-accent mb-3">Process Explanation</h3>

          <div className="space-y-4">
            <div
              className={cn(
                "p-3 rounded border transition-colors",
                activeStep === 1
                  ? "bg-terminal-accent/20 border-terminal-accent/50"
                  : "bg-black/20 border-terminal-border/20",
              )}
            >
              <h4 className="font-medium mb-1 flex items-center gap-2">
                <span className="bg-terminal-accent/80 text-black w-5 h-5 rounded-full flex items-center justify-center text-xs">
                  1
                </span>
                Select Data & Encryption Key
              </h4>
              <p className="text-xs text-terminal-dim">
                Choose sensitive data and a Sierpinski fractal hash key with 3^2187 complexity for quantum-resistant
                security.
              </p>
            </div>

            <div
              className={cn(
                "p-3 rounded border transition-colors",
                activeStep === 2
                  ? "bg-terminal-accent/20 border-terminal-accent/50"
                  : "bg-black/20 border-terminal-border/20",
              )}
            >
              <h4 className="font-medium mb-1 flex items-center gap-2">
                <span className="bg-terminal-accent/80 text-black w-5 h-5 rounded-full flex items-center justify-center text-xs">
                  2
                </span>
                Encrypt Data with Fractal Key
              </h4>
              <p className="text-xs text-terminal-dim">
                The data is encrypted using the fractal key, creating a secure payload that's resistant to quantum
                attacks.
              </p>
            </div>

            <div
              className={cn(
                "p-3 rounded border transition-colors",
                activeStep === 3
                  ? "bg-terminal-accent/20 border-terminal-accent/50"
                  : "bg-black/20 border-terminal-border/20",
              )}
            >
              <h4 className="font-medium mb-1 flex items-center gap-2">
                <span className="bg-terminal-accent/80 text-black w-5 h-5 rounded-full flex items-center justify-center text-xs">
                  3
                </span>
                Embed in Cover Media
              </h4>
              <p className="text-xs text-terminal-dim">
                The encrypted data is embedded in the cover image using ternary steganography, making it statistically
                undetectable.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <Button variant="terminal-outline" size="sm" onClick={resetVisualization} disabled={isAnimating}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>

        <div className="space-x-3">
          {activeStep === 1 && (
            <Button
              variant="terminal"
              onClick={() => {
                setActiveStep(2)
                animateEncryption()
              }}
              disabled={isAnimating}
            >
              Encrypt Data
            </Button>
          )}

          {activeStep === 2 && (
            <Button
              variant="terminal"
              onClick={() => {
                setActiveStep(3)
                animateEmbedding()
              }}
              disabled={isAnimating || !isEncrypted}
            >
              Embed Data
            </Button>
          )}

          {activeStep === 3 &&
            isEmbedded &&
            (isStored ? (
              <Button variant="terminal" className="bg-green-600 hover:bg-green-700">
                <Check className="h-4 w-4 mr-2" />
                Stored Successfully
              </Button>
            ) : (
              <Button
                variant="terminal"
                onClick={() => {
                  setIsStored(true)
                }}
              >
                Store on Blockchain
              </Button>
            ))}
        </div>
      </div>
    </div>
  )
}

