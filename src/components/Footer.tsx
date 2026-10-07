import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/institutionData';
import { Language } from '../types';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const quickLinks = [
    { labelBn: 'হোম', labelEn: 'Home', href: '#home' },
    { labelBn: 'আমাদের সম্পর্কে', labelEn: 'About Us', href: '#about' },
    { labelBn: 'ভর্তি', labelEn: 'Admission', href: '#admission' },
    { labelBn: 'নোটিশ', labelEn: 'Notice', href: '#notice' },
    { labelBn: 'গ্যালারি', labelEn: 'Gallery', href: '#gallery' },
    { labelBn: 'যোগাযোগ', labelEn: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-emerald-950 text-emerald-100 border-t border-emerald-900/80">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Institution Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={INSTITUTION_INFO.logoUrl}
                alt="Logo"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-contain bg-white p-0.5 border-2 border-amber-400 shadow-md shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {INSTITUTION_INFO.nameBn}
                </h3>
                <p className="text-xs text-amber-300 font-medium">
                  {INSTITUTION_INFO.areaBn}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed max-w-sm">
              {currentLang === 'bn'
                ? 'দ্বীনি ও আধুনিক শিক্ষার সমন্বয়ে আদর্শ চরিত্রবান প্রজন্ম গড়ার প্রত্যয়ে একটি মানসম্মত ও সুশৃঙ্খল ইসলামী শিক্ষা প্রতিষ্ঠান।'
                : 'An established Islamic educational institution fostering righteous character through integrated Islamic and modern foundational learning.'}
            </p>

            {/* Social Media Placeholders */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-2.5">
                {currentLang === 'bn' ? 'সোশ্যাল মিডিয়া' : 'Social Media'}
              </p>
              <div className="flex items-center gap-3">
                {/* Facebook Placeholder */}
                <a
                  href="#facebook"
                  title="Facebook"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-lg bg-emerald-900/80 hover:bg-amber-400 hover:text-emerald-950 text-emerald-200 border border-emerald-800 flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.2 22 12z" />
                  </svg>
                </a>

                {/* YouTube Placeholder */}
                <a
                  href="#youtube"
                  title="YouTube"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-lg bg-emerald-900/80 hover:bg-amber-400 hover:text-emerald-950 text-emerald-200 border border-emerald-800 flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26.2 26.2 0 0 0 2 12c0 1.63.14 3.2.42 4.81.24.9.94 1.6 1.76 1.77 1.56.42 7.82.42 7.82.42s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77c.28-1.61.42-3.18.42-4.81 0-1.63-.14-3.2-.42-4.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                  </svg>
                </a>

                {/* WhatsApp Placeholder */}
                <a
                  href={`https://wa.me/8801980470360`}
                  target="_blank"
                  rel="noreferrer"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-lg bg-emerald-900/80 hover:bg-amber-400 hover:text-emerald-950 text-emerald-200 border border-emerald-800 flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.87-.38-4.12-1.11l-.3-.17-3.12.82.83-3.04-.19-.31a8.16 8.16 0 0 1-1.25-4.44c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.8-.23-.08-.39-.13-.56.13-.17.25-.64.8-.79.96-.14.17-.29.19-.54.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              {currentLang === 'bn' ? 'প্রয়োজনীয় লিংক' : 'Quick Links'}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-emerald-200 hover:text-amber-300 transition-colors inline-block"
                  >
                    {currentLang === 'bn' ? link.labelBn : link.labelEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              {currentLang === 'bn' ? 'যোগাযোগ' : 'Contact'}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-emerald-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {currentLang === 'bn' ? INSTITUTION_INFO.addressBn : INSTITUTION_INFO.addressEn}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${INSTITUTION_INFO.phone}`}
                  className="font-bold text-white hover:text-amber-300 transition-colors"
                >
                  {INSTITUTION_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${INSTITUTION_INFO.email}`}
                  className="text-white hover:text-amber-300 transition-colors break-all"
                >
                  {INSTITUTION_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mandatory exact two lines at the very bottom */}
      <div className="border-t border-emerald-900 bg-emerald-950/95 py-6 px-4 text-center">
        <div className="max-w-7xl mx-auto space-y-1">
          <p className="text-sm font-bold text-white tracking-wide">
            কোনাবাড়ী দারুল উলূম কমপ্লেক্স
          </p>
          <p className="text-xs text-amber-400/90 font-medium">
            কোনাবাড়ী, গাজীপুর
          </p>
        </div>
      </div>
    </footer>
  );
};
