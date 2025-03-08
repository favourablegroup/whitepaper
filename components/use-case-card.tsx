import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import * as Icons from "lucide-react"

interface UseCaseCardProps {
  title: string
  description: string
  icon: keyof typeof Icons
}

export function UseCaseCard({ title, description, icon }: UseCaseCardProps) {
  const Icon = Icons[icon as keyof typeof Icons]

  return (
    <Card className="border border-gold/20 bg-black/40 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-gold" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

