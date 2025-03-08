"use client"

import type React from "react"

import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface CTAButtonProps {
  href?: string
  variant?: "primary" | "secondary"
  icon?: LucideIcon
  iconPosition?: "left" | "right"
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
  onClick?: () => void
}

export function CTAButton({
  href = "#",
  variant = "primary",
  icon: Icon,
  iconPosition = "left",
  children,
  className,
  target,
  rel,
  onClick,
}: CTAButtonProps) {
  const buttonClasses = cn(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
    "px-4 py-2 font-mono",
    variant === "primary"
      ? "bg-terminal-accent hover:bg-terminal-accent-bright text-black"
      : "bg-transparent border border-terminal-accent text-terminal-accent hover:bg-terminal-accent/10",
    className,
  )

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="mr-2 h-4 w-4" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="ml-2 h-4 w-4" />}
    </>
  )

  if (onClick) {
    return (
      <button className={buttonClasses} onClick={onClick}>
        {content}
      </button>
    )
  }

  const isExternal = href && href.startsWith("http")

  if (isExternal) {
    return (
      <a href={href} className={buttonClasses} target={target} rel={rel}>
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={buttonClasses}>
      {content}
    </Link>
  )
}

