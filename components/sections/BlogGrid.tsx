'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { BlogGridProps } from '@/types/templates.types';

export const BlogGrid = ({ data }: BlogGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (!data?.posts.length || !data.pagination.length) return null;

  const startIndex = (currentPage - 1) * data.itemsPerPage;
  const visiblePosts = data.posts.slice(startIndex, startIndex + data.itemsPerPage);

  return (
    <section className="w-full bg-[#F4F8FB] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-4"><span className="h-px w-8 bg-[#FF6500]" /><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6500] sm:text-sm">{data.subtitle}</p><span className="h-px w-8 bg-[#FF6500]" /></div>
          <h2 className="text-3xl font-extrabold leading-tight text-[#063A5B] sm:text-4xl lg:text-5xl">{data.title1} <span className="text-[#FF6500]">{data.highlightedTitle}</span></h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#738392] sm:text-base">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => {
            const [dateDay, dateMonth, dateYear] = post.date.split(' ');

            return (
              <article key={post.id} className="group flex h-full flex-col overflow-hidden rounded-md border border-[#DCE6ED] bg-white shadow-[0_8px_24px_rgba(6,58,91,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-52 overflow-hidden sm:h-56">
                  <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#FF6500] px-4 py-2 text-xs font-bold text-white shadow-md">{post.category}</span>
                  <div className="absolute bottom-0 right-3 flex min-w-16 flex-col items-center rounded-t-md bg-white px-3 py-2 text-[#063A5B] shadow-lg"><span className="text-xl font-extrabold leading-none">{dateDay}</span><span className="mt-1 text-xs font-bold uppercase text-[#738392]">{dateMonth}</span><span className="text-xs font-semibold text-[#738392]">{dateYear}</span></div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <Link href={post.url}><h3 className="text-xl font-extrabold leading-tight text-[#063A5B] transition-colors duration-300 group-hover:text-[#FF6500]">{post.title}</h3></Link>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[#738392]">{post.description}</p>
                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#DCE6ED] pt-4">
                    <div className="flex min-w-0 items-center gap-3"><div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-[#DCE6ED]"><Image src={post.author.image} alt={post.author.imageAlt} fill sizes="44px" className="object-cover object-top" /></div><div className="min-w-0"><p className="truncate text-sm font-bold text-[#063A5B]"><span className="font-normal text-[#738392]">{data.authorPrefix} </span>{post.author.name}</p><p className="truncate text-xs text-[#738392]">{post.author.role}</p></div></div>
                    <Link href={post.url} className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#FF6500] transition-all duration-300 hover:gap-3"><span>{data.readMoreText}</span><FaArrowRight className="text-xs" /></Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <nav className="mt-8 flex items-center justify-center gap-3" aria-label={data.paginationLabel}>
          {data.pagination.map((pageItem) => (
            <button key={pageItem.id} type="button" onClick={() => setCurrentPage(pageItem.page)} aria-label={`${data.paginationLabel} ${pageItem.label}`} aria-current={currentPage === pageItem.page ? 'page' : undefined} className={currentPage === pageItem.page ? 'flex h-11 w-11 items-center justify-center rounded-md border border-[#FF6500] bg-[#FF6500] text-sm font-bold text-white' : 'flex h-11 w-11 items-center justify-center rounded-md border border-[#DCE6ED] bg-white text-sm font-bold text-[#063A5B] transition-colors hover:border-[#FF6500] hover:text-[#FF6500]'}>{pageItem.label}</button>
          ))}
        </nav>
      </div>
    </section>
  );
};
