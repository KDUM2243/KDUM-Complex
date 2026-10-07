import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { INSTITUTION_INFO, NAV_ITEMS } from '../data/institutionData';
import { Language } from '../types';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-emerald-950/95 backdrop-blur-md shadow-md border-b border-emerald-900/60 py-3'
            : 'bg-emerald-950 border-b border-emerald-900/50 py-3.5'
        } text-white`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Brand & Logo */}
            <a
              href="#home"
              className="group flex items-center gap-2.5 sm:gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1"
            >
              <img
                src={INSTITUTION_INFO.logoUrl}
                alt={currentLang === 'bn' ? INSTITUTION_INFO.nameBn : INSTITUTION_INFO.nameEn}
                className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full object-contain bg-white p-0.5 border-2 border-amber-400 shadow-md shrink-0 group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />

              <div className="flex flex-col">
                <span className="text-sm sm:text-base lg:text-lg font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors leading-tight">
                  {currentLang === 'bn' ? INSTITUTION_INFO.nameBn : INSTITUTION_INFO.nameEn}
                </span>
                <span className="text-[10px] sm:text-xs text-emerald-200/80 font-medium leading-tight">
                  {currentLang === 'bn' ? INSTITUTION_INFO.nameEn : INSTITUTION_INFO.nameBn}
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Desktop & Laptop) */}
            <nav className="hidden lg:flex items-center gap-2.5 xl:gap-5 text-xs xl:text-sm font-semibold text-emerald-100 whitespace-nowrap">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="hover:text-amber-300 transition-colors duration-150 py-1 px-1 border-b-2 border-transparent hover:border-amber-300/80"
                >
                  {currentLang === 'bn' ? item.labelBn : item.labelEn}
                </a>
              ))}
            </nav>

            {/* Zone 3: Actions & Language Switcher */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Language Switcher */}
              <div className="flex items-center bg-emerald-900/80 border border-emerald-700/60 rounded-lg p-0.5 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => onLanguageChange('bn')}
                  className={`px-2.5 py-1.5 rounded-md transition-all ${
                    currentLang === 'bn'
                      ? 'bg-amber-400 text-emerald-950 shadow-sm font-bold'
                      : 'text-emerald-200 hover:text-white hover:bg-emerald-800/60'
                  }`}
                  aria-label="বাংলা ভাষায় পরিবর্তন করুন"
                >
                  বাংলা
                </button>
                <button
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  className={`px-2.5 py-1.5 rounded-md transition-all ${
                    currentLang === 'en'
                      ? 'bg-amber-400 text-emerald-950 shadow-sm font-bold'
                      : 'text-emerald-200 hover:text-white hover:bg-emerald-800/60'
                  }`}
                  aria-label="Switch to English language"
                >
                  English
                </button>
              </div>

              {/* Quick Call Button (Desktop) */}
              <a
                href={`tel:${INSTITUTION_INFO.phone}`}
                className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{INSTITUTION_INFO.phone}</span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-emerald-200 hover:text-white hover:bg-emerald-900/80 rounded-lg transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[65px] bg-emerald-950/98 border-b border-emerald-800/80 shadow-2xl backdrop-blur-md px-5 py-6 transition-all max-h-[calc(100vh-70px)] overflow-y-auto">
            {/* Drawer Brand Header */}
            <div className="flex items-center gap-3 pb-4 mb-3 border-b border-emerald-800/60">
              <img
                src={INSTITUTION_INFO.logoUrl}
                alt="Logo"
                className="w-12 h-12 rounded-full object-contain bg-white p-0.5 border-2 border-amber-400 shadow-md shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-base font-bold text-white leading-snug">
                  {currentLang === 'bn' ? INSTITUTION_INFO.nameBn : INSTITUTION_INFO.nameEn}
                </p>
                <p className="text-xs text-amber-300">
                  {currentLang === 'bn' ? INSTITUTION_INFO.areaBn : INSTITUTION_INFO.areaEn}
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-1.5 pb-5 border-b border-emerald-800/60">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={handleNavClick}
                  className="text-sm sm:text-base font-medium text-emerald-100 hover:text-amber-300 hover:bg-emerald-900/50 px-3.5 py-2 rounded-xl transition-colors"
                >
                  {currentLang === 'bn' ? item.labelBn : item.labelEn}
                </a>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-emerald-300 px-3">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-amber-400" />
                  {currentLang === 'bn' ? 'ভাষা নির্বাচন' : 'Select Language'}
                </span>
                <span className="font-semibold text-white">
                  {currentLang === 'bn' ? 'বাংলা' : 'English'}
                </span>
              </div>

              <a
                href={`tel:${INSTITUTION_INFO.phone}`}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-emerald-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{currentLang === 'bn' ? `কল করুন: ${INSTITUTION_INFO.phone}` : `Call: ${INSTITUTION_INFO.phone}`}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
