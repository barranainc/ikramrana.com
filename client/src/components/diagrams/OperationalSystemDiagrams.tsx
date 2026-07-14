/*
 * DESIGN: The Architect's Blueprint — LIGHT THEME
 * Operational System Diagrams — Fragmented vs Coherent
 * Used in the "Why Most AI Implementations Break Operations" section on Home.tsx
 * Style: Blueprint / technical diagram aesthetic, flat nodes with connectors
 */

export function FragmentedSystemDiagram() {
  return (
    <svg
      viewBox="0 0 400 320"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-label="Fragmented AI system diagram showing disconnected tools"
    >
      {/* Background */}
      <rect width="400" height="320" rx="12" fill="#fff5f5" stroke="#fecaca" strokeWidth="1.5" />

      {/* Title */}
      <text x="200" y="26" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#ef4444" letterSpacing="2" fontWeight="600">
        FRAGMENTED SYSTEM
      </text>

      {/* ── Scattered tool nodes ── */}
      {/* CRM — top left */}
      <rect x="24" y="44" width="72" height="36" rx="6" fill="#fff" stroke="#fca5a5" strokeWidth="1.5" />
      <text x="60" y="58" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#dc2626" fontWeight="700">CRM</text>
      <text x="60" y="71" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#ef4444">contacts</text>

      {/* AI Tool — top right */}
      <rect x="304" y="44" width="72" height="36" rx="6" fill="#fff" stroke="#fca5a5" strokeWidth="1.5" />
      <text x="340" y="58" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#dc2626" fontWeight="700">AI TOOL</text>
      <text x="340" y="71" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#ef4444">outputs</text>

      {/* Sheets — middle left */}
      <rect x="24" y="138" width="72" height="36" rx="6" fill="#fff" stroke="#fca5a5" strokeWidth="1.5" />
      <text x="60" y="152" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#dc2626" fontWeight="700">SHEETS</text>
      <text x="60" y="165" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#ef4444">manual data</text>

      {/* Email — middle right */}
      <rect x="304" y="138" width="72" height="36" rx="6" fill="#fff" stroke="#fca5a5" strokeWidth="1.5" />
      <text x="340" y="152" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#dc2626" fontWeight="700">EMAIL</text>
      <text x="340" y="165" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#ef4444">untracked</text>

      {/* Dashboard — bottom center */}
      <rect x="164" y="230" width="72" height="36" rx="6" fill="#fff" stroke="#fca5a5" strokeWidth="1.5" />
      <text x="200" y="244" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#dc2626" fontWeight="700">DASHBOARD</text>
      <text x="200" y="257" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#ef4444">stale data</text>

      {/* ── Chaotic / crossed connectors ── */}
      {/* CRM → AI Tool (diagonal) */}
      <line x1="96" y1="62" x2="304" y2="62" stroke="#fca5a5" strokeWidth="1.2" strokeDasharray="4 3" />
      {/* CRM → Sheets */}
      <line x1="60" y1="80" x2="60" y2="138" stroke="#fca5a5" strokeWidth="1.2" strokeDasharray="4 3" />
      {/* AI Tool → Email */}
      <line x1="340" y1="80" x2="340" y2="138" stroke="#fca5a5" strokeWidth="1.2" strokeDasharray="4 3" />
      {/* Sheets → Dashboard (diagonal) */}
      <line x1="96" y1="156" x2="164" y2="248" stroke="#fca5a5" strokeWidth="1.2" strokeDasharray="4 3" />
      {/* Email → Dashboard (diagonal) */}
      <line x1="304" y1="156" x2="236" y2="248" stroke="#fca5a5" strokeWidth="1.2" strokeDasharray="4 3" />
      {/* CRM → Dashboard (long diagonal crossing) */}
      <line x1="96" y1="75" x2="164" y2="235" stroke="#fca5a5" strokeWidth="1" strokeDasharray="3 4" opacity="0.5" />
      {/* AI Tool → Sheets (crossing) */}
      <line x1="304" y1="75" x2="96" y2="150" stroke="#fca5a5" strokeWidth="1" strokeDasharray="3 4" opacity="0.5" />

      {/* ── Problem labels ── */}
      <rect x="120" y="100" width="160" height="18" rx="3" fill="#fee2e2" />
      <text x="200" y="113" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#dc2626">No ownership · Manual reconciliation</text>

      <rect x="120" y="122" width="160" height="18" rx="3" fill="#fee2e2" />
      <text x="200" y="135" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#dc2626">Decision fatigue · Validation gaps</text>

      {/* ── Warning icon center ── */}
      <circle cx="200" cy="186" r="16" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1.5" />
      <text x="200" y="191" textAnchor="middle" fontFamily="sans-serif" fontSize="16" fill="#ef4444">!</text>
    </svg>
  );
}

