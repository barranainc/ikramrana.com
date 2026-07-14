/**
 * IndustryExpectationsDiagram
 * Shows quantified ROI metrics for each industry as a horizontal bar chart.
 * Blueprint aesthetic: dark navy, amber/teal accents, mono labels.
 */

interface Metric {
  label: string;
  value: number; // percentage 0-100 for bar width
  display: string;
  color: string;
}

const METRICS: Record<string, Metric[]> = {
  'ai-automation-for-law-firms': [
    { label: 'Admin tasks automated', value: 80, display: '70–80%', color: '#2dd4bf' },
    { label: 'Time saved per week', value: 70, display: '20–30 hrs', color: '#60a5fa' },
    { label: 'Billing accuracy improvement', value: 85, display: '85%+', color: '#a78bfa' },
    { label: 'Client intake speed', value: 75, display: '3× faster', color: '#f59e0b' },
  ],
  'ai-automation-for-immigration-consultants': [
    { label: 'Intake automation coverage', value: 80, display: '70–85%', color: '#2dd4bf' },
    { label: 'Time saved per week', value: 85, display: '15–20 hrs', color: '#60a5fa' },
    { label: 'Document errors reduced', value: 90, display: '90%', color: '#a78bfa' },
    { label: 'Deadline miss rate', value: 95, display: 'Near zero', color: '#f59e0b' },
  ],
  'ai-automation-for-physiotherapy-clinics': [
    { label: 'No-show reduction', value: 60, display: '40–60%', color: '#2dd4bf' },
    { label: 'Admin time saved', value: 70, display: '10–15 hrs/wk', color: '#60a5fa' },
    { label: 'Appointment fill rate', value: 85, display: '85%+', color: '#a78bfa' },
    { label: 'Patient satisfaction', value: 80, display: 'Measurable lift', color: '#f59e0b' },
  ],
  'ai-automation-for-accounting-firms': [
    { label: 'Data entry automated', value: 85, display: '80–90%', color: '#2dd4bf' },
    { label: 'Time saved per client', value: 70, display: '3–5 hrs/mo', color: '#60a5fa' },
    { label: 'Error rate reduction', value: 90, display: '90%+', color: '#a78bfa' },
    { label: 'Capacity increase', value: 40, display: '30–40%', color: '#f59e0b' },
  ],
  'ai-automation-for-real-estate-agents': [
    { label: 'Lead follow-up speed', value: 95, display: 'Instant', color: '#2dd4bf' },
    { label: 'Admin time saved', value: 65, display: '10–15 hrs/wk', color: '#60a5fa' },
    { label: 'Lead conversion lift', value: 30, display: '20–30%', color: '#a78bfa' },
    { label: 'Listing time reduced', value: 70, display: '70%', color: '#f59e0b' },
  ],
  'ai-automation-for-dental-clinics': [
    { label: 'No-show reduction', value: 50, display: '30–50%', color: '#2dd4bf' },
    { label: 'Chair utilisation lift', value: 20, display: '15–20%', color: '#60a5fa' },
    { label: 'Admin time saved', value: 65, display: '8–12 hrs/wk', color: '#a78bfa' },
    { label: 'Recall rate improvement', value: 40, display: '35–40%', color: '#f59e0b' },
  ],
  'ai-automation-for-construction-companies': [
    { label: 'Documentation time saved', value: 70, display: '60–70%', color: '#2dd4bf' },
    { label: 'Delay reduction', value: 30, display: '20–30%', color: '#60a5fa' },
    { label: 'Compliance coverage', value: 95, display: '95%+', color: '#a78bfa' },
    { label: 'Coordination errors', value: 80, display: '80% fewer', color: '#f59e0b' },
  ],
  'ai-automation-for-ecommerce-businesses': [
    { label: 'Support tickets automated', value: 70, display: '60–70%', color: '#2dd4bf' },
    { label: 'Order processing speed', value: 90, display: '5× faster', color: '#60a5fa' },
    { label: 'Returns handling time', value: 75, display: '75% faster', color: '#a78bfa' },
    { label: 'Inventory accuracy', value: 95, display: '95%+', color: '#f59e0b' },
  ],
};

export default function IndustryExpectationsDiagram({ slug }: { slug: string }) {
  const metrics = METRICS[slug];
  if (!metrics) return null;

  return (
    <figure className="my-8 not-prose" aria-label="Expected results and ROI metrics">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="font-mono text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 border"
          style={{ color: '#f59e0b', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.06)' }}
        >
          FIG. — EXPECTED RESULTS
        </span>
        <div className="h-px flex-1" style={{ background: 'rgba(245,158,11,0.2)' }} />
      </div>

      <div className="border p-6" style={{ background: '#070f1e', borderColor: '#1a2d4a' }}>
        <div className="space-y-5">
          {metrics.map((metric, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-sans text-[12px]" style={{ color: '#c8d8ec' }}>{metric.label}</span>
                <span className="font-mono text-[12px] font-bold" style={{ color: metric.color }}>{metric.display}</span>
              </div>
              {/* Bar */}
              <div className="h-1.5 w-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <div
                  className="h-full transition-all"
                  style={{ width: `${metric.value}%`, background: metric.color, opacity: 0.7 }}
                />
              </div>
            </div>
          ))}
        </div>

        <p
          className="font-mono text-[10px] tracking-wider mt-6 text-right border-t pt-3"
          style={{ color: '#6a8aaa', borderColor: '#1a2d4a' }}
        >
          PERFORMANCE BENCHMARKS · IKRAMRANA.COM
        </p>
      </div>
    </figure>
  );
}
