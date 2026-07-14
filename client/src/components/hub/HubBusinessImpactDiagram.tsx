/**
 * HubBusinessImpactDiagram
 * Renders a "Without AI vs With AI" before/after comparison panel
 * for the "Why This Matters for Businesses" section.
 * Blueprint aesthetic: dark background, rose left / teal right split.
 */

interface ImpactPoint {
  without: string;
  with: string;
}

// Static impact points per topic — derived from the document content
const IMPACT_MAP: Record<string, ImpactPoint[]> = {
  'what-is-ai-automation-for-small-businesses': [
    { without: 'Manual data entry consumes 20+ hrs/week', with: 'Automated extraction: 3 hrs/week on exceptions' },
    { without: 'Team capacity lost to repetitive tasks', with: 'Team focused on revenue-generating work' },
    { without: 'Human errors in routine processing', with: 'Consistent, rule-based accuracy at scale' },
  ],
  'what-is-ai-adoption-for-businesses': [
    { without: 'Ad-hoc tool adoption with no strategy', with: 'Structured five-stage adoption roadmap' },
    { without: 'Low ROI from disconnected AI tools', with: 'Compounding returns from integrated systems' },
    { without: 'Resistance and confusion from teams', with: 'Governed rollout with clear accountability' },
  ],
  'what-is-ai-workflow-automation': [
    { without: 'Tasks handed off manually between systems', with: 'End-to-end workflows run without intervention' },
    { without: 'Bottlenecks at every handoff point', with: 'Trigger → Logic → Action in milliseconds' },
    { without: 'Errors multiply across workflow steps', with: 'Errors caught at the logic layer, not the end' },
  ],
  'what-are-ai-agents-for-businesses': [
    { without: 'Staff monitors inboxes and routes manually', with: 'Agent perceives, decides, and acts autonomously' },
    { without: 'Delayed responses to routine requests', with: 'Instant action within defined boundaries' },
    { without: 'Human judgment required for every step', with: 'Human oversight reserved for exceptions only' },
  ],
  'ai-for-small-businesses-guide': [
    { without: 'No clear starting point for AI adoption', with: 'Priority → Pilot → Scale framework' },
    { without: 'Expensive failed AI experiments', with: 'Low-risk pilots before full deployment' },
    { without: 'AI adds complexity instead of removing it', with: 'AI targets highest-volume, simplest processes first' },
  ],
  'ai-decision-systems-for-business': [
    { without: 'Every decision requires human review', with: 'Tier 1–3 decisions handled by the system' },
    { without: 'Inconsistent decisions across the team', with: 'Rule-based consistency at any volume' },
    { without: 'Decision bottlenecks slow operations', with: 'Human judgment reserved for complex cases' },
  ],
  'ai-governance-for-businesses': [
    { without: 'No accountability when AI makes errors', with: 'Named human owner for every AI system' },
    { without: 'AI decisions are opaque and unexplainable', with: 'Documented, auditable decision processes' },
    { without: 'Compliance risk as regulations evolve', with: 'Governance framework built ahead of regulation' },
  ],
};

export default function HubBusinessImpactDiagram({ slug }: { slug: string }) {
  const points = IMPACT_MAP[slug];
  if (!points) return null;

  return (
    <figure className="my-8 not-prose" aria-label="Business impact comparison">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="font-mono text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 border"
          style={{ color: '#22d3ee', borderColor: 'rgba(34,211,238,0.3)', background: 'rgba(34,211,238,0.06)' }}
        >
          FIG. — OPERATIONAL IMPACT
        </span>
        <div className="h-px flex-1" style={{ background: 'rgba(34,211,238,0.2)' }} />
      </div>

      <div
        className="border"
        style={{ background: '#070f1e', borderColor: '#1a2d4a' }}
      >
        {/* Column headers */}
        <div className="grid grid-cols-2 border-b" style={{ borderColor: '#1a2d4a' }}>
          <div
            className="flex items-center gap-2 px-5 py-3 border-r"
            style={{ borderColor: '#1a2d4a', background: 'rgba(248,113,113,0.06)' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="6" stroke="#f87171" strokeWidth="1.2" />
              <path d="M4.5 4.5l5 5M9.5 4.5l-5 5" stroke="#f87171" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span className="font-mono text-[10px] tracking-[0.12em] uppercase" style={{ color: '#f87171' }}>
              Without AI
            </span>
          </div>
          <div
            className="flex items-center gap-2 px-5 py-3"
            style={{ background: 'rgba(34,211,238,0.06)' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="6" stroke="#22d3ee" strokeWidth="1.2" />
              <path d="M4 7l2.5 2.5L10 4.5" stroke="#22d3ee" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-mono text-[10px] tracking-[0.12em] uppercase" style={{ color: '#22d3ee' }}>
              With AI
            </span>
          </div>
        </div>

        {/* Rows */}
        {points.map((point, i) => (
          <div
            key={i}
            className="grid grid-cols-2 border-b last:border-0"
            style={{ borderColor: '#1a2d4a' }}
          >
            <div
              className="px-5 py-4 border-r"
              style={{ borderColor: '#1a2d4a', background: i % 2 === 0 ? 'rgba(248,113,113,0.03)' : 'transparent' }}
            >
              <p className="font-sans text-[12px] leading-relaxed" style={{ color: '#c8d8ec' }}>
                {point.without}
              </p>
            </div>
            <div
              className="px-5 py-4"
              style={{ background: i % 2 === 0 ? 'rgba(34,211,238,0.03)' : 'transparent' }}
            >
              <p className="font-sans text-[12px] leading-relaxed font-medium" style={{ color: '#d1faf8' }}>
                {point.with}
              </p>
            </div>
          </div>
        ))}

        <p
          className="font-mono text-[10px] tracking-wider px-5 py-3 text-right border-t"
          style={{ color: '#6a8aaa', borderColor: '#1a2d4a' }}
        >
          OPERATIONAL COMPARISON · IKRAMRANA.COM
        </p>
      </div>
    </figure>
  );
}
