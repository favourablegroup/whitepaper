import { AlertTriangle, BarChart3, ExternalLink, Lock, Shield } from "lucide-react"
import { CTAButton } from "./CTAButton"

export function QuantumThreatsCTA() {
  return (
    <div className="p-8 border border-terminal-border/30 rounded-lg bg-black/50 terminal-glow relative overflow-hidden">
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

