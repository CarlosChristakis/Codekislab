import { Article, CourseModule, ProjectItem } from '../types';
import { ARTICLES_DETAILED } from './articlesData';

export const HERO_IMAGES = {
  // Thoughtful professional looking at notebook/laptop with coffee
  homeHero: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
  // Post-it notes / notebook with quote
  notebookIdea: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1000&q=80",
  // Stacked foundation blocks / architectural
  foundationBlocks: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1000&q=80",
  // Gastronomy dish / kitchen night
  kitchenDish: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
  // Chef preparing in kitchen
  chefMain: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80",
  // Process desk / blueprints / diagram mapping
  processBlueprint: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
  // AI neural chip / futuristic tech
  praxisAI: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
  // Glowing lightbulb / future innovation
  novosProjetos: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=1000&q=80",
  // Potatoes raw
  potatoes: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
  // Carlos Christakis portrait
  authorPortrait: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  // Kitchen operation busy service
  kitchenOperation: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80",
  // Chef observing
  chefObserving: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1000&q=80",
  // Plated dish
  platedDish: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
};

// Metodologia-Base da Codekis Lab (6 Estágios)
export const CODIGO_STEPS = [
  {
    key: "executar",
    step: 1,
    code: "01",
    title: "Executar",
    action: "Dominar a atividade.",
    question: "O que a tarefa exige?",
    description: "Dominar a atividade prática com atenção técnica, padrão operacional e presença consciente, reconhecendo cada gesto e recurso envolvido."
  },
  {
    key: "compreender",
    step: 2,
    code: "02",
    title: "Compreender",
    action: "Entender o processo, o propósito e os impactos.",
    question: "Por que e para que ela existe?",
    description: "Enxergar a esteira inteira: de onde veio o material, para onde vai a entrega e como o tempo, custo e qualidade afetam o cliente e a equipe."
  },
  {
    key: "medir",
    step: 3,
    code: "03",
    title: "Medir",
    action: "Transformar percepção em informação.",
    question: "Quais são os números reais?",
    description: "Substituir impressões por indicadores claros: taxa de rendimento, perdas ocultas, tempo de ciclo, custo de matéria-prima e gargalos."
  },
  {
    key: "decidir",
    step: 4,
    code: "04",
    title: "Decidir",
    action: "Utilizar contexto, dados e experiência.",
    question: "Qual a melhor escolha agora?",
    description: "Agir com clareza mesmo sob pressão e incerteza, unindo a sensibilidade prática da equipe a evidências concretas da operação."
  },
  {
    key: "padronizar",
    step: 5,
    code: "05",
    title: "Padronizar",
    action: "Transformar boas práticas em processo.",
    question: "Como manter o nível sem depender de heróis?",
    description: "Registrar o que funcionou em procedimentos simples, vivos e fáceis de replicar, garantindo estabilidade e autonomia para o time."
  },
  {
    key: "melhorar",
    step: 6,
    code: "06",
    title: "Melhorar",
    action: "Evoluir continuamente.",
    question: "Como dar o próximo passo?",
    description: "Instaurar o hábito diário de aperfeiçoamento contínuo sustentável, reduzindo atritos e expandindo a inteligência da organização."
  }
];

