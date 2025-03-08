"use client"

import { useEffect, useState } from "react"

export function TypewriterEffect({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, text])

  return (
    <div className="relative inline-block">
      <span>{displayText}</span>
      <span
        className={`absolute ${isComplete ? "right-[-8px]" : "right-0"} top-0 h-full w-[2px] bg-terminal-accent animate-blink`}
        style={{
          height: "1.2em",
          transform: "translateY(10%)",
        }}
      ></span>
    </div>
  )
}

