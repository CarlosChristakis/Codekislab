import React, { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Sparkles,
  Eye,
  Brain,
  Scale,
  TrendingUp,
  FileText,
  Award,
  Users,
  Building
} from 'lucide-react';
import { PageKey } from '../../types';
import { COURSE_MODULES } from '../../data/praxisData';
import { ButtonPrimary, ButtonSecondary, ButtonOutlineLight } from '../Buttons';

interface CursoPageProps {
  onNavigate: (page: PageKey) => void;
  onOpenCapture: (source?: string) => void;
}

export const CursoPage: React.FC<CursoPageProps> = ({
  onNavigate,
  onOpenCapture
}) => {
  const [expandedModule, setExpandedModule] = useState<number | null>(1);

  const getModuleIcon = (num: number) => {
    switch (num) {
      case 1:
        return <Eye className="w-5 h-5 text-[#C38735]" />;
      case 2:
        return <Brain className="w-5 h-5 text-[#C38735]" />;
      case 3:
        return <Scale className="w-5 h-5 text-[#C38735]" />;
      case 4:
        return <TrendingUp className="w-5 h-5 text-[#C38735]" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#C38735]" />;
    }
  };

  return (
    <div className="bg-[#F5F3EE] font-sans text-[#475569]">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#04162B] text-white py-16 lg:py-24 border-b border-[#072F54] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#072F54]/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#C38735]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C38735]/20 border border-[#C38735]/30">
                <span className="w-2 h-2 rounded-full bg-[#C38735]" />
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#C38735]">
                  Formações & Aprendizagem Prática
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Cursos & Imersões
              </h1>

              <div className="text-xl sm:text-2xl font-heading font-bold text-[#C38735]">
                Aprender para compreender, decidir e transformar a operação.
              </div>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                As capacitações da Codekis Lab são experiências de aprendizagem construídas a partir de problemas reais de chão. O objetivo não é acumular certificados decorativos, mas desenvolver senso crítico, autonomia e capacidade resolutiva.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <ButtonPrimary
                  size="md"
                  onClick={() => onOpenCapture('curso_hero')}
                >
                  <span>Acompanhar próximas turmas</span>
                  <ArrowRight className="w-4 h-4" />
                </ButtonPrimary>
                <ButtonOutlineLight
                  size="md"
                  onClick={() => onNavigate('projeto-cozinha')}
                >
                  <span>Conhecer o Projeto Cozinha</span>
                </ButtonOutlineLight>
              </div>
            </div>

            {/* Right Card: Note Box */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 shadow-2xl space-y-6 backdrop-blur-xs">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#C38735]">
                  Ciclo de Desenvolvimento Cognitivo
                </span>
                <div className="space-y-3 font-heading text-2xl sm:text-3xl font-extrabold leading-tight">
                  <div className="text-[#C38735]">1. Executar com presença.</div>
                  <div className="text-slate-300">2. Compreender a esteira.</div>
                  <div className="text-slate-200">3. Decidir com números.</div>
                  <div className="text-white">4. Melhorar continuamente.</div>
                </div>
                <div className="pt-4 border-t border-white/10 text-xs text-slate-400">
                  Metodologia proprietária aplicada em diagnósticos, treinamentos in company e programas executivos.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECTION — FORMAÇÃO PRINCIPAL: O CÓDIGO DA COZINHA PENSANTE */}
      <section className="py-20 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 space-y-3">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#C38735] block">
              Formação em Destaque
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#04162B] tracking-tight">
              O Código da Cozinha Pensante
            </h2>
            <p className="text-base text-[#475569] max-w-3xl leading-relaxed">
              O curso inicial do ecossistema é voltado para operações gastronômicas, cozinhas profissionais, confeitarias e serviços de alimentação. É a formação prática que ensina a construir o primeiro cômodo da casa, conectando o alicerce d'<strong>O Código</strong> às exigências do chão de operação da cozinha.
            </p>
          </div>

          {/* Module Accordion */}
          <div className="space-y-4">
            {COURSE_MODULES.map((mod) => {
              const isOpen = expandedModule === mod.number;
              return (
                <div
                  key={mod.number}
                  className="rounded-3xl border border-[#E5E7EB] bg-[#F5F3EE]/40 overflow-hidden transition-all duration-300 hover:border-[#04162B]/30"
                >
                  <button
                    onClick={() => setExpandedModule(isOpen ? null : mod.number)}
                    className="w-full p-6 sm:p-8 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#04162B] text-white flex items-center justify-center font-heading font-bold shrink-0">
                        {mod.code}
                      </div>
                      <div>
                        <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#C38735] block">
                          Módulo {mod.number}
                        </span>
                        <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#04162B]">
                          {mod.title}
                        </h3>
                      </div>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#04162B]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#E5E7EB] space-y-6 animate-in fade-in duration-200">
                      
                      {/* Objective */}
                      <div className="p-4 rounded-2xl bg-[#04162B] text-white space-y-1">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C38735]">
                          Objetivo de Aprendizagem
                        </span>
                        <p className="text-sm font-heading font-semibold text-white">
                          {mod.objective}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-[#475569] leading-relaxed">
                        {mod.description}
                      </p>

                      {/* Topics */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-[#04162B]">
                          Tópicos Trabalhados:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {mod.topics.map((t, idx) => (
                            <div
                              key={idx}
                              className="p-3 rounded-xl bg-white border border-[#E5E7EB] flex items-start gap-2.5 text-xs text-[#475569]"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#C38735] shrink-0 mt-0.5" />
                              <span>{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Real Case Example & Deliverable */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div className="p-4 rounded-2xl bg-white border border-[#E5E7EB] space-y-1">
                          <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#04162B]">
                            Situação Real Examinada:
                          </span>
                          <p className="text-xs text-[#475569] leading-relaxed">
                            {mod.situationExample}
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-[#E5E7EB] space-y-1">
                          <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#C38735]">
                            Entregável Prático:
                          </span>
                          <p className="text-xs text-[#475569] leading-relaxed font-semibold">
                            {mod.deliverable}
                          </p>
                        </div>
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Institutional Note */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#F5F3EE] border border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-heading font-bold text-[#04162B]">
                Precisa treinar a sua equipe in company?
              </h4>
              <p className="text-xs text-[#475569]">
                Formatamos diagnósticos prévios e treinamentos adaptados à operação do seu negócio.
              </p>
            </div>
            <ButtonPrimary
              size="sm"
              onClick={() => onNavigate('contato')}
              className="shrink-0"
            >
              <span>Solicitar proposta in company</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </ButtonPrimary>
          </div>

        </div>
      </section>

    </div>
  );
};
