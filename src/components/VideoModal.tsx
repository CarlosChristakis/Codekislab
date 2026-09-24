import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCapture: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  onOpenCapture
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      time: '0:00 - 0:15',
      title: 'A cozinha revela um livro que ninguém vê',
      text: 'Muitas pessoas sabem executar tarefas: cortar, lavar, picar, grelhar. Mas poucas foram ensinadas a enxergar a esteira completa que dá sentido ao trabalho.',
      quote: 'Cortar uma batata é uma tarefa. Entender a perda, o estoque e a produção é um processo.',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80'
    },
    {
      time: '0:15 - 0:30',
      title: 'O problema não é saber fazer. É fazer sem entender.',
      text: 'Quando repetimos sem pensar, geramos desperdício, retrabalho e cansaço físico. O profissional que compreende o processo se antecipa aos problemas.',
      quote: 'Não queremos apenas formar executores. Queremos pessoas que pensem sobre o que fazem.',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80'
    },
    {
      time: '0:30 - 0:45',
      title: 'Decisões reais sob pressão',
      text: 'No Código da Cozinha Pensante, você aprende através de cenários reais: buffet vazio, cozinha atrasada, controle de custos e organização de turnos.',
      quote: 'Informações simples geram decisões muito mais seguras no calor da operação.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
    },
    {
      time: '0:45 - 1:00',
      title: 'Aprender para transformar o dia a dia',
      text: 'Uma formação prática em 4 módulos para desenvolver seu olhar crítico, sua liderança e sua capacidade de melhorar continuamente o ambiente ao seu redor.',
      quote: 'Pensar também faz parte do trabalho.',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Auto advance steps when playing
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying, steps.length]);

  if (!isOpen) return null;

  const current = steps[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-800 text-white overflow-hidden shadow-2xl">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              Apresentação Conceitual (1 min)
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video / Visual Simulation Canvas */}
        <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
          <img
            src={current.image}
            alt={current.title}
            className="absolute inset-0 w-full h-full object-cover opacity-35 transition-all duration-700 transform scale-105"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Text Content Overlay */}
          <div className="relative z-10 p-6 sm:p-8 max-w-lg text-center">
            <span className="inline-block text-[11px] font-mono px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 font-semibold mb-3 border border-blue-400/30">
              {current.time}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-3">
              {current.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {current.text}
            </p>
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 text-xs italic text-blue-200">
              "{current.quote}"
            </div>
          </div>

          {/* Audio Waveform Graphic */}
          <div className="absolute bottom-4 left-6 flex items-center gap-1">
            <Volume2 className="w-4 h-4 text-blue-400 mr-2" />
            {[40, 70, 30, 85, 60, 95, 45, 80, 50, 65].map((h, i) => (
              <span
                key={i}
                className="w-1 bg-blue-400/80 rounded-full transition-all duration-300"
                style={{
                  height: isPlaying ? `${(h * ((i % 3) + 1)) / 3.5}px` : '4px'
                }}
              />
            ))}
          </div>
        </div>

        {/* Player Navigation & Progress Tabs */}
        <div className="p-6 bg-slate-950 border-t border-slate-800">
          <div className="grid grid-cols-4 gap-2 mb-4">
            {steps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentStep(idx);
                  setIsPlaying(false);
                }}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentStep === idx
                    ? 'bg-blue-500'
                    : currentStep > idx
                    ? 'bg-slate-600'
                    : 'bg-slate-800'
                }`}
                title={`Ir para etapa ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors cursor-pointer"
                aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={() => {
                  setCurrentStep(0);
                  setIsPlaying(true);
                }}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                title="Reiniciar vídeo"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenCapture();
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Quero participar do curso &rarr;
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
