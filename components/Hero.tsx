"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      <div className="relative">
        {/* Concentric Circles */}
        {[300, 250, 200].map((size, index) => (
          <motion.div
            key={size}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-primary"
            style={{
              width: size,
              height: size,
              borderRadius: "50%",
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 4,
              delay: index * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Logo */}
        <div className="relative h-40 w-40">
          <Image src="/logo.png" alt="TritCoin Logo" width={160} height={160} className="animate-glow" priority />
        </div>
      </div>
    </div>
  )
}

