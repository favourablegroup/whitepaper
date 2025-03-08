import type { Metadata } from "next"
import ImplementationPerformanceClientPage from "./ImplementationPerformanceClientPage"

export const metadata: Metadata = {
  title: "Implementation and Performance | TritCoin Whitepaper",
  description: "Technical implementation details and performance benchmarks of the TritCoin blockchain.",
}

export default function ImplementationPerformancePage() {
  return <ImplementationPerformanceClientPage />
}

