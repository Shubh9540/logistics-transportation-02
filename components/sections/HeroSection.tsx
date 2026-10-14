'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { HeroButtonData, HeroSectionProps } from '@/types/templates.types';

const renderButtonIcon = (button: HeroButtonData) => {
  switch (button.icon) {
    case 'FaArrowRight':
      return <FaArrowRight className="-rotate-45 text-xs" />;
    default:
      return null;
  }
};

export const HeroSection = ({ data }: HeroSectionProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = data?.slides || [];
  const autoplayDelay = data?.autoplayDelay;

  useEffect(() => {
    if (slides.length <= 1 || !autoplayDelay) return;

    const timer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, autoplayDelay);

    return () => window.clearInterval(timer);
  }, [autoplayDelay, slides.length]);

  if (!data || slides.length === 0) return null;

  const currentSlide = slides[activeSlide];

  return (
    <section className="w-full bg-white p-3 sm:p-4">
      <div className="relative min-h-[42rem] overflow-hidden rounded-2xl bg-[#002D49] sm:min-h-[44rem] lg:min-h-[46rem]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-out motion-reduce:transition-none ${activeSlide === index ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
          >
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-[#002D49]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002D49]/95 via-[#002D49]/20 to-[#002D49]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002D49]/55 via-transparent to-transparent" />

        <div className="relative z-20 mx-auto flex min-h-[42rem] w-full max-w-[1280px] flex-col justify-end px-5 pb-20 pt-36 sm:min-h-[44rem] sm:px-8 sm:pb-24 lg:min-h-[46rem] lg:px-10 lg:pb-14">
          <div key={currentSlide.id} className="grid animate-fade-in-up items-end gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
            <div>
              <p className="inline-flex rounded-full border border-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white sm:text-xs">
                {currentSlide.eyebrow}
              </p>
              <h1 className="mt-5 text-4xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">{currentSlide.titleLine1}</span>
                <span className="mt-2 block text-[#FF6500]">{currentSlide.highlightedTitle}</span>
              </h1>
            </div>

            <div className="max-w-md lg:pb-2">
              <p className="text-sm leading-6 text-white sm:text-base sm:leading-7">
                {currentSlide.description}
              </p>
              <Link
                href={currentSlide.primaryButton.url}
                className="mt-6 inline-flex items-center gap-5 rounded-full bg-white/20 py-2 pl-6 pr-2 text-sm font-medium text-white shadow-[0_12px_28px_rgba(0,45,73,0.22)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/30"
              >
                <span>{currentSlide.primaryButton.text}</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#063A5B]">
                  {renderButtonIcon(currentSlide.primaryButton)}
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 rounded-full bg-white px-5 py-3 shadow-lg md:bottom-auto md:left-auto md:right-0 md:top-1/2 md:-translate-x-0 md:-translate-y-1/2 md:flex-col md:rounded-l-[2rem] md:rounded-r-none md:px-4 md:py-8">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`${data.slideNavigationLabel} ${index + 1}`}
              aria-current={activeSlide === index}
              onClick={() => setActiveSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${activeSlide === index ? 'scale-110 bg-[#FF6500]' : 'bg-[#063A5B] hover:bg-[#FF8A3D]'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
