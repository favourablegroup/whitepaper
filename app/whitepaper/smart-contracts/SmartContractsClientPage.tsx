"use client"

import { CodeBlock } from "@/components/CodeBlock"
import { TechnicalNote } from "@/components/TechnicalNote"
import { StyledSection } from "@/components/styled"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SmartContractVisualizer } from "@/components/visualizations/SmartContractVisualizer"

export default function SmartContractsClientPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="text-sm font-mono text-terminal-dim mb-2">
          <Link href="/whitepaper" className="hover:text-terminal-accent transition-colors">
            Whitepaper
          </Link>
          {" > "}
          <span className="text-terminal-accent">Smart Contract Capabilities</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-terminal-accent">Smart Contract Capabilities</h1>
      </div>

      {/* Smart Contract Visualization moved to top */}
      <StyledSection className="mb-12">
        <SmartContractVisualizer className="w-full" />
        <TechnicalNote>
          The TritToken smart contract demonstrates our ternary-based contract system, featuring methods for token
          transfers, approvals, and ternary arithmetic operations.
        </TechnicalNote>
      </StyledSection>

      <section id="ternary-virtual-machine">
        <h2 className="text-2xl font-bold mb-4 text-terminal-accent">7.1 Ternary Virtual Machine</h2>

        <StyledSection>
          <h3 className="text-xl font-bold mb-4 text-terminal-accent">Core Implementation</h3>
          <p className="mb-4">Built with our Next.js/TypeScript stack:</p>

          <CodeBlock language="typescript">
            {`// Virtual Machine types and interfaces
interface TritVM {
  // Instruction set
  type Instruction = {
    opcode: TritOpCode;
    operands: TritValue[];
  };

  // Memory model
  interface MemoryState {
    stack: TritValue[];
    storage: Map<TritAddress, TritValue>;
    memory: TritValue[];
  }
}`}
          </CodeBlock>
        </StyledSection>
      </section>

      <section id="contract-programming-model" className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-terminal-accent">7.2 Contract Programming Model</h2>

        <StyledSection>
          <h3 className="text-xl font-bold mb-4 text-terminal-accent">TypeScript Integration</h3>
          <p className="mb-4">Leveraging our monorepo structure:</p>

          <CodeBlock language="typescript">
            {`// Smart contract interface
interface TritContract {
  // Contract state
  interface State {
    balance: TritValue;
    storage: Map<TritAddress, TritValue>;
    owner: TritAddress;
  }

  // Contract methods
  interface Methods {
    execute(method: string, args: TritValue[]): Promise<TritValue>;
    view(method: string, args: TritValue[]): Promise<TritValue>;
  }
}

// Contract development with Next.js
export default function ContractDevelopment() {
  return (
    <StyledContractDev>
      <Editor
        language="typescript"
        theme={tritTheme}
        onChange={handleCodeChange}
      />
      <Compiler
        code={sourceCode}
        onCompile={handleCompilation}
      />
      <Deployer
        bytecode={compiledCode}
        onDeploy={handleDeployment}
      />
    </StyledContractDev>
  );
}

// Contract testing framework
class ContractTest {
  async testMethod(
    contract: TritContract,
    method: string,
    args: TritValue[]
  ): Promise<TestResult> {
    try {
      const result = await contract.execute(method, args);
      return { success: true, result };
    } catch (error) {
      return { success: false, error };
    }
  }
}`}
          </CodeBlock>

          <TechnicalNote>
            Our contract development environment is fully integrated with TypeScript for type safety and Next.js for
            optimal development experience.
          </TechnicalNote>
        </StyledSection>
      </section>

      <section id="oracle-integration" className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-terminal-accent">7.3 Oracle Integration</h2>

        <StyledSection>
          <h3 className="text-xl font-bold mb-4 text-terminal-accent">Implementation</h3>
          <p className="mb-4">Built on our React/TypeScript foundation:</p>

          <CodeBlock language="typescript">
            {`interface TritOracle {
  // Oracle types
  interface DataFeed {
    source: string;
    updateInterval: number;
    value: TritValue;
    signature: TritSignature;
  }

  // Oracle network
  interface OracleNetwork {
    nodes: OracleNode[];
    aggregator: DataAggregator;
    verifier: SignatureVerifier;
  }
}

// Oracle implementation
class DecentralizedOracle implements TritOracle {
  private readonly network: OracleNetwork;

  // Data fetching with Next.js API routes
  async fetchData(
    source: string
  ): Promise<DataFeed> {
    const response = await fetch('/api/oracle/fetch', {
      method: 'POST',
      body: JSON.stringify({ source })
    });
    return response.json();
  }

  // Data verification
  async verifyData(
    feed: DataFeed
  ): Promise<boolean> {
    return this.network.verifier.verify(feed);
  }
}

// React component for oracle monitoring
const OracleMonitor: React.FC<{
  oracle: DecentralizedOracle;
  feeds: DataFeed[];
}> = ({ oracle, feeds }) => {
  return (
    <StyledOracleView>
      <NetworkStatus network={oracle.network} />
      <FeedList feeds={feeds} />
      <VerificationStatus oracle={oracle} />
    </StyledOracleView>
  );
};`}
          </CodeBlock>

          <h3 className="text-xl font-bold mt-6 mb-4 text-terminal-accent">Cross-Chain Communication</h3>
          <CodeBlock language="typescript">
            {`interface CrossChainBridge {
  // Bridge operations
  async function sendMessage(
    targetChain: ChainId,
    message: TritValue
  ): Promise<TxHash>;

  async function receiveMessage(
    sourceChain: ChainId,
    proof: MessageProof
  ): Promise<boolean>;
}

// Bridge implementation with Next.js
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BridgeResponse>
) {
  const { targetChain, message } = req.body;
  
  try {
    const result = await bridge.sendMessage(targetChain, message);
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}`}
          </CodeBlock>
        </StyledSection>
      </section>

      <section id="integration" className="mt-12 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-terminal-accent">Integration with Modern Stack</h2>

        <p className="mb-4">Our smart contract platform is fully integrated with our technology stack:</p>
        <ul className="list-disc pl-6 space-y-2 text-terminal-text">
          <li>Next.js for optimal development experience</li>
          <li>React components for contract interaction</li>
          <li>TypeScript for type-safe contract development</li>
          <li>Styled-components for consistent UI</li>
          <li>Web Workers for contract execution</li>
          <li>Comprehensive testing framework</li>
        </ul>

        <p className="mt-6 mb-4">Key features:</p>
        <ul className="list-disc pl-6 space-y-2 text-terminal-text">
          <li>Full TypeScript support</li>
          <li>React-based development tools</li>
          <li>Server-side rendering optimization</li>
          <li>Interactive contract visualization</li>
          <li>Internationalization support</li>
          <li>Automated contract testing</li>
        </ul>
      </section>

      <div className="mt-16 flex justify-between">
        <Link
          href="/whitepaper/privacy-technologies"
          className="flex items-center gap-2 text-terminal-dim hover:text-terminal-accent transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="font-mono text-sm">Previous: Privacy Technologies</span>
        </Link>
        <Link
          href="/whitepaper/implementation-performance"
          className="flex items-center gap-2 text-terminal-dim hover:text-terminal-accent transition-colors"
        >
          <span className="font-mono text-sm">Next: Implementation & Performance</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

