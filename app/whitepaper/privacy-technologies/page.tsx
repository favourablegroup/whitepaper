import type { Metadata } from "next"
import PrivacyTechnologiesClientPage from "./PrivacyTechnologiesClientPage"

export const metadata: Metadata = {
  title: "Privacy and Zero-Knowledge Technologies | TritCoin Whitepaper",
  description: "Privacy-preserving features and zero-knowledge proofs in the TritCoin blockchain.",
}

export default function PrivacyTechnologiesPage() {
  return <PrivacyTechnologiesClientPage />
}

