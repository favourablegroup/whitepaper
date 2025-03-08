"use client"

import type React from "react"
import { useState } from "react"
import { Info, ChevronDown, ChevronUp } from "lucide-react"

interface TechnicalNoteProps {
  children: React.ReactNode
  title?: string
  expanded?: boolean
}

export function TechnicalNote({ children, title = "Technical Note", expanded = false }: TechnicalNoteProps) {
  const [isExpanded, setIsExpanded] = useState(expanded)

  return (
    <div className="my-6 rounded-lg border border-terminal-border/30 bg-terminal-code-bg/20 overflow-hidden terminal-glow">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-4 py-3 bg-terminal-accent/10 text-left"
      >
        <div className="flex items-center gap-2">
          <Info className="h-4 w-4 text-terminal-accent" />
          <span className="font-mono font-medium text-terminal-accent">{title}</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4 text-terminal-accent" />
        ) : (
          <ChevronDown className="h-4 w-4 text-terminal-accent" />
        )}
      </button>
      <div
        className={`px-4 py-3 font-mono text-terminal-dim text-sm transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden p-0"
        }`}
      >
        {children}
      </div>
    </div>
  )
}

