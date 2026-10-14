import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowUp, FaHandHolding, FaHeadset } from 'react-icons/fa';
import { AboutUsSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaHandHolding':
      return <FaHandHolding />;
    case 'FaHeadset':
      return <FaHeadset />;
    default:
      return null;
  }
};

export const AboutUsSection = ({ data, hideButton = false }: AboutUsSectionProps) => {
  if (!data) return null;

  return (
    <section className="w-full bg-white py-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-stretch gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="relative h-[28rem] overflow-hidden rounded-xl sm:h-[36rem] lg:h-auto lg:min-h-[39rem]">
          <Image
            src={data.imageMain}
            alt={data.imageMainAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[#DCE6ED] bg-white px-4 py-2 shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF6500]" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#063A5B]">
              {data.subtitle}
            </p>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#063A5B] sm:text-4xl xl:text-5xl">
            <span className="block">{data.titleLine1}</span>
            <span className="block text-[#FF6500]">{data.highlightedTitle}</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#738392] sm:text-base">
            {data.description}
          </p>

          <div className="mt-7 grid grid-cols-1 gap-7 sm:grid-cols-[minmax(0,1fr)_13rem] sm:items-stretch">
            <div>
              {data.features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`flex gap-5 py-5 first:pt-0 last:pb-0 ${index < data.features.length - 1 ? 'border-b border-[#DCE6ED]' : ''}`}
                >
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#FFF3EB] text-3xl text-[#FF6500]">
                    {renderIcon(feature.icon)}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-lg font-extrabold text-[#063A5B]">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#738392]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative min-h-64 overflow-hidden rounded-xl sm:min-h-0">
              <Image
                src={data.experienceImage}
                alt={data.experienceImageAlt}
                fill
                sizes="(min-width: 640px) 208px, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002D49]/85 via-[#002D49]/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-7 text-center text-white">
                <p className="text-5xl font-extrabold leading-none">{data.experienceValue}</p>
                <p className="mt-2 text-sm font-medium">{data.experienceLabel}</p>
              </div>
            </div>
          </div>

          {!hideButton && (
            <Link
              href={data.button.url}
              className="mt-7 inline-flex w-fit items-center gap-6 rounded-full bg-[#FF6500] py-2 pl-7 pr-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(255,101,0,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FF8A3D]"
            >
              <span>{data.button.text}</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#FF6500]">
                <FaArrowUp className="rotate-45 text-sm" />
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
