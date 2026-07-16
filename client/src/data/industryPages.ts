// Industry authority pages for IkramRana.com
// Claims are intentionally workflow-specific and non-promissory.

export interface IndustryFaq {
  question: string;
  answer: string;
}

export interface IndustrySection {
  heading: string;
  content: string;
}

export interface IndustryLink {
  label: string;
  href: string;
}

export interface IndustryPage {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  metaDescription: string;
  sections: IndustrySection[];
  faqs: IndustryFaq[];
  internalLinks: IndustryLink[];
}

interface IndustrySpec {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  metaDescription: string;
  overview: string;
  problems: string[];
  opportunities: string[];
  humanBoundaries: string;
  privacyNote: string;
}

const framework = [
  "Stage 1: Map the current workflow, including triggers, decisions, exceptions, systems, owners, and consequences of error.",
  "Stage 2: Establish a baseline for staff time, correction work, delays, handoffs, service quality, and operating cost.",
  "Stage 3: Select one limited workflow where the normal path is clear and human review is practical.",
  "Stage 4: Test with representative cases, document every exception, and compare the complete workflow with the baseline.",
  "Stage 5: Expand only when the system meets approved risk-based criteria and the responsible team can operate, monitor, and improve it.",
].join("\\n");

const commonLinks: IndustryLink[] = [
  { label: "AI Adoption Framework for Businesses", href: "/ai-adoption-framework-for-small-businesses" },
  { label: "AI Automation for Business", href: "/ai-automation-for-business" },
  { label: "AI Workflow Systems", href: "/ai-workflow-systems" },
  { label: "AI Governance for Businesses", href: "/ai-knowledge-hub/ai-governance-for-businesses" },
  { label: "Illustrative AI Use Cases", href: "/case-studies" },
  { label: "Find the Workflow AI Should Fix First", href: "/contact" },
];

