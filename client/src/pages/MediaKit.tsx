import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "wouter";
import { useHead } from "@/hooks/useHead";

const title = "Brand partnerships for @ikramrana.ai | Ikram Rana";
const description =
  "Public media kit for @ikramrana.ai - 29K followers, ~2.1M views / 30 days. AI tool and automation Reels for founders and builders. Email ir@ikramrana.com for partnership options and pricing.";
const partnershipEmail =
  "mailto:ir@ikramrana.com?subject=%40ikramrana.ai%20brand%20partnership";

const snapshot = [
  ["Instagram", "@ikramrana.ai (verified)"],
  ["Followers", "~29K"],
  ["Views (last 30 days)", "~2.1M (Instagram Insights)"],
  ["Format", "Educational walkthrough Reels + Stories CTAs"],
  ["Audience", "Founders, operators, builders, tech-curious professionals"],
  ["Geography", "South Asia + North America dominant · based Vaughan, Ontario"],
  ["Audience mix", "Mostly men · peak ages 18-44"],
] as const;

const campaignSteps = [
  "Brief + product access",
  "Native Reel (hook → demo → CTA)",
  "Factual review draft",
  "Publish + Stories CTA",
  "Insights report",
] as const;

const faqs = [
  {
    question: "Same as booking a consult?",
    answer: "No. Partnerships via ir@; consults separate.",
  },
  {
    question: "Where are the rates?",
    answer: "In the partnership options and pricing overview, sent after you email with product and timing.",
  },
  {
    question: "What to include?",
    answer: "Product URL, job-to-be-done, launch window, one-off vs monthly.",
  },
] as const;

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://ikramrana.com/media-kit#webpage",
  url: "https://ikramrana.com/media-kit",
  name: title,
  description,
  inLanguage: "en-CA",
  isPartOf: { "@id": "https://ikramrana.com/#website" },
  about: { "@id": "https://ikramrana.com/#person" },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  },
};

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`font-mono text-[11px] font-medium uppercase tracking-[0.2em] ${dark ? "text-[#526B13]" : "text-[#B9EB38]"}`}>
      {children}
    </p>
  );
}

