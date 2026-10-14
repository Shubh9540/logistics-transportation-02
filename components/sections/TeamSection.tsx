import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TeamSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    case 'FaXTwitter': return <FaXTwitter />;
    default: return null;
  }
};

export const TeamSection = ({ data }: TeamSectionProps) => {
  if (!data?.members.length) return null;

  return (
    <section className="relative overflow-hidden bg-[#F4F8FB] py-8 lg:py-12">
      <div className="pointer-events-none absolute inset-0 bg-cover bg-top opacity-25" style={{ backgroundImage: `url(${data.backgroundImage})` }} role="img" aria-label={data.backgroundImageAlt} />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-4 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-0.5 w-8 bg-[#FF6500]" />
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#063A5B] sm:text-sm">{data.subtitle}</p>
          </div>
          <h2 className="text-3xl font-extrabold leading-tight text-[#063A5B] sm:text-4xl lg:text-5xl">{data.title1} <span className="text-[#FF6500]">{data.highlightedTitle}</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#738392] sm:text-base">{data.description}</p>
          <span className="mx-auto mt-5 block h-0.5 w-16 bg-[#FF6500]" />
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.members.map((member) => (
            <article key={member.id} className="relative mt-20 min-h-72 rounded-md border border-[#E5ECF1] bg-white px-5 pb-5 pt-52 shadow-[0_8px_24px_rgba(6,58,91,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute -top-16 left-5 h-64 w-[72%] overflow-hidden rounded-[50%] border-4 border-[#EDF3F7] bg-[#DDEAF2] shadow-sm">
                <Image src={member.image} alt={member.imageAlt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 38vw, 72vw" className="object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="absolute right-6 top-8 flex flex-col gap-5 text-sm text-[#063A5B]">
                {data.socialLinks.map((social) => (
                  <a key={social.id} href={social.url} aria-label={social.label} className="transition-colors duration-300 hover:text-[#FF6500]" target="_blank" rel="noreferrer">
                    {renderIcon(social.icon)}
                  </a>
                ))}
              </div>
              <div>
                <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#FF6500]"><span className="h-0.5 w-5 bg-[#FF6500]" />{member.role}</p>
                <h3 className="mt-2 text-xl font-extrabold text-[#063A5B]">{member.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
