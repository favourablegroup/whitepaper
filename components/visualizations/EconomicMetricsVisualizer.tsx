"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface MetricData {
  label: string
  binary: number
  ternary: number
  unit: string
  description: string
}

const powerMetrics: MetricData[] = [
  {
    label: "Basic Logic Gates",
    binary: 0.7,
    ternary: 0.4,
    unit: "mW/gate",
    description: "Power consumption per logic gate operation",
  },
  {
    label: "Memory Access",
    binary: 3.2,
    ternary: 2.1,
    unit: "mW/op",
    description: "Power required for memory read/write operations",
  },
  {
    label: "ALU Operations",
    binary: 2.8,
    ternary: 1.7,
    unit: "mW/op",
    description: "Power used in arithmetic logic unit calculations",
  },
  {
    label: "Data Transfer",
    binary: 1.5,
    ternary: 0.9,
    unit: "mW/byte",
    description: "Power consumption during data transmission",
  },
]

const costMetrics = {
  cooling: {
    binary: 12500000,
    ternary: 7500000,
    savings: 5000000,
  },
  power: {
    binary: 18000000,
    ternary: 11000000,
    savings: 7000000,
  },
}

const efficiencyMetrics = [
  {
    label: "Information Density",
    binary: 1,
    ternary: 1.58,
    unit: "bits/symbol",
    description: "Amount of information carried per symbol",
  },
  {
    label: "Processing Speed",
    binary: 1,
    ternary: 1.32,
    unit: "relative",
    description: "Relative processing speed for equivalent operations",
  },
  {
    label: "Energy Efficiency",
    binary: 1,
    ternary: 1.45,
    unit: "relative",
    description: "Overall energy efficiency ratio",
  },
]

export function EconomicMetricsVisualizer() {
  const [activeView, setActiveView] = useState<"power" | "cost" | "efficiency">("power")

  return (
    <div className="space-y-6 font-mono">
      <div className="flex justify-between items-center border-b border-[#FFB81C]/20 pb-4">
        <div className="space-x-2">
          <Button
            variant={activeView === "power" ? "default" : "outline"}
            onClick={() => setActiveView("power")}
            className="font-mono text-[#FFB81C] hover:text-[#FFB81C] hover:bg-[#FFB81C]/10"
          >
            Power Metrics
          </Button>
          <Button
            variant={activeView === "cost" ? "default" : "outline"}
            onClick={() => setActiveView("cost")}
            className="font-mono text-[#FFB81C] hover:text-[#FFB81C] hover:bg-[#FFB81C]/10"
          >
            Cost Analysis
          </Button>
          <Button
            variant={activeView === "efficiency" ? "default" : "outline"}
            onClick={() => setActiveView("efficiency")}
            className="font-mono text-[#FFB81C] hover:text-[#FFB81C] hover:bg-[#FFB81C]/10"
          >
            Efficiency
          </Button>
        </div>
      </div>

      <Card className="p-6 bg-black border-[#FFB81C]/20">
        {activeView === "power" && (
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-[#FFB81C] mb-6">Power Consumption Analysis</h3>
            {powerMetrics.map((metric) => {
              const reduction = ((1 - metric.ternary / metric.binary) * 100).toFixed(1)
              return (
                <div key={metric.label} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[#FFB81C]">{metric.label}</span>
                    <span className="text-[#FFB81C]">{reduction}% reduction</span>
                  </div>
                  <div className="bg-[#FFB81C]/10 h-8 rounded-sm relative overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-[#FFB81C]/20 transition-all"
                      style={{ width: `${100 - Number.parseFloat(reduction)}%` }}
                    >
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[#FFB81C] text-sm">
                        Binary: {metric.binary} {metric.unit}
                      </span>
                    </div>
                    <div
                      className="absolute top-0 left-0 h-full bg-[#FFB81C]/40"
                      style={{ width: `${Number.parseFloat(reduction)}%` }}
                    >
                      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[#FFB81C] text-sm">
                        Ternary: {metric.ternary} {metric.unit}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {activeView === "cost" && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#FFB81C] mb-6">Annual Cost Analysis</h3>
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-[#FFB81C]">Cooling Infrastructure</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-[#FFB81C]/80">
                    <span>Binary</span>
                    <span>${(costMetrics.cooling.binary / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between text-[#FFB81C]">
                    <span>Ternary</span>
                    <span>${(costMetrics.cooling.ternary / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between text-[#FFB81C] border-t border-[#FFB81C]/20 pt-2 mt-4">
                    <span>Annual Savings</span>
                    <span>${(costMetrics.cooling.savings / 1000000).toFixed(1)}M</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-[#FFB81C]">Power Consumption</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-[#FFB81C]/80">
                    <span>Binary</span>
                    <span>${(costMetrics.power.binary / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between text-[#FFB81C]">
                    <span>Ternary</span>
                    <span>${(costMetrics.power.ternary / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between text-[#FFB81C] border-t border-[#FFB81C]/20 pt-2 mt-4">
                    <span>Annual Savings</span>
                    <span>${(costMetrics.power.savings / 1000000).toFixed(1)}M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeView === "efficiency" && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#FFB81C] mb-6">Efficiency Comparison</h3>
            <div className="space-y-8">
              {efficiencyMetrics.map((metric) => {
                const improvement = ((metric.ternary / metric.binary - 1) * 100).toFixed(1)
                return (
                  <div key={metric.label} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[#FFB81C]">{metric.label}</span>
                      <span className="text-[#FFB81C]">{improvement}% improvement</span>
                    </div>
                    <div className="bg-[#FFB81C]/10 h-8 rounded-sm relative overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-[#FFB81C]/20"
                        style={{ width: `${(100 / metric.ternary) * metric.binary}%` }}
                      >
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[#FFB81C] text-sm">
                          Binary: {metric.binary.toFixed(2)} {metric.unit}
                        </span>
                      </div>
                      <div className="absolute top-0 left-0 h-full bg-[#FFB81C]/40" style={{ width: "100%" }}>
                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[#FFB81C] text-sm">
                          Ternary: {metric.ternary.toFixed(2)} {metric.unit}
                        </span>
                      </div>
                    </div>
                    <p className="text-[#FFB81C]/60 text-sm mt-1">{metric.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}

