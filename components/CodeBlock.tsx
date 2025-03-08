"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  children: string
  language?: string
  showLineNumbers?: boolean
  highlight?: number[]
}

export function CodeBlock({
  children,
  language = "typescript",
  showLineNumbers = true,
  highlight = [],
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = children.trim().split("\n")

  return (
    <div className="relative my-6 overflow-hidden rounded-lg border border-terminal-border/30 bg-terminal-code-bg/30 terminal-glow">
      <div className="flex items-center justify-between px-4 py-2 border-b border-terminal-border/30 bg-black/50">
        <span className="text-xs font-mono text-terminal-dim">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-terminal-dim hover:text-terminal-accent transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono">
          {lines.map((line, i) => (
            <div
              key={i}
              className={cn(
                "px-2 -mx-2 rounded",
                highlight.includes(i + 1) && "bg-terminal-accent/10 border-l-2 border-terminal-accent",
              )}
            >
              {showLineNumbers && (
                <span className="inline-block w-8 text-right mr-4 text-terminal-dim select-none">{i + 1}</span>
              )}
              <span className="text-terminal-text">{line}</span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  )
}