// A Analogia Arquitetônica Fundamental: A Casa, a Fundação e os Cômodos
export const HOUSE_ANALOGY = {
  quote: "O Código é a base e a fundação de uma casa; O Código da Cozinha Pensante é um cômodo construído sobre esse alicerce.",
  concept: "Ninguém constrói uma cozinha flutuando no ar. Uma operação gastronômica de excelência só se sustenta quando apoiada na fundação sólida da metodologia de processos.",
  foundation: {
    title: "A Fundação (O Código)",
    subtitle: "A Base Estrutural Universal",
    role: "O alicerce de concreto armado que sustenta qualquer construção.",
    description: "Os 6 estágios fundamentais (Executar, Compreender, Medir, Decidir, Padronizar, Melhorar) que nivelam o chão, impedem rachaduras operacionais e sustentam o peso da rotina sob qualquer volume ou pressão.",
    characteristics: [
      "Indispensável: sem fundação, qualquer parede racha",
      "Universal: sustenta qualquer tipo de cômodo ou negócio",
      "Invisível para quem olha com pressa, mas vital para quem vive na casa"
    ]
  },
  primaryRoom: {
    title: "O Primeiro Cômodo (O Código da Cozinha Pensante)",
    subtitle: "A Aplicação Setorial na Gastronomia & F&B",
    role: "A Cozinha da Casa — o ambiente mais desafiador, implacável e dinâmico.",
    description: "A Cozinha é o laboratório real onde o fogo queima, o tempo não perdoa, os insumos são perecíveis e a margem de erro é mínima. Se a fundação d'O Código suporta o teste extremo de uma cozinha profissional, ela sustenta qualquer operação do mundo.",
    characteristics: [
      "Prova de Fogo: teste de estresse real para a metodologia",
      "Foco em CMV, mise en place, desperdício zero e sincronia de praças",
      "Um cômodo vivo e prático, não uma abstração teórica"
    ]
  },
  futureRooms: [
    {
      name: "Cômodo dos Serviços & Atendimento",
      desc: "O salão, o suporte ao cliente e as operações de serviço orientadas à experiência fluida."
    },
    {
      name: "Cômodo da Indústria & Logística",
      desc: "A oficina, a cadeia de suprimentos e o transporte com precisão de esteira."
    },
    {
      name: "Cômodo da Saúde & Cuidado",
      desc: "Rotinas clínicas, segurança do paciente e gestão de leitos sem desperdício."
    },
    {
      name: "Cômodo da Tecnologia & IA",
      desc: "O laboratório de automação que amplifica dados sobre processos previamente organizados."
    }
  ]
};

// Posicionamento Estratégico da Startup
export const STARTUP_POSITIONING = {
  label: "Startup de Inteligência Operacional",
  tagline: "Desenvolvendo pessoas que compreendem, decidem e melhoram processos.",
  statement:
    "A Codekis Lab é uma startup de desenvolvimento profissional e inteligência operacional que integra processos, inteligência artificial, aprendizagem prática e melhoria contínua para desenvolver pessoas capazes de compreender, decidir e melhorar processos."
};

// Nossa Tese (Seção Home)
export const STARTUP_THESIS = {
  title: "Nossa tese",
  badge: "Tese da Startup",
  paragraphs: [
    "Muitas empresas treinam pessoas para executar tarefas, mas nem sempre desenvolvem essas pessoas para compreender o processo do qual fazem parte.",
    "Quando o profissional sabe apenas executar, aumentam a dependência de supervisão, o retrabalho, o desperdício, a perda de conhecimento e a dificuldade de melhoria.",
    "A Codekis Lab nasce para atuar justamente nesse espaço.",
    "Somos uma startup de desenvolvimento profissional e inteligência operacional que combina processos, inteligência artificial, aprendizagem prática e melhoria contínua para transformar profissionais executores em pessoas capazes de compreender, analisar, decidir e melhorar processos."
  ]
};

// Pitch Visual na Home (4 Blocos conectados)
export const STARTUP_PITCH_BLOCKS = [
  {
    number: "01",
    label: "Problema",
    title: "Execução sem compreensão",
    text: "Muitas pessoas sabem fazer, mas não entendem como sua atividade impacta o processo como um todo.",
    icon: "AlertCircle",
    tag: "Diagnóstico Operacional",
    stepFlow: "01 • Causa Raiz"
  },
  {
    number: "02",
    label: "Solução",
    title: "Metodologia + IA + aprendizagem prática",
    text: "A Codekis desenvolve profissionais por meio de metodologia própria, diagnóstico, tecnologia e melhoria contínua.",
    icon: "Cpu",
    tag: "Método & Tecnologia",
    stepFlow: "02 • Capacitação",
    linkPage: "codigo"
  },
  {
    number: "03",
    label: "Primeira Vertical",
    title: "Código da Cozinha Pensante",
    text: "A gastronomia é o primeiro laboratório da metodologia Codekis, reunindo processos, pessoas, custos, tempo, qualidade e decisão.",
    icon: "UtensilsCrossed",
    tag: "Laboratório Prático",
    stepFlow: "03 • Validação Real",
    linkPage: "cozinha"
  },
  {
    number: "04",
    label: "Visão",
    title: "Escalar para outros setores",
    text: "O Código foi criado para evoluir para outras operações, setores e contextos profissionais.",
    icon: "TrendingUp",
    tag: "Expansão Setorial",
    stepFlow: "04 • Escala Multissetorial",
    linkPage: "sobre"
  }
];

