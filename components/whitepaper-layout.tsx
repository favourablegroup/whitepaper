import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface WhitepaperLayoutProps {
  children: React.ReactNode
  title: string
  section: string
}

export function WhitepaperLayout({ children, title, section }: WhitepaperLayoutProps) {
  const sections = [
    { id: "executive-summary", title: "Executive Summary", href: "/whitepaper/executive-summary" },
    { id: "introduction", title: "Introduction", href: "/whitepaper/introduction" },
    { id: "theoretical-foundations", title: "Theoretical Foundations", href: "/whitepaper/theoretical-foundations" },
    { id: "tritcoin-architecture", title: "TritCoin Architecture", href: "/whitepaper/tritcoin-architecture" },
    { id: "ultra-secure-hash", title: "Ultra-Secure Hash", href: "/whitepaper/ultra-secure-hash" },
    { id: "privacy-technologies", title: "Privacy Technologies", href: "/whitepaper/privacy-technologies" },
    { id: "smart-contracts", title: "Smart Contracts", href: "/whitepaper/smart-contracts" },
    {
      id: "implementation-performance",
      title: "Implementation & Performance",
      href: "/whitepaper/implementation-performance",
    },
    { id: "economic-model", title: "Economic Model", href: "/whitepaper/economic-model" },
    { id: "user-experience", title: "User Experience", href: "/whitepaper/user-experience" },
    { id: "security-auditing", title: "Security Auditing", href: "/whitepaper/security-auditing" },
    { id: "future-development", title: "Future Development", href: "/whitepaper/future-development" },
    { id: "conclusion", title: "Conclusion", href: "/whitepaper/conclusion" },
  ]

  const currentIndex = sections.findIndex((s) => s.id === section)
  const prevSection = currentIndex > 0 ? sections[currentIndex - 1] : null
  const nextSection = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null

  return (
    <div className="container py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="sticky top-20">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold mb-3 text-gold">TritCoin Whitepaper</h3>
              {sections.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  asChild
                  className={cn(
                    "w-full justify-start font-mono",
                    item.id === section
                      ? "bg-gold/10 text-gold hover:bg-gold/20"
                      : "hover:bg-gold/5 text-terminal-text hover:text-terminal-accent",
                  )}
                >
                  <Link href={item.href}>{item.title}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-gold mb-6 font-mono">{title}</h1>

          <div className="prose prose-invert max-w-none prose-pre:bg-black/50 prose-pre:border prose-pre:border-terminal-border/30">
            {children}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-16 pt-6 border-t border-terminal-border/30">
            {prevSection ? (
              <Button
                variant="outline"
                asChild
                className="border-terminal-border/30 text-terminal-text hover:bg-terminal-accent/10 hover:text-terminal-accent"
              >
                <Link href={prevSection.href}>
                  <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
                  {prevSection.title}
                </Link>
              </Button>
            ) : (
              <div />
            )}

            {nextSection && section !== "conclusion" && (
              <Button
                variant="outline"
                asChild
                className="border-terminal-border/30 text-terminal-text hover:bg-terminal-accent/10 hover:text-terminal-accent"
              >
                <Link href={nextSection.href}>
                  {nextSection.title}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

