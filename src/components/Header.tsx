import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { PageKey } from '../types';
import { CodekisLogo } from './CodekisLogo';
import { ButtonPrimary } from './Buttons';

interface HeaderProps {
  currentPage: PageKey;
  onNavigate: (page: PageKey) => void;
  onOpenSearch: () => void;
  onOpenCapture: (source?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenCapture
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { key: PageKey; label: string; highlight?: boolean }[] = [
    { key: 'home', label: 'Home' },
    { key: 'codigo', label: 'O Código' },
    { key: 'projetos', label: 'Soluções' },
    { key: 'projeto-cozinha', label: 'Cozinha Pensante' },
    { key: 'artigos', label: 'Conteúdos' },
    { key: 'sobre', label: 'Sobre' },
    { key: 'contato', label: 'Contato' }
  ];

  const handleNavClick = (page: PageKey) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const isNavActive = (key: PageKey) => {
    if (currentPage === key) return true;
    if (key === 'artigos' && currentPage === 'artigo-detalhe') return true;
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E5E7EB]'
          : 'bg-[#F5F3EE]/90 backdrop-blur-sm border-b border-[#E5E7EB]/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. Codekis Labs Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C38735] rounded-xl p-1 -ml-1 transition-opacity hover:opacity-95"
            aria-label="Ir para a página inicial da Codekis Labs"
          >
            <CodekisLogo variant="horizontal" theme="dark" size="md" />
          </button>

          {/* 2. Desktop Navigation Items */}
          <nav className="hidden xl:flex items-center gap-1.5" aria-label="Navegação Principal">
            {navItems.map((item) => {
              const active = isNavActive(item.key);
              return (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`relative px-3.5 py-2 text-sm font-heading font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    active
                      ? 'text-[#04162B] font-bold bg-[#04162B]/5'
                      : 'text-[#475569] hover:text-[#04162B] hover:bg-[#04162B]/5'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C38735] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Navigation for medium screens (condensed) */}
          <nav className="hidden lg:flex xl:hidden items-center gap-1" aria-label="Navegação Intermediária">
            {[
              { key: 'home' as PageKey, label: 'Home' },
              { key: 'codigo' as PageKey, label: 'O Código' },
              { key: 'projetos' as PageKey, label: 'Soluções' },
              { key: 'projeto-cozinha' as PageKey, label: 'Cozinha' },
              { key: 'artigos' as PageKey, label: 'Conteúdos' },
              { key: 'sobre' as PageKey, label: 'Sobre' }
            ].map((item) => {
              const active = isNavActive(item.key);
              return (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`px-2.5 py-1.5 text-xs font-heading font-medium rounded-md transition-all cursor-pointer ${
                    active
                      ? 'text-[#04162B] font-bold bg-[#04162B]/5'
                      : 'text-[#475569] hover:text-[#04162B]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* 3. Header Actions (Search + CTA) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Trigger Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-[#475569] bg-white border border-[#E5E7EB] hover:border-[#04162B]/30 hover:text-[#04162B] rounded-xl transition-all cursor-pointer shadow-2xs"
              title="Buscar conteúdos e artigos (Ctrl + K)"
              aria-label="Abrir busca de artigos"
            >
              <Search className="w-3.5 h-3.5 text-[#475569]" />
              <span className="hidden md:inline">Buscar</span>
              <kbd className="hidden md:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-slate-500 bg-slate-100 rounded border border-slate-200">
                ⌘K
              </kbd>
            </button>

            {/* Primary CTA Button: Conheça o Código */}
            <ButtonPrimary
              size="sm"
              onClick={() => handleNavClick('codigo')}
              className="shadow-xs"
            >
              <span>Conheça o Código</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </ButtonPrimary>
          </div>

          {/* 4. Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#475569] hover:text-[#04162B] rounded-lg hover:bg-slate-100 sm:hidden"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#04162B] hover:bg-white/80 border border-[#E5E7EB] transition-colors focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* 5. Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#E5E7EB] shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 pt-4 pb-6 space-y-3">
            
            {/* Tagline header in drawer */}
            <div className="px-3 py-2 bg-[#F5F3EE] rounded-xl border border-[#E5E7EB] mb-2">
              <p className="text-xs text-[#04162B] font-heading font-semibold">
                Codekis Labs
              </p>
              <p className="text-[11px] text-[#475569] mt-0.5">
                Desenvolvendo pessoas que compreendem, decidem e melhoram processos.
              </p>
            </div>

            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const active = isNavActive(item.key);
                return (
                  <button
                    key={item.key}
                    onClick={() => handleNavClick(item.key)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-heading font-medium text-left transition-all ${
                      active
                        ? 'bg-[#04162B] text-white font-bold'
                        : 'text-[#04162B] hover:bg-[#F5F3EE]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-[#C38735]" />}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Drawer CTA */}
            <div className="pt-3 border-t border-[#E5E7EB] space-y-2">
              <ButtonPrimary
                fullWidth
                size="md"
                onClick={() => handleNavClick('codigo')}
              >
                <span>Conheça o Código</span>
                <ArrowRight className="w-4 h-4" />
              </ButtonPrimary>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCapture('header_mobile');
                }}
                className="w-full py-2.5 px-4 text-xs text-center font-heading font-semibold text-[#475569] hover:text-[#04162B] hover:bg-[#F5F3EE] rounded-xl transition-colors"
              >
                Receber materiais e novidades
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
