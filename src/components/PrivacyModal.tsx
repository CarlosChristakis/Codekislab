import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#04162B]/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-[#E5E7EB] max-h-[85vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-[#04162B] hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4 text-[#04162B]">
          <ShieldCheck className="w-5 h-5 text-[#C38735]" />
          <span className="text-xs font-heading font-bold uppercase tracking-wider">
            Compromisso com a Privacidade
          </span>
        </div>

        <h3 className="text-2xl font-heading font-extrabold text-[#04162B] mb-3">
          Política de Privacidade (LGPD)
        </h3>

        <div className="space-y-3 text-xs sm:text-sm text-[#475569] leading-relaxed">
          <p>
            A <strong>Codekis Lab</strong> e suas verticais (incluindo o <strong>Código da Cozinha Pensante</strong>) respeitam integralmente a sua privacidade e a legislação brasileira de proteção de dados (Lei nº 13.709/2018 - LGPD).
          </p>

          <h4 className="font-heading font-bold text-[#04162B] pt-2">1. Coleta de Informações</h4>
          <p>
            Coletamos apenas as informações que você nos fornece voluntariamente em nossos formulários de contato e inscrição: seu nome, endereço de e-mail corporativo, telefone e perfil de atuação profissional.
          </p>

          <h4 className="font-heading font-bold text-[#04162B] pt-2">2. Finalidade dos Dados</h4>
          <p>
            Os dados coletados são utilizados exclusivamente para:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Responder a solicitações de contato institucional e diagnósticos operacionais;</li>
            <li>Divulgar novos artigos, pesquisas e materiais educativos sobre processos;</li>
            <li>Informar sobre novas turmas de capacitação e lançamentos de verticais do ecossistema.</li>
          </ul>

          <h4 className="font-heading font-bold text-[#04162B] pt-2">3. Não Compartilhamento</h4>
          <p>
            Nenhum dado pessoal é vendido, alugado ou compartilhado com terceiros para fins comerciais. Os registros são guardados em ambiente seguro e criptografado.
          </p>

          <h4 className="font-heading font-bold text-[#04162B] pt-2">4. Cancelamento e Remoção</h4>
          <p>
            Você pode solicitar a remoção imediata dos seus dados a qualquer momento enviando uma mensagem para <strong className="text-[#04162B]">contato@codekislab.com.br</strong>.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-[#E5E7EB] text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#04162B] text-white text-xs font-heading font-bold hover:bg-[#072F54] transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};
