import React, { useState } from 'react';
import {
  ArrowRight,
  Brain,
  Layers,
  BarChart3,
  Compass,
  Sparkles,
  ChevronRight,
  AlertTriangle,
  Users,
  Repeat,
  Trash2,
  MessageSquareOff,
  UserCheck,
  ShieldAlert,
  Flame,
  CheckCircle2,
  Calendar,
  Clock,
  Cpu,
  Workflow,
  UtensilsCrossed,
  Layers3,
  TrendingUp,
  Sliders,
  Target,
  Home,
  Building2,
  AlertCircle
} from 'lucide-react';
import { PageKey, Article } from '../../types';
import {
  HERO_IMAGES,
  CODIGO_STEPS,
  CODEKIS_PROBLEMS,
  CODEKIS_SOLUTIONS,
  ARTICLES,
  HOUSE_ANALOGY,
  STARTUP_POSITIONING,
  STARTUP_THESIS,
  STARTUP_PITCH_BLOCKS,
  STARTUP_WHY_IT_EXISTS,
  STARTUP_AI_STATEMENT,
  STARTUP_CTA
} from '../../data/praxisData';
import { ButtonPrimary, ButtonSecondary, ButtonOutlineLight } from '../Buttons';
import { CodekisLogo } from '../CodekisLogo';

