import React from 'react';
import { Users, User, BookOpen } from 'lucide-react';
import { TEACHERS } from '../data/institutionData';
import { Language } from '../types';

interface FacultySectionProps {
  currentLang: Language;
}

export const FacultySection: React.FC<FacultySectionProps> = ({ currentLang }) => {
  return (
    <section id="teachers" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-3">
            <Users className="w-4 h-4 text-amber-500" />
            <span>{currentLang === 'bn' ? 'শিক্ষকমণ্ডলী' : 'Faculty & Teachers'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            {currentLang === 'bn' ? 'শ্রদ্ধেয় শিক্ষকবৃন্দ' : 'Our Respected Faculty Members'}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {currentLang === 'bn'
              ? 'দ্বীনি শিক্ষা ও সুন্নাহর আলোকে শিক্ষার্থীদের চরিত্র গঠনে নিবেদিতপ্রাণ ওস্তাদ ও শিক্ষকমণ্ডলী।'
              : 'Dedicated mentors and educators committed to nurturing students in sacred knowledge and ethical values.'}
          </p>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEACHERS.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col items-center text-center group"
            >
              {/* Teacher Photo / Avatar Placeholder */}
              <div className="w-24 h-24 rounded-full bg-emerald-950 flex items-center justify-center text-amber-400 mb-5 ring-4 ring-emerald-100 group-hover:ring-amber-200 transition-all shadow-inner">
                <User className="w-12 h-12" />
              </div>

              {/* Name Placeholder */}
              <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-900 transition-colors">
                {currentLang === 'bn' ? teacher.nameBn : teacher.nameEn}
              </h3>

              {/* Designation Placeholder */}
              <p className="text-xs font-semibold text-amber-700 mb-2">
                {currentLang === 'bn' ? teacher.designationBn : teacher.designationEn}
              </p>

              {/* Department */}
              <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-medium mb-4">
                <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                <span>{currentLang === 'bn' ? teacher.departmentBn : teacher.departmentEn}</span>
              </div>

              {/* Short Profile */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-stone-100 pt-4 w-full">
                {currentLang === 'bn' ? teacher.profileBn : teacher.profileEn}
              </p>
            </div>
          ))}
        </div>

        {/* Note on editable placeholders */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 italic">
            {currentLang === 'bn'
              ? 'প্রতিষ্ঠান কর্তৃপক্ষ প্রয়োজন অনুযায়ী শিক্ষকবৃন্দের নাম ও পরিচিতি কোড বা প্যানেল থেকে সহজে পরিবর্তন করতে পারবেন।'
              : 'Institution administration can conveniently customize teacher names and designations from the data configuration.'}
          </p>
        </div>
      </div>
    </section>
  );
};
