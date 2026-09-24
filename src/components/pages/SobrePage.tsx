import React from 'react';
import {
  ArrowRight,
  ArrowDown,
  Brain,
  Layers,
  Sparkles,
  Linkedin,
  Instagram,
  Youtube,
  Quote,
  CheckCircle2,
  Compass,
  Cpu,
  Users,
  Workflow,
  GraduationCap,
  Target,
  Layers3,
  Network
} from 'lucide-react';
import { PageKey } from '../../types';
import {
  CARLOS_INFO,
  HERO_IMAGES,
  STARTUP_POSITIONING,
  STARTUP_PROSE_PITCH,
  STARTUP_VISION,
  STARTUP_SCALABILITY,
  STARTUP_CTA
} from '../../data/praxisData';
import { ButtonPrimary, ButtonSecondary, ButtonOutlineLight } from '../Buttons';
import { CodekisLogo } from '../CodekisLogo';

interface SobrePageProps {
  onNavigate: (page: PageKey) => void;
  onOpenCapture: (source?: string) => void;
}

export const SobrePage: React.FC<SobrePageProps> = ({
  onNavigate,
  onOpenCapture
}) => {
  return (
    <div className="bg-[#F5F3EE] text-[#475569] font-sans overflow-hidden">
      
      {/* 1. HERO INSTITUCIONAL */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 bg-[#04162B] text-white border-b border-[#072F54] overflow-hidden">
        
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#072F54]/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#C38735]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C38735]/20 border border-[#C38735]/30">
              <span className="w-2 h-2 rounded-full bg-[#C38735]" />
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#C38735]">
                Startup de Inteligência Operacional
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Sobre a Codekis Lab
            </h1>

            <p className="text-xl sm:text-2xl font-heading font-bold text-[#F5C06A] leading-snug">
              Desenvolvendo pessoas que compreendem, decidem e melhoram processos.
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              {STARTUP_POSITIONING.statement}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <ButtonPrimary
                size="lg"
                onClick={() => onNavigate('codigo')}
              >
                <span>Conheça o Código</span>
                <ArrowRight className="w-4 h-4" />
              </ButtonPrimary>

              <ButtonOutlineLight
                size="lg"
                onClick={() => onNavigate('projetos')}
              >
                <span>Conhecer as soluções</span>
              </ButtonOutlineLight>
            </div>

          </div>
        </div>
      </section>


      {/* 2. PITCH INSTITUCIONAL DA STARTUP (EM FORMATO DE PROSA) */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto space-y-10">
            
            <div className="text-center space-y-3">
              <span className="inline-block px-3 py-1 rounded-md bg-[#04162B]/5 text-[#04162B] text-xs font-heading font-bold uppercase tracking-wider">
                Pitch Institucional
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#04162B] tracking-tight">
                Como e por que a Codekis Lab foi criada
              </h2>
            </div>

            {/* Prosa Institucional da Startup */}
            <div className="space-y-6 text-base sm:text-lg text-[#475569] leading-relaxed bg-[#F5F3EE] p-8 sm:p-12 rounded-3xl border border-[#E5E7EB]">
              {STARTUP_PROSE_PITCH.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={
                    idx === 0
                      ? 'text-lg sm:text-xl font-heading font-bold text-[#04162B] leading-snug'
                      : idx === 3
                      ? 'p-4 rounded-xl bg-white border border-[#E5E7EB] font-medium text-[#04162B]'
                      : ''
                  }
                >
                  {paragraph}
                </p>
              ))}
              
              <div className="pt-4 border-t border-[#E5E7EB] flex items-center gap-3 text-xs sm:text-sm text-[#04162B] font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C38735] shrink-0" />
                <span>
                  <strong>A Analogia da Casa:</strong> O Código é a base e a fundação inabalável de processos; O Código da Cozinha Pensante é o primeiro cômodo edificado sobre esse alicerce, provando a metodologia no ambiente de maior pressão e exigência da operação real.
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 3. OS 4 PILARES DA CODEKIS LAB */}
      <section className="py-20 lg:py-28 bg-[#F5F3EE] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-[#04162B]/5 text-[#04162B] text-xs font-heading font-bold uppercase tracking-wider">
              Pilares de Sustentação
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#04162B] tracking-tight">
              Os 4 Fundamentos do Ecossistema
            </h2>
            <p className="text-base sm:text-lg text-[#475569]">
              Quatro forças interdependentes que estruturam cada vertical, diagnóstico ou aplicação da Codekis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-7 rounded-2xl bg-white border border-[#E5E7EB] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#04162B] text-[#C38735] flex items-center justify-center">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#04162B]">Processos</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                A espinha dorsal de qualquer operação. Mapear o começo, meio e fim das atividades para criar clareza, ritmo e eliminar gargalos.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#E5E7EB] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#04162B] text-[#C38735] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#04162B]">Pessoas</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                O centro de tudo. Desenvolver discernimento, senso de dono e capacidade de julgamento em quem está operando no dia a dia.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#E5E7EB] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#04162B] text-[#C38735] flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#04162B]">Inteligência Artificial</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Tecnologia como ferramenta para ampliar análise e diagnóstico. Inteligência humana como bússola e direção.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#E5E7EB] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#04162B] text-[#C38735] flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#04162B]">Aprendizagem Prática</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Conhecimento que se valida na bancada e na esteira da rotina. Métodos ativos, resolução de atritos reais e melhoria contínua.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* 4. VISÃO */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-[#04162B] rounded-3xl p-8 sm:p-14 text-white border border-[#072F54] space-y-6 shadow-xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C38735]">
              {STARTUP_VISION.title}
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white leading-tight">
              {STARTUP_VISION.text}
            </h2>
            <div className="pt-4 border-t border-slate-700 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
              <span>Desenvolvimento Humano • IA • Processos • Melhoria Contínua</span>
              <span className="text-[#F5C06A] font-bold">Codekis Lab</span>
            </div>
          </div>
        </div>
      </section>


      {/* 5. SEÇÃO DE ESCALABILIDADE: UM CÓDIGO. MÚLTIPLAS APLICAÇÕES. */}
      <section className="py-20 lg:py-28 bg-[#F5F3EE] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-[#04162B]/5 text-[#04162B] text-xs font-heading font-bold uppercase tracking-wider">
              Escalabilidade & Arquitetura
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#04162B] tracking-tight">
              {STARTUP_SCALABILITY.title}
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              {STARTUP_SCALABILITY.text}
            </p>
          </div>

          {/* Fluxo Visual de Escalabilidade (CODEKIS LAB ↓ CÓDIGO ↓ CÓDIGO DA COZINHA PENSANTE ↓ FUTURAS VERTICAIS) */}
          <div className="max-w-4xl mx-auto space-y-4">
            
            {/* Nível 1: CODEKIS LAB */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#04162B] text-white border border-[#072F54] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#C38735] shrink-0 font-mono font-bold text-sm">
                  01
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#C38735]">
                    A Empresa & Visão Central
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                    CODEKIS LAB
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Startup de desenvolvimento profissional e inteligência operacional.
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#C38735]/20 text-[#F5C06A] text-xs font-heading font-bold uppercase tracking-wider shrink-0">
                Ecossistema
              </span>
            </div>

            {/* Conector Visual */}
            <div className="flex justify-center text-[#C38735]">
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </div>

            {/* Nível 2: CÓDIGO */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-[#C38735] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#04162B] flex items-center justify-center text-[#C38735] shrink-0 font-mono font-bold text-sm">
                  02
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#C38735]">
                    A Metodologia-Base
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#04162B]">
                    CÓDIGO
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] mt-1">
                    6 estágios universais: Executar ↓ Compreender ↓ Medir ↓ Decidir ↓ Padronizar ↓ Melhorar.
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#04162B] text-white text-xs font-heading font-bold uppercase tracking-wider shrink-0">
                A Fundação
              </span>
            </div>

            {/* Conector Visual */}
            <div className="flex justify-center text-[#C38735]">
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </div>

            {/* Nível 3: CÓDIGO DA COZINHA PENSANTE */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#E5E7EB] hover:border-[#C38735] transition-all flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#C38735]/15 flex items-center justify-center text-[#04162B] shrink-0 font-mono font-bold text-sm">
                  03
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#072F54]">
                    Primeira Vertical & Laboratório Prático
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#04162B]">
                    CÓDIGO DA COZINHA PENSANTE
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] mt-1">
                    A gastronomia como primeiro teste extremo de pressão, tempo e precisão.
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#C38735]/20 text-[#6E4212] text-xs font-heading font-bold uppercase tracking-wider shrink-0">
                1º Cômodo Ativo
              </span>
            </div>

            {/* Conector Visual */}
            <div className="flex justify-center text-slate-400">
              <ArrowDown className="w-6 h-6" />
            </div>

            {/* Nível 4: FUTURAS VERTICAIS */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/70 border border-dashed border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center text-slate-600 shrink-0 font-mono font-bold text-sm">
                  04
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500">
                    Expansão Setorial
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-700">
                    FUTURAS VERTICAIS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Serviços, Saúde, Logística, Atendimento e Operações Intensivas.
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-heading font-bold uppercase tracking-wider shrink-0">
                Em Roadmap
              </span>
            </div>

          </div>

        </div>
      </section>


      {/* 6. SOBRE A LIDERANÇA / CARLOS CHRISTAKIS */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E5E7EB]">
                <img
                  src={HERO_IMAGES.authorPortrait}
                  alt={CARLOS_INFO.name}
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04162B] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-heading font-bold">{CARLOS_INFO.name}</h3>
                  <p className="text-xs text-[#C38735]">{CARLOS_INFO.title}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 rounded-md bg-[#04162B]/5 text-[#04162B] text-xs font-heading font-bold uppercase tracking-wider">
                Fundação & Liderança
              </span>

              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#04162B] tracking-tight">
                Origem e Experiência Prática
              </h2>

              <p className="text-base text-[#475569] leading-relaxed">
                {CARLOS_INFO.bio}
              </p>

              <div className="p-5 rounded-2xl bg-[#F5F3EE] border border-[#E5E7EB] space-y-2">
                <p className="text-xs font-heading font-bold uppercase tracking-wider text-[#C38735]">
                  Foco de Pesquisa & Implementação
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#04162B] font-medium pt-1">
                  {CARLOS_INFO.focus.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C38735]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={CARLOS_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-[#E5E7EB] text-[#04162B] hover:text-[#C38735] hover:border-[#C38735] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={CARLOS_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-[#E5E7EB] text-[#04162B] hover:text-[#C38735] hover:border-[#C38735] transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={CARLOS_INFO.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-[#E5E7EB] text-[#04162B] hover:text-[#C38735] hover:border-[#C38735] transition-all"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* 7. CTA INSTITUCIONAL FINAL */}
      <section className="py-20 lg:py-24 bg-[#04162B] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <CodekisLogo variant="stacked" theme="light" size="md" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight mt-4">
            {STARTUP_CTA.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {STARTUP_CTA.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <ButtonPrimary
              size="lg"
              onClick={() => onNavigate('codigo')}
            >
              <span>{STARTUP_CTA.primaryButton}</span>
              <ArrowRight className="w-4 h-4" />
            </ButtonPrimary>

            <ButtonOutlineLight
              size="lg"
              onClick={() => onNavigate('contato')}
            >
              <span>{STARTUP_CTA.secondaryButton}</span>
            </ButtonOutlineLight>
          </div>
        </div>
      </section>

    </div>
  );
};
