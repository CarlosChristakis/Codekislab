import React, { useState } from 'react';
import {
  Search,
  Clock,
  Calendar,
  ChevronRight,
  ArrowRight,
  BookOpen,
  Sparkles,
  Filter,
  TrendingUp,
  Tag
} from 'lucide-react';
import { PageKey, Article, ArticleCategory } from '../../types';
import { ARTICLES } from '../../data/praxisData';
import { ButtonPrimary, ButtonSecondary } from '../Buttons';

interface ArtigosPageProps {
  onNavigate: (page: PageKey) => void;
  onSelectArticle: (article: Article) => void;
  onOpenCapture: (source?: string) => void;
}

export const ArtigosPage: React.FC<ArtigosPageProps> = ({
  onNavigate,
  onSelectArticle,
  onOpenCapture
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories: string[] = [
    'Todos',
    'Processos',
    'Gastronomia',
    'Gestão',
    'Inteligência Artificial',
    'Pessoas e Aprendizagem'
  ];

  const filteredArticles = ARTICLES.filter((art) => {
    const articleText = (art.summary || art.metaDescription || '').toLowerCase();
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      articleText.includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'Todos' ||
      art.category === selectedCategory ||
      (selectedCategory === 'Inteligência Artificial' && art.category === 'IA') ||
      (selectedCategory === 'Pessoas e Aprendizagem' && art.category === 'Pessoas');

    return matchesSearch && matchesCategory;
  });

  const featuredArticle = ARTICLES[0];

  return (
    <div className="bg-[#F5F3EE] text-[#475569] font-sans overflow-hidden">
      
      {/* 1. HERO EDITORIAL */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 bg-[#04162B] text-white border-b border-[#072F54] overflow-hidden">
        
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#072F54]/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#C38735]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C38735]/20 border border-[#C38735]/30">
              <span className="w-2 h-2 rounded-full bg-[#C38735]" />
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#C38735]">
                Publicações & Ensaios
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Artigos, Estudos & Reflexões
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Conteúdos aprofundados sobre processos, operações, pessoas e inteligência artificial aplicada. Textos autorais para quem deseja compreender como as coisas realmente funcionam.
            </p>

            {/* Search Bar */}
            <div className="pt-2 max-w-xl">
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Pesquisar por tema, conceito ou palavra-chave..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-hidden focus:border-[#C38735] focus:ring-2 focus:ring-[#C38735]/30 transition-all text-sm font-sans"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. ARTIGO EM DESTAQUE (Spotlight) */}
      {!searchQuery && selectedCategory === 'Todos' && featuredArticle && (
        <section className="py-12 bg-white border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#C38735] block mb-4">
              Em Destaque Editorial
            </span>

            <div
              onClick={() => onSelectArticle(featuredArticle)}
              className="p-6 sm:p-8 rounded-3xl bg-[#F5F3EE] border border-[#E5E7EB] hover:border-[#04162B]/30 hover:shadow-lg transition-all duration-300 cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md text-xs font-heading font-bold uppercase tracking-wider bg-[#04162B] text-white">
                    {featuredArticle.category}
                  </span>
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#04162B] group-hover:text-[#072F54] transition-colors leading-tight">
                  {featuredArticle.title}
                </h2>

                <p className="text-sm sm:text-base text-[#475569] leading-relaxed line-clamp-3">
                  {featuredArticle.summary}
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#04162B] text-white flex items-center justify-center font-bold text-xs">
                    {featuredArticle.author.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-heading font-bold text-[#04162B]">{featuredArticle.author.name}</p>
                    <p className="text-[11px] text-slate-500">{featuredArticle.date}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 text-xs font-heading font-bold text-[#C38735] group-hover:translate-x-1 transition-transform">
                    Ler artigo completo <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-md h-64 sm:h-80">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* 3. FILTROS & GRID DE ARTIGOS */}
      <section className="py-16 lg:py-24 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            <span className="text-xs font-heading font-bold text-slate-500 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Filtrar por:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-heading font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#04162B] text-white shadow-sm'
                    : 'bg-white text-[#475569] border border-[#E5E7EB] hover:border-[#C38735]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results Counter */}
          <div className="mb-6 flex items-center justify-between text-xs text-slate-500">
            <span>Mostrando {filteredArticles.length} artigos</span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#C38735] font-semibold hover:underline cursor-pointer"
              >
                Limpar busca
              </button>
            )}
          </div>

          {/* Grid of Articles */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  onClick={() => onSelectArticle(article)}
                  className="bg-white rounded-3xl overflow-hidden border border-[#E5E7EB] hover:border-[#C38735] hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-heading font-bold uppercase tracking-wider bg-[#04162B] text-white">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {article.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-heading font-bold text-[#04162B] group-hover:text-[#072F54] transition-colors line-clamp-2 leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-xs text-[#475569] line-clamp-3 leading-relaxed">
                        {article.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">{article.author.name}</span>
                      <span className="font-heading font-bold text-[#04162B] group-hover:text-[#C38735] inline-flex items-center gap-1 transition-colors">
                        Ler artigo <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-[#E5E7EB] p-8 max-w-md mx-auto space-y-4">
              <BookOpen className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="text-lg font-heading font-bold text-[#04162B]">
                Nenhum artigo encontrado
              </h3>
              <p className="text-xs text-slate-500">
                Tente buscar com outros termos ou selecione outra categoria.
              </p>
              <ButtonSecondary
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Todos');
                }}
              >
                Ver todos os artigos
              </ButtonSecondary>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
