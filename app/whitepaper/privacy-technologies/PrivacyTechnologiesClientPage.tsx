"use client"

import { CodeBlock } from "@/components/CodeBlock"
import { TechnicalNote } from "@/components/TechnicalNote"
import { StyledSection } from "@/components/styled"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ZKPVisualizer } from "@/components/visualizations/ZKPVisualizer"
import { PracticalSteganographyVisualizer } from "@/components/visualizations/PracticalSteganographyVisualizer"
import { TernaryAudioVisualizer } from "@/components/visualizations/TernaryAudioVisualizer"

export default function PrivacyTechnologiesClientPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="text-sm font-mono text-terminal-dim mb-2">
          <Link href="/whitepaper" className="hover:text-terminal-accent transition-colors">
            Whitepaper
          </Link>
          {" > "}
          <span className="text-terminal-accent">Privacy and Zero-Knowledge Technologies</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-terminal-accent">Privacy and Zero-Knowledge Technologies</h1>
      </div>

      {/* Move the practical steganography visualization to the top */}
      <div className="mb-12">
        <PracticalSteganographyVisualizer />
      </div>

      {/* Original steganography visualization */}
      <div className="mb-12">
        <TernaryAudioVisualizer />
      </div>

      {/* Quantum-Resistant Security section moved here */}
      <section id="quantum-resistant-security" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-terminal-accent">Quantum-Resistant Security</h2>

        <StyledSection>
          <p className="mb-4">
            The 3^2187 Sierpinski fractal hash keys provide approximately 1046 bits of security, compared to the 256
            bits offered by traditional binary systems. This exponential increase in key space makes our steganography
            solution resistant to quantum computing attacks, which can break traditional encryption methods through
            Shor's algorithm.
          </p>

          <p className="mb-4">
            When combined with our ternary-based steganographic techniques, we achieve multiple layers of security:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6 text-terminal-text">
            <li>The data is encrypted with quantum-resistant fractal keys</li>
            <li>The encrypted data is hidden within cover media using statistical camouflage</li>
            <li>The embedding process mimics natural noise patterns</li>
            <li>Multiple layers of obfuscation prevent statistical analysis</li>
            <li>The blockchain provides immutable storage and verification</li>
          </ul>

          <TechnicalNote>
            Our approach to steganography is particularly valuable for sensitive applications like medical records,
            legal contracts, and financial data, where both privacy and integrity are paramount.
          </TechnicalNote>
        </StyledSection>
      </section>

      <section id="ternary-sigma-protocols">
        <h2 className="text-2xl font-bold mb-4 text-terminal-accent">6.1 Ternary Sigma Protocols</h2>

        <StyledSection>
          <h3 className="text-xl font-bold mb-4 text-terminal-accent">Implementation Architecture</h3>
          <p className="mb-4">Built with our Next.js/TypeScript stack:</p>

          <CodeBlock language="typescript">
            {`interface TernarySigmaProtocol {
  // Core protocol types
  type Trit = -1 | 0 | 1;
  type Challenge = Trit;
  
  // Protocol components
  interface Commitment {
    value: FieldElement;
    randomness: FieldElement;
  }
  
  interface Proof {
    commitment: Commitment;
    challenge: Challenge;
    response: FieldElement;
  }
}

// React component for protocol visualization
const SigmaProtocolView: React.FC<{
  proof: TernarySigmaProtocol.Proof;
}> = ({ proof }) => {
  return (
    <StyledProtocolView>
      <CommitmentPhase data={proof.commitment} />
      <ChallengePhase value={proof.challenge} />
      <ResponsePhase value={proof.response} />
    </StyledProtocolView>
  );
};

// Protocol implementation
class DiscreteLogProof implements TernarySigmaProtocol {
  private readonly field: TernaryField;
  
  constructor(field: TernaryField) {
    this.field = field;
  }

  async prove(
    secretKey: FieldElement
  ): Promise<Proof> {
    // Offload computation to Web Worker
    return new Promise((resolve) => {
      const worker = new Worker('/sigma-worker.ts');
      worker.postMessage({ secretKey });
      worker.onmessage = (e) => resolve(e.data);
    });
  }
}`}
          </CodeBlock>

          <h3 className="text-xl font-bold mt-6 mb-4 text-terminal-accent">Zero-Knowledge Proof Visualization</h3>
          <ZKPVisualizer
            proof={{
              commitment: "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0",
              challenge: "f9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a6f5e4d3c2b1a0",
              response: "0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f",
            }}
            width={800}
            height={300}
            theme="dark"
          />

          <TechnicalNote>
            Our zero-knowledge proof visualization demonstrates the three phases of our ternary sigma protocol:
            commitment, challenge, and response. The interactive display allows users to explore each phase
            independently.
          </TechnicalNote>

          <TechnicalNote>
            All cryptographic operations are implemented with constant-time algorithms and Web Workers to prevent timing
            attacks while maintaining UI responsiveness.
          </TechnicalNote>
        </StyledSection>
      </section>

      <section id="confidential-transactions" className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-terminal-accent">6.2 Confidential Transactions</h2>

        <StyledSection>
          <h3 className="text-xl font-bold mb-4 text-terminal-accent">Implementation</h3>
          <p className="mb-4">Using TypeScript for type safety:</p>

          <CodeBlock language="typescript">
            {`interface ConfidentialTransaction {
  // Pedersen commitment components
  interface PedersenCommitment {
    value: FieldElement;
    blinding: FieldElement;
  }
  
  // Range proof structure
  interface RangeProof {
    commitments: PedersenCommitment[];
    challenges: Challenge[];
    responses: FieldElement[];
  }
}

// Transaction component with styled-components
const ConfidentialTxView = styled.div\`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  background: \${props => props.theme.colors.background};
  border-radius: 8px;
\`;

class ConfidentialTxBuilder {
  async buildTransaction(
    amount: bigint,
    recipient: TritAddress
  ): Promise<ConfidentialTransaction> {
    // Implementation using Web Workers
    return new Promise((resolve) => {
      const worker = new Worker('/tx-builder-worker.ts');
      worker.postMessage({ amount, recipient });
      worker.onmessage = (e) => resolve(e.data);
    });
  }
}`}
          </CodeBlock>
        </StyledSection>
      </section>

      <section id="ring-signatures" className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-terminal-accent">6.3 Ring Signatures and Stealth Addresses</h2>

        <StyledSection>
          <h3 className="text-xl font-bold mb-4 text-terminal-accent">Ring Signature Implementation</h3>
          <p className="mb-4">Leveraging Next.js API routes:</p>

          <CodeBlock language="typescript">
            {`interface RingSignature {
  // Ring structure
  interface Ring {
    members: TritAddress[];
    signature: FieldElement[];
    keyImage: FieldElement;
  }
  
  // Signature generation
  async function generateSignature(
    message: Buffer,
    ring: Ring,
    secretKey: FieldElement
  ): Promise<RingSignature>;
}

// API route for ring signature verification
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RingVerificationResponse>
) {
  const { signature, message, ring } = req.body;
  
  try {
    const isValid = await verifyRingSignature(signature, message, ring);
    res.status(200).json({ isValid });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// React component for ring visualization
const RingVisualizer: React.FC<{
  ring: Ring;
  signature: RingSignature;
}> = ({ ring, signature }) => {
  return (
    <StyledRing>
      <RingMembers members={ring.members} />
      <SignatureDisplay signature={signature} />
      <KeyImageView image={signature.keyImage} />
    </StyledRing>
  );
};`}
          </CodeBlock>
        </StyledSection>
      </section>

      <section id="ternary-steganography" className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-terminal-accent">6.4 Ternary Steganography</h2>

        <StyledSection>
          <h3 className="text-xl font-bold mb-4 text-terminal-accent">Implementation</h3>
          <p className="mb-4">Built with our React/TypeScript stack:</p>

          <CodeBlock language="typescript">
            {`interface TritStego {
  // Steganographic embedding
  interface EmbeddingParams {
    data: Buffer;
    cover: TritSequence;
    key: StegKey;
  }
  
  // Extraction parameters
  interface ExtractionParams {
    stego: TritSequence;
    key: StegKey;
    length: number;
  }
}

class TritSteganography {
  // Embed data in ternary sequence
  async embed(
    params: EmbeddingParams
  ): Promise<TritSequence> {
    return new Promise((resolve) => {
      const worker = new Worker('/stego-worker.ts');
      worker.postMessage(params);
      worker.onmessage = (e) => resolve(e.data);
    });
  }
  
  // Extract hidden data
  async extract(
    params: ExtractionParams
  ): Promise<Buffer> {
    return new Promise((resolve) => {
      const worker = new Worker('/stego-worker.ts');
      worker.postMessage(params);
      worker.onmessage = (e) => resolve(e.data);
    });
  }
}

// Visualization component
const StegoVisualizer: React.FC<{
  original: TritSequence;
  stego: TritSequence;
}> = ({ original, stego }) => {
  return (
    <StyledStegoView>
      <SequenceComparison
        original={original}
        modified={stego}
      />
      <DifferenceHighlight
        sequences={[original, stego]}
      />
    </StyledStegoView>
  );
};`}
          </CodeBlock>

          <TechnicalNote>
            Our steganographic implementation leverages the balanced ternary system's natural properties to achieve
            higher embedding capacity while maintaining statistical undetectability.
          </TechnicalNote>
        </StyledSection>
      </section>

      <section id="integration" className="mt-12 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-terminal-accent">Integration with Modern Stack</h2>

        <p className="mb-4">Our privacy technologies are fully integrated with our technology stack:</p>
        <ul className="list-disc pl-6 space-y-2 text-terminal-text">
          <li>Next.js server-side rendering for optimal performance</li>
          <li>React components for interactive visualizations</li>
          <li>TypeScript for end-to-end type safety</li>
          <li>Styled-components for consistent UI</li>
          <li>Web Workers for intensive computations</li>
          <li>Comprehensive test coverage</li>
        </ul>

        <p className="mt-6 mb-4">Key features:</p>
        <ul className="list-disc pl-6 space-y-2 text-terminal-text">
          <li>Full TypeScript type checking</li>
          <li>React hooks for state management</li>
          <li>Server-side rendering optimization</li>
          <li>Responsive visualization components</li>
          <li>Internationalization support</li>
          <li>Automated security testing</li>
        </ul>
      </section>

      <div className="mt-16 flex justify-between">
        <Link
          href="/whitepaper/ultra-secure-hash"
          className="flex items-center gap-2 text-terminal-dim hover:text-terminal-accent transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="font-mono text-sm">Previous: Ultra-Secure Hash System</span>
        </Link>
        <Link
          href="/whitepaper/smart-contracts"
          className="flex items-center gap-2 text-terminal-dim hover:text-terminal-accent transition-colors"
        >
          <span className="font-mono text-sm">Next: Smart Contracts</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

