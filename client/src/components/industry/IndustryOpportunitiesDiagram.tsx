/**
 * IndustryOpportunitiesDiagram
 * Blueprint-style visual showing 4 key automation opportunities per industry.
 * Appears after "AI Automation Opportunities" section.
 * Design: dark navy bg, teal accents, mono labels — matches hub diagram aesthetic.
 */

interface OpportunityItem {
  area: string;
  impact: string;
  saving: string;
}

const OPPORTUNITIES: Record<string, OpportunityItem[]> = {
  'ai-automation-for-law-firms': [
    { area: 'Client Intake', impact: 'Structured intake forms + eligibility pre-screen', saving: '8–12 hrs/wk' },
    { area: 'Document Assembly', impact: 'Auto-generate contracts, letters, and filings', saving: '10–15 hrs/wk' },
    { area: 'Billing & Invoicing', impact: 'Automated time capture and invoice generation', saving: '4–6 hrs/wk' },
    { area: 'Client Communication', impact: 'Routine status updates and reminders', saving: '5–8 hrs/wk' },
  ],
  'ai-automation-for-immigration-consultants': [
    { area: 'Eligibility Assessment', impact: 'Multi-pathway screening from structured intake', saving: '6–10 hrs/wk' },
    { area: 'Document Tracking', impact: 'Automated checklists, reminders, and verification', saving: '15–20 hrs/wk' },
    { area: 'Deadline Management', impact: 'Government timelines and expiry date monitoring', saving: '3–5 hrs/wk' },
    { area: 'Client Updates', impact: 'Proactive case milestone notifications', saving: '4–7 hrs/wk' },
  ],
  'ai-automation-for-physiotherapy-clinics': [
    { area: 'Appointment Scheduling', impact: 'Online booking with automated confirmation', saving: '5–8 hrs/wk' },
    { area: 'No-Show Reduction', impact: 'Multi-channel reminders and rebooking flows', saving: '3–5 hrs/wk' },
    { area: 'Patient Intake', impact: 'Digital forms pre-populated from referrals', saving: '4–6 hrs/wk' },
    { area: 'Billing & Claims', impact: 'Insurance pre-authorization and claim submission', saving: '6–10 hrs/wk' },
  ],
  'ai-automation-for-accounting-firms': [
    { area: 'Document Collection', impact: 'Automated client portals and reminders', saving: '8–12 hrs/wk' },
    { area: 'Data Entry', impact: 'Bank feed categorisation and reconciliation', saving: '10–15 hrs/wk' },
    { area: 'Client Onboarding', impact: 'Structured intake and engagement letter generation', saving: '3–5 hrs/wk' },
    { area: 'Reporting', impact: 'Automated management accounts and dashboards', saving: '5–8 hrs/wk' },
  ],
  'ai-automation-for-real-estate-agents': [
    { area: 'Lead Management', impact: 'Automated follow-up sequences and lead scoring', saving: '6–10 hrs/wk' },
    { area: 'Listing Descriptions', impact: 'AI-generated property descriptions from data', saving: '3–5 hrs/wk' },
    { area: 'Appointment Scheduling', impact: 'Showing requests and confirmation automation', saving: '4–6 hrs/wk' },
    { area: 'Transaction Coordination', impact: 'Document collection and milestone tracking', saving: '5–8 hrs/wk' },
  ],
  'ai-automation-for-dental-clinics': [
    { area: 'Appointment Filling', impact: 'Automated recall and cancellation backfill', saving: '5–8 hrs/wk' },
    { area: 'No-Show Reduction', impact: 'Multi-channel reminders 48h and 2h before', saving: '3–5 hrs/wk' },
    { area: 'Patient Intake', impact: 'Digital health history forms pre-visit', saving: '2–4 hrs/wk' },
    { area: 'Insurance Verification', impact: 'Automated eligibility checks before appointments', saving: '4–6 hrs/wk' },
  ],
  'ai-automation-for-construction-companies': [
    { area: 'Project Documentation', impact: 'Automated daily reports and change orders', saving: '6–10 hrs/wk' },
    { area: 'Subcontractor Coordination', impact: 'Scheduling and milestone notification flows', saving: '5–8 hrs/wk' },
    { area: 'Safety Compliance', impact: 'Automated checklist distribution and tracking', saving: '3–5 hrs/wk' },
    { area: 'Procurement', impact: 'Purchase order generation and supplier follow-up', saving: '4–7 hrs/wk' },
  ],
  'ai-automation-for-ecommerce-businesses': [
    { area: 'Order Management', impact: 'Automated fulfilment routing and status updates', saving: '8–12 hrs/wk' },
    { area: 'Customer Support', impact: 'AI handles returns, tracking, and FAQs', saving: '10–15 hrs/wk' },
    { area: 'Inventory Management', impact: 'Reorder triggers and low-stock alerts', saving: '3–5 hrs/wk' },
    { area: 'Review & Feedback', impact: 'Automated post-purchase review requests', saving: '2–4 hrs/wk' },
  ],
};

