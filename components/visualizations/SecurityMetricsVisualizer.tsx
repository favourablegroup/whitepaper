"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Shield, Network, Key, RefreshCcw, ChevronDown, ChevronUp } from "lucide-react"

// Separate components for each section to ensure complete independence
const TECCProtocolCard = () => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <Card className="p-6 bg-black/40 border-green-500/30 hover:border-green-500/50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-mono text-green-400">T/ECC Protocol</h3>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center gap-2 text-xs text-green-500 hover:text-green-400"
        >
          {showDetails ? "Hide Details" : "Show Details"}
          {showDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-green-300">Type: Ternary Elliptic Curve Cryptography</span>
          <span className="text-green-400">Quantum-Safe</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-green-300">Implementation Status</span>
            <span className="text-green-400">100%</span>
          </div>
          <Progress value={100} className="h-2" indicatorClassName="bg-gradient-to-r from-green-500 to-green-400" />
        </div>
        {showDetails && (
          <Alert className="bg-black/60 border-green-500/30 mt-4">
            <AlertTitle className="text-green-400 mb-2">T/ECC Implementation Details</AlertTitle>
            <AlertDescription className="text-xs space-y-2 text-green-100/90">
              <p>• Post-quantum cryptographic protocol</p>
              <p>• Balanced ternary implementation</p>
              <p>• Enhanced key exchange security</p>
              <p>• Quantum-resistant signatures</p>
            </AlertDescription>
          </Alert>
        )}
      </div>
    </Card>
  )
}

const HashKeySpaceCard = () => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <Card className="p-6 bg-black/40 border-yellow-500/30">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-mono text-yellow-400">Hash Key Space</h3>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center gap-2 text-xs text-yellow-500 hover:text-yellow-400"
        >
          {showDetails ? "Hide Details" : "Show Details"}
          {showDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      </div>

      <div className="space-y-6">
        {/* Binary Space Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-blue-400">Binary (2^256)</span>
            <span className="text-blue-400">~1.16 x 10^77</span>
          </div>
          <div className="h-3 w-[5%] bg-gradient-to-r from-blue-500 to-blue-400 rounded" />
        </div>

        {/* Trinary Space Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-green-400">Trinary (3^2187)</span>
            <span className="text-green-400">~3.45 x 10^1045</span>
          </div>
          <div className="h-3 w-full bg-gradient-to-r from-green-500 to-green-400 rounded" />
        </div>

        {showDetails && (
          <Alert className="bg-black/60 border-yellow-500/30">
            <AlertTitle className="text-yellow-400 mb-2">Hash Key Space Comparison</AlertTitle>
            <AlertDescription className="text-xs space-y-2 text-yellow-100/90">
              <p>• Vastly larger key space than binary systems</p>
              <p>• Increased resistance to brute force attacks</p>
              <p>• Enhanced entropy in hash functions</p>
              <p>• Quantum-resistant key generation</p>
            </AlertDescription>
          </Alert>
        )}
      </div>
    </Card>
  )
}

export function SecurityMetricsVisualizer() {
  return (
    <div className="space-y-8">
      {/* Main Security Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* T/ECC Protocol Card */}
        <TECCProtocolCard />

        {/* Hash Key Space Card */}
        <HashKeySpaceCard />
      </div>

      {/* Security Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Quantum Resistance */}
        <Card className="p-4 bg-black/40 border-purple-500/30">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-mono text-purple-400">Quantum Resistance</h3>
            <Shield className="h-4 w-4 text-purple-500" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-purple-300/70">T/ECC Implementation</span>
              <span className="text-purple-400">100%</span>
            </div>
            <Progress
              value={100}
              className="h-1.5"
              indicatorClassName="bg-gradient-to-r from-purple-500 to-purple-400"
            />
          </div>
        </Card>

        {/* Network Security */}
        <Card className="p-4 bg-black/40 border-blue-500/30">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-mono text-blue-400">Network Security</h3>
            <Network className="h-4 w-4 text-blue-500" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-blue-300/70">Quantum-Safe Routing</span>
              <span className="text-blue-400">98%</span>
            </div>
            <Progress value={98} className="h-1.5" indicatorClassName="bg-gradient-to-r from-blue-500 to-blue-400" />
          </div>
        </Card>

        {/* Protocol Security */}
        <Card className="p-4 bg-black/40 border-green-500/30">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-mono text-green-400">Protocol Security</h3>
            <Key className="h-4 w-4 text-green-500" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-green-300/70">Zero-Knowledge Proofs</span>
              <span className="text-green-400">95%</span>
            </div>
            <Progress value={95} className="h-1.5" indicatorClassName="bg-gradient-to-r from-green-500 to-green-400" />
          </div>
        </Card>
      </div>

      {/* Security Status */}
      <Card className="p-6 bg-black/40 border-gray-500/30">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-mono text-gray-400">Security Status</h3>
          <RefreshCcw className="h-4 w-4 text-gray-500" />
        </div>
        <Alert className="bg-green-900/20 border-green-500/30">
          <AlertTitle className="flex items-center text-green-400">
            <Shield className="h-4 w-4 mr-2" />
            System Status: Optimal
          </AlertTitle>
          <AlertDescription className="mt-2 text-xs text-green-300/70">
            All security systems operational with maximum quantum resistance
          </AlertDescription>
        </Alert>
        <div className="mt-4 text-xs text-gray-400/70">Last updated: {new Date().toLocaleString()}</div>
      </Card>
    </div>
  )
}

