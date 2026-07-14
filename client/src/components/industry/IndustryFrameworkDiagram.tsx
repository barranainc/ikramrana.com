/**
 * IndustryFrameworkDiagram
 * Parses "Stage N: ..." lines from the framework content and renders
 * a numbered vertical stack with connecting arrows.
 * Blueprint aesthetic: dark navy, electric accents, mono labels.
 */

interface Stage {
  num: string;
  title: string;
  desc: string;
}

function parseStages(content: string): Stage[] {
  const paragraphs = content.split('\\n').filter(Boolean);
  const stages: Stage[] = [];
  for (const para of paragraphs) {
    const match = para.match(/^Stage\s+(\d+):\s*(.+?)(?:\.\s+(.+))?$/i);
    if (match) {
      const num = match[1];
      const rest = para.slice(match[0].indexOf(':') + 1).trim();
      // First sentence = title, rest = desc
      const dotIdx = rest.indexOf('. ');
      const title = dotIdx > -1 ? rest.slice(0, dotIdx + 1) : rest.slice(0, 60);
      const desc = dotIdx > -1 ? rest.slice(dotIdx + 2, dotIdx + 120) : '';
      stages.push({ num, title, desc });
    }
  }
  return stages;
}

export default function IndustryFrameworkDiagram({ content }: { content: string }) {
  const stages = parseStages(content);
  if (stages.length === 0) return null;

  return (
    <figure className="my-8 not-prose" aria-label="Adoption framework stages">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="font-mono text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 border"
          style={{ color: '#60a5fa', borderColor: 'rgba(96,165,250,0.3)', background: 'rgba(96,165,250,0.06)' }}
        >
          FIG. — ADOPTION FRAMEWORK
        </span>
        <div className="h-px flex-1" style={{ background: 'rgba(96,165,250,0.2)' }} />
      </div>

      <div className="border p-6" style={{ background: '#070f1e', borderColor: '#1a2d4a' }}>
        <div className="space-y-0">
          {stages.map((stage, i) => (
            <div key={i}>
              {/* Stage row */}
              <div className="flex items-start gap-4">
                {/* Number + connector */}
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-9 h-9 flex items-center justify-center border font-mono text-sm font-bold"
                    style={{ color: '#60a5fa', borderColor: 'rgba(96,165,250,0.4)', background: 'rgba(96,165,250,0.08)' }}
                  >
                    {stage.num}
                  </div>
                  {i < stages.length - 1 && (
                    <div className="w-px flex-1 mt-1" style={{ background: 'rgba(96,165,250,0.15)', minHeight: '28px' }} />
                  )}
                </div>

                {/* Content */}
                <div className="pb-6 flex-1">
                  <p className="font-mono text-[12px] font-medium mb-1" style={{ color: '#f0f6ff' }}>
                    {stage.title}
                  </p>
                  {stage.desc && (
                    <p className="font-sans text-[12px] leading-relaxed" style={{ color: '#c8d8ec' }}>
                      {stage.desc}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p
          className="font-mono text-[10px] tracking-wider mt-2 text-right border-t pt-3"
          style={{ color: '#6a8aaa', borderColor: '#1a2d4a' }}
        >
          IMPLEMENTATION SEQUENCE · IKRAMRANA.COM
        </p>
      </div>
    </figure>
  );
}
