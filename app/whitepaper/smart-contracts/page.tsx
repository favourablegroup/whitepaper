import type { Metadata } from "next"
import SmartContractsClientPage from "./SmartContractsClientPage"

export const metadata: Metadata = {
  title: "Smart Contract Capabilities | TritCoin Whitepaper",
  description: "Ternary-based smart contract implementation in the TritCoin blockchain.",
}

export default function SmartContractsPage() {
  return <SmartContractsClientPage />
}

