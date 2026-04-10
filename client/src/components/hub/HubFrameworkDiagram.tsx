/**
 * HubFrameworkDiagram
 * Parses framework section content and renders a numbered vertical stack diagram.
 * Handles: "Layer N:", "Stage N:", "Tier N:", "Pillar N:", "Step N:", "Phase N:"
 * Blueprint aesthetic: dark navy background, electric accents, mono labels.
 */

interface FrameworkItem {
  number: string;
  label: string;
  body: string;
}

function parseFrameworkItems(content: string): FrameworkItem[] {
  const items: FrameworkItem[] = [];
  const pattern =
    /(?:Layer|Stage|Tier|Pillar|Step|Phase)\s+(\d+):\s*([^.]+)\.\s*([^]*?)(?=(?:Layer|Stage|Tier|Pillar|Step|Phase)\s+\d+:|$)/gi;

  const text = content.replace(/\\n/g, '\n');
  let match;
  while ((match = pattern.exec(text)) !== null) {
    const num = match[1];
    const label = match[2].trim();
    const body = match[3].trim().replace(/\n+/g, ' ').slice(0, 160);
    if (label && body) {
      items.push({ number: num, label, body });
    }
  }

  return items;
}

// Blueprint color palette — label colours are bright, body text is light
const COLORS = [
  { label: '#60a5fa', num: '#93c5fd' },  // blue
  { label: '#22d3ee', num: '#67e8f9' },  // cyan
  { label: '#a78bfa', num: '#c4b5fd' },  // violet
  { label: '#34d399', num: '#6ee7b7' },  // green
  { label: '#fbbf24', num: '#fcd34d' },  // amber
];

export default function HubFrameworkDiagram({ content, title }: { content: string; title: string }) {
  const items = parseFrameworkItems(content);
  if (items.length < 2) return null;

  return (
    <figure className="my-8 not-prose" aria-label={`Framework diagram: ${title}`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="font-mono text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 border"
          style={{ color: '#60a5fa', borderColor: 'rgba(96,165,250,0.35)', background: 'rgba(96,165,250,0.08)' }}
        >
          FIG. — FRAMEWORK ARCHITECTURE
        </span>
        <div className="h-px flex-1" style={{ background: 'rgba(96,165,250,0.2)' }} />
      </div>

      {/* Stack */}
      <div
        className="border p-6"
        style={{ background: '#070f1e', borderColor: '#1a2d4a' }}
      >
        <div className="space-y-0">
          {items.map((item, i) => {
            const col = COLORS[i % COLORS.length];
            const isLast = i === items.length - 1;
            return (
              <div key={i} className="relative">
                {/* Item row */}
                <div
                  className="flex items-start gap-4 p-4 border"
                  style={{ borderColor: '#1e3a5f', background: 'rgba(255,255,255,0.02)' }}
                >
                  {/* Number badge */}
                  <div
                    className="shrink-0 w-9 h-9 flex items-center justify-center border font-mono text-sm font-bold"
                    style={{ borderColor: col.label, color: col.num, background: `${col.label}18` }}
                  >
                    {item.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-sans text-[13px] font-semibold leading-tight mb-1.5"
                      style={{ color: col.label }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="font-sans text-[12px] leading-relaxed"
                      style={{ color: '#c8d8ec' }}
                    >
                      {item.body}
                    </p>
                  </div>

                  {/* Level indicator bar */}
                  <div
                    className="shrink-0 w-1 self-stretch"
                    style={{ background: `${col.label}35` }}
                  />
                </div>

                {/* Connector arrow between items */}
                {!isLast && (
                  <div className="flex justify-center py-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M8 2v10M4 9l4 4 4-4" stroke="#3b6eb5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Caption */}
        <p
          className="font-mono text-[10px] tracking-wider mt-4 text-right"
          style={{ color: '#6a8aaa' }}
        >
          {items.length}-LEVEL ARCHITECTURE · IKRAMRANA.COM
        </p>
      </div>
    </figure>
  );
}
