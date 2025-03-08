"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface ZKPVisualizerProps {
  width?: number
  height?: number
  theme?: "light" | "dark"
}

type TritValue = "T" | "0" | "1"
type Phase = "commitment" | "challenge" | "response"

interface TernaryProof {
  commitment: TritValue[]
  challenge: TritValue[]
  response: TritValue[]
}

export const ZKPVisualizer: React.FC<ZKPVisualizerProps> = ({ width = 800, height = 400, theme = "dark" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [activePhase, setActivePhase] = useState<Phase>("commitment")
  const [proof, setProof] = useState<TernaryProof>({
    commitment: Array.from({ length: 27 }, () => ["T", "0", "1"][Math.floor(Math.random() * 3)] as TritValue),
    challenge: Array.from({ length: 27 }, () => ["T", "0", "1"][Math.floor(Math.random() * 3)] as TritValue),
    response: Array.from({ length: 27 }, () => ["T", "0", "1"][Math.floor(Math.random() * 3)] as TritValue),
  })

  const colors = {
    T: "#ff4444", // Red for negative/T
    "0": "#ff9933", // Orange for balanced/0
    "1": "#44ff44", // Green for positive/1
    background: theme === "dark" ? "#000000" : "#ffffff",
    text: theme === "dark" ? "#ffffff" : "#000000",
    border: theme === "dark" ? "#333333" : "#dddddd",
  }

  const drawProofPhase = (ctx: CanvasRenderingContext2D, phase: Phase) => {
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = colors.background
    ctx.fillRect(0, 0, width, height)

    const values = proof[phase]
    const stepX = width / (values.length - 1)
    const midY = height / 2

    ctx.lineWidth = 2
    ctx.beginPath()

    values.forEach((trit, i) => {
      const x = stepX * i
      // Visualize ternary values vertically
      const y = midY + (trit === "T" ? 50 : trit === "0" ? 0 : -50)

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }

      // Draw node
      ctx.fillStyle = colors[trit]
      ctx.beginPath()
      ctx.arc(x, y, 6, 0, Math.PI * 2)
      ctx.fill()
    })

    // Draw connecting lines
    ctx.strokeStyle = colors[values[0]]
    ctx.stroke()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    drawProofPhase(ctx, activePhase)
  }, [proof, activePhase, width, height, theme])

  const generateNewProof = () => {
    setProof({
      commitment: Array.from({ length: 27 }, () => ["T", "0", "1"][Math.floor(Math.random() * 3)] as TritValue),
      challenge: Array.from({ length: 27 }, () => ["T", "0", "1"][Math.floor(Math.random() * 3)] as TritValue),
      response: Array.from({ length: 27 }, () => ["T", "0", "1"][Math.floor(Math.random() * 3)] as TritValue),
    })
  }

  return (
    <div className="flex flex-col gap-8 p-4 bg-terminal-code-bg/10 rounded-lg border border-terminal-border/30 terminal-glow">
      <canvas ref={canvasRef} width={width} height={height} className="rounded-lg bg-black" />

      <div className="flex gap-4 justify-center">
        <button
          className={`px-4 py-2 rounded-md ${
            activePhase === "commitment" ? "bg-terminal-accent text-white" : "bg-terminal-code-bg/30 text-terminal-dim"
          }`}
          onClick={() => setActivePhase("commitment")}
        >
          Commitment
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activePhase === "challenge" ? "bg-terminal-accent text-white" : "bg-terminal-code-bg/30 text-terminal-dim"
          }`}
          onClick={() => setActivePhase("challenge")}
        >
          Challenge
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activePhase === "response" ? "bg-terminal-accent text-white" : "bg-terminal-code-bg/30 text-terminal-dim"
          }`}
          onClick={() => setActivePhase("response")}
        >
          Response
        </button>
      </div>

      <button
        onClick={generateNewProof}
        className="px-4 py-2 bg-terminal-accent text-white rounded-md hover:bg-terminal-accent/80 transition-colors"
      >
        Generate New Proof
      </button>

      <div className="space-y-4">
        <div
          className={`p-6 rounded-lg bg-terminal-code-bg/20 border-2 ${
            activePhase === "commitment" ? "border-terminal-accent" : "border-terminal-border/30"
          }`}
        >
          <h3 className="text-xl font-bold text-terminal-accent mb-4">Commitment Phase</h3>
          <div>
            <code className="font-mono text-sm break-all p-2 bg-terminal-code-bg/10 block rounded-md">
              {proof.commitment.join("")}
            </code>
          </div>
        </div>

        <div
          className={`p-6 rounded-lg bg-terminal-code-bg/20 border-2 ${
            activePhase === "challenge" ? "border-terminal-accent" : "border-terminal-border/30"
          }`}
        >
          <h3 className="text-xl font-bold text-terminal-accent mb-4">Challenge Phase</h3>
          <div>
            <code className="font-mono text-sm break-all p-2 bg-terminal-code-bg/10 block rounded-md">
              {proof.challenge.join("")}
            </code>
          </div>
        </div>

        <div
          className={`p-6 rounded-lg bg-terminal-code-bg/20 border-2 ${
            activePhase === "response" ? "border-terminal-accent" : "border-terminal-border/30"
          }`}
        >
          <h3 className="text-xl font-bold text-terminal-accent mb-4">Response Phase</h3>
          <div>
            <code className="font-mono text-sm break-all p-2 bg-terminal-code-bg/10 block rounded-md">
              {proof.response.join("")}
            </code>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-terminal-code-bg/20 rounded-lg">
        <h4 className="text-lg font-bold text-terminal-accent mb-2">Color Legend</h4>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colors.T }}></div>
            <span>T (Negative)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colors["0"] }}></div>
            <span>0 (Balanced)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colors["1"] }}></div>
            <span>1 (Positive)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