export default function IndustryOpportunitiesDiagram({ slug }: { slug: string }) {
  const items = OPPORTUNITIES[slug];
  if (!items) return null;

  return (
    <figure className="my-8 not-prose" aria-label="Automation opportunities overview">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="font-mono text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 border"
          style={{ color: '#2dd4bf', borderColor: 'rgba(45,212,191,0.3)', background: 'rgba(45,212,191,0.06)' }}
        >
          FIG. — AUTOMATION OPPORTUNITIES
        </span>
        <div className="h-px flex-1" style={{ background: 'rgba(45,212,191,0.2)' }} />
      </div>

      <div className="border" style={{ background: '#070f1e', borderColor: '#1a2d4a' }}>
        {/* Column headers */}
        <div className="grid grid-cols-[1fr_2fr_auto] border-b text-left" style={{ borderColor: '#1a2d4a', background: 'rgba(45,212,191,0.04)' }}>
          <div className="px-4 py-3">
            <span className="font-mono text-[10px] tracking-[0.12em] uppercase" style={{ color: '#2dd4bf' }}>Area</span>
          </div>
          <div className="px-4 py-3 border-l" style={{ borderColor: '#1a2d4a' }}>
            <span className="font-mono text-[10px] tracking-[0.12em] uppercase" style={{ color: '#2dd4bf' }}>What AI Handles</span>
          </div>
          <div className="px-4 py-3 border-l" style={{ borderColor: '#1a2d4a' }}>
            <span className="font-mono text-[10px] tracking-[0.12em] uppercase" style={{ color: '#2dd4bf' }}>Time Saved</span>
          </div>
        </div>

        {/* Rows */}
        {items.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_2fr_auto] border-b last:border-0"
            style={{ borderColor: '#1a2d4a', background: i % 2 === 0 ? 'rgba(45,212,191,0.02)' : 'transparent' }}
          >
            <div className="px-4 py-4 flex items-center gap-2">
              <span
                className="shrink-0 w-5 h-5 flex items-center justify-center font-mono text-[9px] font-bold border"
                style={{ color: '#2dd4bf', borderColor: 'rgba(45,212,191,0.3)', background: 'rgba(45,212,191,0.08)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-mono text-[11px] font-medium" style={{ color: '#f0f6ff' }}>{item.area}</span>
            </div>
            <div className="px-4 py-4 border-l" style={{ borderColor: '#1a2d4a' }}>
              <p className="font-sans text-[12px] leading-relaxed" style={{ color: '#c8d8ec' }}>{item.impact}</p>
            </div>
            <div className="px-4 py-4 border-l flex items-center" style={{ borderColor: '#1a2d4a' }}>
              <span className="font-mono text-[11px] font-bold whitespace-nowrap" style={{ color: '#2dd4bf' }}>{item.saving}</span>
            </div>
          </div>
        ))}

        <p
          className="font-mono text-[10px] tracking-wider px-4 py-3 text-right border-t"
          style={{ color: '#6a8aaa', borderColor: '#1a2d4a' }}
        >
          AUTOMATION ANALYSIS · IKRAMRANA.COM
        </p>
      </div>
    </figure>
  );
}
