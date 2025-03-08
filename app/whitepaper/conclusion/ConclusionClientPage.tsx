"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronLeft, Terminal, Shield, AlertTriangle, ExternalLink, BarChart3, Zap, Lock } from "lucide-react"
import { StyledSection } from "@/components/styled"
import { TechnicalNote } from "@/components/TechnicalNote"
// Import the CTAButton component
import { CTAButton } from "@/components/CTAButton"

// Balanced Ternary Visualization Component
const BalancedTernaryViz = () => {
  const [animationStep, setAnimationStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 60)
    }, 100)

    return () => clearInterval(interval)
  }, [])

  // Generate trit patterns based on animation step
  const generateTrits = () => {
    const rows = 9
    const cols = 9
    const trits = []

    for (let i = 0; i < rows; i++) {
      const row = []
      for (let j = 0; j < cols; j++) {
        // Create patterns based on position and animation step
        const patternValue = (i + j + animationStep) % 3
        const value = patternValue === 0 ? -1 : patternValue === 1 ? 0 : 1
        row.push(value)
      }
      trits.push(row)
    }

    return trits
  }

  const trits = generateTrits()

  return (
    <div className="flex flex-col items-center justify-center p-6 border border-terminal-border/30 rounded-lg bg-terminal-code-bg/10 terminal-glow">
      <div className="mb-4 text-center">
        <h3 className="text-xl font-mono font-bold text-terminal-accent mb-2">Balanced Ternary Visualization</h3>
        <p className="text-sm text-terminal-dim font-mono">Representing data in three states: -1, 0, and 1</p>
      </div>

      <div className="grid grid-cols-9 gap-1 mb-6">
        {trits.map((row, i) =>
          row.map((trit, j) => (
            <div
              key={`${i}-${j}`}
              className={`w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300 ${
                trit === -1
                  ? "bg-red-500/70 border border-red-400"
                  : trit === 0
                    ? "bg-gray-500/40 border border-gray-400"
                    : "bg-terminal-accent/70 border border-terminal-accent"
              }`}
            >
              <span className="text-xs font-mono font-bold text-black">{trit === -1 ? "T" : trit}</span>
            </div>
          )),
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 w-full max-w-md">
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 rounded-full bg-red-500/70 border border-red-400 flex items-center justify-center mb-2">
            <span className="text-xs font-mono font-bold text-black">T</span>
          </div>
          <span className="text-xs font-mono text-terminal-dim">-1 (Negative)</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 rounded-full bg-gray-500/40 border border-gray-400 flex items-center justify-center mb-2">
            <span className="text-xs font-mono font-bold text-black">0</span>
          </div>
          <span className="text-xs font-mono text-terminal-dim">0 (Neutral)</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 rounded-full bg-terminal-accent/70 border border-terminal-accent flex items-center justify-center mb-2">
            <span className="text-xs font-mono font-bold text-black">1</span>
          </div>
          <span className="text-xs font-mono text-terminal-dim">1 (Positive)</span>
        </div>
      </div>
    </div>
  )
}

// Efficiency Comparison Chart
const EfficiencyChart = () => {
  return (
    <div className="p-6 border border-terminal-border/30 rounded-lg bg-terminal-code-bg/10 terminal-glow">
      <h3 className="text-xl font-mono font-bold text-terminal-accent mb-4">Binary vs. Ternary Efficiency</h3>

      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-mono">
            <span className="text-terminal-dim">Energy Consumption</span>
            <span className="text-terminal-dim">-70%</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-24 text-right text-xs font-mono text-terminal-dim">Binary</div>
            <div className="flex-1 bg-terminal-code-bg/30 rounded-full h-4">
              <div className="bg-red-500 h-4 rounded-full w-full"></div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-24 text-right text-xs font-mono text-terminal-dim">Ternary</div>
            <div className="flex-1 bg-terminal-code-bg/30 rounded-full h-4">
              <div className="bg-terminal-accent h-4 rounded-full" style={{ width: "30%" }}></div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm font-mono">
            <span className="text-terminal-dim">Storage Efficiency</span>
            <span className="text-terminal-dim">+58%</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-24 text-right text-xs font-mono text-terminal-dim">Binary</div>
            <div className="flex-1 bg-terminal-code-bg/30 rounded-full h-4">
              <div className="bg-red-500 h-4 rounded-full" style={{ width: "63%" }}></div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-24 text-right text-xs font-mono text-terminal-dim">Ternary</div>
            <div className="flex-1 bg-terminal-code-bg/30 rounded-full h-4">
              <div className="bg-terminal-accent h-4 rounded-full w-full"></div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm font-mono">
            <span className="text-terminal-dim">Quantum Resistance</span>
            <span className="text-terminal-dim">+215%</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-24 text-right text-xs font-mono text-terminal-dim">Binary</div>
            <div className="flex-1 bg-terminal-code-bg/30 rounded-full h-4">
              <div className="bg-red-500 h-4 rounded-full" style={{ width: "32%" }}></div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-24 text-right text-xs font-mono text-terminal-dim">Ternary</div>
            <div className="flex-1 bg-terminal-code-bg/30 rounded-full h-4">
              <div className="bg-terminal-accent h-4 rounded-full w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Quantum Threats Dashboard CTA
const QuantumThreatsCTA = () => {
  return (
    <div className="mt-12 p-8 border border-terminal-border/30 rounded-lg bg-black/50 terminal-glow relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-terminal-accent/10 via-transparent to-red-500/10 pointer-events-none"></div>

      {/* Alert icon */}
      <div className="absolute top-6 right-6 animate-pulse">
        <div className="relative">
          <AlertTriangle className="h-16 w-16 text-red-500/30" />
          <AlertTriangle className="h-16 w-16 text-red-500/20 absolute top-0 left-0 animate-ping" />
        </div>
      </div>

      <div className="relative z-10">
        <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono mb-4">
          <span className="mr-1">$</span> ./quantum_threat_monitor --realtime
        </div>

        <h2 className="text-2xl md:text-3xl font-mono font-bold text-terminal-accent mb-4">
          Quantum Threats Dashboard
        </h2>

        <p className="text-terminal-dim font-mono leading-relaxed max-w-3xl mb-6">
          The quantum computing revolution is accelerating. Stay ahead of emerging threats with our real-time Quantum
          Threats Dashboard, providing continuous monitoring of quantum computing advancements and their potential
          impact on cryptographic systems.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-terminal-code-bg/20 p-4 rounded-md border border-terminal-border/30">
            <Shield className="h-6 w-6 text-terminal-accent mb-2" />
            <h3 className="text-lg font-mono font-bold text-terminal-text mb-1">Threat Assessment</h3>
            <p className="text-sm text-terminal-dim font-mono">
              Real-time analysis of quantum computing advancements and their impact on cryptographic security
            </p>
          </div>

          <div className="bg-terminal-code-bg/20 p-4 rounded-md border border-terminal-border/30">
            <BarChart3 className="h-6 w-6 text-terminal-accent mb-2" />
            <h3 className="text-lg font-mono font-bold text-terminal-text mb-1">Risk Metrics</h3>
            <p className="text-sm text-terminal-dim font-mono">
              Quantified risk assessment for various cryptographic systems against quantum attacks
            </p>
          </div>

          <div className="bg-terminal-code-bg/20 p-4 rounded-md border border-terminal-border/30">
            <Lock className="h-6 w-6 text-terminal-accent mb-2" />
            <h3 className="text-lg font-mono font-bold text-terminal-text mb-1">Mitigation Strategies</h3>
            <p className="text-sm text-terminal-dim font-mono">
              Actionable recommendations to protect your systems against quantum threats
            </p>
          </div>
        </div>

        {/* Replace the existing CTA buttons in the QuantumThreatsCTA component: */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/quantum-threat-dashboard" variant="primary" icon={ExternalLink} iconPosition="right">
            Explore Quantum Threats Dashboard
          </CTAButton>

          <CTAButton href="/contact" variant="secondary" icon={Shield} iconPosition="left">
            Schedule Security Consultation
          </CTAButton>
        </div>
      </div>
    </div>
  )
}

export default function ConclusionClientPage() {
  useEffect(() => {
    document.body.classList.add("dark")
  }, [])

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="text-sm font-mono text-terminal-dim mb-2">
          <Link href="/whitepaper" className="hover:text-terminal-accent transition-colors">
            Whitepaper
          </Link>
          {" > "}
          <span className="text-terminal-accent">Conclusion</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-terminal-accent">Conclusion</h1>
      </div>

      <section>
        <StyledSection>
          <h2 className="text-2xl font-bold mb-4 text-terminal-accent">Tritcoin: A Paradigm Shift</h2>
          <p className="text-terminal-dim font-mono leading-relaxed mb-4">
            Throughout this whitepaper, we have presented Tritcoin as a revolutionary approach to blockchain technology,
            leveraging the mathematical elegance and efficiency of balanced ternary computing. By transcending the
            limitations of binary systems, Tritcoin offers a quantum-resistant, energy-efficient, and mathematically
            superior foundation for the future of decentralized finance.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-mono font-bold text-terminal-accent mb-4">Key Innovations</h3>
              <ul className="space-y-3 text-terminal-dim font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Balanced ternary architecture providing 58% greater information density</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Quantum-resistant cryptography through ternary lattice-based systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>70% reduction in energy consumption compared to binary blockchains</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Advanced privacy features through ternary zero-knowledge proofs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Ternary smart contracts with enhanced expressiveness and security</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-mono font-bold text-terminal-accent mb-4">Technical Foundation</h3>
              <ul className="space-y-3 text-terminal-dim font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Modern React/Next.js architecture with TypeScript type safety</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Turborepo monorepo structure for optimal development workflow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Styled-components for consistent UI implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Comprehensive testing and security auditing framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Internationalization support for global adoption</span>
                </li>
              </ul>
            </div>
          </div>
        </StyledSection>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-terminal-accent">Balanced Ternary: The Future of Computing</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <BalancedTernaryViz />
          <EfficiencyChart />
        </div>

        <TechnicalNote className="mt-6">
          Balanced ternary computing offers mathematical advantages that extend beyond blockchain technology. The
          three-state system (-1, 0, 1) provides natural representations for concepts like positive, neutral, and
          negative, enabling more efficient algorithms and data structures across various domains.
        </TechnicalNote>
      </section>

      <section className="mt-12">
        <StyledSection>
          <h2 className="text-2xl font-bold mb-4 text-terminal-accent">Beyond Blockchain: A New Computing Paradigm</h2>
          <p className="text-terminal-dim font-mono leading-relaxed mb-4">
            While Tritcoin represents a significant advancement in blockchain technology, the implications of balanced
            ternary computing extend far beyond cryptocurrencies. The mathematical elegance and efficiency of
            three-state logic opens new possibilities in:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-terminal-code-bg/20 p-4 rounded-md border border-terminal-border/30">
              <Zap className="h-6 w-6 text-terminal-accent mb-2" />
              <h3 className="text-lg font-mono font-bold text-terminal-text mb-1">Energy-Efficient Computing</h3>
              <p className="text-sm text-terminal-dim font-mono">
                Reduced power consumption for data centers and edge devices
              </p>
            </div>

            <div className="bg-terminal-code-bg/20 p-4 rounded-md border border-terminal-border/30">
              <Shield className="h-6 w-6 text-terminal-accent mb-2" />
              <h3 className="text-lg font-mono font-bold text-terminal-text mb-1">Post-Quantum Security</h3>
              <p className="text-sm text-terminal-dim font-mono">Natural resistance to quantum computing attacks</p>
            </div>

            <div className="bg-terminal-code-bg/20 p-4 rounded-md border border-terminal-border/30">
              <Terminal className="h-6 w-6 text-terminal-accent mb-2" />
              <h3 className="text-lg font-mono font-bold text-terminal-text mb-1">AI and Machine Learning</h3>
              <p className="text-sm text-terminal-dim font-mono">
                Enhanced neural network architectures with ternary weights
              </p>
            </div>
          </div>

          <p className="text-terminal-dim font-mono leading-relaxed mt-6">
            As we stand at the threshold of the quantum computing era, Tritcoin offers a path forward that embraces
            mathematical innovation to create a blockchain architecture capable of meeting the challenges of the future.
            The journey has just begun, and we invite you to join us in exploring the full potential of balanced ternary
            computing.
          </p>
        </StyledSection>
      </section>

      <QuantumThreatsCTA />

      <div className="mt-16 flex justify-between">
        <Link
          href="/whitepaper/future-development"
          className="flex items-center gap-2 text-terminal-dim hover:text-terminal-accent transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="font-mono text-sm">Previous: Future Development</span>
        </Link>
        <div></div>
      </div>
    </div>
  )
}

