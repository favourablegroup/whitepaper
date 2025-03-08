"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  ArrowRight,
  Shield,
  Zap,
  Lock,
  ChevronRight,
  AlertTriangle,
  Eye,
  EyeOff,
  Server,
  BarChart3,
  ExternalLink,
  TrendingUp,
  FileText,
  Copy,
} from "lucide-react"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { CTAButton } from "@/components/CTAButton"
import { QuantumThreatsCTA } from "@/components/QuantumThreatsCTA"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    document.body.classList.add("dark")
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col min-h-screen bg-black text-terminal-text">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-background/50 pointer-events-none"></div>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-radial from-terminal-accent/10 via-transparent to-transparent pointer-events-none"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-terminal-accent/10 border border-terminal-accent/20 text-terminal-accent text-xs font-mono">
                  <span className="mr-1">$</span> ./launch_protocol --secure --quantum
                </div>
                <h1 className="text-3xl font-mono font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-terminal-text">
                  <span className="text-terminal-accent">Tritcoin:</span> The Final Protocol
                </h1>
                <div className="h-12 overflow-hidden font-mono text-terminal-dim">
                  <TypewriterEffect text="Quantum Secure Financial Infrastructure for the Post-Binary Era" />
                </div>
                <p className="max-w-[600px] text-terminal-dim md:text-xl font-mono">
                  The world's first base-3 blockchain, designed by Tritoshi Fractalmoto to revolutionize cryptographic
                  security.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <CTAButton
                    href="/whitepaper/executive-summary"
                    variant="primary"
                    icon={ChevronRight}
                    iconPosition="right"
                  >
                    Read Executive Summary
                  </CTAButton>
                  <CTAButton href="/whitepaper" variant="secondary" icon={FileText} iconPosition="left">
                    Full Whitepaper
                  </CTAButton>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-terminal-accent/20 to-terminal-accent-bright/10 rounded-full blur-3xl opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 md:w-96 md:h-96 border border-terminal-accent/30 rounded-full flex items-center justify-center relative">
                      <div className="w-48 h-48 md:w-72 md:h-72 border border-terminal-accent/50 rounded-full flex items-center justify-center animate-pulse-slow">
                        <div className="w-[134px] h-[134px] md:w-[200px] md:h-[200px] border border-terminal-accent rounded-full flex items-center justify-center overflow-hidden">
                          <div className="w-full h-full rounded-full overflow-hidden">
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/page_loader_small_cropped-0G72Km7klViaE7SgGvXfeNSxC9gNCS.gif"
                              alt="Tritcoin Logo"
                              width={300}
                              height={300}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DexScreener CTA */}
        <section className="w-full py-8 md:py-12 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="p-6 border border-terminal-accent/30 rounded-lg bg-black/50 terminal-glow relative overflow-hidden">
              {/* Background effects */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-terminal-accent/10 via-transparent to-terminal-accent/5 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 animate-pulse-slow">
                    <TrendingUp className="h-6 w-6 text-terminal-accent" />
                  </div>
                  <div>
                    <div className="inline-block px-2 py-0.5 rounded-full bg-terminal-accent/10 border border-terminal-accent/20 text-terminal-accent text-xs font-mono mb-1">
                      <span className="mr-1">$</span> NOW LIVE ON SOLANA
                    </div>
                    <h2 className="text-xl font-mono font-bold text-terminal-text">Track Tritcoin Market Data</h2>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 justify-center md:justify-end">
                  <CTAButton href="/dex-screener" variant="primary" icon={BarChart3} iconPosition="left">
                    View Price Chart
                  </CTAButton>

                  <CTAButton
                    href="https://dexscreener.com/solana/7jvttJGLKKmAiA8Gfza9TW8i2D8Txv9Rpa9rPitCiRs5"
                    variant="secondary"
                    icon={ExternalLink}
                    iconPosition="right"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DexScreener
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solana Integration CTA */}
        <section className="w-full py-8 md:py-12 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="p-6 border border-purple-500/30 rounded-lg bg-black/50 terminal-glow relative overflow-hidden">
              {/* Background effects */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-terminal-accent/5 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 border border-purple-500/30 animate-pulse-slow">
                    <svg width="24" height="24" viewBox="0 0 128 128" className="text-purple-400">
                      <path
                        d="M109.5,89.5l-52.8,30a3.3,3.3,0,0,1-5-2.9V87.1h0a3.3,3.3,0,0,1,1.7-2.9l52.8-30a3.3,3.3,0,0,1,5,2.9v29.5h0A3.3,3.3,0,0,1,109.5,89.5ZM52.9,87.1h0"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                      />
                      <path
                        d="M18.5,38.5l52.8-30a3.3,3.3,0,0,1,5,2.9V40.9h0a3.3,3.3,0,0,1-1.7,2.9l-52.8,30a3.3,3.3,0,0,1-5-2.9V40.9h0A3.3,3.3,0,0,1,18.5,38.5ZM75.1,40.9h0"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                      />
                      <path
                        d="M18.5,89.5l52.8,30a3.3,3.3,0,0,0,5-2.9V87.1h0a3.3,3.3,0,0,0-1.7-2.9l-52.8-30a3.3,3.3,0,0,0-5,2.9v29.5h0A3.3,3.3,0,0,0,18.5,89.5ZM75.1,87.1h0"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="inline-block px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-1">
                      <span className="mr-1">$</span> NEW RESEARCH
                    </div>
                    <h2 className="text-xl font-mono font-bold text-terminal-text">Solana x Tritcoin Integration</h2>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 justify-center md:justify-end">
                  <CTAButton href="/solana-integration" variant="primary" icon={ArrowRight} iconPosition="right">
                    Explore Integration Analysis
                  </CTAButton>

                  <CTAButton
                    onClick={() => {
                      navigator.clipboard.writeText("4LWVuZGMV5iqj6mryazdqWTpwjvCGweghwaXS416pf7M")
                      // Optional: Add toast notification here
                    }}
                    variant="secondary"
                    icon={Copy}
                    iconPosition="left"
                    href="#" // Add a placeholder href to avoid the error
                  >
                    Copy SOL Address to Donate
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Summary Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 pointer-events-none"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-terminal-accent/10 border border-terminal-accent/20 text-terminal-accent text-xs font-mono">
                <span className="mr-1">$</span> cat executive_summary.mdx
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-mono font-bold tracking-tighter sm:text-4xl md:text-5xl text-terminal-text">
                  Executive Summary
                </h2>
                <p className="max-w-[900px] text-terminal-dim md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-mono">
                  A paradigm shift in blockchain technology
                </p>
              </div>
            </div>

            <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-8 terminal-glow">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <p className="text-terminal-dim font-mono leading-relaxed">
                    TritCoin represents a paradigm shift in blockchain technology through its innovative implementation
                    of balanced ternary computing. Built on a modern React/Next.js stack with TypeScript, TritCoin
                    combines ancient wisdom with cutting-edge technology to create a more efficient, secure, and
                    sustainable blockchain platform.
                  </p>

                  <div className="space-y-2">
                    <h3 className="text-xl font-mono font-bold text-terminal-accent">Key Innovations</h3>
                    <ul className="space-y-2 font-mono">
                      <li className="flex items-start gap-2">
                        <span className="text-terminal-accent font-bold">$&gt;</span>
                        <span className="text-terminal-dim">Balanced ternary architecture (40% more efficient)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-terminal-accent font-bold">$&gt;</span>
                        <span className="text-terminal-dim">Quantum-resistant cryptography</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-terminal-accent font-bold">$&gt;</span>
                        <span className="text-terminal-dim">Modern React/Next.js implementation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-terminal-accent font-bold">$&gt;</span>
                        <span className="text-terminal-dim">Reduced energy consumption</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <CTAButton
                      href="/whitepaper/executive-summary"
                      variant="primary"
                      icon={ChevronRight}
                      iconPosition="right"
                    >
                      Read Full Summary
                    </CTAButton>
                    <CTAButton href="/whitepaper" variant="secondary" icon={ArrowRight} iconPosition="right">
                      Browse Whitepaper
                    </CTAButton>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="relative w-full max-w-[300px] aspect-square">
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
          </div>
        </section>

        {/* New Zero-Trust Security Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 pointer-events-none"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-terminal-accent/10 border border-terminal-accent/20 text-terminal-accent text-xs font-mono">
                <span className="mr-1">$</span> ./security_protocol --zero-trust
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-mono font-bold tracking-tighter sm:text-4xl md:text-5xl text-terminal-text">
                  Zero-Trust Security in the AI Era
                </h2>
                <p className="max-w-[900px] text-terminal-dim md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-mono">
                  Trust nothing. Verify everything. Secure the future.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30">
                  <AlertTriangle className="h-6 w-6 text-terminal-accent" />
                </div>
                <h3 className="text-2xl font-mono font-bold text-terminal-accent">The AI Threat Landscape</h3>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  As highlighted by Palo Alto Networks Unit 42, AI systems have introduced unprecedented security
                  challenges. Adversarial machine learning, prompt injection, and model poisoning represent just the
                  beginning of a new threat vector that traditional security models cannot address.
                </p>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  In a world where AI can generate perfect phishing emails, mimic trusted voices, and exploit
                  vulnerabilities at scale, the old security paradigm of "trust but verify" has become dangerously
                  obsolete.
                </p>
                <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-4 terminal-glow">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 flex-shrink-0 mt-1">
                      <EyeOff className="h-5 w-5 text-terminal-accent" />
                    </div>
                    <div>
                      <h4 className="font-mono font-bold text-terminal-text">AI-Powered Threats</h4>
                      <ul className="space-y-1 text-sm text-terminal-dim font-mono mt-2">
                        <li className="flex items-start gap-2">
                          <span className="text-terminal-accent font-bold">$&gt;</span>
                          <span>Adversarial attacks against security models</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-terminal-accent font-bold">$&gt;</span>
                          <span>Deepfake-based social engineering</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-terminal-accent font-bold">$&gt;</span>
                          <span>Automated vulnerability discovery and exploitation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30">
                  <Shield className="h-6 w-6 text-terminal-accent" />
                </div>
                <h3 className="text-2xl font-mono font-bold text-terminal-accent">Our Zero-Trust Approach</h3>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  At Final Protocol Solutions, we've embraced Zero-Trust as our foundational security philosophy. We
                  assume that breaches are inevitable and design our systems accordingly. No entity—human or AI—is
                  trusted by default, regardless of location or ownership.
                </p>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  Tritcoin's ternary architecture inherently supports this model by enabling more nuanced security
                  states beyond the binary "trusted/untrusted" paradigm. Our three-state approach allows for conditional
                  trust based on continuous verification.
                </p>
                <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-4 terminal-glow">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 flex-shrink-0 mt-1">
                      <Server className="h-5 w-5 text-terminal-accent" />
                    </div>
                    <div>
                      <h4 className="font-mono font-bold text-terminal-text">Zero-Trust Implementation</h4>
                      <ul className="space-y-1 text-sm text-terminal-dim font-mono mt-2">
                        <li className="flex items-start gap-2">
                          <span className="text-terminal-accent font-bold">$&gt;</span>
                          <span>Continuous authentication and authorization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-terminal-accent font-bold">$&gt;</span>
                          <span>Micro-segmentation of network resources</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-terminal-accent font-bold">$&gt;</span>
                          <span>Least privilege access by default</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 flex-shrink-0">
                  <Eye className="h-5 w-5 text-terminal-accent" />
                </div>
                <h3 className="text-xl font-mono font-bold text-terminal-accent">
                  Ternary Security Model: Beyond Binary Trust
                </h3>
              </div>
              <p className="text-terminal-dim font-mono leading-relaxed mb-4">
                Our ternary approach to security transcends traditional binary models by introducing a third state that
                allows for contextual trust decisions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-terminal-code-bg/30 p-4 rounded-md border border-terminal-border/30">
                  <div className="text-terminal-accent font-mono font-bold mb-2">-1: Explicitly Untrusted</div>
                  <p className="text-sm text-terminal-dim font-mono">
                    Known malicious entities and activities are actively blocked and logged. This state triggers
                    defensive countermeasures and threat intelligence sharing.
                  </p>
                </div>
                <div className="bg-terminal-code-bg/30 p-4 rounded-md border border-terminal-border/30">
                  <div className="text-terminal-accent font-mono font-bold mb-2">0: Neutral Verification</div>
                  <p className="text-sm text-terminal-dim font-mono">
                    The default state for all entities. Access requires continuous verification through multiple
                    factors. Trust is never assumed, only temporarily granted.
                  </p>
                </div>
                <div className="bg-terminal-code-bg/30 p-4 rounded-md border border-terminal-border/30">
                  <div className="text-terminal-accent font-mono font-bold mb-2">+1: Verified Context</div>
                  <p className="text-sm text-terminal-dim font-mono">
                    Temporarily elevated access based on verified context and behavior patterns. Still subject to
                    continuous monitoring and can revert to 0 or -1 instantly.
                  </p>
                </div>
              </div>
              <blockquote className="border-l-2 border-terminal-accent pl-4 italic text-terminal-dim font-mono mt-6">
                "In the age of AI, security is no longer a binary proposition. The question isn't whether to trust, but
                how to verify continuously across multiple dimensions of context and behavior."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Quantum Threats Dashboard CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 pointer-events-none"></div>

          <div className="container px-4 md:px-6 relative">
            <QuantumThreatsCTA />
          </div>
        </section>

        <section id="whitepaper" className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block px-3 py-1 rounded-full bg-terminal-accent/10 border border-terminal-accent/20 text-terminal-accent text-xs font-mono">
                <span className="mr-1">$</span> cat whitepaper.md
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-mono font-bold tracking-tighter sm:text-4xl md:text-5xl text-terminal-text">
                  Tritcoin: A Peer-to-Peer Ternary Electronic Cash System
                </h2>
                <p className="max-w-[900px] text-terminal-dim md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-mono">
                  By Tritoshi Fractalmoto | Final Protocol Solutions
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-8 md:gap-12">
              <div className="space-y-4 backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
                <h3 className="text-xl font-mono font-bold text-terminal-accent">1. Introduction</h3>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  Commerce on the Internet has come to rely almost exclusively on financial institutions serving as
                  trusted third parties to process electronic payments. While the system works well enough for most
                  transactions, it still suffers from the inherent weaknesses of the trust-based model. Completely
                  non-reversible transactions are not really possible, since financial institutions cannot avoid
                  mediating disputes.
                </p>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  What is needed is an electronic payment system based on cryptographic proof instead of trust, allowing
                  any two willing parties to transact directly with each other without the need for a trusted third
                  party. Transactions that are computationally impractical to reverse would protect sellers from fraud,
                  and routine escrow mechanisms could easily be implemented to protect buyers.
                </p>
              </div>

              <div className="space-y-4 backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
                <h3 className="text-xl font-mono font-bold text-terminal-accent">2. Ternary Transactions</h3>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  We define a ternary electronic coin as a chain of digital signatures. Each owner transfers the coin to
                  the next by digitally signing a hash of the previous transaction and the public key of the next owner
                  and adding these to the end of the coin. A payee can verify the signatures to verify the chain of
                  ownership.
                </p>
                <div className="bg-terminal-code-bg/50 p-4 rounded-md font-mono text-sm overflow-auto border border-terminal-border/30 mt-4">
                  <pre className="text-terminal-accent-bright">
                    {`// Tritcoin transaction verification
function verifyTritTransaction(tx) {
const tritSig = tx.signature;
const prevTxHash = computeTernaryHash(tx.prevTx);
const pubKey = tx.recipientPubKey;

return verifyTritSignature(
  tritSig, 
  prevTxHash, 
  pubKey
);
}`}
                  </pre>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <CTAButton href="/whitepaper" variant="primary" icon={ArrowRight} iconPosition="left">
                  View Full Whitepaper
                </CTAButton>
              </div>
            </div>
          </div>
        </section>

        <section id="technology" className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-terminal-accent/10 border border-terminal-accent/20 text-terminal-accent text-xs font-mono">
                  <span className="mr-1">$</span> ./explain --tech --ternary
                </div>
                <h2 className="text-3xl font-mono font-bold tracking-tighter sm:text-4xl md:text-5xl text-terminal-text">
                  Base-3 Blockchain Technology
                </h2>
                <p className="text-terminal-dim md:text-xl font-mono">
                  While traditional blockchains operate on binary (base-2) logic, Tritcoin utilizes ternary (base-3)
                  computing principles:
                </p>
                <ul className="space-y-2 font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Higher information density per computational unit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">
                      Reduced energy consumption compared to traditional blockchains
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Natural resistance to quantum computing attacks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">More efficient cryptographic operations</span>
                  </li>
                </ul>
                <CTAButton href="/technology" variant="secondary" icon={ArrowRight} iconPosition="right">
                  Technical Documentation
                </CTAButton>
              </div>
              <div className="flex justify-center">
                <div className="relative overflow-hidden rounded-lg border border-terminal-border/30 bg-terminal-code-bg/30 p-2 terminal-glow">
                  <div className="bg-terminal-code-bg/50 p-4 rounded-md font-mono text-sm overflow-auto">
                    <div className="flex items-center gap-2 mb-2 text-terminal-dim text-xs">
                      <div className="w-3 h-3 rounded-full bg-terminal-accent/50"></div>
                      <span>tritcoin_architecture.js</span>
                    </div>
                    <pre className="text-terminal-accent-bright">
                      {`// Base-3 representation
class Trit {
  constructor(value) {
    if (value < -1 || value > 1) {
      throw new Error("Trit value must be -1, 0, or 1");
    }
    this.value = value;
  }

  static fromDecimal(decimal) {
    // Convert decimal to balanced ternary
    let tritValue = 0;
    if (decimal > 0) tritValue = 1;
    if (decimal < 0) tritValue = -1;
    return new Trit(tritValue);
  }
}

// Ternary memory cell
class TritCell {
  constructor() {
    this.trit = new Trit(0); // Default: Zero state
  }

  setValue(tritValue) {
    this.trit = tritValue;
  }

  getValue() {
    return this.trit.value;
  }
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block px-3 py-1 rounded-full bg-terminal-accent/10 border border-terminal-accent/20 text-terminal-accent text-xs font-mono">
                <span className="mr-1">$</span> whoami
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-mono font-bold tracking-tighter sm:text-4xl md:text-5xl text-terminal-text">
                  About Final Protocol Solutions
                </h2>
                <p className="max-w-[900px] text-terminal-dim md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-mono">
                  Pioneering quantum-secure financial infrastructure for the post-binary world.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <div className="flex flex-col space-y-4 backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30">
                  <Shield className="h-8 w-8 text-terminal-accent" />
                </div>
                <h3 className="text-xl font-mono font-bold text-terminal-accent">Quantum Resistant</h3>
                <p className="text-terminal-dim font-mono">
                  Built from the ground up to withstand attacks from quantum computers, ensuring your assets remain
                  secure in the post-quantum era.
                </p>
              </div>
              <div className="flex flex-col space-y-4 backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30">
                  <Zap className="h-8 w-8 text-terminal-accent" />
                </div>
                <h3 className="text-xl font-mono font-bold text-terminal-accent">Ternary Architecture</h3>
                <p className="text-terminal-dim font-mono">
                  Our base-3 system offers 50% more information density than binary blockchains, resulting in faster
                  transactions and lower fees.
                </p>
              </div>
              <div className="flex flex-col space-y-4 backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30">
                  <Lock className="h-8 w-8 text-terminal-accent" />
                </div>
                <h3 className="text-xl font-mono font-bold text-terminal-accent">Advanced Cryptography</h3>
                <p className="text-terminal-dim font-mono">
                  Implements cutting-edge cryptographic algorithms specifically designed for ternary computing
                  environments.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-16 space-y-4 backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-8 terminal-glow">
              <div className="inline-block px-3 py-1 rounded-full bg-terminal-accent/10 border border-terminal-accent/20 text-terminal-accent text-xs font-mono mb-4">
                <span className="mr-1">$</span> cat message_from_tritoshi.txt
              </div>
              <blockquote className="text-terminal-dim font-mono italic text-lg max-w-3xl text-center">
                "I've developed a new electronic cash system that's fully peer-to-peer, with no trusted third party. The
                problem of course is the double-spending problem. My solution is a ternary blockchain using a
                proof-of-work chain to record a public history of transactions that quickly becomes computationally
                impractical for an attacker to change."
              </blockquote>
              <p className="text-terminal-accent font-mono mt-4">- Tritoshi Fractalmoto, 2025</p>
            </div>

            <div className="flex justify-center mt-16">
              <CTAButton href="/contact" variant="primary" icon={ArrowRight} iconPosition="right">
                Join the Revolution
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

