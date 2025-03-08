import type { Metadata } from "next"
import FutureDevelopmentClientPage from "./FutureDevelopmentClientPage"

export const metadata: Metadata = {
  title: "Future Development and Roadmap | TritCoin Whitepaper",
  description: "Future development plans and roadmap for the TritCoin blockchain.",
}

export default function FutureDevelopmentPage() {
  return <FutureDevelopmentClientPage />
}

