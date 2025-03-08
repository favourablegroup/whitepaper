"use client"

interface Reference {
  id: string
  authors: string[]
  year: number
  title: string
  publication?: string
  url?: string
}

interface ReferencesProps {
  references?: Reference[]
}

export function References({ references = [] }: ReferencesProps) {
  // If no references are provided, use a default set
  const defaultReferences: Reference[] = [
    {
      id: "knuth1981",
      authors: ["Knuth, D.E."],
      year: 1981,
      title: "The Art of Computer Programming, Vol. 2: Seminumerical Algorithms",
      publication: "Addison-Wesley",
    },
    {
      id: "fractalmoto2025",
      authors: ["Fractalmoto, T."],
      year: 2025,
      title: "Tritcoin: A Peer-to-Peer Ternary Electronic Cash System",
      publication: "Final Protocol Solutions",
    },
  ]

  const displayReferences = references.length > 0 ? references : defaultReferences

  return (
    <div className="mt-12 space-y-4">
      <h2 className="text-xl font-mono font-bold text-terminal-accent">References</h2>
      <div className="space-y-4">
        {displayReferences.map((ref) => (
          <div key={ref.id} className="text-sm text-terminal-dim font-mono">
            <p>
              {ref.authors.join(", ")} ({ref.year}). <span className="text-terminal-text">{ref.title}</span>
              {ref.publication && `. ${ref.publication}`}
              {ref.url && (
                <>
                  . Available at:{" "}
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terminal-accent hover:underline"
                  >
                    {ref.url}
                  </a>
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

