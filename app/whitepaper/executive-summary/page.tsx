"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Copy, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/CodeBlock"
import { TechnicalNote } from "@/components/TechnicalNote"
import { StyledSection } from "@/components/styled"
import { TernaryVisualizer } from "@/components/visualizations/TernaryVisualizer"
import { Cpu, Code, Leaf } from "lucide-react"
import { CTAButton } from "@/components/CTAButton"

export default function ExecutiveSummaryPage() {
  useEffect(() => {
    document.body.classList.add("dark")
  }, [])

  const [copied, setCopied] = useState(false)

  const handleCopyCitation = () => {
    const citation = `Fractalmoto, T. (2025). "Executive Summary". Tritcoin: A Peer-to-Peer Ternary Electronic Cash System. Final Protocol Solutions.`
    navigator.clipboard.writeText(citation)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-black text-terminal-text">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-background/50 pointer-events-none"></div>

      <main className="py-12 md:py-24 lg:py-32 relative">
        <div className="container px-4 md:px-6 relative">
          {/* Section header */}
          <div className="mb-8 flex items-center justify-between">
            <div className="inline-block px-3 py-1 rounded-full bg-terminal-accent/10 border border-terminal-accent/20 text-terminal-accent text-xs font-mono">
              <span className="mr-1">$</span> cat whitepaper/executive_summary.mdx
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-terminal-dim text-sm font-mono">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
              <Button variant="terminal-outline" size="sm" className="text-xs h-8 gap-1" onClick={handleCopyCitation}>
                <Copy className="h-3 w-3" />
                {copied ? "Copied!" : "Cite"}
              </Button>
            </div>
          </div>

          {/* Main content */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <h1 className="text-3xl font-mono font-bold tracking-tighter sm:text-4xl md:text-5xl text-terminal-text">
                Executive Summary
              </h1>

              <section>
                <h2 className="text-2xl font-mono font-bold text-terminal-accent mb-4">Overview</h2>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  TritCoin represents a paradigm shift in blockchain technology through its innovative implementation of
                  balanced ternary computing. Built on a modern React/Next.js stack with TypeScript and
                  Styled-components within a Turborepo monorepo architecture, TritCoin combines ancient wisdom with
                  cutting-edge technology to create a more efficient, secure, and sustainable blockchain platform.
                </p>
              </section>

              <TernaryVisualizer width={600} height={300} depth={6} />

              <section>
                <h2 className="text-2xl font-mono font-bold text-terminal-accent mb-4">Core Innovations</h2>

                <div className="space-y-6">
                  <h3 className="text-xl font-mono font-bold text-terminal-text">Technical Architecture</h3>
                  <p className="text-terminal-dim font-mono leading-relaxed">
                    Our monorepo structure leverages industry-leading technologies:
                  </p>
                  <ul className="space-y-2 font-mono pl-4">
                    <li className="flex items-start gap-2">
                      <span className="text-terminal-accent font-bold">$&gt;</span>
                      <span className="text-terminal-dim">
                        <strong>Next.js:</strong> Server-side rendering and optimized routing
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terminal-accent font-bold">$&gt;</span>
                      <span className="text-terminal-dim">
                        <strong>React:</strong> Component-based UI architecture with strict type checking
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terminal-accent font-bold">$&gt;</span>
                      <span className="text-terminal-dim">
                        <strong>TypeScript:</strong> End-to-end type safety across all packages
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terminal-accent font-bold">$&gt;</span>
                      <span className="text-terminal-dim">
                        <strong>Styled-components:</strong> Consistent design system implementation
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terminal-accent font-bold">$&gt;</span>
                      <span className="text-terminal-dim">
                        <strong>React Router:</strong> Dynamic routing in sub-applications
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terminal-accent font-bold">$&gt;</span>
                      <span className="text-terminal-dim">
                        <strong>i18n:</strong> Full internationalization support
                      </span>
                    </li>
                  </ul>

                  <CodeBlock language="typescript" highlight={[2, 3, 4, 5]}>
                    {`// Example of our strictly-typed component architecture
interface TritTransactionProps {
  sender: TritAddress;
  recipient: TritAddress;
  amount: TritValue;
  signature: TritSignature;
}

const TritTransaction: React.FC<TritTransactionProps> = ({
  sender,
  recipient,
  amount,
  signature,
}) => {
  return (
    <StyledSection>
      <TransactionDetails
        sender={sender}
        recipient={recipient}
        amount={amount}
        signature={signature}
      />
    </StyledSection>
  );
};`}
                  </CodeBlock>
                </div>

                <div className="space-y-6 mt-8">
                  <h3 className="text-xl font-mono font-bold text-terminal-text">Balanced Ternary Foundation</h3>
                  <p className="text-terminal-dim font-mono leading-relaxed">
                    At its core, TritCoin utilizes a balanced ternary number system (T, 0, 1) corresponding to (-1, 0,
                    1), enabling:
                  </p>
                  <ul className="space-y-2 font-mono pl-4">
                    <li className="flex items-start gap-2">
                      <span className="text-terminal-accent font-bold">$&gt;</span>
                      <span className="text-terminal-dim">
                        40% more efficient data representation compared to binary systems
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terminal-accent font-bold">$&gt;</span>
                      <span className="text-terminal-dim">Natural alignment with quantum computing principles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terminal-accent font-bold">$&gt;</span>
                      <span className="text-terminal-dim">Reduced energy consumption in computational operations</span>
                    </li>
                  </ul>

                  <TechnicalNote>
                    The balanced ternary system provides optimal efficiency in number representation, as mathematically
                    proven by Donald Knuth in "The Art of Computer Programming."
                  </TechnicalNote>
                </div>

                <div className="space-y-6 mt-8">
                  <h3 className="text-xl font-mono font-bold text-terminal-text">Advanced Cryptographic Security</h3>
                  <p className="text-terminal-dim font-mono leading-relaxed">
                    TritCoin implements groundbreaking cryptographic innovations:
                  </p>
                  <ul className="space-y-2 font-mono pl-4">
                    <li className="flex items-start gap-2">
                      <span className="text-terminal-accent font-bold">$&gt;</span>
                      <span className="text-terminal-dim">Elliptic curves over GF(3ⁿ) fields</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terminal-accent font-bold">$&gt;</span>
                      <span className="text-terminal-dim">Quantum-resistant isogeny-based cryptography</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terminal-accent font-bold">$&gt;</span>
                      <span className="text-terminal-dim">Sierpinski triangle-based visual hash verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terminal-accent font-bold">$&gt;</span>
                      <span className="text-terminal-dim">
                        3²¹⁸⁷ hash space providing superior collision resistance
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <StyledSection variant="highlighted">
                <h2 className="text-2xl font-mono font-bold text-terminal-accent mb-6">Key Differentiators</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30">
                      <Cpu className="h-6 w-6 text-terminal-accent" />
                    </div>
                    <h3 className="text-lg font-mono font-bold text-terminal-text">Technical Excellence</h3>
                    <ul className="space-y-2 text-sm font-mono">
                      <li className="flex items-start gap-2">
                        <span className="text-terminal-accent font-bold">$&gt;</span>
                        <span className="text-terminal-dim">
                          First blockchain implementing complete balanced ternary architecture
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-terminal-accent font-bold">$&gt;</span>
                        <span className="text-terminal-dim">
                          Post-quantum security through isogeny-based cryptography
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-terminal-accent font-bold">$&gt;</span>
                        <span className="text-terminal-dim">Visual hash verification using Sierpinski triangles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-terminal-accent font-bold">$&gt;</span>
                        <span className="text-terminal-dim">
                          Advanced privacy features through ternary sigma protocols
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30">
                      <Code className="h-6 w-6 text-terminal-accent" />
                    </div>
                    <h3 className="text-lg font-mono font-bold text-terminal-text">Developer Experience</h3>
                    <ul className="space-y-2 text-sm font-mono">
                      <li className="flex items-start gap-2">
                        <span className="text-terminal-accent font-bold">$&gt;</span>
                        <span className="text-terminal-dim">Comprehensive TypeScript SDK</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-terminal-accent font-bold">$&gt;</span>
                        <span className="text-terminal-dim">Modern React component library</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-terminal-accent font-bold">$&gt;</span>
                        <span className="text-terminal-dim">Styled-components theme system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-terminal-accent font-bold">$&gt;</span>
                        <span className="text-terminal-dim">Extensive documentation and tutorials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-terminal-accent font-bold">$&gt;</span>
                        <span className="text-terminal-dim">Active developer community support</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30">
                      <Leaf className="h-6 w-6 text-terminal-accent" />
                    </div>
                    <h3 className="text-lg font-mono font-bold text-terminal-text">Environmental Impact</h3>
                    <ul className="space-y-2 text-sm font-mono">
                      <li className="flex items-start gap-2">
                        <span className="text-terminal-accent font-bold">$&gt;</span>
                        <span className="text-terminal-dim">Reduced energy consumption through ternary efficiency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-terminal-accent font-bold">$&gt;</span>
                        <span className="text-terminal-dim">Optimized computational resources</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-terminal-accent font-bold">$&gt;</span>
                        <span className="text-terminal-dim">Sustainable consensus mechanism</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </StyledSection>

              <section>
                <h2 className="text-2xl font-mono font-bold text-terminal-accent mb-4">Vision</h2>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  TritCoin aims to revolutionize blockchain technology by combining the mathematical elegance of
                  balanced ternary computing with modern software engineering practices. Our implementation leverages
                  React, Next.js, and TypeScript to create a robust, maintainable, and scalable blockchain platform that
                  sets new standards for both technical excellence and developer experience.
                </p>

                <TechnicalNote>
                  Our monorepo architecture ensures consistent versioning and seamless integration across all packages
                  while maintaining strict type safety and optimal performance through Next.js's server-side rendering
                  capabilities.
                </TechnicalNote>
              </section>

              <div className="mt-12 flex justify-between">
                <div></div>
                <CTAButton href="/whitepaper/introduction" variant="primary" icon={ChevronRight} iconPosition="right">
                  1. Introduction
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

