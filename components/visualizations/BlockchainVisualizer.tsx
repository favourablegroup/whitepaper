"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TritTransaction {
  sender: string // Ternary address (T01 format)
  recipient: string // Ternary address (T01 format)
  amount: string // Balanced ternary value
  timestamp: string // Ternary timestamp
  signature: string // Ternary signature
}

interface TritBlock {
  hash: string // Ternary hash (T01 format)
  prevHash: string // Previous block's ternary hash
  transactions: TritTransaction[]
  timestamp: string // Ternary timestamp
  nonce: string // Ternary nonce
  blockId: string // Ternary block ID
}

interface BlockchainVisualizerProps {
  blocks?: TritBlock[]
  width?: number
  height?: number
}

// Convert decimal to balanced ternary string
const decimalToBalancedTernary = (decimal: number): string => {
  if (decimal === 0) return "0"

  let ternary = ""
  let quotient = Math.abs(decimal)

  while (quotient > 0) {
    const remainder = quotient % 3
    quotient = Math.floor(quotient / 3)

    if (remainder === 2) {
      ternary = "T" + ternary
      quotient += 1
    } else {
      ternary = remainder.toString() + ternary
    }
  }

  return decimal < 0 ? ternary.replace(/1/g, "1T").replace(/0/g, "01").replace(/T/g, "0") : ternary
}

// Generate a balanced ternary string of specified length
const generateBalancedTernaryHash = (length: number): string => {
  const trits = ["T", "0", "1"]
  return Array.from({ length }, () => trits[Math.floor(Math.random() * 3)]).join("")
}

// Create predefined balanced ternary hashes for consistency
const PREDEFINED_HASHES = {
  genesis: "T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01",
  block1: "01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T",
  block2: "1T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T01T0",
}

// Generate sample blocks with proper ternary values
const generateSampleBlocks = (): TritBlock[] => {
  // Genesis block
  const genesisBlock: TritBlock = {
    blockId: "T", // First block in ternary
    hash: PREDEFINED_HASHES.genesis,
    prevHash: "0".repeat(81), // Genesis block has all zeros
    transactions: [],
    timestamp: "T01T01T01T01T01T01T01T01T",
    nonce: "T01T01T01",
  }

  // Block 1
  const block1: TritBlock = {
    blockId: "0", // Second block in ternary
    hash: PREDEFINED_HASHES.block1,
    prevHash: PREDEFINED_HASHES.genesis,
    transactions: [
      {
        sender: "T01T01T01T01T01T01T01T01T",
        recipient: "01T01T01T01T01T01T01T01T",
        amount: "T01T01T01",
        timestamp: "01T01T01T",
        signature: "T01T01T01T01T01T01T01T01T",
      },
    ],
    timestamp: "01T01T01T01T01T01T01T01T",
    nonce: "01T01T01",
  }

  // Block 2
  const block2: TritBlock = {
    blockId: "1", // Third block in ternary
    hash: PREDEFINED_HASHES.block2,
    prevHash: PREDEFINED_HASHES.block1,
    transactions: [
      {
        sender: "01T01T01T01T01T01T01T01T",
        recipient: "1T01T01T01T01T01T01T01T",
        amount: "01T01T01",
        timestamp: "1T01T01T",
        signature: "01T01T01T01T01T01T01T01T",
      },
    ],
    timestamp: "1T01T01T01T01T01T01T01T",
    nonce: "1T01T01",
  }

  return [genesisBlock, block1, block2]
}

