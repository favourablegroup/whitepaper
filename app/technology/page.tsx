"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Cpu, Database, Shield, Lock, Zap, Coins, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Technology() {
  useEffect(() => {
    document.body.classList.add("dark")
  }, [])

  return (
    <div className="bg-black text-terminal-text">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-background/50 pointer-events-none"></div>

      <main className="py-12 md:py-24 lg:py-32 relative">
        <div className="container px-4 md:px-6 relative">
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-terminal-accent/10 border border-terminal-accent/20 text-terminal-accent text-xs font-mono">
              <span className="mr-1">$</span> ./explain --tech --detailed
            </div>
            <h1 className="text-3xl font-mono font-bold tracking-tighter sm:text-4xl md:text-5xl text-terminal-text">
              Tritcoin Technology
            </h1>
            <p className="text-terminal-dim md:text-xl font-mono leading-relaxed">
              An in-depth look at the revolutionary ternary blockchain technology powering Tritcoin and its
              quantum-resistant security features.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            <section className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30">
                  <Cpu className="h-6 w-6 text-terminal-accent" />
                </div>
                <h2 className="text-2xl font-mono font-bold text-terminal-accent">Ternary Computing Architecture</h2>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  Unlike traditional binary systems that use 0s and 1s (like a light switch being on or off), Tritcoin's
                  ternary architecture utilizes three states: -1, 0, and 1 (like a switch that can be up, middle, or
                  down).
                </p>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  With three possible states instead of two, each trit (ternary digit) can store approximately 1.58 bits
                  of information, resulting in a 58% increase in information density compared to binary systems.
                </p>
                <ul className="space-y-2 font-mono mt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">More efficient data storage and processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Reduced computational steps for complex operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">
                      Natural representation of concepts like positive, neutral, and negative
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-square">
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
            </section>

            <section className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 flex-shrink-0">
                        <Lock className="h-5 w-5 text-terminal-accent" />
                      </div>
                      <div>
                        <h3 className="font-mono font-bold text-terminal-text">Lattice-Based Cryptography</h3>
                        <p className="text-sm text-terminal-dim font-mono">Resistant to quantum computing attacks</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 flex-shrink-0">
                        <Lock className="h-5 w-5 text-terminal-accent" />
                      </div>
                      <div>
                        <h3 className="font-mono font-bold text-terminal-text">Ternary Hash Functions</h3>
                        <p className="text-sm text-terminal-dim font-mono">
                          Unique digital fingerprints for transactions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 flex-shrink-0">
                        <Lock className="h-5 w-5 text-terminal-accent" />
                      </div>
                      <div>
                        <h3 className="font-mono font-bold text-terminal-text">Multi-Signature Protocols</h3>
                        <p className="text-sm text-terminal-dim font-mono">Enhanced transaction security</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30">
                  <Shield className="h-6 w-6 text-terminal-accent" />
                </div>
                <h2 className="text-2xl font-mono font-bold text-terminal-accent">Quantum Resistance</h2>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  Tritcoin is designed from the ground up to be resistant to attacks from quantum computers. While
                  traditional cryptographic systems like RSA and ECC are vulnerable to Shor's algorithm running on
                  quantum computers, Tritcoin employs post-quantum cryptographic techniques.
                </p>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  Our implementation uses lattice-based cryptography adapted for ternary computation, which is believed
                  to be resistant to both classical and quantum attacks. Each transaction gets a unique fingerprint that
                  can't be copied or faked, making Tritcoin extremely secure against hackers.
                </p>
                <ul className="space-y-2 font-mono mt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Future-proof against quantum computing threats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Secure digital signatures that can't be forged</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Protection against sophisticated cryptographic attacks</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30">
                  <Database className="h-6 w-6 text-terminal-accent" />
                </div>
                <h2 className="text-2xl font-mono font-bold text-terminal-accent">Blockchain Architecture</h2>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  The Tritcoin blockchain utilizes a novel consensus mechanism adapted for ternary computation. Each
                  block contains a timestamp, transaction data, and a hash pointer to the previous block, forming an
                  immutable chain.
                </p>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  Our proof-of-work algorithm, TritHash, requires validators to find a solution that, when hashed with
                  the block header, produces a hash with a specific pattern. This algorithm is specifically designed to
                  be ASIC-resistant and energy-efficient.
                </p>
                <ul className="space-y-2 font-mono mt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Faster transaction processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Immutable transaction record</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Decentralized verification system</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="space-y-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-4 terminal-glow flex items-center gap-4"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 flex-shrink-0">
                          <Lock className="h-5 w-5 text-terminal-accent" />
                        </div>
                        <div>
                          <div className="text-xs text-terminal-dim font-mono mb-1">Block #{3 - i}</div>
                          <div className="text-terminal-accent font-mono text-sm truncate w-60">
                            {`00T${Array.from({ length: 10 })
                              .map(() => Math.floor(Math.random() * 3))
                              .join("")}...`}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-terminal-accent font-mono font-bold">Energy Comparison</div>
                      <div className="text-terminal-dim font-mono text-xs">kWh per transaction</div>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm font-mono">
                          <span className="text-terminal-dim">Bitcoin</span>
                          <span className="text-terminal-dim">707 kWh</span>
                        </div>
                        <div className="w-full bg-terminal-code-bg/30 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm font-mono">
                          <span className="text-terminal-dim">Ethereum</span>
                          <span className="text-terminal-dim">62 kWh</span>
                        </div>
                        <div className="w-full bg-terminal-code-bg/30 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: "8.8%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm font-mono">
                          <span className="text-terminal-dim">Tritcoin</span>
                          <span className="text-terminal-dim">21 kWh</span>
                        </div>
                        <div className="w-full bg-terminal-code-bg/30 rounded-full h-2">
                          <div className="bg-terminal-accent h-2 rounded-full" style={{ width: "3%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30">
                  <Zap className="h-6 w-6 text-terminal-accent" />
                </div>
                <h2 className="text-2xl font-mono font-bold text-terminal-accent">Energy Efficiency</h2>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  One of the most significant advantages of Tritcoin's ternary architecture is its energy efficiency. By
                  utilizing three states instead of two, our system can process more information with fewer
                  computational steps.
                </p>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  Our benchmarks show that Tritcoin consumes approximately 70% less energy per transaction compared to
                  traditional binary blockchains. This reduction in energy consumption makes Tritcoin not only more
                  environmentally friendly but also more scalable for global adoption.
                </p>
                <ul className="space-y-2 font-mono mt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">70% reduction in energy consumption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Smaller carbon footprint per transaction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">More transactions per unit of computational power</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30">
                  <Coins className="h-6 w-6 text-terminal-accent" />
                </div>
                <h2 className="text-2xl font-mono font-bold text-terminal-accent">Economic Model</h2>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  Think of TritCoin's economic model like a well-balanced ecosystem. Unlike traditional cryptocurrencies
                  that create new coins through mining (which uses lots of energy), TritCoin uses a "Proof of Balance"
                  system.
                </p>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  New coins are created when the network maintains a perfect balance between positive (+1), neutral (0),
                  and negative (-1) states. This is like having a self-regulating economy where growth is tied to system
                  harmony.
                </p>
                <h3 className="text-lg font-mono font-bold text-terminal-text mt-4">Value Stability</h3>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  Traditional cryptocurrencies often face wild price swings. TritCoin's three-state system helps
                  stabilize value:
                </p>
                <ul className="space-y-2 font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">When demand is high (+1), more coins become available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">When demand is low (-1), coins are temporarily locked</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">The neutral state (0) acts as a buffer</span>
                  </li>
                </ul>
                <p className="text-terminal-dim font-mono leading-relaxed mt-2">
                  Think of it like a thermostat that keeps room temperature stable.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow w-full">
                  <h3 className="text-lg font-mono font-bold text-terminal-text mb-4">Rewards System</h3>
                  <p className="text-terminal-dim font-mono leading-relaxed mb-4">
                    Network participants (called validators) earn rewards for:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 flex-shrink-0 mt-1">
                        <Cpu className="h-5 w-5 text-terminal-accent" />
                      </div>
                      <div>
                        <h4 className="font-mono font-bold text-terminal-text">Processing transactions accurately</h4>
                        <p className="text-sm text-terminal-dim font-mono">
                          Validators earn rewards for each correctly processed transaction
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 flex-shrink-0 mt-1">
                        <Database className="h-5 w-5 text-terminal-accent" />
                      </div>
                      <div>
                        <h4 className="font-mono font-bold text-terminal-text">Maintaining the three-state balance</h4>
                        <p className="text-sm text-terminal-dim font-mono">
                          Special rewards for operations that help maintain system equilibrium
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 flex-shrink-0 mt-1">
                        <Shield className="h-5 w-5 text-terminal-accent" />
                      </div>
                      <div>
                        <h4 className="font-mono font-bold text-terminal-text">Finding security vulnerabilities</h4>
                        <p className="text-sm text-terminal-dim font-mono">
                          Bounty program for identifying and reporting potential security issues
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-terminal-dim font-mono leading-relaxed mt-4">
                    It's like getting paid for being a responsible citizen in the TritCoin ecosystem.
                  </p>
                </div>
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow w-full">
                  <h3 className="text-lg font-mono font-bold text-terminal-text mb-4">Real-World Applications</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 flex-shrink-0 mt-1">
                        <FileText className="h-5 w-5 text-terminal-accent" />
                      </div>
                      <div>
                        <h4 className="font-mono font-bold text-terminal-text">House Purchase</h4>
                        <p className="text-sm text-terminal-dim font-mono">
                          Buyer deposits funds → Contract verifies property records → Automatically transfers ownership
                          → Releases funds to seller → Updates property registry
                        </p>
                        <p className="text-xs text-terminal-dim font-mono mt-1">All in minutes instead of months</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 flex-shrink-0 mt-1">
                        <FileText className="h-5 w-5 text-terminal-accent" />
                      </div>
                      <div>
                        <h4 className="font-mono font-bold text-terminal-text">Crowdfunding</h4>
                        <p className="text-sm text-terminal-dim font-mono">
                          Collects funds from supporters → Holds money in escrow → Releases funds when goals are met →
                          Returns money if goals aren't met
                        </p>
                        <p className="text-xs text-terminal-dim font-mono mt-1">All without human intervention</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30">
                  <FileText className="h-6 w-6 text-terminal-accent" />
                </div>
                <h2 className="text-2xl font-mono font-bold text-terminal-accent">Smart Contracts</h2>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  Think of smart contracts as digital vending machines that can handle complex transactions. While
                  traditional contracts need lawyers, take time, and require trust, smart contracts are automatic,
                  instant, and trustless.
                </p>
                <h3 className="text-lg font-mono font-bold text-terminal-text mt-4">
                  TritCoin's Smart Contract Innovation
                </h3>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  Traditional smart contracts use binary Yes/No decisions. TritCoin contracts use ternary Yes/No/Maybe
                  decisions, allowing for:
                </p>
                <ul className="space-y-2 font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">More nuanced conditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Better error handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Flexible dispute resolution</span>
                  </li>
                </ul>
                <h3 className="text-lg font-mono font-bold text-terminal-text mt-4">Safety Features</h3>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  Our smart contracts include built-in safety mechanisms:
                </p>
                <ul className="space-y-2 font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Contracts self-verify before executing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Automatic rollback if something goes wrong</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Like having an undo button for financial transactions</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <div className="mt-16 flex justify-center">
            <Button variant="terminal" size="lg" asChild>
              <Link href="/#whitepaper">Read the Whitepaper</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

