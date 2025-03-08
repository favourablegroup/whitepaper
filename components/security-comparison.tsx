"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Zap } from "lucide-react"

export function SecurityComparison() {
  const [activeTab, setActiveTab] = useState("quantum")

  return (
    <Card className="border border-gold/20 bg-black/40 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-gold">Security Comparison: Binary vs. Ternary</CardTitle>
        <CardDescription>
          Comparing security properties of traditional binary blockchains with TritCoin's balanced ternary approach
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="quantum" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="quantum">Quantum Resistance</TabsTrigger>
            <TabsTrigger value="attack">Attack Surface</TabsTrigger>
            <TabsTrigger value="efficiency">Security Efficiency</TabsTrigger>
          </TabsList>

          <TabsContent value="quantum" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-500" />
                  <h3 className="text-lg font-semibold">Binary Blockchains</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Vulnerable to Shor's algorithm for breaking public key cryptography</li>
                  <li>Requires transition to post-quantum cryptography</li>
                  <li>Limited state space increases vulnerability to quantum search algorithms</li>
                  <li>Cryptographic primitives designed for classical computing</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  <h3 className="text-lg font-semibold">TritCoin (Ternary)</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Built with post-quantum cryptography from the ground up</li>
                  <li>Expanded state space increases quantum attack complexity</li>
                  <li>Ternary logic operations resistant to quantum parallelization</li>
                  <li>Cryptographic primitives designed with quantum resistance in mind</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="attack" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-red-500" />
                  <h3 className="text-lg font-semibold">Binary Blockchains</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>51% attacks require controlling majority of hash power</li>
                  <li>Vulnerable to selfish mining strategies</li>
                  <li>Limited protection against long-range attacks</li>
                  <li>Susceptible to eclipse attacks on individual nodes</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-green-500" />
                  <h3 className="text-lg font-semibold">TritCoin (Ternary)</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proof-of-Balance requires controlling &gt;66% of resources</li>
                  <li>Balanced distribution requirement prevents selfish mining</li>
                  <li>Temporal validation provides protection against long-range attacks</li>
                  <li>Network topology designed to resist eclipse attacks</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="efficiency" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-red-500" />
                  <h3 className="text-lg font-semibold">Binary Blockchains</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>High energy consumption for equivalent security guarantees</li>
                  <li>Security scales linearly with computational resources</li>
                  <li>Requires large cryptographic keys for future-proof security</li>
                  <li>Security vs. performance tradeoffs limit scalability</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-green-500" />
                  <h3 className="text-lg font-semibold">TritCoin (Ternary)</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>37% reduction in energy for equivalent security guarantees</li>
                  <li>Security scales exponentially with computational resources</li>
                  <li>Smaller cryptographic keys for equivalent security strength</li>
                  <li>Improved security-performance balance enables better scalability</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

