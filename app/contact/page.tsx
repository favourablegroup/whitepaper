"use client"

import { useEffect } from "react"
import { CTAButton } from "@/components/CTAButton"
import { ExternalLink, MessageSquare, Users, Zap } from "lucide-react"

export default function ContactPage() {
  useEffect(() => {
    document.body.classList.add("dark")
  }, [])

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 pointer-events-none"></div>

        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-terminal-accent/10 border border-terminal-accent/20 text-terminal-accent text-xs font-mono">
              <span className="mr-1">$</span> ./connect --protocol=discord
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-mono font-bold tracking-tighter sm:text-4xl md:text-5xl text-terminal-text">
                Join Our Discord Community
              </h1>
              <p className="max-w-[900px] text-terminal-dim md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-mono">
                Connect with the Final Protocol team and community
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10 border border-indigo-500/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-indigo-400"
                    >
                      <path d="M18 4a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V7a3 3 0 0 0-3-3Z"></path>
                      <path d="M6 4a3 3 0 0 1 3 3v4a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3Z"></path>
                      <path d="M18 8a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1Z"></path>
                      <path d="M6 8a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1Z"></path>
                      <path d="M12 10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3"></path>
                      <path d="M18 10a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3"></path>
                      <path d="M10 14a5 5 0 0 0 4 0"></path>
                      <path d="M16 17a4 4 0 0 1-8 0"></path>
                      <path d="M7 21h10"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-mono font-bold text-terminal-text">Discord Community</h2>
                </div>
                <p className="text-terminal-dim font-mono leading-relaxed mb-6">
                  Join our vibrant Discord community to connect with the Final Protocol team, other Tritcoin
                  enthusiasts, and stay updated on the latest developments in quantum-secure blockchain technology.
                </p>
                <div className="flex justify-center">
                  <CTAButton
                    href="https://discord.gg/Yzhx7e9dWU"
                    variant="primary"
                    icon={ExternalLink}
                    iconPosition="right"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Discord Server
                  </CTAButton>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-terminal-code-bg/30 p-4 rounded-md border border-terminal-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-indigo-400" />
                    <div className="text-terminal-text font-mono font-bold">Community</div>
                  </div>
                  <p className="text-sm text-terminal-dim font-mono">
                    Connect with like-minded individuals passionate about quantum-secure blockchain technology
                  </p>
                </div>
                <div className="bg-terminal-code-bg/30 p-4 rounded-md border border-terminal-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-5 w-5 text-indigo-400" />
                    <div className="text-terminal-text font-mono font-bold">Real-time Updates</div>
                  </div>
                  <p className="text-sm text-terminal-dim font-mono">
                    Get instant notifications about new features, security updates, and community events
                  </p>
                </div>
                <div className="bg-terminal-code-bg/30 p-4 rounded-md border border-terminal-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="h-5 w-5 text-indigo-400" />
                    <div className="text-terminal-text font-mono font-bold">Direct Support</div>
                  </div>
                  <p className="text-sm text-terminal-dim font-mono">
                    Ask questions and get direct support from our team and community members
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-terminal-accent/10 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full max-w-xs max-h-xs border border-indigo-500/30 rounded-lg flex items-center justify-center relative overflow-hidden bg-black/50 terminal-glow">
                    <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
                    <div className="relative z-10 p-6">
                      <div className="flex justify-center mb-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="80"
                          height="80"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-indigo-400"
                        >
                          <path d="M9 17l6-5-6-5"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                      </div>
                      <div className="text-center space-y-2">
                        <h3 className="text-xl font-mono font-bold text-terminal-text">Discord Server</h3>
                        <p className="text-terminal-dim font-mono">discord.gg/Yzhx7e9dWU</p>
                        <div className="pt-4">
                          <CTAButton
                            href="https://discord.gg/Yzhx7e9dWU"
                            variant="secondary"
                            icon={ExternalLink}
                            iconPosition="right"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Open Discord
                          </CTAButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
            <div className="text-center space-y-4">
              <h2 className="text-xl font-mono font-bold text-terminal-accent">Other Ways to Connect</h2>
              <p className="text-terminal-dim font-mono leading-relaxed max-w-3xl mx-auto">
                While our Discord server is the primary hub for community interaction, you can also reach out to us
                through these channels:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-6">
                <div className="bg-terminal-code-bg/30 p-4 rounded-md border border-terminal-border/30 text-left">
                  <div className="font-mono font-bold text-terminal-text mb-1 flex items-center gap-2">
                    <span className="text-indigo-400 font-bold text-lg leading-none">𝕏</span>
                    Final Protocol
                  </div>
                  <p className="text-sm text-terminal-dim font-mono mb-3">@final_protocol</p>
                  <CTAButton
                    href="https://x.com/final_protocol"
                    variant="secondary"
                    size="sm"
                    icon={ExternalLink}
                    iconPosition="right"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    Follow on X
                  </CTAButton>
                </div>
                <div className="bg-terminal-code-bg/30 p-4 rounded-md border border-terminal-border/30 text-left">
                  <div className="font-mono font-bold text-terminal-text mb-1 flex items-center gap-2">
                    <span className="text-indigo-400 font-bold text-lg leading-none">𝕏</span>
                    TritCoin
                  </div>
                  <p className="text-sm text-terminal-dim font-mono mb-3">@tritcoin</p>
                  <CTAButton
                    href="https://x.com/tritcoin"
                    variant="secondary"
                    size="sm"
                    icon={ExternalLink}
                    iconPosition="right"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    Follow on X
                  </CTAButton>
                </div>
                <div className="bg-terminal-code-bg/30 p-4 rounded-md border border-terminal-border/30 text-left">
                  <div className="font-mono font-bold text-terminal-text mb-1 flex items-center gap-2">
                    <span className="text-indigo-400 font-bold text-lg leading-none">𝕏</span>
                    Fractal Tech
                  </div>
                  <p className="text-sm text-terminal-dim font-mono mb-3">@fractaltechcorp</p>
                  <CTAButton
                    href="https://x.com/fractaltechcorp"
                    variant="secondary"
                    size="sm"
                    icon={ExternalLink}
                    iconPosition="right"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    Follow on X
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