export const BlockchainVisualizer: React.FC<BlockchainVisualizerProps> = ({
  blocks: initialBlocks,
  width = 1000,
  height = 400,
}) => {
  const [blocks, setBlocks] = useState<TritBlock[]>([])
  const [selectedBlock, setSelectedBlock] = useState<TritBlock | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const blocksToUse = initialBlocks || generateSampleBlocks()
    setBlocks(blocksToUse)
    setSelectedBlock(blocksToUse[0]) // Select first block by default
    setIsLoading(false)
  }, [initialBlocks])

  const getColorForTrit = (trit: string): string => {
    switch (trit) {
      case "T":
        return "text-red-500"
      case "0":
        return "text-orange-500"
      case "1":
        return "text-green-500"
      default:
        return "text-gray-500"
    }
  }

  const renderColoredTernary = (ternary: string | undefined, maxDisplay = 30) => {
    if (!ternary || typeof ternary !== "string") return <span className="text-gray-500">N/A</span>

    const displayTernary =
      ternary.length > maxDisplay
        ? `${ternary.slice(0, Math.floor(maxDisplay / 2))}...${ternary.slice(-Math.floor(maxDisplay / 2))}`
        : ternary

    return (
      <div className="font-mono text-xs break-all">
        {displayTernary.split("").map((char, i) => (
          <span key={i} className={getColorForTrit(char)}>
            {char}
          </span>
        ))}
      </div>
    )
  }

  if (isLoading) {
    return <div className="text-center p-8">Loading blockchain data...</div>
  }

  return (
    <div className="space-y-6">
      <div
        className="relative overflow-x-auto p-4 bg-terminal-code-bg/10 rounded-lg border border-terminal-border/30 terminal-glow"
        style={{ width, maxHeight: height }}
      >
        <div className="flex items-center gap-4 pb-4 overflow-x-auto">
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div
                className={`flex flex-col gap-2 p-4 bg-terminal-code-bg/20 rounded-lg border-2 
                  ${selectedBlock === block ? "border-terminal-accent" : "border-terminal-border/30"} 
                  min-w-[220px] cursor-pointer hover:translate-y-[-4px] transition-transform`}
                onClick={() => setSelectedBlock(block)}
              >
                <div className="text-terminal-accent font-bold">
                  Block #{index} <span className="text-xs">({block.blockId})</span>
                </div>
                <div className="text-xs text-terminal-text/70">Hash:</div>
                {renderColoredTernary(block.hash)}
                <div className="mt-2">
                  <span className="text-terminal-text/70">Txs: </span>
                  {renderColoredTernary(decimalToBalancedTernary(block.transactions?.length || 0))}
                </div>
              </div>
              {index < blocks.length - 1 && (
                <div className="absolute right-[-2rem] top-1/2 transform -translate-y-1/2">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                    className="text-terminal-accent"
                  >
                    →
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {selectedBlock && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-lg bg-terminal-code-bg/20 border border-terminal-border/30"
        >
          <h3 className="text-xl font-bold text-terminal-accent mb-4">Block Details</h3>
          <div className="space-y-3">
            <div>
              <div className="text-sm text-terminal-text/70 mb-1">Hash (81 trits):</div>
              {renderColoredTernary(selectedBlock.hash, 60)}
              <div className="text-xs text-terminal-text/50 mt-1">
                <span className="font-bold">Note:</span> Full production hashes use 2187 trits for quantum resistance
              </div>
            </div>

            <div>
              <div className="text-sm text-terminal-text/70 mb-1">Previous Hash:</div>
              {renderColoredTernary(selectedBlock.prevHash, 60)}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-terminal-text/70 mb-1">Timestamp:</div>
                {renderColoredTernary(selectedBlock.timestamp)}
              </div>
              <div>
                <div className="text-sm text-terminal-text/70 mb-1">Nonce:</div>
                {renderColoredTernary(selectedBlock.nonce)}
              </div>
            </div>

            {selectedBlock.transactions && selectedBlock.transactions.length > 0 && (
              <div>
                <div className="text-lg text-terminal-accent mt-4 mb-2">
                  Transactions ({selectedBlock.transactions.length})
                </div>
                <div className="space-y-3 max-h-60 overflow-y-auto custom-scrollbar">
                  {selectedBlock.transactions.map((tx, i) => (
                    <div key={i} className="p-3 bg-terminal-code-bg/30 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div>
                          <div className="text-sm text-terminal-text/70 mb-1">From:</div>
                          {renderColoredTernary(tx.sender)}
                        </div>
                        <div>
                          <div className="text-sm text-terminal-text/70 mb-1">To:</div>
                          {renderColoredTernary(tx.recipient)}
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="text-sm text-terminal-text/70 mb-1">Amount:</div>
                        {renderColoredTernary(tx.amount)}
                      </div>
                      <div className="mt-2">
                        <div className="text-sm text-terminal-text/70 mb-1">Signature:</div>
                        {renderColoredTernary(tx.signature)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 p-3 bg-terminal-code-bg/30 rounded-lg">
            <div className="text-sm font-bold text-terminal-accent mb-2">Balanced Ternary Explanation</div>
            <p className="text-sm mb-2">
              TritCoin uses balanced ternary (base-3) representation with three possible values:
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                <span>T (-1)</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                <span>0</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                <span>1</span>
              </div>
            </div>
            <p className="text-xs mt-2">
              Unlike binary (0,1) or hexadecimal (0-9,a-f), balanced ternary offers superior efficiency and quantum
              resistance.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  )
}

