import type { Metadata } from "next"
import EconomicModelClientPage from "./EconomicModelClientPage"

export const metadata: Metadata = {
  title: "Economic Model | TritCoin Whitepaper",
  description: "Tokenomics and economic incentives of the TritCoin blockchain.",
}

export default function EconomicModelPage() {
  return <EconomicModelClientPage />
}

