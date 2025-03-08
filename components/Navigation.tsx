"use client"

import Link from "next/link"
import { Terminal, FileText } from "lucide-react"
import { CTAButton } from "@/components/CTAButton"

export function Navigation() {
  return (
    <header className="border-b border-terminal-border/30 backdrop-blur-sm bg-black/30 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal className="h-6 w-6 text-terminal-accent group-hover:text-terminal-accent-bright transition-colors" />
          <span className="text-xl font-mono font-bold text-terminal-accent group-hover:text-terminal-accent-bright transition-colors hidden md:inline">
            Final Protocol Solutions
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/whitepaper"
            className="text-sm font-mono font-medium text-terminal-text hover:text-terminal-accent transition-colors"
          >
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
          <Link
            href="/dex-screener"
            className="text-sm font-mono font-medium text-terminal-text hover:text-terminal-accent transition-colors"
          >
            Market Data
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="text-sm font-mono font-medium text-terminal-text hover:text-terminal-accent transition-colors"
          >
            Contact
          </Link>
          <CTAButton href="/whitepaper" variant="primary" icon={FileText} iconPosition="left">
            Read Whitepaper
          </CTAButton>
        </div>
      </div>
    </header>
  )
}

