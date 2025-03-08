import type { Metadata } from "next"
import UserExperienceClientPage from "./UserExperienceClientPage"

export const metadata: Metadata = {
  title: "User Experience and Interface Design | TritCoin Whitepaper",
  description: "Interface design and user experience principles of the TritCoin blockchain.",
}

export default function UserExperiencePage() {
  return <UserExperienceClientPage />
}

