import type { Metadata } from "next"
import SecurityAuditingClientPage from "./SecurityAuditingClientPage"

export const metadata: Metadata = {
  title: "Security and Auditing | TritCoin Whitepaper",
  description: "Security architecture and auditing systems of the TritCoin blockchain.",
}

export default function SecurityAuditingPage() {
  return <SecurityAuditingClientPage />
}

