"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, RefreshCw } from "lucide-react"

interface TritHashVisualizerProps {
  hashValue?: string
  width?: number
  theme?: "light" | "dark"
}

export const TritHashVisualizer: React.FC<TritHashVisualizerProps> = ({
  hashValue: initialHashValue,
  width = 800,
  theme = "dark",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [showFullHash, setShowFullHash] = useState(false)
  const [hashValue, setHashValue] = useState(initialHashValue || generateRandomTritHash(81))
  const [hashLength, setHashLength] = useState(81)

  // Generate a random trit hash of specified length
  function generateRandomTritHash(length: number): string {
    const tritChars = ["0", "1", "T"]
    let hash = ""
    for (let i = 0; i < length; i++) {
      hash += tritChars[Math.floor(Math.random() * 3)]
    }
    return hash
  }

  // Generate a new random hash
  const generateNewHash = () => {
    setHashValue(generateRandomTritHash(hashLength))
  }

  // Convert hash string to ternary values (0,1,T)
  const hashToTernary = (hash: string): number[] => {
    return Array.from(hash).map((char) => {
      switch (char) {
        case "0":
          return 0
        case "1":
          return 1
        case "T":
          return -1
        default:
          return 0
      }
    })
  }

  // Draw Sierpinski triangle with ternary values
  const drawSierpinskiTriangle = (
    ctx: CanvasRenderingContext2D,
    values: number[],
    colors: { [key: number]: string },
  ) => {
    // Get container dimensions
    const containerWidth = containerRef.current?.clientWidth || width
    const containerHeight = containerRef.current?.clientHeight || 400

    // Set canvas dimensions to match container
    ctx.canvas.width = containerWidth
    ctx.canvas.height = containerHeight

    // Calculate the maximum size that will fit in the container
    // Use a more conservative approach to ensure it fits
    const maxWidth = containerWidth * 0.9
    const maxHeight = containerHeight * 0.9

    // Calculate the size based on the aspect ratio of an equilateral triangle
    // Height of equilateral triangle = (√3/2) * side length
    const aspectRatio = Math.sqrt(3) / 2
    const size = Math.min(maxWidth, maxHeight / aspectRatio)

    // Center the triangle in the canvas
    const startX = (containerWidth - size) / 2
    const startY = containerHeight - (containerHeight - size * aspectRatio) / 2

    // Calculate depth based on hash length
    // Use Math.log(x)/Math.log(3) for log base 3
    const hashLengthToDepth = {
      27: 3, // 3³
      81: 4, // 3⁴
      243: 5, // 3⁵
      729: 6, // 3⁶
      2187: 7, // 3⁷
    }

    const depth = hashLengthToDepth[values.length] || Math.min(7, Math.ceil(Math.log(values.length) / Math.log(3)))

    const drawTriangle = (x: number, y: number, size: number, value: number) => {
      ctx.fillStyle = colors[value]
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + size, y)
      ctx.lineTo(x + size / 2, y - size * aspectRatio)
      ctx.closePath()
      ctx.fill()

      // Add a subtle outline for better definition
      ctx.strokeStyle = "rgba(0,0,0,0.3)"
      ctx.lineWidth = 0.5
      ctx.stroke()
    }

    const sierpinski = (x: number, y: number, size: number, level: number, index: number) => {
      if (level === 0) {
        drawTriangle(x, y, size, values[index % values.length])
        return
      }

      const newSize = size / 2
      sierpinski(x, y, newSize, level - 1, index * 3)
      sierpinski(x + newSize, y, newSize, level - 1, index * 3 + 1)
      sierpinski(x + newSize / 2, y - newSize * aspectRatio, newSize, level - 1, index * 3 + 2)
    }

    // Clear canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    // Start recursion
    sierpinski(startX, startY, size, depth, 0)
  }

  // Download the canvas as an image
  const downloadImage = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Create a temporary link element
    const link = document.createElement("a")
    link.download = `tritcoin-hash-${Date.now()}.png`

    // Convert canvas to data URL
    link.href = canvas.toDataURL("image/png")

    // Trigger download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Handle window resize and initial draw
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      // Updated color scheme: red (T), orange (0), green (1)
      const colors = {
        [-1]: "#FF4444", // T - Red
        0: "#FFA500", // 0 - Orange
        1: "#4CAF50", // 1 - Green
      }

      const ternaryValues = hashToTernary(hashValue)
      drawSierpinskiTriangle(ctx, ternaryValues, colors)
    }

    // Initial draw
    handleResize()

    // Add resize listener
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [hashValue, width, theme])

  // Format hash for display
  const displayHash = showFullHash
    ? hashValue
    : hashValue.length > 100
      ? `${hashValue.substring(0, 100)}...`
      : hashValue

  return (
    <div className="flex flex-col gap-4 p-4 bg-terminal-code-bg/10 rounded-lg border border-terminal-border/30 terminal-glow">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <h3 className="text-lg font-semibold text-terminal-accent">Interactive Trit Hash Visualizer</h3>
        <div className="flex gap-2">
          <Button variant="terminal-outline" size="sm" onClick={generateNewHash} className="flex items-center gap-1">
            <RefreshCw className="h-4 w-4" />
            Generate New Hash
          </Button>
          <Button variant="terminal" size="sm" onClick={downloadImage} className="flex items-center gap-1">
            <Download className="h-4 w-4" />
            Download
          </Button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative w-full bg-black rounded-lg overflow-hidden"
        style={{ height: "350px" }}
      >
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-terminal-code-bg/20 rounded-lg border border-terminal-border/30">
          <div className="flex justify-between items-center mb-2">
            <div>Hash Value:</div>
            <button
              onClick={() => setShowFullHash(!showFullHash)}
              className="text-sm px-3 py-1 bg-terminal-accent/20 hover:bg-terminal-accent/30 rounded-md transition-colors"
            >
              {showFullHash ? "Show Less" : "See More"}
            </button>
          </div>
          <code className="font-mono text-sm break-all block max-h-40 overflow-y-auto">{displayHash}</code>
        </div>

        <div className="p-4 bg-terminal-code-bg/20 rounded-lg border border-terminal-border/30">
          <div className="mb-2">Hash Settings:</div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <label htmlFor="hashLength" className="text-sm">
                Hash Length:
              </label>
              <select
                id="hashLength"
                value={hashLength}
                onChange={(e) => {
                  const newLength = Number.parseInt(e.target.value)
                  setHashLength(newLength)
                  setHashValue(generateRandomTritHash(newLength))
                }}
                className="bg-terminal-code-bg border border-terminal-border rounded px-2 py-1 text-sm"
              >
                <option value="27">27 (3³)</option>
                <option value="81">81 (3⁴)</option>
                <option value="243">243 (3⁵)</option>
                <option value="729">729 (3⁶)</option>
                <option value="2187">2187 (3⁷)</option>
              </select>
            </div>

            <div className="mt-4">Color Mapping:</div>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-[#FF4444]"></span>
                <span>T: Negative</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-[#FFA500]"></span>
                <span>0: Balanced</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-[#4CAF50]"></span>
                <span>1: Positive</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm text-terminal-dim mt-2">
        <p>
          The Sierpinski triangle visualization maps each trit value to a specific color, creating a unique visual
          fingerprint for each hash.
        </p>
        <p>This visualization technique allows for quick visual verification and comparison of hash values.</p>
      </div>
    </div>
  )
}

