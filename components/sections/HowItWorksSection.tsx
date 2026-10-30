'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaBoxOpen, FaHandHolding, FaShippingFast, FaWarehouse } from 'react-icons/fa';
import { HowItWorksSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaBoxOpen':
      return <FaBoxOpen />;
    case 'FaShippingFast':
      return <FaShippingFast />;
    case 'FaWarehouse':
      return <FaWarehouse />;
    case 'FaHandHolding':
      return <FaHandHolding />;
    default:
      return null;
  }
};

export const HowItWorksSection = ({ data }: HowItWorksSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!data || data.steps.length === 0) return null;

  return (
    <section className="overflow-hidden bg-white pt-4 pb-8 lg:pt-6 lg:pb-12">
      <div className="mx-auto max-w-[1320px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center lg:mb-10">
          <div className="mb-3 flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            <span className="h-0 w-0 border-y-[7px] border-l-[12px] border-y-transparent border-l-[var(--color-accent)]" aria-hidden="true" />
            <span>{data.subtitle}</span>
            <span className="h-0 w-0 border-y-[7px] border-r-[12px] border-y-transparent border-r-[var(--color-accent)]" aria-hidden="true" />
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[var(--color-heading)] md:text-4xl lg:text-5xl">
            <span className="block">{data.title1}</span>
            <span className="block text-[var(--color-accent)]">{data.highlightedTitle}</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[var(--color-text)] md:text-base">
            {data.description}
          </p>
        </div>

        <div className="hidden min-h-[25rem] gap-3 lg:flex">
          <div className="relative w-[34%] flex-none overflow-hidden rounded-2xl bg-[var(--color-bg-alt)]">
            {data.steps.map((step, index) => (
              <Image
                key={step.id}
                src={step.image}
                alt={step.imageAlt}
                fill
                sizes="34vw"
                className={`object-cover transition-all duration-700 ease-in-out ${activeIndex === index ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
              />
            ))}
          </div>

          <div className="flex min-w-0 flex-1 gap-3">
            {data.steps.map((step, index) => {
              const isActive = activeIndex === index;

              return (
                <article
                  key={step.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`relative min-w-0 overflow-hidden rounded-2xl bg-[#F4F8FB] shadow-[0_10px_35px_rgba(5,16,36,0.08)] transition-[width] duration-700 ease-in-out ${isActive ? 'w-[55%]' : 'w-[15%]'}`}
                >
                  <div className={`absolute inset-0 flex flex-col p-6 transition-all duration-500 ${isActive ? 'translate-y-0 opacity-100 delay-150' : 'pointer-events-none translate-y-4 opacity-0'}`}>
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-[#FFEBDD] text-base font-bold text-[var(--color-heading)]">
                        {step.number}
                      </span>
                      <span className="text-4xl text-[var(--color-heading)]" aria-hidden="true">
                        {renderIcon(step.icon)}
                      </span>
                    </div>

                    <div className="mt-auto">
                      <h3 className="text-2xl font-bold leading-tight text-[var(--color-heading)] xl:text-3xl">{step.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-[var(--color-text)] xl:text-base">{step.description}</p>
                    </div>
                  </div>

                  {!isActive && (
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className="absolute inset-0 flex w-full flex-col items-center gap-5 px-3 py-6 text-[var(--color-heading)]"
                      aria-expanded="false"
                    >
                      <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-[#FFEBDD] text-base font-bold">
                        {step.number}
                      </span>
                      <span className="text-4xl" aria-hidden="true">{renderIcon(step.icon)}</span>
                      <span className="mt-auto mb-auto text-lg font-bold leading-tight [writing-mode:vertical-rl] rotate-180">{step.title}</span>
                    </button>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        <div className="space-y-3 lg:hidden">
          {data.steps.map((step, index) => {
            const isActive = activeIndex === index;

            return (
              <article key={step.id} className="overflow-hidden rounded-2xl bg-[#F4F8FB] shadow-[0_8px_24px_rgba(5,16,36,0.07)]">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="flex w-full items-center gap-4 p-4 text-left text-[var(--color-heading)]"
                  aria-expanded={isActive}
                >
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[#FFEBDD] text-sm font-bold">{step.number}</span>
                  <span className="text-3xl" aria-hidden="true">{renderIcon(step.icon)}</span>
                  <span className="text-base font-bold sm:text-lg">{step.title}</span>
                </button>

                <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="px-4 pb-5">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                        <Image src={step.image} alt={step.imageAlt} fill sizes="(max-width: 1023px) 100vw" className="object-cover" />
                      </div>
                      <p className="mt-4 text-sm leading-6 text-[var(--color-text)]">{step.description}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
