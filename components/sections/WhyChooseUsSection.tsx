'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaAward, FaGlobeAmericas, FaMapMarkedAlt, FaPlane, FaPlay, FaShieldAlt, FaTimes } from 'react-icons/fa';
import { WhyChooseUsSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaGlobeAmericas':
      return <FaGlobeAmericas />;
    case 'FaShieldAlt':
      return <FaShieldAlt />;
    case 'FaAward':
      return <FaAward />;
    case 'FaMapMarkedAlt':
      return <FaMapMarkedAlt />;
    default:
      return null;
  }
};

export const WhyChooseUsSection = ({ data }: WhyChooseUsSectionProps) => {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (!videoOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setVideoOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [videoOpen]);

  if (!data) return null;

  const videoEmbedUrl = `${data.videoUrl.replace('youtu.be/', 'www.youtube.com/embed/')}?autoplay=1`;

  return (
    <section className="w-full bg-white pt-8 pb-2 lg:pt-12 lg:pb-4">
      <div className="w-full">
        <div className="relative w-full overflow-hidden bg-[var(--color-primary-dark)] text-white xl:min-h-[48rem]">
          <div className="absolute inset-y-0 left-0 w-3/5 opacity-10">
            <Image src={data.patternImage} alt={data.patternImageAlt} fill sizes="60vw" className="object-cover brightness-0 invert" />
          </div>

          <div className="absolute inset-y-0 right-0 hidden w-[52%] bg-[var(--color-accent)] [clip-path:polygon(6%_0,100%_0,100%_100%,16%_100%)] xl:block" aria-hidden="true" />
          <div className="absolute inset-y-0 right-0 hidden w-[52%] [clip-path:polygon(7%_0,100%_0,100%_100%,17%_100%)] xl:block">
            <Image src={data.imageMain} alt={data.imageAlt} fill sizes="48vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)]/35 to-transparent" />
          </div>

          <div className="relative z-10 p-6 sm:p-8 lg:p-10 xl:w-[51%] xl:pr-16">
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-white/90 sm:text-sm">
              <span className="h-0.5 w-7 bg-[var(--color-accent)]" aria-hidden="true" />
              <span>{data.subtitle}</span>
              <FaPlane className="-rotate-12 text-[var(--color-accent)]" aria-hidden="true" />
            </div>

            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              <span className="block">{data.title1}</span>
              <span className="inline-block border-b-2 border-[var(--color-accent)] pb-1 text-[var(--color-accent)]">{data.title2}</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">{data.description}</p>

            <div className="mt-7 border-l-4 border-[var(--color-accent)] pl-4">
              <div className="flex -space-x-2">
                {data.clientAvatars.map((avatar) => (
                  <div key={avatar.id} className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-white">
                    <Image src={avatar.image} alt={avatar.imageAlt} fill sizes="40px" className="object-cover" />
                  </div>
                ))}
              </div>
              <p className="mt-3 text-4xl font-extrabold sm:text-5xl">{data.clientCount}</p>
              <p className="mt-1 text-xl font-bold sm:text-2xl">{data.clientLabel}</p>
            </div>
          </div>

          <div className="relative aspect-[16/10] xl:hidden">
            <Image src={data.imageMain} alt={data.imageAlt} fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/45 to-transparent" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 260 280"
              className="absolute right-[8%] top-[8%] h-auto w-36 text-white"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M 20 260 C 85 260, 75 180, 95 120 C 115 60, 165 32, 215 36"
                className="stroke-current"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="12 10"
              />
              <polygon points="250,42 208,16 200,54" className="fill-current" />
            </svg>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              aria-label={data.videoLabel}
              className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-8 border-white/50 bg-[var(--color-accent)] text-2xl text-white transition-transform duration-300 hover:-translate-y-[55%] hover:scale-105"
            >
              <FaPlay className="ml-1" aria-hidden="true" />
            </button>
          </div>

          <div className="absolute bottom-[42px] left-[10%] z-10 hidden xl:block" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 600 265"
              className="h-auto w-[380px] text-[var(--color-accent)]"
              fill="none"
            >
              <g transform="translate(112, 72) rotate(-42) translate(-50, -50)">
                <path
                  d="M50 5 C56 5, 60 11, 60 19 L60 36 L70 42 L70 37 C70 35, 75 35, 75 37 L75 45 L96 58 L92 66 L60 56 L60 76 L75 86 L72 93 L50 86 L28 93 L25 86 L40 76 L40 56 L8 66 L4 58 L25 45 L25 37 C25 35, 30 35, 30 37 L30 42 L40 36 L40 19 C40 11, 44 5, 50 5 Z"
                  className="fill-current"
                />
              </g>
              <path
                d="M 173 119 C 225 162, 290 198, 345 190 C 395 182, 405 118, 365 115 C 325 112, 335 185, 395 205 C 455 225, 505 180, 495 115 C 485 50, 405 42, 408 98 C 411 154, 495 212, 598 218"
                className="stroke-current"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeDasharray="13 14"
              />
            </svg>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 260 280"
            className="absolute right-[10%] top-[8%] z-10 hidden h-auto w-48 text-white xl:block"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 20 260 C 85 260, 75 180, 95 120 C 115 60, 165 32, 215 36"
              className="stroke-current"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="12 10"
            />
            <polygon points="250,42 208,16 200,54" className="fill-current" />
          </svg>

          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            aria-label={data.videoLabel}
            className="absolute right-[16%] top-[31%] z-10 hidden h-24 w-24 items-center justify-center rounded-full border-8 border-white/50 bg-[var(--color-accent)] text-3xl text-white transition-transform duration-300 hover:scale-105 xl:flex"
          >
            <FaPlay className="ml-1" aria-hidden="true" />
          </button>

          <div className="relative z-20 grid grid-cols-1 gap-3 p-6 sm:grid-cols-2 sm:p-8 lg:p-10 xl:absolute xl:bottom-16 xl:left-[38%] xl:right-[10%] xl:p-0">
            {data.features.map((feature) => (
              <article key={feature.id} className="flex min-h-32 gap-4 rounded-md bg-white p-5 text-[var(--color-heading)] shadow-[0_10px_30px_rgba(0,20,35,0.16)]">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[#FFF0E6] text-2xl text-[var(--color-accent)]">
                  {renderIcon(feature.icon)}
                </span>
                <div className="border-l-2 border-[var(--color-accent)] pl-4">
                  <h3 className="text-base font-extrabold leading-5">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-5 text-[var(--color-text)]">{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {videoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-label={data.videoLabel}>
          <button type="button" onClick={() => setVideoOpen(false)} aria-label={data.closeVideoLabel} className="absolute inset-0 bg-[#001A2B]/90 backdrop-blur-sm" />
          <div className="relative z-10 w-full max-w-5xl rounded-2xl bg-[var(--color-primary-dark)] p-3 shadow-2xl sm:p-4">
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              aria-label={data.closeVideoLabel}
              className="absolute right-2 top-2 z-20 flex h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-[var(--color-accent)] text-xl text-white shadow-lg transition-transform duration-300 hover:scale-105 sm:right-0 sm:top-0"
            >
              <FaTimes aria-hidden="true" />
            </button>
            <div className="aspect-video overflow-hidden rounded-xl bg-black">
              <iframe
                src={videoEmbedUrl}
                title={data.videoLabel}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
