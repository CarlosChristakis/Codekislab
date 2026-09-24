import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, BookOpen, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { ARTICLES, CODIGO_STEPS, CODEKIS_SOLUTIONS } from '../data/praxisData';
import { PageKey, Article } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
  onNavigate: (page: PageKey) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectArticle,
  onNavigate
}) => {
  const [query, setQuery] = useState('');

  // Keyboard escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const matchedArticles = ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        (a.summary || a.metaDescription || '').toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
    ).map((a) => ({
      type: 'article' as const,
      title: a.title,
      desc: a.summary || a.metaDescription || '',
      badge: a.category,
      item: a
    }));

    const matchedSolutions = CODEKIS_SOLUTIONS.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.short.toLowerCase().includes(q) ||
        s.problem.toLowerCase().includes(q)
    ).map((s) => ({
      type: 'solution' as const,
      title: s.title,
      desc: s.short,
      badge: 'Solução Codekis',
      item: s
    }));

    const matchedSteps = CODIGO_STEPS.filter(
      (step) =>
        step.title.toLowerCase().includes(q) ||
        step.action.toLowerCase().includes(q) ||
        step.description.toLowerCase().includes(q)
    ).map((step) => ({
      type: 'step' as const,
      title: `${step.code} ${step.title} — ${step.action}`,
      desc: step.description,
      badge: 'O Código',
      item: step
    }));

    return [...matchedArticles, ...matchedSolutions, ...matchedSteps];
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-[#04162B]/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl border border-[#E5E7EB] overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#E5E7EB] gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Buscar por artigos, soluções, processos, metodologia..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm sm:text-base text-[#04162B] placeholder-slate-400 focus:outline-hidden bg-transparent font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
            >
              Limpar
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
            aria-label="Fechar busca"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 overflow-y-auto flex-1 space-y-2">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-slate-400">
              <p className="text-xs sm:text-sm mb-3 text-[#475569]">
                Pesquise por <strong>processos</strong>, <strong>desperdício</strong>, <strong>CMV</strong>, <strong>IA</strong> ou <strong>autonomia</strong>.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 max-w-md mx-auto">
                {['Processos', 'Desperdício', 'CMV', 'Cozinha Pensante', 'Metodologia', 'IA'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 text-xs rounded-lg bg-[#F5F3EE] text-[#04162B] hover:bg-[#C38735]/15 hover:text-[#04162B] cursor-pointer transition-colors font-heading font-medium"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            results.map((res, i) => (
              <div
                key={i}
                onClick={() => {
                  if (res.type === 'article') {
                    onSelectArticle(res.item as Article);
                  } else if (res.type === 'solution') {
                    onNavigate('projetos');
                  } else {
                    onNavigate('codigo');
                  }
                  onClose();
                }}
                className="p-3.5 rounded-xl border border-slate-100 hover:border-[#C38735] hover:bg-[#F5F3EE] transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-heading font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-[#04162B] group-hover:bg-[#C38735]/20">
                    {res.type === 'article' && <BookOpen className="w-3 h-3 text-[#C38735]" />}
                    {res.type === 'solution' && <Sparkles className="w-3 h-3 text-[#C38735]" />}
                    {res.type === 'step' && <Layers className="w-3 h-3 text-[#C38735]" />}
                    <span>{res.badge}</span>
                  </span>
                  <span className="text-xs text-[#C38735] opacity-0 group-hover:opacity-100 transition-opacity font-bold flex items-center gap-1">
                    Ver &rarr;
                  </span>
                </div>
                <h4 className="text-sm font-heading font-bold text-[#04162B] group-hover:text-[#072F54] transition-colors">
                  {res.title}
                </h4>
                <p className="text-xs text-[#475569] line-clamp-2 mt-0.5">
                  {res.desc}
                </p>
              </div>
            ))
          ) : (
            <div className="py-8 text-center text-slate-500 text-xs sm:text-sm">
              Nenhum resultado encontrado para "<strong>{query}</strong>".
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-[#F5F3EE] border-t border-[#E5E7EB] text-[11px] text-slate-400 flex items-center justify-between">
          <span>Pressione ESC para fechar</span>
          <span className="font-heading font-semibold text-[#04162B]">Codekis Labs &bull; Busca Global</span>
        </div>

      </div>
    </div>
  );
};
