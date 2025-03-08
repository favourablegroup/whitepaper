"use client"

import { CodeBlock } from "@/components/CodeBlock"
import { TechnicalNote } from "@/components/TechnicalNote"
import { StyledSection } from "@/components/styled"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { EconomicMetricsVisualizer } from "@/components/visualizations/EconomicMetricsVisualizer"

export default function EconomicModelClientPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="text-sm font-mono text-terminal-dim mb-2">
          <Link href="/whitepaper" className="hover:text-terminal-accent transition-colors">
            Whitepaper
          </Link>
          {" > "}
          <span className="text-terminal-accent">Economic Model</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-terminal-accent">Economic Model</h1>
      </div>

      <section id="economic-metrics">
        <h2 className="text-2xl font-bold mb-4 text-terminal-accent">Economic Metrics</h2>
        <StyledSection>
          <EconomicMetricsVisualizer />
          <TechnicalNote>
            Our economic metrics visualization provides real-time comparisons between binary and ternary systems across
            power consumption, cost analysis, and efficiency metrics. The visualization uses Sierpinski triangles to
            represent the fractal nature of our economic scaling.
          </TechnicalNote>
        </StyledSection>
      </section>

      <section id="token-economics">
        <h2 className="text-2xl font-bold mb-4 text-terminal-accent">9.1 Token Economics</h2>

        <StyledSection>
          <h3 className="text-xl font-bold mb-4 text-terminal-accent">Implementation Architecture</h3>
          <p className="mb-4">Built with our Next.js/TypeScript stack:</p>

          <CodeBlock language="typescript">
            {`interface TokenEconomics {
  // Supply management
  interface SupplySchedule {
    maxSupply: TritValue;
    circulatingSupply: TritValue;
    inflationRate: number;
    blockReward: TritValue;
  }

  // Distribution mechanism
  interface Distribution {
    validators: number;    // 30%
    treasury: number;      // 20%
    development: number;   // 15%
    community: number;     // 35%
  }
}`}
          </CodeBlock>

          <TechnicalNote>
            Our token economics implementation leverages Web Workers for complex calculations while maintaining UI
            responsiveness through React components.
          </TechnicalNote>
        </StyledSection>
      </section>

      <section id="governance-system" className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-terminal-accent">9.2 Governance System</h2>

        <StyledSection>
          <h3 className="text-xl font-bold mb-4 text-terminal-accent">Implementation</h3>
          <p className="mb-4">Using our React/TypeScript architecture:</p>

          <CodeBlock language="typescript">
            {`interface GovernanceSystem {
  // Proposal structure
  interface Proposal {
    id: ProposalId;
    title: string;
    description: string;
    changes: ProposedChange[];
    votes: Map<TritAddress, Vote>;
    status: ProposalStatus;
  }

  // Voting mechanism
  interface Vote {
    weight: TritValue;
    choice: VoteChoice;
    timestamp: number;
  }
}

// Next.js API route for proposal management
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProposalResponse>
) {
  const { method, proposal } = req.body;
  
  try {
    switch (method) {
      case 'create':
        const result = await createProposal(proposal);
        res.status(200).json({ result });
        break;
      case 'vote':
        const voteResult = await castVote(proposal.id, proposal.vote);
        res.status(200).json({ result: voteResult });
        break;
      default:
        res.status(400).json({ error: 'Invalid method' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// React component for governance interface
const GovernancePortal: React.FC<{
  proposals: Proposal[];
}> = ({ proposals }) => {
  return (
    <StyledGovernance>
      <ProposalList proposals={proposals} />
      <VotingInterface />
      <GovernanceMetrics data={proposals} />
    </StyledGovernance>
  );
};`}
          </CodeBlock>
        </StyledSection>
      </section>

      <section id="validator-economics" className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-terminal-accent">9.3 Validator Economics</h2>

        <StyledSection>
          <h3 className="text-xl font-bold mb-4 text-terminal-accent">Implementation</h3>
          <p className="mb-4">Built with our Next.js/TypeScript stack:</p>

          <CodeBlock language="typescript">
            {`interface ValidatorEconomics {
  // Validator state
  interface ValidatorState {
    address: TritAddress;
    stake: TritValue;
    delegations: Map<TritAddress, TritValue>;
    rewards: TritValue;
    uptime: number;
  }

  // Slashing conditions
  interface SlashingCondition {
    type: SlashType;
    penalty: number;
    evidence: Evidence;
  }
}

// Validator management system
class ValidatorManager {
  private readonly validators: Map<TritAddress, ValidatorState>;
  
  async distributeRewards(
    block: TritBlock
  ): Promise<Map<TritAddress, TritValue>> {
    // Implementation using Web Workers
    return new Promise((resolve) => {
      const worker = new Worker('/reward-distribution-worker.ts');
      worker.postMessage({ block, validators: this.validators });
      worker.onmessage = (e) => resolve(e.data);
    });
  }

  async handleSlashing(
    validator: TritAddress,
    condition: SlashingCondition
  ): Promise<SlashingResult> {
    // Slashing implementation
    const state = this.validators.get(validator);
    return this.executeSlashing(state, condition);
  }
}

// React component for validator dashboard
const ValidatorDashboard: React.FC<{
  validators: Map<TritAddress, ValidatorState>;
}> = ({ validators }) => {
  return (
    <StyledDashboard>
      <ValidatorList validators={validators} />
      <StakingInterface />
      <RewardCalculator />
      <SlashingHistory />
    </StyledDashboard>
  );
};

// Staking interface with styled-components
const StakingInterface = styled.div\`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  background: \${props => props.theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
\`;`}
          </CodeBlock>

          <h3 className="text-xl font-bold mt-6 mb-4 text-terminal-accent">Delegation System</h3>
          <CodeBlock language="typescript">
            {`interface DelegationSystem {
  // Delegation operations
  async function delegate(
    validator: TritAddress,
    amount: TritValue
  ): Promise<DelegationResult>;

  async function undelegate(
    validator: TritAddress,
    amount: TritValue
  ): Promise<UndelegationResult>;

  async function redelegate(
    from: TritAddress,
    to: TritAddress,
    amount: TritValue
  ): Promise<RedelegationResult>;
}

// React component for delegation interface
const DelegationPortal: React.FC<{
  validators: ValidatorState[];
  delegations: DelegationState[];
}> = ({ validators, delegations }) => {
  return (
    <StyledDelegation>
      <ValidatorSelector validators={validators} />
      <DelegationForm />
      <RewardProjection delegations={delegations} />
    </StyledDelegation>
  );
};`}
          </CodeBlock>
        </StyledSection>
      </section>

      <section id="integration" className="mt-12 mb-16">
        <h2 className="text-2xl font-bold mb-4 text-terminal-accent">Integration with Modern Stack</h2>

        <p className="mb-4">Our economic model is fully integrated with our technology stack:</p>
        <ul className="list-disc pl-6 space-y-2 text-terminal-text">
          <li>Next.js for server-side rendering</li>
          <li>React components for interactive interfaces</li>
          <li>TypeScript for type safety</li>
          <li>Styled-components for consistent UI</li>
          <li>Web Workers for complex calculations</li>
          <li>Comprehensive monitoring system</li>
        </ul>

        <p className="mt-6 mb-4">Key features:</p>
        <ul className="list-disc pl-6 space-y-2 text-terminal-text">
          <li>Full TypeScript support</li>
          <li>React hooks for state management</li>
          <li>Server-side rendering optimization</li>
          <li>Real-time data visualization</li>
          <li>Internationalization support</li>
          <li>Automated economic simulations</li>
        </ul>
      </section>

      <div className="mt-16 flex justify-between">
        <Link
          href="/whitepaper/implementation-performance"
          className="flex items-center gap-2 text-terminal-dim hover:text-terminal-accent transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="font-mono text-sm">Previous: Implementation & Performance</span>
        </Link>
        <Link
          href="/whitepaper/user-experience"
          className="flex items-center gap-2 text-terminal-dim hover:text-terminal-accent transition-colors"
        >
          <span className="font-mono text-sm">Next: User Experience</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