export function CoherentSystemDiagram() {
  return (
    <svg
      viewBox="0 0 400 320"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-label="Coherent AI system diagram showing structured decision flow"
    >
      {/* Background */}
      <rect width="400" height="320" rx="12" fill="#f0f7ff" stroke="#93c5fd" strokeWidth="1.5" />

      {/* Title */}
      <text x="200" y="26" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#2563eb" letterSpacing="2" fontWeight="600">
        COHERENT SYSTEM
      </text>

      {/* ── Vertical flow layout ── */}
      {/* Node dimensions */}
      {/* Layer 1: Decision Hub — top center */}
      <rect x="134" y="40" width="132" height="40" rx="8" fill="#1d4ed8" stroke="#1d4ed8" strokeWidth="0" />
      <text x="200" y="57" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#fff" fontWeight="700" letterSpacing="1">DECISION HUB</text>
      <text x="200" y="71" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#bfdbfe">central orchestration</text>

      {/* Arrow down */}
      <line x1="200" y1="80" x2="200" y2="104" stroke="#3b82f6" strokeWidth="2" />
      <polygon points="194,100 200,112 206,100" fill="#3b82f6" />

      {/* Layer 2: AI Layer — center */}
      <rect x="134" y="112" width="132" height="40" rx="8" fill="#fff" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="200" y="129" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#1d4ed8" fontWeight="700" letterSpacing="1">AI LAYER</text>
      <text x="200" y="143" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#3b82f6">automated execution</text>

      {/* Arrow down */}
      <line x1="200" y1="152" x2="200" y2="172" stroke="#3b82f6" strokeWidth="2" />
      <polygon points="194,168 200,180 206,168" fill="#3b82f6" />

      {/* Layer 3: Human Review — center */}
      <rect x="134" y="180" width="132" height="40" rx="8" fill="#fff" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="200" y="197" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#1d4ed8" fontWeight="700" letterSpacing="1">HUMAN REVIEW</text>
      <text x="200" y="211" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#3b82f6">judgment preserved</text>

      {/* Arrow down */}
      <line x1="200" y1="220" x2="200" y2="240" stroke="#3b82f6" strokeWidth="2" />
      <polygon points="194,236 200,248 206,236" fill="#3b82f6" />

      {/* Layer 4: Compliance Validation — bottom left */}
      <rect x="30" y="248" width="130" height="40" rx="8" fill="#fff" stroke="#6366f1" strokeWidth="1.5" />
      <text x="95" y="265" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#4f46e5" fontWeight="700" letterSpacing="1">COMPLIANCE</text>
      <text x="95" y="279" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#6366f1">validation enforced</text>

      {/* Layer 5: Audit Trail — bottom right */}
      <rect x="240" y="248" width="130" height="40" rx="8" fill="#fff" stroke="#6366f1" strokeWidth="1.5" />
      <text x="305" y="265" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#4f46e5" fontWeight="700" letterSpacing="1">AUDIT TRAIL</text>
      <text x="305" y="279" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#6366f1">every decision logged</text>

      {/* Fork arrows from Human Review to Compliance and Audit */}
      <line x1="200" y1="248" x2="160" y2="248" stroke="#6366f1" strokeWidth="1.5" />
      <line x1="160" y1="248" x2="95" y2="248" stroke="#6366f1" strokeWidth="1.5" />
      <polygon points="99,242 87,248 99,254" fill="#6366f1" />

      <line x1="200" y1="248" x2="240" y2="248" stroke="#6366f1" strokeWidth="1.5" />
      <line x1="240" y1="248" x2="305" y2="248" stroke="#6366f1" strokeWidth="1.5" />
      <polygon points="301,242 313,248 301,254" fill="#6366f1" />

      {/* ── Benefit labels on right side ── */}
      <rect x="348" y="52" width="44" height="14" rx="3" fill="#dbeafe" />
      <text x="370" y="63" textAnchor="middle" fontFamily="sans-serif" fontSize="7.5" fill="#1d4ed8">ownership</text>

      <rect x="348" y="124" width="44" height="14" rx="3" fill="#dbeafe" />
      <text x="370" y="135" textAnchor="middle" fontFamily="sans-serif" fontSize="7.5" fill="#1d4ed8">clean flow</text>

      <rect x="348" y="192" width="44" height="14" rx="3" fill="#dbeafe" />
      <text x="370" y="203" textAnchor="middle" fontFamily="sans-serif" fontSize="7.5" fill="#1d4ed8">traceable</text>

      {/* Connector lines to benefit labels */}
      <line x1="266" y1="60" x2="348" y2="59" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="266" y1="132" x2="348" y2="131" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="266" y1="200" x2="348" y2="199" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 2" />

      {/* ── Checkmark icon top-left ── */}
      <circle cx="28" cy="60" r="12" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1" />
      <polyline points="22,60 26,65 34,54" stroke="#1d4ed8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
