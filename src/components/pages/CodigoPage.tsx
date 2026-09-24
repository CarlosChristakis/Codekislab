import React, { useState } from 'react';
import {
  ArrowRight,
  Brain,
  Sliders,
  BarChart3,
  Compass,
  Workflow,
  Sparkles,
  CheckCircle2,
  Factory,
  Briefcase,
  GraduationCap,
  HeartPulse,
  UtensilsCrossed,
  Clock,
  Layers,
  Target,
  ChevronRight,
  TrendingDown,
  Scale,
  ShieldCheck,
  Zap,
  Info,
  Home,
  Building2,
  Flame
} from 'lucide-react';
import { PageKey, LeadCaptureData } from '../../types';
import { HERO_IMAGES, CODIGO_STEPS, POTATO_PROCESS_STEPS, CODIGO_SECTORS, HOUSE_ANALOGY } from '../../data/praxisData';
import { ButtonPrimary, ButtonSecondary, ButtonOutlineLight } from '../Buttons';

interface CodigoPageProps {
  onNavigate: (page: PageKey) => void;
  onOpenCapture: (source?: string) => void;
}

export const CodigoPage: React.FC<CodigoPageProps> = ({
  onNavigate,
  onOpenCapture
}) => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [leadEmail, setLeadEmail] = useState('');
  const [leadSuccess, setLeadSuccess] = useState(false);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail.trim()) return;

    const newLead: LeadCaptureData = {
      name: 'Interessado no Código',
      email: leadEmail.trim(),
      source: 'codigo_page_cta',
      createdAt: new Date().toISOString()
    };

    try {
      const stored = localStorage.getItem('codekis_subscribers');
      const list = stored ? JSON.parse(stored) : [];
      list.push(newLead);
      localStorage.setItem('codekis_subscribers', JSON.stringify(list));
    } catch {
      // LocalStorage fallback
    }

    setLeadSuccess(true);
    setTimeout(() => {
      setLeadEmail('');
    }, 4000);
  };

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

  const getSectorIcon = (name: string) => {
    switch (name) {
      case 'Gastronomia & Operações':
        return <UtensilsCrossed className="w-5 h-5" />;
      case 'Serviços & Atendimento':
        return <Briefcase className="w-5 h-5" />;
      case 'Indústria & Logística':
        return <Factory className="w-5 h-5" />;
      case 'Educação & Treinamento':
        return <GraduationCap className="w-5 h-5" />;
      case 'Saúde & Cuidados':
        return <HeartPulse className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  // Detailed content for each of the 6 stages
  const STAGE_DETAILS = [
    {
      step: 1,
      code: "01",
      title: "Executar",
      tagline: "Dominar a atividade.",
      concept: "Executar não é apenas cumprir ordens ou acelerar movimentos mecânicos. Na Codekis Lab, executar é a base de todo o conhecimento: é onde o profissional domina a técnica do gesto, a ergonomia, o manuseio das ferramentas e a disciplina necessária para realizar a tarefa com segurança e consistência.",
      whatLearns: [
        "Atenção plena ao posto de trabalho e eliminação de movimentos redundantes",
        "Disciplina técnica e respeito aos padrões de segurança e manuseio",
        "Sensibilidade prática para notar variações na matéria-prima ou no equipamento",
        "Transição de 'fazer por obrigação' para 'fazer com consciência e precisão'"
      ],
      practicalExample: "Um cozinheiro ao descascar legumes ou um atendente ao registrar um chamado: a postura correta e a atenção aos detalhes evitam desperdício e fadiga muscular antes mesmo do início da produção.",
      resultImpact: "Redução de retrabalho imediato, aumento da precisão operacional e prevenção de acidentes e quebras de equipamentos."
    },
    {
      step: 2,
      code: "02",
      title: "Compreender",
      tagline: "Entender o processo, o propósito e os impactos.",
      concept: "O Código começa de verdade quando a pessoa deixa de apenas executar e passa a compreender. Aqui o profissional entende a esteira completa: de onde veio o material recebido, por quais mãos passou, quem será o próximo a utilizá-lo e de que maneira o seu ritmo afeta a qualidade percebida pelo cliente final.",
      whatLearns: [
        "Mapeamento da cadeia de valor: começo, meio e fim de cada processo",
        "Conceito de 'cliente interno': tratar o próximo setor com rigor e empatia",
        "Identificação de gargalos invisíveis que travam a produção coletiva",
        "Compreensão do custo de atrasos, erros de especificação e desvios"
      ],
      practicalExample: "Compreender por que a higienização rigorosa dos recipientes de armazenamento impede a perda prematura de 40kg de insumo perecível na câmara frigorífica três dias depois.",
      resultImpact: "Eliminação do pensamento de silo ('não é problema do meu setor'), alinhamento e comunicação fluida entre turnos e equipes."
    },
    {
      step: 3,
      code: "03",
      title: "Medir",
      tagline: "Transformar percepção em informação.",
      concept: "O que não se mede vira especulação. Nesta etapa, ensinamos o profissional a traduzir sensações subjetivas ('acho que hoje sobrou muita comida' ou 'parece que o atendimento está lento') em dados objetivos, simples e mensuráveis que toda a equipe pode coletar sem burocracia.",
      whatLearns: [
        "Como coletar indicadores práticos: taxa de rendimento, perdas, tempo de ciclo",
        "Cálculo de CMV (Custo de Mercadoria Vendida) e custo do retrabalho",
        "Registro descomplicado de desvios no posto de trabalho",
        "Interpretação de planilhas e gráficos sem mistificação ou tecnicismo inútil"
      ],
      practicalExample: "Pesar as aparas de carne ou legumes antes do descarte e constatar que o aproveitamento caiu de 85% para 72% devido a facas descalibradas na bancada.",
      resultImpact: "Substituição do 'eu acho' por evidências incontestáveis. Decisões gerenciais embasadas na realidade concreta do chão de operação."
    },
    {
      step: 4,
      code: "04",
      title: "Decidir",
      tagline: "Utilizar contexto, dados e experiência.",
      concept: "Compreender o processo e ler dados dá sustentação para o momento mais crítico da rotina: a tomada de decisão sob pressão. Ensinamos critérios objetivos para que profissionais e líderes ajam com discernimento, rapidez e equilíbrio entre custo, tempo e satisfação do cliente.",
      whatLearns: [
        "Matriz de decisão rápida em 3 perguntas estruturadas",
        "Equilíbrio entre a sensibilidade da experiência prática e o rigor dos números",
        "Como agir em contingências e imprevistos sem entrar em pânico ou paralisia",
        "Desenvolvimento de autonomia responsável sem necessidade de supervisão constante"
      ],
      practicalExample: "Decidir conscientemente se vale a pena repor mais 5kg de uma preparação faltando 20 minutos para o encerramento do serviço, ou se é mais estratégico adaptar a oferta para evitar 100% de desperdício.",
      resultImpact: "Lideranças desoneradas de microgerenciamento. Equipe com autonomia calibrada para agir prontamente com responsabilidade financeira."
    },
    {
      step: 5,
      code: "05",
      title: "Padronizar",
      tagline: "Transformar boas práticas em processo.",
      concept: "Quando uma solução genial depende exclusivamente de um indivíduo específico, a organização está vulnerável. Padronizar é o ato generoso e inteligente de formalizar o que funcionou em procedimentos simples, claros e vivos (SOPs), tornando o conhecimento um patrimônio compartilhado.",
      whatLearns: [
        "Criação de fichas técnicas e procedimentos operacionais claros e visuais",
        "Como treinar novos integrantes usando procedimentos testados e validados",
        "Garantia de previsibilidade e conformidade em qualquer dia da semana",
        "Estruturação de passagens de turno sem perda de informação crítica"
      ],
      practicalExample: "Fotografar o padrão exato de montagem de um prato ou posto de atendimento e fixar na altura dos olhos da equipe, com especificações de gramatura e tempo máximo de ciclo.",
      resultImpact: "Estabilidade da entrega. A qualidade do produto ou serviço permanece inalterada independente de folgas, férias ou trocas de equipe."
    },
    {
      step: 6,
      code: "06",
      title: "Melhorar",
      tagline: "Evoluir continuamente.",
      concept: "Melhoria contínua não é um grande evento anual ou uma consultoria externa miraculosa: é a atitude diária de pequenos refinamentos sustentáveis. Quando as 5 etapas anteriores estão funcionando, a equipe ganha a maturidade para sugerir, testar e consolidar inovações com leveza.",
      whatLearns: [
        "Metodologia Kaizen: o poder de pequenas melhorias incrementais diárias",
        "Como apresentar propostas de melhoria para a liderança com base em fatos",
        "Ciclos rápidos de teste (PDCA simplificado): testar, avaliar e adotar",
        "Cultura de segurança psicológica para reconhecer desvios sem buscar culpados"
      ],
      practicalExample: "Reorganizar a disposição física dos utensílios da praça para economizar 14 passos a cada pedido, reduzindo a fadiga da equipe e diminuindo o tempo de entrega em 3 minutos por mesa.",
      resultImpact: "Evolução orgânica permanente. As pessoas se sentem donas do próprio trabalho e a organização cresce em eficiência e rentabilidade."
    }
  ];

  return (
    <div className="bg-[#F5F3EE] text-[#475569] font-sans overflow-hidden">
      
      {/* =========================================================================
          1. HERO DA METODOLOGIA
          ========================================================================= */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 bg-[#04162B] text-white border-b border-[#072F54] overflow-hidden">
        
        {/* Subtle glowing spheres */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#072F54]/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#C38735]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C38735]/20 border border-[#C38735]/30">
              <span className="w-2 h-2 rounded-full bg-[#C38735]" />
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#C38735]">
                Metodologia Codekis Lab
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
              O Código
            </h1>

            {/* Frase-chave */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-3xl mx-auto">
              <p className="text-xl sm:text-2xl font-heading font-bold text-[#F5C06A] leading-snug">
                “O Código começa quando a pessoa deixa de apenas executar e passa a compreender.”
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Uma abordagem prática e estruturada para transformar a atuação operacional: da execução mecânica à tomada de decisão consciente e à melhoria contínua dos processos.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <ButtonPrimary
                size="lg"
                onClick={() => {
                  const el = document.getElementById('seis-etapas');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Conhecer os 6 Estágios</span>
                <ArrowRight className="w-4 h-4" />
              </ButtonPrimary>

              <ButtonOutlineLight
                size="lg"
                onClick={() => onOpenCapture('codigo_hero')}
              >
                <span>Solicitar diagnóstico da sua equipe</span>
              </ButtonOutlineLight>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          2. POR QUE O CÓDIGO EXISTE (Execução vs. Compreensão)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-[#04162B]/5 text-[#04162B] text-xs font-heading font-bold uppercase tracking-wider">
              A Origem do Método
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#04162B] tracking-tight">
              Por que O Código existe?
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              O Código nasce de uma observação muito simples: quase nunca enxergamos tudo o que realmente está acontecendo em volta de uma tarefa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Box 1: O modo puramente executor */}
            <div className="p-8 rounded-2xl bg-[#F5F3EE] border border-[#E5E7EB] space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Cenário Comum nas Organizações
                </span>
                <h3 className="text-2xl font-heading font-bold text-[#04162B]">
                  A Ilusão da Execução Isolada
                </h3>
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed mt-3">
                  Normalmente vemos apenas a tarefa isolada: alguém corta uma batata, prepara um relatório, atende um cliente ou organiza um estoque. À primeira vista, parece que aquela ação existe sozinha.
                </p>
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed mt-2">
                  Mas nenhuma tarefa vive isolada. Toda ação começou antes de ser executada e continuará existindo muito depois que o operador terminar. Quando as pessoas não enxergam essas conexões, qualquer imprevisto vira crise e a empresa depende de supervisão constante.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E5E7EB] text-xs text-slate-600 font-medium">
                Consequência: retrabalho crônico, decisões sem critério e sensação permanente de sobrecarga na liderança.
              </div>
            </div>

            {/* Box 2: A Perspectiva do Código */}
            <div className="p-8 rounded-2xl bg-[#04162B] text-white border border-[#04162B] space-y-4 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C38735] block mb-2">
                  A Abordagem Codekis Lab
                </span>
                <h3 className="text-2xl font-heading font-bold text-white">
                  A Visão Sistêmica e a Autonomia
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-3">
                  O Código ensina o profissional a olhar além do gesto. Em vez de perguntar apenas <em className="text-white">“o que preciso fazer?”</em>, ele aprende a perguntar: <em className="text-[#C38735]">“de onde veio essa demanda, qual o padrão necessário, quanto custa o desperdício e como posso melhorar esse fluxo?”</em>
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-2">
                  Isso muda tudo. O colaborador ganha autonomia técnica, aprende a ler dados operacionais e assume a responsabilidade de tomar decisões inteligentes para proteger a qualidade e a saúde financeira do negócio.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#072F54] border border-slate-700 text-xs text-[#F5C06A] font-semibold">
                Resultado: equipes maduras, processos autônomos, perdas drasticamente reduzidas e clientes satisfeitos.
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          2.1. A ANALOGIA ARQUITETÔNICA DA CASA: FUNDAÇÃO & CÔMODO
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#04162B] text-white border-b border-[#072F54] relative overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#072F54]/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#C38735]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C38735]/20 border border-[#C38735]/30">
              <Home className="w-3.5 h-3.5 text-[#C38735]" />
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#C38735]">
                A Analogia Arquitetônica Fundamental
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
              O Código é a Fundação da Casa. <br className="hidden sm:inline" />
              A Cozinha Pensante é o Cômodo.
            </h2>

            {/* Quote destaque */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs max-w-3xl mx-auto my-6">
              <blockquote className="text-lg sm:text-xl font-heading font-bold text-[#F5C06A] leading-snug italic">
                “{HOUSE_ANALOGY.quote}”
              </blockquote>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Ninguém constrói uma cozinha flutuando no ar. Uma operação gastronômica de alta performance não sobrevive apenas com boas receitas se a fundação do processo for inexistente. Para a cozinha funcionar, a casa inteira precisa de um alicerce inabalável.
            </p>
          </div>

          {/* Architectural Diagram: The House Visual Stack */}
          <div className="max-w-5xl mx-auto space-y-6">
            
            {/* Teto / Visão Geral */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C38735]/20 text-[#C38735] flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C38735] block">
                    O Edifício Completo
                  </span>
                  <h4 className="text-base font-heading font-bold text-white">
                    A Organização & A Vida Operacional
                  </h4>
                </div>
              </div>
              <p className="text-xs text-slate-300 text-left sm:text-right max-w-md">
                Clientes atendidos, produtos entregues, receita gerada e cultura corporativa. O que o cliente enxerga e consome no final do dia.
              </p>
            </div>

            {/* Nível Intermediário: OS CÔMODOS (Verticais Setoriais) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between px-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Nível Superior • Os Cômodos da Casa (Aplicações Setoriais)
                </span>
                <span className="text-xs text-[#C38735] font-semibold">
                  Onde a atividade real acontece
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* Cômodo 1: Cozinha Pensante (Destaque Central) */}
                <div className="lg:col-span-7 p-8 rounded-3xl bg-gradient-to-br from-[#072F54] to-[#04162B] border-2 border-[#C38735] shadow-2xl space-y-5 relative">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C38735] text-[#04162B] text-xs font-heading font-extrabold uppercase tracking-wide">
                      <Flame className="w-3.5 h-3.5" />
                      <span>O Primeiro Cômodo Construído</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#C38735]">
                      Vertical Pioneira
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-heading font-extrabold text-white">
                      O Código da Cozinha Pensante
                    </h3>
                    <p className="text-sm font-heading font-semibold text-[#F5C06A] mt-1">
                      O ambiente mais severo, quente e implacável da casa.
                    </p>
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed">
                    Por que começamos pela cozinha? Porque é o laboratório de teste mais exigente do mundo: perecibilidade em horas, risco térmico constante, pedidos caindo simultaneamente ao vivo e margens de lucro medidas em centavos.
                  </p>

                  <div className="p-4 rounded-2xl bg-[#04162B]/80 border border-[#C38735]/40 space-y-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C38735] block">
                      A Prova de Fogo da Metodologia
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Se a fundação d'O Código suporta a pressão, o calor e a imprevisibilidade de uma cozinha profissional cheia numa noite de sábado, ela sustenta qualquer operação empresarial.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('projeto-cozinha')}
                      className="inline-flex items-center gap-2 text-xs font-heading font-bold text-[#F5C06A] hover:text-white transition-colors cursor-pointer"
                    >
                      <span>Entrar no Cômodo da Cozinha Pensante</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Próximos Cômodos da Casa */}
                <div className="lg:col-span-5 p-7 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      A Expansão da Casa
                    </span>
                    <h4 className="text-lg font-heading font-bold text-white">
                      Outros Cômodos Sobre a Mesma Fundação
                    </h4>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      Uma casa sólida não tem apenas uma cozinha. Uma vez concretada a fundação d'O Código, qualquer outro ambiente pode ser erguido com a mesma segurança estrutural:
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {HOUSE_ANALOGY.futureRooms.map((room, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs space-y-0.5"
                      >
                        <span className="font-heading font-bold text-white block">
                          {room.name}
                        </span>
                        <span className="text-slate-400 text-[11px]">
                          {room.desc}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="text-[11px] text-[#C38735] font-mono border-t border-white/10 pt-3">
                    Metodologia única • Múltiplos ambientes setoriais
                  </div>
                </div>

              </div>
            </div>

            {/* Vertical Connector: As Colunas de Sustentação */}
            <div className="flex flex-col items-center justify-center py-2 space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#C38735] font-bold">
                ↓ As 6 Colunas Estruturais de Conexão ↓
              </div>
              <div className="w-0.5 h-6 bg-[#C38735]" />
            </div>

            {/* A BASE DE CONCRETO: A FUNDAÇÃO (O CÓDIGO) */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white text-[#04162B] shadow-2xl border-4 border-[#C38735] relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#04162B] text-white text-xs font-mono font-bold">
                    O ALICERCE DA CASA
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#04162B]">
                    A Fundação: O Código (6 Estágios)
                  </h3>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs font-heading font-bold text-[#6E4212] uppercase tracking-wider block">
                    Base Universal de Processos
                  </span>
                  <span className="text-xs text-[#475569]">
                    Sem fundação, qualquer cômodo racha
                  </span>
                </div>
              </div>

              <div className="py-6 space-y-4">
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                  A fundação não se preocupa apenas com a panela ou o prato; ela se preocupa com o <strong className="text-[#04162B]">método de sustentação</strong>. Se uma organização troca de sistema, contrata consultoria ou compra inteligência artificial sem antes concretar essa base, a estrutura balança diante de qualquer crise.
                </p>

                {/* Os 6 Pilares Visuais da Fundação */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
                  {CODIGO_STEPS.map((st) => (
                    <div
                      key={st.code}
                      className="p-3.5 rounded-2xl bg-[#F5F3EE] border border-[#E5E7EB] text-center space-y-1 hover:border-[#04162B] transition-colors"
                    >
                      <span className="text-xs font-mono font-bold text-[#6E4212] block">
                        Pilar {st.code}
                      </span>
                      <h5 className="text-sm font-heading font-bold text-[#04162B]">
                        {st.title}
                      </h5>
                      <p className="text-[10px] text-slate-500 line-clamp-2">
                        {st.action}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2 text-[#475569]">
                  <CheckCircle2 className="w-4 h-4 text-[#C38735] shrink-0" />
                  <span>Nenhum cômodo desaba quando os 6 pilares estão assentados.</span>
                </div>
                <button
                  onClick={() => {
                    const el = document.getElementById('seis-etapas');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-heading font-bold text-[#04162B] hover:text-[#C38735] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Ver os 6 estágios em detalhe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          3. AS 6 ETAPAS DO CÓDIGO (Detalhadas com Tabs)
          ========================================================================= */}
      <section id="seis-etapas" className="py-20 lg:py-28 bg-[#F5F3EE] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-[#C38735]/15 text-[#6E4212] text-xs font-heading font-bold uppercase tracking-wider">
              Arquitetura Metodológica
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#04162B] tracking-tight">
              Os 6 Estágios de Evolução
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Clique em cada estágio para compreender o conceito, o aprendizado da equipe, exemplos de aplicação prática e o impacto no resultado do negócio.
            </p>
          </div>

          {/* Nav Tabs for Stages */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-10">
            {STAGE_DETAILS.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={stage.title}
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 rounded-xl font-heading transition-all text-left cursor-pointer border ${
                    isActive
                      ? 'bg-[#04162B] text-white border-[#04162B] shadow-md scale-[1.02]'
                      : 'bg-white text-[#475569] border-[#E5E7EB] hover:border-[#C38735]'
                  }`}
                >
                  <span className={`text-[10px] font-mono font-bold block ${isActive ? 'text-[#C38735]' : 'text-slate-400'}`}>
                    Estágio {stage.code}
                  </span>
                  <span className="text-sm font-bold block mt-0.5">
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Card */}
          {(() => {
            const current = STAGE_DETAILS[activeStage];
            return (
              <div className="bg-white rounded-3xl border border-[#E5E7EB] p-8 sm:p-12 shadow-sm space-y-8 animate-in fade-in duration-300">
                
                {/* Header of the Stage */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-md bg-[#04162B] text-[#C38735] text-xs font-mono font-bold">
                        Estágio {current.code}
                      </span>
                      <span className="text-xs font-heading font-semibold uppercase tracking-wider text-slate-400">
                        O Código Codekis
                      </span>
                    </div>
                    <h3 className="text-3xl font-heading font-extrabold text-[#04162B]">
                      {current.title}
                    </h3>
                  </div>

                  <div className="px-4 py-2 rounded-xl bg-[#F5F3EE] border border-[#E5E7EB] text-sm font-heading font-bold text-[#072F54] self-start sm:self-center">
                    {current.tagline}
                  </div>
                </div>

                {/* Concept and Practical Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Concept and Learnings */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-[#C38735] mb-2">
                        O Conceito Fundamental
                      </h4>
                      <p className="text-base text-[#475569] leading-relaxed">
                        {current.concept}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-[#04162B] mb-3">
                        O que o profissional aprende neste estágio:
                      </h4>
                      <ul className="space-y-2.5">
                        {current.whatLearns.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-[#475569]">
                            <CheckCircle2 className="w-4 h-4 text-[#C38735] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Practical Situation & Business Impact */}
                  <div className="lg:col-span-5 space-y-5">
                    
                    <div className="p-5 rounded-2xl bg-[#F5F3EE] border border-[#E5E7EB] space-y-2">
                      <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#072F54] block">
                        Exemplo Prático na Rotina
                      </span>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        {current.practicalExample}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#04162B] text-white border border-[#04162B] space-y-2">
                      <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#C38735] block">
                        Impacto Direto no Resultado
                      </span>
                      <p className="text-xs text-slate-200 leading-relaxed font-medium">
                        {current.resultImpact}
                      </p>
                    </div>

                  </div>

                </div>

                {/* Stage Progression Footer */}
                <div className="pt-6 border-t border-[#E5E7EB] flex items-center justify-between">
                  <button
                    disabled={activeStage === 0}
                    onClick={() => setActiveStage((prev) => Math.max(0, prev - 1))}
                    className="text-xs font-heading font-bold text-slate-500 hover:text-[#04162B] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    ← Estágio Anterior
                  </button>

                  <span className="text-xs font-mono text-slate-400 font-bold">
                    {activeStage + 1} de 6
                  </span>

                  <button
                    disabled={activeStage === 5}
                    onClick={() => setActiveStage((prev) => Math.min(5, prev + 1))}
                    className="text-xs font-heading font-bold text-[#04162B] hover:text-[#C38735] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Próximo Estágio →
                  </button>
                </div>

              </div>
            );
          })()}

        </div>
      </section>


      {/* =========================================================================
          4. O EXEMPLO DIDÁTICO DA BATATA (10 Etapas Invisíveis)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 rounded-md bg-[#C38735]/15 text-[#6E4212] text-xs font-heading font-bold uppercase tracking-wider">
                Estudo de Caso Didático
              </span>

              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#04162B] tracking-tight leading-tight">
                O que acontece antes, durante e depois de cortar uma simples batata?
              </h2>

              <p className="text-base text-[#475569] leading-relaxed">
                Para quem olha de fora, a tarefa é apenas <strong className="text-[#04162B]">“cortar a batata”</strong>. Mas quando aplicamos O Código, percebemos que uma ação de poucos segundos esconde pelo menos 10 etapas decisivas.
              </p>

              <div className="p-5 rounded-2xl bg-[#F5F3EE] border border-[#E5E7EB] space-y-2">
                <p className="text-sm font-heading font-bold text-[#04162B]">
                  Cada etapa envolve variáveis críticas:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#475569]">
                  <span className="flex items-center gap-1.5">• Tempo de preparo</span>
                  <span className="flex items-center gap-1.5">• Padrão de corte</span>
                  <span className="flex items-center gap-1.5">• Rendimento do insumo</span>
                  <span className="flex items-center gap-1.5">• Controle de perda (resíduo)</span>
                  <span className="flex items-center gap-1.5">• Custo real por porção</span>
                  <span className="flex items-center gap-1.5">• Percepção do cliente final</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 italic">
                “A tarefa continua sendo cortar a batata. O que muda radicalmente é a forma como o profissional olha para ela.”
              </p>
            </div>

            {/* Right: The 10 Steps Chain */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#04162B] text-white border border-[#072F54] shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-700 mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C38735]">
                    A Cadeia Real da Tarefa
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    10 Etapas Integradas
                  </span>
                </div>

                <div className="space-y-2">
                  {POTATO_PROCESS_STEPS.map((step) => (
                    <div
                      key={step.step}
                      className="p-2.5 rounded-xl bg-[#072F54]/70 border border-slate-700/60 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-md bg-[#C38735] text-[#04162B] flex items-center justify-center font-mono font-bold text-[10px]">
                          {step.step}
                        </span>
                        <span className="font-medium text-slate-200">
                          {step.text}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wide">
                        {step.step <= 3 ? 'Antes' : step.step <= 6 ? 'Durante' : 'Depois'}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700 flex items-center justify-between text-[11px] text-slate-300">
                  <span>Impacto direto:</span>
                  <span className="text-[#C38735] font-semibold">Qualidade • Custo • Satisfação</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          5. ONDE O CÓDIGO PODE SER APLICADO
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F5F3EE] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-[#04162B]/5 text-[#04162B] text-xs font-heading font-bold uppercase tracking-wider">
              Universalidade do Método
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#04162B] tracking-tight">
              Onde o Código pode ser aplicado?
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              O Código não pertence exclusivamente a um único ramo de negócio. Ele é aplicável onde quer que existam pessoas executando tarefas, gerando dados e tomando decisões.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CODIGO_SECTORS.map((sector) => (
              <div
                key={sector.name}
                className="p-6 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#C38735] transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5F3EE] border border-[#E5E7EB] text-[#04162B] flex items-center justify-center mb-4">
                  {getSectorIcon(sector.name)}
                </div>
                <h3 className="text-lg font-heading font-bold text-[#04162B] mb-2">
                  {sector.name}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {sector.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          6. CTA DA PÁGINA O CÓDIGO
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#04162B] text-white border-b border-[#072F54] relative overflow-hidden">
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="inline-block px-3 py-1 rounded-md bg-[#C38735]/20 text-[#C38735] text-xs font-heading font-bold uppercase tracking-wider">
            Próximo Passo
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Pronto para aplicar O Código na sua organização?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Seja através de um diagnóstico operacional na sua empresa ou conhecendo a vertical Cozinha Pensante, a Codekis Lab desenvolve as competências que destravam o verdadeiro potencial da sua equipe.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <ButtonPrimary
              size="lg"
              onClick={() => onNavigate('contato')}
            >
              <span>Falar com um consultor Codekis</span>
              <ArrowRight className="w-4 h-4" />
            </ButtonPrimary>

            <ButtonOutlineLight
              size="lg"
              onClick={() => onNavigate('projeto-cozinha')}
            >
              <span>Ver vertical Cozinha Pensante</span>
            </ButtonOutlineLight>
          </div>
        </div>

      </section>

    </div>
  );
};
