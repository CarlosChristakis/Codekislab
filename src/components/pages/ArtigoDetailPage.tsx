import React, { useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Check,
  ChevronRight,
  ChevronDown,
  Quote,
  Info,
  Lightbulb,
  AlertTriangle,
  HelpCircle,
  List,
  Tag,
  Sparkles,
  BookOpen,
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';
import { PageKey, Article } from '../../types';
import { ARTICLES, CARLOS_INFO } from '../../data/praxisData';
import { ButtonPrimary, ButtonSecondary } from '../Buttons';

interface ArtigoDetailPageProps {
  article: Article;
  onNavigate: (page: PageKey) => void;
  onSelectArticle: (article: Article) => void;
  onOpenCapture: (source?: string) => void;
}

export const ArtigoDetailPage: React.FC<ArtigoDetailPageProps> = ({
  article,
  onNavigate,
  onSelectArticle,
  onOpenCapture
}) => {
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const relatedArticles = ARTICLES.filter(
    (a) => a.id !== article.id && (article.relatedSlugs?.includes(a.slug) || a.category === article.category)
  ).slice(0, 3);

  // Schema.org JSON-LD structured data for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "alternativeHeadline": article.subtitle,
    "description": article.metaDescription || article.summary,
    "keywords": article.keywords?.join(", "),
    "image": article.image,
    "datePublished": "2024-09-12T08:00:00+00:00",
    "dateModified": "2024-09-15T12:00:00+00:00",
    "author": {
      "@type": "Person",
      "name": article.author.name,
      "jobTitle": article.author.role,
      "url": "https://codekislabs.com.br"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Codekis Labs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://codekislabs.com.br/icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://codekislabs.com.br/artigos/${article.slug}`
    }
  };

  const faqSchema = article.faq && article.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#F5F3EE] py-10 sm:py-16 font-sans">
      {/* Inject Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-heading flex-wrap">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#04162B] transition-colors cursor-pointer"
          >
            Início
          </button>
          <span>/</span>
          <button
            onClick={() => onNavigate('artigos')}
            className="hover:text-[#04162B] transition-colors cursor-pointer"
          >
            Artigos
          </button>
          <span>/</span>
          <span className="text-[#C38735] font-semibold">{article.category}</span>
          <span>/</span>
          <span className="text-slate-800 font-medium truncate max-w-xs">{article.title}</span>
        </nav>

        {/* Back Button */}
        <button
          onClick={() => onNavigate('artigos')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-[#04162B] hover:text-[#C38735] mb-8 transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Voltar para todos os artigos</span>
        </button>

        {/* Main Article Container */}
        <article className="rounded-3xl bg-white border border-[#E5E7EB] p-6 sm:p-12 shadow-sm">
          
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-md text-xs font-heading font-bold uppercase tracking-wider bg-[#04162B] text-white">
              {article.category}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#04162B] leading-tight mb-4">
            {article.title}
          </h1>

          {article.subtitle && (
            <p className="text-base sm:text-xl text-[#072F54] font-medium leading-relaxed mb-6 font-heading">
              {article.subtitle}
            </p>
          )}

          {/* Author & Share Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 mb-8 border-y border-[#E5E7EB]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#04162B] text-white flex items-center justify-center font-bold text-sm font-heading">
                {article.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-heading font-bold text-[#04162B]">{article.author.name}</p>
                <p className="text-xs text-slate-500">{article.author.role}</p>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-[#E5E7EB] text-xs font-heading font-semibold text-[#04162B] hover:bg-[#F5F3EE] transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Link copiado!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Compartilhar</span>
                </>
              )}
            </button>
          </div>

          {/* Main Hero Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm mb-10 h-64 sm:h-96">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Table of Contents (if available) */}
          {article.tableOfContents && article.tableOfContents.length > 0 && (
            <div className="mb-10 p-6 rounded-2xl bg-[#F5F3EE] border border-[#E5E7EB]">
              <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-[#04162B] mb-3 flex items-center gap-2">
                <List className="w-4 h-4 text-[#C38735]" />
                Navegação neste Ensaio
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                {article.tableOfContents.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-[#072F54] hover:text-[#C38735] hover:underline text-left cursor-pointer transition-colors"
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Full Body */}
          <div className="space-y-8 text-base sm:text-lg text-[#475569] leading-relaxed">
            {((article.content || (article as any).sections || []) as any[]).map((section, idx) => {
              const sectionTitle = section.subtitle || section.title;
              return (
                <section key={idx} id={section.id} className="scroll-mt-24 space-y-4">
                  {sectionTitle && (
                    <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-[#04162B] pt-6 border-t border-[#E5E7EB] first:border-t-0 first:pt-0">
                      {sectionTitle}
                    </h2>
                  )}

                  {section.paragraphs?.map((p: string, pIdx: number) => (
                    <p key={pIdx} className="leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {/* Quote */}
                  {section.quote && (
                    <blockquote className="my-6 p-6 rounded-2xl bg-[#F5F3EE] border-l-4 border-[#C38735] text-[#04162B] font-heading font-semibold text-lg sm:text-xl italic">
                      “{section.quote}”
                    </blockquote>
                  )}

                  {/* Bullet list */}
                  {section.list && section.list.length > 0 && (
                    <ul className="my-4 space-y-2 pl-2">
                      {section.list.map((li: string, liIdx: number) => (
                        <li key={liIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#475569]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C38735] mt-2.5 shrink-0" />
                          <span>{li}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Callout */}
                  {section.callout && (
                    <div className="p-6 rounded-2xl bg-[#04162B] text-white border border-[#072F54] space-y-2 my-6">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C38735] block">
                        {typeof section.callout === 'object' ? section.callout.title || 'Destaque Operacional' : 'Destaque Metodológico'}
                      </span>
                      <p className="text-sm sm:text-base font-heading font-medium text-slate-200 leading-snug">
                        {typeof section.callout === 'object' ? section.callout.text : section.callout}
                      </p>
                    </div>
                  )}

                  {/* Table */}
                  {section.table && section.table.headers && (
                    <div className="my-6 overflow-x-auto rounded-2xl border border-[#E5E7EB]">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-[#04162B] text-white font-heading font-bold">
                            {section.table.headers.map((h: string, hIdx: number) => (
                              <th key={hIdx} className="p-3.5 sm:p-4 border-b border-[#072F54]">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E5E7EB] bg-white">
                          {section.table.rows.map((row: string[], rIdx: number) => (
                            <tr key={rIdx} className="hover:bg-[#F5F3EE]/50 transition-colors">
                              {row.map((cell: string, cIdx: number) => (
                                <td key={cIdx} className="p-3.5 sm:p-4 text-[#475569] align-top">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              );
            })}
          </div>

          {/* Key Takeaways Box */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#F5F3EE] border border-[#E5E7EB] space-y-4">
              <h3 className="text-base font-heading font-extrabold text-[#04162B] flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-[#C38735]" />
                Pontos-chave para reter:
              </h3>
              <ul className="space-y-2.5">
                {article.keyTakeaways.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C38735] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* FAQ Section (if available) */}
          {article.faq && article.faq.length > 0 && (
            <section className="mt-12 pt-10 border-t border-[#E5E7EB]">
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#04162B] mb-6">
                Perguntas Frequentes
              </h3>
              <div className="space-y-3">
                {article.faq.map((item, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-[#E5E7EB] rounded-2xl overflow-hidden bg-white"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-[#04162B] hover:text-[#C38735] transition-colors cursor-pointer"
                      >
                        <span className="text-sm sm:text-base">{item.question}</span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#C38735]' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#E5E7EB] bg-[#F5F3EE]/50 pt-3">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Keywords */}
          {article.keywords && article.keywords.length > 0 && (
            <div className="mt-10 pt-6 border-t border-[#E5E7EB] flex flex-wrap items-center gap-2">
              <span className="text-xs font-heading font-bold text-slate-400 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" />
                Tags:
              </span>
              {article.keywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 text-slate-600"
                >
                  #{kw}
                </span>
              ))}
            </div>
          )}

          {/* Author Box */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#F5F3EE] border border-[#E5E7EB]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#04162B] text-[#C38735] flex items-center justify-center font-heading font-bold text-xl shrink-0">
                CA
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#C38735] block">
                  Sobre o Autor
                </span>
                <h4 className="text-lg font-heading font-bold text-[#04162B]">
                  {CARLOS_INFO.name}
                </h4>
                <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                  {CARLOS_INFO.bio}
                </p>
                <div className="mt-2">
                  <button
                    onClick={() => onNavigate('sobre')}
                    className="text-xs font-heading font-bold text-[#072F54] hover:text-[#C38735] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Conhecer a visão institucional</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Article Footer CTA Box */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#04162B] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-lg font-heading font-bold text-white">
                Deseja levar essa metodologia para a sua empresa?
              </h4>
              <p className="text-xs text-slate-300">
                A Codekis Labs realiza diagnósticos e treinamentos focados em processos e autonomia.
              </p>
            </div>
            <ButtonPrimary
              size="sm"
              onClick={() => onNavigate('contato')}
              className="shrink-0"
            >
              <span>Falar com a Codekis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </ButtonPrimary>
          </div>

        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-14">
            <h3 className="text-xl font-heading font-extrabold text-[#04162B] mb-6">
              Outros ensaios recomendados:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    onSelectArticle(rel);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-5 rounded-2xl bg-white border border-[#E5E7EB] hover:shadow-md hover:border-[#C38735] transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#C38735] mb-1 block">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-heading font-bold text-[#04162B] group-hover:text-[#072F54] transition-colors line-clamp-2 mb-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-[#475569] line-clamp-2 mb-3">
                      {rel.summary}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#E5E7EB] text-[11px] text-slate-500 flex items-center justify-between">
                    <span>{rel.readTime}</span>
                    <span className="font-heading font-bold text-[#04162B] group-hover:text-[#C38735] inline-flex items-center gap-0.5">
                      Ler <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
