import React from 'react';
import rawData from '@/data/templates.json';
import { TransWorldTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { FaqSection } from '@/components/sections/FaqSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function FaqsPage() {
  const templateData: TransWorldTemplateData = rawData;
  const sectionData = templateData?.categories?.Logistics?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="relative">
        <TopBar data={sectionData.TopBar?.variants?.TransWorldTopBar1} />
        <Header data={sectionData.Header?.variants?.TransWorldHeader1} />
        <Breadcrumb data={commonData.faqsBreadcrumb} ui={commonData.globalUI} />
      </div>
      <FaqSection data={sectionData.Faq?.variants?.TransWorldFaq1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
