import type React from "react"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Final Protocol Solutions - Tritcoin Whitepaper",
  description:
    "The official whitepaper for Tritcoin: A Peer-to-Peer Ternary Electronic Cash System by Tritoshi Fractalmoto",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} bg-black text-terminal-text`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'