const specs: IndustrySpec[] = [
  {
    slug: "ai-automation-for-law-firms",
    title: "How Law Firms Can Use AI Automation Without Outsourcing Legal Judgment",
    shortTitle: "Law Firms",
    icon: "Scale",
    metaDescription: "A practical guide to AI automation for law firms covering intake, document workflows, deadlines, confidentiality, human review, and responsible implementation.",
    overview: "Law firms coordinate intake, conflict checks, matter opening, document handling, deadlines, communications, time capture, and billing. These workflows contain repeated administrative steps, but they also involve confidentiality, professional duties, and decisions that can materially affect a client. The right question is not whether a firm can use AI. It is which steps are sufficiently clear and low-risk to support, and which decisions must remain with a qualified lawyer.",
    problems: [
      "Inquiry information may arrive through several channels and be copied into multiple systems.",
      "Documents can be misfiled, duplicated, or separated from the matter context required for review.",
      "Deadlines and follow-ups depend on reliable ownership, accurate source information, and visible escalation.",
      "Time capture and billing preparation can create repeated administrative work without replacing professional review.",
    ],
    opportunities: [
      "Structured intake can collect information consistently and route it for conflict and suitability review.",
      "Document workflows can classify, name, store, and retrieve files while preserving access controls and source traceability.",
      "Scheduling and deadline support can create reminders and escalation paths without making legal decisions.",
      "AI-assisted drafting can prepare first drafts from approved templates when every consequential output receives lawyer review.",
    ],
    humanBoundaries: "AI should not independently provide legal advice, determine case strategy, assess a client’s rights, file consequential material, or communicate a final professional opinion. Qualified lawyers must retain judgment, confidentiality responsibility, and approval authority.",
    privacyNote: "Any implementation must account for privilege, confidentiality, professional-conduct obligations, data location, vendor terms, access controls, retention, and the requirements of the relevant jurisdiction.",
  },
  {
    slug: "ai-automation-for-immigration-consultants",
    title: "How Immigration Consultants Can Use AI for Case Administration and Client Communication",
    shortTitle: "Immigration Consultants",
    icon: "Folder",
    metaDescription: "A practical guide to AI for immigration consultants covering intake, document tracking, deadlines, client communication, professional review, and privacy controls.",
    overview: "Immigration practices coordinate detailed intake, supporting documents, form preparation, deadlines, government correspondence, status updates, and client expectations. Administrative support can be valuable, but eligibility analysis and case strategy depend on current law, policy, evidence, and qualified professional judgment. AI should support a controlled case workflow rather than act as an unsupervised adviser.",
    problems: [
      "Client information and supporting documents may arrive gradually through disconnected channels.",
      "Document requirements, expiry dates, translations, and certifications vary by matter.",
      "Routine status questions can consume time while complex client concerns still require professional attention.",
      "Rules and forms change, so outdated automation can create confident but incorrect outputs.",
    ],
    opportunities: [
      "Structured intake can collect information and identify missing fields for consultant review.",
      "Document tracking can maintain checklists, reminders, expiry alerts, and organized case records.",
      "Form preparation can pre-populate approved fields while requiring professional verification before use.",
      "Communication workflows can send routine status updates and route complex or sensitive questions to the responsible consultant.",
    ],
    humanBoundaries: "AI should not make final eligibility determinations, select legal strategy, submit forms without professional approval, or represent that generated information is current legal advice. The authorized professional remains responsible for the case.",
    privacyNote: "Client information may include identity, family, financial, employment, and immigration records. Controls should address consent, access, retention, vendor processing, confidentiality, and applicable privacy and professional requirements.",
  },
  {
    slug: "ai-automation-for-physiotherapy-clinics",
    title: "How Physiotherapy Clinics Can Use AI for Administrative Workflows",
    shortTitle: "Physiotherapy Clinics",
    icon: "HeartPulse",
    metaDescription: "A practical guide to AI for physiotherapy clinics covering scheduling, intake administration, reminders, billing support, privacy, and clinical boundaries.",
    overview: "Physiotherapy clinics coordinate appointment scheduling, intake administration, insurance information, treatment documentation, billing, reminders, and follow-up. Some of this work follows repeatable rules, while assessment, treatment planning, and patient communication require clinical judgment and trust. AI adoption should reduce administrative handling without interfering with care.",
    problems: [
      "Phone-based scheduling and manual waitlists create interruptions and incomplete records.",
      "Intake information may be repeated across forms, booking systems, and clinical records.",
      "Billing and insurance workflows generate exceptions that require clear ownership.",
      "Automated reminders can become intrusive or inaccessible when timing, language, and patient needs are ignored.",
    ],
    opportunities: [
      "Scheduling workflows can support booking, reminders, cancellation handling, and waitlist offers.",
      "Digital intake can collect administrative information before an appointment and flag incomplete records.",
      "Billing support can prepare documentation and route exceptions without making coverage promises.",
      "Follow-up workflows can deliver approved instructions while escalating clinical questions to qualified staff.",
    ],
    humanBoundaries: "AI should not diagnose, prescribe treatment, interpret symptoms autonomously, or replace clinician judgment. Clinical decisions and high-impact patient communications must remain with qualified professionals.",
    privacyNote: "Implementations must be designed around the health-information and privacy requirements that apply to the clinic, including access controls, consent, retention, auditability, vendor processing, and breach response.",
  },
  {
    slug: "ai-automation-for-accounting-firms",
    title: "How Accounting Firms Can Use AI for Document and Workflow Support",
    shortTitle: "Accounting Firms",
    icon: "Calculator",
    metaDescription: "A practical guide to AI for accounting firms covering document intake, extraction, reconciliation support, client communication, review, and governance.",
    overview: "Accounting firms manage document collection, bookkeeping inputs, reconciliations, workpapers, deadlines, client questions, review, and reporting. AI can support repeated information-processing steps, but financial accuracy, professional standards, tax positions, audit conclusions, and advisory judgment require qualified review.",
    problems: [
      "Documents arrive in inconsistent formats and through several channels.",
      "Data extraction and categorization errors can flow into later work if the source is not traceable.",
      "Seasonal volume increases the risk of rushed review and inconsistent client follow-up.",
      "Different working methods across staff can make automation difficult to test and maintain.",
    ],
    opportunities: [
      "Document intake can classify files, extract fields, preserve source links, and route exceptions.",
      "Reconciliation support can identify discrepancies for accountant review without silently changing records.",
      "Client communication can automate approved reminders, status updates, and missing-document requests.",
      "Review workflows can surface unusual entries, incomplete support, and work requiring professional attention.",
    ],
    humanBoundaries: "AI should not make final tax, audit, assurance, valuation, or advisory judgments. Accountants remain responsible for verification, professional standards, client communication, and approval of consequential outputs.",
    privacyNote: "Financial records require strong access controls, vendor review, retention rules, source traceability, and controls mapped to contractual, professional, and applicable privacy requirements.",
  },
  {
    slug: "ai-automation-for-real-estate-agents",
    title: "How Real Estate Professionals Can Use AI Without Automating the Relationship",
    shortTitle: "Real Estate Agents",
    icon: "Home",
    metaDescription: "A practical guide to AI for real estate workflows covering lead routing, scheduling, document coordination, communications, disclosure, and human judgment.",
    overview: "Real estate work combines lead response, qualification, scheduling, listing preparation, transaction coordination, document collection, deadlines, and relationship management. AI can support organization and routine communication, but negotiation, fiduciary duties, disclosure, local knowledge, and client trust remain human responsibilities.",
    problems: [
      "Leads arrive through several platforms and may not receive consistent follow-up.",
      "Transaction documents, conditions, dates, and responsibilities can be fragmented.",
      "Automated content may introduce inaccurate property details or inappropriate claims.",
      "High-volume messaging can damage trust when context, consent, and timing are ignored.",
    ],
    opportunities: [
      "Lead-routing workflows can collect preferences and schedule follow-up without making suitability decisions.",
      "Listing support can prepare drafts from verified source information for agent approval.",
      "Transaction coordination can track conditions, documents, deadlines, and responsible parties.",
      "Communication workflows can send approved updates while routing negotiations and sensitive questions to the agent.",
    ],
    humanBoundaries: "AI should not negotiate, advise clients on legal or financial consequences, invent listing facts, or send consequential communications without appropriate professional review.",
    privacyNote: "Implementations should address consent, contact preferences, client confidentiality, access controls, recordkeeping, advertising rules, and the professional requirements that apply in the relevant market.",
  },
  {
    slug: "ai-automation-for-dental-clinics",
    title: "How Dental Clinics Can Use AI for Scheduling and Administrative Support",
    shortTitle: "Dental Clinics",
    icon: "Smile",
    metaDescription: "A practical guide to AI for dental clinics covering scheduling, intake, recalls, insurance administration, patient communication, privacy, and clinical boundaries.",
    overview: "Dental clinics coordinate scheduling, intake, insurance information, treatment documentation, billing, recalls, and patient communication. Administrative workflows may support automation, but diagnosis, treatment decisions, informed consent, and patient-specific clinical communication require qualified professionals.",
    problems: [
      "Scheduling calls and manual waitlists create interruptions and missed opportunities to fill appropriate appointments.",
      "Insurance verification and billing exceptions require accurate records and responsible follow-up.",
      "Recall communication can become inconsistent or overly aggressive when ownership is unclear.",
      "Disconnected systems can force staff to reconcile patient information manually.",
    ],
    opportunities: [
      "Scheduling workflows can support booking, reminders, cancellations, and waitlist offers.",
      "Digital intake can collect administrative information and flag incomplete records before an appointment.",
      "Insurance and billing support can prepare records and route exceptions for staff review.",
      "Recall workflows can deliver approved communications according to patient preferences and clinic policy.",
    ],
    humanBoundaries: "AI should not diagnose, recommend treatment, replace informed-consent discussions, or send clinical advice without review by a qualified dental professional.",
    privacyNote: "Patient information requires controls mapped to applicable health-privacy, professional, contractual, and security requirements, including consent, access, retention, vendor processing, and auditability.",
  },
  {
    slug: "ai-automation-for-construction-companies",
    title: "How Construction Companies Can Use AI for Project Coordination",
    shortTitle: "Construction Companies",
    icon: "HardHat",
    metaDescription: "A practical guide to AI for construction workflows covering document control, RFIs, schedules, change orders, field communication, billing, and human oversight.",
    overview: "Construction projects depend on current documents, coordinated schedules, clear approvals, field communication, change management, and billing. AI can help organize information and surface exceptions, but site safety, engineering judgment, contractual decisions, and trade expertise cannot be delegated to an unsupervised system.",
    problems: [
      "Plans, specifications, RFIs, submittals, and change records may be spread across email, drives, and paper.",
      "Outdated documents can reach the field when version control and ownership are weak.",
      "Schedule changes create downstream effects that require context and responsible decisions.",
      "Change orders and progress billing involve approvals, evidence, and contractual consequences.",
    ],
    opportunities: [
      "Document-control workflows can classify files, maintain version history, and route approvals.",
      "RFI and submittal support can organize incoming requests and identify overdue responses.",
      "Schedule monitoring can surface conflicts and dependencies for project-manager review.",
      "Change and billing workflows can assemble records, track status, and preserve an audit trail.",
    ],
    humanBoundaries: "AI should not make site-safety decisions, approve engineering changes, interpret contracts conclusively, or replace project and trade judgment. Responsible professionals must own consequential decisions.",
    privacyNote: "Controls should address commercial confidentiality, contractual access, project permissions, document retention, vendor processing, and the security of connected field and office systems.",
  },
  {
    slug: "ai-automation-for-ecommerce-businesses",
    title: "How E-Commerce Businesses Can Use AI Across Customer and Operations Workflows",
    shortTitle: "E-Commerce Businesses",
    icon: "ShoppingCart",
    metaDescription: "A practical guide to AI for e-commerce covering customer service, inventory, order exceptions, marketing support, pricing risk, and responsible implementation.",
    overview: "E-commerce operations connect customer inquiries, orders, inventory, fulfillment, returns, marketing, payments, and supplier coordination. AI can support high-volume workflows, but poorly bounded automation can create inaccurate promises, unfair treatment, pricing problems, and customer frustration at scale.",
    problems: [
      "Routine inquiries compete with complex customer problems for the same support capacity.",
      "Inventory and order data can be inconsistent across channels.",
      "Automated marketing may ignore consent, brand standards, and customer context.",
      "Order, return, fraud, and payment exceptions can have financial and trust consequences.",
    ],
    opportunities: [
      "Customer-service workflows can answer approved routine questions and escalate complex cases with context.",
      "Inventory support can surface demand signals and reorder risks for human review.",
      "Order workflows can route exceptions, provide status updates, and preserve transaction records.",
      "Marketing support can prepare drafts and analysis while keeping consent, claims, pricing, and brand decisions under human control.",
    ],
    humanBoundaries: "AI should not make unreviewed high-impact pricing, fraud, refund, or customer-treatment decisions. Businesses must define escalation, appeal, and human ownership for consequential cases.",
    privacyNote: "Implementations should account for consent, consumer protection, payment and account security, data minimization, vendor processing, retention, and the requirements of each market served.",
  },
  {
    slug: "ai-automation-for-marketing-agencies",
    title: "How Marketing Agencies Can Use AI Without Producing More Content Debt",
    shortTitle: "Marketing Agencies",
    icon: "Megaphone",
    metaDescription: "A practical guide to AI for marketing agencies covering reporting, content workflows, approvals, client communication, brand risk, and measurement.",
    overview: "Marketing agencies coordinate onboarding, briefs, research, production, approvals, campaigns, reporting, and client communication. AI can accelerate individual steps, but more output is not automatically more value. The complete workflow must protect accuracy, brand judgment, approval responsibility, and the client relationship.",
    problems: [
      "Reporting data is often copied from several platforms and reformatted manually.",
      "Content volume can exceed the team’s review and approval capacity.",
      "Client feedback, revisions, and final approvals may be scattered across tools.",
      "Automated claims, targeting, and creative decisions can introduce legal, ethical, and brand risk.",
    ],
    opportunities: [
      "Reporting workflows can collect source data, prepare summaries, and flag anomalies for account-manager review.",
      "Content workflows can support briefs, first drafts, repurposing, and version control within approved brand rules.",
      "Approval systems can track reviewers, decisions, revisions, and final release authority.",
      "Client communication can automate routine status updates while preserving strategic and sensitive conversations for people.",
    ],
    humanBoundaries: "AI should not invent campaign evidence, publish unapproved claims, make sensitive targeting decisions, or replace creative and strategic judgment. Agencies and clients must retain clear approval authority.",
    privacyNote: "Controls should address platform permissions, client confidentiality, consent, audience data, advertising rules, intellectual property, source verification, and approval records.",
  },
  {
    slug: "ai-automation-for-consultants",
    title: "How Consultants Can Use AI Without Outsourcing Their Judgment",
    shortTitle: "Consultants",
    icon: "Briefcase",
    metaDescription: "A practical guide to AI for consultants covering research, proposals, knowledge systems, deliverables, client communication, confidentiality, and judgment.",
    overview: "Consulting work combines business development, research, proposals, analysis, deliverables, meetings, and client communication. AI can support information processing and repeatable production, but the value of consulting depends on diagnosis, context, judgment, accountability, and trust.",
    problems: [
      "Research and proposal materials may be recreated instead of reused through a governed knowledge system.",
      "AI drafts can sound plausible while containing weak evidence or generic recommendations.",
      "Client information may be exposed when tools and data-handling rules are unclear.",
      "More rapid output can reduce thinking time and increase the review burden.",
    ],
    opportunities: [
      "A governed knowledge base can make approved frameworks, credentials, and reusable material easier to retrieve.",
      "Research workflows can organize sources and prepare structured briefings for consultant verification.",
      "Proposal workflows can assemble first drafts from approved inputs while preserving personalization and final judgment.",
      "Project communication can automate routine updates and document requests without replacing relationship-sensitive conversations.",
    ],
    humanBoundaries: "AI should not make the diagnosis, choose the recommendation, fabricate evidence, or present generated work as verified analysis. The consultant remains responsible for reasoning, source validation, advice, and client outcomes.",
    privacyNote: "Implementations should address client confidentiality, contractual restrictions, source rights, tool retention, access controls, vendor training terms, and approval before client-facing use.",
  },
  {
    slug: "ai-automation-for-coaches",
    title: "How Coaches Can Use AI While Protecting the Human Relationship",
    shortTitle: "Coaches",
    icon: "Users",
    metaDescription: "A practical guide to AI for coaching practices covering intake, scheduling, session preparation, follow-up, privacy, boundaries, and human connection.",
    overview: "Coaching practices coordinate inquiries, intake, scheduling, session preparation, resources, follow-up, progress tracking, renewals, and referrals. AI can support administration and organization, but the coaching relationship depends on presence, trust, context, and professional boundaries.",
    problems: [
      "Onboarding information, goals, notes, resources, and action items may be spread across tools.",
      "Routine reminders and check-ins can become impersonal or intrusive.",
      "Generated interpretations may overstep the coach’s competence or the client’s consent.",
      "Sensitive personal information may be entered into tools without clear privacy rules.",
    ],
    opportunities: [
      "Intake and scheduling workflows can organize administrative steps and identify incomplete information.",
      "Session-preparation support can summarize approved notes and outstanding action items for coach review.",
      "Resource workflows can deliver coach-approved material according to the program design.",
      "Follow-up systems can send agreed reminders while routing sensitive responses directly to the coach.",
    ],
    humanBoundaries: "AI should not impersonate the coach, make mental-health or medical judgments, interpret a client’s situation autonomously, or replace relationship-sensitive conversations. The coach must retain professional and ethical responsibility.",
    privacyNote: "Controls should address informed consent, sensitive personal information, tool access, retention, vendor processing, professional scope, crisis escalation, and clear boundaries between coaching and regulated services.",
  },
];

