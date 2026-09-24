import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Linkedin, Instagram, Youtube, Mail, MapPin } from 'lucide-react';
import { PageKey, LeadCaptureData } from '../types';
import { CodekisLogo } from './CodekisLogo';
import { ButtonPrimary } from './Buttons';

interface FooterProps {
  onNavigate: (page: PageKey) => void;
  onOpenCapture: (source?: string) => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenCapture,
  onOpenPrivacy
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    const newLead: LeadCaptureData = {
      name: 'Assinante Rodapé',
      email: email.trim(),
      source: 'footer_newsletter',
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

    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  return (
    <footer className="bg-[#04162B] text-slate-300 border-t border-[#072F54] pt-16 pb-12 font-sans relative overflow-hidden">
      
      {/* Subtle background ambient graphic */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#072F54]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C38735]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter & Manifesto Banner */}
        <div className="rounded-3xl bg-[#072F54]/60 border border-[#072F54] p-8 sm:p-10 mb-16 shadow-lg backdrop-blur-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Brand Statement */}
            <div className="lg:col-span-7 space-y-3">
              <span className="inline-block px-3 py-1 rounded-md bg-[#C38735]/20 text-[#C38735] text-xs font-heading font-bold uppercase tracking-wider">
                Startup Codekis Lab
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                Receba estudos, métodos e análises operacionais.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Conteúdos diretos ao ponto sobre processos, liderança operacional, inteligência artificial aplicada e tomada de decisão fundamentada.
              </p>
            </div>

            {/* Subscription Form */}
            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#C38735]/20 border border-[#C38735]/40 text-white animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 text-[#C38735] shrink-0" />
                  <span className="text-sm font-medium">Inscrição confirmada. Bem-vindo à Codekis Lab!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Seu melhor e-mail profissional"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-xl bg-[#04162B] border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-[#C38735] text-sm"
                    />
                    <ButtonPrimary
                      type="submit"
                      size="md"
                      className="shrink-0"
                    >
                      <span>Assinar</span>
                      <ArrowRight className="w-4 h-4" />
                    </ButtonPrimary>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Sem spam. Respeitamos sua privacidade e enviamos apenas valor real.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Main Footer Directory Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#072F54]">
          
          {/* Col 1 & 2: Brand and Mission */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left cursor-pointer focus:outline-none"
              aria-label="Voltar ao início"
            >
              <CodekisLogo variant="horizontal" theme="light" size="md" />
            </button>

            <p className="text-sm text-slate-300 leading-relaxed font-sans max-w-sm">
              <span className="text-white font-medium">Startup de desenvolvimento profissional e inteligência operacional.</span> Desenvolvendo pessoas que compreendem, decidem e melhoram processos.
            </p>

            <div className="pt-2 text-xs text-slate-400 font-heading tracking-wide space-y-1">
              <p className="text-[#C38735] font-semibold">
                Mais que execução. Mais pensamento. Mais resultado.
              </p>
              <p>
                Processos • Pessoas • Inteligência • IA • Evolução
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#072F54] hover:bg-[#C38735] hover:text-[#04162B] text-slate-300 flex items-center justify-center transition-colors"
                aria-label="LinkedIn da Codekis Lab"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#072F54] hover:bg-[#C38735] hover:text-[#04162B] text-slate-300 flex items-center justify-center transition-colors"
                aria-label="Instagram da Codekis Lab"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#072F54] hover:bg-[#C38735] hover:text-[#04162B] text-slate-300 flex items-center justify-center transition-colors"
                aria-label="YouTube da Codekis Lab"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Metodologia e Verticais */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-[#C38735] mb-4">
              Metodologia & Verticais
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('codigo')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  O Código (6 Estágios)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projeto-cozinha')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>Cozinha Pensante</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#C38735]/30 text-[#F5C06A] font-bold">1ª Vertical</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projetos')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Soluções & Diagnósticos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cursos')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Trilhas de Aprendizagem
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Conteúdos & Artigos */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-[#C38735] mb-4">
              Conhecimento & Artigos
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('artigos')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Todos os Artigos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('artigos')}
                  className="hover:text-white transition-colors cursor-pointer text-left text-slate-400 hover:text-white"
                >
                  Processos & Decisão
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('artigos')}
                  className="hover:text-white transition-colors cursor-pointer text-left text-slate-400 hover:text-white"
                >
                  Gastronomia & CMV
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('artigos')}
                  className="hover:text-white transition-colors cursor-pointer text-left text-slate-400 hover:text-white"
                >
                  Inteligência Artificial na Prática
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Institucional & Contato */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-[#C38735] mb-4">
              Institucional
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('sobre')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sobre a Codekis Lab
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contato')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Fale Conosco
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenCapture('footer_consultoria')}
                  className="hover:text-white transition-colors cursor-pointer text-left text-[#C38735] font-semibold"
                >
                  Solicitar Diagnóstico
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors cursor-pointer text-left text-slate-400"
                >
                  Privacidade & Dados
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} <span className="text-white font-semibold">Codekis Lab</span>. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="italic text-slate-400">
              “Não basta executar. É preciso compreender o processo.”
            </span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-200 transition-colors underline cursor-pointer"
            >
              Termos de Uso
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
