"use client"

import { useState, useEffect } from "react"

export default function DiagnosticPage() {
  const [error, setError] = useState<string | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      // Check if window is defined (client-side only)
      if (typeof window !== "undefined") {
        console.log("Diagnostic page loaded")
        setLoaded(true)

        // Check for auth-related globals
        const globals = Object.getOwnPropertyNames(window)
        console.log(
          "Global objects:",
          globals.filter(
            (g) =>
              g.toLowerCase().includes("auth") ||
              g.toLowerCase().includes("user") ||
              g.toLowerCase().includes("clerk") ||
              g.toLowerCase().includes("supabase") ||
              g.toLowerCase().includes("firebase"),
          ),
        )
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl font-bold mb-4">Diagnostic Page</h1>

      {error ? (
        <div className="bg-red-900/20 border border-red-500 p-4 rounded-md">
          <h2 className="text-xl font-bold mb-2">Error Detected</h2>
          <pre className="whitespace-pre-wrap font-mono text-sm">{error}</pre>
        </div>
      ) : (
        <div className="bg-green-900/20 border border-green-500 p-4 rounded-md">
          <h2 className="text-xl font-bold mb-2">Page Loaded Successfully</h2>
          <p>This minimal page loaded without errors: {loaded ? "Yes" : "No"}</p>
          <p className="mt-4">Check the browser console for diagnostic information.</p>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Next Steps</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Check the browser console for any auth-related globals</li>
          <li>Look for any auth-related libraries in your package.json</li>
          <li>Search your codebase for components that use auth</li>
          <li>Check for any context providers in your layout files</li>
        </ol>
      </div>

      <div className="mt-8">
        <a href="/" className="text-blue-400 hover:underline">
          Return to Home
        </a>
      </div>
    </div>
  )
}

