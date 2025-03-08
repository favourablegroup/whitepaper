import Link from "next/link"
import { Terminal } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-terminal-border/30 py-6 md:py-0 backdrop-blur-sm bg-black/30">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-terminal-accent" />
          <p className="text-sm text-terminal-dim font-mono">© 2025 Final Protocol Solutions. All rights reserved.</p>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://linktr.ee/tritcoin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-terminal-dim font-mono hover:text-terminal-accent transition-colors"
          >
            linktr.ee/tritcoin
          </Link>
          <Link
            href="/privacy-policy"
            className="text-sm text-terminal-dim font-mono hover:text-terminal-accent transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-terminal-dim font-mono hover:text-terminal-accent transition-colors"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/contact"
            className="text-sm text-terminal-dim font-mono hover:text-terminal-accent transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}

