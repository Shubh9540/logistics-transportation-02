import React from 'react';
import { TransWorldTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: TransWorldTemplateData = rawData;
  const sectionData = templateData?.categories?.Logistics?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      {/* Header overlaps Hero via absolute positioning */}
      <div className="relative">
        <TopBar data={sectionData.TopBar?.variants?.TransWorldTopBar1} />
        <Header data={sectionData.Header?.variants?.TransWorldHeader1} />
        <HeroSection data={sectionData.Hero?.variants?.TransWorldHero1} />
      </div>
      <AboutUsSection data={sectionData.AboutUs?.variants?.TransWorldAboutUs1} />
      <ServicesSection data={sectionData.Services?.variants?.TransWorldServices1} />
      <HowItWorksSection data={sectionData.HowItWorks?.variants?.TransWorldHowItWorks1} />
      <TestimonialSection data={sectionData.Testimonials?.variants?.TransWorldTestimonials1} />
      <BlogSection data={sectionData.Blog?.variants?.TransWorldBlog1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
