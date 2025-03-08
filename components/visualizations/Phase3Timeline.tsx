"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Terminal, Code2, Shield, Network, Users } from "lucide-react"

interface Milestone {
  title: string
  weeks: string
  tasks: string[]
  icon: React.ReactNode
  color: string
}

const milestones: Milestone[] = [
  {
    title: "Foundation Strengthening",
    weeks: "Weeks 1-4",
    tasks: ["Cryptographic Core Finalization", "Architecture Refinement", "Security Audit Preparation"],
    icon: <Shield className="w-6 h-6" />,
    color: "from-yellow-500/20 to-yellow-500/5",
  },
  {
    title: "Consensus & Network",
    weeks: "Weeks 5-10",
    tasks: ["Ternary Proof-of-Work Evolution", "Network Protocol Implementation", "Validator Framework"],
    icon: <Network className="w-6 h-6" />,
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    title: "Smart Contract Foundation",
    weeks: "Weeks 11-16",
    tasks: ["Ternary Virtual Machine", "Contract Language Development", "Developer Tools"],
    icon: <Code2 className="w-6 h-6" />,
    color: "from-green-500/20 to-green-500/5",
  },
  {
    title: "User Experience & Governance",
    weeks: "Weeks 17-20",
    tasks: ["Wallet Enhancement", "Explorer Advancement", "Governance Framework"],
    icon: <Users className="w-6 h-6" />,
    color: "from-purple-500/20 to-purple-500/5",
  },
]

export function Phase3Timeline() {
  return (
    <div className="w-full space-y-8 py-8">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold font-mono text-terminal-accent">PHASE 3 Implementation Timeline</h2>
        <p className="text-terminal-dim font-mono">40-Week Development Roadmap</p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-terminal-border/30" />

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative ${index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"} md:w-1/2`}
            >
              <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black border border-terminal-accent z-10">
                {milestone.icon}
              </div>

              <div
                className={`p-6 rounded-lg backdrop-blur-sm bg-gradient-to-b ${milestone.color} border border-terminal-border/30`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold font-mono text-terminal-accent">{milestone.title}</h3>
                  <span className="text-sm font-mono text-terminal-dim">{milestone.weeks}</span>
                </div>
                <ul className="space-y-2">
                  {milestone.tasks.map((task, taskIndex) => (
                    <motion.li
                      key={taskIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + taskIndex * 0.1 }}
                      className="flex items-center text-terminal-text font-mono"
                    >
                      <Terminal className="w-4 h-4 mr-2 text-terminal-accent" />
                      {task}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12 p-6 rounded-lg backdrop-blur-sm bg-black/30 border border-terminal-border/30">
        <h3 className="text-lg font-bold font-mono text-terminal-accent mb-4">Key Delivery Dates</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { month: 2, milestone: "Completed foundation with optimized cryptography" },
            { month: 5, milestone: "Functional consensus and network layer" },
            { month: 8, milestone: "Working smart contract prototype" },
            { month: 10, milestone: "Complete PHASE 3 delivery with all features" },
          ].map((delivery, index) => (
            <div key={index} className="p-4 bg-terminal-accent/5 rounded-lg border border-terminal-border/30">
              <div className="text-sm font-mono text-terminal-dim mb-2">Month {delivery.month}</div>
              <div className="text-sm font-mono text-terminal-text">{delivery.milestone}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

