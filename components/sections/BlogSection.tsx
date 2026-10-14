import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { BlogSectionProps } from '@/types/templates.types';

export const BlogSection = ({ data }: BlogSectionProps) => {
  if (!data?.posts.length) return null;

  const featuredPost = data.posts[0];
  const compactPosts = data.posts.slice(1, 5);

  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="mx-auto max-w-[1320px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3 text-sm font-bold uppercase text-[var(--color-accent)]">
            <FaArrowRight aria-hidden="true" />
            <span>{data.subtitle}</span>
            <FaArrowRight className="rotate-180" aria-hidden="true" />
          </div>
          <h2 className="text-3xl font-extrabold leading-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
            {data.title1} <span className="text-[var(--color-accent)]">{data.highlightedTitle}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text)] sm:text-base">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.02fr_1fr]">
          <article className="group relative min-h-[34rem] overflow-hidden rounded-2xl bg-[var(--color-bg-alt)] shadow-[0_10px_32px_rgba(5,50,78,0.10)] lg:min-h-0">
            <Image
              src={featuredPost.image}
              alt={featuredPost.imageAlt}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 52vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute left-5 top-5 rounded-full bg-[var(--color-accent)] px-4 py-2 text-xs font-bold uppercase text-white">
              {featuredPost.category}
            </span>

            <div className="absolute inset-x-0 bottom-0 rounded-t-2xl bg-white p-5 sm:p-7">
              <p className="text-xs font-bold uppercase text-[#687A8B]">{featuredPost.date}</p>
              <div className="mt-2 flex items-start justify-between gap-5">
                <div className="min-w-0">
                  <Link href={featuredPost.url}>
                    <h3 className="text-2xl font-extrabold leading-tight text-[var(--color-heading)] transition-colors duration-300 group-hover:text-[var(--color-accent)] sm:text-3xl">
                      {featuredPost.title}
                    </h3>
                  </Link>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--color-text)] sm:text-base">{featuredPost.description}</p>
                </div>
                <Link
                  href={featuredPost.url}
                  aria-label={`${data.readMoreText}: ${featuredPost.title}`}
                  className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-[var(--color-accent)] text-lg text-white transition-transform duration-300 hover:translate-x-1"
                >
                  <FaArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {compactPosts.map((post) => (
              <article key={post.id} className="group overflow-hidden rounded-2xl bg-white shadow-[0_10px_32px_rgba(5,50,78,0.10)]">
                <div className="relative h-44 overflow-hidden sm:h-40 xl:h-48">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase text-[var(--color-heading)] shadow-sm">
                    {post.category}
                  </span>
                </div>

                <div className="p-4 sm:p-5">
                  <p className="text-xs font-bold uppercase text-[#687A8B]">{post.date}</p>
                  <div className="mt-2 flex items-end justify-between gap-4">
                    <div className="min-w-0">
                      <Link href={post.url}>
                        <h3 className="line-clamp-2 text-lg font-extrabold leading-tight text-[var(--color-heading)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="mt-2 line-clamp-2 text-sm leading-5 text-[var(--color-text)]">{post.description}</p>
                    </div>
                    <Link
                      href={post.url}
                      aria-label={`${data.readMoreText}: ${post.title}`}
                      className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[var(--color-accent)] text-sm text-white transition-transform duration-300 hover:translate-x-1"
                    >
                      <FaArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
