"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowLeft, ExternalLink, Maximize, Minimize } from "lucide-react"
import { CTAButton } from "@/components/CTAButton"
import { ScrollToTop } from "@/components/ScrollToTop"

export default function DexScreenerPage() {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    document.body.classList.add("dark")
  }, [])

  const toggleFullScreen = () => {
    if (!iframeRef.current) return

    if (!isFullScreen) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current
          .requestFullscreen()
          .then(() => setIsFullScreen(true))
          .catch((err) => console.error("Fullscreen error:", err))
      }
    } else {
      if (document && document.exitFullscreen) {
        document
          .exitFullscreen()
          .then(() => setIsFullScreen(false))
          .catch((err) => console.error("Exit fullscreen error:", err))
      }
    }
  }

  useEffect(() => {
    const handleFullScreenChange = () => {
      if (typeof document !== "undefined") {
        setIsFullScreen(!!document.fullscreenElement)
      }
    }

    if (typeof document !== "undefined") {
      document.addEventListener("fullscreenchange", handleFullScreenChange)
      return () => {
        document.removeEventListener("fullscreenchange", handleFullScreenChange)
      }
    }
  }, [])

  return (
    <div className="bg-black text-terminal-text">
      <ScrollToTop />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-background/50 pointer-events-none"></div>

      <main className="py-6 md:py-12 relative">
        <div className="container px-4 md:px-6 relative">
          <div className="space-y-4 mb-6">
            <div className="inline-block px-3 py-1 rounded-full bg-terminal-accent/10 border border-terminal-accent/20 text-terminal-accent text-xs font-mono">
              <span className="mr-1">$</span> ./market_data --live
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-mono font-bold tracking-tighter text-terminal-text">
                  Tritcoin Market Data
                </h1>
                <p className="text-terminal-dim font-mono mt-1">Live price chart and trading data from DexScreener</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <CTAButton
                  onClick={toggleFullScreen}
                  variant="secondary"
                  icon={isFullScreen ? Minimize : Maximize}
                  iconPosition="left"
                >
                  {isFullScreen ? "Exit Full Screen" : "Full Screen"}
                </CTAButton>
                <CTAButton
                  href="https://dexscreener.com/solana/7jvttJGLKKmAiA8Gfza9TW8i2D8Txv9Rpa9rPitCiRs5"
                  variant="secondary"
                  icon={ExternalLink}
                  iconPosition="right"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in DexScreener
                </CTAButton>
                <CTAButton href="/" variant="outline" icon={ArrowLeft} iconPosition="left">
                  Back to Home
                </CTAButton>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-2 md:p-4 terminal-glow">
            <div className="relative w-full" style={{ height: "calc(80vh - 100px)" }}>
              <iframe
                ref={iframeRef}
                src="https://dexscreener.com/solana/7jvttJGLKKmAiA8Gfza9TW8i2D8Txv9Rpa9rPitCiRs5?embed=1&theme=dark&trades=0"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  border: 0,
                }}
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-terminal-dim font-mono text-sm">
              Data provided by{" "}
              <a
                href="https://dexscreener.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-accent hover:underline"
              >
                DexScreener
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <CTAButton href="/" variant="secondary" icon={ArrowLeft} iconPosition="left">
            Back to Home
          </CTAButton>
          <CTAButton
            href="https://dexscreener.com/solana/7jvttJGLKKmAiA8Gfza9TW8i2D8Txv9Rpa9rPitCiRs5"
            variant="primary"
            icon={ExternalLink}
            iconPosition="right"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in DexScreener
          </CTAButton>
        </div>
      </main>
    </div>
  )
}

