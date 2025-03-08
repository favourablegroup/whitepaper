"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Shield, AlertTriangle, Zap, Lock, Terminal, ArrowLeft, FileText } from "lucide-react"
// Import the ScrollToTop component at the top of the file
import { ScrollToTop } from "@/components/ScrollToTop"
// Import the CTAButton component
import { CTAButton } from "@/components/CTAButton"

interface QuantumThreatMetrics {
  currentQubitCount: number
  ternaryResistanceLevel: number
  estimatedYearsUntilVulnerable: number
  threatLevel: "Critical" | "High" | "Medium" | "Low"
  mitigationStatus: {
    postQuantumFeatures: boolean
    enhancedTernaryComplexity: boolean
    automaticUpdates: boolean
  }
}

interface ThreatData {
  name: string
  qubits: number
  resistance: number
}

const mockData: ThreatData[] = [
  { name: "Jan", qubits: 100, resistance: 95 },
  { name: "Feb", qubits: 120, resistance: 93 },
  { name: "Mar", qubits: 150, resistance: 90 },
  { name: "Apr", qubits: 200, resistance: 87 },
  { name: "May", qubits: 220, resistance: 85 },
  { name: "Jun", qubits: 250, resistance: 83 },
]

const QuantumThreatDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<QuantumThreatMetrics>({
    currentQubitCount: 127,
    ternaryResistanceLevel: 98,
    estimatedYearsUntilVulnerable: 15,
    threatLevel: "Low",
    mitigationStatus: {
      postQuantumFeatures: true,
      enhancedTernaryComplexity: true,
      automaticUpdates: true,
    },
  })

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        ...prev,
        currentQubitCount: prev.currentQubitCount + Math.floor(Math.random() * 3),
        ternaryResistanceLevel: Math.max(80, prev.ternaryResistanceLevel - Math.random() * 0.1),
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const getThreatColor = (level: string) => {
    switch (level) {
      case "Critical":
        return "text-red-500"
      case "High":
        return "text-orange-500"
      case "Medium":
        return "text-yellow-500"
      default:
        return "text-green-500"
    }
  }

  // Custom chart component using terminal styling
  const TernaryChart = () => {
    return (
      <div className="h-[300px] relative">
        <div className="absolute inset-0 flex items-end">
          {mockData.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center justify-end h-full">
              <div className="w-full px-1">
                <div
                  className="w-full bg-terminal-accent/70 rounded-t"
                  style={{ height: `${(item.resistance / 100) * 200}px` }}
                ></div>
              </div>
              <div className="w-full px-1 mt-1" style={{ height: `${(item.qubits / 300) * 200}px` }}>
                <div className="w-full bg-red-500/70 rounded-t h-full"></div>
              </div>
              <div className="text-xs font-mono text-terminal-dim mt-2">{item.name}</div>
            </div>
          ))}
        </div>
        <div className="absolute left-0 top-0 h-full border-r border-terminal-border/30 flex flex-col justify-between">
          <div className="text-xs font-mono text-terminal-dim">100%</div>
          <div className="text-xs font-mono text-terminal-dim">50%</div>
          <div className="text-xs font-mono text-terminal-dim">0%</div>
        </div>
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-terminal-accent/70 mr-1"></div>
            <span className="text-xs font-mono text-terminal-dim">Resistance</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500/70 mr-1"></div>
            <span className="text-xs font-mono text-terminal-dim">Qubits</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 text-terminal-text">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-mono font-bold text-terminal-accent">Quantum Threat Analysis</h1>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-terminal-accent/10 border border-terminal-accent/20 text-terminal-accent text-xs font-mono">
          <span className="animate-pulse">●</span>
          <span>LIVE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Ternary Security Status */}
        <Card className="border-terminal-border/30 bg-black/30 backdrop-blur-sm terminal-glow">
          <CardHeader className="border-b border-terminal-border/30">
            <CardTitle className="text-terminal-accent flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Ternary Security Status
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-terminal-dim font-mono">Resistance Level</p>
                <Progress
                  value={metrics.ternaryResistanceLevel}
                  className="mt-2 bg-terminal-code-bg/50"
                  indicatorClassName="bg-terminal-accent"
                />
                <p className="text-sm mt-1 font-mono">{metrics.ternaryResistanceLevel.toFixed(2)}%</p>
              </div>
              <div>
                <p className="text-sm text-terminal-dim font-mono">Years Until Vulnerable</p>
                <p className="text-2xl font-bold font-mono text-terminal-text">
                  {metrics.estimatedYearsUntilVulnerable}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Threat Level */}
        <Card className="border-terminal-border/30 bg-black/30 backdrop-blur-sm terminal-glow">
          <CardHeader className="border-b border-terminal-border/30">
            <CardTitle className="text-terminal-accent flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Current Threat Level
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className={`text-4xl font-bold font-mono ${getThreatColor(metrics.threatLevel)}`}>
                {metrics.threatLevel}
              </p>
              <p className="text-sm text-terminal-dim font-mono mt-2">
                Based on {metrics.currentQubitCount} active qubits
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Mitigation Status */}
        <Card className="border-terminal-border/30 bg-black/30 backdrop-blur-sm terminal-glow">
          <CardHeader className="border-b border-terminal-border/30">
            <CardTitle className="text-terminal-accent flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Mitigation Status
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-2">
              {Object.entries(metrics.mitigationStatus).map(([key, enabled]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-sm font-mono text-terminal-dim capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                  <span className={enabled ? "text-green-500" : "text-red-500"}>{enabled ? "✓" : "✗"}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Trend Analysis */}
      <Card className="border-terminal-border/30 bg-black/30 backdrop-blur-sm terminal-glow">
        <CardHeader className="border-b border-terminal-border/30">
          <CardTitle className="text-terminal-accent flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Quantum Computing Progress vs. Ternary Resistance
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <TernaryChart />
        </CardContent>
      </Card>

      {/* Threat Table */}
      <Card className="border-terminal-border/30 bg-black/30 backdrop-blur-sm terminal-glow">
        <CardHeader className="border-b border-terminal-border/30">
          <CardTitle className="text-terminal-accent flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            Recent Quantum Developments
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow className="border-terminal-border/30">
                <TableHead className="text-terminal-dim">Date</TableHead>
                <TableHead className="text-terminal-dim">Development</TableHead>
                <TableHead className="text-terminal-dim">Impact</TableHead>
                <TableHead className="text-terminal-dim">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-terminal-border/30">
                <TableCell className="font-mono">2025-03-07</TableCell>
                <TableCell className="font-mono">IBM Quantum System Two</TableCell>
                <TableCell className="font-mono">Medium</TableCell>
                <TableCell className="font-mono text-terminal-accent">Monitored</TableCell>
              </TableRow>
              <TableRow className="border-terminal-border/30">
                <TableCell className="font-mono">2025-03-06</TableCell>
                <TableCell className="font-mono">Google Quantum Error Correction</TableCell>
                <TableCell className="font-mono">High</TableCell>
                <TableCell className="font-mono text-green-500">Mitigated</TableCell>
              </TableRow>
              <TableRow className="border-terminal-border/30">
                <TableCell className="font-mono">2025-03-05</TableCell>
                <TableCell className="font-mono">Quantum Shor's Algorithm Improvement</TableCell>
                <TableCell className="font-mono">High</TableCell>
                <TableCell className="font-mono text-green-500">Mitigated</TableCell>
              </TableRow>
              <TableRow className="border-terminal-border/30">
                <TableCell className="font-mono">2025-03-04</TableCell>
                <TableCell className="font-mono">D-Wave Quantum Annealer Update</TableCell>
                <TableCell className="font-mono">Low</TableCell>
                <TableCell className="font-mono text-terminal-accent">Monitored</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Alert Section */}
      <Alert className="border-terminal-border/30 bg-black/30 backdrop-blur-sm">
        <AlertTriangle className="h-4 w-4 text-terminal-accent" />
        <AlertTitle className="text-terminal-accent font-mono">System Status</AlertTitle>
        <AlertDescription className="text-terminal-dim font-mono">
          Tritcoin's balanced ternary architecture remains secure against current quantum computing capabilities.
          Continuous monitoring and automatic updates ensure long-term resistance.
        </AlertDescription>
      </Alert>
      <ScrollToTop />

      <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
        <CTAButton href="/whitepaper" variant="primary" icon={FileText} iconPosition="left">
          Read Full Whitepaper
        </CTAButton>

        <CTAButton href="/contact" variant="secondary" icon={Shield} iconPosition="left">
          Schedule Security Consultation
        </CTAButton>
      </div>

      <div className="mt-8">
        <CTAButton href="/" variant="secondary" icon={ArrowLeft} iconPosition="left">
          Back to Home
        </CTAButton>
      </div>
    </div>
  )
}

export default QuantumThreatDashboard

