'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderProps } from '@/types/templates.types';
import { FaArrowUp, FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';

const renderButtonIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaArrowUp':
      return <FaArrowUp className="rotate-45 text-sm" />;
    default:
      return null;
  }
};

export const Header = ({ data }: HeaderProps) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!data) return null;

  const navLinks = [...(data.navLinksLeft || []), ...(data.navLinksRight || [])];

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full px-5 pt-6 sm:px-8 sm:pt-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-5">
        <Link href="/" aria-label={data.logoAlt} className="flex shrink-0 items-center">
          <img src={data.logo} alt={data.logoAlt} className="h-11 w-auto object-contain sm:h-14 lg:h-16" />
        </Link>

        <nav className="hidden items-center gap-5 rounded-full bg-white/15 px-8 py-5 text-white shadow-[0_14px_35px_rgba(0,45,73,0.2)] backdrop-blur-md xl:flex 2xl:gap-7 2xl:px-10">
          {navLinks.map((link) => {
            const isActive = link.url === '/' ? pathname === '/' : pathname.startsWith(link.url);

            return (
              <Link
                key={link.id}
                href={link.url}
                className={`flex items-center gap-1.5 whitespace-nowrap text-sm font-medium transition-colors duration-300 ${isActive ? 'text-[#FF8A3D]' : 'text-white hover:text-[#FF8A3D]'}`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && <FaChevronDown className="text-[10px]" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center">
          <Link
            href={data.contactButton.url}
            className="hidden items-center gap-5 rounded-full bg-white py-2 pl-7 pr-2 text-sm font-semibold text-[#FF6500] shadow-[0_12px_30px_rgba(0,45,73,0.18)] transition-transform duration-300 hover:-translate-y-0.5 xl:flex"
          >
            <span>{data.contactButton.text}</span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6500] text-white">
              {renderButtonIcon(data.contactButton.icon)}
            </span>
          </Link>

          <button
            type="button"
            aria-label={mobileMenuOpen ? data.closeMenuLabel : data.openMenuLabel}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-[#063A5B] shadow-lg transition-colors hover:text-[#FF6500] xl:hidden"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mx-auto mt-4 flex w-full max-w-[1280px] flex-col rounded-2xl bg-[#002D49]/95 p-4 shadow-2xl backdrop-blur-md xl:hidden">
          {navLinks.map((link) => {
            const isActive = link.url === '/' ? pathname === '/' : pathname.startsWith(link.url);

            return (
              <Link
                key={link.id}
                href={link.url}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between border-b border-white/10 px-3 py-3.5 text-sm font-medium transition-colors ${isActive ? 'text-[#FF8A3D]' : 'text-white hover:text-[#FF8A3D]'}`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && <FaChevronDown className="text-xs" />}
              </Link>
            );
          })}
          <Link
            href={data.contactButton.url}
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 flex items-center justify-between rounded-full bg-white py-2 pl-6 pr-2 text-sm font-semibold text-[#FF6500]"
          >
            <span>{data.contactButton.text}</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6500] text-white">
              {renderButtonIcon(data.contactButton.icon)}
            </span>
          </Link>
        </div>
      )}
    </header>
  );
};
