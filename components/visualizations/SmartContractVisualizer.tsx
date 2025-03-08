"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Database, Bell } from "lucide-react"

interface SmartContractVisualizerProps {
  className?: string
}

export const SmartContractVisualizer: React.FC<SmartContractVisualizerProps> = ({ className = "" }) => {
  const [activeTab, setActiveTab] = useState<"methods" | "storage" | "events">("methods")

  const methods = [
    {
      name: "transfer",
      signature: "(trit27 to, trit27 amount) → trit3",
      description: "Transfer tokens using ternary arithmetic",
      type: "write",
    },
    {
      name: "approve",
      signature: "(trit27 spender, trit27 amount) → trit3",
      description: "Approve spender to use tokens",
      type: "write",
    },
    {
      name: "balanceOf",
      signature: "(trit27 account) → trit27",
      description: "Get account balance in ternary format",
      type: "read",
    },
    {
      name: "ternaryAdd",
      signature: "(trit27 a, trit27 b) → trit27",
      description: "Add two ternary numbers",
      type: "ternary",
    },
    {
      name: "ternaryMultiply",
      signature: "(trit27 a, trit27 b) → trit27",
      description: "Multiply two ternary numbers",
      type: "ternary",
    },
  ]

  const storage = [
    {
      name: "balances",
      type: "mapping(trit27 => trit27)",
      description: "Account balances in ternary format",
    },
    {
      name: "allowances",
      type: "mapping(trit27 => mapping(trit27 => trit27))",
      description: "Spending allowances in ternary format",
    },
    {
      name: "totalSupply",
      type: "trit27",
      description: "Total token supply in ternary",
    },
    {
      name: "name",
      type: "string",
      description: "Token name",
    },
    {
      name: "symbol",
      type: "string",
      description: "Token symbol",
    },
  ]

  const events = [
    {
      name: "Transfer",
      signature: "(trit27 indexed from, trit27 indexed to, trit27 value)",
      description: "Emitted when tokens are transferred",
    },
    {
      name: "Approval",
      signature: "(trit27 indexed owner, trit27 indexed spender, trit27 value)",
      description: "Emitted when approval is granted",
    },
    {
      name: "TernaryOperation",
      signature: "(string indexed op, trit27 a, trit27 b, trit27 result)",
      description: "Emitted when ternary computation is performed",
    },
  ]

  return (
    <div className={`bg-black/50 rounded-xl border border-terminal-border/30 ${className}`}>
      <div className="p-6 border-b border-terminal-border/30">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-terminal-accent">TritToken</h3>
          <div className="flex gap-2">
            <div className="px-3 py-1 rounded-full bg-red-500/20 text-red-500">T</div>
            <div className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-500">0</div>
            <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-500">1</div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("methods")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === "methods" ? "bg-yellow-500 text-black" : "bg-terminal-code-bg/20"
            }`}
          >
            <Code size={16} />
            Methods
          </button>
          <button
            onClick={() => setActiveTab("storage")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === "storage" ? "bg-yellow-500 text-black" : "bg-terminal-code-bg/20"
            }`}
          >
            <Database size={16} />
            Storage
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === "events" ? "bg-yellow-500 text-black" : "bg-terminal-code-bg/20"
            }`}
          >
            <Bell size={16} />
            Events
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            {activeTab === "methods" &&
              methods.map((method) => (
                <div
                  key={method.name}
                  className="p-4 rounded-lg bg-terminal-code-bg/20 border border-terminal-border/30"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        method.type === "read"
                          ? "bg-green-500"
                          : method.type === "write"
                            ? "bg-red-500"
                            : "bg-orange-500"
                      }`}
                    />
                    <div>
                      <div className="font-mono">
                        <span className="text-terminal-accent">{method.name}</span>
                        <span className="text-terminal-dim">{method.signature}</span>
                      </div>
                      <p className="text-sm text-terminal-dim mt-1">{method.description}</p>
                    </div>
                  </div>
                </div>
              ))}

            {activeTab === "storage" &&
              storage.map((item) => (
                <div key={item.name} className="p-4 rounded-lg bg-terminal-code-bg/20 border border-terminal-border/30">
                  <div className="font-mono">
                    <span className="text-terminal-accent">{item.name}</span>
                    <span className="text-terminal-dim">: {item.type}</span>
                  </div>
                  <p className="text-sm text-terminal-dim mt-1">{item.description}</p>
                </div>
              ))}

            {activeTab === "events" &&
              events.map((event) => (
                <div
                  key={event.name}
                  className="p-4 rounded-lg bg-terminal-code-bg/20 border border-terminal-border/30"
                >
                  <div className="font-mono">
                    <span className="text-terminal-accent">{event.name}</span>
                    <span className="text-terminal-dim">{event.signature}</span>
                  </div>
                  <p className="text-sm text-terminal-dim mt-1">{event.description}</p>
                </div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-6 border-t border-terminal-border/30">
        <h4 className="text-sm font-medium text-terminal-dim mb-3">Legend</h4>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm">Read Method</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-sm">Write Method</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-sm">Ternary Operation</span>
          </div>
        </div>
      </div>
    </div>
  )
}

