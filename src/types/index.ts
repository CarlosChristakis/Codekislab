export type PageKey =
  | 'home'
  | 'codigo'
  | 'projetos'
  | 'projeto-cozinha'
  | 'cursos'
  | 'artigos'
  | 'artigo-detalhe'
  | 'sobre'
  | 'contato';

export type ArticleCategory =
  | 'Todos'
  | 'Processos'
  | 'Gestão'
  | 'Pessoas'
  | 'IA'
  | 'Gastronomia'
  | 'Decisão'
  | 'Desperdício'
  | 'Cozinha'
  | 'Inteligência Artificial'
  | 'Melhoria contínua';

export interface ArticleContentSection {
  id?: string;
  subtitle?: string;
  paragraphs: string[];
  quote?: string;
  list?: string[];
  callout?: {
    title: string;
    text: string;
    type?: 'info' | 'tip' | 'warning';
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface ArticleFaqItem {
  question: string;
  answer: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: ArticleCategory;
  summary?: string;
  metaDescription?: string;
  keywords?: string[];
  readingTimeMinutes?: number;
  keyTakeaways?: string[];
  tableOfContents?: { id: string; title: string }[];
  date: string;
  readTime: string;
  image: string;
  imageCaption?: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  content: ArticleContentSection[];
  faq?: ArticleFaqItem[];
  relatedSlugs: string[];
}

export interface CourseModule {
  number: number;
  code: string;
  title: string;
  objective: string;
  description: string;
  topics: string[];
  situationExample: string;
  deliverable: string;
  image: string;
}

export interface LeadCaptureData {
  name: string;
  email: string;
  role?: string;
  source: string;
  createdAt: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  status: 'Em desenvolvimento' | 'Em estudo' | 'Em breve';
  category: string;
  image: string;
  slug?: string;
  linkText: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  theme?: string;
  createdAt: string;
}
