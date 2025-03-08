import type { ReactNode } from "react"
import { ScrollToTop } from "@/components/ScrollToTop"

interface WhitepaperLayoutProps {
  children: ReactNode
}

export default function WhitepaperLayout({ children }: WhitepaperLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-terminal-text">
      <ScrollToTop />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-background/50 pointer-events-none"></div>
      <main className="relative">{children}</main>
    </div>
  )
}

