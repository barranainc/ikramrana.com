import { useEffect } from 'react';
import { Link, useParams } from 'wouter';
import { useHead } from '@/hooks/useHead';
import series from '@/data/oracles.json';
import NotFound from './NotFound';

const base = '/oracles-of-modern-times';
const origin = 'https://ikramrana.com';

function Paragraph({ text }: { text: string }) {
  return <p className="mb-6 leading-[1.85] text-lg text-foreground/85">{text.split(/(\[S\d+\])/g).map((part, i) => /^\[S\d+\]$/.test(part)
    ? <a key={i} href={`#source-${part.slice(1, -1)}`} className="text-electric underline" aria-label={`Read source ${part.slice(1,-1)}`}>{part}</a>
    : part)}</p>;
}

export default function Oracles() {
  const { slug } = useParams<{ slug?: string }>();
  const article = series.articles.find(item => item.slug === slug);
  const title = article?.title ?? series.title;
  const description = article?.description ?? 'A series by Ikram Rana about AI advice, human judgment, business and everyday life. When does an answer become an authority?';
  useHead(title, description);
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);
  useEffect(() => {
    if (slug && !article) return;
    // Replace static route schema while navigating, then restore it on exit.
    const staticSchema = document.getElementById('oracles-static-schema');
    const previous = staticSchema?.textContent;
    const schema = {
      '@context': 'https://schema.org', '@type': article ? 'Article' : 'CollectionPage',
      headline: title, name: title, description,
      url: `${origin}${base}${article ? `/${article.slug}` : ''}`,
      author: { '@type': 'Person', name: series.author, url: `${origin}/about` },
      ...(series.publishedDate ? { datePublished: series.publishedDate } : {}),
      ...(article ? { articleBody: article.paragraphs.join('\n\n'), citation: article.sources.map(s => s.url), isPartOf: { '@type': 'CreativeWorkSeries', name: series.title, url: `${origin}${base}` } } : {})
    };
    const node = document.createElement('script');
    node.type = 'application/ld+json';
    node.textContent = JSON.stringify(schema).replaceAll('<', '\\u003c');
    if (staticSchema) staticSchema.textContent = '';
    document.head.appendChild(node);
    return () => { node.remove(); if (staticSchema && previous) staticSchema.textContent = previous; };
  }, [article, slug, title, description]);
  if (slug && !article) return <NotFound />;

  return <div className="bg-background text-foreground">
    <header className="border-b border-border py-16 md:py-24">
      <div className="max-w-[820px] mx-auto px-6">
        <Link href={base} className="font-mono text-xs uppercase tracking-[.18em] text-electric">Oracles of Modern Times</Link>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.1] font-bold mt-6 mb-6">{article ? article.title : series.question}</h1>
        <p className="text-xl text-slate-text leading-relaxed">{article ? article.description : 'We keep calling AI a tool. Then we ask it to tell us how to live.'}</p>
        <p className="mt-8 text-sm">By <Link href="/about" className="underline">Ikram Rana</Link> · Creator and host of Oracles of Modern Times</p>
        <p className="mt-2 text-sm text-slate-text">{series.publishedDate ? `Published ${series.publishedDate} · ` : ''}Reviewed {series.reviewedDate}</p>
      </div>
    </header>
    <main className="max-w-[820px] mx-auto px-6 py-12 md:py-16">
      {article ? <>
        <article aria-label={article.title}>{article.paragraphs.map((text, i) => <Paragraph key={i} text={text} />)}</article>
        <section aria-labelledby="sources-heading" className="border-t border-border mt-12 pt-8">
          <h2 id="sources-heading" className="font-serif text-2xl mb-6">Sources and context</h2>
          <ul className="space-y-6">{article.sources.map(source => <li key={source.id} id={`source-${source.id}`} className="scroll-mt-24">
            <a href={source.url} className="text-electric underline">[{source.id}] {source.title}</a><p className="text-sm leading-relaxed mt-2 text-slate-text">{source.note}</p>
          </li>)}</ul>
        </section>
        <Link href={base} className="inline-block text-electric underline mt-10">Explore Oracles of Modern Times</Link>
      </> : <>
        <Paragraph text="I believe AI chatbots are becoming the oracles of modern times. This series explores the authority we give their answers, through everyday situations, research and practical questions." />
        <Paragraph text="Should I quit? Am I right? Will my business succeed? We will examine relationships, identity, predictions, agreeable advice and the comfort of an always-available reply. The same question follows us into business and work: when does an answer become an authority?" />
        <section aria-labelledby="essays-heading" className="mt-12">
          <h2 id="essays-heading" className="font-serif text-3xl mb-6">Read the essays</h2>
          {series.articles.map((item, i) => <Link key={item.slug} href={`${base}/${item.slug}`} className="block border-y border-border py-8 group">
            <span className="font-mono text-xs text-electric">ESSAY {String(i+1).padStart(2,'0')}</span>
            <h3 className="font-serif text-2xl mt-3 mb-3 group-hover:text-electric">{item.title}</h3>
            <p className="text-slate-text">{item.description}</p><span className="inline-block underline mt-4">Read the essay →</span>
          </Link>)}
        </section>
        <section className="mt-12"><h2 className="font-serif text-2xl mb-4">Follow the series</h2><p className="text-lg leading-relaxed">Follow <a href="https://www.instagram.com/ikramranaa/" className="text-electric underline">@ikramranaa on Instagram</a> for the series as it develops. Read more from Ikram in <a href="https://ikramrana.substack.com/" className="text-electric underline">Real Life How to AI</a>.</p></section>
        <p className="mt-10 text-sm leading-relaxed text-slate-text">The AI-oracle comparison has earlier uses. Oracles of Modern Times is Ikram Rana’s series and interpretation. The opening essay acknowledges that history and links to its sources.</p>
        <p className="font-serif text-2xl mt-8">Keep your judgment.</p>
      </>}
    </main>
  </div>;
}
