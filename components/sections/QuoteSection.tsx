'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaBoxOpen, FaGlobeAmericas, FaTruck } from 'react-icons/fa';
import { QuoteSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaBoxOpen': return <FaBoxOpen />;
    case 'FaGlobeAmericas': return <FaGlobeAmericas />;
    case 'FaTruck': return <FaTruck />;
    default: return null;
  }
};

export const QuoteSection = ({ data }: QuoteSectionProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-4xl text-center lg:mb-10">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-0.5 w-10 bg-[#FF6500]" />
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#063A5B] sm:text-sm">{data.intro.eyebrow}</p>
          </div>
          <h1 className="text-3xl font-extrabold leading-tight text-[#063A5B] sm:text-4xl lg:text-5xl">
            {data.intro.title1} <span className="text-[#FF6500]">{data.intro.titleHighlight}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-[#728196] sm:text-base">{data.intro.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[560px] overflow-hidden rounded-xl lg:min-h-full">
            <Image src={data.visual.image} alt={data.visual.imageAlt} fill sizes="(max-width: 1023px) 100vw, 45vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#063A5B]/95 via-[#063A5B]/65 to-[#063A5B]/20" />
            <div className="relative z-10 p-6 text-white sm:p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-10 bg-[#FF6500]" />
                <p className="text-xs font-bold uppercase tracking-[0.12em] sm:text-sm">{data.visual.eyebrow}</p>
              </div>
              <h2 className="mt-4 max-w-md text-3xl font-extrabold leading-tight sm:text-4xl">
                {data.visual.title1} <span className="text-[#FF6500]">{data.visual.titleHighlight}</span>
              </h2>
              <div className="mt-8 space-y-6">
                {data.visual.benefits.map((benefit) => (
                  <div key={benefit.id} className="flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FF6500] text-2xl text-white">{renderIcon(benefit.icon)}</span>
                    <h3 className="max-w-[210px] text-lg font-bold leading-6">{benefit.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[#DCE7EF] bg-[#F5FAFD] p-5 shadow-[0_8px_30px_rgba(6,58,91,0.06)] sm:p-7 lg:p-9">
            <h2 className="text-3xl font-extrabold text-[#063A5B] sm:text-4xl">
              {data.form.title1} <span className="text-[#FF6500]">{data.form.titleHighlight}</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#728196] sm:text-base">{data.form.description}</p>

            <form
              className="mt-7"
              onChange={() => setSubmitted(false)}
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
                event.currentTarget.reset();
              }}
            >
              <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
                <label className="block text-sm font-bold text-[#063A5B]">
                  <span>{data.form.fullNameLabel}</span>
                  <input name="fullName" type="text" required placeholder={data.form.fullNamePlaceholder} className="mt-2 w-full rounded-lg border border-[#D7E2EA] bg-white px-4 py-3 text-sm font-normal text-[#063A5B] outline-none placeholder:text-[#8A99A8] focus:border-[#FF6500]" />
                </label>
                <label className="block text-sm font-bold text-[#063A5B]">
                  <span>{data.form.companyNameLabel}</span>
                  <input name="companyName" type="text" required placeholder={data.form.companyNamePlaceholder} className="mt-2 w-full rounded-lg border border-[#D7E2EA] bg-white px-4 py-3 text-sm font-normal text-[#063A5B] outline-none placeholder:text-[#8A99A8] focus:border-[#FF6500]" />
                </label>
                <label className="block text-sm font-bold text-[#063A5B]">
                  <span>{data.form.phoneLabel}</span>
                  <input name="phone" type="tel" required placeholder={data.form.phonePlaceholder} className="mt-2 w-full rounded-lg border border-[#D7E2EA] bg-white px-4 py-3 text-sm font-normal text-[#063A5B] outline-none placeholder:text-[#8A99A8] focus:border-[#FF6500]" />
                </label>
                <label className="block text-sm font-bold text-[#063A5B]">
                  <span>{data.form.emailLabel}</span>
                  <input name="email" type="email" required placeholder={data.form.emailPlaceholder} className="mt-2 w-full rounded-lg border border-[#D7E2EA] bg-white px-4 py-3 text-sm font-normal text-[#063A5B] outline-none placeholder:text-[#8A99A8] focus:border-[#FF6500]" />
                </label>
                <label className="block text-sm font-bold text-[#063A5B] sm:col-span-2">
                  <span>{data.form.transportationLabel}</span>
                  <select name="transportationType" required defaultValue="" className="mt-2 w-full rounded-lg border border-[#D7E2EA] bg-white px-4 py-3 text-sm font-normal text-[#063A5B] outline-none focus:border-[#FF6500]">
                    <option value="" disabled>{data.form.transportationPlaceholder}</option>
                    {data.form.transportationOptions.map((option) => <option key={option.id} value={option.value}>{option.label}</option>)}
                  </select>
                </label>
                <label className="block text-sm font-bold text-[#063A5B]">
                  <span>{data.form.pickupLabel}</span>
                  <input name="pickupLocation" type="text" required placeholder={data.form.pickupPlaceholder} className="mt-2 w-full rounded-lg border border-[#D7E2EA] bg-white px-4 py-3 text-sm font-normal text-[#063A5B] outline-none placeholder:text-[#8A99A8] focus:border-[#FF6500]" />
                </label>
                <label className="block text-sm font-bold text-[#063A5B]">
                  <span>{data.form.deliveryLabel}</span>
                  <input name="deliveryLocation" type="text" required placeholder={data.form.deliveryPlaceholder} className="mt-2 w-full rounded-lg border border-[#D7E2EA] bg-white px-4 py-3 text-sm font-normal text-[#063A5B] outline-none placeholder:text-[#8A99A8] focus:border-[#FF6500]" />
                </label>
                <label className="block text-sm font-bold text-[#063A5B]">
                  <span>{data.form.cargoLabel}</span>
                  <select name="cargoType" required defaultValue="" className="mt-2 w-full rounded-lg border border-[#D7E2EA] bg-white px-4 py-3 text-sm font-normal text-[#063A5B] outline-none focus:border-[#FF6500]">
                    <option value="" disabled>{data.form.cargoPlaceholder}</option>
                    {data.form.cargoOptions.map((option) => <option key={option.id} value={option.value}>{option.label}</option>)}
                  </select>
                </label>
                <label className="block text-sm font-bold text-[#063A5B]">
                  <span>{data.form.weightLabel}</span>
                  <input name="weight" type="text" required placeholder={data.form.weightPlaceholder} className="mt-2 w-full rounded-lg border border-[#D7E2EA] bg-white px-4 py-3 text-sm font-normal text-[#063A5B] outline-none placeholder:text-[#8A99A8] focus:border-[#FF6500]" />
                </label>
                <label className="block text-sm font-bold text-[#063A5B]">
                  <span>{data.form.dateLabel}</span>
                  <input name="preferredDate" type="date" required className="mt-2 w-full rounded-lg border border-[#D7E2EA] bg-white px-4 py-3 text-sm font-normal text-[#063A5B] outline-none focus:border-[#FF6500]" />
                </label>
                <label className="block text-sm font-bold text-[#063A5B]">
                  <span>{data.form.requirementsLabel}</span>
                  <input name="requirements" type="text" placeholder={data.form.requirementsPlaceholder} className="mt-2 w-full rounded-lg border border-[#D7E2EA] bg-white px-4 py-3 text-sm font-normal text-[#063A5B] outline-none placeholder:text-[#8A99A8] focus:border-[#FF6500]" />
                </label>
                <label className="block text-sm font-bold text-[#063A5B] sm:col-span-2">
                  <span>{data.form.messageLabel}</span>
                  <textarea name="message" rows={4} placeholder={data.form.messagePlaceholder} className="mt-2 w-full resize-none rounded-lg border border-[#D7E2EA] bg-white px-4 py-3 text-sm font-normal text-[#063A5B] outline-none placeholder:text-[#8A99A8] focus:border-[#FF6500]" />
                </label>
              </div>

              <button type="submit" className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#FF6500] px-7 py-3 text-base font-bold text-white transition-colors hover:bg-[#e85c00]">
                <span>{data.form.buttonText}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#FF6500]"><FaArrowRight /></span>
              </button>
              {submitted && <p role="status" className="mt-4 rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">{data.form.successMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
