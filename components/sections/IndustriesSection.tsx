import React from 'react';
import Image from 'next/image';
import {
  FaBriefcaseMedical,
  FaBuilding,
  FaCar,
  FaCouch,
  FaFlask,
  FaIndustry,
  FaLeaf,
  FaMicrochip,
  FaOilCan,
  FaPlane,
  FaServer,
  FaShoppingBasket,
  FaShoppingCart,
  FaThLarge,
  FaTshirt,
  FaUtensils,
} from 'react-icons/fa';
import { IndustriesSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaBriefcaseMedical': return <FaBriefcaseMedical />;
    case 'FaBuilding': return <FaBuilding />;
    case 'FaCar': return <FaCar />;
    case 'FaCouch': return <FaCouch />;
    case 'FaFlask': return <FaFlask />;
    case 'FaIndustry': return <FaIndustry />;
    case 'FaLeaf': return <FaLeaf />;
    case 'FaMicrochip': return <FaMicrochip />;
    case 'FaOilCan': return <FaOilCan />;
    case 'FaPlane': return <FaPlane />;
    case 'FaServer': return <FaServer />;
    case 'FaShoppingBasket': return <FaShoppingBasket />;
    case 'FaShoppingCart': return <FaShoppingCart />;
    case 'FaThLarge': return <FaThLarge />;
    case 'FaTshirt': return <FaTshirt />;
    case 'FaUtensils': return <FaUtensils />;
    default: return null;
  }
};

export const IndustriesSection = ({ data }: IndustriesSectionProps) => {
  if (!data?.industries.length) return null;

  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-0.5 w-10 bg-[#FF6500]" />
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#063A5B] sm:text-sm">{data.subtitle}</p>
          </div>
          <h2 className="text-3xl font-extrabold leading-tight text-[#063A5B] sm:text-4xl lg:text-5xl">
            <span className="block">{data.title1}</span>
            <span>{data.title2} </span><span className="text-[#FF6500]">{data.highlightedTitle}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#738392] sm:text-base">{data.description}</p>
          <span className="mx-auto mt-5 block h-0.5 w-16 bg-[#FF6500]" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.industries.map((industry) => (
            <article key={industry.id} className="group overflow-hidden rounded-xl border border-[#E1E9EF] bg-white shadow-[0_8px_24px_rgba(6,58,91,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-44 overflow-hidden">
                <Image src={industry.image} alt={industry.imageAlt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="relative min-h-48 px-5 pb-5 pt-10">
                <span className="absolute -top-7 left-5 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#FF6500] text-2xl text-white shadow-md">
                  {renderIcon(industry.icon)}
                </span>
                <h3 className="text-lg font-extrabold leading-tight text-[#063A5B]">{industry.title}</h3>
                <p className="mt-3 text-sm leading-5 text-[#738392]">{industry.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
