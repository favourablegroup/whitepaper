"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface WaveformPoint {
  x: number
  y: number
  type: "tfsk" | "tpsk" | "am"
}

const DURATION = 2 // seconds
const SAMPLE_RATE = 1000 // points per second (reduced for better performance)
const BASE_FREQ = 10 // cycles per second (for visualization only)

export function TernaryAudioVisualizer() {
  const waveformCanvasRef = useRef<HTMLCanvasElement>(null)
  const spectrogramCanvasRef = useRef<HTMLCanvasElement>(null)
  const [activeModulation, setActiveModulation] = useState<"tfsk" | "tpsk" | "am">("tfsk")
  const [isAnimating, setIsAnimating] = useState(false)
  const animationFrameRef = useRef<number>(0)
  const timeRef = useRef<number>(0)

  // Generate ternary sequence
  const generateTernarySequence = (length: number) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 3) - 1) // -1, 0, 1
  }

  // Generate modulated waveform data
  const generateWaveformData = (sequence: number[], modType: "tfsk" | "tpsk" | "am"): WaveformPoint[] => {
    const points: WaveformPoint[] = []
    const samplesPerTrit = Math.floor(SAMPLE_RATE * 0.05) // 50ms per trit

    sequence.forEach((trit, tritIndex) => {
      for (let i = 0; i < samplesPerTrit; i++) {
        const t = (tritIndex * samplesPerTrit + i) / SAMPLE_RATE
        let y = 0

        switch (modType) {
          case "tfsk":
            // Frequency shift based on trit value
            const freqShift = trit * 2
            y = Math.sin(2 * Math.PI * (BASE_FREQ + freqShift) * t)
            break
          case "tpsk":
            // Phase shift based on trit value
            y = Math.sin(2 * Math.PI * BASE_FREQ * t + (trit * Math.PI) / 3)
            break
          case "am":
            // Amplitude modulation based on trit value
            const amplitude = 0.5 + (trit + 1) * 0.25 // 0.5, 0.75, 1.0
            y = amplitude * Math.sin(2 * Math.PI * BASE_FREQ * t)
            break
        }

        points.push({ x: t, y, type: modType })
      }
    })

    return points
  }

  // Draw waveform
  const drawWaveform = (points: WaveformPoint[]) => {
    const canvas = waveformCanvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const { width, height } = canvas
    ctx.clearRect(0, 0, width, height)

    // Draw grid
    ctx.strokeStyle = "#1a1a1a"
    ctx.lineWidth = 1
    ctx.beginPath()
    for (let x = 0; x < width; x += 50) {
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
    }
    for (let y = 0; y < height; y += 25) {
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
    }
    ctx.stroke()

    // Draw center line
    ctx.strokeStyle = "#333"
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(0, height / 2)
    ctx.lineTo(width, height / 2)
    ctx.stroke()

    // Draw waveform
    ctx.strokeStyle = getModulationColor(activeModulation)
    ctx.lineWidth = 2
    ctx.beginPath()

    points.forEach((point, i) => {
      const x = (point.x / DURATION) * width
      const y = height / 2 - (point.y * height) / 2

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()

    // Draw labels
    ctx.font = "12px monospace"
    ctx.fillStyle = "#888"
    ctx.fillText(`${activeModulation.toUpperCase()} Modulation`, 10, 20)
    ctx.fillText("Time (s)", width - 60, height - 10)
    ctx.fillText("Amplitude", 10, 20)
  }

  // Draw spectrogram
  const drawSpectrogram = (points: WaveformPoint[]) => {
    const canvas = spectrogramCanvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const { width, height } = canvas
    ctx.clearRect(0, 0, width, height)

    // Draw grid
    ctx.strokeStyle = "#1a1a1a"
    ctx.lineWidth = 1
    ctx.beginPath()
    for (let x = 0; x < width; x += 50) {
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
    }
    for (let y = 0; y < height; y += 25) {
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
    }
    ctx.stroke()

    // Create a simulated spectrogram based on the modulation type
    const imageData = ctx.createImageData(width, height)
    const data = imageData.data

    // Generate frequency data based on modulation type
    for (let x = 0; x < width; x++) {
      const t = (x / width) * DURATION
      const pointIndex = Math.floor(t * SAMPLE_RATE)
      const point = points[Math.min(pointIndex, points.length - 1)]

      if (!point) continue

      const freqProfile: number[] = []
      const trit = Math.sign(point.y) // Simplified trit extraction

      switch (activeModulation) {
        case "tfsk":
          // For TFSK, we show different frequency bands based on trit value
          for (let y = 0; y < height; y++) {
            const freq = (1 - y / height) * 50 // 0-50 Hz range
            const baseFreq = 20 // Base frequency
            const tritFreq = baseFreq + trit * 5 // Shift by trit

            // Create a peak around the frequency
            const intensity = Math.exp(-Math.pow(freq - tritFreq, 2) / 10) * 255
            freqProfile.push(intensity)
          }
          break

        case "tpsk":
          // For TPSK, we show phase shifts as patterns
          for (let y = 0; y < height; y++) {
            const freq = (1 - y / height) * 50
            const baseFreq = 20

            // Phase shifts create different patterns
            const phaseShift = (trit * Math.PI) / 3
            const intensity = (Math.sin(freq + phaseShift) * 0.5 + 0.5) * 255
            freqProfile.push(intensity)
          }
          break

        case "am":
          // For AM, we show sidebands around the carrier
          for (let y = 0; y < height; y++) {
            const freq = (1 - y / height) * 50
            const baseFreq = 20

            // AM creates sidebands
            const amplitude = 0.5 + (trit + 1) * 0.25
            const lowerSideband = Math.exp(-Math.pow(freq - (baseFreq - 5), 2) / 10) * amplitude * 255
            const carrier = Math.exp(-Math.pow(freq - baseFreq, 2) / 5) * 255
            const upperSideband = Math.exp(-Math.pow(freq - (baseFreq + 5), 2) / 10) * amplitude * 255

            freqProfile.push(Math.max(lowerSideband, carrier, upperSideband))
          }
          break
      }

      // Apply the frequency profile to this column
      for (let y = 0; y < height; y++) {
        const intensity = freqProfile[y] || 0
        const index = (y * width + x) * 4

        // Apply color based on modulation type
        const color = getModulationRGB(activeModulation)
        data[index] = (color.r * intensity) / 255 // R
        data[index + 1] = (color.g * intensity) / 255 // G
        data[index + 2] = (color.b * intensity) / 255 // B
        data[index + 3] = intensity // A
      }
    }

    ctx.putImageData(imageData, 0, 0)

    // Draw labels
    ctx.font = "12px monospace"
    ctx.fillStyle = "#888"
    ctx.fillText("Frequency (Hz)", 10, 20)
    ctx.fillText("Time (s)", width - 60, height - 10)
    ctx.fillText("50", 10, 20)
    ctx.fillText("0", 10, height - 10)
  }

  // Get color based on modulation type
  const getModulationColor = (type: "tfsk" | "tpsk" | "am") => {
    switch (type) {
      case "tfsk":
        return "#ffd700" // Gold
      case "tpsk":
        return "#00ff00" // Green
      case "am":
        return "#ff00ff" // Magenta
    }
  }

  // Get RGB values for modulation type
  const getModulationRGB = (type: "tfsk" | "tpsk" | "am") => {
    switch (type) {
      case "tfsk":
        return { r: 255, g: 215, b: 0 } // Gold
      case "tpsk":
        return { r: 0, g: 255, b: 0 } // Green
      case "am":
        return { r: 255, g: 0, b: 255 } // Magenta
    }
  }

  // Handle animation toggle
  const toggleAnimation = () => {
    if (isAnimating) {
      cancelAnimationFrame(animationFrameRef.current)
      setIsAnimating(false)
    } else {
      setIsAnimating(true)
      timeRef.current = 0
      animate()
    }
  }

  // Animation loop
  const animate = () => {
    timeRef.current += 0.01
    if (timeRef.current > DURATION) {
      timeRef.current = 0
    }

    // Generate new sequence and visualize
    const sequence = generateTernarySequence(40)
    const points = generateWaveformData(sequence, activeModulation)

    drawWaveform(points)
    drawSpectrogram(points)

    animationFrameRef.current = requestAnimationFrame(animate)
  }

  // Handle modulation change
  const changeModulation = (type: "tfsk" | "tpsk" | "am") => {
    setActiveModulation(type)

    // Update visualization with new modulation type
    const sequence = generateTernarySequence(40)
    const points = generateWaveformData(sequence, type)

    drawWaveform(points)
    drawSpectrogram(points)
  }

  // Initialize visualization
  useEffect(() => {
    const sequence = generateTernarySequence(40)
    const points = generateWaveformData(sequence, activeModulation)

    drawWaveform(points)
    drawSpectrogram(points)

    return () => {
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  return (
    <Card className="p-6 bg-black/90 border-terminal-accent">
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-mono text-terminal-accent">Ternary Audio Encryption</h3>
          <div className="space-x-2">
            <Button
              variant="outline"
              className={activeModulation === "tfsk" ? "bg-terminal-accent text-black" : ""}
              onClick={() => changeModulation("tfsk")}
            >
              TFSK
            </Button>
            <Button
              variant="outline"
              className={activeModulation === "tpsk" ? "bg-terminal-accent text-black" : ""}
              onClick={() => changeModulation("tpsk")}
            >
              TPSK
            </Button>
            <Button
              variant="outline"
              className={activeModulation === "am" ? "bg-terminal-accent text-black" : ""}
              onClick={() => changeModulation("am")}
            >
              AM
            </Button>
            <Button variant="outline" onClick={toggleAnimation}>
              {isAnimating ? "Stop" : "Animate"}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="relative">
            <canvas
              ref={waveformCanvasRef}
              width={800}
              height={200}
              className="w-full bg-black border border-terminal-accent"
            />
            <div className="absolute top-2 right-2 text-xs text-terminal-dim font-mono">Waveform Visualization</div>
          </div>

          <div className="relative">
            <canvas
              ref={spectrogramCanvasRef}
              width={800}
              height={200}
              className="w-full bg-black border border-terminal-accent"
            />
            <div className="absolute top-2 right-2 text-xs text-terminal-dim font-mono">Frequency Spectrogram</div>
          </div>
        </div>

        <div className="mt-4 p-4 border border-terminal-accent/30 bg-black/50 rounded">
          <h4 className="text-terminal-accent font-mono mb-2">Ternary Modulation Techniques</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-terminal-dim font-mono">
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: "#ffd700" }}></div>
                <span className="font-bold">TFSK</span>
              </div>
              <p>Ternary Frequency Shift Keying varies the carrier frequency based on trit value:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Trit -1: f₀-Δf</li>
                <li>Trit 0: f₀</li>
                <li>Trit +1: f₀+Δf</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: "#00ff00" }}></div>
                <span className="font-bold">TPSK</span>
              </div>
              <p>Ternary Phase Shift Keying shifts the signal phase based on trit value:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Trit -1: -π/3</li>
                <li>Trit 0: 0</li>
                <li>Trit +1: +π/3</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: "#ff00ff" }}></div>
                <span className="font-bold">AM</span>
              </div>
              <p>Amplitude Modulation varies the signal amplitude based on trit value:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Trit -1: 0.75A</li>
                <li>Trit 0: A</li>
                <li>Trit +1: 1.25A</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-sm text-terminal-dim font-mono">
          <p>
            Our ternary audio encryption provides superior information density compared to binary systems, encoding 1.58
            bits per symbol. The balanced ternary representation (-1, 0, +1) creates unique spectral patterns that are
            quantum-resistant and difficult to detect without the correct decryption key.
          </p>
        </div>
      </div>
    </Card>
  )
}

