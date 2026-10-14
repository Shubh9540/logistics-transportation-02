import React from 'react';
import { notFound } from 'next/navigation';
import rawData from '@/data/templates.json';
import { ServiceDetailsPageProps, TransWorldTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServiceDetailSection } from '@/components/sections/ServiceDetailSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default async function ServiceDetailsPage({ params }: ServiceDetailsPageProps) {
  const { id } = await params;
  const templateData: TransWorldTemplateData = rawData;
  const sectionData = templateData?.categories?.Logistics?.sections;
  const commonData = templateData?.common;
  const detailData = sectionData?.ServiceDetail?.variants?.TransWorldServiceDetail1;
  const selectedService = detailData?.services.find((service) => service.id === id);

  if (!sectionData || !commonData) return null;
  if (!detailData || !selectedService) notFound();

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="relative">
        <TopBar data={sectionData.TopBar?.variants?.TransWorldTopBar1} />
        <Header data={sectionData.Header?.variants?.TransWorldHeader1} />
        <Breadcrumb data={selectedService.breadcrumb} ui={commonData.globalUI} />
      </div>
      <ServiceDetailSection data={detailData} serviceId={id} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
