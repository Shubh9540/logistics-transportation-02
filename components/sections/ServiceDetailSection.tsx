import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowRight,
  FaAnchor,
  FaBoxOpen,
  FaCheckCircle,
  FaClipboardCheck,
  FaEnvelope,
  FaFileInvoice,
  FaGlobeAmericas,
  FaPhoneAlt,
  FaTrain,
  FaTruck,
  FaWarehouse,
} from 'react-icons/fa';
import { ServiceDetailSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaAnchor': return <FaAnchor />;
    case 'FaBoxOpen': return <FaBoxOpen />;
    case 'FaClipboardCheck': return <FaClipboardCheck />;
    case 'FaFileInvoice': return <FaFileInvoice />;
    case 'FaGlobeAmericas': return <FaGlobeAmericas />;
    case 'FaPhoneAlt': return <FaPhoneAlt />;
    case 'FaTrain': return <FaTrain />;
    case 'FaTruck': return <FaTruck />;
    case 'FaWarehouse': return <FaWarehouse />;
    default: return null;
  }
};

export const ServiceDetailSection = ({ data, serviceId }: ServiceDetailSectionProps) => {
  if (!data) return null;

  const service = data.services.find((item) => item.id === serviceId);
  if (!service) return null;

  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-8">
        <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
          <nav aria-label={data.navigationLabel} className="overflow-hidden rounded-md border border-[#E2EAF0] bg-[#F7FAFC] p-2 shadow-[0_8px_24px_rgba(6,58,91,0.06)]">
            {data.navigation.map((item) => {
              const isActive = item.id === serviceId;
              return (
                <Link key={item.id} href={item.url} className={`mb-1 flex min-h-14 items-center gap-3 rounded px-4 py-3 text-sm font-bold transition-colors duration-300 last:mb-0 ${isActive ? 'bg-[#FF6500] text-white' : 'bg-white text-[#063A5B] hover:bg-[#FFF0E6]'}`}>
                  <span className={`text-xl ${isActive ? 'text-white' : 'text-[#063A5B]'}`}>{renderIcon(item.icon)}</span>
                  <span className="flex-1">{item.title}</span>
                  <span className={`flex h-8 w-8 items-center justify-center rounded-full ${isActive ? 'bg-white text-[#FF6500]' : 'bg-[#F4F8FB] text-[#FF6500]'}`}><FaArrowRight /></span>
                </Link>
              );
            })}
          </nav>

          <div className="relative overflow-hidden rounded-md bg-[#063A5B] px-5 py-7 text-white shadow-lg">
            <div className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${data.backgroundImage})` }} />
            <div className="relative">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF6500] text-lg">{renderIcon(data.assistance.icon)}</span>
              <h2 className="mt-5 text-xl font-extrabold">{data.assistance.title}</h2>
              <p className="mt-1 text-sm leading-6 text-white/80">{data.assistance.description}</p>
              <div className="mt-5 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#FF9A57]">{data.assistance.phoneLabel}</p>
                {data.assistance.phones.map((phone) => <a key={phone.id} href={phone.url} className="block text-sm font-semibold hover:text-[#FF9A57]">{phone.value}</a>)}
              </div>
              <div className="mt-5 space-y-2">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF9A57]"><FaEnvelope />{data.assistance.emailLabel}</p>
                {data.assistance.emails.map((email) => <a key={email.id} href={email.url} className="block break-words text-sm font-semibold hover:text-[#FF9A57]">{email.value}</a>)}
              </div>
              <Link href={data.assistance.buttonUrl} className="mt-6 flex items-center justify-between rounded-full bg-[#FF6500] py-2 pl-5 pr-2 text-sm font-bold transition-colors duration-300 hover:bg-white hover:text-[#063A5B]">
                <span>{data.assistance.buttonText}</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#FF6500]"><FaArrowRight /></span>
              </Link>
            </div>
          </div>
        </aside>

        <div className="min-w-0">
          <div className="grid overflow-hidden rounded-md bg-[#063A5B] md:grid-cols-[minmax(0,1.65fr)_minmax(240px,0.75fr)]">
            <div className="relative min-h-72 md:min-h-96">
              <Image src={service.heroImage} alt={service.heroImageAlt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" priority />
            </div>
            <div className="relative flex flex-col justify-center overflow-hidden px-6 py-8 text-white sm:px-8">
              <span className="absolute -left-8 top-12 h-20 w-16 rotate-12 bg-[#FF6500]" />
              <h1 className="relative text-3xl font-extrabold leading-tight sm:text-4xl">{service.heroTitle} <span className="text-[#FF6500]">{service.heroHighlightedTitle}</span></h1>
              <span className="relative mt-5 h-0.5 w-12 bg-[#FF6500]" />
              <p className="relative mt-5 text-sm leading-6 text-white/85">{service.heroDescription}</p>
            </div>
          </div>

          <div className="py-8">
            <div className="mb-2 flex items-center gap-3">
              <span className="h-0.5 w-10 bg-[#FF6500]" />
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#063A5B]">{service.subtitle}</p>
            </div>
            <h2 className="text-3xl font-extrabold leading-tight text-[#063A5B] sm:text-4xl">{service.heading} <span className="text-[#FF6500]">{service.headingHighlightedTitle}</span></h2>
            <p className="mt-4 text-sm leading-7 text-[#657687] sm:text-base">{service.description}</p>
            <Link href={service.quoteUrl} className="mt-5 inline-flex items-center gap-5 rounded-full bg-[#FF6500] py-2 pl-6 pr-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#063A5B]">
              <span>{service.quoteText}</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#FF6500]"><FaArrowRight /></span>
            </Link>
          </div>

          <div className="grid items-center gap-6 rounded-md bg-[#F4F8FB] p-5 md:grid-cols-2 sm:p-6">
            <div className="relative min-h-64 overflow-hidden rounded-md">
              <Image src={service.overviewImage} alt={service.overviewImageAlt} fill sizes="(min-width: 768px) 38vw, 100vw" className="object-cover" />
            </div>
            <div>
              <div className="mb-2 flex items-center gap-3"><span className="h-0.5 w-8 bg-[#FF6500]" /><p className="text-xs font-extrabold uppercase tracking-wider text-[#063A5B]">{service.overviewSubtitle}</p></div>
              <h2 className="text-2xl font-extrabold leading-tight text-[#063A5B] sm:text-3xl">{service.overviewTitle} <span className="text-[#FF6500]">{service.overviewHighlightedTitle}</span></h2>
              <p className="mt-4 text-sm leading-6 text-[#657687]">{service.overviewDescription}</p>
            </div>
          </div>

          <div className="grid items-center gap-6 py-8 md:grid-cols-2">
            <div>
              <div className="mb-2 flex items-center gap-3"><span className="h-0.5 w-8 bg-[#FF6500]" /><p className="text-xs font-extrabold uppercase tracking-wider text-[#063A5B]">{service.featuresSubtitle}</p></div>
              <h2 className="text-2xl font-extrabold leading-tight text-[#063A5B] sm:text-3xl">{service.featuresTitle} <span className="text-[#FF6500]">{service.featuresHighlightedTitle}</span></h2>
              <ul className="mt-5 space-y-3">
                {service.features.map((feature) => <li key={feature.id} className="flex items-start gap-3 text-sm leading-6 text-[#657687]"><FaCheckCircle className="mt-1 flex-shrink-0 text-[#FF6500]" /><span>{feature.text}</span></li>)}
              </ul>
            </div>
            <div className="relative min-h-72 overflow-hidden rounded-md">
              <Image src={service.featuresImage} alt={service.featuresImageAlt} fill sizes="(min-width: 768px) 38vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-2 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-md bg-[#F4F8FB] px-4 py-8 sm:px-6 lg:px-10">
          <div className="text-center">
            <div className="mb-2 flex items-center justify-center gap-3"><span className="h-0.5 w-8 bg-[#FF6500]" /><p className="text-xs font-extrabold uppercase tracking-wider text-[#063A5B]">{data.processSubtitle}</p></div>
            <h2 className="text-3xl font-extrabold text-[#063A5B]">{data.processTitle} <span className="text-[#FF6500]">{data.processHighlightedTitle}</span></h2>
          </div>
          <div className="relative mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <span className="absolute left-[12.5%] right-[12.5%] top-10 hidden border-t-2 border-dashed border-[#91A4B4] lg:block" />
            {data.processSteps.map((step) => (
              <article key={step.id} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-[#FF6500] text-2xl text-white shadow-md">{renderIcon(step.icon)}</div>
                <p className="mt-3 text-sm font-extrabold text-[#FF6500]">{step.number}</p>
                <h3 className="mt-1 text-base font-extrabold text-[#063A5B]">{step.title}</h3>
                <p className="mt-2 text-sm leading-5 text-[#657687]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
