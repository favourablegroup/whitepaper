"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Beaker, Cpu, Lock, Zap, Network } from "lucide-react"

export function RoadmapTimeline() {
  const roadmapItems = [
    {
      year: "2023-2024",
      title: "Foundation Phase",
      icon: Beaker,
      items: [
        "Core protocol development and testing",
        "Balanced ternary cryptographic primitives",
        "Initial network deployment and validation",
        "Developer tools and documentation",
      ],
    },
    {
      year: "2024-2025",
      title: "Expansion Phase",
      icon: Network,
      items: [
        "Ternary sharding implementation",
        "Smart contract platform launch",
        "Cross-chain interoperability bridges",
        "Ecosystem development grants",
      ],
    },
    {
      year: "2025-2026",
      title: "Optimization Phase",
      icon: Zap,
      items: [
        "Advanced scaling solutions deployment",
        "Specialized hardware development",
        "Enterprise integration frameworks",
        "Performance optimization",
      ],
    },
    {
      year: "2026-2027",
      title: "Maturity Phase",
      icon: Lock,
      items: [
        "Full decentralized governance transition",
        "Advanced quantum resistance features",
        "Comprehensive formal verification",
        "Standardization initiatives",
      ],
    },
    {
      year: "2027+",
      title: "Innovation Phase",
      icon: Cpu,
      items: [
        "Ternary computing research acceleration",
        "Novel cryptographic primitives",
        "Next-generation consensus mechanisms",
        "Expanded application domains",
      ],
    },
  ]

  return (
    <Card className="border border-gold/20 bg-black/40 backdrop-blur-sm">
      <CardContent className="pt-6">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-gold/30" />

          {/* Timeline items */}
          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative flex gap-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold bg-black z-10">
                  <item.icon className="h-5 w-5 text-gold" />
                </div>

                <div className="flex flex-col pb-8">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gold">{item.year}</span>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>

                  <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                    {item.items.map((listItem, i) => (
                      <li key={i}>{listItem}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

