import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { CodigoPage } from './components/pages/CodigoPage';
import { ProjetosPage } from './components/pages/ProjetosPage';
import { ProjetoCozinhaPage } from './components/pages/ProjetoCozinhaPage';
import { CursoPage } from './components/pages/CursoPage';
import { ArtigosPage } from './components/pages/ArtigosPage';
import { ArtigoDetailPage } from './components/pages/ArtigoDetailPage';
import { SobrePage } from './components/pages/SobrePage';
import { ContatoPage } from './components/pages/ContatoPage';
import { CaptureModal } from './components/CaptureModal';
import { VideoModal } from './components/VideoModal';
import { SearchModal } from './components/SearchModal';
import { PrivacyModal } from './components/PrivacyModal';
import { PageKey, Article } from './types';
import { ARTICLES } from './data/praxisData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>('home');
  const [selectedArticle, setSelectedArticle] = useState<Article>(ARTICLES[0]);
  const [captureModalOpen, setCaptureModalOpen] = useState(false);
  const [captureSource, setCaptureSource] = useState('geral');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  // Keyboard shortcut Ctrl+K / Cmd+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (page: PageKey) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
    setCurrentPage('artigo-detalhe');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCapture = (source: string = 'geral') => {
    setCaptureSource(source);
    setCaptureModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F3EE] text-[#475569] font-sans selection:bg-[#04162B] selection:text-[#C38735]">
      {/* 1. Global Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenCapture={handleOpenCapture}
      />

      {/* 2. Main Page Render */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectArticle={handleSelectArticle}
            onOpenCapture={handleOpenCapture}
          />
        )}

        {currentPage === 'codigo' && (
          <CodigoPage
            onNavigate={handleNavigate}
            onOpenCapture={handleOpenCapture}
          />
        )}

        {currentPage === 'projetos' && (
          <ProjetosPage
            onNavigate={handleNavigate}
            onOpenCapture={handleOpenCapture}
          />
        )}

        {currentPage === 'projeto-cozinha' && (
          <ProjetoCozinhaPage
            onNavigate={handleNavigate}
            onOpenCapture={handleOpenCapture}
          />
        )}

        {(currentPage === 'cursos' || (currentPage as string) === 'curso') && (
          <CursoPage
            onNavigate={handleNavigate}
            onOpenCapture={handleOpenCapture}
          />
        )}

        {currentPage === 'artigos' && (
          <ArtigosPage
            onNavigate={handleNavigate}
            onSelectArticle={handleSelectArticle}
            onOpenCapture={handleOpenCapture}
          />
        )}

        {currentPage === 'artigo-detalhe' && (
          <ArtigoDetailPage
            article={selectedArticle}
            onNavigate={handleNavigate}
            onSelectArticle={handleSelectArticle}
            onOpenCapture={handleOpenCapture}
          />
        )}

        {currentPage === 'sobre' && (
          <SobrePage
            onNavigate={handleNavigate}
            onOpenCapture={handleOpenCapture}
          />
        )}

        {currentPage === 'contato' && (
          <ContatoPage
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* 3. Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCapture={handleOpenCapture}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
      />

      {/* 4. Interactive Modals */}
      <CaptureModal
        isOpen={captureModalOpen}
        onClose={() => setCaptureModalOpen(false)}
        source={captureSource}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        onOpenCapture={() => {
          setVideoModalOpen(false);
          handleOpenCapture('video_modal');
        }}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectArticle={handleSelectArticle}
        onNavigate={handleNavigate}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}
