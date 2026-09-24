import React, { useState } from 'react';
import { X, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { LeadCaptureData } from '../types';
import { ButtonPrimary, ButtonSecondary } from './Buttons';

interface CaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
  defaultTitle?: string;
}

export const CaptureModal: React.FC<CaptureModalProps> = ({
  isOpen,
  onClose,
  source = 'geral',
  defaultTitle = 'Acompanhe a Codekis Labs'
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [area, setArea] = useState('Gastronomia & Operação');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const newLead: LeadCaptureData = {
      name: name.trim(),
      email: email.trim(),
      role: area,
      source,
      createdAt: new Date().toISOString()
    };

    try {
      const stored = localStorage.getItem('codekis_subscribers');
      const list: LeadCaptureData[] = stored ? JSON.parse(stored) : [];
      list.push(newLead);
      localStorage.setItem('codekis_subscribers', JSON.stringify(list));
    } catch {
      // LocalStorage fallback safe
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#04162B]/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-[#E5E7EB]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-[#04162B] hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#04162B]/5 text-[#04162B] text-xs font-heading font-bold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C38735]" />
              <span>Codekis Labs &bull; Ecossistema</span>
            </div>

            <h3 className="text-2xl font-heading font-extrabold text-[#04162B] tracking-tight mb-2">
              {defaultTitle}
            </h3>

            <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-6">
              Cadastre-se para acompanhar a evolução da <strong>Codekis Labs</strong>, o desenvolvimento d'<strong>O Código</strong> e o lançamento das próximas verticais e soluções.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#04162B] mb-1.5">
                  Seu Nome
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Eduardo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-[#F5F3EE]/50 border border-[#E5E7EB] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#04162B]/20 focus:border-[#04162B] text-[#04162B] placeholder-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#04162B] mb-1.5">
                  E-mail Profissional
                </label>
                <input
                  type="email"
                  required
                  placeholder="seu.email@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-[#F5F3EE]/50 border border-[#E5E7EB] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#04162B]/20 focus:border-[#04162B] text-[#04162B] placeholder-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#04162B] mb-1.5">
                  Área de Atuação
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-[#F5F3EE]/50 border border-[#E5E7EB] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#04162B]/20 focus:border-[#04162B] text-[#04162B]"
                >
                  <option value="Gastronomia & Alimentação">Gastronomia & Alimentação</option>
                  <option value="Operações & Processos">Operações & Processos</option>
                  <option value="Gestão de Pessoas & RH">Gestão de Pessoas & RH</option>
                  <option value="Serviços & Atendimento">Serviços & Atendimento</option>
                  <option value="Tecnologia & IA">Tecnologia & IA</option>
                  <option value="Consultoria & Treinamento">Consultoria & Treinamento</option>
                  <option value="Outro">Outro segmento</option>
                </select>
              </div>

              <div className="pt-2">
                <ButtonPrimary
                  size="md"
                  fullWidth
                  type="submit"
                >
                  <span>Receber Novidades do Ecossistema</span>
                  <Send className="w-4 h-4" />
                </ButtonPrimary>
              </div>

              <p className="text-[11px] text-slate-400 text-center">
                Sem spam. Conteúdo técnico e prático sobre processos e inteligência.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-[#04162B] text-[#C38735] flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-heading font-bold text-[#04162B]">
              Inscrição confirmada!
            </h3>

            <p className="text-sm text-[#475569] max-w-sm mx-auto leading-relaxed">
              Obrigado pelo interesse na <strong>Codekis Labs</strong>. Você receberá nossas análises de processos e novidades em primeira mão.
            </p>

            <div className="pt-4">
              <ButtonSecondary
                size="md"
                onClick={handleReset}
              >
                Fechar janela
              </ButtonSecondary>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
