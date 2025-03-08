"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronRight, Info, Shield, Clock, GitBranch, Copy, ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { CTAButton } from "@/components/CTAButton"
import { ScrollToTop } from "@/components/ScrollToTop"

export default function SolanaIntegrationPage() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    document.body.classList.add("dark")
  }, [])

  const copySolanaAddress = () => {
    navigator.clipboard.writeText("4LWVuZGMV5iqj6mryazdqWTpwjvCGweghwaXS416pf7M")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-terminal-text">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-background/50 pointer-events-none"></div>

      <main className="flex-1 container px-4 py-12 md:px-6 md:py-24 relative">
        <div className="flex items-center gap-2 text-terminal-dim font-mono mb-8">
          <Link href="/" className="hover:text-terminal-text transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-terminal-accent">Solana Integration</span>
        </div>

        <section className="mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-terminal-accent/10 border border-terminal-accent/20 text-terminal-accent text-xs font-mono mb-4">
            <span className="mr-1">$</span> ./analyze --chain=solana --integration=ternary
          </div>

          <h1 className="text-3xl md:text-5xl font-mono font-bold mb-6 text-terminal-text">
            Solana Integration Analysis
          </h1>

          <p className="text-terminal-dim font-mono max-w-3xl mb-8">
            A comprehensive technical analysis of integrating Tritcoin's balanced ternary blockchain technology with the
            Solana ecosystem.
          </p>

          <div className="p-6 border border-terminal-border/30 rounded-lg bg-black/50 terminal-glow relative overflow-hidden mb-12">
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-terminal-accent/10 via-transparent to-purple-500/10 pointer-events-none"></div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-mono font-bold mb-4 text-terminal-accent">
                  Support the Project
                </h2>
                <p className="text-terminal-dim font-mono mb-4">
                  Help fund our research and development efforts by donating SOL directly to our developer wallet. This
                  is a Solflare wallet address.
                </p>
                <div className="bg-terminal-code-bg/50 p-4 rounded-md mb-4 flex items-center gap-2">
                  <span className="text-terminal-accent font-mono font-bold truncate">
                    4LWVuZGMV5iqj6mryazdqWTpwjvCGweghwaXS416pf7M
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copySolanaAddress}
                    className="flex-shrink-0"
                    aria-label="Copy Solana address"
                  >
                    <Copy className="h-4 w-4 text-terminal-dim" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 text-terminal-dim border-terminal-dim hover:text-terminal-accent hover:border-terminal-accent transition-colors font-mono"
                    onClick={copySolanaAddress}
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-green-500" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" /> Copy SOL Address
                      </>
                    )}
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center md:border-l md:border-terminal-border/30 md:pl-6 flex-shrink-0">
                <div className="w-32 h-32 bg-terminal-code-bg/30 rounded-full flex items-center justify-center border border-terminal-accent/30 p-4">
                  <svg width="80" height="80" viewBox="0 0 128 128" className="text-terminal-accent">
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
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 border border-terminal-border/30 rounded-lg bg-black/50 terminal-glow relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30">
                  <Shield className="h-5 w-5 text-terminal-accent" />
                </div>
                <h3 className="text-xl font-mono font-bold text-terminal-text">Compatibility</h3>
              </div>
              <ul className="space-y-3 text-terminal-dim font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>High-performance architecture alignment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Smart contract interoperability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Cross-chain bridge potential</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Shared TypeScript/JavaScript foundations</span>
                </li>
              </ul>
            </div>

            <div className="p-6 border border-terminal-border/30 rounded-lg bg-black/50 terminal-glow relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30">
                  <Info className="h-5 w-5 text-terminal-accent" />
                </div>
                <h3 className="text-xl font-mono font-bold text-terminal-text">Challenges</h3>
              </div>
              <ul className="space-y-3 text-terminal-dim font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Address format differences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Consensus mechanism synchronization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Language and runtime differences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Transaction model equivalence</span>
                </li>
              </ul>
            </div>

            <div className="p-6 border border-terminal-border/30 rounded-lg bg-black/50 terminal-glow relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30">
                  <Clock className="h-5 w-5 text-terminal-accent" />
                </div>
                <h3 className="text-xl font-mono font-bold text-terminal-text">Timeline</h3>
              </div>
              <ul className="space-y-3 text-terminal-dim font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Phase 1 (Q2 2025): Foundation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Phase 2 (Q3 2025): Bridge Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Phase 3 (Q4 2025): Asset Protocol</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Phase 4 (Q1 2026): Developer Tools</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-mono font-bold mb-6 text-terminal-text">Project Overview</h2>
            <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow mb-8">
              <p className="text-terminal-dim font-mono mb-4">
                The Balanced Ternary Blockchain project implements a unique blockchain architecture using balanced
                ternary arithmetic (using -1, 0, and 1 as basic digits) instead of traditional binary. This document
                analyzes the compatibility and challenges of integrating with the Solana blockchain ecosystem.
              </p>
              <div className="bg-terminal-code-bg/30 p-4 rounded-md border border-terminal-border/30">
                <div className="flex items-center gap-2 mb-2">
                  <GitBranch className="h-4 w-4 text-terminal-accent" />
                  <span className="text-terminal-dim font-mono text-sm">Technical Comparison</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-terminal-accent font-mono font-bold">Solana</h4>
                    <ul className="space-y-1 text-terminal-dim font-mono text-sm">
                      <li>• Proof of History (PoH) + Proof of Stake</li>
                      <li>• Up to 65,000 TPS</li>
                      <li>• Account-based model</li>
                      <li>• 32-byte public keys (Base58 encoded)</li>
                      <li>• Rust-based programs compiled to BPF</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-terminal-accent font-mono font-bold">Tritcoin (Balanced Ternary)</h4>
                    <ul className="space-y-1 text-terminal-dim font-mono text-sm">
                      <li>• Custom consensus using ternary logic</li>
                      <li>• Efficient computation with three-state logic</li>
                      <li>• Custom transaction model</li>
                      <li>• Custom ternary address format</li>
                      <li>• JavaScript/TypeScript execution environment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-mono font-bold mb-4 text-terminal-accent">Implementation Roadmap</h3>
              <div className="space-y-6">
                <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
                  <h4 className="text-lg font-mono font-bold text-terminal-text mb-3">Phase 1: Foundation (Q2 2025)</h4>
                  <ul className="space-y-2 text-terminal-dim font-mono">
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full border border-terminal-accent flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-terminal-accent"></div>
                      </div>
                      <span>Develop ternary-to-binary state conversion protocols</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full border border-terminal-accent flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-terminal-accent"></div>
                      </div>
                      <span>Create address format bridging specification</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full border border-terminal-accent flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-terminal-accent"></div>
                      </div>
                      <span>Design cross-chain message format</span>
                    </li>
                  </ul>
                </div>

                <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
                  <h4 className="text-lg font-mono font-bold text-terminal-text mb-3">
                    Phase 2: Bridge Development (Q3 2025)
                  </h4>
                  <ul className="space-y-2 text-terminal-dim font-mono">
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full border border-terminal-accent flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-terminal-accent"></div>
                      </div>
                      <span>Implement Solana program for bridge contract</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full border border-terminal-accent flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-terminal-accent"></div>
                      </div>
                      <span>Develop ternary chain bridge smart contracts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full border border-terminal-accent flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-terminal-accent"></div>
                      </div>
                      <span>Create secure multi-signature validation system</span>
                    </li>
                  </ul>
                </div>

                <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
                  <h4 className="text-lg font-mono font-bold text-terminal-text mb-3">
                    Phase 3: Asset Protocol (Q4 2025)
                  </h4>
                  <ul className="space-y-2 text-terminal-dim font-mono">
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full border border-terminal-accent flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-terminal-accent"></div>
                      </div>
                      <span>Design wrapped asset standard</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full border border-terminal-accent flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-terminal-accent"></div>
                      </div>
                      <span>Implement SPL token compatibility layer</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full border border-terminal-accent flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-terminal-accent"></div>
                      </div>
                      <span>Create atomic swap mechanism</span>
                    </li>
                  </ul>
                </div>

                <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
                  <h4 className="text-lg font-mono font-bold text-terminal-text mb-3">
                    Phase 4: Developer Tools (Q1 2026)
                  </h4>
                  <ul className="space-y-2 text-terminal-dim font-mono">
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full border border-terminal-accent flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-terminal-accent"></div>
                      </div>
                      <span>Build SDK for cross-chain development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full border border-terminal-accent flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-terminal-accent"></div>
                      </div>
                      <span>Create testing framework for bridge operations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full border border-terminal-accent flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-terminal-accent"></div>
                      </div>
                      <span>Develop monitoring and analytics tools</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-mono font-bold mb-6 text-terminal-text">
              Security Considerations
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
                <h3 className="text-xl font-mono font-bold text-terminal-accent mb-4">Bridge Security</h3>
                <ul className="space-y-2 text-terminal-dim font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span>Multi-signature validation required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span>Regular security audits for bridge contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span>Automated monitoring for suspicious patterns</span>
                  </li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
                <h3 className="text-xl font-mono font-bold text-terminal-accent mb-4">State Verification</h3>
                <ul className="space-y-2 text-terminal-dim font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span>Merkle proof verification across chains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span>Double-spend prevention mechanisms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span>Replay attack protection</span>
                  </li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
                <h3 className="text-xl font-mono font-bold text-terminal-accent mb-4">Economic Security</h3>
                <ul className="space-y-2 text-terminal-dim font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span>Collateral requirements for bridge operators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span>Insurance pool for cross-chain transactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span>Slashing conditions for malicious behavior</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-mono font-bold mb-6 text-terminal-text">Future Opportunities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
                <h3 className="text-xl font-mono font-bold text-terminal-accent mb-4">DeFi Integration</h3>
                <ul className="space-y-2 text-terminal-dim font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span>Cross-chain liquidity pools using ternary arithmetic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span>Unique trading pairs leveraging both ecosystems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span>Novel financial instruments using ternary logic</span>
                  </li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
                <h3 className="text-xl font-mono font-bold text-terminal-accent mb-4">NFT Bridging</h3>
                <ul className="space-y-2 text-terminal-dim font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span>Cross-chain NFT standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span>Ternary-based NFT attributes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span>Hybrid NFT marketplaces</span>
                  </li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
                <h3 className="text-xl font-mono font-bold text-terminal-accent mb-4">Governance</h3>
                <ul className="space-y-2 text-terminal-dim font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span>Cross-chain DAO structures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span>Hybrid voting mechanisms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span>Shared protocol upgrades</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow mb-16">
            <h2 className="text-2xl font-mono font-bold mb-4 text-terminal-text">Conclusion</h2>
            <p className="text-terminal-dim font-mono mb-6">
              Integrating Solana with the Balanced Ternary Blockchain presents unique opportunities for innovation in
              cross-chain operations and DeFi applications. While there are significant technical challenges,
              particularly in address format bridging and consensus synchronization, the potential benefits make this
              integration worth pursuing. The proposed roadmap provides a structured approach to addressing these
              challenges while building a secure and efficient bridge between the two ecosystems.
            </p>
            <div className="mt-4 border-t border-terminal-border/30 pt-4">
              <h3 className="text-xl font-mono font-bold text-terminal-accent mb-4">Next Steps</h3>
              <ul className="space-y-2 text-terminal-dim font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">1.</span>
                  <span>Form technical working group for bridge specification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">2.</span>
                  <span>Begin proof-of-concept development for address bridging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">3.</span>
                  <span>Engage with Solana ecosystem partners</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">4.</span>
                  <span>Develop security audit framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">5.</span>
                  <span>Create detailed technical specification document</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <CTAButton href="/" variant="secondary" icon={ArrowLeft} iconPosition="left">
              Back to Home
            </CTAButton>
            <Button
              variant="primary"
              size="lg"
              className="gap-2 text-black bg-terminal-accent hover:bg-terminal-accent/90 transition-colors font-mono"
              onClick={copySolanaAddress}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" /> Copied SOL Address
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" /> Copy SOL Address
                </>
              )}
            </Button>
          </div>
        </section>
      </main>

      <ScrollToTop />
    </div>
  )
}

