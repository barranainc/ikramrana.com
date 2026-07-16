import { Link } from 'wouter';

export default function AuthorAuthorityCard() {
  return (
    <aside
      aria-label="About the author"
      className="mt-14 border border-border/60 bg-navy p-6 sm:p-7"
    >
      <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-electric mb-3">
        ABOUT THE AUTHOR
      </p>
      <h2 className="font-serif text-xl font-bold text-foreground mb-3">
        Ikram Rana
      </h2>
      <p className="font-sans text-[14px] text-slate-text leading-relaxed mb-4">
        Ikram Rana is an AI adoption and workflow implementation specialist based in Vaughan, Ontario. He helps businesses across the Greater Toronto Area, Canada, and the United States decide where AI belongs, where it does not, and how to implement working systems with clear human ownership.
      </p>
      <p className="font-sans text-[13px] text-slate-dim leading-relaxed mb-5">
        He is the founder of Barrana, a Canadian AI automation and implementation company, and the creator and publisher of Real Life AI.
      </p>
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        <Link href="/about" className="font-mono text-[11px] uppercase tracking-[0.08em] text-electric hover:text-electric-dim">
          About Ikram
        </Link>
        <Link href="/ai-consultant-vaughan" className="font-mono text-[11px] uppercase tracking-[0.08em] text-electric hover:text-electric-dim">
          Vaughan
        </Link>
        <Link href="/ai-consultant-gta" className="font-mono text-[11px] uppercase tracking-[0.08em] text-electric hover:text-electric-dim">
          Greater Toronto Area
        </Link>
      </div>
    </aside>
  );
}