interface HomePageProps {
  onNavigate: (page: PageKey) => void;
  onSelectArticle: (article: Article) => void;
  onOpenCapture: (source?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectArticle,
  onOpenCapture
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(1); // Default to "Compreender"

  const getStepIcon = (key: string, className = "w-5 h-5") => {
    switch (key) {
      case 'executar':
        return <Sliders className={className} />;
      case 'compreender':
        return <Brain className={className} />;
      case 'medir':
        return <BarChart3 className={className} />;
      case 'decidir':
        return <Compass className={className} />;
      case 'padronizar':
        return <Workflow className={className} />;
      case 'melhorar':
        return <Sparkles className={className} />;
      default:
        return <Target className={className} />;
    }
  };

  const getProblemIcon = (id: string) => {
    switch (id) {
      case 'retrabalho':
        return <Repeat className="w-5 h-5 text-[#C38735]" />;
      case 'desperdicio':
        return <Trash2 className="w-5 h-5 text-[#C38735]" />;
      case 'comunicacao':
        return <MessageSquareOff className="w-5 h-5 text-[#C38735]" />;
      case 'supervisao':
        return <UserCheck className="w-5 h-5 text-[#C38735]" />;
      case 'autonomia':
        return <ShieldAlert className="w-5 h-5 text-[#C38735]" />;
      case 'dados':
        return <AlertTriangle className="w-5 h-5 text-[#C38735]" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-[#C38735]" />;
    }
  };

  const recentArticles = ARTICLES.slice(0, 3);

  return (
    <div className="bg-[#F5F3EE] text-[#475569] font-sans overflow-hidden">

      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#E5E7EB] overflow-hidden bg-gradient-to-b from-[#F5F3EE] via-[#FFFFFF] to-[#F5F3EE]">
        
        {/* Subtle geometric lines reflecting the CK symbol angle */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] rounded-full bg-[#072F54]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[450px] h-[450px] rounded-full bg-[#C38735]/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Microtext / Category Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#04162B]/5 border border-[#04162B]/10">
                <span className="w-2 h-2 rounded-full bg-[#C38735] animate-pulse" />
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#04162B]">
                  Startup de Desenvolvimento Profissional & Inteligência Operacional
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-heading font-extrabold text-[#04162B] leading-[1.12] tracking-tight">
                Desenvolvendo pessoas que compreendem, decidem e{' '}
                <span className="text-[#C38735] underline decoration-[#C38735]/40 decoration-4 underline-offset-4">
                  melhoram processos.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-[#475569] leading-relaxed max-w-2xl font-normal">
                {STARTUP_POSITIONING.statement}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <ButtonPrimary
                  size="lg"
                  onClick={() => onNavigate('codigo')}
                >
                  <span>Conheça o Código</span>
                  <ArrowRight className="w-4 h-4" />
                </ButtonPrimary>

                <ButtonSecondary
                  size="lg"
                  onClick={() => onNavigate('projetos')}
                >
                  <span>Explore nossas soluções</span>
                </ButtonSecondary>
              </div>

              {/* Microtext Taglines from brand board */}
              <div className="pt-6 border-t border-[#E5E7EB] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#475569]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C38735]" />
                  <span className="font-semibold text-[#04162B]">Processos + Pessoas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C38735]" />
                  <span className="font-semibold text-[#04162B]">Inteligência + IA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C38735]" />
                  <span className="font-semibold text-[#04162B]">Resultados Mensuráveis</span>
                </div>
              </div>

            </div>

            {/* Right Graphic: Architectural Visual Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl bg-white p-6 sm:p-8 shadow-xl border border-[#E5E7EB]">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#04162B]" />
                    <span className="w-3 h-3 rounded-full bg-[#072F54]" />
                    <span className="w-3 h-3 rounded-full bg-[#C38735]" />
                  </div>
                  <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-[#475569]">
                    Metodologia Codekis
                  </span>
                </div>

                {/* Central Concept Highlight */}
                <div className="py-6 space-y-4">
                  <div className="p-4 rounded-xl bg-[#04162B] text-white">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#C38735] font-bold block mb-1">
                      Premissa Central
                    </span>
                    <p className="text-base font-heading font-bold text-white leading-snug">
                      “Não basta executar. É preciso compreender o processo.”
                    </p>
                  </div>

                  {/* Flow comparison */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-[#F5F3EE] border border-[#E5E7EB]">
                      <span className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                        Atuação Mecânica
                      </span>
                      <p className="text-xs text-slate-700 font-medium leading-relaxed">
                        Fazer sem saber o porquê. Dependência cega de supervisão.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#072F54]/5 border border-[#072F54]/15">
                      <span className="text-[10px] font-bold uppercase text-[#072F54] block mb-1">
                        Atuação Codekis
                      </span>
                      <p className="text-xs text-[#04162B] font-semibold leading-relaxed">
                        Compreensão do todo, autonomia e melhoria contínua.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mini Methodology Steps preview */}
                <div className="pt-4 border-t border-[#E5E7EB] flex flex-col gap-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Ciclo de Evolução:</span>
                    <div className="flex items-center gap-1 font-heading font-bold text-[#04162B]">
                      <span>Executar</span>
                      <span className="text-[#C38735]">→</span>
                      <span>Decidir</span>
                      <span className="text-[#C38735]">→</span>
                      <span className="text-[#C38735]">Melhorar</span>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-[#F5F3EE] border border-[#E5E7EB] flex items-center justify-between text-[11px]">
                    <span className="text-[#04162B] font-semibold">Fundação: O Código</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-[#6E4212] font-semibold">Cômodo: Cozinha Pensante</span>
                  </div>
                </div>

              </div>

              {/* Decorative side badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#04162B] text-white px-4 py-3 rounded-xl shadow-lg border border-slate-700 hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#C38735] text-[#04162B] flex items-center justify-center font-bold font-heading">
                  CK
                </div>
                <div>
                  <p className="text-xs font-bold font-heading text-white">Laboratório de Processos</p>
                  <p className="text-[10px] text-slate-300">Pessoas + Dados + IA</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          2. SEÇÃO — O PROBLEMA (Identificado na gestão)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-[#04162B]/5 text-[#04162B] text-xs font-heading font-bold uppercase tracking-wider">
              Diagnóstico do Cenário Atual
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#04162B] tracking-tight leading-tight">
              O problema não está apenas em fazer. Está em{' '}
              <span className="text-[#C38735]">não compreender o processo.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Muitas organizações possuem profissionais capazes de executar tarefas com eficiência, mas ainda dependem excessivamente de supervisão, correção e controle. Quando o profissional não compreende o impacto de suas decisões sobre tempo, custo, qualidade, estoque, cliente e resultado, a organização perde capacidade de evolução.
            </p>
            <p className="text-sm font-semibold text-[#04162B] pt-1">
              A Codekis Labs nasce para desenvolver essa compreensão.
            </p>
          </div>

          {/* 6 Problem Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CODEKIS_PROBLEMS.map((problem) => (
              <div
                key={problem.id}
                className="p-6 rounded-2xl bg-[#F5F3EE] border border-[#E5E7EB] hover:border-[#C38735]/50 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {getProblemIcon(problem.id)}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-[#04162B] mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed mb-4">
                    {problem.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5E7EB] flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-[#C38735] uppercase tracking-wider">
                    Impacto:
                  </span>
                  <span className="text-xs text-[#04162B] font-medium">
                    {problem.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Transition CTA */}
          <div className="mt-12 p-6 rounded-2xl bg-[#04162B] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-lg font-heading font-bold text-white">
                Identifica essas dores na sua rotina ou equipe?
              </h4>
              <p className="text-sm text-slate-300">
                O Código é o método estruturado para transformar esse ciclo de improviso em maturidade operacional.
              </p>
            </div>
            <ButtonPrimary
              size="md"
              onClick={() => onNavigate('codigo')}
              className="shrink-0"
            >
              <span>Conhecer a Solução</span>
              <ArrowRight className="w-4 h-4" />
            </ButtonPrimary>
          </div>

        </div>
      </section>


      {/* =========================================================================
          2.1. SEÇÃO — NOSSA TESE & POR QUE A STARTUP EXISTE
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#F5F3EE] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Bloco 1: Nossa Tese */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E5E7EB] shadow-xs space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C38735]/15 border border-[#C38735]/30">
                <span className="w-2 h-2 rounded-full bg-[#C38735]" />
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#04162B]">
                  {STARTUP_THESIS.badge}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#04162B] tracking-tight">
                {STARTUP_THESIS.title}
              </h2>

              <div className="space-y-4 text-base text-[#475569] leading-relaxed">
                <p>
                  Muitas empresas treinam pessoas para executar tarefas, mas nem sempre desenvolvem essas pessoas para compreender o processo do qual fazem parte.
                </p>
                <p>
                  Quando o profissional sabe apenas executar, aumentam a dependência de supervisão, o retrabalho, o desperdício, a perda de conhecimento e a dificuldade de melhoria.
                </p>
                <p className="font-semibold text-[#04162B]">
                  A Codekis Labs nasce para atuar justamente nesse espaço.
                </p>
                
                <div className="p-5 rounded-2xl bg-[#04162B] text-white border border-[#072F54] space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C38735] block">
                    Definição Institucional
                  </span>
                  <p className="text-sm sm:text-base font-medium text-slate-200 leading-relaxed">
                    Somos uma startup de desenvolvimento profissional e inteligência operacional que combina processos, inteligência artificial, aprendizagem prática e melhoria contínua para transformar profissionais executores em pessoas capazes de compreender, analisar, decidir e melhorar processos.
                  </p>
                </div>
              </div>
            </div>

            {/* Bloco 2: Por que a Codekis Labs existe */}
            <div className="lg:col-span-5 bg-[#04162B] text-white p-8 sm:p-10 rounded-3xl border border-[#072F54] shadow-md space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C38735]/20 border border-[#C38735]/30 text-[#C38735] text-xs font-heading font-bold uppercase tracking-widest">
                  <span>{STARTUP_WHY_IT_EXISTS.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                  {STARTUP_WHY_IT_EXISTS.title}
                </h3>

                <div className="space-y-3.5 text-sm sm:text-base text-slate-300 leading-relaxed">
                  <p>
                    A Codekis Labs nasceu da observação de um problema simples, mas recorrente: organizações treinam pessoas para executar, mas nem sempre desenvolvem pessoas para compreender.
                  </p>
                  <p>
                    Essa diferença afeta autonomia, qualidade, custos, conhecimento, tomada de decisão e capacidade de melhoria.
                  </p>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-xs sm:text-sm font-medium">
                    A startup nasce para transformar essa realidade por meio de metodologia, tecnologia, diagnóstico e desenvolvimento humano.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700 flex items-center justify-between text-xs text-[#F5C06A] font-heading font-bold">
                <span>Metodologia + Tecnologia + Pessoas</span>
                <span className="text-slate-400">• Startup Viva</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          2.2. SEÇÃO — PITCH VISUAL NA HOME (4 BLOCOS EM GRID COM ÍCONES LINEARES)
          ========================================================================= */}
      <section id="pitch-visual-section" className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div id="pitch-visual-header" className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#04162B]/5 border border-[#04162B]/10 text-[#04162B] text-xs font-heading font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C38735]" />
              <span>Pitch Visual</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#04162B] tracking-tight">
              A trajetória da Codekis Labs em quatro movimentos
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Uma visão linear de como transformamos a dor da operação em capacidade de escala setorial.
            </p>
          </div>

          {/* Grid de 4 Blocos com Layout Limpo e Ícones Lineares */}
          <div id="pitch-visual-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative">
            {STARTUP_PITCH_BLOCKS.map((block) => {
              const cardId = `pitch-card-${block.number.toLowerCase()}-${block.label.toLowerCase().replace(/\s+/g, '-')}`;
              return (
                <div
                  key={block.number}
                  id={cardId}
                  className="bg-[#FAF9F6] rounded-2xl border border-[#E5E7EB] hover:border-[#C38735] hover:bg-white hover:shadow-md transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Linha superior: Ícone linear + Número da etapa */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] group-hover:border-[#C38735]/40 group-hover:bg-[#C38735]/10 group-hover:text-[#C38735] text-[#04162B] flex items-center justify-center transition-all duration-200 shrink-0 shadow-2xs">
                        {block.icon === 'AlertCircle' && (
                          <AlertCircle className="w-5 h-5 text-current" strokeWidth={1.75} />
                        )}
                        {block.icon === 'Cpu' && (
                          <Cpu className="w-5 h-5 text-current" strokeWidth={1.75} />
                        )}
                        {block.icon === 'UtensilsCrossed' && (
                          <UtensilsCrossed className="w-5 h-5 text-current" strokeWidth={1.75} />
                        )}
                        {block.icon === 'TrendingUp' && (
                          <TrendingUp className="w-5 h-5 text-current" strokeWidth={1.75} />
                        )}
                      </div>

                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-white border border-[#E5E7EB] text-[#04162B] group-hover:border-[#C38735]/40 group-hover:text-[#C38735] transition-colors">
                        {block.number}
                      </span>
                    </div>

                    {/* Rótulo e Título do Bloco */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C38735] block">
                        {block.label}
                      </span>
                      <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#04162B] leading-snug tracking-tight group-hover:text-[#072F54] transition-colors">
                        {block.title}
                      </h3>
                    </div>

                    {/* Conteúdo descritivo */}
                    <p className="text-sm text-[#475569] leading-relaxed">
                      {block.text}
                    </p>
                  </div>

                  {/* Rodapé linear com indicador de fluxo e ação */}
                  <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-500">
                      {block.stepFlow}
                    </span>
                    {block.linkPage ? (
                      <button
                        id={`pitch-action-${block.number}`}
                        type="button"
                        onClick={() => onNavigate(block.linkPage as PageKey)}
                        className="font-heading font-bold text-[#04162B] group-hover:text-[#C38735] inline-flex items-center gap-1 transition-colors hover:underline cursor-pointer"
                        title={`Explorar ${block.label}`}
                      >
                        <span>Explorar</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    ) : (
                      <span className="text-[#C38735] font-bold">→</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          3. SEÇÃO — O CÓDIGO (Metodologia)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F5F3EE] border-b border-[#E5E7EB] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-[#C38735]/15 text-[#6E4212] text-xs font-heading font-bold uppercase tracking-wider">
              A Metodologia Base da Startup
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#04162B] tracking-tight">
              O Código
            </h2>
            <p className="text-base sm:text-lg text-[#04162B] font-medium leading-relaxed">
              A metodologia-base da startup é o Código. Ele organiza o desenvolvimento profissional da execução até a melhoria contínua.
            </p>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Uma metodologia estruturada em seis movimentos para desenvolver profissionais que compreendem, decidem e melhoram processos.
            </p>
          </div>

          {/* Desktop Evolution Timeline (Horizontal 6 Stages) */}
          <div className="hidden lg:block mb-12">
            <div className="grid grid-cols-6 gap-3 relative">
              
              {/* Connecting line */}
              <div className="absolute top-1/2 left-8 right-8 h-1 bg-[#E5E7EB] -translate-y-1/2 z-0" />

              {CODIGO_STEPS.map((step, idx) => {
                const isActive = activeStepIndex === idx;
                return (
                  <div
                    key={step.key}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`relative z-10 p-5 rounded-2xl cursor-pointer transition-all duration-300 text-left border ${
                      isActive
                        ? 'bg-[#04162B] text-white border-[#04162B] shadow-xl scale-[1.03]'
                        : 'bg-white text-[#475569] border-[#E5E7EB] hover:border-[#C38735]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                          isActive
                            ? 'bg-[#C38735] text-[#04162B]'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {step.code}
                      </span>
                      <div className={isActive ? 'text-[#C38735]' : 'text-slate-400'}>
                        {getStepIcon(step.key, 'w-4 h-4')}
                      </div>
                    </div>

                    <h4
                      className={`text-base font-heading font-bold mb-1 ${
                        isActive ? 'text-white' : 'text-[#04162B]'
                      }`}
                    >
                      {step.title}
                    </h4>

                    <p
                      className={`text-xs leading-relaxed line-clamp-3 ${
                        isActive ? 'text-slate-300' : 'text-slate-500'
                      }`}
                    >
                      {step.action}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Step Detailed Highlight Box */}
          <div className="hidden lg:block mb-12">
            <div className="p-8 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#04162B] text-[#C38735]">
                      {CODIGO_STEPS[activeStepIndex].code}
                    </span>
                    <h3 className="text-2xl font-heading font-bold text-[#04162B]">
                      {CODIGO_STEPS[activeStepIndex].title} — {CODIGO_STEPS[activeStepIndex].action}
                    </h3>
                  </div>
                  <p className="text-base text-[#475569] leading-relaxed">
                    {CODIGO_STEPS[activeStepIndex].description}
                  </p>
                </div>

                <div className="lg:col-span-4 p-5 rounded-xl bg-[#F5F3EE] border border-[#E5E7EB] space-y-2">
                  <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#C38735]">
                    Pergunta de Reflexão
                  </span>
                  <p className="text-sm font-heading font-bold text-[#04162B]">
                    “{CODIGO_STEPS[activeStepIndex].question}”
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="lg:hidden space-y-4 mb-10">
            {CODIGO_STEPS.map((step) => (
              <div
                key={step.key}
                className="p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#04162B] text-[#C38735]">
                    {step.code}
                  </span>
                  <h4 className="text-lg font-heading font-bold text-[#04162B]">
                    {step.title}
                  </h4>
                </div>
                <p className="text-sm font-semibold text-[#C38735] mb-2">
                  {step.action}
                </p>
                <p className="text-xs text-[#475569] leading-relaxed mb-3">
                  {step.description}
                </p>
                <div className="text-[11px] font-medium text-slate-500 bg-[#F5F3EE] p-2.5 rounded-lg border border-[#E5E7EB]">
                  Pergunta: <span className="text-[#04162B] font-semibold">{step.question}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Central Methodology CTA */}
          <div className="text-center">
            <ButtonPrimary
              size="lg"
              onClick={() => onNavigate('codigo')}
            >
              <span>Entenda a metodologia completa</span>
              <ArrowRight className="w-4 h-4" />
            </ButtonPrimary>
          </div>

        </div>
      </section>


      {/* =========================================================================
          4. SEÇÃO — SOLUÇÕES
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-[#04162B]/5 text-[#04162B] text-xs font-heading font-bold uppercase tracking-wider">
              Atuação Prática
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#04162B] tracking-tight">
              Como a Codekis transforma desenvolvimento em prática
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Soluções consultivas e educacionais desenvolvidas para alinhar liderança, operadores, rotinas e ferramentas sob um mesmo padrão de compreensão.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CODEKIS_SOLUTIONS.map((sol) => (
              <div
                key={sol.id}
                className="p-7 rounded-2xl bg-[#F5F3EE] border border-[#E5E7EB] hover:border-[#04162B]/30 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-[#04162B] text-white flex items-center justify-center font-heading font-bold text-xs">
                      CK
                    </span>
                    <span className="text-[11px] font-heading font-bold text-[#C38735] uppercase tracking-wider">
                      Solução
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-[#04162B] mb-2">
                    {sol.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#072F54] mb-4">
                    {sol.short}
                  </p>

                  <div className="space-y-3 pt-3 border-t border-[#E5E7EB]">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Problema que resolve
                      </span>
                      <p className="text-xs text-[#475569] mt-0.5 leading-relaxed">
                        {sol.problem}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Resultado esperado
                      </span>
                      <p className="text-xs text-[#04162B] font-medium mt-0.5 leading-relaxed">
                        {sol.result}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5E7EB]">
                  <button
                    onClick={() => onNavigate('projetos')}
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#04162B] hover:text-[#C38735] transition-colors cursor-pointer"
                  >
                    <span>Conhecer detalhes da solução</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          5. SEÇÃO — ARQUITETURA DA CASA (O Código = Fundação / Cozinha = Cômodo)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#04162B] text-white relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#072F54]/50 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C38735]/20 border border-[#C38735]/30">
              <Home className="w-3.5 h-3.5 text-[#C38735]" />
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#C38735]">
                A Analogia Arquitetônica Fundamental
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
              O Código é a Fundação da Casa. <br className="hidden sm:inline" />
              A Cozinha Pensante é o Cômodo.
            </h2>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-2xl mx-auto my-3">
              <p className="text-base sm:text-lg font-heading font-bold text-[#F5C06A] italic">
                “{HOUSE_ANALOGY.quote}”
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Ninguém constrói uma cozinha flutuando no ar. <strong>O Código</strong> é o alicerce de sustentação de processos (os 6 estágios). <strong>O Código da Cozinha Pensante</strong> é o primeiro cômodo construído sobre esse alicerce: a prova de fogo prática no ambiente mais exigente da operação real.
            </p>
          </div>

          {/* Diagram Tree Layout: Da Casa à Fundação */}
          <div className="max-w-4xl mx-auto space-y-4">
            
            {/* Level 1: A CASA & O ECOSSISTEMA */}
            <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#C38735] block mb-1">
                A Casa em Pleno Funcionamento • O Ecossistema
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                CODEKIS LABS
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl mx-auto">
                O ambiente completo onde processos, pessoas, dados e inteligência artificial operam em harmonia para gerar valor.
              </p>
            </div>

            {/* Vertical connector arrow */}
            <div className="flex justify-center">
              <div className="w-0.5 h-6 bg-[#C38735]" />
            </div>

            {/* Level 2: OS CÔMODOS (Aplicações Setoriais) */}
            <div>
              <div className="text-center mb-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Os Cômodos da Casa (Aplicações Setoriais Vivas)
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Cômodo 1: Cozinha Pensante (Active) */}
                <div className="p-6 rounded-2xl bg-white text-[#04162B] text-left border-2 border-[#C38735] shadow-xl relative">
                  <span className="absolute top-4 right-4 text-[10px] font-heading font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#C38735] text-[#04162B]">
                    O Primeiro Cômodo
                  </span>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6E4212] block mb-1">
                    Ambiente Mais Severo da Casa
                  </span>
                  <h4 className="text-xl font-heading font-bold text-[#04162B]">
                    Código da Cozinha Pensante
                  </h4>
                  <p className="text-xs text-[#475569] mt-2 leading-relaxed">
                    A aplicação prática da fundação na gastronomia profissional: onde o fogo queima, o tempo é curto, os insumos são perecíveis e o CMV é medido em centavos.
                  </p>
                  <button
                    onClick={() => onNavigate('projeto-cozinha')}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#04162B] hover:text-[#C38735] cursor-pointer"
                  >
                    <span>Entrar na Cozinha Pensante</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Cômodo 2: Próximos Cômodos da Mesma Fundação */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Expansão da Casa
                    </span>
                    <h4 className="text-xl font-heading font-bold text-white">
                      Novos Cômodos Setoriais
                    </h4>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      Uma vez concretada a fundação d'O Código, qualquer outro ambiente pode ser edificado com a mesma solidez: serviços, saúde, indústria e logística.
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
                    <span className="px-2.5 py-1 rounded-md bg-white/10">Cômodo Serviços</span>
                    <span className="px-2.5 py-1 rounded-md bg-white/10">Cômodo Logística</span>
                    <span className="px-2.5 py-1 rounded-md bg-white/10">Cômodo Saúde</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Vertical connector arrow */}
            <div className="flex justify-center">
              <div className="w-0.5 h-6 bg-[#C38735]" />
            </div>

            {/* Level 3: A FUNDAÇÃO E O ALICERCE (O CÓDIGO) */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#072F54] to-[#04162B] border-2 border-[#C38735] text-center shadow-2xl relative">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#C38735] block mb-1">
                A Base de Sustentação da Casa • O Alicerce
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                O CÓDIGO (6 Estágios Estruturais)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl mx-auto leading-relaxed">
                Sem esse alicerce, nenhum cômodo fica de pé. É a base universal que sustenta toda a organização: <em>Executar → Compreender → Medir → Decidir → Padronizar → Melhorar</em>.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mt-6">
                {CODIGO_STEPS.map((step) => (
                  <div
                    key={step.code}
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center"
                  >
                    <span className="text-[10px] font-mono font-bold text-[#C38735] block">
                      {step.code}
                    </span>
                    <span className="text-xs font-heading font-bold text-white block">
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700 flex items-center justify-center">
                <button
                  onClick={() => onNavigate('codigo')}
                  className="inline-flex items-center gap-2 text-xs font-heading font-bold text-[#F5C06A] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Explorar a Fundação Completa d'O Código</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          6. SEÇÃO — CÓDIGO DA COZINHA PENSANTE (Primeira Vertical)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Vertical Identity & Details */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C38735]/15 border border-[#C38735]/30">
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#C38735]" />
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#04162B]">
                  Primeira Vertical & Laboratório Prático
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#04162B] tracking-tight">
                Código da Cozinha Pensante
              </h2>

              <div className="space-y-3 text-base sm:text-lg text-[#475569] leading-relaxed">
                <p className="font-semibold text-[#04162B]">
                  O Código da Cozinha Pensante é a primeira vertical da Codekis Labs e funciona como o primeiro laboratório de aplicação da metodologia.
                </p>
                <p>
                  A gastronomia é o primeiro ambiente de validação, mas o Código foi concebido para evoluir para outros setores. Na operação gastronômica, desenvolvemos profissionais capazes de ir além da execução e compreender produção, desperdício, CMV, estoque, fluxo, equipe, qualidade e tomada de decisão.
                </p>
              </div>

              {/* 8 Highlight Pills requested */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-slate-400 block">
                  Eixos de Compreensão Operacional:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Produção",
                    "CMV",
                    "Estoque",
                    "Desperdício",
                    "Fluxo",
                    "Equipe",
                    "Qualidade",
                    "Tomada de Decisão"
                  ].map((pill) => (
                    <span
                      key={pill}
                      className="px-3.5 py-1.5 rounded-lg bg-[#F5F3EE] border border-[#E5E7EB] text-xs font-heading font-bold text-[#04162B] hover:border-[#C38735] transition-colors"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA to Cozinha Pensante */}
              <div className="pt-4">
                <ButtonPrimary
                  size="lg"
                  onClick={() => onNavigate('projeto-cozinha')}
                >
                  <span>Conheça a Cozinha Pensante</span>
                  <ArrowRight className="w-4 h-4" />
                </ButtonPrimary>
              </div>

            </div>

            {/* Right Column: Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E5E7EB] group">
                <img
                  src={HERO_IMAGES.chefMain}
                  alt="Chef observando a operação na cozinha profissional"
                  className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#04162B] via-[#04162B]/40 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#C38735]">
                    Laboratório Operacional Vivo
                  </span>
                  <h4 className="text-xl font-heading font-bold text-white leading-snug">
                    A cozinha como o mais refinado ambiente de processos do mundo.
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Pressão de tempo, matéria-prima perecível e trabalho em equipe: se funciona na cozinha, funciona em qualquer organização.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          7. SEÇÃO — INTELIGÊNCIA ARTIFICIAL APLICADA
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F5F3EE] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Visual conceptual block (Pessoa + Dados + IA + Decisão) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-md space-y-6">
                
                <div className="text-center pb-4 border-b border-[#E5E7EB]">
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#C38735]">
                    A Fórmula Cognitiva Codekis
                  </span>
                  <h4 className="text-lg font-heading font-bold text-[#04162B] mt-1">
                    Equilíbrio entre Autonomia & Tecnologia
                  </h4>
                </div>

                {/* Conceptual 4-pillar flow */}
                <div className="space-y-3">
                  {[
                    { title: "01. Pessoa", desc: "Discernimento, contexto humano e responsabilidade ética.", icon: Users },
                    { title: "02. Dados", desc: "Fatos reais medidos na operação, sem maquiagem ou suposições.", icon: BarChart3 },
                    { title: "03. IA", desc: "Processamento veloz, modelos preditivos e suporte cognitivo.", icon: Cpu },
                    { title: "04. Decisão", desc: "Ação consciente orientada a resultado e melhoria contínua.", icon: Compass }
                  ].map((item, i) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="p-3.5 rounded-xl bg-[#F5F3EE] border border-[#E5E7EB] flex items-center gap-3.5"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#04162B] text-[#C38735] flex items-center justify-center shrink-0">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-heading font-bold text-[#04162B]">{item.title}</p>
                          <p className="text-[11px] text-[#475569] leading-tight">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-3 rounded-xl bg-[#072F54]/5 border border-[#072F54]/15 text-center">
                  <p className="text-xs text-[#04162B] font-semibold">
                    Tecnologia a serviço da clareza humana.
                  </p>
                </div>

              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#04162B]/5 border border-[#04162B]/10">
                <Cpu className="w-3.5 h-3.5 text-[#04162B]" />
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#04162B]">
                  Inteligência Artificial Aplicada
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#04162B] tracking-tight leading-tight">
                Inteligência artificial como ferramenta.{' '}
                <span className="text-[#C38735]">Inteligência humana como direção.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
                A tecnologia amplia a capacidade de análise, diagnóstico, aprendizagem e tomada de decisão, mas o objetivo da Codekis não é substituir pessoas. É desenvolver pessoas mais preparadas para compreender e melhorar processos.
              </p>

              <div className="p-5 rounded-2xl bg-white border border-[#E5E7EB] space-y-2">
                <h4 className="text-sm font-heading font-bold text-[#04162B]">
                  Por que a compreensão humana continua sendo insubstituível?
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Automatizar uma tarefa que não é compreendida apenas acelera o desperdício. Somente profissionais com olhar treinado de processos conseguem calibrar a IA para gerar ganhos reais de produtividade e qualidade.
                </p>
              </div>

              <div className="pt-2">
                <ButtonSecondary
                  size="md"
                  onClick={() => onNavigate('projetos')}
                >
                  <span>Ver projetos de IA aplicada</span>
                  <ArrowRight className="w-4 h-4" />
                </ButtonSecondary>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          8. SEÇÃO — CONTEÚDOS & ESTUDOS (Artigos aprofundados)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-md bg-[#04162B]/5 text-[#04162B] text-xs font-heading font-bold uppercase tracking-wider">
                Produção de Conhecimento
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#04162B] tracking-tight">
                Conhecimento para quem quer compreender mais
              </h2>
              <p className="text-base text-[#475569]">
                Artigos práticos, estudos de caso e análises estruturadas de processos com fundamentação técnica e visão autoral.
              </p>
            </div>

            <ButtonSecondary
              size="md"
              onClick={() => onNavigate('artigos')}
              className="shrink-0"
            >
              <span>Ver todos os artigos</span>
              <ArrowRight className="w-4 h-4" />
            </ButtonSecondary>
          </div>

          {/* 3 Featured Articles Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="bg-[#F5F3EE] rounded-2xl overflow-hidden border border-[#E5E7EB] hover:border-[#C38735] hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col group"
              >
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

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
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

                    <h3 className="text-lg font-heading font-bold text-[#04162B] group-hover:text-[#072F54] transition-colors line-clamp-2 leading-snug mb-2">
                      {article.title}
                    </h3>

                    <p className="text-xs text-[#475569] line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-heading font-bold text-[#04162B]">
                    <span>Ler artigo completo</span>
                    <ChevronRight className="w-4 h-4 text-[#C38735] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          9. SEÇÃO — CTA FINAL (Azul Codekis #04162B)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#04162B] text-white relative overflow-hidden border-b border-[#072F54]">
        
        {/* Glow ambient effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C38735]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#072F54]/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          
          <div className="inline-flex items-center justify-center">
            <CodekisLogo variant="stacked" theme="light" size="lg" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight mt-4">
            Empresas mais inteligentes começam com pessoas que entendem o que fazem.
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A Codekis Labs desenvolve pessoas para compreender, decidir e melhorar processos.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <ButtonPrimary
              size="lg"
              onClick={() => onNavigate('codigo')}
            >
              <span>Conheça o Código</span>
              <ArrowRight className="w-4 h-4" />
            </ButtonPrimary>

            <ButtonOutlineLight
              size="lg"
              onClick={() => onNavigate('contato')}
            >
              <span>Fale com a Codekis</span>
            </ButtonOutlineLight>
          </div>

          <p className="text-xs text-slate-400 pt-4">
            Processos • Pessoas • Inteligência Artificial • Aprendizagem Prática
          </p>

        </div>
      </section>

    </div>
  );
};
