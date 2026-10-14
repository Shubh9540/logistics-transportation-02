import React from 'react';
import rawData from '@/data/templates.json';
import { TransWorldTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { QuoteSection } from '@/components/sections/QuoteSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function GetAQuotePage() {
  const templateData: TransWorldTemplateData = rawData;
  const sectionData = templateData?.categories?.Logistics?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="relative">
        <TopBar data={sectionData.TopBar?.variants?.TransWorldTopBar1} logoData={sectionData.Header?.variants?.TransWorldHeader1} />
        <Header data={sectionData.Header?.variants?.TransWorldHeader1} />
        <Breadcrumb data={commonData.quoteBreadcrumb} ui={commonData.globalUI} />
      </div>
      <QuoteSection data={sectionData.Quote?.variants?.TransWorldQuote1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
