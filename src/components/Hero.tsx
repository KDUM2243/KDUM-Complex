import React from 'react';
import { ArrowRight, MapPin, Phone, GraduationCap } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/institutionData';
import { Language } from '../types';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[660px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-emerald-950 text-white">
      {/* Background Campus Image with Architectural Inscription Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={INSTITUTION_INFO.heroImage}
          alt={currentLang === 'bn' ? 'কোনাবাড়ী দারুল উলূম কমপ্লেক্স ক্যাম্পাস' : 'Konabari Darul Uloom Complex Campus'}
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />

        {/* Deep Islamic Green gradient overlays balanced for photo visibility & contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/75 to-emerald-950/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-transparent to-emerald-950/50" />
        <div className="absolute inset-0 bg-islamic-pattern opacity-15" />
      </div>

      {/* Decorative Golden Arch Accent Lines */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent z-10" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28 text-center">
        {/* Sacred Calligraphy Banner & Official Logo Lockup */}
        <div className="mb-6 inline-flex flex-col items-center justify-center gap-3">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-full bg-white p-1 border-2 border-amber-400 shadow-xl overflow-hidden transform hover:scale-105 transition-transform">
            <img
              src={INSTITUTION_INFO.logoUrl}
              alt="Konabari Darul Uloom Logo"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          <p
            className="text-amber-300 font-serif text-base sm:text-xl md:text-2xl tracking-wide opacity-95 select-none"
            style={{ fontFamily: "'Amiri', serif" }}
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
        </div>

        {/* Location & Institution Tag */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-emerald-200/90 mb-5 font-medium px-2">
          <span className="flex items-center gap-1.5 text-amber-300">
            <MapPin className="w-3.5 h-3.5" />
            <span>{currentLang === 'bn' ? INSTITUTION_INFO.areaBn : INSTITUTION_INFO.areaEn}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span>
            {currentLang === 'bn' ? 'দ্বীনি ও সাধারণ শিক্ষা প্রতিষ্ঠান' : 'Islamic & Academic Educational Complex'}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 sm:mb-6 leading-tight max-w-4xl mx-auto drop-shadow-md">
          {currentLang === 'bn' ? INSTITUTION_INFO.nameBn : INSTITUTION_INFO.nameEn}
        </h1>

        {/* Subheading */}
        <p className="text-sm sm:text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal px-2">
          {currentLang === 'bn' ? INSTITUTION_INFO.taglineBn : INSTITUTION_INFO.taglineEn}
        </p>

        {/* Two Prominent Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto px-4 sm:px-0">
          <a
            href="#admission"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold bg-amber-400 text-emerald-950 hover:bg-amber-300 shadow-lg shadow-amber-400/20 hover:shadow-amber-400/30 transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <GraduationCap className="w-5 h-5 text-emerald-950" />
            <span>{currentLang === 'bn' ? 'ভর্তি তথ্য' : 'Admission Information'}</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold bg-emerald-900/80 hover:bg-emerald-800/90 text-white border border-emerald-700/80 hover:border-emerald-600 transition-all duration-150 shadow-sm active:translate-y-0"
          >
            <span>{currentLang === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us'}</span>
          </a>
        </div>

        {/* Quick Contact Micro Strip */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-emerald-900/60 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-emerald-200/80">
          <a
            href={`tel:${INSTITUTION_INFO.phone}`}
            className="flex items-center gap-2 hover:text-amber-300 transition-colors font-semibold"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>{INSTITUTION_INFO.phone}</span>
          </a>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span>{currentLang === 'bn' ? 'কাশিমপুর রোড, গাজীপুর' : 'Kashimpur Road, Gazipur'}</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span className="text-amber-300 font-medium">
            {currentLang === 'bn' ? 'নতুন সেশনে ভর্তি চলছে' : 'Admissions Open'}
          </span>
        </div>
      </div>
    </section>
  );
};
