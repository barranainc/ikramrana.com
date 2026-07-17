/**
 * IndustryOpportunitiesDiagram
 * Blueprint-style visual showing 4 key automation opportunities per industry.
 * Appears after "AI Automation Opportunities" section.
 * Design: dark navy bg, teal accents, mono labels: matches hub diagram aesthetic.
 */

interface OpportunityItem {
  area: string;
  impact: string;
}

const OPPORTUNITIES: Record<string, OpportunityItem[]> = {
  'ai-automation-for-law-firms': [
    { area: 'Client Intake', impact: 'Structured intake forms + eligibility pre-screen' },
    { area: 'Document Assembly', impact: 'Auto-generate contracts, letters, and filings' },
    { area: 'Billing & Invoicing', impact: 'Automated time capture and invoice generation' },
    { area: 'Client Communication', impact: 'Routine status updates and reminders' },
  ],
  'ai-automation-for-immigration-consultants': [
    { area: 'Eligibility Assessment', impact: 'Multi-pathway screening from structured intake' },
    { area: 'Document Tracking', impact: 'Automated checklists, reminders, and verification' },
    { area: 'Deadline Management', impact: 'Government timelines and expiry date monitoring' },
    { area: 'Client Updates', impact: 'Proactive case milestone notifications' },
  ],
  'ai-automation-for-physiotherapy-clinics': [
    { area: 'Appointment Scheduling', impact: 'Online booking with automated confirmation' },
    { area: 'No-Show Reduction', impact: 'Multi-channel reminders and rebooking flows' },
    { area: 'Patient Intake', impact: 'Digital forms pre-populated from referrals' },
    { area: 'Billing & Claims', impact: 'Insurance pre-authorization and claim submission' },
  ],
  'ai-automation-for-accounting-firms': [
    { area: 'Document Collection', impact: 'Automated client portals and reminders' },
    { area: 'Data Entry', impact: 'Bank feed categorisation and reconciliation' },
    { area: 'Client Onboarding', impact: 'Structured intake and engagement letter generation' },
    { area: 'Reporting', impact: 'Automated management accounts and dashboards' },
  ],
  'ai-automation-for-real-estate-agents': [
    { area: 'Lead Management', impact: 'Automated follow-up sequences and lead scoring' },
    { area: 'Listing Descriptions', impact: 'AI-generated property descriptions from data' },
    { area: 'Appointment Scheduling', impact: 'Showing requests and confirmation automation' },
    { area: 'Transaction Coordination', impact: 'Document collection and milestone tracking' },
  ],
  'ai-automation-for-dental-clinics': [
    { area: 'Appointment Filling', impact: 'Automated recall and cancellation backfill' },
    { area: 'No-Show Reduction', impact: 'Multi-channel reminders 48h and 2h before' },
    { area: 'Patient Intake', impact: 'Digital health history forms pre-visit' },
    { area: 'Insurance Verification', impact: 'Automated eligibility checks before appointments' },
  ],
  'ai-automation-for-construction-companies': [
    { area: 'Project Documentation', impact: 'Automated daily reports and change orders' },
    { area: 'Subcontractor Coordination', impact: 'Scheduling and milestone notification flows' },
    { area: 'Safety Compliance', impact: 'Automated checklist distribution and tracking' },
    { area: 'Procurement', impact: 'Purchase order generation and supplier follow-up' },
  ],
  'ai-automation-for-ecommerce-businesses': [
    { area: 'Order Management', impact: 'Automated fulfilment routing and status updates' },
    { area: 'Customer Support', impact: 'AI handles returns, tracking, and FAQs' },
    { area: 'Inventory Management', impact: 'Reorder triggers and low-stock alerts' },
    { area: 'Review & Feedback', impact: 'Automated post-purchase review requests' },
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
          FIG.: AUTOMATION OPPORTUNITIES
        </span>
        <div className="h-px flex-1" style={{ background: 'rgba(45,212,191,0.2)' }} />
      </div>

      <div className="border" style={{ background: '#070f1e', borderColor: '#1a2d4a' }}>
        {/* Column headers */}
        <div className="hidden sm:grid grid-cols-[1fr_2fr_auto] border-b text-left" style={{ borderColor: '#1a2d4a', background: 'rgba(45,212,191,0.04)' }}>
          <div className="px-4 py-3">
            <span className="font-mono text-[10px] tracking-[0.12em] uppercase" style={{ color: '#2dd4bf' }}>Area</span>
          </div>
          <div className="px-4 py-3 border-l" style={{ borderColor: '#1a2d4a' }}>
            <span className="font-mono text-[10px] tracking-[0.12em] uppercase" style={{ color: '#2dd4bf' }}>What AI Handles</span>
          </div>
          <div className="px-4 py-3 border-l" style={{ borderColor: '#1a2d4a' }}>
            <span className="font-mono text-[10px] tracking-[0.12em] uppercase" style={{ color: '#2dd4bf' }}>What to Measure</span>
          </div>
        </div>

        {/* Rows */}
        {items.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-1 sm:grid-cols-[1fr_2fr_auto] border-b last:border-0"
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
            <div className="px-4 py-4 border-t sm:border-t-0 sm:border-l" style={{ borderColor: '#1a2d4a' }}>
              <p className="font-sans text-[12px] leading-relaxed" style={{ color: '#c8d8ec' }}>{item.impact}</p>
            </div>
            <div className="px-4 py-4 border-t sm:border-t-0 sm:border-l flex items-center" style={{ borderColor: '#1a2d4a' }}>
              <span className="font-mono text-[11px] font-bold" style={{ color: '#2dd4bf' }}>Time, corrections, and exceptions</span>
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
