"use client"

import { TechnicalNote } from "@/components/TechnicalNote"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Shield, EyeOff, Eye, Lock, Server } from "lucide-react"
import { UserFlowVisualizer } from "@/components/visualizations/UserFlowVisualizer"
import { motion } from "framer-motion"
import { useState } from "react"

export default function UserExperienceClientPage() {
  const [activeZeroTrustState, setActiveZeroTrustState] = useState<number>(0)

  const zeroTrustStates = [
    {
      value: -1,
      label: "Explicitly Untrusted",
      description: "Known malicious entities and activities are actively blocked and logged.",
      color: "from-red-500/20 to-red-600/10",
      borderColor: "border-red-500/30",
      icon: <EyeOff className="h-5 w-5 text-red-400" />,
      userExperience:
        "Users receive clear warnings and preventative blocks when attempting potentially harmful actions.",
    },
    {
      value: 0,
      label: "Neutral Verification",
      description: "The default state for all entities. Access requires continuous verification.",
      color: "from-yellow-500/20 to-yellow-600/10",
      borderColor: "border-yellow-500/30",
      icon: <Eye className="h-5 w-5 text-yellow-400" />,
      userExperience: "Users experience seamless but thorough verification at each step, with minimal friction.",
    },
    {
      value: 1,
      label: "Verified Context",
      description: "Temporarily elevated access based on verified context and behavior patterns.",
      color: "from-green-500/20 to-green-600/10",
      borderColor: "border-green-500/30",
      icon: <Shield className="h-5 w-5 text-green-400" />,
      userExperience: "Users enjoy streamlined interactions while maintaining security through contextual trust.",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="text-sm font-mono text-terminal-dim mb-2">
          <Link href="/whitepaper" className="hover:text-terminal-accent transition-colors">
            Whitepaper
          </Link>
          {" > "}
          <span className="text-terminal-accent">User Experience and Interface Design</span>
        </div>

        <div className="space-y-8">
          <section className="space-y-4">
            <h1 className="text-3xl font-bold text-terminal-accent">User Experience and Interface Design</h1>
            <p className="text-terminal-dim">
              TritCoin's user experience is designed around four core principles: security, simplicity, transparency,
              and quantum resistance. Each interaction is carefully crafted to maintain these principles while providing
              a seamless experience.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-terminal-accent">User Flow Visualization</h2>
            <p className="text-terminal-dim">
              The transaction flow is designed to be intuitive while maintaining the highest security standards. Each
              step incorporates quantum-resistant encryption and verification:
            </p>
            <UserFlowVisualizer />

            <TechnicalNote>
              The user flow implementation leverages several key technologies: - **T/ECC Protocol Integration**: Each
              step is secured using our proprietary ternary elliptic curve cryptography - **Zero-Knowledge Proofs**:
              Transactions maintain privacy while ensuring validity - **Quantum-Resistant Verification**: All operations
              are protected against quantum computing threats - **Real-time State Updates**: The interface provides
              immediate feedback while maintaining security
            </TechnicalNote>
          </section>

          {/* New Zero-Trust Model Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-terminal-accent">Zero-Trust Security Model</h2>
            <p className="text-terminal-dim">
              Our ternary approach to security transcends traditional binary models by introducing a third state that
              allows for contextual trust decisions, creating a more nuanced and secure user experience.
            </p>

            {/* Visual Zero-Trust Model */}
            <div className="relative p-6 rounded-lg bg-black/30 backdrop-blur border border-terminal-border/30 terminal-glow overflow-hidden">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-terminal-accent/10 via-transparent to-terminal-accent/5 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 flex-shrink-0">
                    <Lock className="h-5 w-5 text-terminal-accent" />
                  </div>
                  <h3 className="text-xl font-mono font-bold text-terminal-accent">
                    Ternary Security Model: Beyond Binary Trust
                  </h3>
                </div>

                <p className="text-terminal-dim mb-8">
                  In the age of AI and quantum computing, security is no longer a binary proposition. Our ternary
                  approach creates a more intuitive and secure user experience by enabling contextual trust decisions:
                </p>

                {/* Interactive Ternary States */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {zeroTrustStates.map((state, index) => (
                    <motion.div
                      key={state.value}
                      className={`
                        p-4 rounded-md border cursor-pointer transition-all
                        ${activeZeroTrustState === index ? `${state.borderColor} bg-gradient-radial ${state.color}` : "border-terminal-border/30 bg-terminal-code-bg/30"}
                      `}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setActiveZeroTrustState(index)}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 border border-terminal-border/30">
                          {state.icon}
                        </div>
                        <div className="font-mono font-bold">
                          {state.value === -1 ? "-1: " : state.value === 0 ? "0: " : "+1: "}
                          {state.label}
                        </div>
                      </div>
                      <p className="text-sm text-terminal-dim">{state.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* User Experience Impact */}
                <motion.div
                  className="p-5 rounded-md bg-black/40 border border-terminal-border/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={activeZeroTrustState}
                >
                  <h4 className="text-lg font-mono font-bold text-terminal-accent mb-2">User Experience Impact</h4>
                  <p className="text-terminal-dim">{zeroTrustStates[activeZeroTrustState].userExperience}</p>
                </motion.div>

                {/* Visual Representation */}
                <div className="mt-8 relative h-24">
                  <div className="absolute inset-0 flex items-center">
                    <div className="h-1 w-full bg-terminal-dim/20 rounded-full"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-between">
                    <motion.div
                      className="h-16 w-16 rounded-full flex items-center justify-center bg-black border-2 border-red-500/50 text-red-400 font-mono font-bold"
                      animate={{
                        scale: activeZeroTrustState === 0 ? 1.2 : 1,
                        borderColor: activeZeroTrustState === 0 ? "rgba(239, 68, 68, 0.8)" : "rgba(239, 68, 68, 0.5)",
                      }}
                    >
                      -1
                    </motion.div>
                    <motion.div
                      className="h-16 w-16 rounded-full flex items-center justify-center bg-black border-2 border-yellow-500/50 text-yellow-400 font-mono font-bold"
                      animate={{
                        scale: activeZeroTrustState === 1 ? 1.2 : 1,
                        borderColor: activeZeroTrustState === 1 ? "rgba(245, 158, 11, 0.8)" : "rgba(245, 158, 11, 0.5)",
                      }}
                    >
                      0
                    </motion.div>
                    <motion.div
                      className="h-16 w-16 rounded-full flex items-center justify-center bg-black border-2 border-green-500/50 text-green-400 font-mono font-bold"
                      animate={{
                        scale: activeZeroTrustState === 2 ? 1.2 : 1,
                        borderColor: activeZeroTrustState === 2 ? "rgba(34, 197, 94, 0.8)" : "rgba(34, 197, 94, 0.5)",
                      }}
                    >
                      +1
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-lg bg-black/30 backdrop-blur border border-terminal-border/30 terminal-glow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30">
                    <Server className="h-4 w-4 text-terminal-accent" />
                  </div>
                  <h4 className="text-lg font-mono font-bold text-terminal-accent">Continuous Authentication</h4>
                </div>
                <p className="text-sm text-terminal-dim">
                  Unlike traditional systems that authenticate once, our zero-trust model continuously verifies user
                  identity and context throughout the session, providing a seamless yet secure experience.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-black/30 backdrop-blur border border-terminal-border/30 terminal-glow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30">
                    <Shield className="h-4 w-4 text-terminal-accent" />
                  </div>
                  <h4 className="text-lg font-mono font-bold text-terminal-accent">Contextual Security</h4>
                </div>
                <p className="text-sm text-terminal-dim">
                  Our interface adapts security requirements based on transaction value, network conditions, and threat
                  intelligence, balancing security with usability in real-time.
                </p>
              </div>
            </div>

            <TechnicalNote>
              The zero-trust model is implemented using our ternary state machine, which enables more nuanced security
              decisions than traditional binary (trusted/untrusted) models. This approach provides stronger security
              while reducing user friction through contextual trust evaluation.
            </TechnicalNote>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-terminal-accent">Security-First Design</h2>
            <p className="text-terminal-dim">
              While traditional blockchain interfaces often sacrifice security for convenience, TritCoin's approach
              integrates security at every level without compromising usability. The ternary architecture enables:
            </p>
            <ul className="list-disc list-inside space-y-2 text-terminal-dim ml-4">
              <li>Intuitive representation of quantum-resistant states</li>
              <li>Real-time verification with zero-knowledge guarantees</li>
              <li>Transparent security status indicators</li>
              <li>Built-in quantum threat detection</li>
            </ul>
          </section>

          <TechnicalNote>
            Implementation Details: - Built with Next.js 14 and TypeScript for type-safe, performant interactions -
            Leverages WebAssembly for client-side ternary computations - Implements real-time state management with
            optimistic updates - Uses hardware-accelerated encryption when available
          </TechnicalNote>
        </div>
      </div>

      <div className="mt-16 flex justify-between">
        <Link
          href="/whitepaper/economic-model"
          className="flex items-center gap-2 text-terminal-dim hover:text-terminal-accent transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="font-mono text-sm">Previous: Economic Model</span>
        </Link>
        <Link
          href="/whitepaper/security-auditing"
          className="flex items-center gap-2 text-terminal-dim hover:text-terminal-accent transition-colors"
        >
          <span className="font-mono text-sm">Next: Security Auditing</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

