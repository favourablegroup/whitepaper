"use client"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SecurityMetricsVisualizer } from "@/components/visualizations/SecurityMetricsVisualizer"

export default function SecurityAuditingClientPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-8">
        <div className="text-sm font-mono text-terminal-dim mb-2">
          <Link href="/whitepaper" className="hover:text-terminal-accent transition-colors">
            Whitepaper
          </Link>
          {" > "}
          <span className="text-terminal-accent">Security and Auditing</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-terminal-accent">Security and Auditing</h1>
      </div>

      {/* Security Metrics Visualization */}
      <section className="mb-8">
        <SecurityMetricsVisualizer />
      </section>

      {/* Additional security content */}
      <section className="space-y-4 text-gray-300">
        <h2 className="text-xl font-mono text-yellow-400">Comprehensive Security Analysis</h2>
        <p>
          Our security infrastructure leverages the power of balanced ternary computing combined with advanced
          cryptographic techniques to provide unparalleled protection against both classical and quantum threats.
        </p>
      </section>

      <div className="mt-16 flex justify-between">
        <Link
          href="/whitepaper/user-experience"
          className="flex items-center gap-2 text-terminal-dim hover:text-terminal-accent transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="font-mono text-sm">Previous: User Experience</span>
        </Link>
        <Link
          href="/whitepaper/future-development"
          className="flex items-center gap-2 text-terminal-dim hover:text-terminal-accent transition-colors"
        >
          <span className="font-mono text-sm">Next: Future Development</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

