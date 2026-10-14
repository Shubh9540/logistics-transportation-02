import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowRight,
  FaBuilding,
  FaChartLine,
  FaCity,
  FaHandshake,
  FaHome,
  FaKey,
  FaMapMarkerAlt,
  FaTasks,
  FaUserTie,
} from 'react-icons/fa';
import { ServiceGridProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaBuilding': return <FaBuilding />;
    case 'FaChartLine': return <FaChartLine />;
    case 'FaCity': return <FaCity />;
    case 'FaHandshake': return <FaHandshake />;
    case 'FaHome': return <FaHome />;
    case 'FaKey': return <FaKey />;
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
    case 'FaTasks': return <FaTasks />;
    case 'FaUserTie': return <FaUserTie />;
    default: return null;
  }
};

export const ServiceGrid = ({ data }: ServiceGridProps) => {
  if (!data?.services.length) return null;

  return (
    <section className="w-full bg-[#F4F8FB] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-[#FF6500]" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6500] sm:text-sm">{data.subtitle}</p>
            <span className="h-px w-8 bg-[#FF6500]" />
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#063A5B] sm:text-4xl lg:text-5xl">
            {data.title1} <span className="text-[#FF6500]">{data.highlightedTitle}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#738392] sm:text-base">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.services.map((service) => (
            <article key={service.id} className="group overflow-hidden rounded-lg border border-[#DCE6ED] bg-white shadow-[0_8px_24px_rgba(6,58,91,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-44 overflow-hidden sm:h-48">
                <Image src={service.image} alt={service.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="relative px-5 pb-5 pt-7">
                <div className="absolute -top-9 left-1/2 flex h-[72px] w-[72px] -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#FF6500] bg-[#063A5B] text-3xl text-[#FF8A3D] shadow-lg">
                  {renderIcon(service.icon)}
                </div>
                <h3 className="mt-2 text-xl font-extrabold text-[#063A5B]">
                  {service.title} <span className="text-[#FF6500]">{service.highlightedTitle}</span>
                </h3>
                <p className="mt-2 min-h-16 text-sm leading-5 text-[#738392]">{service.description}</p>
                <Link href={service.url} className="mt-3 inline-flex items-center gap-3 text-sm font-bold text-[#FF6500] transition-all duration-300 hover:gap-4">
                  <span>{data.linkText}</span>
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
