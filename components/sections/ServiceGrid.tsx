import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaAnchor, FaArrowRight, FaClipboardCheck, FaGlobeAmericas, FaTrain, FaTruck, FaWarehouse } from 'react-icons/fa';
import { ServiceGridProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaAnchor': return <FaAnchor />;
    case 'FaClipboardCheck': return <FaClipboardCheck />;
    case 'FaGlobeAmericas': return <FaGlobeAmericas />;
    case 'FaTrain': return <FaTrain />;
    case 'FaTruck': return <FaTruck />;
    case 'FaWarehouse': return <FaWarehouse />;
    default: return null;
  }
};

export const ServiceGrid = ({ data }: ServiceGridProps) => {
  if (!data?.services.length) return null;

  return (
    <section className="relative w-full overflow-hidden bg-[#F4F8FB] py-8 lg:py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-cover bg-center opacity-35" style={{ backgroundImage: `url(${data.backgroundImage})` }} />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-0.5 w-10 bg-[#FF6500]" />
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#063A5B] sm:text-sm">{data.subtitle}</p>
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#063A5B] sm:text-4xl lg:text-5xl">
            {data.title1} <span className="text-[#FF6500]">{data.highlightedTitle}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#738392] sm:text-base">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.services.map((service) => (
            <article key={service.id} className="group relative flex flex-col overflow-hidden rounded-md border border-[#DCE6ED] bg-white shadow-[0_8px_24px_rgba(6,58,91,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-48 flex-none overflow-hidden sm:h-52">
                <Image src={service.image} alt={service.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="relative flex flex-1 flex-col px-5 pb-6 pt-6 sm:px-6">
                <span className="mb-3 block h-0.5 w-10 bg-[#FF6500]" />
                <h3 className="pr-12 text-xl font-extrabold leading-tight text-[#063A5B]">
                  {service.title} {service.highlightedTitle && <span className="text-[#FF6500]">{service.highlightedTitle}</span>}
                </h3>
                <p className="mt-3 pr-8 text-sm leading-6 text-[#738392]">{service.description}</p>
                <div className="mt-auto pt-5">
                  <Link href={service.url} className="inline-flex items-center gap-4 rounded-full bg-[#FF6500] py-2 pl-5 pr-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#063A5B]">
                    <span>{data.linkText}</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#FF6500]"><FaArrowRight /></span>
                  </Link>
                </div>
                <span className="pointer-events-none absolute bottom-20 right-0 h-7 w-7 bg-[#FF6500] [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
                <span className="pointer-events-none absolute bottom-0 right-0 flex h-20 w-20 items-center justify-center bg-[#063A5B] text-3xl text-white [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%,0_30%)]">
                  {renderIcon(service.icon)}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
