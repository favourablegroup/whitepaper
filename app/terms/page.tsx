"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Terms() {
  useEffect(() => {
    document.body.classList.add("dark")
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-black text-terminal-text">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-background/50 pointer-events-none"></div>

      <header className="border-b border-terminal-border/30 backdrop-blur-sm bg-black/30 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 group">
            <Terminal className="h-6 w-6 text-terminal-accent group-hover:text-terminal-accent-bright transition-colors" />
            <span className="text-xl font-mono font-bold text-terminal-accent group-hover:text-terminal-accent-bright transition-colors">
              Final Protocol Solutions
            </span>
          </Link>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-24 lg:py-32 relative">
        <div className="container px-4 md:px-6 relative">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-terminal-accent/10 border border-terminal-accent/20 text-terminal-accent text-xs font-mono mb-4">
              <span className="mr-1">$</span> cat terms_and_conditions.md
            </div>
            <h1 className="text-3xl font-mono font-bold tracking-tighter sm:text-4xl text-terminal-text mb-8">
              Terms and Conditions
            </h1>

            <div className="space-y-8 backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
              <div className="space-y-4">
                <h2 className="text-xl font-mono font-bold text-terminal-accent">1. Agreement to Terms</h2>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  These Terms and Conditions constitute a legally binding agreement made between you, whether personally
                  or on behalf of an entity ("you") and Final Protocol Solutions ("we," "us" or "our"), concerning your
                  access to and use of the website as well as any other media form, media channel, mobile website or
                  mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                </p>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these
                  Terms and Conditions. If you do not agree with all of these Terms and Conditions, then you are
                  expressly prohibited from using the Site and you must discontinue use immediately.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-mono font-bold text-terminal-accent">2. Intellectual Property Rights</h2>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  Unless otherwise indicated, the Site is our proprietary property and all source code, databases,
                  functionality, software, website designs, audio, video, text, photographs, and graphics on the Site
                  (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the
                  "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark
                  laws and various other intellectual property rights and unfair competition laws of the United States,
                  international copyright laws, and international conventions.
                </p>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  The Content and the Marks are provided on the Site "AS IS" for your information and personal use only.
                  Except as expressly provided in these Terms and Conditions, no part of the Site and no Content or
                  Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed,
                  encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any
                  commercial purpose whatsoever, without our express prior written permission.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-mono font-bold text-terminal-accent">3. User Representations</h2>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  By using the Site, you represent and warrant that:
                </p>
                <ul className="space-y-2 font-mono pl-4">
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">
                      All registration information you submit will be true, accurate, current, and complete
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">
                      You will maintain the accuracy of such information and promptly update such registration
                      information as necessary
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">
                      You have the legal capacity and you agree to comply with these Terms and Conditions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">
                      You are not a minor in the jurisdiction in which you reside
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">
                      You will not access the Site through automated or non-human means
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-mono font-bold text-terminal-accent">4. Prohibited Activities</h2>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  You may not access or use the Site for any purpose other than that for which we make the Site
                  available. The Site may not be used in connection with any commercial endeavors except those that are
                  specifically endorsed or approved by us.
                </p>
                <p className="text-terminal-dim font-mono leading-relaxed">As a user of the Site, you agree not to:</p>
                <ul className="space-y-2 font-mono pl-4">
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">
                      Systematically retrieve data or other content from the Site to create or compile, directly or
                      indirectly, a collection, compilation, database, or directory without written permission from us
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">
                      Make any unauthorized use of the Site, including collecting usernames and/or email addresses of
                      users by electronic or other means for the purpose of sending unsolicited email
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">
                      Use the Site to advertise or offer to sell goods and services
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">
                      Circumvent, disable, or otherwise interfere with security-related features of the Site
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-mono font-bold text-terminal-accent">5. Limitation of Liability</h2>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  In no event will we or our directors, employees, or agents be liable to you or any third party for any
                  direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost
                  profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we
                  have been advised of the possibility of such damages.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-mono font-bold text-terminal-accent">6. Governing Law</h2>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  These Terms shall be governed by and defined following the laws of the United States. Final Protocol
                  Solutions and yourself irrevocably consent that the courts of California shall have exclusive
                  jurisdiction to resolve any dispute which may arise in connection with these terms.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-mono font-bold text-terminal-accent">7. Contact Us</h2>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  In order to resolve a complaint regarding the Site or to receive further information regarding use of
                  the Site, please contact us at:
                </p>
                <div className="bg-terminal-code-bg/50 p-4 rounded-md font-mono text-sm overflow-auto border border-terminal-border/30 mt-4">
                  <pre className="text-terminal-accent-bright">
                    {`Final Protocol Solutions
[redacted]

Email: [redacted]
Phone: [redacted]`}
                  </pre>
                </div>
              </div>

              <div className="pt-4 text-right text-terminal-dim font-mono text-sm">Last Updated: March 7, 2025</div>
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="terminal-outline" asChild>
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