// Por que a Codekis Lab existe (Seção Institucional)
export const STARTUP_WHY_IT_EXISTS = {
  title: "Por que a Codekis Lab existe",
  badge: "Propósito & Origem",
  paragraphs: [
    "A Codekis Lab nasceu da observação de um problema simples, mas recorrente: organizações treinam pessoas para executar, mas nem sempre desenvolvem pessoas para compreender.",
    "Essa diferença afeta autonomia, qualidade, custos, conhecimento, tomada de decisão e capacidade de melhoria.",
    "A startup nasce para transformar essa realidade por meio de metodologia, tecnologia, diagnóstico e desenvolvimento humano."
  ]
};

// Inteligência Artificial
export const STARTUP_AI_STATEMENT = {
  title: "Inteligência artificial como ferramenta. Inteligência humana como direção.",
  complement:
    "A tecnologia amplia a capacidade de análise, diagnóstico, aprendizagem e tomada de decisão, mas o objetivo da Codekis não é substituir pessoas. É desenvolver pessoas mais preparadas para compreender e melhorar processos."
};

// Visão da Startup
export const STARTUP_VISION = {
  title: "Visão",
  text: "Construir um ecossistema onde desenvolvimento humano, inteligência artificial, processos e melhoria contínua trabalhem juntos para formar profissionais mais conscientes, autônomos e preparados para melhorar organizações."
};

// Seção de Escalabilidade
export const STARTUP_SCALABILITY = {
  title: "Um Código. Múltiplas aplicações.",
  text: "A gastronomia é o primeiro laboratório. A metodologia foi concebida para ser aplicada a outros ambientes onde pessoas, processos e decisões estão diretamente conectados.",
  hierarchy: [
    { level: "01", name: "CODEKIS LAB", role: "A Startup & Ecossistema de Inteligência Operacional" },
    { level: "02", name: "CÓDIGO", role: "A Metodologia-Base de 6 Estágios de Processos" },
    { level: "03", name: "CÓDIGO DA COZINHA PENSANTE", role: "Primeira Vertical & Laboratório de Validação Prática" },
    { level: "04", name: "FUTURAS VERTICAIS", role: "Expansão Setorial (Serviços, Saúde, Indústria e Logística)" }
  ]
};

// Pitch Institucional em formato de prosa para Sobre
export const STARTUP_PROSE_PITCH = [
  "A Codekis Lab é uma startup criada para desenvolver pessoas que compreendem, decidem e melhoram processos.",
  "A empresa surgiu da observação de um problema recorrente dentro das operações: muitas pessoas são treinadas para executar tarefas, mas nem sempre são desenvolvidas para compreender o processo do qual fazem parte.",
  "Esse cenário gera retrabalho, desperdício, dependência de supervisão, perda de conhecimento e dificuldade de melhoria.",
  "A Codekis Lab combina processos, inteligência artificial, aprendizagem prática e melhoria contínua para transformar profissionais executores em pessoas mais conscientes, analíticas e capazes de tomar decisões melhores.",
  "A metodologia-base da empresa é o Código, estruturado em seis movimentos: executar, compreender, medir, decidir, padronizar e melhorar.",
  "A primeira aplicação é o Código da Cozinha Pensante, voltado ao universo da gastronomia e operações de alimentação.",
  "A visão da startup é expandir essa metodologia para diferentes setores e contextos profissionais."
];

// CTA Institucional Final
export const STARTUP_CTA = {
  title: "Empresas mais inteligentes começam com pessoas que entendem o que fazem.",
  subtitle: "A Codekis Lab desenvolve pessoas para compreender, decidir e melhorar processos.",
  primaryButton: "Conheça o Código",
  secondaryButton: "Fale com a Codekis"
};

