'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaPlane, FaQuoteRight, FaStar } from 'react-icons/fa';
import { TestimonialsSectionProps } from '@/types/templates.types';

export const TestimonialSection = ({ data }: TestimonialsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!data?.testimonials.length) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % data.testimonials.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [data]);

  if (!data?.testimonials.length) return null;

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + data.testimonials.length) % data.testimonials.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % data.testimonials.length);
  };

  return (
    <section className="relative overflow-hidden bg-[#EAF1F6] py-8 lg:py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F7FAFC] via-[#EAF1F6] to-[#DDE9F1]" />
      <Image
        src={data.backgroundImage}
        alt={data.backgroundImageAlt}
        fill
        sizes="100vw"
        className="object-cover object-center opacity-[0.12] brightness-0"
      />

      <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 items-end gap-8 px-4 md:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-8">
        <div className="min-w-0">
          <div className="mb-6 lg:mb-8">
            <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#64778B] sm:text-sm">
              <span className="h-0.5 w-6 bg-[var(--color-accent)]" aria-hidden="true" />
              <span>{data.subtitle}</span>
              <FaPlane className="-rotate-12 text-lg text-[var(--color-accent)]" aria-hidden="true" />
            </div>

            <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
              <span className="block">{data.title1}</span>
              <span className="block">{data.title2} <span className="text-[var(--color-accent)]">{data.highlightedTitle}</span></span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--color-text)] sm:text-base lg:text-lg lg:leading-7">
              {data.description}
            </p>
          </div>

          <div className="relative min-h-[22rem] sm:min-h-[19rem]">
            {data.testimonials.map((testimonial, index) => (
              <article
                key={testimonial.id}
                className={`absolute inset-0 flex flex-col rounded-xl border-l-[6px] border-[var(--color-accent)] bg-white p-5 shadow-[0_12px_35px_rgba(5,50,78,0.10)] transition-all duration-700 ease-in-out sm:p-7 ${activeIndex === index ? 'pointer-events-auto translate-x-0 opacity-100' : 'pointer-events-none translate-x-8 opacity-0'}`}
                aria-hidden={activeIndex !== index}
              >
                <span className="absolute right-5 top-0 flex h-16 w-16 -translate-y-2 items-center justify-center rounded-b-[2rem] bg-[var(--color-accent)] text-2xl text-white sm:right-8" aria-hidden="true">
                  <FaQuoteRight />
                </span>

                <div className="flex items-center gap-4 pr-16">
                  <div className="relative h-20 w-20 flex-none overflow-hidden rounded-full bg-[#E8EEF2]">
                    <Image src={testimonial.avatar} alt={testimonial.name} fill sizes="80px" className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[var(--color-heading)] sm:text-xl">{testimonial.name}</h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#718296]">{testimonial.location}</p>
                    <div className="mt-3 flex gap-1 text-[var(--color-accent)]" aria-hidden="true">
                      {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                        <FaStar key={`${testimonial.id}-star-${starIndex}`} />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-[var(--color-text)] sm:text-base">{testimonial.quote}</p>
              </article>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between gap-5">
            <button
              type="button"
              onClick={showPrevious}
              aria-label={data.previousLabel}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D3DEE6] bg-white text-[var(--color-heading)] transition-colors duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white"
            >
              <FaArrowLeft />
            </button>

            <div className="flex items-center gap-3">
              {data.testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`${data.slideLabel} ${index + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-[var(--color-accent)]' : 'bg-[#C7D2DD]'}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label={data.nextLabel}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D3DEE6] bg-white text-[var(--color-heading)] transition-colors duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl pt-8 lg:pt-0">
          <div className="absolute bottom-0 left-4 right-0 top-16 rounded-[2rem] bg-[var(--color-accent)] sm:left-10 lg:top-24" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-b-[2rem]">
            <Image src={data.rightImage} alt={data.rightImageAlt} fill sizes="(max-width: 1023px) 100vw, 45vw" className="object-cover object-center" />
          </div>
        </div>
      </div>
    </section>
  );
};
