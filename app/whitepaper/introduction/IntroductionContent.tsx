"use client"

import { useEffect } from "react"
import { Cpu, Shield, Scale, Zap } from "lucide-react"
import { CodeBlock } from "@/components/CodeBlock"
import { BinaryTernaryComparison } from "@/components/visualizations/BinaryTernaryComparison"
import { StyledSection, StyledComparison } from "@/components/styled"
import { TechnicalNote } from "@/components/TechnicalNote"

export function IntroductionContent() {
  useEffect(() => {
    document.body.classList.add("dark")
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-mono font-bold text-terminal-accent mb-8">Introduction</h1>

      <section>
        <h2 className="text-2xl font-mono font-bold text-terminal-accent mb-4">
          1.1 The Limitations of Binary Blockchain Systems
        </h2>

        <StyledSection>
          <p className="text-terminal-dim font-mono leading-relaxed mb-6">
            Current blockchain implementations face fundamental limitations due to their binary architecture:
          </p>

          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 flex-shrink-0 mt-1">
                  <Cpu className="h-5 w-5 text-terminal-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-mono font-bold text-terminal-text">Computational Inefficiency</h3>
                  <p className="text-terminal-dim font-mono leading-relaxed">
                    Binary systems require more digits to represent the same numerical range compared to balanced
                    ternary:
                  </p>
                </div>
              </div>

              <CodeBlock language="typescript">
                {`// Binary representation of 27
const binaryExample: string = "11011"; // 5 digits

// Balanced ternary representation of 27
const ternaryExample: TritString = "1000"; // 4 digits`}
              </CodeBlock>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 flex-shrink-0 mt-1">
                  <Shield className="h-5 w-5 text-terminal-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-mono font-bold text-terminal-text">Quantum Vulnerability</h3>
                  <p className="text-terminal-dim font-mono leading-relaxed">
                    Binary cryptographic systems are particularly vulnerable to quantum computing attacks:
                  </p>
                  <ul className="space-y-1 mt-2 text-terminal-dim font-mono">
                    <li className="flex items-start gap-2">
                      <span className="text-terminal-accent font-bold">$&gt;</span>
                      <span>Shor's algorithm can efficiently break RSA and ECC</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terminal-accent font-bold">$&gt;</span>
                      <span>Binary hash functions may become vulnerable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terminal-accent font-bold">$&gt;</span>
                      <span>Current post-quantum solutions sacrifice efficiency</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 flex-shrink-0 mt-1">
                  <Scale className="h-5 w-5 text-terminal-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-mono font-bold text-terminal-text">Scalability Challenges</h3>
                  <p className="text-terminal-dim font-mono leading-relaxed">
                    Traditional binary blockchains face inherent scalability issues:
                  </p>
                  <ul className="space-y-1 mt-2 text-terminal-dim font-mono">
                    <li className="flex items-start gap-2">
                      <span className="text-terminal-accent font-bold">$&gt;</span>
                      <span>Transaction throughput limitations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terminal-accent font-bold">$&gt;</span>
                      <span>Growing storage requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terminal-accent font-bold">$&gt;</span>
                      <span>Network congestion during peak usage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-accent/10 border border-terminal-accent/30 flex-shrink-0 mt-1">
                  <Zap className="h-5 w-5 text-terminal-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-mono font-bold text-terminal-text">Energy Consumption</h3>
                  <p className="text-terminal-dim font-mono leading-relaxed">
                    Binary computation requires more energy due to:
                  </p>
                  <ul className="space-y-1 mt-2 text-terminal-dim font-mono">
                    <li className="flex items-start gap-2">
                      <span className="text-terminal-accent font-bold">$&gt;</span>
                      <span>More complex number representation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terminal-accent font-bold">$&gt;</span>
                      <span>Additional processing steps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terminal-accent font-bold">$&gt;</span>
                      <span>Higher storage requirements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </StyledSection>
      </section>

      <BinaryTernaryComparison />

      <section>
        <h2 className="text-2xl font-mono font-bold text-terminal-accent mb-4">1.2 The Balanced Ternary Revolution</h2>

        <StyledSection>
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-lg font-mono font-bold text-terminal-text">Historical Context</h3>
              <p className="text-terminal-dim font-mono leading-relaxed">
                Balanced ternary computing has deep historical roots:
              </p>
              <ul className="space-y-1 mt-2 text-terminal-dim font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>First explored in ancient China's 三才 (Three Powers) philosophy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Implemented in the Soviet Setun computer (1958)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Mathematically proven optimal by Donald Knuth</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-mono font-bold text-terminal-text">Mathematical Advantages</h3>
              <p className="text-terminal-dim font-mono leading-relaxed">
                Balanced ternary provides significant benefits:
              </p>

              <CodeBlock language="typescript">
                {`// Example of balanced ternary efficiency
interface TritNumber {
  value: TritString;
  toDecimal(): number;
  add(other: TritNumber): TritNumber;
  multiply(other: TritNumber): TritNumber;
}

// Implementation using Next.js API routes
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TritCalculationResponse>
) {
  const result = performTritCalculation(req.body);
  res.status(200).json(result);
}`}
              </CodeBlock>
            </div>

            <StyledComparison title="System Comparison" leftTitle="Binary Blockchain" rightTitle="Ternary Blockchain">
              <div className="space-y-2 text-terminal-dim font-mono">
                <p>• Uses 0 and 1 states only</p>
                <p>• Requires more digits for same values</p>
                <p>• Higher storage requirements</p>
                <p>• More computational steps</p>
                <p>• Vulnerable to quantum attacks</p>
                <p>• Higher energy consumption</p>
              </div>
              <div className="space-y-2 text-terminal-dim font-mono">
                <p>• Uses -1, 0, and 1 states</p>
                <p>• More efficient number representation</p>
                <p>• Reduced storage requirements</p>
                <p>• Fewer computational steps</p>
                <p>• Natural quantum resistance</p>
                <p>• Lower energy consumption</p>
              </div>
            </StyledComparison>

            <div className="space-y-2">
              <h3 className="text-lg font-mono font-bold text-terminal-text">Alignment with Modern Architecture</h3>
              <p className="text-terminal-dim font-mono leading-relaxed">
                Our balanced ternary implementation leverages modern technology:
              </p>
              <ul className="space-y-1 mt-2 text-terminal-dim font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>
                    <strong>Next.js Server Components:</strong> Optimal rendering of ternary visualizations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>
                    <strong>React State Management:</strong> Efficient handling of ternary computations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>
                    <strong>TypeScript Type Safety:</strong> Strict typing for ternary operations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>
                    <strong>Styled-components:</strong> Consistent visualization of ternary data
                  </span>
                </li>
              </ul>

              <TechnicalNote>
                All ternary operations are implemented with strict TypeScript types and validated through our
                comprehensive test suite, ensuring type safety across the entire application.
              </TechnicalNote>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-mono font-bold text-terminal-text">Energy Efficiency</h3>
              <p className="text-terminal-dim font-mono leading-relaxed">
                Balanced ternary provides natural energy savings:
              </p>
              <ul className="space-y-1 mt-2 text-terminal-dim font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Fewer digits needed for number representation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>More efficient arithmetic operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Reduced memory requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Lower processing power needs</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-mono font-bold text-terminal-text">Quantum Resistance</h3>
              <p className="text-terminal-dim font-mono leading-relaxed">
                Our balanced ternary architecture provides natural quantum resistance:
              </p>
              <ul className="space-y-1 mt-2 text-terminal-dim font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Three-state quantum bits align with ternary logic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Isogeny-based cryptography implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terminal-accent font-bold">$&gt;</span>
                  <span>Quantum-resistant hash functions</span>
                </li>
              </ul>
            </div>
          </div>
        </StyledSection>
      </section>

      <section>
        <h2 className="text-2xl font-mono font-bold text-terminal-accent mb-4">Looking Forward</h2>
        <section className="backdrop-blur-sm bg-black/30 border border-terminal-border/30 rounded-lg p-6 terminal-glow">
          <p className="text-terminal-dim font-mono leading-relaxed">
            The introduction of balanced ternary computing in blockchain technology, combined with our modern
            React/Next.js architecture, represents a fundamental advancement in:
          </p>
          <ul className="space-y-1 mt-4 text-terminal-dim font-mono">
            <li className="flex items-start gap-2">
              <span className="text-terminal-accent font-bold">$&gt;</span>
              <span>Computational efficiency</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-terminal-accent font-bold">$&gt;</span>
              <span>Energy sustainability</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-terminal-accent font-bold">$&gt;</span>
              <span>Quantum resistance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-terminal-accent font-bold">$&gt;</span>
              <span>Developer experience</span>
            </li>
          </ul>
          <p className="text-terminal-dim font-mono leading-relaxed mt-4">
            Our implementation demonstrates that by revisiting fundamental computing principles through the lens of
            modern technology, we can create more efficient and sustainable blockchain solutions.
          </p>
        </section>
      </section>
    </div>
  )
}

