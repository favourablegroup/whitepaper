"use client"

import React from "react"
import Link from "next/link"
import { Terminal, ChevronLeft, ChevronRight, Copy, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhitepaperLayoutProps {
  children: React.ReactNode
  title: string
  sectionNumber: number
  totalSections: number
  estimatedReadingTime: number
  prevSection?: {
    title: string
    slug: string
  }
  nextSection?: {
    title: string
    slug: string
  }
}

export function WhitepaperLayout({
  children,
  title,
  sectionNumber,
  totalSections,
  estimatedReadingTime,
  prevSection,
  nextSection,
}: WhitepaperLayoutProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopyCitation = () => {
    const citation = `Fractalmoto, T. (2025). "${title}". Tritcoin: A Peer-to-Peer Ternary Electronic Cash System. Final Protocol Solutions.`
    navigator.clipboard.writeText(citation)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-terminal-text">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-background/50 pointer-events-none"></div>

      <header className="border-b border-terminal-border/30 backdrop-blur-sm bg-black/30 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 group">
            <Terminal className="h-6 w-6 text-terminal-accent group-hover:text-terminal-accent-bright transition-colors" />
            <span className="text-xl font-mono font-bold text-terminal-accent group-hover:text-terminal-accent-bright transition-colors">
              Final Protocol Solutions
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/whitepaper" className="text-sm font-mono font-medium text-terminal-accent">
              Whitepaper
            </Link>
            <Link
              href="/technology"
              className="text-sm font-mono font-medium text-terminal-text hover:text-terminal-accent transition-colors"
            >
              Technology
            </Link>
            <Link
              href="/about"
              className="text-sm font-mono font-medium text-terminal-text hover:text-terminal-accent transition-colors"
            >
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="text-sm font-mono font-medium text-terminal-text hover:text-terminal-accent transition-colors"
            >
              Contact
            </Link>
            <Button variant="terminal" asChild>
              <Link href="/whitepaper">All Sections</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-24 lg:py-32 relative">
        <div className="container px-4 md:px-6 relative">
          {/* Section progress indicator */}
          <div className="mb-8 flex items-center justify-between">
            <div className="inline-block px-3 py-1 rounded-full bg-terminal-accent/10 border border-terminal-accent/20 text-terminal-accent text-xs font-mono">
              <span className="mr-1">$</span> cat whitepaper/section_{sectionNumber}.mdx
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-terminal-dim text-sm font-mono">
                <Clock className="h-4 w-4" />
                <span>{estimatedReadingTime} min read</span>
              </div>
              <Button variant="terminal-outline" size="sm" className="text-xs h-8 gap-1" onClick={handleCopyCitation}>
                <Copy className="h-3 w-3" />
                {copied ? "Copied!" : "Cite"}
              </Button>
              <div className="text-xs text-terminal-dim font-mono">Online version only</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-1 bg-terminal-border/20 rounded-full mb-8 overflow-hidden">
            <div
              className="h-full bg-terminal-accent"
              style={{ width: `${((sectionNumber + 1) / (totalSections + 1)) * 100}%` }}
            ></div>
          </div>

          {/* Main content */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">{children}</div>
          </div>

          {/* Navigation between sections */}
          <div className="mt-16 flex justify-between">
            {prevSection ? (
              <Button variant="terminal-outline" asChild>
                <Link href={`/whitepaper/${prevSection.slug}`} className="flex items-center gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  {prevSection.title}
                </Link>
              </Button>
            ) : (
              <div></div>
            )}
            {nextSection ? (
              <Button variant="terminal" asChild>
                <Link href={`/whitepaper/${nextSection.slug}`} className="flex items-center gap-2">
                  {nextSection.title}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-terminal-border/30 py-6 md:py-0 backdrop-blur-sm bg-black/30">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-terminal-accent" />
            <p className="text-sm text-terminal-dim font-mono">© 2025 Final Protocol Solutions. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://fractal.investments"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-terminal-dim font-mono hover:text-terminal-accent transition-colors"
            >
              fractal.investments
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm text-terminal-dim font-mono hover:text-terminal-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-terminal-dim font-mono hover:text-terminal-accent transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/contact"
              className="text-sm text-terminal-dim font-mono hover:text-terminal-accent transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

