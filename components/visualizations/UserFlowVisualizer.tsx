"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lock, Shield, Send, Check } from "lucide-react"

interface FlowNode {
  id: string
  title: string
  description: string
  icon: JSX.Element
  status: "pending" | "active" | "completed"
  details: {
    securityLevel: string
    timeEstimate: string
    requirements: string[]
  }
}

const flowNodes: FlowNode[] = [
  {
    id: "wallet-setup",
    title: "Wallet Setup",
    description: "Secure ternary wallet initialization",
    icon: <Lock className="w-6 h-6" />,
    status: "pending",
    details: {
      securityLevel: "Maximum - T/ECC Protocol",
      timeEstimate: "< 1 minute",
      requirements: ["Email verification", "Backup phrase generation"],
    },
  },
  {
    id: "key-generation",
    title: "Key Generation",
    description: "Quantum-resistant key pair creation",
    icon: <Shield className="w-6 h-6" />,
    status: "pending",
    details: {
      securityLevel: "3^2187 hash keys",
      timeEstimate: "30 seconds",
      requirements: ["Entropy collection", "Key validation"],
    },
  },
  {
    id: "transaction",
    title: "Transaction",
    description: "Secure value transfer process",
    icon: <Send className="w-6 h-6" />,
    status: "pending",
    details: {
      securityLevel: "Zero-Knowledge Proof",
      timeEstimate: "2-3 seconds",
      requirements: ["Balance verification", "Network consensus"],
    },
  },
  {
    id: "confirmation",
    title: "Confirmation",
    description: "Transaction verification and finality",
    icon: <Check className="w-6 h-6" />,
    status: "pending",
    details: {
      securityLevel: "Network-Wide Consensus",
      timeEstimate: "1-2 seconds",
      requirements: ["Block inclusion", "Propagation complete"],
    },
  },
]

export function UserFlowVisualizer() {
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const [completedNodes, setCompletedNodes] = useState<Set<string>>(new Set())
  const [isSimulating, setIsSimulating] = useState(false)

  // Simulate flow progression
  const simulateFlow = async () => {
    setIsSimulating(true)
    setCompletedNodes(new Set())

    for (const node of flowNodes) {
      setActiveNode(node.id)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setCompletedNodes((prev) => new Set([...prev, node.id]))
    }

    setActiveNode(null)
    setIsSimulating(false)
  }

  return (
    <div className="w-full space-y-6 p-4 sm:p-6 rounded-lg bg-black/20 backdrop-blur">
      {/* Control Panel */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg sm:text-xl font-mono text-terminal-accent">User Flow Simulation</h3>
        <button
          onClick={simulateFlow}
          disabled={isSimulating}
          className="px-3 py-1.5 sm:px-4 sm:py-2 bg-terminal-accent text-black rounded hover:bg-terminal-accent/90 disabled:opacity-50 transition-colors text-sm sm:text-base"
        >
          {isSimulating ? "Simulating..." : "Start Simulation"}
        </button>
      </div>

      {/* Flow Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {flowNodes.map((node, index) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`
              relative p-2.5 rounded-lg border min-h-[120px]
              ${activeNode === node.id ? "border-terminal-accent" : "border-terminal-dim/30"}
              ${completedNodes.has(node.id) ? "bg-terminal-accent/10" : "bg-black/40"}
              hover:border-terminal-accent/70 transition-colors cursor-pointer
            `}
            onClick={() => setActiveNode(node.id)}
          >
            {/* Node Content */}
            <div className="flex items-start gap-2">
              <div
                className={`
                p-1.5 rounded-full flex-shrink-0
                ${completedNodes.has(node.id) ? "bg-terminal-accent/20" : "bg-black/60"}
              `}
              >
                {node.icon}
              </div>
              <div className="min-w-0 flex-1">
                {" "}
                {/* Add min-w-0 to allow text truncation */}
                <h4 className="font-mono text-sm leading-tight text-terminal-accent truncate">{node.title}</h4>
                <p className="text-xs leading-snug text-terminal-dim line-clamp-2">{node.description}</p>
              </div>
            </div>

            {/* Connection Line */}
            {index < flowNodes.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-terminal-dim/30" />
            )}

            {/* Details Panel */}
            <AnimatePresence>
              {activeNode === node.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 pt-3 border-t border-terminal-dim/30"
                >
                  <div className="space-y-1.5 text-xs">
                    <p className="text-terminal-accent">Security: {node.details.securityLevel}</p>
                    <p className="text-terminal-dim">Time: {node.details.timeEstimate}</p>
                    <div>
                      <p className="text-terminal-dim mb-1">Required:</p>
                      <ul className="list-disc list-inside text-terminal-dim space-y-0.5">
                        {node.details.requirements.map((req, i) => (
                          <li key={i} className="truncate">
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Status Indicator */}
            <div
              className={`
              absolute top-2 right-2 w-1.5 h-1.5 rounded-full
              ${
                completedNodes.has(node.id)
                  ? "bg-green-500"
                  : activeNode === node.id
                    ? "bg-terminal-accent"
                    : "bg-terminal-dim/30"
              }
            `}
            />
          </motion.div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="h-1 w-full bg-terminal-dim/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-terminal-accent"
          initial={{ width: "0%" }}
          animate={{
            width: `${(completedNodes.size / flowNodes.length) * 100}%`,
          }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  )
}

