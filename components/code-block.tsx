"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

interface CodeBlockProps {
  language: string
  code: string
}

export function CodeBlock({ language, code }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false)
  const preRef = useRef<HTMLPreElement>(null)

  const handleCopyClick = () => {
    if (preRef.current) {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          setIsCopied(true)
          setTimeout(() => setIsCopied(false), 2000)
        })
        .catch((err) => console.error("Failed to copy text: ", err))
    }
  }

  return (
    <Card className="border border-gold/20 bg-black/40 backdrop-blur-sm">
      <CardContent className="relative">
        <pre ref={preRef} className={`language-${language} bg-black/80 rounded-md py-4 px-6 overflow-x-auto`}>
          <code className={`language-${language}`}>{code}</code>
        </pre>
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 text-gray-400 hover:text-white bg-black/30 hover:bg-black/50 data-[state=open]:bg-secondary/50"
          onClick={handleCopyClick}
        >
          {isCopied ? <Check className="h-4 w-4 mr-2 text-green-500" /> : <Copy className="h-4 w-4 mr-2" />}
          {isCopied ? "Copied!" : "Copy"}
        </Button>
      </CardContent>
    </Card>
  )
}