function makePage(spec: IndustrySpec): IndustryPage {
  const opportunitySummary = spec.opportunities.join("\\n");
  const firstOpportunity = spec.opportunities[0];

  return {
    slug: spec.slug,
    title: spec.title,
    shortTitle: spec.shortTitle,
    icon: spec.icon,
    metaDescription: spec.metaDescription,
    sections: [
      { heading: "Industry Workflow Overview", content: spec.overview },
      { heading: "Operational Problems", content: spec.problems.join("\\n") },
      { heading: "AI Automation Opportunities", content: opportunitySummary },
      { heading: "AI Adoption Framework for This Industry", content: framework },
      {
        heading: "Realistic Expectations",
        content: `AI can support routine administrative, information-processing, and coordination work in ${spec.shortTitle} when the process, data, integrations, and ownership are clear. ${spec.humanBoundaries} Start with a limited workflow, define human review and escalation, and measure the complete result against the organization’s own baseline before expanding.`,
      },
      {
        heading: "Expert Perspective: Ikram Rana",
        content: `Ikram Rana’s practical perspective on AI adoption for ${spec.shortTitle} is workflow-first and risk-aware. The starting point is not a tool or a promised percentage. It is identifying repeated work, mapping decisions and exceptions, determining what must remain human, and testing whether the complete workflow improves after implementation.`,
      },
    ],
    faqs: [
      {
        question: `How can AI help ${spec.shortTitle.toLowerCase()}?`,
        answer: `AI may support repeated administrative, information-processing, and coordination steps. One possible starting point is: ${firstOpportunity} Suitability depends on the actual workflow, data, risk, integrations, and available human review.`,
      },
      {
        question: `What should ${spec.shortTitle.toLowerCase()} automate first?`,
        answer: "Start with a workflow that is repeatedly delayed, copied, chased, checked, or corrected. Document its normal path, exceptions, owners, systems, and error consequences before deciding whether AI belongs in it.",
      },
      {
        question: `Can AI replace professional judgment in ${spec.shortTitle.toLowerCase()}?`,
        answer: spec.humanBoundaries,
      },
      {
        question: `How should ${spec.shortTitle.toLowerCase()} measure AI results?`,
        answer: "Measure the complete workflow against a documented baseline, including staff time, corrections, exceptions, delays, operating cost, adoption, service quality, and customer or client impact. Include monitoring and maintenance effort.",
      },
      {
        question: "How long does AI implementation take?",
        answer: "There is no responsible universal timeline. The schedule depends on process clarity, data quality, integrations, security review, exception design, testing, and staff adoption. A scope and timeline should be prepared after discovery.",
      },
      {
        question: "How much does implementation cost?",
        answer: "Barrana’s Discovery Stage is $1,500 CAD and is credited toward implementation if the client proceeds. The implementation scope and quote are prepared after the workflow, risks, systems, and operating requirements are understood.",
      },
      {
        question: `What privacy and governance issues apply to ${spec.shortTitle.toLowerCase()}?`,
        answer: spec.privacyNote,
      },
      {
        question: "What is the first step?",
        answer: "Find the workflow AI should fix first. Document the trigger, steps, decisions, exceptions, inputs, owners, and desired outcome. Discovery then determines whether AI is appropriate and what a responsible implementation would require.",
      },
    ],
    internalLinks: commonLinks,
  };
}

export const industryPages: IndustryPage[] = specs.map(makePage);

export function getIndustryPage(slug: string): IndustryPage | undefined {
  return industryPages.find(page => page.slug === slug);
}
