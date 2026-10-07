import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { AcademicPrograms } from './components/AcademicPrograms';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AdmissionSection } from './components/AdmissionSection';
import { NoticeBoard } from './components/NoticeBoard';
import { GallerySection } from './components/GallerySection';
import { FacultySection } from './components/FacultySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { INSTITUTION_INFO } from './data/institutionData';
import { Language } from './types';
import { Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('bn');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Update HTML lang attribute dynamically
    document.documentElement.lang = currentLang;

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentLang]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-emerald-700 selection:text-white">
      {/* Sticky Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero currentLang={currentLang} />

        {/* 2. About Us */}
        <AboutSection currentLang={currentLang} />

        {/* 3. Academic Programs & Departments */}
        <AcademicPrograms currentLang={currentLang} />

        {/* 4. Why Choose Us */}
        <WhyChooseUs currentLang={currentLang} />

        {/* 5. Admission Section */}
        <AdmissionSection currentLang={currentLang} />

        {/* 6. Notice / Announcements Board */}
        <NoticeBoard currentLang={currentLang} />

        {/* 7. Gallery with Lightbox */}
        <GallerySection currentLang={currentLang} />

        {/* 8. Teachers / Faculty */}
        <FacultySection currentLang={currentLang} />

        {/* 9. Contact Section & Form with Map */}
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* Floating Action Buttons: Call & Scroll to Top */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        {/* Floating Phone Dial for instant parent inquiry */}
        <a
          href={`tel:${INSTITUTION_INFO.phone}`}
          className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold px-3.5 py-2.5 rounded-full shadow-lg shadow-black/20 transition-all transform hover:scale-105"
          aria-label="Direct Phone Call"
        >
          <Phone className="w-4 h-4" />
          <span className="text-xs hidden sm:inline">
            {currentLang === 'bn' ? 'সরাসরি কল' : 'Call'}
          </span>
        </a>

        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 bg-emerald-900/90 hover:bg-emerald-950 text-white rounded-full shadow-md transition-all hover:-translate-y-0.5"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
