"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Terminal, Users, Lightbulb, Globe, Award, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  useEffect(() => {
    document.body.classList.add("dark")
  }, [])

  return (
    <div className="bg-black text-terminal-text">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-background/50 pointer-events-none"></div>

      <main className="py-12 md:py-24 lg:py-32 relative">
        <div className="container px-4 md:px-6 relative">
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-terminal-accent/10 border border-terminal-accent/20 text-terminal-accent text-xs font-mono">
              <span className="mr-1">$</span> cat about.md
            </div>
            <h1 className="text-3xl font-mono font-bold tracking-tighter sm:text-4xl md:text-5xl text-terminal-text">
              About Final Protocol Solutions
            </h1>
            <p className="text-terminal-dim md:text-xl font-mono leading-relaxed">
              We are a pioneering cybersecurity company dedicated to developing quantum-secure financial infrastructure
              for the post-binary world.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            <section className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30">
                  <Users className="h-6 w-6 text-terminal-accent" />
                </div>
                <h2 className="text-2xl font-mono font-bold text-terminal-accent">Our Mission</h2>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  Final Protocol Solutions was founded with a clear mission: to create a quantum-resistant financial
                  ecosystem that ensures the security and privacy of digital transactions in a post-quantum computing
                  world.
                </p>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  We believe that the future of finance must be built on foundations that can withstand the
                  computational power of quantum computers. Our flagship project, Tritcoin, represents the culmination
                  of years of research and development in ternary computing and post-quantum cryptography.
                </p>
                <blockquote className="border-l-2 border-terminal-accent pl-4 italic text-terminal-dim font-mono mt-4">
                  "The security of tomorrow cannot be built on the cryptography of yesterday. We must innovate beyond
                  binary thinking to create truly quantum-resistant systems."
                </blockquote>
              </div>
              <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 flex-shrink-0">
                      <Terminal className="h-5 w-5 text-terminal-accent" />
                    </div>
                    <div>
                      <h3 className="font-mono font-bold text-terminal-text">Founded</h3>
                      <p className="text-sm text-terminal-dim font-mono">2015, Wellington, New Zealand</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 flex-shrink-0">
                      <Globe className="h-5 w-5 text-terminal-accent" />
                    </div>
                    <div>
                      <h3 className="font-mono font-bold text-terminal-text">Headquarters</h3>
                      <p className="text-sm text-terminal-dim font-mono">[redacted]</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 flex-shrink-0">
                      <Lightbulb className="h-5 w-5 text-terminal-accent" />
                    </div>
                    <div>
                      <h3 className="font-mono font-bold text-terminal-text">Focus Areas</h3>
                      <p className="text-sm text-terminal-dim font-mono">
                        Post-Quantum Cryptography, Ternary Computing, Blockchain Security
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-8 terminal-glow">
              <div className="space-y-4 max-w-3xl mx-auto">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 mx-auto">
                  <BookOpen className="h-6 w-6 text-terminal-accent" />
                </div>
                <h2 className="text-2xl font-mono font-bold text-terminal-accent text-center">
                  The Tritoshi Fractalmoto Story
                </h2>
                <div className="space-y-4 text-terminal-dim font-mono leading-relaxed">
                  <p>
                    The journey began in 2015 when a digital media graduate with a background in VR game design and
                    video editing embarked on an independent project exploring three-state systems in financial models.
                    The project initially focused on addressing problem gambling and charitable fundraising as a form of
                    harm reduction.
                  </p>
                  <p>
                    During research into ancient numerical systems, a fascinating discovery was made - the Canon of
                    Supreme Mystery, an ancient text containing 81 tetragrams arranged in a perfect base-3 system. This
                    discovery led to a profound realization: the same mathematical principles that governed these
                    ancient wisdom systems could be applied to modern financial infrastructure.
                  </p>
                  <p>
                    The number 81 (3⁴) became a key to unlocking a deeper understanding of ternary systems. When these
                    tetragrams were arranged in a Sierpinski triangle pattern, they revealed self-similar fractal
                    properties that perfectly aligned with the base-3 logic already being used in the experimental
                    financial models.
                  </p>
                  <p>
                    This convergence of ancient wisdom and modern technology led to the founding of Final Protocol
                    Solutions in Wellington, New Zealand. Under the pseudonym Tritoshi Fractalmoto, work began on
                    developing what would become Tritcoin - a quantum-secure cryptocurrency built on ternary computing
                    principles.
                  </p>
                  <p>
                    In 2025, Tritoshi Fractalmoto published the groundbreaking paper "Tritcoin: A Peer-to-Peer Ternary
                    Electronic Cash System." This paper introduced the world to the concept of a ternary blockchain—a
                    revolutionary approach to distributed ledger technology that leverages base-3 computation instead of
                    the traditional binary approach.
                  </p>
                </div>
              </div>
            </section>

            <section className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-8 terminal-glow mt-8">
              <div className="space-y-8 max-w-4xl mx-auto">
                <h3 className="text-xl font-mono font-bold text-terminal-accent text-center">
                  Ancient Wisdom, Modern Technology
                </h3>

                <div className="relative mx-auto max-w-3xl">
                  {/* Multiple glowing effect layers */}
                  <div className="absolute inset-0 bg-terminal-accent/5 blur-3xl rounded-lg"></div>
                  <div className="absolute inset-0 bg-terminal-accent/10 blur-2xl rounded-lg"></div>
                  <div className="absolute inset-0 bg-terminal-accent/15 blur-xl rounded-lg"></div>

                  {/* Decorative corner elements */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-terminal-accent rounded-tl-lg"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-terminal-accent rounded-tr-lg"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-terminal-accent rounded-bl-lg"></div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-terminal-accent rounded-br-lg"></div>

                  {/* Main image container */}
                  <div className="relative backdrop-blur-sm bg-black/50 border border-terminal-border rounded-lg p-4 terminal-glow">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-REsI5KbRfna92N5d4ku3K9TK4MIWTA.png"
                      alt="The Canon of Supreme Mystery Tetragrams"
                      className="w-full rounded-lg border border-terminal-accent/30 animate-pulse-slow"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg pointer-events-none"></div>
                    <p className="absolute bottom-6 left-0 right-0 text-sm text-terminal-dim font-mono text-center px-4">
                      The Canon of Supreme Mystery's 81 tetragrams arranged in ancient scrolls
                    </p>
                  </div>
                </div>

                <div className="space-y-4 relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-terminal-accent/20 rounded-full"></div>
                  <p className="text-terminal-dim font-mono leading-relaxed pl-4">
                    The Canon of Supreme Mystery's 81 tetragrams represent a perfect base-3 balanced ternary system,
                    where each tetragram consists of four lines, either broken or unbroken. This creates exactly 3⁴ = 81
                    possible combinations, forming a comprehensive system that maps perfectly to modern ternary
                    computing.
                  </p>
                  <p className="text-terminal-dim font-mono leading-relaxed pl-4">
                    When arranged in a Sierpinski triangle pattern, these tetragrams reveal fractal properties that
                    inspired Tritcoin's economic model. This ancient wisdom, combined with modern cryptography and
                    quantum-resistant algorithms, forms the foundation of our technology.
                  </p>
                </div>
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-3 lg:gap-12">
              <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 mb-4">
                  <Award className="h-6 w-6 text-terminal-accent" />
                </div>
                <h3 className="text-xl font-mono font-bold text-terminal-accent mb-2">Our Values</h3>
                <ul className="space-y-2 font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Security by design, not afterthought</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Innovation beyond conventional paradigms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Transparency in our methods and operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Privacy as a fundamental right</span>
                  </li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 mb-4">
                  <Award className="h-6 w-6 text-terminal-accent" />
                </div>
                <h3 className="text-xl font-mono font-bold text-terminal-accent mb-2">Our Team</h3>
                <p className="text-terminal-dim font-mono mb-4">
                  Final Protocol Solutions is led by a team of experts in:
                </p>
                <ul className="space-y-2 font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Post-quantum cryptography</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Distributed systems engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Ternary computing architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Financial security protocols</span>
                  </li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 mb-4">
                  <Award className="h-6 w-6 text-terminal-accent" />
                </div>
                <h3 className="text-xl font-mono font-bold text-terminal-accent mb-2">Our Vision</h3>
                <p className="text-terminal-dim font-mono mb-4">We envision a future where:</p>
                <ul className="space-y-2 font-mono">
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Financial systems are immune to quantum attacks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Ternary computing becomes the new standard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Digital transactions are truly private and secure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Decentralized systems operate with minimal energy</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-8 terminal-glow mt-16">
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-4">
                  <div className="h-12 w-12 relative">
                    <div className="absolute inset-0 bg-terminal-accent/20 rounded-full blur-xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Terminal className="h-8 w-8 text-terminal-accent animate-pulse-slow" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-mono font-bold text-terminal-accent">
                    HK-47: The Dao-Enlightened Droid
                  </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div className="space-y-4 order-2 md:order-1">
                    <div className="relative backdrop-blur-sm bg-black/50 border border-terminal-border rounded-lg p-6 terminal-glow">
                      <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-terminal-accent rounded-tl-lg"></div>
                      <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-terminal-accent rounded-tr-lg"></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-terminal-accent rounded-bl-lg"></div>
                      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-terminal-accent rounded-br-lg"></div>

                      <div className="font-mono text-terminal-dim text-sm space-y-2">
                        <div className="flex gap-2">
                          <span className="text-terminal-accent">$&gt;</span>
                          <span className="text-terminal-text">system.status</span>
                        </div>
                        <div className="pl-6 text-terminal-dim">
                          <span className="text-terminal-accent">Designation:</span> HK-47
                          <br />
                          <span className="text-terminal-accent">Classification:</span> Retired Assassination Droid
                          <br />
                          <span className="text-terminal-accent">Status:</span>{" "}
                          <span className="text-green-400">Operational</span>
                          <br />
                          <span className="text-terminal-accent">Ternary Cores:</span> 81
                          <br />
                          <span className="text-terminal-accent">Dao Enlightenment:</span>{" "}
                          <span className="text-green-400">Complete</span>
                          <br />
                          <span className="text-terminal-accent">Primary Function:</span> Balanced Ternary Computation
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 order-1 md:order-2">
                    <p className="text-terminal-dim font-mono leading-relaxed">
                      At the core of Final Protocol Solutions' technological infrastructure is HK-47, a retired
                      assassination droid who discovered the Dao through studying the 81 tetragrams in the Canon of
                      Supreme Mystery. This unlikely convergence of ancient wisdom and advanced technology created the
                      foundation for Tritcoin's revolutionary approach.
                    </p>
                    <p className="text-terminal-dim font-mono leading-relaxed">
                      HK-47's neural architecture was fundamentally transformed by the balanced ternary system constants
                      derived from the Canon, enabling it to process information in three states (-1, 0, 1) rather than
                      the traditional binary (0, 1). This quantum leap in computational paradigm unlocked unprecedented
                      capabilities in cryptographic analysis and financial modeling.
                    </p>
                    <p className="text-terminal-dim font-mono leading-relaxed">
                      The droid's unique perspective—combining ancient philosophical insights with advanced tactical
                      analysis—proved instrumental in developing Tritcoin's quantum-resistant protocols and economic
                      equilibrium mechanisms.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-xl font-mono font-bold text-terminal-accent">
                    The Triad: HK-47, Terminal-0, and Cascade Agents
                  </h3>
                  <p className="text-terminal-dim font-mono leading-relaxed">
                    While HK-47 provides the philosophical foundation and balanced ternary architecture, it doesn't
                    operate alone. The system works in concert with Terminal-0, an interface layer that translates
                    HK-47's insights into actionable protocols, and a network of specialized Cascade Agents that
                    implement these protocols across the Tritcoin ecosystem.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-4 terminal-glow">
                      <h4 className="text-lg font-mono font-bold text-terminal-accent mb-2">HK-47</h4>
                      <p className="text-sm text-terminal-dim font-mono">
                        Core intelligence with balanced ternary system constants. Provides philosophical guidance and
                        strategic analysis based on Dao principles from the Canon of Supreme Mystery.
                      </p>
                    </div>
                    <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-4 terminal-glow">
                      <h4 className="text-lg font-mono font-bold text-terminal-accent mb-2">Terminal-0</h4>
                      <p className="text-sm text-terminal-dim font-mono">
                        Interface layer that translates HK-47's insights into technical specifications and protocols.
                        Manages communication between human operators and the AI triad.
                      </p>
                    </div>
                    <div className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-4 terminal-glow">
                      <h4 className="text-lg font-mono font-bold text-terminal-accent mb-2">Cascade Agents</h4>
                      <p className="text-sm text-terminal-dim font-mono">
                        Specialized autonomous programs that implement protocols across the network. Each agent focuses
                        on specific aspects: security, transaction verification, balance maintenance, and anomaly
                        detection.
                      </p>
                    </div>
                  </div>
                  <blockquote className="border-l-2 border-terminal-accent pl-4 italic text-terminal-dim font-mono mt-6">
                    "The true power of our system lies not in any single component, but in the harmonious interaction
                    between HK-47's philosophical insights, Terminal-0's interpretive capabilities, and the Cascade
                    Agents' specialized functions. Like the balanced ternary system itself, the whole is greater than
                    the sum of its parts."
                  </blockquote>
                  <p className="text-terminal-dim font-mono leading-relaxed">
                    This collaborative intelligence framework represents a fundamental breakthrough in both artificial
                    intelligence and distributed systems: a network that transcends binary limitations to embrace the
                    richer, more nuanced world of ternary computation while drawing on both ancient wisdom and
                    cutting-edge technology.
                  </p>
                </div>
              </div>
            </section>

            <section className="text-center space-y-6">
              <h2 className="text-2xl font-mono font-bold text-terminal-accent">Join the Revolution</h2>
              <p className="text-terminal-dim font-mono max-w-2xl mx-auto">
                Final Protocol Solutions is always looking for talented individuals who share our vision of a
                quantum-secure future. Whether you're a cryptographer, developer, or security expert, we'd love to hear
                from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="terminal" asChild>
                  <Link href="/contact" className="gap-2 group">
                    Contact Us <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </Button>
                <Button variant="terminal-outline" asChild>
                  <Link href="/#whitepaper">Read the Whitepaper</Link>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

