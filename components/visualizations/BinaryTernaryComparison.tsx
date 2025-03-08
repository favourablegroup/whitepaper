"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, RefreshCw } from "lucide-react"

interface BinaryTernaryComparisonProps {
  width?: number
  height?: number
  animated?: boolean
  showControls?: boolean
}

export function BinaryTernaryComparison({
  width = 600,
  height = 300,
  animated = true,
  showControls = true,
}: BinaryTernaryComparisonProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isPlaying, setIsPlaying] = useState(animated)
  const [frame, setFrame] = useState(0)
  const animationRef = useRef<number>()

  const resetAnimation = () => {
    setFrame(0)
  }

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying)
  }

  // Helper function to format large numbers with commas
  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat().format(num)
  }

  // Helper function to truncate text if it's too long
  const truncateText = (ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string => {
    if (ctx.measureText(text).width <= maxWidth) return text

    let truncated = text
    while (ctx.measureText(truncated + "...").width > maxWidth && truncated.length > 0) {
      truncated = truncated.slice(0, -1)
    }
    return truncated + "..."
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw background
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
    ctx.fillRect(0, 0, width, height)

    // Draw divider
    ctx.strokeStyle = "rgba(255, 215, 0, 0.3)"
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(width / 2, 0)
    ctx.lineTo(width / 2, height)
    ctx.stroke()

    // Calculate responsive sizes
    const blockSize = Math.min(20, width / 40)
    const blockGap = Math.max(2, blockSize / 4)
    const fontSize = Math.max(10, Math.min(14, width / 40))
    const titleFontSize = Math.max(12, Math.min(16, width / 35))

    // Draw section titles
    ctx.font = `${titleFontSize}px monospace`
    ctx.textAlign = "center"

    // Binary title
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
    ctx.fillText("Binary (Base-2)", width / 4, 30)

    // Ternary title
    ctx.fillStyle = "rgba(255, 215, 0, 0.9)"
    ctx.fillText("Ternary (Base-3)", (width * 3) / 4, 30)

    // Draw binary representation
    const drawBinary = () => {
      const startY = 70
      const blocksPerRow = Math.min(8, Math.floor((width / 2 - 40) / (blockSize + blockGap)))
      const totalRows = Math.min(6, Math.floor((height - startY - 80) / (blockSize + blockGap)))
      const startX = width / 4 - (blocksPerRow * (blockSize + blockGap)) / 2

      let count = 0
      for (let row = 0; row < totalRows; row++) {
        for (let col = 0; col < blocksPerRow; col++) {
          const x = startX + col * (blockSize + blockGap)
          const y = startY + row * (blockSize + blockGap)

          const isOn = count < frame % (totalRows * blocksPerRow + 1)

          // Draw block
          ctx.fillStyle = isOn ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.2)"
          ctx.fillRect(x, y, blockSize, blockSize)

          // Draw value
          ctx.fillStyle = isOn ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.5)"
          ctx.font = `${fontSize}px monospace`
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.fillText(isOn ? "1" : "0", x + blockSize / 2, y + blockSize / 2)

          count++
        }
      }

      // Generate binary value
      const binaryValue = Array(totalRows * blocksPerRow)
        .fill(0)
        .map((_, i) => (i < frame % (totalRows * blocksPerRow + 1) ? "1" : "0"))
        .join("")

      // Draw binary representation
      const maxValueWidth = width / 3
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
      ctx.font = `${fontSize}px monospace`
      ctx.textAlign = "center"

      const valueText = `Value: ${truncateText(ctx, binaryValue, maxValueWidth - 60)}`
      ctx.fillText(valueText, width / 4, startY + totalRows * (blockSize + blockGap) + 30)

      // Calculate and draw decimal
      const decimalValue = Number.parseInt(binaryValue, 2)
      const decimalText = `Decimal: ${formatNumber(decimalValue)}`
      ctx.fillText(
        truncateText(ctx, decimalText, maxValueWidth),
        width / 4,
        startY + totalRows * (blockSize + blockGap) + 55,
      )
    }

    // Draw ternary representation
    const drawTernary = () => {
      const startY = 70
      const blocksPerRow = Math.min(6, Math.floor((width / 2 - 40) / (blockSize + blockGap)))
      const totalRows = Math.min(4, Math.floor((height - startY - 80) / (blockSize + blockGap)))
      const startX = (width * 3) / 4 - (blocksPerRow * (blockSize + blockGap)) / 2

      let count = 0
      for (let row = 0; row < totalRows; row++) {
        for (let col = 0; col < blocksPerRow; col++) {
          const x = startX + col * (blockSize + blockGap)
          const y = startY + row * (blockSize + blockGap)

          const tritValue =
            Math.floor((frame % (totalRows * blocksPerRow * 3 + 1)) / (totalRows * blocksPerRow)) >= 1
              ? count < frame % (totalRows * blocksPerRow + 1)
                ? (count % 3) - 1
                : 0
              : 0

          // Determine block appearance
          let blockColor, textColor, text
          if (tritValue === -1) {
            blockColor = "rgba(255, 100, 100, 0.7)"
            textColor = "rgba(255, 255, 255, 0.9)"
            text = "T"
          } else if (tritValue === 0) {
            blockColor = "rgba(100, 100, 100, 0.5)"
            textColor = "rgba(255, 255, 255, 0.9)"
            text = "0"
          } else if (tritValue === 1) {
            blockColor = "rgba(255, 215, 0, 0.7)"
            textColor = "rgba(0, 0, 0, 0.8)"
            text = "1"
          } else {
            blockColor = "rgba(50, 50, 50, 0.3)"
            textColor = "rgba(255, 255, 255, 0.5)"
            text = "0"
          }

          // Draw block
          ctx.fillStyle = blockColor
          ctx.fillRect(x, y, blockSize, blockSize)

          // Draw value
          ctx.fillStyle = textColor
          ctx.font = `${fontSize}px monospace`
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.fillText(text, x + blockSize / 2, y + blockSize / 2)

          count++
        }
      }

      // Generate ternary value
      const maxTrits = totalRows * blocksPerRow
      const activeTrits = Math.min(frame % (maxTrits + 1), maxTrits)
      const ternaryValue = Array(maxTrits)
        .fill(0)
        .map((_, i) => {
          if (i < activeTrits) {
            const tritValue = (i % 3) - 1
            return tritValue === -1 ? "T" : tritValue.toString()
          }
          return "0"
        })
        .join("")

      // Draw ternary representation
      const maxValueWidth = width / 3
      ctx.fillStyle = "rgba(255, 215, 0, 0.9)"
      ctx.font = `${fontSize}px monospace`
      ctx.textAlign = "center"

      const valueText = `Value: ${truncateText(ctx, ternaryValue, maxValueWidth - 60)}`
      ctx.fillText(valueText, (width * 3) / 4, startY + totalRows * (blockSize + blockGap) + 30)

      // Calculate and draw decimal
      const decimalValue = ternaryValue
        .split("")
        .reverse()
        .reduce((acc, trit, i) => {
          const value = trit === "T" ? -1 : Number.parseInt(trit)
          return acc + value * Math.pow(3, i)
        }, 0)

      const decimalText = `Decimal: ${formatNumber(decimalValue)}`
      ctx.fillText(
        truncateText(ctx, decimalText, maxValueWidth),
        (width * 3) / 4,
        startY + totalRows * (blockSize + blockGap) + 55,
      )
    }

    // Draw comparison
    drawBinary()
    drawTernary()

    // Draw efficiency comparison
    const comparisonY = height - 45
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
    ctx.font = `${fontSize}px monospace`
    ctx.textAlign = "center"
    ctx.fillText("Storage Efficiency Comparison", width / 2, comparisonY)

    // Draw comparison bars
    const barY = height - 25
    const barHeight = 12
    const maxBarWidth = width * 0.3

    // Binary bar (left side)
    const binaryBarX = width * 0.1
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
    ctx.fillRect(binaryBarX, barY, maxBarWidth, barHeight)
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
    ctx.textAlign = "center"
    ctx.fillText("100%", binaryBarX + maxBarWidth / 2, barY + barHeight + 15)

    // Ternary bar (right side)
    const ternaryBarX = width * 0.6
    const ternaryWidth = maxBarWidth * 0.63 // ~63% as efficient
    ctx.fillStyle = "rgba(255, 215, 0, 0.7)"
    ctx.fillRect(ternaryBarX, barY, ternaryWidth, barHeight)
    ctx.fillStyle = "rgba(255, 215, 0, 0.9)"
    ctx.textAlign = "center"
    ctx.fillText("63%", ternaryBarX + ternaryWidth / 2, barY + barHeight + 15)

    // Add labels
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
    ctx.textAlign = "center"
    ctx.fillText("Binary", width * 0.25, barY - 8)

    ctx.fillStyle = "rgba(255, 215, 0, 0.7)"
    ctx.fillText("Ternary", width * 0.75, barY - 8)
  }, [width, height, frame])

  // Animation loop
  useEffect(() => {
    if (!isPlaying) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      return
    }

    const animate = () => {
      setFrame((prev) => prev + 1)
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying])

  return (
    <div className="flex flex-col items-center my-8">
      <div className="relative backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-4 terminal-glow">
        <canvas ref={canvasRef} style={{ width, height }} className="rounded" />
        <div className="absolute bottom-2 right-2 text-xs text-terminal-dim font-mono bg-black/50 px-2 py-1 rounded">
          Binary vs. Ternary Comparison
        </div>
      </div>

      {showControls && (
        <div className="flex gap-2 mt-4">
          <Button variant="terminal-outline" size="sm" onClick={toggleAnimation} className="h-8 gap-1">
            {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
            {isPlaying ? "Pause" : "Play"}
          </Button>
          <Button variant="terminal-outline" size="sm" onClick={resetAnimation} className="h-8 gap-1">
            <RefreshCw className="h-3 w-3" />
            Reset
          </Button>
        </div>
      )}
    </div>
  )
}

