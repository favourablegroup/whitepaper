"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
  useEffect(() => {
    document.body.classList.add("dark")
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-black text-terminal-text">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-background/50 pointer-events-none"></div>

      <main className="flex-1 py-12 md:py-24 lg:py-32 relative">
        <div className="container px-4 md:px-6 relative">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-terminal-accent/10 border border-terminal-accent/20 text-terminal-accent text-xs font-mono mb-4">
              <span className="mr-1">$</span> cat privacy_policy.md
            </div>
            <h1 className="text-3xl font-mono font-bold tracking-tighter sm:text-4xl text-terminal-text mb-8">
              Privacy Policy
            </h1>

            <div className="space-y-8 backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
              <div className="space-y-4">
                <h2 className="text-xl font-mono font-bold text-terminal-accent">1. Introduction</h2>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  Final Protocol Solutions ("we", "our", or "us") is committed to protecting your privacy. This Privacy
                  Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                  website or use our services.
                </p>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will
                  alert you about any changes by updating the "Last Updated" date of this Privacy Policy. You are
                  encouraged to periodically review this Privacy Policy to stay informed of updates.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-mono font-bold text-terminal-accent">2. Collection of Your Information</h2>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  We may collect information about you in a variety of ways. The information we may collect via the
                  website includes:
                </p>
                <div className="space-y-2 pl-4">
                  <h3 className="font-mono font-bold text-terminal-text">2.1 Personal Data</h3>
                  <p className="text-terminal-dim font-mono leading-relaxed">
                    Personally identifiable information, such as your name, email address, and telephone number, that
                    you voluntarily give to us when you register with the website or when you choose to participate in
                    various activities related to the website.
                  </p>

                  <h3 className="font-mono font-bold text-terminal-text">2.2 Derivative Data</h3>
                  <p className="text-terminal-dim font-mono leading-relaxed">
                    Information our servers automatically collect when you access the website, such as your IP address,
                    browser type, operating system, access times, and the pages you have viewed directly before and
                    after accessing the website.
                  </p>

                  <h3 className="font-mono font-bold text-terminal-text">2.3 Financial Data</h3>
                  <p className="text-terminal-dim font-mono leading-relaxed">
                    Financial information, such as data related to your payment method (e.g., valid credit card number,
                    card brand, expiration date) that we may collect when you purchase, order, return, exchange, or
                    request information about our services from the website.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-mono font-bold text-terminal-accent">3. Use of Your Information</h2>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  Having accurate information about you permits us to provide you with a smooth, efficient, and
                  customized experience. Specifically, we may use information collected about you via the website to:
                </p>
                <ul className="space-y-2 font-mono pl-4">
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Create and manage your account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Process transactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Send you email newsletters, if you have opted in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Respond to your inquiries and customer service requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-accent font-bold">$&gt;</span>
                    <span className="text-terminal-dim">Administer promotions, surveys, and contests</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-mono font-bold text-terminal-accent">4. Disclosure of Your Information</h2>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  We may share information we have collected about you in certain situations. Your information may be
                  disclosed as follows:
                </p>
                <div className="space-y-2 pl-4">
                  <h3 className="font-mono font-bold text-terminal-text">4.1 By Law or to Protect Rights</h3>
                  <p className="text-terminal-dim font-mono leading-relaxed">
                    If we believe the release of information about you is necessary to respond to legal process, to
                    investigate or remedy potential violations of our policies, or to protect the rights, property, and
                    safety of others, we may share your information as permitted or required by any applicable law,
                    rule, or regulation.
                  </p>

                  <h3 className="font-mono font-bold text-terminal-text">4.2 Third-Party Service Providers</h3>
                  <p className="text-terminal-dim font-mono leading-relaxed">
                    We may share your information with third parties that perform services for us or on our behalf,
                    including payment processing, data analysis, email delivery, hosting services, customer service, and
                    marketing assistance.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-mono font-bold text-terminal-accent">5. Security of Your Information</h2>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  We use administrative, technical, and physical security measures to help protect your personal
                  information. While we have taken reasonable steps to secure the personal information you provide to
                  us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no
                  method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-mono font-bold text-terminal-accent">6. Contact Us</h2>
                <p className="text-terminal-dim font-mono leading-relaxed">
                  If you have questions or comments about this Privacy Policy, please contact us at:
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

