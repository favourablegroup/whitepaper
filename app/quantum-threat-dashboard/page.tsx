"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import QuantumThreatDashboard from "./QuantumThreatDashboard"
import { ScrollToTop } from "@/components/ScrollToTop"

export default function QuantumThreatDashboardPage() {
  useEffect(() => {
    document.body.classList.add("dark")
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-black text-terminal-text">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-background/50 pointer-events-none"></div>

      <main className="flex-1 py-12 relative">
        <div className="container px-4 md:px-6 relative">
          <div className="mb-8 flex items-center justify-between">
            <div className="inline-block px-3 py-1 rounded-full bg-terminal-accent/10 border border-terminal-accent/20 text-terminal-accent text-xs font-mono">
              <span className="mr-1">$</span> ./quantum_threat_monitor --realtime
            </div>
            <Button variant="terminal-outline" size="sm" asChild>
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
            <QuantumThreatDashboard />
          </div>
        </div>
      </main>

      <ScrollToTop />
    </div>
  )
}

