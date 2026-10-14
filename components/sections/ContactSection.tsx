'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { ContactSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaEnvelope': return <FaEnvelope />;
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
    case 'FaPhoneAlt': return <FaPhoneAlt />;
    default: return null;
  }
};

export const ContactSection = ({ data }: ContactSectionProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  return (
    <section className="w-full bg-white py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-4xl text-center lg:mb-10">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-0.5 w-10 bg-[#FF6500]" />
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#063A5B] sm:text-sm">{data.intro.eyebrow}</p>
          </div>
          <h1 className="text-3xl font-extrabold leading-tight text-[#063A5B] sm:text-4xl lg:text-5xl">
            {data.intro.title1} <span className="text-[#FF6500]">{data.intro.titleHighlight}</span> {data.intro.title2}
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.45fr_0.95fr]">
          <div className="rounded-lg bg-[#f2f9fd] p-5 sm:p-7 lg:p-9">
            <h2 className="text-3xl font-extrabold text-[#063A5B] sm:text-4xl">
              {data.form.title1} <span className="text-[#FF6500]">{data.form.titleHighlight}</span>
            </h2>

            <form
              className="mt-7 space-y-5"
              onChange={() => setSubmitted(false)}
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
                event.currentTarget.reset();
              }}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input name="firstName" type="text" required placeholder={data.form.firstNamePlaceholder} className="w-full rounded-lg border border-white bg-white px-5 py-4 text-sm text-[#063A5B] outline-none placeholder:text-[#7b8da2] focus:border-[#FF6500]" />
                <input name="lastName" type="text" required placeholder={data.form.lastNamePlaceholder} className="w-full rounded-lg border border-white bg-white px-5 py-4 text-sm text-[#063A5B] outline-none placeholder:text-[#7b8da2] focus:border-[#FF6500]" />
                <input name="phone" type="tel" required placeholder={data.form.phonePlaceholder} className="w-full rounded-lg border border-white bg-white px-5 py-4 text-sm text-[#063A5B] outline-none placeholder:text-[#7b8da2] focus:border-[#FF6500]" />
                <input name="email" type="email" required placeholder={data.form.emailPlaceholder} className="w-full rounded-lg border border-white bg-white px-5 py-4 text-sm text-[#063A5B] outline-none placeholder:text-[#7b8da2] focus:border-[#FF6500]" />
              </div>

              <textarea name="message" required rows={6} placeholder={data.form.messagePlaceholder} className="w-full resize-none rounded-lg border border-white bg-white px-5 py-4 text-sm text-[#063A5B] outline-none placeholder:text-[#7b8da2] focus:border-[#FF6500]" />

              <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-[#64748b]">
                <input name="consent" type="checkbox" className="mt-1 h-4 w-4 rounded border-[#cbd5e1] accent-[#FF6500]" />
                <span>{data.form.consentLabel}</span>
              </label>

              <button type="submit" className="flex w-full items-center justify-center gap-3 rounded-full bg-[#FF6500] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#e85c00]">
                <span>{data.form.buttonText}</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#FF6500]"><FaArrowRight /></span>
              </button>

              {submitted && <p role="status" className="rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">{data.form.successMessage}</p>}
            </form>
          </div>

          <div className="overflow-hidden rounded-lg bg-[#063A5B] text-white">
            <div className="relative h-56 sm:h-72 lg:h-[310px]">
              <Image src={data.contactPanel.image} alt={data.contactPanel.imageAlt} fill sizes="(max-width: 1023px) 100vw, 40vw" className="object-cover" />
            </div>
            <div className="relative overflow-hidden p-6 sm:p-8">
              <div className="absolute -right-12 top-0 h-40 w-40 rounded-full bg-[#0a5279]/50" />
              <h2 className="relative text-2xl font-extrabold leading-tight sm:text-3xl">
                {data.contactPanel.title1} <span className="text-[#FF6500]">{data.contactPanel.titleHighlight}</span>
              </h2>
              <div className="relative mt-6 space-y-5">
                {data.contactPanel.items.map((item) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FF6500] text-lg text-white">{renderIcon(item.icon)}</span>
                    <div className="min-w-0 pt-1">
                      <p className="text-sm font-bold text-white">{item.title}</p>
                      <a href={item.url} className="mt-1 block break-words text-sm leading-5 text-white/85 transition-colors hover:text-[#FF6500]">
                        {item.lines.map((line) => <span key={line.id} className="block">{line.text}</span>)}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
          {data.contactPanel.items.map((item) => (
            <a key={`card-${item.id}`} href={item.url} className="flex items-start gap-4 rounded-lg bg-[#f2f9fd] p-5 transition-transform hover:-translate-y-1 sm:p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FF6500] text-lg text-white">{renderIcon(item.icon)}</span>
              <div className="min-w-0">
                <h3 className="font-extrabold text-[#063A5B]">{item.title}</h3>
                <div className="mt-1 break-words text-sm leading-5 text-[#64748b]">{item.lines.map((line) => <p key={line.id}>{line.text}</p>)}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="mx-auto mb-8 mt-10 max-w-4xl text-center lg:mt-12">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-0.5 w-10 bg-[#FF6500]" />
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#063A5B] sm:text-sm">{data.location.eyebrow}</p>
          </div>
          <h2 className="text-3xl font-extrabold leading-tight text-[#063A5B] sm:text-4xl lg:text-5xl">
            {data.location.title1} <span className="text-[#FF6500]">{data.location.titleHighlight}</span>
          </h2>
        </div>

        <div className="overflow-hidden rounded-lg">
          <iframe src={data.location.mapUrl} title={data.location.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full border-0 sm:h-96 lg:h-[460px]" />
        </div>
      </div>
    </section>
  );
};
