import React, { useState } from 'react';
import { Phone, FileText, CheckCircle, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
import { ADMISSION_STEPS, INSTITUTION_INFO } from '../data/institutionData';
import { Language } from '../types';
import { Modal } from './Modal';

interface AdmissionSectionProps {
  currentLang: Language;
}

export const AdmissionSection: React.FC<AdmissionSectionProps> = ({ currentLang }) => {
  const [guideModalOpen, setGuideModalOpen] = useState(false);

  return (
    <section id="admission" className="py-20 bg-emerald-950 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-20 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-800/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Unboxed Kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">
          <Sparkles className="w-4 h-4" />
          <span>{currentLang === 'bn' ? 'নতুন শিক্ষাবর্ষ' : 'New Academic Session'}</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
          {currentLang === 'bn' ? 'ভর্তি কার্যক্রম' : 'Admission Information'}
        </h2>

        {/* Section Body Text */}
        <p className="text-base sm:text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed mb-10">
          {currentLang === 'bn'
            ? 'কোনাবাড়ী দারুল উলূম কমপ্লেক্সে শিক্ষার্থী ভর্তির জন্য বিস্তারিত তথ্য জানতে আমাদের সাথে যোগাযোগ করুন।'
            : 'Contact us to know detailed information regarding student admission at Konabari Darul Uloom Complex.'}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-14">
          <button
            type="button"
            onClick={() => setGuideModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold bg-amber-400 text-emerald-950 hover:bg-amber-300 shadow-lg shadow-amber-400/20 transition-all transform hover:-translate-y-0.5"
          >
            <FileText className="w-4 h-4 text-emerald-950" />
            <span>{currentLang === 'bn' ? 'ভর্তি সম্পর্কে জানুন' : 'Learn About Admission'}</span>
          </button>

          <a
            href={`tel:${INSTITUTION_INFO.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold bg-emerald-900 hover:bg-emerald-800 text-white border border-emerald-700/80 transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>{currentLang === 'bn' ? 'কল করুন' : 'Call Now'}</span>
          </a>
        </div>

        {/* Step-by-Step Admission Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {ADMISSION_STEPS.map((stepItem, idx) => (
            <div
              key={idx}
              className="bg-emerald-900/60 backdrop-blur-sm border border-emerald-800/80 rounded-2xl p-6 transition-all hover:bg-emerald-900/80"
            >
              <div className="text-2xl font-bold text-amber-400 mb-2 font-mono">
                {currentLang === 'bn' ? stepItem.step : stepItem.stepEn}
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {currentLang === 'bn' ? stepItem.titleBn : stepItem.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
                {currentLang === 'bn' ? stepItem.descBn : stepItem.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Admission Guidelines Modal */}
      <Modal
        isOpen={guideModalOpen}
        onClose={() => setGuideModalOpen(false)}
        title={currentLang === 'bn' ? 'ভর্তি নির্দেশিকা ও তথ্যাবলী' : 'Admission Guidelines & Requirements'}
        subtitle={currentLang === 'bn' ? INSTITUTION_INFO.nameBn : INSTITUTION_INFO.nameEn}
      >
        <div className="space-y-6 text-sm sm:text-base">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
              {currentLang === 'bn' ? 'ভর্তি প্রক্রিয়া' : 'Admission Procedure'}
            </h4>
            <div className="space-y-3">
              {ADMISSION_STEPS.map((s, idx) => (
                <div key={idx} className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-start gap-3">
                  <span className="font-bold text-emerald-800 font-mono text-sm shrink-0">
                    {currentLang === 'bn' ? s.step : s.stepEn}.
                  </span>
                  <div>
                    <h5 className="font-semibold text-slate-900 text-sm">
                      {currentLang === 'bn' ? s.titleBn : s.titleEn}
                    </h5>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {currentLang === 'bn' ? s.descBn : s.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
              {currentLang === 'bn' ? 'প্রয়োজনীয় কাগজপত্র' : 'Required Documents'}
            </h4>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {currentLang === 'bn'
                    ? 'শিক্ষার্থীর ডিজিটাল জন্ম নিবন্ধন সনদের ফটোকপি'
                    : "Student's Digital Birth Registration Certificate copy"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {currentLang === 'bn'
                    ? 'পিতা ও মাতার জাতীয় পরিচয়পত্রের (NID) ফটোকপি'
                    : "Parents' National ID Card (NID) photocopies"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {currentLang === 'bn'
                    ? 'শিক্ষার্থীর পাসপোর্ট সাইজের ২ কপি রঙিন ছবি'
                    : '2 passport-size color photographs of the student'}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {currentLang === 'bn'
                    ? 'পূর্ববর্তী প্রতিষ্ঠানের ছাড়পত্র (প্রযোজ্য ক্ষেত্রে)'
                    : 'Previous school/madrasa transfer certificate (if applicable)'}
                </span>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
              {currentLang === 'bn' ? 'সরাসরি যোগাযোগ ও অফিস' : 'Office Location & Direct Inquiry'}
            </h4>
            <p className="text-xs text-slate-700 mb-3">
              {currentLang === 'bn' ? INSTITUTION_INFO.addressBn : INSTITUTION_INFO.addressEn}
            </p>
            <a
              href={`tel:${INSTITUTION_INFO.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg text-xs font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{currentLang === 'bn' ? `কল করুন: ${INSTITUTION_INFO.phone}` : `Call: ${INSTITUTION_INFO.phone}`}</span>
            </a>
          </div>
        </div>
      </Modal>
    </section>
  );
};
