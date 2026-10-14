'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight, FaRegCalendarAlt } from 'react-icons/fa';
import { BlogGridProps } from '@/types/templates.types';

export const BlogGrid = ({ data }: BlogGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  if (!data?.posts.length || !data.pagination.length) return null;

  const startIndex = (currentPage - 1) * data.itemsPerPage;
  const visiblePosts = data.posts.slice(startIndex, startIndex + data.itemsPerPage);
  const lastPage = data.pagination[data.pagination.length - 1].page;

  const changePage = (page: number) => {
    setCurrentPage(page);
    window.requestAnimationFrame(() => sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };

  return (
    <section ref={sectionRef} className="relative w-full scroll-mt-4 overflow-hidden bg-[#F4F8FB] py-8 lg:py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${data.backgroundImage})` }} role="img" aria-label={data.backgroundImageAlt} />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3"><span className="h-0.5 w-9 bg-[#FF6500]" /><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#063A5B] sm:text-sm">{data.subtitle}</p></div>
          <h2 className="text-3xl font-extrabold leading-tight text-[#063A5B] sm:text-4xl lg:text-5xl">{data.title1} <span className="text-[#FF6500]">{data.highlightedTitle}</span></h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#738392] sm:text-base">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <article key={post.id} className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#DCE6ED] bg-white shadow-[0_8px_24px_rgba(6,58,91,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Link href={post.url} className="relative block h-52 overflow-hidden sm:h-56">
                <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-[#FF6500] px-4 py-2 text-xs font-bold uppercase text-white shadow-md">{post.category}</span>
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <p className="flex items-center gap-2 text-xs font-semibold text-[#738392]"><FaRegCalendarAlt className="text-[#FF6500]" />{post.date}</p>
                <Link href={post.url} className="mt-3"><h3 className="text-xl font-extrabold leading-tight text-[#063A5B] transition-colors duration-300 group-hover:text-[#FF6500]">{post.title}</h3></Link>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#738392]">{post.description}</p>
              </div>
            </article>
          ))}
        </div>

        <nav className="mt-8 flex items-center justify-center gap-2" aria-label={data.paginationLabel}>
          <button type="button" disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)} aria-label={data.previousPageLabel} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DCE6ED] bg-white text-[#063A5B] transition-colors hover:border-[#FF6500] hover:text-[#FF6500] disabled:cursor-not-allowed disabled:opacity-40"><FaChevronLeft /></button>
          {data.pagination.map((pageItem) => (
            <button key={pageItem.id} type="button" onClick={() => changePage(pageItem.page)} aria-label={`${data.paginationLabel} ${pageItem.label}`} aria-current={currentPage === pageItem.page ? 'page' : undefined} className={currentPage === pageItem.page ? 'flex h-11 w-11 items-center justify-center rounded-full bg-[#FF6500] text-sm font-bold text-white shadow-md' : 'flex h-11 w-11 items-center justify-center rounded-full border border-[#DCE6ED] bg-white text-sm font-bold text-[#063A5B] transition-colors hover:border-[#FF6500] hover:text-[#FF6500]'}>{pageItem.label}</button>
          ))}
          <button type="button" disabled={currentPage === lastPage} onClick={() => changePage(currentPage + 1)} aria-label={data.nextPageLabel} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DCE6ED] bg-white text-[#063A5B] transition-colors hover:border-[#FF6500] hover:text-[#FF6500] disabled:cursor-not-allowed disabled:opacity-40"><FaChevronRight /></button>
        </nav>
      </div>
    </section>
  );
};
