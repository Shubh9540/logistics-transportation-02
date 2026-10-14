'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { PhotoGalleryProps } from '@/types/templates.types';

export const PhotoGallery = ({ data }: PhotoGalleryProps) => {
  const [activeTab, setActiveTab] = useState(data?.allTabId ?? '');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (!data) return [];
    return activeTab === data.allTabId ? data.images : data.images.filter((image) => image.categoryId === activeTab);
  }, [activeTab, data]);

  useEffect(() => {
    if (activeIndex === null || !filteredImages.length) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft') setActiveIndex((current) => current === null ? null : current === 0 ? filteredImages.length - 1 : current - 1);
      if (event.key === 'ArrowRight') setActiveIndex((current) => current === null ? null : current === filteredImages.length - 1 ? 0 : current + 1);
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, filteredImages]);

  if (!data?.images.length) return null;

  const activeImage = activeIndex === null ? null : filteredImages[activeIndex];
  const showPrevious = () => setActiveIndex((current) => current === null ? null : current === 0 ? filteredImages.length - 1 : current - 1);
  const showNext = () => setActiveIndex((current) => current === null ? null : current === filteredImages.length - 1 ? 0 : current + 1);

  return (
    <section className="relative overflow-hidden bg-white py-8 lg:py-12">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-full bg-contain bg-right-top bg-no-repeat opacity-20" style={{ backgroundImage: `url(${data.backgroundImage})` }} role="img" aria-label={data.backgroundImageAlt} />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3"><span className="h-0.5 w-8 bg-[#FF6500]" /><p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#063A5B] sm:text-sm">{data.subtitle}</p></div>
          <h2 className="text-3xl font-extrabold leading-tight text-[#063A5B] sm:text-4xl lg:text-5xl">{data.title1} <span className="text-[#FF6500]">{data.highlightedTitle}</span></h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#738392] sm:text-base">{data.description}</p>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {data.tabs.map((tab) => (
            <button key={tab.id} type="button" onClick={() => { setActiveTab(tab.id); setActiveIndex(null); }} className={`rounded-full px-5 py-2 text-xs font-bold transition-colors duration-300 sm:px-6 sm:text-sm ${activeTab === tab.id ? 'bg-[#FF6500] text-white' : 'bg-[#EAF1F6] text-[#063A5B] hover:bg-[#DCE8F0]'}`}>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredImages.map((galleryImage, index) => (
            <button key={galleryImage.id} type="button" onClick={() => setActiveIndex(index)} aria-label={`${data.openImageLabel} ${index + 1}`} className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#F4F8FB] shadow-[0_6px_20px_rgba(6,58,91,0.08)]">
              <Image src={galleryImage.image} alt={galleryImage.imageAlt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 bg-[#063A5B]/0 transition-colors duration-300 group-hover:bg-[#063A5B]/15" />
            </button>
          ))}
        </div>
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020814]/95 p-4 sm:p-8" role="dialog" aria-modal="true" aria-label={activeImage.imageAlt}>
          <button type="button" onClick={() => setActiveIndex(null)} aria-label={data.closeLabel} className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-[#063A5B] shadow-lg transition-colors duration-300 hover:bg-[#FF6500] hover:text-white sm:right-8 sm:top-8"><FaTimes /></button>
          <button type="button" onClick={showPrevious} aria-label={data.previousLabel} className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#063A5B] shadow-lg transition-colors duration-300 hover:bg-[#FF6500] hover:text-white sm:left-8 sm:h-12 sm:w-12"><FaChevronLeft /></button>
          <div className="relative h-full max-h-[82vh] w-full max-w-6xl"><Image src={activeImage.image} alt={activeImage.imageAlt} fill priority sizes="100vw" className="object-contain" /></div>
          <button type="button" onClick={showNext} aria-label={data.nextLabel} className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#063A5B] shadow-lg transition-colors duration-300 hover:bg-[#FF6500] hover:text-white sm:right-8 sm:h-12 sm:w-12"><FaChevronRight /></button>
        </div>
      )}
    </section>
  );
};
