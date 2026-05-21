'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MissionVisionPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        
        {/* Mission Section */}
        <section className="bg-[#0f172a] text-white py-20 lg:py-32">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-[48px] md:text-[64px] font-extrabold tracking-tight">
                  Our Mission
                </h2>
                <div className="space-y-6 text-[18px] text-zinc-300 leading-relaxed max-w-lg">
                  <p>
                    To provide accessible, high-quality education that empowers individuals from all backgrounds to achieve their full potential.
                  </p>
                  <ul className="space-y-4 list-disc pl-5">
                    <li>Foster a culture of continuous learning and innovation.</li>
                    <li>Equip students with practical skills for the modern workforce.</li>
                    <li>Promote social mobility and community engagement through inclusive education.</li>
                  </ul>
                </div>
              </div>
              <div className="relative aspect-[3/4] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent z-10 opacity-60" />
                <img 
                  src="/uk_university_campus_hero.png" 
                  alt="Mission Growth" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-[#eab308] text-[#0f172a] py-20 lg:py-32">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/uk_university_campus_hero.png" 
                  alt="Vision Future" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-8 lg:pl-10">
                <h2 className="text-[48px] md:text-[64px] font-extrabold tracking-tight">
                  Our Vision
                </h2>
                <div className="text-[18px] font-medium leading-relaxed max-w-lg space-y-6">
                  <p>
                    To be the leading institution for career-focused education, recognized globally for transforming lives and driving economic growth.
                  </p>
                  <p>
                    We envision a future where every UK Graduate College alumni is a catalyst for positive change in their industry, armed with the knowledge, integrity, and resilience to lead tomorrow's enterprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
