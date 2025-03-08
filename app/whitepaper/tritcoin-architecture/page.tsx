import type { Metadata } from "next"
import TritCoinArchitectureClientPage from "./TritCoinArchitectureClientPage"

export const metadata: Metadata = {
  title: "TritCoin Architecture | TritCoin Whitepaper",
  description: "Core system design and implementation details of the TritCoin blockchain.",
}

export default function TritCoinArchitecturePage() {
  return <TritCoinArchitectureClientPage />
}

