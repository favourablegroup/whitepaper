import type { Metadata } from "next"
import UltraSecureHashClientPage from "./UltraSecureHashClientPage"

export const metadata: Metadata = {
  title: "Ultra-Secure Hash System | TritCoin Whitepaper",
  description: "Advanced cryptographic hashing mechanisms of the TritCoin blockchain.",
}

export default function UltraSecureHashPage() {
  return <UltraSecureHashClientPage />
}

