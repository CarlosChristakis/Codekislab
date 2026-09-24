import { Article, CourseModule } from '../types';
export * from './praxisData';

export const HERO_IMAGES = {
  // Chef preparing dish focused
  chefMain: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80",
  // Notebook with notes and pen
  notebook: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1000&q=80",
  // Kitchen operation busy service
  kitchenOperation: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80",
  // Potatoes raw and sliced
  potatoes: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
  // Chef observing dish / service pass
  chefObserving: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
  // Chalkboard with quote
  chalkboard: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80",
  // Plating dish
  platedDish: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
  // Carlos Christakis portrait (thoughtful, professional)
  authorPortrait: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  // Kitchen pass at night
  kitchenNight: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
};

export const VALUE_PROPOSITIONS = [
  {
    icon: "ChefHat",
    title: "Mais consciência",
    subtitle: "sobre o que fazemos"
  },
  {
    icon: "BarChart3",
    title: "Melhores decisões",
    subtitle: "no dia a dia"
  },
  {
    icon: "RefreshCw",
    title: "Menos desperdício",
    subtitle: "mais resultado"
  },
  {
    icon: "Users",
    title: "Pessoas mais preparadas",
    subtitle: "para o futuro"
  }
];

export const POTATO_PROCESS_STEPS = [
  { step: 1, text: "Retirar do estoque" },
  { step: 2, text: "Conferir quantidade" },
  { step: 3, text: "Higienizar" },
  { step: 4, text: "Descascar" },
  { step: 5, text: "Cortar" },
  { step: 6, text: "Pesar" },
  { step: 7, text: "Registrar perda" },
  { step: 8, text: "Armazenar corretamente" },
  { step: 9, text: "Identificar" },
  { step: 10, text: "Utilizar na produção" }
];

export const PILARES_CODIGO = [
  {
    id: "observacao",
    title: "Observação",
    subtitle: "Enxergar além da tarefa",
    description: "Aprender a notar detalhes que passam despercebidos: tempo gasto, caminhos repetidos, desperdícios silenciosos e atritos entre setores.",
    icon: "Eye"
  },
  {
    id: "processos",
    title: "Processos",
    subtitle: "Entender o todo",
    description: "Compreender como o trabalho flui: começo, meio, fim e conexões entre compras, estoque, pré-preparo, cocção e atendimento.",
    icon: "Layers"
  },
  {
    id: "decisao",
    title: "Decisão",
    subtitle: "Usar informação",
    description: "Substituir o 'eu acho' por dados simples e observáveis. Tomar decisões com base no impacto real no custo, na qualidade e nas pessoas.",
    icon: "TrendingUp"
  },
  {
    id: "melhoria",
    title: "Melhoria",
    subtitle: "Buscar resultados contínuos",
    description: "Pequenos ajustes diários que acumulam grandes economias e aliviam o cansaço da equipe de forma sustentável.",
    icon: "Sparkles"
  }
];

