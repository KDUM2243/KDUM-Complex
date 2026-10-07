import React from 'react';
import {
  GraduationCap,
  BookOpen,
  HeartHandshake,
  ShieldCheck,
  Users,
  Smile,
  Sparkles,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/institutionData';
import { Language } from '../types';

interface WhyChooseUsProps {
  currentLang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ currentLang }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-amber-500" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-amber-500" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-amber-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-500" />;
      case 'Users':
        return <Users className="w-6 h-6 text-amber-500" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-amber-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section className="py-20 bg-stone-50 border-b border-stone-200 bg-islamic-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-3">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>
              {currentLang === 'bn' ? 'আমাদের অনন্য বৈশিষ্ট্য' : 'Our Key Pillars'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            {currentLang === 'bn'
              ? 'কেন কোনাবাড়ী দারুল উলূম কমপ্লেক্স?'
              : 'Why Choose Konabari Darul Uloom Complex?'}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {currentLang === 'bn'
              ? 'শিক্ষার্থীদের আত্মিক পরিশুদ্ধি, সুশিক্ষা ও চারিত্রিক গুণাবলি অর্জনের জন্য একটি বিশ্বস্ত ও নিরাপদ প্রতিষ্ঠান।'
              : 'A trustworthy, serene educational sanctuary committed to student moral refinement and academic foundation.'}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-stone-200/80 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-950 flex items-center justify-center mb-5 group-hover:bg-emerald-900 transition-colors shadow-sm">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-900 transition-colors">
                  {currentLang === 'bn' ? item.titleBn : item.titleEn}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {currentLang === 'bn' ? item.descriptionBn : item.descriptionEn}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center text-xs font-semibold text-emerald-800">
                <span>
                  {currentLang === 'bn' ? 'দারুল উলূম মানদণ্ড' : 'Institutional Standard'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
