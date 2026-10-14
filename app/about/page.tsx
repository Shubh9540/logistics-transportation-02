import React from 'react';
import { TransWorldTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import rawData from '@/data/templates.json';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Page() {
  const templateData: TransWorldTemplateData = rawData;
  const sectionData = templateData?.categories?.Logistics?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <div className="relative">
        <TopBar data={sectionData.TopBar?.variants?.TransWorldTopBar1} />
        <Header data={sectionData.Header?.variants?.TransWorldHeader1} />
        <Breadcrumb data={commonData.aboutBreadcrumb} ui={commonData.globalUI} />
      </div>
      <AboutUsSection data={sectionData.AboutUs?.variants?.TransWorldAboutUs1} hideButton={true} />
      <WhyChooseUsSection data={sectionData.whyChooseUs?.variants?.TransWorldWhyChooseUs1} />
      <HowItWorksSection data={sectionData.HowItWorks?.variants?.TransWorldHowItWorks1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
