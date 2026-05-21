'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow bg-[#F7F9FA] pt-12 md:pt-20 pb-24">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column - Text */}
            <div className="space-y-8">
              <div className="border-l-4 border-[#0E2A47] pl-6">
                <h1 className="text-[40px] md:text-[48px] font-bold text-[#0E2A47] leading-tight tracking-tight">
                  About UK Graduate College
                </h1>
              </div>
              
              <div className="text-[17px] text-[#4A5568] space-y-6 leading-[1.8]">
                <p>
                  UK Graduate College is a further and higher education provider offering a range of sector-relevant courses across two campuses in London and Birmingham.
                </p>
                <p>
                  We aim to help our students thrive in today's competitive job market, offering excellent links to employers and a focus on one-to-one academic and career guidance in addition to our specialist courses. We take an inclusive approach to recruiting students, with an aim to widen access to higher education among groups currently under-represented in the sector.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/uk_university_campus_hero.png" 
                  alt="UK Graduate College Campus" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
