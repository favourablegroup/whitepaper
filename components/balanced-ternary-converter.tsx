"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function BalancedTernaryConverter() {
  const [decimal, setDecimal] = useState<number>(0)
  const [balanced, setBalanced] = useState<string>("0")

  // Convert decimal to balanced ternary
  const decimalToBalanced = (num: number): string => {
    if (num === 0) return "0"

    let result = ""
    let quotient = Math.abs(num)

    while (quotient > 0) {
      const remainder = quotient % 3

      if (remainder === 0) {
        result = "0" + result
        quotient = Math.floor(quotient / 3)
      } else if (remainder === 1) {
        result = "+" + result
        quotient = Math.floor(quotient / 3)
      } else {
        // remainder === 2
        result = "-" + result
        quotient = Math.floor(quotient / 3) + 1
      }
    }

    return num < 0 ? invertBalanced(result) : result
  }

  // Invert balanced ternary (change + to - and vice versa)
  const invertBalanced = (balanced: string): string => {
    return balanced
      .split("")
      .map((trit) => {
        if (trit === "+") return "-"
        if (trit === "-") return "+"
        return "0"
      })
      .join("")
  }

  // Convert balanced ternary to decimal
  const balancedToDecimal = (balanced: string): number => {
    let result = 0
    let power = 1

    for (let i = balanced.length - 1; i >= 0; i--) {
      if (balanced[i] === "+") {
        result += power
      } else if (balanced[i] === "-") {
        result -= power
      }
      power *= 3
    }

    return result
  }

  // Handle decimal input change
  const handleDecimalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value) || 0
    setDecimal(value)
    setBalanced(decimalToBalanced(value))
  }

  // Handle balanced ternary input change
  const handleBalancedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^+-0]/g, "")
    setBalanced(value)
    setDecimal(balancedToDecimal(value))
  }

  return (
    <Card className="border border-gold/20 bg-black/40 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-gold">Balanced Ternary Converter</CardTitle>
        <CardDescription>Convert between decimal and balanced ternary representations</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="decimal">Decimal</Label>
          <Input
            id="decimal"
            type="number"
            value={decimal}
            onChange={handleDecimalChange}
            className="bg-black/60 border-gold/30 text-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="balanced">Balanced Ternary</Label>
          <Input
            id="balanced"
            value={balanced}
            onChange={handleBalancedChange}
            placeholder="Use +, -, and 0 characters"
            className="bg-black/60 border-gold/30 text-white font-mono"
          />
          <p className="text-xs text-muted-foreground">+ represents 1, - represents -1, and 0 represents 0</p>
        </div>

        <div className="rounded-md bg-black/80 p-4 font-mono">
          <p className="text-sm text-muted-foreground">Example values:</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <span className="text-gold">5</span> = <span className="text-green-400">+- (3-1=2)</span>
            </li>
            <li>
              <span className="text-gold">8</span> = <span className="text-green-400">+-+ (9-3+1=7)</span>
            </li>
            <li>
              <span className="text-gold">-4</span> = <span className="text-green-400">--+ (-9+3+1=-5)</span>
            </li>
            <li>
              <span className="text-gold">13</span> = <span className="text-green-400">++-+ (9+3+1=13)</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

