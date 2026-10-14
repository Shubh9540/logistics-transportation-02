import Image from 'next/image';
import Link from 'next/link';
import {
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FooterProps } from '@/types/templates.types';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF':
      return <FaFacebookF />;
    case 'FaXTwitter':
      return <FaXTwitter />;
    case 'FaLinkedinIn':
      return <FaLinkedinIn />;
    case 'FaInstagram':
      return <FaInstagram />;
    case 'FaYoutube':
      return <FaYoutube />;
    default:
      return null;
  }
};

const renderContactIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaMapMarkerAlt':
      return <FaMapMarkerAlt />;
    case 'FaPhoneAlt':
      return <FaPhoneAlt />;
    case 'FaEnvelope':
      return <FaEnvelope />;
    default:
      return null;
  }
};

export const Footer = ({ data }: FooterProps) => {
  if (!data) return null;

  return (
    <footer className="relative overflow-hidden bg-[var(--color-primary-dark)] text-white">
      <div className="absolute inset-x-0 bottom-0 h-2/3 opacity-30">
        <Image src={data.backgroundImage} alt={data.backgroundImageAlt} fill sizes="100vw" className="object-cover object-left-bottom" />
      </div>
      <div className="absolute right-0 top-0 h-full w-full opacity-25 lg:w-1/2">
        <Image src={data.patternImage} alt={data.patternImageAlt} fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover object-right-top" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#002D49]/85 via-[#002D49]/90 to-[#063A5B]/75" />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8 xl:grid-cols-[1.2fr_0.78fr_1fr_1.1fr_1fr] xl:gap-0">
        <div className="sm:col-span-2 lg:col-span-1 xl:pr-8">
          <Link href={data.logoUrl} className="inline-block" aria-label={data.logoAlt}>
            <Image src={data.logo} alt={data.logoAlt} width={320} height={100} className="h-auto w-64" />
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-white/80">{data.description}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            {data.socialLinks.map((social) => (
              <Link
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-sm transition-colors duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]"
              >
                {renderSocialIcon(social.icon)}
              </Link>
            ))}
          </div>
        </div>

        <div className="xl:border-l xl:border-white/15 xl:px-7">
          <h2 className="text-lg font-bold">{data.quickLinksTitle}</h2>
          <span className="mt-3 block h-0.5 w-8 bg-[var(--color-accent)]" />
          <ul className="mt-5 space-y-2.5">
            {data.quickLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.url} className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-[var(--color-accent-light)]">
                  <FaChevronRight className="text-xs text-[var(--color-accent)]" aria-hidden="true" />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="xl:border-l xl:border-white/15 xl:px-7">
          <h2 className="text-lg font-bold">{data.servicesTitle}</h2>
          <span className="mt-3 block h-0.5 w-8 bg-[var(--color-accent)]" />
          <ul className="mt-5 space-y-2.5">
            {data.serviceLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.url} className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-[var(--color-accent-light)]">
                  <FaChevronRight className="text-xs text-[var(--color-accent)]" aria-hidden="true" />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="xl:border-l xl:border-white/15 xl:px-7">
          <h2 className="text-lg font-bold">{data.contactTitle}</h2>
          <span className="mt-3 block h-0.5 w-8 bg-[var(--color-accent)]" />
          <ul className="mt-5 space-y-4">
            {data.contactItems.map((item) => (
              <li key={item.id} className="flex items-start gap-3">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[var(--color-accent)] text-sm text-white">
                  {renderContactIcon(item.icon)}
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold">{item.title}</h3>
                  {item.url ? (
                    <Link href={item.url} className="mt-1 block break-words text-sm leading-5 text-white/75 transition-colors hover:text-[var(--color-accent-light)]">
                      {item.value}
                    </Link>
                  ) : (
                    <p className="mt-1 text-sm leading-5 text-white/75">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="xl:border-l xl:border-white/15 xl:pl-7">
          <h2 className="text-lg font-bold">{data.galleryTitle}</h2>
          <span className="mt-3 block h-0.5 w-8 bg-[var(--color-accent)]" />
          <div className="mt-5 grid grid-cols-3 gap-2">
            {data.galleryImages.map((item) => (
              <Link key={item.id} href={data.galleryUrl} className="group relative aspect-square overflow-hidden rounded-md">
                <Image src={item.image} alt={item.imageAlt} fill sizes="110px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/20">
        <div className="mx-auto max-w-[1440px] px-4 py-5 sm:px-6 lg:px-8">
          <p className="text-xs leading-5 text-white/80 sm:text-sm">{data.copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};
