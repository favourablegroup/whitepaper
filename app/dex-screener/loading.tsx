export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-terminal-text p-4">
      <div className="text-center">
        <h1 className="text-3xl font-mono font-bold mb-4">Loading Market Data...</h1>
        <p className="text-terminal-dim">Please wait while we fetch the latest Tritcoin market information</p>
        <div className="mt-8 flex justify-center">
          <div className="animate-pulse flex space-x-4">
            <div className="h-3 w-3 bg-terminal-accent rounded-full"></div>
            <div className="h-3 w-3 bg-terminal-accent rounded-full"></div>
            <div className="h-3 w-3 bg-terminal-accent rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