// Seção Problema - 6 Dores Críticas das Organizações
export const CODEKIS_PROBLEMS = [
  {
    id: "retrabalho",
    title: "Retrabalho",
    description: "Tarefas feitas duas vezes porque a etapa anterior não compreendeu o impacto da entrega para quem recebe.",
    impact: "Drena tempo útil e desgasta a paciência da equipe."
  },
  {
    id: "desperdicio",
    title: "Desperdício",
    description: "Perda de insumos, tempo ocioso e matéria-prima que passa despercebida na correria do piloto automático.",
    impact: "Erosão silenciosa da margem e dos resultados."
  },
  {
    id: "comunicacao",
    title: "Falhas de comunicação",
    description: "Transições truncadas de turno e setores que operam como ilhas isoladas sem linguagem comum de processos.",
    impact: "Atrito constante, ansiedade e desencontros operacionais."
  },
  {
    id: "supervisao",
    title: "Dependência de supervisão",
    description: "Líderes sufocados atuando como 'apagadores de incêndio', porque a equipe não sabe como agir sem aval.",
    impact: "Gargalo central na tomada de decisão diária."
  },
  {
    id: "autonomia",
    title: "Baixa autonomia",
    description: "Profissionais que dominam a técnica manual, mas travam diante de qualquer variação ou imprevisto.",
    impact: "Insegurança coletiva e lentidão na resposta ao cliente."
  },
  {
    id: "dados",
    title: "Decisões sem dados",
    description: "Escolhas cruciais tomadas com base em 'eu acho', pressentimento ou medo de desabastecimento.",
    impact: "Aumento desnecessário de custos e estoques parados."
  }
];

// Soluções Institucionais e Consultivas da Codekis Lab
export const CODEKIS_SOLUTIONS = [
  {
    id: "diagnostico",
    title: "Diagnóstico Operacional",
    short: "Identificar como pessoas e equipes compreendem seus processos.",
    problem: "Falta de clareza sobre onde o tempo e o dinheiro estão se perdendo entre tarefas executadas no piloto automático.",
    approach: "Imersão no fluxo real de trabalho com mapeamento de processos, pontos cegos, desperdícios e maturidade de decisões.",
    result: "Diagnóstico completo com plano de ação priorizado para destravar gargalos imediatos e estruturar fluxos."
  },
  {
    id: "desenvolvimento",
    title: "Desenvolvimento Profissional",
    short: "Construir visão sistêmica, autonomia e capacidade de decisão.",
    problem: "Executores competentes na técnica manual que não compreendem os desdobramentos operacionais e financeiros das suas ações.",
    approach: "Capacitação imersiva para transformar operadores em pensadores de processos, com foco em responsabilidade sistêmica.",
    result: "Profissionais autônomos, capazes de antecipar problemas e tomar decisões conscientes sem depender de supervisão constante."
  },
  {
    id: "aprendizagem",
    title: "Aprendizagem Prática",
    short: "Aprender por situações, contexto e tomada de decisão.",
    problem: "Cursos e treinamentos teóricos tradicionais que são esquecidos poucos dias após a aplicação.",
    approach: "Metodologia 'Ação-Reflexão-Ação' com dinâmicas aplicadas diretamente a dilemas e rotinas do dia a dia do setor.",
    result: "Fixação definitiva de conceitos e mudança comportamental imediata observável no chão da operação."
  },
  {
    id: "ia-aplicada",
    title: "Inteligência Artificial Aplicada",
    short: "Utilizar IA como apoio à análise, aprendizagem e melhoria.",
    problem: "Ferramentas tecnológicas adotadas sem maturidade de processos, acelerando a desordem em vez de gerar produtividade.",
    approach: "Modelos de IA e agentes desenhados para apoiar a leitura de dados, previsão de insumos e suporte cognitivo aos profissionais.",
    result: "Tecnologia como multiplicadora do discernimento humano, gerando decisões ágeis e embasadas em fatos."
  },
  {
    id: "processos",
    title: "Mapeamento & Processos",
    short: "Mapear, compreender, padronizar e melhorar operações.",
    problem: "Processos informais na cabeça de funcionários antigos, criando vulnerabilidade extrema quando há rotatividade.",
    approach: "Modelagem de fluxos, eliminação de etapas redundantes e construção de Procedimentos Operacionais Vivos (SOPs claros).",
    result: "Operação padronizada, estável e previsível, mantendo a excelência independente de trocas de escala ou liderança."
  },
  {
    id: "melhoria-continua",
    title: "Melhoria Contínua",
    short: "Criar cultura de evolução prática e mensurável.",
    problem: "Iniciativas de melhoria pontuais que perdem fôlego após algumas semanas sem métricas de acompanhamento sustentável.",
    approach: "Implementação de rituais leves de revisão, ciclos curtos de teste e métricas simples de eficiência.",
    result: "Cultura perene de pequenas melhorias diárias com impacto financeiro, ecológico e humano mensurável."
  }
];

