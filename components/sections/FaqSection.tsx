'use client';

import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { FaqSectionProps } from '@/types/templates.types';

export const FaqSection = ({ data }: FaqSectionProps) => {
  const [activeId, setActiveId] = useState(data?.items[0]?.id ?? null);

  if (!data?.items.length) return null;

  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3"><span className="h-0.5 w-8 bg-[#FF6500]" /><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#063A5B] sm:text-sm">{data.subtitle}</p></div>
          <h2 className="text-3xl font-extrabold leading-none text-[#063A5B] sm:text-4xl lg:text-5xl"><span className="block">{data.title1}</span><span className="text-[#FF6500]">{data.highlightedTitle}</span></h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#738392] sm:text-base">{data.description}</p>
        </div>

        <div className="space-y-3">
          {data.items.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <article key={item.id} className="overflow-hidden rounded-xl border border-[#DCE6ED] bg-white shadow-[0_5px_18px_rgba(6,58,91,0.06)]">
                <button type="button" onClick={() => setActiveId(isOpen ? null : item.id)} aria-expanded={isOpen} aria-controls={`${item.id}-answer`} aria-label={isOpen ? `${data.collapseLabel}: ${item.question}` : `${data.expandLabel}: ${item.question}`} className={`flex w-full items-center gap-4 px-4 py-4 text-left transition-colors duration-300 sm:px-5 ${isOpen ? 'bg-[#063A5B] text-white' : 'bg-white text-[#063A5B] hover:bg-[#F4F8FB]'}`}>
                  <span className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${isOpen ? 'bg-[#FF6500] text-white' : 'bg-[#EAF4FB] text-[#063A5B]'}`}>{item.number}</span>
                  <span className="flex-1 text-base font-extrabold leading-6 sm:text-lg">{item.question}</span>
                  <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 text-sm ${isOpen ? 'border-white bg-[#FF6500] text-white' : 'border-[#FF6500] text-[#FF6500]'}`}>{isOpen ? <FaMinus /> : <FaPlus />}</span>
                </button>
                <div id={`${item.id}-answer`} className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="bg-[#EEF7FD] px-5 py-5 text-sm leading-7 text-[#657687] sm:px-24 sm:py-6 sm:text-base">{item.answer}</p>
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
