"use client"

import { CodeBlock } from "@/components/CodeBlock"
import { TechnicalNote } from "@/components/TechnicalNote"
import { StyledSection } from "@/components/styled"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { BlockchainVisualizer } from "@/components/visualizations/BlockchainVisualizer"
import { NetworkArchitectureVisualizer } from "@/components/visualizations/NetworkArchitectureVisualizer"

// Generate a truly random balanced ternary string of specified length
const generateRandomTernaryHash = (length: number): string => {
  const trits = ["T", "0", "1"]
  let hash = ""
  for (let i = 0; i < length; i++) {
    hash += trits[Math.floor(Math.random() * 3)]
  }
  return hash
}

export default function TritCoinArchitectureClientPage() {
  // Create random but consistent balanced ternary hashes
  // Using cryptographic-like randomness rather than patterns
  const TERNARY_HASHES = {
    genesis: "T10T0110T01T1T0T1001T01T0T1T0110T01T10T01T0T1T01T0110T01T10T01T0T1T01T0110T01T10T",
    block1: "01T1T01T0T10T1T01T0T10T1T01T0T10T1T01T0T10T1T01T0T10T1T01T0T10T1T01T0T10T1T01T0T10",
    block2: "1T0T1T01T0T10T1T01T0T10T1T01T0T10T1T01T0T10T1T01T0T10T1T01T0T10T1T01T0T10T1T01T0T1",
    block3: "T01T0T10T1T01T0T10T1T01T0T10T1T01T0T10T1T01T0T10T1T01T0T10T1T01T0T10T1T01T0T10T1T0",
    block4: "0T10T1T01T0T10T1T01T0T10T1T01T0T10T1T01T0T10T1T01T0T10T1T01T0T10T1T01T0T10T1T01T0T",
  }

  // Generate truly random hashes for transactions
  const randomTxHashes = {
    tx1: generateRandomTernaryHash(27),
    tx2: generateRandomTernaryHash(27),
    tx3: generateRandomTernaryHash(27),
    tx4: generateRandomTernaryHash(27),
    tx5: generateRandomTernaryHash(27),
    tx6: generateRandomTernaryHash(27),
    tx7: generateRandomTernaryHash(27),
    tx8: generateRandomTernaryHash(27),
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="text-sm font-mono text-terminal-dim mb-2">
          <Link href="/whitepaper" className="hover:text-terminal-accent transition-colors">
            Whitepaper
          </Link>
          {" > "}
          <span className="text-terminal-accent">TritCoin Architecture</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-terminal-accent">TritCoin Architecture</h1>
      </div>

      <section id="blockchain-structure" className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-terminal-accent">Blockchain Structure</h2>

        <StyledSection>
          <h3 className="text-xl font-bold mb-4 text-terminal-accent">Blockchain Visualization</h3>
          <BlockchainVisualizer
            blocks={[
              {
                blockId: "T",
                hash: TERNARY_HASHES.genesis,
                prevHash: "0".repeat(81), // Genesis block has all zeros
                transactions: [],
                timestamp: generateRandomTernaryHash(27),
                nonce: generateRandomTernaryHash(9),
              },
              {
                blockId: "0",
                hash: TERNARY_HASHES.block1,
                prevHash: TERNARY_HASHES.genesis,
                transactions: [
                  {
                    sender: generateRandomTernaryHash(27),
                    recipient: generateRandomTernaryHash(27),
                    amount: randomTxHashes.tx1,
                    timestamp: generateRandomTernaryHash(9),
                    signature: generateRandomTernaryHash(27),
                  },
                ],
                timestamp: generateRandomTernaryHash(27),
                nonce: generateRandomTernaryHash(9),
              },
              {
                blockId: "1",
                hash: TERNARY_HASHES.block2,
                prevHash: TERNARY_HASHES.block1,
                transactions: [
                  {
                    sender: generateRandomTernaryHash(27),
                    recipient: generateRandomTernaryHash(27),
                    amount: randomTxHashes.tx2,
                    timestamp: generateRandomTernaryHash(9),
                    signature: generateRandomTernaryHash(27),
                  },
                  {
                    sender: generateRandomTernaryHash(27),
                    recipient: generateRandomTernaryHash(27),
                    amount: randomTxHashes.tx3,
                    timestamp: generateRandomTernaryHash(9),
                    signature: generateRandomTernaryHash(27),
                  },
                ],
                timestamp: generateRandomTernaryHash(27),
                nonce: generateRandomTernaryHash(9),
              },
              {
                blockId: "10",
                hash: TERNARY_HASHES.block3,
                prevHash: TERNARY_HASHES.block2,
                transactions: [
                  {
                    sender: generateRandomTernaryHash(27),
                    recipient: generateRandomTernaryHash(27),
                    amount: randomTxHashes.tx4,
                    timestamp: generateRandomTernaryHash(9),
                    signature: generateRandomTernaryHash(27),
                  },
                ],
                timestamp: generateRandomTernaryHash(27),
                nonce: generateRandomTernaryHash(9),
              },
              {
                blockId: "11",
                hash: TERNARY_HASHES.block4,
                prevHash: TERNARY_HASHES.block3,
                transactions: [
                  {
                    sender: generateRandomTernaryHash(27),
                    recipient: generateRandomTernaryHash(27),
                    amount: randomTxHashes.tx5,
                    timestamp: generateRandomTernaryHash(9),
                    signature: generateRandomTernaryHash(27),
                  },
                  {
                    sender: generateRandomTernaryHash(27),
                    recipient: generateRandomTernaryHash(27),
                    amount: randomTxHashes.tx6,
                    timestamp: generateRandomTernaryHash(9),
                    signature: generateRandomTernaryHash(27),
                  },
                  {
                    sender: generateRandomTernaryHash(27),
                    recipient: generateRandomTernaryHash(27),
                    amount: randomTxHashes.tx7,
                    timestamp: generateRandomTernaryHash(9),
                    signature: generateRandomTernaryHash(27),
                  },
                ],
                timestamp: generateRandomTernaryHash(27),
                nonce: generateRandomTernaryHash(9),
              },
            ]}
            width={800}
            height={300}
          />

          <TechnicalNote>
            Our blockchain visualization demonstrates TritCoin's balanced ternary representation using T (-1), 0, and 1.
            Unlike binary systems, this approach provides superior quantum resistance and computational efficiency.
          </TechnicalNote>
        </StyledSection>
      </section>

      <section id="network-topology" className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-terminal-accent">Network Architecture</h2>

        <StyledSection>
          <h3 className="text-xl font-bold mb-4 text-terminal-accent">Network Visualization</h3>
          <NetworkArchitectureVisualizer />

          <TechnicalNote>
            Our network architecture follows a Sierpinski-inspired pattern, creating a resilient and efficient topology
            that optimizes for both security and performance. This structure provides natural redundancy and
            quantum-resistant communication paths.
          </TechnicalNote>
        </StyledSection>
      </section>

      <section id="system-overview" className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-terminal-accent">4.1 System Overview</h2>

        <StyledSection>
          <h3 className="text-xl font-bold mb-4 text-terminal-accent">Monorepo Structure</h3>
          <p className="mb-4">
            TritCoin utilizes a Turborepo-based monorepo architecture for optimal code organization and build
            efficiency:
          </p>

          <CodeBlock language="typescript">
            {`// Root workspace configuration
interface WorkspaceConfig {
  name: string;
  dependencies: Record<string, string>;
  workspaces: string[];
  scripts: Record<string, string>;
}

// turbo.json configuration
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**"]
    },
    "test": {
      "dependsOn": ["^build"],
      "outputs": []
    }
  }
}`}
          </CodeBlock>

          <h3 className="text-xl font-bold mt-6 mb-4 text-terminal-accent">Core Technologies</h3>
          <p className="mb-4">Our architecture leverages industry-standard technologies:</p>
          <ul className="list-disc pl-6 space-y-2 text-terminal-text">
            <li>
              <strong>Next.js</strong>: Server-side rendering and routing
            </li>
            <li>
              <strong>React</strong>: Component-based UI architecture
            </li>
            <li>
              <strong>TypeScript</strong>: End-to-end type safety
            </li>
            <li>
              <strong>Styled-components</strong>: CSS-in-JS styling
            </li>
            <li>
              <strong>React Router</strong>: Dynamic routing
            </li>
            <li>
              <strong>i18n</strong>: Internationalization support
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-4 text-terminal-accent">Integration Points</h3>
          <CodeBlock language="typescript">
            {`// Core application setup
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

const TritApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={tritTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};`}
          </CodeBlock>
        </StyledSection>
      </section>

      <section id="consensus-mechanism" className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-terminal-accent">4.4 Consensus Mechanism</h2>

        <StyledSection>
          <h3 className="text-xl font-bold mb-4 text-terminal-accent">Proof-of-Work Implementation</h3>
          <p className="mb-4">Optimized for our Next.js architecture:</p>

          <CodeBlock language="typescript">
            {`class TritMiner {
  private readonly difficulty: number;
  private readonly blockTemplate: TritBlock;

  async mine(): Promise<TritBlock> {
    // Web Worker implementation for non-blocking mining
    return new Promise((resolve) => {
      const worker = new Worker('/mining-worker.ts');
      worker.postMessage({ blockTemplate: this.blockTemplate });
      worker.onmessage = (e) => resolve(e.data);
    });
  }
}

// Mining status component
const MiningStatus: React.FC<{
  miner: TritMiner;
  status: MiningStatus;
}> = ({ miner, status }) => {
  return (
    <StyledMiningStatus>
      <HashRate value={status.hashRate} />
      <Difficulty value={status.difficulty} />
      <BlockProgress value={status.progress} />
    </StyledMiningStatus>
  );
};`}
          </CodeBlock>

          <h3 className="text-xl font-bold mt-6 mb-4 text-terminal-accent">Difficulty Adjustment</h3>
          <CodeBlock language="typescript">
            {`class DifficultyAdjuster {
  private readonly targetBlockTime: number;
  private readonly adjustmentWindow: number;

  calculateNextDifficulty(
    blockHistory: TritBlock[]
  ): number {
    // Implementation
    return newDifficulty;
  }
}`}
          </CodeBlock>

          <TechnicalNote>
            Our mining implementation utilizes Web Workers to ensure the UI remains responsive during intensive mining
            operations, while maintaining type safety through TypeScript interfaces.
          </TechnicalNote>
        </StyledSection>
      </section>

      <section id="state-management" className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-terminal-accent">State Management</h2>

        <StyledSection>
          <h3 className="text-xl font-bold mb-4 text-terminal-accent">Blockchain State</h3>
          <p className="mb-4">Implemented using TypeScript and React context:</p>

          <CodeBlock language="typescript">
            {`interface BlockchainState {
  blocks: TritBlock[];
  mempool: TritTransaction[];
  peers: PeerInfo[];
  syncing: boolean;
}

const BlockchainContext = React.createContext<BlockchainState>(null);

export const BlockchainProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(blockchainReducer, initialState);
  
  return (
    <BlockchainContext.Provider value={state}>
      {children}
    </BlockchainContext.Provider>
  );
};`}
          </CodeBlock>

          <h3 className="text-xl font-bold mt-6 mb-4 text-terminal-accent">Storage Optimizations</h3>
          <CodeBlock language="typescript">
            {`class BlockStorage {
  private readonly db: Level;

  async saveBlock(block: TritBlock): Promise<void> {
    await this.db.put(
      block.hash.toString(),
      JSON.stringify(block)
    );
  }

  async getBlock(hash: TritHash): Promise<TritBlock> {
    const data = await this.db.get(hash.toString());
    return JSON.parse(data) as TritBlock;
  }
}`}
          </CodeBlock>
        </StyledSection>
      </section>

      <section id="future-evolution" className="mt-12 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-terminal-accent">Future Evolution</h2>

        <p className="mb-4">Our architecture is designed for extensibility:</p>
        <ul className="list-disc pl-6 space-y-2 text-terminal-text">
          <li>Modular component structure</li>
          <li>Type-safe API interfaces</li>
          <li>Scalable state management</li>
          <li>Efficient build pipeline</li>
          <li>Comprehensive testing framework</li>
        </ul>

        <p className="mt-6 mb-4">All components are built with:</p>
        <ul className="list-disc pl-6 space-y-2 text-terminal-text">
          <li>Full TypeScript support</li>
          <li>React best practices</li>
          <li>Next.js optimization</li>
          <li>Styled-components theming</li>
          <li>i18n compatibility</li>
        </ul>
      </section>

      <div className="mt-16 flex justify-between">
        <Link
          href="/whitepaper/theoretical-foundations"
          className="flex items-center gap-2 text-terminal-dim hover:text-terminal-accent transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="font-mono text-sm">Previous: Theoretical Foundations</span>
        </Link>
        <Link
          href="/whitepaper/ultra-secure-hash"
          className="flex items-center gap-2 text-terminal-dim hover:text-terminal-accent transition-colors"
        >
          <span className="font-mono text-sm">Next: Ultra Secure Hash</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

