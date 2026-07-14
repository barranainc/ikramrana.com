/**
 * HubMistakesDiagram
 * Parses "Common Mistakes" section content and renders a numbered warning list.
 * Blueprint aesthetic: dark background, rose/amber warning accents.
 */

interface Mistake {
  number: number;
  title: string;
  body: string;
}

function parseMistakes(content: string): Mistake[] {
  const text = content.replace(/\\n/g, '\n');
  const ordinals = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];
  const items: Mistake[] = [];

  for (let i = 0; i < ordinals.length; i++) {
    const ord = ordinals[i];
    const regex = new RegExp(
      `The ${ord} mistake is ([^.]+)\\.\\s*([^]*?)(?=The (?:${ordinals.join('|')}) mistake|$)`,
      'i'
    );
    const match = text.match(regex);
    if (match) {
      const title = match[1].trim();
      const body = match[2].trim().replace(/\n+/g, ' ').slice(0, 180);
      items.push({ number: i + 1, title, body });
    }
  }

  // Fallback: split by newlines that mention "mistake"
  if (items.length === 0) {
    const sentences = text.split(/\n/).filter(Boolean);
    sentences.forEach((s, i) => {
      if (s.toLowerCase().includes('mistake')) {
        const dotIdx = s.indexOf('.');
        const title = dotIdx > 0 ? s.slice(0, dotIdx) : s.slice(0, 80);
        const body = dotIdx > 0 ? s.slice(dotIdx + 1).trim().slice(0, 160) : '';
        items.push({ number: i + 1, title, body });
      }
    });
  }

  return items.slice(0, 5);
}

const WARNING_COLORS = [
  '#f87171', // rose
  '#fb923c', // orange
  '#fbbf24', // amber
  '#a78bfa', // violet
  '#60a5fa', // blue
];

export default function HubMistakesDiagram({ content }: { content: string }) {
  const mistakes = parseMistakes(content);
  if (mistakes.length < 2) return null;

  return (
    <figure className="my-8 not-prose" aria-label="Common mistakes diagram">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="font-mono text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 border"
          style={{ color: '#f87171', borderColor: 'rgba(248,113,113,0.35)', background: 'rgba(248,113,113,0.08)' }}
        >
          FIG. — FAILURE PATTERNS
        </span>
        <div className="h-px flex-1" style={{ background: 'rgba(248,113,113,0.2)' }} />
      </div>

      <div
        className="border p-6"
        style={{ background: '#070f1e', borderColor: '#2d1a1a' }}
      >
        {/* Warning header bar */}
        <div
          className="flex items-center gap-3 mb-5 pb-4 border-b"
          style={{ borderColor: '#2d1a1a' }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M10 2L2 17h16L10 2z" stroke="#f87171" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M10 8v4M10 14v1" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="font-mono text-[11px] tracking-wide" style={{ color: '#f87171' }}>
            {mistakes.length} COMMON FAILURE PATTERNS IDENTIFIED
          </span>
        </div>

        {/* Mistake items */}
        <div className="space-y-3">
          {mistakes.map((m, i) => {
            const color = WARNING_COLORS[i % WARNING_COLORS.length];
            return (
              <div
                key={i}
                className="flex items-start gap-4 p-4 border-l-2"
                style={{ borderLeftColor: color, background: `${color}08` }}
              >
                {/* Number */}
                <span
                  className="shrink-0 font-mono text-[11px] font-bold mt-0.5"
                  style={{ color }}
                >
                  #{m.number}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p
                    className="font-sans text-[13px] font-semibold leading-tight mb-1.5"
                    style={{ color: '#f0f6ff' }}
                  >
                    {m.title}
                  </p>
                  {m.body && (
                    <p
                      className="font-sans text-[12px] leading-relaxed"
                      style={{ color: '#c8d8ec' }}
                    >
                      {m.body}
                    </p>
                  )}
                </div>

                {/* Severity dot */}
                <div
                  className="shrink-0 w-2 h-2 rounded-full mt-1.5"
                  style={{ background: color, boxShadow: `0 0 6px ${color}60` }}
                />
              </div>
            );
          })}
        </div>

        <p
          className="font-mono text-[10px] tracking-wider mt-4 text-right"
          style={{ color: '#6a8aaa' }}
        >
          FAILURE ANALYSIS · IKRAMRANA.COM
        </p>
      </div>
    </figure>
  );
}
