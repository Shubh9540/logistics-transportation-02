'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaPlay, FaTimes } from 'react-icons/fa';
import { VideoGalleryItem, VideoGalleryProps } from '@/types/templates.types';

export const VideoGallery = ({ data }: VideoGalleryProps) => {
  const [activeVideo, setActiveVideo] = useState<VideoGalleryItem | null>(null);

  useEffect(() => {
    if (!activeVideo) return undefined;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveVideo(null);
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeVideo]);

  if (!data?.videos.length) return null;

  return (
    <section className="relative overflow-hidden bg-[#F1F7FB] py-8 lg:py-12">
      <div className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${data.backgroundImage})` }} role="img" aria-label={data.backgroundImageAlt} />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3"><span className="h-0.5 w-8 bg-[#FF6500]" /><p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#063A5B] sm:text-sm">{data.subtitle}</p></div>
          <h2 className="text-3xl font-extrabold leading-tight text-[#063A5B] sm:text-4xl lg:text-5xl">{data.title1} <span className="text-[#FF6500]">{data.highlightedTitle}</span></h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#738392] sm:text-base">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.videos.map((video) => (
            <button key={video.id} type="button" onClick={() => setActiveVideo(video)} aria-label={`${data.playLabel} ${video.title}`} className="group relative aspect-video overflow-hidden rounded-lg bg-[#063A5B] text-left shadow-[0_8px_24px_rgba(6,58,91,0.12)]">
              <Image src={video.thumbnail} alt={video.thumbnailAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 bg-gradient-to-t from-[#031F3A]/95 via-[#031F3A]/10 to-transparent" />
              <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#063A5B]/55 text-lg text-white transition-colors duration-300 group-hover:bg-[#FF6500]"><FaPlay className="ml-1" /></span>
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4 text-sm font-bold text-white"><span>{video.title}</span><span>{video.duration}</span></span>
            </button>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-[#020814]/95 p-4 sm:p-8" role="dialog" aria-modal="true" aria-label={activeVideo.title}>
          <button type="button" onClick={() => setActiveVideo(null)} aria-label={data.closeLabel} className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-[#063A5B] shadow-lg transition-colors duration-300 hover:bg-[#FF6500] hover:text-white sm:right-8 sm:top-8"><FaTimes /></button>
          <div className="aspect-video w-full max-w-5xl overflow-hidden rounded-xl bg-black shadow-2xl">
            <iframe src={activeVideo.videoUrl} title={activeVideo.title} className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
        </div>
      )}
    </section>
  );
};