// O Exemplo Didático da Batata no Código
export const POTATO_PROCESS_STEPS = [
  { step: 1, text: "Retirar do estoque" },
  { step: 2, text: "Conferir quantidade e lote" },
  { step: 3, text: "Higienizar conforme sanitização" },
  { step: 4, text: "Descascar com técnica de rendimento" },
  { step: 5, text: "Cortar no padrão dimensional" },
  { step: 6, text: "Pesar matéria limpa vs. resíduo" },
  { step: 7, text: "Registrar indicador de perda real" },
  { step: 8, text: "Armazenar em temperatura correta" },
  { step: 9, text: "Identificar com data e lote" },
  { step: 10, text: "Utilizar na esteira de produção" }
];

export const CODIGO_SECTORS = [
  { name: "Gastronomia & Operações", icon: "UtensilsCrossed", desc: "Mise en place, tempo de comanda, CMV e controle rigoroso de desperdício." },
  { name: "Serviços & Atendimento", icon: "Briefcase", desc: "Fluxo de chamados, triagem de demandas e transições sem atrito para o cliente." },
  { name: "Indústria & Logística", icon: "Factory", desc: "Fluxo fabril, setups rápidos, balanceamento de linha e eliminação de perdas." },
  { name: "Educação & Treinamento", icon: "GraduationCap", desc: "Construção de raciocínio crítico, metodologias ativas e formação aplicada." },
  { name: "Saúde & Cuidados", icon: "HeartPulse", desc: "Segurança de protocolos, gestão de tempo de resposta e atenção humanizada." },
  { name: "Qualquer Operação Humana", icon: "Sparkles", desc: "Onde quer que existam pessoas, processos, dados e decisões a tomar." }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "codigo-da-cozinha-pensante",
    slug: "codigo-da-cozinha-pensante",
    title: "Código da Cozinha Pensante",
    description: "A primeira vertical da Codekis Lab. Aplica a metodologia do Código ao universo da gastronomia e operações de alimentação, desenvolvendo profissionais capazes de ir além da execução e compreender produção, desperdício, CMV, estoque, fluxo, equipe, qualidade e tomada de decisão.",
    status: "Em desenvolvimento",
    category: "Gastronomia & Operações",
    image: HERO_IMAGES.kitchenDish,
    linkText: "Conhecer a vertical"
  },
  {
    id: "codekis-process-lab",
    slug: "codekis-process-lab",
    title: "Codekis Process Lab",
    description: "Pesquisa aplicada em diagnóstico, mapeamento e modelagem de processos para negócios de serviços e operações intensivas. Ferramentas visuais que transformam rotinas confusas em esteiras compreensíveis.",
    status: "Em estudo",
    category: "Processos & Organização",
    image: HERO_IMAGES.processBlueprint,
    linkText: "Em estudo"
  },
  {
    id: "codekis-ai",
    slug: "codekis-ai",
    title: "Codekis AI",
    description: "Aplicações de inteligência artificial desenhadas para apoiar a leitura de dados operacionais e o suporte à decisão humana. Tecnologia como amplificadora do discernimento, não como substituta do pensamento.",
    status: "Em estudo",
    category: "Inteligência Artificial Aplicada",
    image: HERO_IMAGES.praxisAI,
    linkText: "Em estudo"
  },
  {
    id: "novas-verticais",
    slug: "novas-verticais",
    title: "Futuras Verticais",
    description: "Novas aplicações do Código em setores como hospitalidade, serviços de saúde e logística estão em fase conceitual. A Codekis Lab expande sua metodologia conforme valida cada laboratório prático.",
    status: "Em breve",
    category: "Ecossistema em Expansão",
    image: HERO_IMAGES.novosProjetos,
    linkText: "Acompanhar roadmap"
  }
];

