import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaArrowUp, FaCubes, FaPlane, FaPlay, FaShippingFast, FaWarehouse } from 'react-icons/fa';
import { ServiceCardProps, ServicesSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPlane':
      return <FaPlane />;
    case 'FaWarehouse':
      return <FaWarehouse />;
    case 'FaCubes':
      return <FaCubes />;
    case 'FaShippingFast':
      return <FaShippingFast />;
    default:
      return null;
  }
};

export const ServiceCard = ({ service, linkText }: ServiceCardProps) => {
  return (
    <article className="group grid grid-cols-[4rem_3rem_minmax(0,1fr)_3.25rem] items-center gap-3 border-b border-white/20 py-6 sm:gap-4 lg:grid-cols-[5rem_4rem_minmax(0,15rem)_1px_minmax(0,1fr)_4rem] lg:gap-6 lg:py-7">
      <span className="flex h-16 w-16 items-center justify-center text-5xl text-white lg:h-20 lg:w-20 lg:text-6xl">
        {renderIcon(service.icon)}
      </span>

      <FaPlay className="text-5xl text-[#FF6500] lg:text-6xl" />

      <h3 className="text-xl font-extrabold leading-tight text-white sm:text-2xl">
        {service.title}
      </h3>

      <span className="hidden h-16 w-px bg-white/35 lg:block" />

      <p className="col-span-4 mt-2 text-sm leading-6 text-white/90 sm:text-base lg:col-span-1 lg:col-start-5 lg:mt-0 lg:max-w-md">
        {service.description}
      </p>

      <Link
        href={service.url}
        aria-label={`${linkText}: ${service.title}`}
        className="col-start-4 row-start-1 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-lg text-white transition-all duration-300 hover:border-[#FF6500] hover:bg-[#FF6500] lg:col-start-6 lg:h-14 lg:w-14"
      >
        <FaArrowRight />
      </Link>
    </article>
  );
};

export const ServicesSection = ({ data }: ServicesSectionProps) => {
  if (!data) return null;

  return (
    <section className="relative w-full overflow-hidden bg-[#003B5C] py-8 lg:py-12">
      <div className="absolute inset-0 opacity-20">
        <Image
          src={data.backgroundImage}
          alt={data.backgroundImageAlt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#003B5C]/55 via-[#003B5C]/35 to-[#063A5B]/20" />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="mb-7 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:mb-9">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex items-center text-xs text-[#FF6500]">
                <FaPlay />
                <FaPlay className="-ml-1" />
              </span>
              <p className="text-sm font-semibold text-white">{data.subtitle}</p>
            </div>
            <h2 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {data.title1} <span className="text-[#FF6500]">{data.title2}</span>
            </h2>
          </div>

          <Link
            href={data.linkUrl}
            className="inline-flex w-fit items-center gap-6 rounded-full bg-[#FF6500] py-2 pl-7 pr-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,45,73,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FF8A3D]"
          >
            <span>{data.linkText}</span>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#FF6500]">
              <FaArrowUp className="rotate-45 text-sm" />
            </span>
          </Link>
        </div>

        <div className="border-t border-white/20">
          {data.services.map((service) => (
            <ServiceCard key={service.id} service={service} linkText={data.linkText} />
          ))}
        </div>
      </div>
    </section>
  );
};
