import type { Metadata } from "next"
import ConclusionClientPage from "./ConclusionClientPage"

export const metadata: Metadata = {
  title: "Conclusion | TritCoin Whitepaper",
  description: "Summary and final thoughts on the TritCoin blockchain system with quantum threats dashboard.",
}

export default function ConclusionPage() {
  return <ConclusionClientPage />
}

