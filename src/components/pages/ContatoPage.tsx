import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  Mail,
  Phone,
  Building,
  MessageSquare,
  ArrowRight,
  Linkedin,
  Instagram,
  Youtube,
  Sparkles,
  MapPin
} from 'lucide-react';
import { PageKey, ContactMessage } from '../../types';
import { ButtonPrimary, ButtonSecondary } from '../Buttons';

interface ContatoPageProps {
  onNavigate: (page: PageKey) => void;
}

export const ContatoPage: React.FC<ContatoPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [interest, setInterest] = useState('Quero aplicar o Código na minha empresa');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const interestOptions = [
    'Quero aplicar o Código na minha empresa',
    'Quero conhecer a Cozinha Pensante',
    'Treinamento / Palestra',
    'Parceria / Outros'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const newMsg: ContactMessage & { phone?: string; company?: string } = {
      name: name.trim(),
      email: email.trim(),
      subject: interest,
      message: message.trim(),
      phone: phone.trim(),
      company: company.trim(),
      createdAt: new Date().toISOString()
    };

    try {
      const stored = localStorage.getItem('codekis_contact_messages');
      const list = stored ? JSON.parse(stored) : [];
      list.push(newMsg);
      localStorage.setItem('codekis_contact_messages', JSON.stringify(list));
    } catch {
      // LocalStorage safe
    }

    setSubmitted(true);
  };

  return (
    <div className="bg-[#F5F3EE] py-16 sm:py-24 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#04162B] bg-[#04162B]/5 border border-[#04162B]/10 px-3.5 py-1.5 rounded-full inline-block">
            Canal Institucional
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#04162B] tracking-tight">
            Fale com a Codekis Labs
          </h1>
          <p className="text-[#475569] text-base sm:text-lg">
            Estamos prontos para entender seus desafios de processos, pessoas e inteligência operacional.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E5E7EB] p-8 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-[#04162B] text-[#C38735] flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#04162B]">
                  Mensagem recebida com sucesso!
                </h3>
                <p className="text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                  Obrigado pelo contato. Nossa equipe analisará sua solicitação e retornará em até 1 dia útil.
                </p>
                <div className="pt-4">
                  <ButtonSecondary
                    size="md"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setCompany('');
                      setMessage('');
                    }}
                  >
                    Enviar outra mensagem
                  </ButtonSecondary>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Nome Completo */}
                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#04162B] mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F5F3EE]/50 focus:bg-white focus:outline-hidden focus:border-[#04162B] text-sm text-[#04162B] transition-all"
                  />
                </div>

                {/* Email & Telefone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#04162B] mb-2">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F5F3EE]/50 focus:bg-white focus:outline-hidden focus:border-[#04162B] text-sm text-[#04162B] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#04162B] mb-2">
                      WhatsApp / Telefone
                    </label>
                    <input
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F5F3EE]/50 focus:bg-white focus:outline-hidden focus:border-[#04162B] text-sm text-[#04162B] transition-all"
                    />
                  </div>
                </div>

                {/* Empresa / Segmento */}
                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#04162B] mb-2">
                    Empresa / Segmento
                  </label>
                  <input
                    type="text"
                    placeholder="Nome da organização e ramo de atuação"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F5F3EE]/50 focus:bg-white focus:outline-hidden focus:border-[#04162B] text-sm text-[#04162B] transition-all"
                  />
                </div>

                {/* Opções de Interesse */}
                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#04162B] mb-2">
                    Objetivo Principal / Área de Interesse
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {interestOptions.map((opt) => {
                      const isSelected = interest === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setInterest(opt)}
                          className={`p-3 rounded-xl text-xs font-heading font-semibold text-left transition-all border cursor-pointer ${
                            isSelected
                              ? 'bg-[#04162B] text-white border-[#04162B]'
                              : 'bg-[#F5F3EE] text-[#475569] border-[#E5E7EB] hover:border-[#C38735]'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#04162B] mb-2">
                    Como podemos ajudar? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Conte brevemente sobre o contexto da sua operação ou o desafio da sua equipe..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F5F3EE]/50 focus:bg-white focus:outline-hidden focus:border-[#04162B] text-sm text-[#04162B] transition-all resize-none"
                  />
                </div>

                <ButtonPrimary
                  size="lg"
                  fullWidth
                  type="submit"
                >
                  <span>Enviar solicitação de contato</span>
                  <Send className="w-4 h-4" />
                </ButtonPrimary>

              </form>
            )}
          </div>

          {/* Right: Institutional Details & Social */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-[#04162B] text-white border border-[#072F54] space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C38735]">
                Atendimento Direto
              </span>

              <h3 className="text-2xl font-heading font-bold text-white">
                Vamos desenhar uma solução para a sua operação
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#C38735] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-heading font-bold text-white">E-mail Institucional</p>
                    <p className="text-xs text-slate-400">contato@codekislabs.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-[#C38735] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-heading font-bold text-white">Atendimento</p>
                    <p className="text-xs text-slate-400">Projetos presenciais e consultorias em todo o Brasil</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C38735] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-heading font-bold text-white">Base Operacional</p>
                    <p className="text-xs text-slate-400">São Paulo, SP • Brasil</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800">
                <p className="text-xs font-heading font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Acompanhe a Codekis Labs
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#C38735] text-white hover:text-[#04162B] flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#C38735] text-white hover:text-[#04162B] flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#C38735] text-white hover:text-[#04162B] flex items-center justify-center transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Micro Quote box */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E7EB] space-y-2">
              <p className="text-xs font-heading font-bold uppercase tracking-wider text-[#C38735]">
                O Compromisso Codekis
              </p>
              <p className="text-xs text-[#475569] leading-relaxed">
                “Não vendemos manuais que acumulam poeira. Construímos autonomia prática para quem executa na ponta.”
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