export default function MediaKit() {
  useHead(title, description);

  return (
    <div className="bg-[#080808] text-[#F5F5F2]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <header className="media-kit-grid relative overflow-hidden border-b border-[#292926]">
        <div className="media-kit-orbit" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1120px] px-4 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8 lg:pb-20 lg:pt-24">
          <div className="max-w-[900px]">
            <Eyebrow>Instagram brand partnerships</Eyebrow>
            <h1 className="mt-6 max-w-[820px] font-serif text-[clamp(3rem,8vw,6.8rem)] font-medium leading-[0.94] tracking-[-0.045em] text-[#F5F5F2]">
              Media kit for <span className="text-[#B9EB38]">@ikramrana.ai</span>
            </h1>
            <p className="mt-8 max-w-[790px] text-lg leading-[1.75] text-[#C9C9C3] sm:text-xl">
              @ikramrana.ai is an Instagram channel for practical AI tools and automation. Brands and AI tool teams use it when they want educational, demo-led Reels that reach founders, operators, and builders - people who try software, not AI entertainment. This page is the public overview. For packages and commercial terms, email ir@ikramrana.com and you will receive the partnership options and pricing.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={partnershipEmail}
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#B9EB38] px-5 py-3 text-sm font-semibold text-[#080808] no-underline transition-colors hover:bg-[#C8F65A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B9EB38]"
              >
                <Mail size={17} aria-hidden="true" />
                Email ir@ikramrana.com
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#565650] px-5 py-3 text-sm font-semibold text-[#F5F5F2] no-underline transition-colors hover:border-[#B9EB38] hover:text-[#B9EB38] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B9EB38]"
              >
                Contact Ikram Rana
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-14 grid border-y border-[#343430] sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {[
              ["~29K", "followers"],
              ["~2.1M", "views / 30 days"],
              ["Reels", "educational walkthroughs"],
              ["18-44", "peak audience ages"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={`py-5 sm:px-6 ${index > 0 ? "border-t border-[#343430] sm:border-l sm:border-t-0" : ""} ${index === 2 ? "sm:border-t lg:border-t-0" : ""}`}
              >
                <p className="font-serif text-3xl text-[#F5F5F2]">{value}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#ADADA6]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="bg-[#F5F5F2] text-[#080808]">
        <section aria-labelledby="snapshot-heading" className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <Eyebrow dark>Channel snapshot</Eyebrow>
              <h2 id="snapshot-heading" className="mt-4 max-w-[420px] font-serif text-4xl font-medium leading-[1.05] tracking-[-0.025em] md:text-5xl">
                Audience and recent reach
              </h2>
              <p className="mt-6 max-w-[48ch] leading-relaxed text-[#54544F]">
                Public figures are rounded. The 30-day view count is based on Instagram Insights.
              </p>
            </div>

            <div className="border-t border-[#BABAB2]">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">@ikramrana.ai channel snapshot</caption>
                <tbody>
                  {snapshot.map(([label, value]) => (
                    <tr key={label} className="border-b border-[#D1D1CA]">
                      <th scope="row" className="w-[39%] py-4 pr-4 align-top font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-[#6A6A64] sm:py-5">
                        {label}
                      </th>
                      <td className="py-4 text-base font-semibold leading-relaxed text-[#11110F] sm:py-5">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="border-y border-[#D1D1CA]">
          <div className="mx-auto grid max-w-[1120px] lg:grid-cols-2">
            <section aria-labelledby="channel-fit-heading" className="px-4 py-16 sm:px-6 md:py-20 lg:border-r lg:border-[#D1D1CA] lg:px-8 lg:pr-16">
              <Eyebrow dark>Why this channel</Eyebrow>
              <h2 id="channel-fit-heading" className="mt-4 font-serif text-3xl font-medium leading-tight tracking-[-0.02em] md:text-4xl">
                AI tools shown working
              </h2>
              <p className="mt-6 max-w-[56ch] text-lg leading-[1.7] text-[#383834]">
                Hook-first Reels that show AI tools working. High comment velocity on tool posts; large share of views from non-followers. Fits AI, automation, developer, B2B SaaS products that need a clear demo.
              </p>
              <div className="mt-10 border-l-2 border-[#B9EB38] pl-5">
                <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#526B13]">Best-fit</h3>
                <p className="mt-3 leading-[1.7] text-[#383834]">
                  AI/LLM/agents · automation/workflow · developer tools · productivity · B2B SaaS for founders/operators
                </p>
              </div>
            </section>

            <section aria-labelledby="campaign-heading" className="border-t border-[#D1D1CA] px-4 py-16 sm:px-6 md:py-20 lg:border-t-0 lg:px-8 lg:pl-16">
              <Eyebrow dark>How campaigns run</Eyebrow>
              <h2 id="campaign-heading" className="mt-4 font-serif text-3xl font-medium leading-tight tracking-[-0.02em] md:text-4xl">
                Five steps, then reporting
              </h2>
              <ol className="mt-7 border-t border-[#BABAB2]">
                {campaignSteps.map((step, index) => (
                  <li key={step} className="grid grid-cols-[2.5rem_1fr] border-b border-[#D1D1CA] py-4">
                    <span className="font-mono text-xs text-[#526B13]" aria-hidden="true">
                      0{index + 1}
                    </span>
                    <span className="font-semibold text-[#20201D]">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-sm leading-relaxed text-[#6A6A64]">
                Organic unless paid usage rights are included in the partnership options and pricing.
              </p>
            </section>
          </div>
        </section>

        <section aria-labelledby="rates-heading" className="bg-[#080808] text-[#F5F5F2]">
          <div className="mx-auto grid max-w-[1120px] gap-9 px-4 py-16 sm:px-6 md:grid-cols-[1fr_auto] md:items-end md:py-20 lg:px-8">
            <div>
              <Eyebrow>What you will not find</Eyebrow>
              <h2 id="rates-heading" className="mt-4 max-w-[700px] font-serif text-4xl font-medium leading-[1.05] tracking-[-0.025em] md:text-5xl">
                Pricing is not listed publicly.
              </h2>
              <p className="mt-6 max-w-[650px] text-lg leading-relaxed text-[#C9C9C3]">
                Serious partners receive partnership options and pricing by email after a short reply.
              </p>
            </div>
            <a
              href={partnershipEmail}
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#B9EB38] px-5 py-3 text-sm font-semibold text-[#080808] no-underline transition-colors hover:bg-[#C8F65A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B9EB38]"
            >
              <Mail size={17} aria-hidden="true" />
              Email ir@ikramrana.com
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
            <section aria-labelledby="faq-heading">
              <Eyebrow dark>FAQ</Eyebrow>
              <h2 id="faq-heading" className="mt-4 font-serif text-4xl font-medium tracking-[-0.025em] md:text-5xl">
                Brand partnership questions
              </h2>
              <div className="mt-8 border-t border-[#BABAB2]">
                {faqs.map(({ question, answer }) => (
                  <div key={question} className="border-b border-[#D1D1CA] py-6">
                    <h3 className="font-serif text-xl font-medium">{question}</h3>
                    <p className="mt-2 leading-relaxed text-[#54544F]">{answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <aside aria-labelledby="consult-heading" className="self-start border-t-2 border-[#B9EB38] bg-[#E9E9E3] p-7 sm:p-8">
              <Eyebrow dark>Separate service</Eyebrow>
              <h2 id="consult-heading" className="mt-4 font-serif text-3xl font-medium">AI consult</h2>
              <p className="mt-4 leading-relaxed text-[#54544F]">
                Consults are separate from brand partnerships. Book through the consult page or use the site contact page.
              </p>
              <div className="mt-7 flex flex-col items-start gap-4 text-sm font-semibold">
                <a
                  href="https://v2.stan.store/ikramrana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#080808] underline decoration-[#9BC52A] decoration-2 underline-offset-4"
                >
                  AI consult page
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 text-[#080808] underline decoration-[#9BC52A] decoration-2 underline-offset-4">
                  Contact Ikram Rana
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
