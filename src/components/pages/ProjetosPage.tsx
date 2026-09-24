import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  UtensilsCrossed,
  Layers,
  Sparkles,
  Search,
  Users,
  Workflow,
  TrendingUp,
  Brain,
  Sliders,
  Compass,
  FileCheck2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { PageKey } from '../../types';
import { PROJECTS, HERO_IMAGES } from '../../data/praxisData';
import { ButtonPrimary, ButtonSecondary, ButtonOutlineLight } from '../Buttons';

interface ProjetosPageProps {
  onNavigate: (page: PageKey) => void;
  onOpenCapture: (source?: string) => void;
}

interface SolutionDetail {
  id: string;
  title: string;
  category: string;
  whatIs: string;
  forWhom: string;
  problemSolved: string;
  approach: string;
  expectedResult: string;
  deliverables: string[];
}

export const ProjetosPage: React.FC<ProjetosPageProps> = ({
  onNavigate,
  onOpenCapture
}) => {
  const [activeTab, setActiveTab] = useState<'solucoes' | 'verticais'>('solucoes');
  const [expandedSolution, setExpandedSolution] = useState<string>('diagnostico');

  const SOLUTIONS_LIST: SolutionDetail[] = [
    {
      id: "diagnostico",
      title: "Diagnóstico Operacional de Processos",
      category: "Auditoria & Mapeamento",
      whatIs: "Avaliação imersiva in-loco ou remota para identificar o nível de compreensão que a equipe tem de suas próprias tarefas, descobrindo gargalos ocultos, micro-desperdícios e pontos cegos de gestão.",
      forWhom: "Empresas e operações que sofrem com lentidão, quebras recorrentes de padrão e sensação de que a liderança precisa estar presente o tempo todo para as coisas funcionarem.",
      problemSolved: "Falta de visibilidade sobre onde o tempo útil e os recursos financeiros estão se perdendo entre etapas do fluxo.",
      approach: "Acompanhamento da rotina de trabalho em turnos reais, entrevistas estruturadas com operadores e líderes, e aplicação dos 6 estágios do Código para tabular a maturidade da esteira.",
      expectedResult: "Relatório executivo claro, sem jargões burocráticos, com mapa de fluxo, cálculo de perdas identificadas e plano de ação priorizado para implementação imediata.",
      deliverables: ["Mapa de Fluxo Operacional", "Matriz de Perdas e Desperdícios", "Roadmap de Ajustes Prioritários"]
    },
    {
      id: "treinamento",
      title: "Treinamento e Capacitação Operacional",
      category: "Educação Corporativa",
      whatIs: "Programas de formação baseados no método do Código, desenvolvendo em operadores e supervisores a habilidade de enxergar o processo todo antes de agir.",
      forWhom: "Equipes de atendimento, produção, cozinha, logística e serviços que precisam elevar o padrão de entrega sem rotatividade traumática.",
      problemSolved: "Treinamentos tradicionais que transmitem regras burocráticas no PowerPoint, mas não geram reflexão ou mudança de atitude na bancada.",
      approach: "Metodologia ativa baseada em situações reais e resolução de casos concretos do próprio negócio. Os colaboradores aprendem a medir e decidir com o material que usam no dia a dia.",
      expectedResult: "Equipe mais segura, redução sensível de erros por distração e elevação da velocidade de resposta a imprevistos.",
      deliverables: ["Apostila Prática de Posto de Trabalho", "Checklists de Autoverificação", "Certificação de Competências"]
    },
    {
      id: "desenvolvimento",
      title: "Desenvolvimento Profissional & Autonomia",
      category: "Liderança & Gestão",
      whatIs: "Mentoria e desenvolvimento contínuo de colaboradores-chave para atuarem como guardiões dos processos e líderes multiplicadores da cultura de melhoria.",
      forWhom: "Encarregados, subgerentes, chefes de praça e profissionais em ascensão que precisam fazer a transição de 'melhor executor' para 'líder orientador de processos'.",
      problemSolved: "Profissionais promovidos por habilidade técnica que continuam tentando fazer tudo com as próprias mãos, sem saber orientar a equipe ou analisar indicadores.",
      approach: "Sessões estruturadas de estudo de casos, acompanhamento de decisões reais em serviço e desenvolvimento de maturidade emocional sob pressão.",
      expectedResult: "Liderança autônoma capaz de desatar nós operacionais, delegar com critérios claros e inspirar o time pelo domínio dos processos.",
      deliverables: ["Plano Individual de Desenvolvimento", "Matriz de Tomada de Decisão", "Rituais de Feedback Operacional"]
    },
    {
      id: "estruturacao",
      title: "Estruturação de Processos (SOPs Vivos)",
      category: "Padronização & Métodos",
      whatIs: "Modelagem e formalização de fluxos de trabalho e Procedimentos Operacionais Padrão (SOPs) em linguagem visual, simples e diretamente aplicável.",
      forWhom: "Negócios em fase de expansão, franquias ou empresas com alta rotatividade de funcionários que perdem a qualidade a cada troca de equipe.",
      problemSolved: "Manuais volumosos de 200 páginas que ninguém lê e rotinas que dependem unicamente da memória de funcionários antigos.",
      approach: "Transformação do conhecimento tácito em fichas técnicas visuais de 1 página, diagramas de fácil leitura no local de trabalho e fluxogramas claros.",
      expectedResult: "Estabilidade absoluta da entrega. Novos funcionários atingem a curva de produtividade em metade do tempo habitual.",
      deliverables: ["Fichas Técnicas Visuais de 1 Página", "Manuais de Procedimento Rápido", "Protocolos de Passagem de Turno"]
    },
    {
      id: "ia-aplicada",
      title: "Inteligência Artificial Aplicada a Operações",
      category: "Tecnologia & Inovação",
      whatIs: "Desenvolvimento e integração de agentes e ferramentas de IA para apoiar a leitura de dados, previsão de consumo e auxílio à decisão humana.",
      forWhom: "Gestores que possuem dados de vendas, estoque e compras, mas não têm tempo para cruzá-los e tomar decisões proativas.",
      problemSolved: "Decisões de compras tomadas por estimativa subjetiva, gerando estoques inflados ou ruptura de produtos na prateleira.",
      approach: "Configuração de fluxos de IA com modelos contemporâneos treinados nos dados e regras do negócio para alertar anomalias e sugerir porcionamentos ótimos.",
      expectedResult: "Redução de desperdício de insumos em até 20%, agilidade analítica e suporte cognitivo aos tomadores de decisão em tempo real.",
      deliverables: ["Painel de Alertas Preditivos", "Assistente de Consulta Operacional", "Automação de Relatórios de Desvio"]
    },
    {
      id: "aprendizagem-pratica",
      title: "Laboratórios de Aprendizagem Prática",
      category: "Workshops & Simulação",
      whatIs: "Imersões e dinâmicas 'hands-on' onde equipes vivenciam simulações de estresse operacional, falhas de suprimentos e tomadas de decisão sob limite de tempo.",
      forWhom: "Empresas que desejam quebrar silos entre setores (ex: cozinha vs. salão, logística vs. vendas) e construir coesão verdadeira.",
      problemSolved: "Dificuldade de empatia entre setores interdependentes que culpam uns aos outros por atrasos e atritos operacionais.",
      approach: "Simulações práticas de linha de produção com inversão de papéis e aplicação direta dos 6 estágios do Código para superar gargalos criados na dinâmica.",
      expectedResult: "Compreensão sistêmica mútua, desmantelamento de rivalidades internas e alinhamento do ritmo coletivo de trabalho.",
      deliverables: ["Dinâmica de Simulação Customizada", "Relatório de Dinâmica Intersetorial", "Compromisso de Metas Cruzadas"]
    },
    {
      id: "melhoria-continua",
      title: "Programa de Melhoria Contínua Sustentável",
      category: "Cultura & Evolução",
      whatIs: "Implementação de rituais leves de melhoria (ciclos Kaizen de 15 minutos), capacitando a equipe da ponta a propor e testar pequenos avanços diários.",
      forWhom: "Organizações que já operam com estabilidade básica e desejam alcançar excelência, redução de custos e engajamento orgânico do time.",
      problemSolved: "Projetos de inovação de grande porte que consomem meses de energia e morrem por excesso de burocracia ou resistência da base.",
      approach: "Treinamento da equipe em pequenos ciclos de teste (testar uma mudança durante 3 turnos, medir o resultado e decidir se vira novo padrão).",
      expectedResult: "Centenas de pequenas melhorias anuais acumuladas que geram ganhos significativos de margem e orgulho profissional nas equipes.",
      deliverables: ["Quadro Visual de Ideias e Testes", "Ritual Semanal de Melhoria (15 min)", "Métricas de Ganho Acumulado"]
    }
  ];

  return (
    <div className="bg-[#F5F3EE] text-[#475569] font-sans overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 bg-[#04162B] text-white border-b border-[#072F54] overflow-hidden">
        
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#072F54]/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#C38735]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C38735]/20 border border-[#C38735]/30">
              <span className="w-2 h-2 rounded-full bg-[#C38735]" />
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#C38735]">
                Soluções Institucionais & Consultivas
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Como a Codekis transforma desenvolvimento em prática.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Combinamos metodologia proprietária, diagnóstico operacional no local, capacitação com foco em tomada de decisão e ferramentas de inteligência artificial aplicada para gerar autonomia e estabilidade.
            </p>

            {/* Sub-nav switcher */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setActiveTab('solucoes')}
                className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer ${
                  activeTab === 'solucoes'
                    ? 'bg-[#C38735] text-[#04162B] shadow-sm'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                7 Soluções Corporativas
              </button>
              <button
                onClick={() => setActiveTab('verticais')}
                className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer ${
                  activeTab === 'verticais'
                    ? 'bg-[#C38735] text-[#04162B] shadow-sm'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Verticais & Laboratórios
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* 2. TAB CONTENT: 7 SOLUÇÕES CORPORATIVAS */}
      {activeTab === 'solucoes' && (
        <section className="py-16 lg:py-24 bg-[#F5F3EE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#04162B]">
                Soluções Desenhadas para a Realidade Operacional
              </h2>
              <p className="text-sm sm:text-base text-[#475569]">
                Cada programa aborda uma dor específica da gestão de pessoas e processos, entregando ferramentas que permanecem vivas na cultura da empresa.
              </p>
            </div>

            <div className="space-y-4 max-w-5xl mx-auto">
              {SOLUTIONS_LIST.map((sol) => {
                const isExpanded = expandedSolution === sol.id;
                return (
                  <div
                    key={sol.id}
                    className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-2xs transition-all duration-200 hover:border-[#04162B]/20"
                  >
                    {/* Header bar of the accordion item */}
                    <div
                      onClick={() => setExpandedSolution(isExpanded ? '' : sol.id)}
                      className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 select-none"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#C38735] px-2 py-0.5 rounded bg-[#C38735]/10">
                            {sol.category}
                          </span>
                          <span className="text-xs text-slate-400">• Solução Codekis</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-heading font-bold text-[#04162B]">
                          {sol.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-4 self-end sm:self-center">
                        <span className="text-xs font-heading font-semibold text-slate-500 hidden md:inline">
                          {isExpanded ? 'Recolher detalhes' : 'Ver escopo completo'}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-[#F5F3EE] flex items-center justify-center text-[#04162B]">
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </div>
                    </div>

                    {/* Detailed expandable drawer */}
                    {isExpanded && (
                      <div className="px-6 pb-6 pt-2 border-t border-[#E5E7EB] space-y-6 animate-in fade-in duration-200">
                        
                        <div className="p-4 rounded-xl bg-[#F5F3EE] border border-[#E5E7EB]">
                          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#072F54] block mb-1">
                            O que é esta solução
                          </span>
                          <p className="text-sm text-[#475569] leading-relaxed">
                            {sol.whatIs}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          
                          <div className="space-y-2">
                            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#C38735] block">
                              Para quem serve
                            </span>
                            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                              {sol.forWhom}
                            </p>
                          </div>

                          <div className="space-y-2">
                            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#C38735] block">
                              Qual problema resolve
                            </span>
                            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                              {sol.problemSolved}
                            </p>
                          </div>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                          
                          <div className="space-y-2">
                            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#04162B] block">
                              Abordagem Codekis Labs
                            </span>
                            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                              {sol.approach}
                            </p>
                          </div>

                          <div className="space-y-2">
                            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#04162B] block">
                              Resultado esperado
                            </span>
                            <p className="text-xs sm:text-sm font-semibold text-[#072F54] leading-relaxed">
                              {sol.expectedResult}
                            </p>
                          </div>

                        </div>

                        {/* Deliverables & Actions */}
                        <div className="pt-4 border-t border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex flex-wrap items-center gap-2 text-xs">
                            <span className="font-heading font-bold text-slate-500">Entregáveis principais:</span>
                            {sol.deliverables.map((item) => (
                              <span key={item} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium text-[11px]">
                                {item}
                              </span>
                            ))}
                          </div>

                          <ButtonPrimary
                            size="sm"
                            onClick={() => onOpenCapture(`solucao_${sol.id}`)}
                          >
                            <span>Solicitar esta solução</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </ButtonPrimary>
                        </div>

                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}


      {/* 3. TAB CONTENT: VERTICAIS & LABS */}
      {activeTab === 'verticais' && (
        <section className="py-16 lg:py-24 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#04162B]">
                As Verticais do Ecossistema Codekis
              </h2>
              <p className="text-sm sm:text-base text-[#475569]">
                Cada vertical é um laboratório prático onde a metodologia do Código é testada, refinada e aplicada em segmentos específicos do mercado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="rounded-3xl bg-[#F5F3EE] border border-[#E5E7EB] overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-md text-xs font-heading font-bold uppercase tracking-wider bg-[#04162B] text-white">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                        project.status === 'Em desenvolvimento'
                          ? 'bg-[#C38735] text-[#04162B]'
                          : 'bg-white/80 text-[#04162B] backdrop-blur-xs'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-heading font-bold text-[#04162B]">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#475569] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#E5E7EB]">
                      {project.slug === 'codigo-da-cozinha-pensante' ? (
                        <ButtonPrimary
                          size="md"
                          fullWidth
                          onClick={() => onNavigate('projeto-cozinha')}
                        >
                          <span>Conhecer a Cozinha Pensante</span>
                          <ArrowRight className="w-4 h-4" />
                        </ButtonPrimary>
                      ) : (
                        <button
                          onClick={() => onOpenCapture(`projeto_${project.id}`)}
                          className="w-full py-2.5 px-4 rounded-xl border border-[#04162B] text-[#04162B] font-heading font-semibold text-xs hover:bg-[#04162B]/5 transition-colors cursor-pointer"
                        >
                          Acompanhar evolução deste projeto
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}


      {/* 4. FINAL CONSULTATIVE CTA */}
      <section className="py-20 lg:py-24 bg-[#04162B] text-white border-t border-[#072F54] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block px-3 py-1 rounded-md bg-[#C38735]/20 text-[#C38735] text-xs font-heading font-bold uppercase tracking-wider">
            Atendimento Consultivo
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Sua organização precisa de processos mais conscientes?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Agende uma conversa de alinhamento com a equipe da Codekis Labs. Avaliamos a maturidade da sua operação e propomos a melhor trilha de desenvolvimento.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <ButtonPrimary
              size="lg"
              onClick={() => onNavigate('contato')}
            >
              <span>Solicitar contato institucional</span>
              <ArrowRight className="w-4 h-4" />
            </ButtonPrimary>

            <ButtonOutlineLight
              size="lg"
              onClick={() => onNavigate('codigo')}
            >
              <span>Revisar O Código</span>
            </ButtonOutlineLight>
          </div>
        </div>
      </section>

    </div>
  );
};
