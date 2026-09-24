import React, { useState } from 'react';
import {
  ArrowRight,
  ChevronRight,
  UtensilsCrossed,
  Layers,
  Scale,
  Users,
  TrendingDown,
  Sparkles,
  CheckCircle2,
  BookOpen,
  DollarSign,
  Package,
  Activity,
  Award,
  Compass,
  FileText,
  Building,
  GraduationCap,
  Workflow,
  Home,
  Flame,
  Building2
} from 'lucide-react';
import { PageKey } from '../../types';
import { HERO_IMAGES, HOUSE_ANALOGY } from '../../data/praxisData';
import { ButtonPrimary, ButtonSecondary, ButtonOutlineLight } from '../Buttons';

interface ProjetoCozinhaPageProps {
  onNavigate: (page: PageKey) => void;
  onOpenCapture: (source?: string) => void;
}

export const ProjetoCozinhaPage: React.FC<ProjetoCozinhaPageProps> = ({
  onNavigate,
  onOpenCapture
}) => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const PILARES = [
    {
      id: "producao",
      title: "Produção",
      icon: Activity,
      tag: "Planejamento & Escala",
      description: "Planejar a esteira diária de acordo com previsões reais de consumo, evitando sobrecarga no pico e ociosidade pré-serviço.",
      detail: "Como dimensionar o mise en place com base no histórico de vendas e na velocidade da praça, eliminando o estresse da correria desorganizada."
    },
    {
      id: "cmv",
      title: "CMV (Custo da Mercadoria)",
      icon: DollarSign,
      tag: "Margem & Finanças",
      description: "Tornar o custo de cada insumo visível para quem manipula a comida, conectando o corte na bancada com o lucro final.",
      detail: "O cozinheiro compreende que cada grama perdida no porcionamento representa erosão direta da margem e sustentabilidade do restaurante."
    },
    {
      id: "estoque",
      title: "Estoque",
      icon: Package,
      tag: "Giro & Armazenamento",
      description: "Gerenciar câmaras, etiquetas e rodízio FIFO (PEPS) com rigor sanitário e inteligência de reposição.",
      detail: "Eliminar ingredientes esquecidos no fundo da prateleira através de mapeamento visual de estoque e controle diário de validades."
    },
    {
      id: "desperdicio",
      title: "Desperdício",
      icon: TrendingDown,
      tag: "Sustentabilidade Real",
      description: "Tratar a perda como sintoma de falha de processo, medindo sobras limpas, sobras de prato e aparas de pré-preparo.",
      detail: "Criação da 'Planilha de Descarte em 1 Toque' e técnicas de aproveitamento integral de alimentos com alto padrão gastronômico."
    },
    {
      id: "fluxo",
      title: "Fluxo & Ergonomia",
      icon: Layers,
      tag: "Tempo de Comanda",
      description: "Organizar praças físicas para que o movimento seja natural, diminuindo passos desnecessários e atritos de comunicação.",
      detail: "Layout inteligente de bancadas e utensílios, sincronizando a saída da proteína com as guarnições para o pass sem pratos esfriando."
    },
    {
      id: "equipe",
      title: "Equipe",
      icon: Users,
      tag: "Cultura & Respeito",
      description: "Promover ambiente de cooperação mútua entre praças e entre a cozinha e o salão, com comunicação clara.",
      detail: "Substituição dos gritos e do estresse reativo por rituais estruturados de briefing de serviço e passagens de escala sem ruídos."
    },
    {
      id: "qualidade",
      title: "Qualidade & Padrão",
      icon: Award,
      tag: "Repetibilidade",
      description: "Garantir que o prato entregue na terça-feira no almoço tenha rigorosamente o mesmo sabor e apresentação do sábado à noite.",
      detail: "Fichas técnicas visuais com fotografias de padrão ouro, pesos exatos de porção e especificações claras de temperatura e ponto."
    },
    {
      id: "decisao",
      title: "Tomada de Decisão",
      icon: Compass,
      tag: "Autonomia sob Pressão",
      description: "Capacitar cozinheiros e líderes a agirem com discernimento diante de imprevistos (atraso de fornecedor, quebra de maquinário).",
      detail: "Matriz de contingência rápida: quando substituir um ingrediente, quando sugerir uma adaptação de cardápio e como agir sem paralisar o salão."
    }
  ];

  const TARGET_AUDIENCES = [
    {
      role: "Donos de Restaurantes & Operadores de F&B",
      benefit: "Redução consistente de CMV, estancamento de desperdícios invisíveis e tranquilidade com uma equipe que opera com autonomia sem depender da sua presença 16 horas por dia."
    },
    {
      role: "Chefs de Cozinha & Sous Chefs",
      benefit: "Método estruturado para treinar novos integrantes, padronizar fichas técnicas vivas e manter o padrão gastronômico impecável mesmo com trocas de escala."
    },
    {
      role: "Cozinheiros & Auxiliares",
      benefit: "Desenvolvimento profissional acelerado: você deixa de ser apenas o 'cortador de insumos' e passa a ser um profissional respeitado que compreende processos e gestão."
    },
    {
      role: "Consultores & Escolas de Gastronomia",
      benefit: "Metodologia contemporânea que complementa a técnica culinária tradicional com visão de negócios, processos, dados e inteligência operacional."
    }
  ];

  return (
    <div className="bg-[#F5F3EE] text-[#475569] font-sans overflow-hidden">
      
      {/* 1. HERO DA COZINHA PENSANTE */}
      <section className="relative pt-14 pb-20 lg:pt-20 lg:pb-28 bg-[#04162B] text-white border-b border-[#072F54] overflow-hidden">
        
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#072F54]/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#C38735]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-heading">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button
              onClick={() => onNavigate('projetos')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Verticais
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#C38735] font-semibold">
              Cozinha Pensante
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              
              {/* Selo: Primeira Vertical */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C38735]/20 border border-[#C38735]/40">
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#C38735]" />
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#C38735]">
                  Primeira Vertical Codekis Labs
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Código da Cozinha Pensante
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                A gastronomia profissional vista como laboratório de processos, tomada de decisão e desenvolvimento humano. Desenvolvendo cozinhas que pensam, decidem e operam com excelência.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <ButtonPrimary
                  size="lg"
                  onClick={() => {
                    const el = document.getElementById('pilares');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>Explorar os 8 Pilares</span>
                  <ArrowRight className="w-4 h-4" />
                </ButtonPrimary>

                <ButtonOutlineLight
                  size="lg"
                  onClick={() => onOpenCapture('cozinha_pensante_hero')}
                >
                  <span>Diagnóstico para seu restaurante</span>
                </ButtonOutlineLight>
              </div>

            </div>

            {/* Visual Hero Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-700 relative group">
                <img
                  src={HERO_IMAGES.chefMain}
                  alt="Cozinha Profissional"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04162B] via-[#04162B]/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <p className="text-xs font-mono font-bold text-[#C38735] uppercase">
                    Mise en Place • Processos • Decisão
                  </p>
                  <p className="text-base font-heading font-bold text-white">
                    “Na cozinha, cada segundo economizado é fruto de um processo compreendido.”
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          1.1. ARQUITETURA METODOLÓGICA: O CÔMODO & A FUNDAÇÃO
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F5F3EE] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-[#04162B] text-white border border-[#072F54] shadow-xl relative overflow-hidden">
            
            {/* Subtle background glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#C38735]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C38735]/20 border border-[#C38735]/40 text-[#C38735] text-xs font-heading font-bold uppercase tracking-widest">
                  <Home className="w-3.5 h-3.5" />
                  <span>A Metáfora Arquitetônica</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight">
                  A Cozinha é um Cômodo. <br className="hidden sm:inline" />
                  A Fundação da Casa é <span className="text-[#C38735]">O Código</span>.
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Não se constrói uma cozinha suspensa no ar. O <strong>Código da Cozinha Pensante</strong> não é um conjunto de receitas nem uma teoria gastronômica isolada: ele é a materialização viva d'<strong>O Código</strong> no cômodo mais exigente, volátil e implacável da casa.
                </p>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Se a fundação de processos não for sólida, as paredes do restaurante trincam no pico do movimento. Se a fundação de processos for de concreto armado, a cozinha opera com precisão cirúrgica, desperdício controlado e autonomia da equipe.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center space-y-4 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xs">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C38735]">
                  Estrutura Integrada
                </span>
                
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#072F54] text-slate-200 flex items-center justify-between">
                    <span className="font-semibold">O Cômodo (Ativo)</span>
                    <span className="text-[#C38735] font-mono">Cozinha Pensante</span>
                  </div>
                  <div className="text-center text-[#C38735] text-xs font-bold">↑ apoiado sobre ↑</div>
                  <div className="p-2.5 rounded-lg bg-white text-[#04162B] font-bold flex items-center justify-between">
                    <span>A Fundação (Base)</span>
                    <span className="font-mono text-[#6E4212]">O Código (6 Estágios)</span>
                  </div>
                </div>

                <ButtonSecondary
                  size="sm"
                  onClick={() => onNavigate('codigo')}
                  className="w-full justify-center text-xs"
                >
                  <span>Conhecer a Fundação (O Código)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </ButtonSecondary>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* 2. O QUE É A COZINHA PENSANTE */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-[#04162B]/5 text-[#04162B] text-xs font-heading font-bold uppercase tracking-wider">
              A Proposta da Vertical
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#04162B] tracking-tight">
              O que é o Código da Cozinha Pensante?
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              A cozinha de um restaurante profissional é um dos ambientes operacionais mais velozes e complexos do mundo. Matéria-prima perecível, tempo curto, calor extremo e alta expectativa do cliente exigem mais do que braços: exigem inteligência de processos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-7 rounded-2xl bg-[#F5F3EE] border border-[#E5E7EB] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#04162B] text-[#C38735] flex items-center justify-center font-heading font-bold">
                01
              </div>
              <h3 className="text-xl font-heading font-bold text-[#04162B]">
                Da Intuição ao Processo
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Substitui o caos do improviso crônico por procedimentos claros, onde cada profissional sabe exatamente o que fazer, como medir perdas e quando repor a praça.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F5F3EE] border border-[#E5E7EB] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#04162B] text-[#C38735] flex items-center justify-center font-heading font-bold">
                02
              </div>
              <h3 className="text-xl font-heading font-bold text-[#04162B]">
                Respeito pelo Alimento e pelo Custo
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Ensina o cozinheiro a calcular e valorizar o CMV. O desperdício deixa de ser uma sobra invisível e passa a ser reconhecido como custo real que ameaça os empregos.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F5F3EE] border border-[#E5E7EB] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#04162B] text-[#C38735] flex items-center justify-center font-heading font-bold">
                03
              </div>
              <h3 className="text-xl font-heading font-bold text-[#04162B]">
                Autonomia e Calma Operacional
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Cozinhas que compreendem processos trabalham com ritmo firme, mas sem gritaria ou sobrecarga. A equipe toma decisões fundamentadas com segurança e padrão.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* 3. OS 8 PILARES DA COZINHA PENSANTE */}
      <section id="pilares" className="py-20 lg:py-28 bg-[#F5F3EE] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-[#C38735]/15 text-[#6E4212] text-xs font-heading font-bold uppercase tracking-wider">
              Eixos de Atuação
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#04162B] tracking-tight">
              Os 8 Pilares da Cozinha Pensante
            </h2>
            <p className="text-base sm:text-lg text-[#475569]">
              As dimensões operacionais onde O Código atua para transformar a rentabilidade e o clima da cozinha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILARES.map((pilar, index) => {
              const IconComp = pilar.icon;
              const isSelected = selectedPillar === index;
              return (
                <div
                  key={pilar.id}
                  onClick={() => setSelectedPillar(index)}
                  className={`p-6 rounded-2xl transition-all duration-200 cursor-pointer flex flex-col justify-between border ${
                    isSelected
                      ? 'bg-[#04162B] text-white border-[#04162B] shadow-xl scale-[1.02]'
                      : 'bg-white text-[#475569] border-[#E5E7EB] hover:border-[#C38735]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isSelected ? 'bg-[#C38735] text-[#04162B]' : 'bg-[#F5F3EE] text-[#04162B]'
                      }`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-heading font-bold uppercase px-2 py-0.5 rounded ${
                        isSelected ? 'bg-white/10 text-slate-300' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {pilar.tag}
                      </span>
                    </div>

                    <h3 className={`text-xl font-heading font-bold mb-2 ${isSelected ? 'text-white' : 'text-[#04162B]'}`}>
                      {pilar.title}
                    </h3>

                    <p className={`text-xs leading-relaxed ${isSelected ? 'text-slate-300' : 'text-[#475569]'}`}>
                      {pilar.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200/40 text-[11px] font-medium">
                    <span className={isSelected ? 'text-[#F5C06A]' : 'text-[#072F54]'}>
                      {pilar.detail}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* 4. PARA QUEM É A COZINHA PENSANTE */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-[#04162B]/5 text-[#04162B] text-xs font-heading font-bold uppercase tracking-wider">
              Público-Alvo
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#04162B] tracking-tight">
              Para quem é a Cozinha Pensante?
            </h2>
            <p className="text-base text-[#475569]">
              Soluções desenhadas para transformar a realidade de todos os elos da gastronomia profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TARGET_AUDIENCES.map((target) => (
              <div
                key={target.role}
                className="p-6 rounded-2xl bg-[#F5F3EE] border border-[#E5E7EB] space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C38735]" />
                  <h3 className="text-lg font-heading font-bold text-[#04162B]">
                    {target.role}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {target.benefit}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 5. FORMATOS DE ATUAÇÃO */}
      <section className="py-20 lg:py-28 bg-[#F5F3EE] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-[#C38735]/15 text-[#6E4212] text-xs font-heading font-bold uppercase tracking-wider">
              Modalidades de Parceria
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#04162B] tracking-tight">
              Formatos de Atuação
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#04162B] text-[#C38735] flex items-center justify-center mx-auto">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-heading font-bold text-[#04162B]">Treinamento</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Capacitação presencial ou semipresencial para equipes de cozinha sobre CMV, fluxo e decisão.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#04162B] text-[#C38735] flex items-center justify-center mx-auto">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-heading font-bold text-[#04162B]">Diagnóstico</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Imersão operacional para auditar fichas técnicas, perdas de câmara e gargalos de pass.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#04162B] text-[#C38735] flex items-center justify-center mx-auto">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-heading font-bold text-[#04162B]">Conteúdo</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Artigos práticos, guias de porcionamento e calculadoras simplificadas de perdas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#04162B] text-[#C38735] flex items-center justify-center mx-auto">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-heading font-bold text-[#04162B]">Projetos</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Desenho de novos fluxos, implantação de SOPs visuais e consultoria para abertura de operações.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* 6. CTA FINAL */}
      <section className="py-20 lg:py-24 bg-[#04162B] text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block px-3 py-1 rounded-md bg-[#C38735]/20 text-[#C38735] text-xs font-heading font-bold uppercase tracking-wider">
            Transforme sua Operação
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Leve a Cozinha Pensante para o seu restaurante
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Elimine desperdícios, reduza seu CMV e construa uma equipe que pensa e decide junto com você.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <ButtonPrimary
              size="lg"
              onClick={() => onNavigate('contato')}
            >
              <span>Falar com especialista em gastronomia</span>
              <ArrowRight className="w-4 h-4" />
            </ButtonPrimary>

            <ButtonOutlineLight
              size="lg"
              onClick={() => onNavigate('artigos')}
            >
              <span>Ler artigos de gastronomia</span>
            </ButtonOutlineLight>
          </div>
        </div>
      </section>

    </div>
  );
};
