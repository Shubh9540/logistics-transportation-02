import React from 'react';
import Link from 'next/link';
import { BreadcrumbProps } from '@/types/templates.types';

export const Breadcrumb = ({ data, ui }: BreadcrumbProps) => {
  if (!data || !ui) return null;

  return (
    <section className="bg-white px-3 pb-3 pt-3 sm:px-5 sm:pb-5 sm:pt-5">
      <div
        className="relative mx-auto flex min-h-[25rem] w-full max-w-[1440px] items-center overflow-hidden rounded-2xl bg-[var(--color-primary-dark)] bg-cover bg-center pt-28 sm:min-h-[30rem] lg:min-h-[36rem]"
        style={data.bgImage ? { backgroundImage: `url('${data.bgImage}')` } : undefined}
      >
        {data.bgImage && <div className="absolute inset-0 bg-gradient-to-r from-[#002D49]/55 via-[#002D49]/20 to-transparent" />}

        <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 text-left sm:px-8 lg:px-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {data.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-1.5 text-xs font-bold uppercase text-white sm:text-sm">
            {data.paths.map((path, index) => (
              <React.Fragment key={path.id}>
                {path.url ? (
                  <Link href={path.url} className="transition-colors duration-300 hover:text-[var(--color-accent-light)]">
                    {path.label}
                  </Link>
                ) : (
                  <span>{path.label}</span>
                )}
                {index < data.paths.length - 1 && <span className="text-white/90">{ui.breadcrumbSeparator}</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