export const COURSE_MODULES: CourseModule[] = [
  {
    number: 1,
    code: "01",
    title: "Módulo 1 — Aprender a observar",
    objective: "Perceber o que realmente acontece e identificar oportunidades.",
    description: "Por trás de uma simples tarefa existem dezenas de decisões tomadas no piloto automático. Neste módulo, você calibra seu olhar para perceber atritos, gargalos e movimentos desnecessários que drenam tempo e energia.",
    topics: [
      "A diferença entre olhar e enxergar a operação",
      "O piloto automático: por que repetimos erros conhecidos",
      "Mapeando os micro-desperdícios silenciosos",
      "Exercício prático: A auditoria do próprio posto de trabalho"
    ],
    situationExample: "Cozinha com pratos atrasados e cozinheiros correndo, enquanto panelas limpas faltam na bancada.",
    deliverable: "Checklist de Observação de Posto de Trabalho",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
  },
  {
    number: 2,
    code: "02",
    title: "Módulo 2 — Entender processos",
    objective: "Ver o todo, mapear etapas e identificar gargalos.",
    description: "Nenhuma tarefa vive isolada. Você aprenderá a rastrear uma atividade do início ao fim, enxergando como atrasos na recepção de mercadorias impactam o cliente final na mesa duas horas depois.",
    topics: [
      "Começo, meio e fim: a cadeia de valor da cozinha",
      "O conceito de 'cliente interno' entre praças",
      "Identificação de gargalos físicos e informacionais",
      "Construção de SOPs (Procedimentos Padrão) que as pessoas realmente usam"
    ],
    situationExample: "Buffet esvaziando rapidamente no pico do almoço sem que a produção de trás saiba o que preparar primeiro.",
    deliverable: "Mapa de Fluxo da Praça com Pontos Críticos",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80"
  },
  {
    number: 3,
    code: "03",
    title: "Módulo 3 — Decidir melhor",
    objective: "Usar informações para tomar decisões mais seguras.",
    description: "Em momentos de pressão, a maioria das decisões é tomada por impulso ou medo. Aqui você aprende a ler indicadores simples (CMV, perdas, tempo de ciclo) para tomar decisões rápidas e embasadas.",
    topics: [
      "Dados simples que qualquer um pode coletar e ler",
      "Decisões sob pressão: como evitar o improviso crônico",
      "O custo invisível da reposição excessiva",
      "O papel da Inteligência Artificial como assistente de análise"
    ],
    situationExample: "Dúvida entre repor mais 5kg de carne faltando 20 minutos para encerrar o serviço ou adaptar a oferta.",
    deliverable: "Matriz de Decisão Operacional em 3 Perguntas",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
  },
  {
    number: 4,
    code: "04",
    title: "Módulo 4 — Melhorar",
    objective: "Propor soluções, reduzir desperdícios e criar uma cultura de evolução.",
    description: "Melhoria contínua não é um evento anual, é um hábito diário. Você desenvolverá a habilidade de dialogar com a liderança e com os colegas para implementar melhorias sem gerar resistência ou burocracia desnecessária.",
    topics: [
      "Como apresentar uma melhoria para a liderança sem parecer crítica vazia",
      "Pequenos testes rápidos: o ciclo Kaizen na bancada",
      "Eliminação sustentável de desperdício (alimento, tempo e esforço físico)",
      "Plano individual de evolução e certificação prática"
    ],
    situationExample: "Equipe resistente a uma nova ficha técnica ou padrão de corte que melhora o aproveitamento em 18%.",
    deliverable: "Projeto Piloto de Melhoria Contínua Aplicada",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "artigo-1",
    slug: "o-problema-nao-e-falta-de-gente-e-falta-de-processo",
    title: "O problema não é a falta de gente. É a falta de processo.",
    subtitle: "Sem processo, mais gente só aumenta o caos.",
    category: "Processos",
    summary: "Na maioria das vezes, o que falta não é gente, mas sim um processo claro, bem definido e seguido por todos. Sem processo, cada um faz de um jeito, a comunicação falha e o resultado é desperdício e estresse.",
    date: "12 de setembro de 2024",
    readTime: "6 min de leitura",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80",
    imageCaption: "A rotina frenética sem definição de papéis e fluxos multiplica o atrito.",
    author: {
      name: "Carlos Christakis",
      role: "Criador do projeto Código da Cozinha Pensante",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    relatedSlugs: [
      "quando-a-reposicao-do-buffet-vira-desperdicio",
      "tarefa-nao-e-processo",
      "o-gerente-que-resolve-tudo-sozinho"
    ],
    content: [
      {
        paragraphs: [
          "É comum ouvir nas cozinhas a mesma frase: 'Precisamos de mais gente'. Mas será que o problema é realmente a falta de pessoas?",
          "Na maioria das vezes, o que falta não é gente, mas sim um processo claro, bem definido e seguido por todos. Sem processo, cada um faz de um jeito, a comunicação falha, as tarefas se sobrepõem e o resultado é desperdício, retrabalho e estresse crônico."
        ]
      },
      {
        subtitle: "Quando o processo não existe",
        paragraphs: [
          "Imagine uma cozinha em horário de pico, sem rotina definida de produção, sem padrão de porcionamento e sem critérios claros de reposição. O resultado é previsível: alguns itens acabam, outros são produzidos em excesso, a equipe se desorganiza e o cliente percebe.",
          "Colocar mais duas pessoas nessa mesma cozinha não resolve. Pelo contrário: agora são mais duas pessoas se trombando no corredor, perguntando o que fazer e aguardando ordens de quem já está sobrecarregado."
        ],
        quote: "O processo não é burocracia. Ele é o que permite que a operação funcione com mais clareza, eficiência e segurança."
      },
      {
        subtitle: "A ilusão do 'braço a mais'",
        paragraphs: [
          "Contratar mais pessoas antes de organizar o fluxo é tentar encher um balde furado aumentando a vazão da torneira. O custo de folha de pagamento dispara, o ambiente de trabalho fica mais tenso e os clientes continuam reclamando de demora.",
          "Quando desenhamos um processo claro, três transformações imediatas acontecem:",
          "1. Cada pessoa sabe exatamente o que fazer antes de ser solicitada.",
          "2. As transições entre turnos e praças tornam-se suaves e sem atrito.",
          "3. O desperdício de tempo e de matéria-prima despenca sem exigir esforço sobre-humano."
        ]
      },
      {
        subtitle: "Comece pelo básico",
        paragraphs: [
          "Antes de publicar uma vaga de contratação, passe um turno observando: onde as pessoas esperam? Onde as pessoas se perguntam 'onde está tal ingrediente'? Quantos passos desnecessários são dados por falta de um pré-preparo organizado?",
          "Organizar o processo liberta as pessoas para executarem seu melhor trabalho."
        ]
      }
    ]
  },
  {
    id: "artigo-2",
    slug: "quando-a-reposicao-do-buffet-vira-desperdicio",
    title: "Quando a reposição do buffet vira desperdício.",
    subtitle: "O medo da cuba vazia custa milhares de reais todos os meses.",
    category: "Desperdício",
    summary: "O medo de deixar a cuba vazia faz a cozinha produzir 5 kg de comida nos últimos vinte minutos de serviço. Entenda como decisões tomadas por impulso no final do turno destroem a margem do restaurante.",
    date: "10 de setembro de 2024",
    readTime: "5 min de leitura",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    imageCaption: "Decisões no final do turno costumam ser as mais caras do dia.",
    author: {
      name: "Carlos Christakis",
      role: "Criador do projeto Código da Cozinha Pensante"
    },
    relatedSlugs: [
      "o-problema-nao-e-falta-de-gente-e-falta-de-processo",
      "tarefa-nao-e-processo",
      "inteligencia-artificial-nao-conserta-processo-ruim"
    ],
    content: [
      {
        paragraphs: [
          "Faltam vinte minutos para encerrar o almoço. A cuba de filé mignon com molho madeira está com apenas duas porções restantes no fundo. O gerente passa apressado, olha com desespero e grita para a cozinha: 'Manda mais carne urgente!'.",
          "O cozinheiro para o que está fazendo, corre para a grelha, prepara mais 4 quilos de carne fresca. Dez minutos depois, a cuba está cheia e reluzente. Quinze minutos depois, o salão esvazia. Três quilos e meio voltam para a área de lavagem."
        ]
      },
      {
        subtitle: "A psicologia do desperdício no salão",
        paragraphs: [
          "Por trás desse comportamento existe uma armadilha psicológica comum: o pavor do julgamento do cliente que chega no final. Ninguém quer ouvir: 'Não tem mais carne?'.",
          "Porém, responder a esse medo com excesso de produção é a receita mais rápida para drenar a rentabilidade do negócio. Se aquela sobra não puder ser reaproveitada com segurança e rigor sanitário, ela foi direto para o lixo junto com o lucro do dia."
        ],
        quote: "O cliente do final do serviço não quer ver desperdício; ele quer ser atendido com consideração e alternativas inteligentes."
      },
      {
        subtitle: "A solução está no processo, não no improviso",
        paragraphs: [
          "Operações inteligentes não dependem do 'olhômetro' do gerente no final do turno. Elas estabelecem regras claras:",
          "1. Cubas menores a partir das 14h: uma travessa pequena cheia parece abundante e custa uma fração do valor.",
          "2. Preparo sob demanda no salão: 'Sr. Cliente, estamos grelhando um filé fresquinho para o senhor agora mesmo'. O cliente se sente especial e você economiza 3 quilos de proteína.",
          "3. Registro diário de sobras: quando a equipe enxerga o peso do que volta, ela passa a cuidar da quantidade com mais carinho."
        ]
      }
    ]
  },
  {
    id: "artigo-3",
    slug: "tarefa-nao-e-processo",
    title: "Tarefa não é processo.",
    subtitle: "É só o começo.",
    category: "Gestão",
    summary: "Cortar uma batata é uma tarefa. Entender onde ela foi guardada, o rendimento, o custo e o impacto na produção é um processo. Descubra por que quem pensa em tarefas é substituível, mas quem pensa em processos é indispensável.",
    date: "05 de setembro de 2024",
    readTime: "4 min de leitura",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80",
    imageCaption: "A tarefa é apenas uma fração visível de uma longa esteira de valor.",
    author: {
      name: "Carlos Christakis",
      role: "Criador do projeto Código da Cozinha Pensante"
    },
    relatedSlugs: [
      "o-problema-nao-e-falta-de-gente-e-falta-de-processo",
      "o-que-uma-cozinha-pode-ensinar-sobre-gestao",
      "o-gerente-que-resolve-tudo-sozinho"
    ],
    content: [
      {
        paragraphs: [
          "Se você pedir para dez pessoas cortarem uma batata em cubos, todas saberão fazer. Algumas cortarão mais rápido, outras mais devagar. Mas todas terminarão com batatas picadas.",
          "Agora, pergunte para essas mesmas dez pessoas: Quanto da batata foi perdido na casca? Essa perda está dentro da meta do restaurante? Onde a batata fatiada deve esperar para não oxidar? Quanto tempo ela dura nessa condição? Como o tamanho do corte afeta o tempo de cocção no forno?",
          "Provavelmente nove ficarão em silêncio. Porque aprenderam a executar tarefas, mas nunca foram ensinadas a enxergar processos."
        ]
      },
      {
        subtitle: "O executor vs. o profissional que pensa",
        paragraphs: [
          "O executor faz apenas o que mandaram fazer, do jeito que viu alguém fazendo, sem questionar o porquê. Se faltar a faca habitual, ele para. Se o pedido mudar, ele se desespera.",
          "Já quem compreende o processo enxerga a esteira inteira:",
          "- Sabe que 200 gramas de perda a mais por saco de 50 kg viram R$ 1.500 no final do mês.",
          "- Sabe que uma batata cortada fora do padrão queima por fora e fica crua por dentro, gerando devolução de prato.",
          "- Sabe que avisar o cozinheiro da praça quente quando as batatas estão no pré-preparo evita 15 minutos de atraso no serviço."
        ],
        quote: "Não queremos apenas formar executores de tarefas. Queremos desenvolver pessoas que pensem sobre aquilo que fazem."
      },
      {
        subtitle: "Como desenvolver essa visão na sua equipe",
        paragraphs: [
          "Não basta entregar uma folha com procedimentos. É preciso sentar com a equipe e explicar o 'porquê'. Mostre a conta de compras. Mostre o feedback do cliente. Mostre o tempo economizado quando todo mundo faz a mesma etapa da mesma forma.",
          "Quando as pessoas entendem o significado do que fazem, elas se tornam guardiãs da qualidade."
        ]
      }
    ]
  },
  {
    id: "artigo-4",
    slug: "o-gerente-que-resolve-tudo-sozinho",
    title: "O gerente que resolve tudo sozinho.",
    subtitle: "O herói da operação que impede a equipe de crescer.",
    category: "Pessoas",
    summary: "Ele chega primeiro, sai por último e apaga todos os incêndios. Mas enquanto ele for o único capaz de tomar decisões, a operação continuará frágil, dependente e incapaz de crescer.",
    date: "01 de setembro de 2024",
    readTime: "5 min de leitura",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=900&q=80",
    imageCaption: "O líder centralizador é o maior gargalo invisível de uma empresa.",
    author: {
      name: "Carlos Christakis",
      role: "Criador do projeto Código da Cozinha Pensante"
    },
    relatedSlugs: [
      "o-problema-nao-e-falta-de-gente-e-falta-de-processo",
      "tarefa-nao-e-processo",
      "o-que-uma-cozinha-pode-ensinar-sobre-gestao"
    ],
    content: [
      {
        paragraphs: [
          "Toda operação tem o seu 'herói'. É aquele gerente, chefe de cozinha ou encarregado que sabe de tudo. Ele sabe onde guardaram o tempero especial, sabe consertar o forno quando a chama falha e sabe exatamente qual garçom deve atender qual mesa.",
          "À primeira vista, ele parece uma bênção. A diretoria o elogia, a equipe o admira. Mas olhe de perto quando esse profissional tira três dias de folga: o restaurante desaba."
        ]
      },
      {
        subtitle: "O custo oculto do líder indispensável",
        paragraphs: [
          "Quando uma única pessoa concentra todas as respostas, ela inconscientemente cria um exército de executores dependentes. Ninguém toma iniciativa porque sabe que o gerente vai refazer ou criticar.",
          "Essa dinâmica gera dois problemas fatais:",
          "1. O gerente vive esgotado, beirando o burnout, sentindo que 'se eu não fizer, ninguém faz'.",
          "2. A equipe não se desenvolve, perde a motivação e se acostuma a ser tutelada para qualquer decisão mínima."
        ],
        quote: "O trabalho do líder não é resolver os problemas pela equipe, mas ensinar a equipe a resolver os problemas através de processos claros."
      },
      {
        subtitle: "Da dependência à autonomia",
        paragraphs: [
          "A transição exige desapego. Em vez de responder de imediato 'faça assim', o líder precisa começar a perguntar: 'Qual é o nosso padrão para essa situação? O que você acha que devemos fazer?'.",
          "Crie regras visíveis, treine os líderes de praça e celebre quando alguém resolver um atrito sem precisar te chamar. Esse é o verdadeiro sinal de sucesso na gestão."
        ]
      }
    ]
  },
  {
    id: "artigo-5",
    slug: "o-que-uma-cozinha-pode-ensinar-sobre-gestao",
    title: "O que uma cozinha pode ensinar sobre gestão.",
    subtitle: "Mise en place, timing, fluxo e feedback imediato para qualquer negócio.",
    category: "Cozinha",
    summary: "Poucos ambientes no mundo lidam com tanta pressão, matéria-prima perecível, prazos curtos e clientes exigentes ao mesmo tempo quanto uma cozinha profissional. Veja as lições universais desse laboratório humano.",
    date: "28 de agosto de 2024",
    readTime: "4 min de leitura",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=80",
    imageCaption: "Mise en place: organização prévia que garante precisão na hora do calor.",
    author: {
      name: "Carlos Christakis",
      role: "Criador do projeto Código da Cozinha Pensante"
    },
    relatedSlugs: [
      "tarefa-nao-e-processo",
      "o-problema-nao-e-falta-de-gente-e-falta-de-processo",
      "inteligencia-artificial-nao-conserta-processo-ruim"
    ],
    content: [
      {
        paragraphs: [
          "Uma cozinha profissional em horário de almoço é um dos ambientes operacionais mais intensos que a humanidade já concebeu. Centenas de pratos precisam ser executados com precisão cirúrgica em janelas de 12 a 15 minutos, utilizando ingredientes perecíveis que estragam se ficarem na temperatura errada.",
          "Qualquer empresa — seja uma fábrica de software, um escritório de advocacia ou uma clínica médica — tem muito a aprender com as regras que mantêm uma cozinha em pé."
        ]
      },
      {
        subtitle: "1. O sagrado Mise en Place",
        paragraphs: [
          "Em francês, 'mise en place' significa colocar no lugar. Antes de acender o fogo, tudo está picado, medido, etiquetado e ao alcance da mão. Na cozinha, ninguém sai correndo para descascar alho enquanto a frigideira já está fumegando.",
          "Nos escritórios, porém, as pessoas começam reuniões sem pauta, iniciam projetos sem requisitos e tentam criar no meio do incêndio. Sem preparação, a execução é caos."
        ]
      },
      {
        subtitle: "2. O feedback imediato e transparente",
        paragraphs: [
          "Se um prato sai salgado ou com ponto errado, o feedback é imediato: ele volta na hora. Não se espera uma avaliação de desempenho trimestral para dizer ao cozinheiro que a carne queimou.",
          "A correção rápida e sem melodrama permite que o erro seja ajustado no prato seguinte, protegendo o cliente e acelerando o aprendizado da equipe."
        ],
        quote: "A clareza dos papéis e a velocidade do feedback são os maiores segredos de uma cozinha de alta performance."
      }
    ]
  },
  {
    id: "artigo-6",
    slug: "inteligencia-artificial-nao-conserta-processo-ruim",
    title: "Inteligência artificial não conserta processo ruim.",
    subtitle: "Automatizar a confusão só produz erro mais rápido.",
    category: "Inteligência Artificial",
    summary: "A IA pode ajudar a analisar dados, prever compras e apoiar decisões. Mas se o seu processo de base estiver quebrado, a tecnologia só vai acelerar o desperdício. Entenda o papel real da IA nos negócios.",
    date: "20 de agosto de 2024",
    readTime: "6 min de leitura",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80",
    imageCaption: "Tecnologia é multiplicadora: multiplica a ordem ou multiplica a bagunça.",
    author: {
      name: "Carlos Christakis",
      role: "Criador do projeto Código da Cozinha Pensante"
    },
    relatedSlugs: [
      "o-problema-nao-e-falta-de-gente-e-falta-de-processo",
      "quando-a-reposicao-do-buffet-vira-desperdicio",
      "tarefa-nao-e-processo"
    ],
    content: [
      {
        paragraphs: [
          "Hoje todo mundo fala de inteligência artificial. Fala-se em IA para prever a demanda do buffet, IA para calcular cardápio, IA para controlar estoque e automatizar pedidos de compras.",
          "Essas ferramentas são extraordinárias. Mas existe uma regra fundamental em gestão de tecnologia que nunca perde a validade: se você automatizar um processo bagunçado, o que você ganha é uma bagunça automatizada em altíssima velocidade."
        ]
      },
      {
        subtitle: "Onde a IA realmente brilha na operação",
        paragraphs: [
          "A inteligência artificial funciona como uma lente de aumento. Ela precisa de dados limpos, consistentes e de rotinas estáveis para gerar valor real.",
          "Se a sua equipe não registra as perdas na balança, a IA não tem como adivinhar quanto foi jogado fora. Se a ficha técnica não é respeitada na bancada, o cálculo de custo sugerido pelo algoritmo será ficção científica."
        ],
        quote: "A inteligência artificial apoia o pensamento, mas nunca substitui a disciplina e a observação de quem está no chão da operação."
      },
      {
        subtitle: "Primeiro o processo, depois a tecnologia",
        paragraphs: [
          "No Código da Cozinha Pensante, nós ensinamos primeiro a observar, organizar e medir com papel e caneta. Quando a equipe aprende a pensar em processos, qualquer ferramenta tecnológica — seja uma planilha simples ou o mais avançado modelo de IA — se torna uma alavanca poderosa de eficiência e tranquilidade."
        ]
      }
    ]
  }
];

export const CARLOS_INFO = {
  name: "Carlos Christakis",
  role: "Criador do projeto Código da Cozinha Pensante",
  bio: "Profissional com experiência em gastronomia, gestão de processos, tecnologia e melhoria contínua. O projeto nasce da integração entre experiência prática de operação, análise de processos e novas tecnologias.",
  manifesto: "Na rotina de uma cozinha, pequenos problemas se repetem diariamente: produção excessiva, desperdícios, falhas de comunicação, falta de padrão e decisões tomadas sem informação. Ao observar essas situações, surgiu uma pergunta: Por que ensinamos tantas pessoas a executar tarefas, mas poucas a compreender processos? A partir dessa pergunta nasceu o Código da Cozinha Pensante.",
  praxisRole: "A Codekis Lab é o ecossistema e O Código é a fundação da casa. O Código da Cozinha Pensante é o primeiro cômodo edificado sobre esse alicerce: a aplicação prática do método no ambiente mais desafiador, implacável e transformador da operação real.",
  photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
};
