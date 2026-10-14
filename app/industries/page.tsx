import React from 'react';
import rawData from '@/data/templates.json';
import { TransWorldTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function IndustriesPage() {
  const templateData: TransWorldTemplateData = rawData;
  const sectionData = templateData?.categories?.Logistics?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="relative">
        <TopBar data={sectionData.TopBar?.variants?.TransWorldTopBar1} />
        <Header data={sectionData.Header?.variants?.TransWorldHeader1} />
        <Breadcrumb data={commonData.industriesBreadcrumb} ui={commonData.globalUI} />
      </div>
      <IndustriesSection data={sectionData.Industries?.variants?.TransWorldIndustries1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
