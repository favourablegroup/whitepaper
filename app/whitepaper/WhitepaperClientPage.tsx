"use client"

import React, { useEffect } from "react"
import Link from "next/link"
import { Search, ChevronRight, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { CTAButton } from "@/components/CTAButton"

const sections = [
  {
    number: 1,
    title: "Introduction",
    slug: "introduction",
    description: "The limitations of binary blockchains and the balanced ternary revolution",
  },
  {
    number: 2,
    title: "Theoretical Foundations",
    slug: "theoretical-foundations",
    description: "Mathematical principles behind balanced ternary computing",
  },
  {
    number: 3,
    title: "TritCoin Architecture",
    slug: "tritcoin-architecture",
    description: "Core system design and implementation details",
  },
  {
    number: 4,
    title: "Ultra Secure Hash",
    slug: "ultra-secure-hash",
    description: "Advanced cryptographic hashing mechanisms",
  },
  {
    number: 5,
    title: "Privacy Technologies",
    slug: "privacy-technologies",
    description: "Privacy-preserving features and zero-knowledge proofs",
  },
  {
    number: 6,
    title: "Smart Contracts",
    slug: "smart-contracts",
    description: "Ternary-based smart contract implementation",
  },
  {
    number: 7,
    title: "Implementation & Performance",
    slug: "implementation-performance",
    description: "Technical implementation details and performance benchmarks",
  },
  {
    number: 8,
    title: "Economic Model",
    slug: "economic-model",
    description: "Tokenomics and economic incentives",
  },
  {
    number: 9,
    title: "User Experience",
    slug: "user-experience",
    description: "Interfaces and user interaction design",
  },
  {
    number: 10,
    title: "Security Auditing",
    slug: "security-auditing",
    description: "Security analysis and formal verification",
  },
  {
    number: 11,
    title: "Future Development",
    slug: "future-development",
    description: "Roadmap and future research directions",
  },
  {
    number: 12,
    title: "Conclusion",
    slug: "conclusion",
    description: "Summary and closing thoughts",
  },
]

export default function WhitepaperClientPage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [filteredSections, setFilteredSections] = React.useState(sections)

  useEffect(() => {
    document.body.classList.add("dark")
  }, [])

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredSections(sections)
    } else {
      const filtered = sections.filter(
        (section) =>
          section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          section.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setFilteredSections(filtered)
    }
  }, [searchTerm])

  return (
    <main className="flex flex-col min-h-screen bg-black text-terminal-text">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-background/50 pointer-events-none"></div>

      <div className="flex-1 py-12 md:py-24 lg:py-32 relative">
        <div className="container px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto">
            {/* Content sections remain the same */}
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-terminal-accent/10 border border-terminal-accent/20 text-terminal-accent text-xs font-mono">
                <span className="mr-1">$</span> ls -la whitepaper/
              </div>
              <h1 className="text-3xl font-mono font-bold tracking-tighter sm:text-4xl md:text-5xl text-terminal-text">
                Tritcoin Whitepaper
              </h1>
              <p className="text-terminal-dim md:text-xl font-mono">A Peer-to-Peer Ternary Electronic Cash System</p>
            </div>

            {/* Executive Summary section */}
            <div className="mt-12 backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-8 terminal-glow">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2 space-y-4">
                  <h2 className="text-2xl font-mono font-bold text-terminal-accent">Executive Summary</h2>
                  <p className="text-terminal-dim font-mono leading-relaxed">
                    TritCoin represents a paradigm shift in blockchain technology through its innovative implementation
                    of balanced ternary computing. Built on a modern React/Next.js stack with TypeScript, TritCoin
                    combines ancient wisdom with cutting-edge technology to create a more efficient, secure, and
                    sustainable blockchain platform.
                  </p>
                  <div className="flex gap-4 pt-2">
                    <CTAButton
                      href="/whitepaper/executive-summary"
                      variant="primary"
                      icon={ArrowRight}
                      iconPosition="right"
                    >
                      Read Full Summary
                    </CTAButton>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-[200px] aspect-square">
                    <div className="absolute inset-0 bg-gradient-to-r from-terminal-accent/20 to-terminal-accent-bright/10 rounded-full blur-3xl opacity-30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full max-w-xs max-h-xs border border-terminal-accent/30 rounded-full flex items-center justify-center relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="grid grid-cols-3 gap-2 transform rotate-45">
                            {Array.from({ length: 9 }).map((_, i) => (
                              <div
                                key={i}
                                className={`w-4 h-4 rounded-full ${i % 3 === 0 ? "bg-terminal-accent" : i % 3 === 1 ? "bg-terminal-accent/50" : "border border-terminal-accent"} ${i % 2 === 0 ? "animate-pulse-slow" : ""}`}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Search section */}
            <div className="mt-12 flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-terminal-dim" />
                <Input
                  type="text"
                  placeholder="Search whitepaper sections..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-terminal-code-bg/50 border-terminal-border/50 text-terminal-text font-mono focus:border-terminal-accent focus:ring-terminal-accent"
                />
              </div>
            </div>

            {/* Sections grid */}
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredSections.map((section) => (
                <Link
                  key={section.slug}
                  href={`/whitepaper/${section.slug}`}
                  className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow transition-all duration-200 hover:border-terminal-accent/50 hover:bg-terminal-accent/5"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 text-sm font-mono text-terminal-accent">
                      {section.number}
                    </div>
                    <ChevronRight className="h-5 w-5 text-terminal-accent" />
                  </div>
                  <h2 className="text-lg font-mono font-bold text-terminal-text mb-2">{section.title}</h2>
                  <p className="text-sm text-terminal-dim font-mono">{section.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

