import React, { useState } from 'react';
import { ArrowRight, BookOpen, Compass, CheckCircle2 } from 'lucide-react';
import { ABOUT_CONTENT, INSTITUTION_INFO } from '../data/institutionData';
import { Language } from '../types';
import { Modal } from './Modal';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="about" className="py-14 sm:py-18 lg:py-20 bg-stone-50 text-slate-800 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Image & Decorative Showcase Side */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-white">
              <img
                src={INSTITUTION_INFO.libraryImage}
                alt={currentLang === 'bn' ? 'দারুল উলূম কমপ্লেক্স পাঠাগার ও অধ্যয়ন পরিবেশ' : 'Darul Uloom Complex Library & Study Environment'}
                loading="lazy"
                className="w-full h-[260px] sm:h-[340px] lg:h-[400px] object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== INSTITUTION_INFO.heroImage) {
                    target.src = INSTITUTION_INFO.heroImage;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-emerald-950/20 to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-4 rounded-xl bg-emerald-950/90 backdrop-blur-sm border border-emerald-800/80 text-white">
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-amber-400 mb-0.5 sm:mb-1">
                  {currentLang === 'bn' ? 'দ্বীনি ও চারিত্রিক বুনিয়াদ' : 'Islamic & Moral Foundation'}
                </p>
                <p className="text-xs sm:text-sm font-medium text-emerald-100">
                  {currentLang === 'bn'
                    ? 'আদর্শ প্রজন্ম গড়ার প্রত্যয়ে নিবেদিত প্রতিষ্ঠান'
                    : 'Dedicated to cultivating an upright, grounded generation.'}
                </p>
              </div>
            </div>

            {/* Subtle floating gold ornament badge with official logo */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-amber-400 text-emerald-950 p-2 sm:p-2.5 rounded-xl shadow-lg items-center gap-2 border border-amber-300">
              <img
                src={INSTITUTION_INFO.logoUrl}
                alt="Logo Badge"
                className="w-7 h-7 rounded-full bg-white object-contain p-0.5"
                referrerPolicy="no-referrer"
              />
              <span className="text-xs font-bold uppercase tracking-wider">
                {currentLang === 'bn' ? 'ইলম ও আমল' : 'Knowledge & Practice'}
              </span>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Section kicker without pill */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-700 mb-3">
              <Compass className="w-4 h-4 text-amber-500" />
              <span>{currentLang === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-6 leading-snug">
              {currentLang === 'bn' ? INSTITUTION_INFO.nameBn : INSTITUTION_INFO.nameEn}
            </h2>

            {/* Core brief quote / summary */}
            <div className="p-6 rounded-2xl bg-emerald-50/70 border-l-4 border-emerald-700 border-y border-r border-emerald-100/60 mb-6">
              <p className="text-base sm:text-lg leading-relaxed text-emerald-950 font-medium">
                {currentLang === 'bn' ? ABOUT_CONTENT.summaryBn : ABOUT_CONTENT.summaryEn}
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed mb-8 text-sm sm:text-base">
              {currentLang === 'bn'
                ? 'আমরা বিশ্বাস করি প্রতিটি শিক্ষার্থী আল্লাহর এক পরম আমানত। শৈশব থেকেই তাদের হৃদয়ে আল্লাহর ভয়, রাসূল (সা.) এর সুন্নাহর ভালোবাসা এবং সমাজের প্রতি দায়িত্বশীলতার বীজ বপন করাই আমাদের মূল প্রত্যয়।'
                : 'We believe each student is a sacred trust. Our steadfast objective is to cultivate the love of Allah and the Sunnah of the Prophet (pbuh) while instilling responsible civic character and disciplined focus.'}
            </p>

            {/* Highlighted pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{currentLang === 'bn' ? 'বিশুদ্ধ তাজবিদ ও কুরআন হিফজ' : 'Pure Tajweed & Quran Memorization'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{currentLang === 'bn' ? 'ইসলামিক আদব ও শিষ্টাচার চর্চা' : 'Islamic Etiquette & Good Manners'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{currentLang === 'bn' ? 'বাংলা, ইংরেজি ও সাধারণ জ্ঞান' : 'General Languages & Foundational Skills'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{currentLang === 'bn' ? 'অভিজ্ঞ ও স্নেহশীল শিক্ষকমণ্ডলী' : 'Caring & Dedicated Faculty'}</span>
              </div>
            </div>

            {/* Read More button */}
            <div>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 transition-colors shadow-sm"
              >
                <span>{currentLang === 'bn' ? 'বিস্তারিত' : 'Read More'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed About Us Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={currentLang === 'bn' ? 'আমাদের লক্ষ্য ও বৈশিষ্ট্যসমূহ' : 'Our Institutional Vision & Values'}
        subtitle={currentLang === 'bn' ? INSTITUTION_INFO.nameBn : INSTITUTION_INFO.nameEn}
      >
        <div className="space-y-4">
          <p className="whitespace-pre-line text-slate-700 text-sm sm:text-base leading-relaxed">
            {currentLang === 'bn' ? ABOUT_CONTENT.detailsBn : ABOUT_CONTENT.detailsEn}
          </p>

          <div className="pt-4 border-t border-stone-200 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs text-slate-500 font-medium">
                {currentLang === 'bn' ? 'ঠিকানা:' : 'Address:'}
              </p>
              <p className="text-sm font-semibold text-slate-900">
                {currentLang === 'bn' ? INSTITUTION_INFO.addressBn : INSTITUTION_INFO.addressEn}
              </p>
            </div>
            <a
              href={`tel:${INSTITUTION_INFO.phone}`}
              className="px-4 py-2 text-xs font-semibold text-emerald-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap"
            >
              {currentLang === 'bn' ? `কল করুন: ${INSTITUTION_INFO.phone}` : `Call: ${INSTITUTION_INFO.phone}`}
            </a>
          </div>
        </div>
      </Modal>
    </section>
  );
};
