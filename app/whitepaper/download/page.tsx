import type { Metadata } from "next"
import { WhitepaperLayout } from "@/components/whitepaper-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Download Whitepaper | TritCoin",
  description: "Access the TritCoin whitepaper",
}

export default function DownloadPage() {
  return (
    <WhitepaperLayout title="Whitepaper Access" section="download">
      <section className="space-y-6">
        <Card className="border border-gold/20 bg-black/40 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-gold" />
              Online Access Only
            </CardTitle>
            <CardDescription>The TritCoin whitepaper is currently available online only</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                The TritCoin whitepaper is currently only available as an online resource. You can access all sections
                through our interactive web interface.
              </p>
              <p className="text-sm text-muted-foreground">
                We are working on downloadable versions of the whitepaper which will be available soon. In the meantime,
                you can browse the complete whitepaper online.
              </p>
              <Button asChild className="w-full bg-gold hover:bg-gold/80 text-black">
                <Link href="/whitepaper">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Browse Online Whitepaper
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-10 p-6 border border-gold/20 rounded-lg bg-black/40 backdrop-blur-sm">
          <h2 className="text-xl font-bold mb-4">Citation Information</h2>
          <p className="text-sm text-muted-foreground mb-4">
            If you're referencing the TritCoin whitepaper in academic or professional work, please use the following
            citation format:
          </p>

          <div className="bg-black/60 p-4 rounded-md font-mono text-sm">
            Fractalmoto, T. (2025). "TritCoin: A Quantum-Secure Blockchain Based on Balanced Ternary Computing." Final
            Protocol Solutions, Version 1.0.
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            URL: <span className="text-gold">https://tritcoin.vercel.app/whitepaper</span>
          </p>
        </div>
      </section>
    </WhitepaperLayout>
  )
}

