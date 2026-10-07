import React, { useState } from 'react';
import { Bell, Calendar, ArrowRight, Printer, AlertCircle } from 'lucide-react';
import { NOTICES, INSTITUTION_INFO } from '../data/institutionData';
import { Language, NoticeItem } from '../types';
import { Modal } from './Modal';

interface NoticeBoardProps {
  currentLang: Language;
}

export const NoticeBoard: React.FC<NoticeBoardProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeNotice, setActiveNotice] = useState<NoticeItem | null>(null);

  const categories = [
    { id: 'all', labelBn: 'সকল নোটিশ', labelEn: 'All Notices' },
    { id: 'admission', labelBn: 'ভর্তি', labelEn: 'Admission' },
    { id: 'academic', labelBn: 'শিক্ষা কার্যক্রম', labelEn: 'Academic' },
    { id: 'exam', labelBn: 'পরীক্ষা', labelEn: 'Exam' },
    { id: 'holiday', labelBn: 'ছুটি', labelEn: 'Holiday' },
  ];

  const filteredNotices =
    selectedCategory === 'all'
      ? NOTICES
      : NOTICES.filter((n) => n.categoryEn === selectedCategory);

  return (
    <section id="notice" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-3">
              <Bell className="w-4 h-4 text-amber-500" />
              <span>{currentLang === 'bn' ? 'নোটিশ বোর্ড' : 'Notice Board'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              {currentLang === 'bn' ? 'বিজ্ঞপ্তি ও সাম্প্রতিক সংবাদ' : 'Announcements & Recent Notices'}
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-stone-200 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-stone-100'
                }`}
              >
                {currentLang === 'bn' ? cat.labelBn : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Notices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Unboxed Metadata Header */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-emerald-800 uppercase tracking-wide">
                      {currentLang === 'bn' ? notice.categoryBn : notice.categoryEn}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{currentLang === 'bn' ? notice.dateBn : notice.dateEn}</span>
                    </span>
                  </div>

                  {notice.isImportant && (
                    <span className="text-amber-700 text-xs font-bold flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{currentLang === 'bn' ? 'জরুরি' : 'Important'}</span>
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {currentLang === 'bn' ? notice.titleBn : notice.titleEn}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {currentLang === 'bn' ? notice.summaryBn : notice.summaryEn}
                </p>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveNotice(notice)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
                >
                  <span>{currentLang === 'bn' ? 'বিস্তারিত' : 'View Notice'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notice Detail Modal */}
      {activeNotice && (
        <Modal
          isOpen={!!activeNotice}
          onClose={() => setActiveNotice(null)}
          title={currentLang === 'bn' ? activeNotice.titleBn : activeNotice.titleEn}
          subtitle={
            currentLang === 'bn'
              ? `তারিখ: ${activeNotice.dateBn} | বিভাগ: ${activeNotice.categoryBn}`
              : `Date: ${activeNotice.dateEn} | Category: ${activeNotice.categoryEn}`
          }
        >
          <div className="space-y-6">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <p className="text-xs text-slate-500 font-medium mb-1">
                {currentLang === 'bn' ? 'প্রতিষ্ঠান:' : 'Institution:'}
              </p>
              <p className="text-sm font-semibold text-emerald-950">
                {currentLang === 'bn' ? INSTITUTION_INFO.nameBn : INSTITUTION_INFO.nameEn}
              </p>
              <p className="text-xs text-slate-600 mt-1">
                {currentLang === 'bn' ? INSTITUTION_INFO.addressBn : INSTITUTION_INFO.addressEn}
              </p>
            </div>

            <div className="text-sm sm:text-base leading-relaxed whitespace-pre-line text-slate-800">
              {currentLang === 'bn' ? activeNotice.contentBn : activeNotice.contentEn}
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-stone-300 hover:bg-stone-50 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{currentLang === 'bn' ? 'মুদ্রণ / প্রিন্ট' : 'Print Notice'}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveNotice(null)}
                className="px-4 py-2 bg-emerald-800 text-white hover:bg-emerald-900 text-xs font-semibold rounded-lg transition-colors"
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
