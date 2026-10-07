import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS, INSTITUTION_INFO } from '../data/institutionData';
import { GalleryItem, Language } from '../types';

interface GallerySectionProps {
  currentLang: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', labelBn: 'সকল ছবি', labelEn: 'All Photos' },
    { id: 'campus', labelBn: 'ক্যাম্পাস', labelEn: 'Campus' },
    { id: 'academic', labelBn: 'শিক্ষা কার্যক্রম', labelEn: 'Academic Activities' },
    { id: 'students', labelBn: 'শিক্ষার্থীবৃন্দ', labelEn: 'Students' },
    { id: 'events', labelBn: 'অনুষ্ঠানসমূহ', labelEn: 'Events' },
    { id: 'islamic', labelBn: 'ইসলামিক কার্যক্রম', labelEn: 'Islamic Programs' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : 0
        );
      }
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-3">
              <ImageIcon className="w-4 h-4 text-amber-500" />
              <span>{currentLang === 'bn' ? 'ছবির অ্যালবাম' : 'Photo Gallery'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              {currentLang === 'bn' ? 'ক্যাম্পাস ও কার্যক্রমের চিত্র' : 'Campus & Institutional Gallery'}
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 border border-stone-200 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-stone-200/60'
                }`}
              >
                {currentLang === 'bn' ? cat.labelBn : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveImageIndex(idx)}
              className="group relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-200 aspect-[4/3] flex items-center justify-center"
            >
              <img
                src={item.imageUrl}
                alt={currentLang === 'bn' ? item.titleBn : item.titleEn}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== INSTITUTION_INFO.heroImage) {
                    target.src = INSTITUTION_INFO.heroImage;
                  }
                }}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4 flex flex-col justify-end text-white">
                <span className="text-xs text-amber-300 font-semibold tracking-wide uppercase mb-1">
                  {currentLang === 'bn' ? item.titleBn : item.titleEn}
                </span>
                <p className="text-xs text-emerald-100 line-clamp-2">
                  {currentLang === 'bn' ? item.captionBn : item.captionEn}
                </p>

                <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/40 text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && filteredItems[activeImageIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveImageIndex(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-5 right-5 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex((prev) =>
                prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
              );
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex((prev) =>
                prev !== null ? (prev + 1) % filteredItems.length : 0
              );
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Image & Caption Box */}
          <div
            className="max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
              <img
                src={filteredItems[activeImageIndex].imageUrl}
                alt={currentLang === 'bn' ? filteredItems[activeImageIndex].titleBn : filteredItems[activeImageIndex].titleEn}
                className="max-h-[75vh] w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== INSTITUTION_INFO.heroImage) {
                    target.src = INSTITUTION_INFO.heroImage;
                  }
                }}
              />
            </div>

            <div className="mt-4 text-center text-white max-w-xl">
              <p className="text-lg font-bold text-amber-300">
                {currentLang === 'bn'
                  ? filteredItems[activeImageIndex].titleBn
                  : filteredItems[activeImageIndex].titleEn}
              </p>
              <p className="text-sm text-stone-300 mt-1">
                {currentLang === 'bn'
                  ? filteredItems[activeImageIndex].captionBn
                  : filteredItems[activeImageIndex].captionEn}
              </p>
              <p className="text-xs text-stone-400 mt-2 font-mono">
                {activeImageIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
