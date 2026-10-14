import React from 'react';
import rawData from '@/data/templates.json';
import { TransWorldTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { PhotoGallery } from '@/components/sections/PhotoGallery';
import { VideoGallery } from '@/components/sections/VideoGallery';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function GalleryPage() {
  const templateData: TransWorldTemplateData = rawData;
  const sectionData = templateData?.categories?.Logistics?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="relative">
        <TopBar data={sectionData.TopBar?.variants?.TransWorldTopBar1} />
        <Header data={sectionData.Header?.variants?.TransWorldHeader1} />
        <Breadcrumb data={commonData.galleryBreadcrumb} ui={commonData.globalUI} />
      </div>
      <PhotoGallery data={sectionData.PhotoGallery?.variants?.TransWorldPhotoGallery1} />
      <VideoGallery data={sectionData.VideoGallery?.variants?.TransWorldVideoGallery1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
