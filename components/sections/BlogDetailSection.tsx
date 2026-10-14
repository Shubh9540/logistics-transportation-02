import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';
import { BlogDetailSectionProps } from '@/types/templates.types';

export const BlogDetailSection = ({ data, postId }: BlogDetailSectionProps) => {
  if (!data) return null;
  const post = data.posts.find((item) => item.id === postId);
  const author = data.authors.find((item) => item.id === post?.authorId);
  if (!post || !author) return null;
  const recentPosts = data.posts.filter((item) => item.id !== postId).slice(0, 5);

  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3"><span className="h-0.5 w-9 bg-[#FF6500]" /><p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#063A5B]">{post.category}</p></div>
          <h1 className="text-3xl font-extrabold leading-tight text-[#063A5B] sm:text-4xl lg:text-5xl">{post.title}</h1>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-5 text-sm text-[#738392]"><span className="flex items-center gap-2"><FaRegCalendarAlt className="text-[#FF6500]" />{post.date}</span><span className="flex items-center gap-2"><FaRegClock className="text-[#FF6500]" />{data.detail.authorLabel} {author.name}</span></div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="min-w-0">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg"><Image src={post.image} alt={post.imageAlt} fill priority sizes="(min-width: 1024px) 70vw, 100vw" className="object-cover" /></div>
            <p className="mt-5 text-sm leading-7 text-[#657687] sm:text-base">{post.description}</p>

            <div className="mt-8 space-y-8">
              {data.detail.sections.map((section) => (
                <section key={section.id}>
                  <div className="flex items-center gap-4"><span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#FF6500] text-sm font-extrabold text-white">{section.number}</span><span className="h-10 w-0.5 bg-[#FF6500]" /><h2 className="text-xl font-extrabold text-[#063A5B] sm:text-2xl">{section.title}</h2></div>
                  <p className="mt-4 text-sm leading-7 text-[#657687] sm:text-base">{section.description}</p>
                  <div className="mt-5 grid overflow-hidden rounded-lg bg-[#F4F8FB] md:grid-cols-2">
                    <div className="relative min-h-56"><Image src={section.image} alt={section.imageAlt} fill sizes="(min-width: 768px) 42vw, 100vw" className="object-cover" /></div>
                    <ul className="flex flex-col justify-center space-y-3 p-5 sm:p-6">
                      {section.features.map((feature) => <li key={feature.id} className="flex items-start gap-3 text-sm leading-5 text-[#657687]"><FaCheckCircle className="mt-0.5 flex-shrink-0 text-[#FF6500]" /><span>{feature.text}</span></li>)}
                    </ul>
                  </div>
                </section>
              ))}
            </div>

            <blockquote className="mt-8 rounded-lg border-l-4 border-[#FF6500] bg-[#FFF2E8] p-6 text-sm font-semibold italic leading-7 text-[#4D6070]">{data.detail.quoteText}</blockquote>
            <h2 className="mt-8 text-2xl font-extrabold text-[#063A5B]">{data.detail.conclusionTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-[#657687] sm:text-base">{data.detail.conclusionText}</p>
          </article>

          <aside className="self-start rounded-lg bg-[#F4F8FB] p-5 shadow-[0_8px_24px_rgba(6,58,91,0.06)] lg:sticky lg:top-6">
            <h2 className="text-xl font-extrabold text-[#063A5B]">{data.detail.recentPostsTitle}</h2>
            <div className="mt-5 space-y-5">
              {recentPosts.map((recentPost) => (
                <Link key={recentPost.id} href={recentPost.url} className="group grid grid-cols-[88px_1fr] gap-3">
                  <div className="relative h-20 overflow-hidden rounded-md"><Image src={recentPost.image} alt={recentPost.imageAlt} fill sizes="88px" className="object-cover transition-transform duration-300 group-hover:scale-105" /></div>
                  <div className="min-w-0"><h3 className="line-clamp-3 text-sm font-extrabold leading-5 text-[#063A5B] transition-colors group-hover:text-[#FF6500]">{recentPost.title}</h3><p className="mt-1 flex items-center gap-1.5 text-xs text-[#738392]"><FaRegCalendarAlt className="text-[#FF6500]" />{recentPost.date}</p></div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
