"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface StyledSectionProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "highlighted" | "bordered"
}

export function StyledSection({ children, className, variant = "default" }: StyledSectionProps) {
  return (
    <section
      className={cn(
        "my-8 p-6 rounded-lg",
        variant === "default" && "bg-terminal-code-bg/10",
        variant === "highlighted" && "bg-terminal-accent/10 border border-terminal-accent/30",
        variant === "bordered" && "border border-terminal-border/30 terminal-glow",
        className,
      )}
    >
      {children}
    </section>
  )
}

interface StyledComparisonProps {
  children: React.ReactNode
  className?: string
  title?: string
  leftTitle?: string
  rightTitle?: string
}

export function StyledComparison({
  children,
  className,
  title,
  leftTitle = "Binary",
  rightTitle = "Ternary",
}: StyledComparisonProps) {
  return (
    <div className={cn("my-8 rounded-lg border border-terminal-border/30 terminal-glow overflow-hidden", className)}>
      {title && (
        <div className="px-4 py-2 bg-terminal-accent/10 border-b border-terminal-border/30">
          <h3 className="text-lg font-mono font-bold text-terminal-accent">{title}</h3>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-terminal-border/30">
        <div className="p-4">
          <div className="text-sm font-mono font-bold text-terminal-dim mb-2">{leftTitle}</div>
          <div className="space-y-2">{Array.isArray(children) ? children[0] : null}</div>
        </div>
        <div className="p-4 bg-terminal-accent/5">
          <div className="text-sm font-mono font-bold text-terminal-accent mb-2">{rightTitle}</div>
          <div className="space-y-2">{Array.isArray(children) ? children[1] : null}</div>
        </div>
      </div>
    </div>
  )
}

