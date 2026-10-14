import React from 'react';
import rawData from '@/data/templates.json';
import { TransWorldTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { TestimonialGrid } from '@/components/sections/TestimonialGrid';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function TestimonialsPage() {
  const templateData: TransWorldTemplateData = rawData;
  const sectionData = templateData?.categories?.Logistics?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <TopBar data={sectionData.TopBar?.variants?.TransWorldTopBar1} />
      <Header data={sectionData.Header?.variants?.TransWorldHeader1} />
        <Breadcrumb data={commonData.testimonialsBreadcrumb} ui={commonData.globalUI} />
      <TestimonialGrid data={sectionData.TestimonialGrid?.variants?.TransWorldTestimonialGrid1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
