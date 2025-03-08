"use client"
import { cn } from "@/lib/utils"

interface MathBlockProps {
  children: string
  className?: string
  centered?: boolean
}

export function MathBlock({ children, className, centered = true }: MathBlockProps) {
  return (
    <div
      className={cn(
        "my-6 py-4 px-6 font-mono text-terminal-accent-bright overflow-x-auto",
        centered && "text-center",
        className,
      )}
    >
      {children}
    </div>
  )
}

