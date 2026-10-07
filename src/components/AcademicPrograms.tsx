import React, { useState } from 'react';
import { BookOpen, Clock, Check, ArrowRight, Award, GraduationCap } from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '../data/institutionData';
import { AcademicProgram, Language } from '../types';
import { Modal } from './Modal';

interface AcademicProgramsProps {
  currentLang: Language;
}

export const AcademicPrograms: React.FC<AcademicProgramsProps> = ({ currentLang }) => {
  const [selectedProgram, setSelectedProgram] = useState<AcademicProgram | null>(null);

  return (
    <section id="programs" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-700 mb-3">
            <GraduationCap className="w-4 h-4 text-amber-500" />
            <span id="departments">
              {currentLang === 'bn' ? 'শিক্ষা কার্যক্রম ও বিভাগসমূহ' : 'Academic Programs & Departments'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            {currentLang === 'bn'
              ? 'আমাদের পরিচালিত শিক্ষা বিভাগসমূহ'
              : 'Our Academic Departments & Curricula'}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {currentLang === 'bn'
              ? 'কুরআনুল কারীমের বিশুদ্ধ বুনিয়াদ থেকে শুরু করে কিতাব বিভাগ ও সমকালীন সাধারণ শিক্ষার সমন্বয়ে সুবিন্যস্ত পাঠ্যক্রম।'
              : 'A structured curriculum spanning foundational Quran recitation, Hifz memorization, classical Kitab studies, and essential modern education.'}
          </p>
        </div>

        {/* Academic Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACADEMIC_PROGRAMS.map((program, index) => {
            const isFeatured = index === 1; // Hifz department subtle elevation
            return (
              <div
                key={program.id}
                className={`relative flex flex-col rounded-2xl p-7 transition-all duration-200 ${
                  isFeatured
                    ? 'bg-emerald-950 text-white shadow-xl ring-2 ring-amber-400/80'
                    : 'bg-stone-50/80 text-slate-800 border border-stone-200/90 hover:shadow-md hover:border-emerald-300'
                }`}
              >
                {/* Header ribbon if featured */}
                {isFeatured && (
                  <div className="flex items-center justify-between mb-3 text-xs font-semibold text-amber-300">
                    <span className="flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>{currentLang === 'bn' ? 'বিশেষ বিভাগ' : 'Featured Program'}</span>
                    </span>
                    <span>{currentLang === 'bn' ? 'হিফজুল কুরআন' : 'Hifzul Quran'}</span>
                  </div>
                )}

                {/* Duration indicator (clean unboxed text) */}
                <div
                  className={`flex items-center gap-1.5 text-xs font-medium mb-3 ${
                    isFeatured ? 'text-emerald-300' : 'text-emerald-700'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>{currentLang === 'bn' ? program.durationBn : program.durationEn}</span>
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-bold mb-3 ${
                    isFeatured ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {currentLang === 'bn' ? program.titleBn : program.titleEn}
                </h3>

                {/* Summary */}
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    isFeatured ? 'text-emerald-100/90' : 'text-slate-600'
                  }`}
                >
                  {currentLang === 'bn' ? program.summaryBn : program.summaryEn}
                </p>

                {/* Key Features List */}
                <div className="space-y-2.5 mb-8 flex-1">
                  {(currentLang === 'bn' ? program.featuresBn : program.featuresEn).map(
                    (feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check
                          className={`w-4 h-4 mt-0.5 shrink-0 ${
                            isFeatured ? 'text-amber-400' : 'text-emerald-600'
                          }`}
                        />
                        <span className={isFeatured ? 'text-emerald-50' : 'text-slate-700'}>
                          {feature}
                        </span>
                      </div>
                    )
                  )}
                </div>

                {/* Action button */}
                <div className="pt-4 border-t border-stone-200/60 dark:border-emerald-800/60">
                  <button
                    type="button"
                    onClick={() => setSelectedProgram(program)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors ${
                      isFeatured
                        ? 'bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold'
                        : 'bg-emerald-800 hover:bg-emerald-900 text-white'
                    }`}
                  >
                    <span>{currentLang === 'bn' ? 'বিভাগ বিস্তারিত' : 'Department Details'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Program Details Modal */}
      {selectedProgram && (
        <Modal
          isOpen={!!selectedProgram}
          onClose={() => setSelectedProgram(null)}
          title={currentLang === 'bn' ? selectedProgram.titleBn : selectedProgram.titleEn}
          subtitle={
            currentLang === 'bn'
              ? `মেয়াদ: ${selectedProgram.durationBn}`
              : `Duration: ${selectedProgram.durationEn}`
          }
        >
          <div className="space-y-5 text-sm sm:text-base">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                {currentLang === 'bn' ? 'বিভাগের উদ্দেশ্য ও সারসংক্ষেপ' : 'Program Overview'}
              </h4>
              <p className="text-slate-700 leading-relaxed">
                {currentLang === 'bn' ? selectedProgram.summaryBn : selectedProgram.summaryEn}
              </p>
            </div>

            <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">
                {currentLang === 'bn' ? 'পাঠ্যক্রম ও অধ্যয়ন বিষয়াবলী' : 'Curriculum & Study Outline'}
              </h4>
              <p className="text-emerald-950 text-sm">
                {currentLang === 'bn' ? selectedProgram.curriculumBn : selectedProgram.curriculumEn}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                {currentLang === 'bn' ? 'ভর্তির যোগ্যতা ও বয়সসীমা' : 'Eligibility & Age Range'}
              </h4>
              <p className="text-slate-700">
                {currentLang === 'bn' ? selectedProgram.eligibilityBn : selectedProgram.eligibilityEn}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                {currentLang === 'bn' ? 'প্রধান বৈশিষ্ট্যসমূহ' : 'Key Highlights'}
              </h4>
              <ul className="space-y-2">
                {(currentLang === 'bn' ? selectedProgram.featuresBn : selectedProgram.featuresEn).map(
                  (item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <a
                href="#admission"
                onClick={() => setSelectedProgram(null)}
                className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 hover:underline"
              >
                {currentLang === 'bn' ? 'ভর্তি প্রক্রিয়া দেখতে যান' : 'Go to Admission Process'}
              </a>

              <button
                type="button"
                onClick={() => setSelectedProgram(null)}
                className="px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-medium rounded-lg transition-colors"
              >
                {currentLang === 'bn' ? 'বন্ধ করুন' : 'Close'}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
