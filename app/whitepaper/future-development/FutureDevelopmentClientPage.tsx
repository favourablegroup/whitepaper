"use client"

import { Phase3Timeline } from "@/components/visualizations/Phase3Timeline"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function FutureDevelopmentClientPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-sm font-mono text-terminal-dim mb-2">
          <Link href="/whitepaper" className="hover:text-terminal-accent transition-colors">
            Whitepaper
          </Link>
          {" > "}
          <span className="text-terminal-accent">Future Development</span>
        </div>

        <h1 className="text-4xl font-bold font-mono text-terminal-accent mb-8">Future Development</h1>

        <div className="prose prose-invert max-w-none">
          <Phase3Timeline />
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-16 pt-6 border-t border-terminal-border/30">
          <Link
            href="/whitepaper/security-auditing"
            className="flex items-center gap-2 text-terminal-dim hover:text-terminal-accent transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="font-mono text-sm">Previous: Security Auditing</span>
          </Link>

          <Link
            href="/whitepaper/conclusion"
            className="flex items-center gap-2 text-terminal-dim hover:text-terminal-accent transition-colors"
          >
            <span className="font-mono text-sm">Next: Conclusion</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