export const COURSE_MODULES: CourseModule[] = [
  {
    number: 1,
    code: "01",
    title: "Módulo 1 — Executar com Consciência & Observar",
    objective: "Dominar a atividade e perceber o que realmente acontece no posto de trabalho.",
    description: "Por trás de uma simples tarefa existem dezenas de microdecisões tomadas no piloto automático. Neste módulo inicial, você calibra a atenção técnica para identificar atritos silenciosos e movimentos que drenam energia.",
    topics: [
      "A diferença entre olhar e enxergar a operação real",
      "O piloto automático: por que repetimos falhas conhecidas",
      "Mapeando os micro-desperdícios e movimentos redundantes",
      "Exercício prático: A auditoria do próprio posto de trabalho"
    ],
    situationExample: "Cozinha com pedidos atrasados e equipe correndo, enquanto faltam utensílios higienizados na praça.",
    deliverable: "Checklist de Observação de Posto de Trabalho",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
  },
  {
    number: 2,
    code: "02",
    title: "Módulo 2 — Compreender o Processo e a Esteira",
    objective: "Enxergar a esteira inteira, mapear etapas interdependentes e diagnosticar gargalos.",
    description: "Nenhuma tarefa vive isolada. Você aprenderá a rastrear uma atividade do início ao fim, enxergando como uma falha na recepção de insumos afeta o cliente final na mesa horas depois.",
    topics: [
      "Começo, meio e fim: a cadeia de valor integrada",
      "O conceito de 'cliente interno' entre praças e setores",
      "Identificação e desobstrução de gargalos operacionais",
      "Construção de SOPs (Procedimentos Padrão) práticos e vivos"
    ],
    situationExample: "Buffet esvaziando no pico do almoço sem que o setor de retaguarda saiba o que preparar primeiro.",
    deliverable: "Mapa de Fluxo da Praça com Pontos Críticos",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80"
  },
  {
    number: 3,
    code: "03",
    title: "Módulo 3 — Medir e Decidir com Contexto",
    objective: "Transformar percepções em dados concretos e tomar decisões seguras sob pressão.",
    description: "Em momentos de estresse, a maioria das decisões é tomada por impulso ou medo. Aqui você aprende a ler indicadores simples (CMV, perdas, tempo de ciclo) para agir com discernimento.",
    topics: [
      "Dados operacionais simples que qualquer membro da equipe pode ler",
      "Decisões sob pressão: como eliminar o improviso crônico",
      "O custo invisível da reposição excessiva no fim do turno",
      "O papel da Inteligência Artificial como assistente de análise"
    ],
    situationExample: "Dúvida entre produzir mais 5kg de preparação faltando 25 minutos para encerrar o expediente ou adaptar a oferta.",
    deliverable: "Matriz de Decisão Operacional em 3 Perguntas",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
  },
  {
    number: 4,
    code: "04",
    title: "Módulo 4 — Padronizar e Melhorar Continuamente",
    objective: "Transformar boas práticas em rotinas perenes e criar uma cultura de evolução.",
    description: "Melhoria contínua não é um evento isolado, é um hábito de equipe. Você desenvolverá a habilidade de dialogar com lideranças e colegas para implementar melhorias sem burocracia ou resistência.",
    topics: [
      "Como propor uma melhoria para a liderança com base em fatos e números",
      "Ciclos curtos de teste: o método Kaizen no ambiente de trabalho",
      "Eliminação sustentável de desperdício (matéria-prima, tempo e estresse)",
      "Plano individual de evolução e certificação de excelência"
    ],
    situationExample: "Equipe resistente a um novo procedimento de porcionamento que reduz as perdas em 14%.",
    deliverable: "Projeto Piloto de Melhoria Contínua Aplicada",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80"
  }
];

export const ARTICLES: Article[] = ARTICLES_DETAILED;

export const CARLOS_INFO = {
  name: "Carlos Christakis",
  role: "Idealizador da Codekis Lab",
  title: "Idealizador & Estrategista de Operações",
  bio: "Profissional com sólida vivência em gestão de processos, melhoria contínua, operações gastronômicas, tecnologia e inteligência artificial aplicada. A Codekis Lab nasce da convicção de que nenhuma organização evolui sem antes desenvolver a capacidade das pessoas de compreenderem o que fazem e decidirem com base na realidade.",
  manifesto: "Temos mais ferramentas, dados e tecnologia do que nunca. Mas isso não significa que sabemos aplicá-los melhor. A Codekis Lab existe para aproximar processo, inteligência e desenvolvimento humano. Não basta executar tarefas no piloto automático: o futuro pertence a quem compreende a esteira inteira, sabe ler dados com discernimento e age para melhorar continuamente.",
  photo: HERO_IMAGES.authorPortrait,
  focus: [
    "Engenharia de Processos e Operações",
    "Metodologia O Código (6 Estágios)",
    "Inteligência Artificial Operacional",
    "Desenvolvimento de Lideranças de Chão"
  ],
  social: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com"
  }
};
