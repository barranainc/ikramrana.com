/**
 * HubExampleDiagram
 * Renders the practical business example as a process flow.
 * Shows: Manual Process → AI Intervention → Outcome
 * Blueprint aesthetic: dark background, electric flow arrows.
 */

// Static process flows per page — derived from document examples
const FLOW_MAP: Record<string, { title: string; before: string[]; after: string[]; outcome: string }> = {
  'what-is-ai-automation-for-small-businesses': {
    title: 'Immigration Consulting Firm',
    before: ['Receive intake form', 'Manual data extraction', 'Database verification', 'Create case file', 'Assign consultant'],
    after: ['Receive intake form', 'AI extracts data', 'AI verifies database', 'AI creates case file', 'AI routes to consultant'],
    outcome: '20 hrs/week → 3 hrs/week on exceptions',
  },
  'what-is-ai-adoption-for-businesses': {
    title: 'Five-Stage Adoption Path',
    before: ['Random tool adoption', 'No process mapping', 'Disconnected systems', 'No measurement', 'Stalled at pilot'],
    after: ['Assessment', 'Prioritization', 'Pilot', 'Measurement', 'Scale'],
    outcome: 'Structured adoption with compounding ROI',
  },
  'what-is-ai-workflow-automation': {
    title: 'Client Onboarding Workflow',
    before: ['Form submitted', 'Staff reads email', 'Manual data entry', 'Staff creates record', 'Staff assigns task'],
    after: ['Form submitted', 'Trigger fires', 'Logic layer routes', 'Record auto-created', 'Task auto-assigned'],
    outcome: 'Zero manual steps for standard onboarding',
  },
  'what-are-ai-agents-for-businesses': {
    title: 'AI Agent Cycle',
    before: ['Input arrives', 'Staff reads input', 'Staff decides action', 'Staff executes task', 'Staff logs outcome'],
    after: ['Input arrives', 'Agent perceives', 'Agent decides', 'Agent acts', 'Agent logs outcome'],
    outcome: 'Autonomous operation within defined boundaries',
  },
  'ai-for-small-businesses-guide': {
    title: 'Priority → Pilot → Scale',
    before: ['Identify all processes', 'Pick the most visible', 'Full deployment', 'No measurement', 'Abandon on failure'],
    after: ['Map top 3–5 processes', 'Rank by volume + impact', 'Pilot highest-value', 'Measure 30-day results', 'Scale or adjust'],
    outcome: 'Low-risk path to sustainable AI adoption',
  },
  'ai-decision-systems-for-business': {
    title: 'Three-Tier Decision Architecture',
    before: ['All decisions → human review', 'Inconsistent outcomes', 'Bottlenecks at scale', 'Slow response times', 'High cognitive load'],
    after: ['Tier 1: AI classifies', 'Tier 2: AI predicts', 'Tier 3: AI optimises', 'Human reviews exceptions', 'Fast consistent output'],
    outcome: 'Human judgment reserved for complex decisions only',
  },
  'ai-governance-for-businesses': {
    title: 'Five-Pillar Governance Model',
    before: ['No named AI owner', 'Opaque AI decisions', 'No usage boundaries', 'No monitoring', 'No error process'],
    after: ['Accountability assigned', 'Decisions documented', 'Boundaries defined', 'Active monitoring', 'Remediation process'],
    outcome: 'AI that is safe, compliant, and auditable',
  },
};

export default function HubExampleDiagram({ slug }: { slug: string }) {
  const flow = FLOW_MAP[slug];
  if (!flow) return null;

  return (
    <figure className="my-8 not-prose" aria-label={`Process flow: ${flow.title}`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="font-mono text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 border"
          style={{ color: '#34d399', borderColor: 'rgba(52,211,153,0.3)', background: 'rgba(52,211,153,0.06)' }}
        >
          FIG. — PROCESS FLOW
        </span>
        <div className="h-px flex-1" style={{ background: 'rgba(52,211,153,0.2)' }} />
      </div>

      <div
        className="border p-5"
        style={{ background: '#070f1e', borderColor: '#1a2d4a' }}
      >
        {/* Title */}
        <p className="font-mono text-[11px] tracking-wide mb-5" style={{ color: '#34d399' }}>
          {flow.title.toUpperCase()}
        </p>

        {/* Two-column flow comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          {/* Before column */}
          <div>
            <p
              className="font-mono text-[10px] tracking-[0.12em] uppercase mb-3 flex items-center gap-2"
              style={{ color: '#f87171' }}
            >
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: '#f87171' }}
              />
              Manual process
            </p>
            <div className="space-y-1">
              {flow.before.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span
                    className="shrink-0 w-5 h-5 flex items-center justify-center border font-mono text-[10px]"
                    style={{ borderColor: '#2d1a1a', color: '#f87171', background: 'rgba(248,113,113,0.08)' }}
                  >
                    {i + 1}
                  </span>
                  <p className="font-sans text-[12px]" style={{ color: '#c8d8ec' }}>{step}</p>
                  {i < flow.before.length - 1 && (
                    <svg className="ml-auto shrink-0" width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M5 1v8M2 6l3 3 3-3" stroke="#2d1a1a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* After column */}
          <div>
            <p
              className="font-mono text-[10px] tracking-[0.12em] uppercase mb-3 flex items-center gap-2"
              style={{ color: '#34d399' }}
            >
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: '#34d399', boxShadow: '0 0 6px rgba(52,211,153,0.5)' }}
              />
              AI-automated process
            </p>
            <div className="space-y-1">
              {flow.after.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span
                    className="shrink-0 w-5 h-5 flex items-center justify-center border font-mono text-[10px]"
                    style={{ borderColor: '#1a3d2d', color: '#34d399', background: 'rgba(52,211,153,0.08)' }}
                  >
                    {i + 1}
                  </span>
                  <p className="font-sans text-[12px] font-medium" style={{ color: '#d1faf8' }}>{step}</p>
                  {i < flow.after.length - 1 && (
                    <svg className="ml-auto shrink-0" width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M5 1v8M2 6l3 3 3-3" stroke="#1a3d2d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Outcome bar */}
        <div
          className="flex items-center gap-3 px-4 py-3 border-t"
          style={{ borderColor: '#1a2d4a', background: 'rgba(52,211,153,0.05)' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7l3.5 3.5L12 3" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="font-sans text-[12px] font-semibold" style={{ color: '#34d399' }}>
            Outcome: {flow.outcome}
          </p>
        </div>

        <p
          className="font-mono text-[10px] tracking-wider mt-3 text-right"
          style={{ color: '#6a8aaa' }}
        >
          PROCESS ANALYSIS · IKRAMRANA.COM
        </p>
      </div>
    </figure>
  );
}
