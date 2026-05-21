'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AccreditationsPage() {
  const bodies = [
    { name: "ASIC Premier", abbr: "ASIC" },
    { name: "City & Guilds", abbr: "C&G" },
    { name: "Matrix Standard", abbr: "MATRIX" },
    { name: "AdvanceHE", abbr: "AHE" },
    { name: "ATHE", abbr: "ATHE" },
    { name: "Cyber Essentials", abbr: "CE" },
    { name: "NOCN", abbr: "NOCN" },
    { name: "Office for Students", abbr: "OfS" }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow bg-white">
        
        {/* Hero Section */}
        <section className="bg-[#F7F9FA] py-20 lg:py-28">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-4">
                <span className="text-[#3b82f6] font-bold tracking-widest text-[13px] uppercase">Our</span>
                <h1 className="text-[48px] md:text-[56px] font-extrabold text-[#0E2A47] leading-[1.1] tracking-tight">
                  Awarding Bodies &<br/>Accreditations
                </h1>
                <p className="text-[17px] text-[#4A5568] leading-relaxed max-w-lg pt-4">
                  We are proud to be recognized and regulated by industry-leading educational bodies, ensuring that our curriculum and teaching standards meet the highest levels of global excellence.
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-zinc-900 group">
                <img 
                  src="/uk_university_campus_hero.png" 
                  alt="Passion Led Us Here" 
                  className="w-full h-full object-cover opacity-80 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-4xl font-black tracking-widest uppercase border-4 border-white p-6 backdrop-blur-sm bg-black/20 text-center leading-tight">
                    PASSION<br/>LED US<br/>HERE
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Grid Section */}
        <section className="py-24">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[32px] font-bold text-[#0E2A47]">Recognized For Excellence</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {bodies.map((body, index) => (
                <div key={index} className="aspect-square bg-white border border-gray-200 rounded-2xl flex flex-col items-center justify-center p-8 shadow-sm hover:shadow-xl hover:border-transparent transition-all duration-300">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-[#0E2A47] font-black text-2xl tracking-tighter">
                    {body.abbr}
                  </div>
                  <h3 className="text-center text-[#0E2A47] font-bold text-[15px]">{body.name}</h3>
                  <p className="text-[11px] text-gray-400 mt-2 uppercase tracking-widest">Accredited</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
