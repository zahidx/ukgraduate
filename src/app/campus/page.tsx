'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Clock, Navigation2, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function CampusPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow bg-[#F8F9FA]">
        
        {/* Immersive Hero */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-zinc-900 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/uk_university_campus_hero.png" 
              alt="UK Graduate Campuses" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
          </div>
          
          <div className="relative z-10 text-center space-y-6 px-4">
            <span className="text-[#00D8C5] font-black uppercase tracking-[0.3em] text-[13px]">
              Our Locations
            </span>
            <h1 className="text-[56px] md:text-[72px] font-extrabold text-white tracking-tight leading-tight drop-shadow-2xl">
              Experience Our Campuses
            </h1>
            <p className="text-[20px] text-zinc-300 font-light max-w-2xl mx-auto tracking-wide">
              Situated in the heart of the UK's most vibrant cities, our London and Birmingham facilities offer state-of-the-art learning environments.
            </p>
          </div>
        </section>

        {/* London Campus */}
        <section className="py-24 bg-white relative">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-5 space-y-10">
                <div className="space-y-4">
                  <h2 className="text-[48px] font-bold text-[#0E2A47] tracking-tight">
                    London Campus
                  </h2>
                  <p className="text-gray-600 text-[17px] leading-relaxed">
                    Located in Romford, our London campus provides a dynamic, cosmopolitan learning environment just moments away from the capital's thriving financial and cultural districts.
                  </p>
                </div>
                
                <div className="space-y-8 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-[#0E2A47] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#0E2A47] text-[17px] mb-1">Address</h4>
                      <p className="text-gray-600 leading-relaxed">
                        UK Graduate College<br/>
                        3-5 Eastern Road<br/>
                        Romford<br/>
                        RM1 3NH
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-[#0E2A47] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#0E2A47] text-[17px] mb-1">Office Hours</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Monday - Friday<br/>
                        9:30 AM - 5:30 PM
                      </p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0E2A47] hover:bg-[#163e6e] text-white font-bold tracking-wide transition-all rounded-sm shadow-xl w-full sm:w-auto"
                >
                  <Navigation2 className="w-5 h-5" />
                  <span>Get Directions</span>
                </Link>
              </div>

              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl">
                  <img src="/uk_university_campus_hero.png" alt="London Campus" className="w-full h-full object-cover" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg font-bold text-[#0E2A47] tracking-wider text-sm shadow-lg">
                    EST. LONDON
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Birmingham Campus */}
        <section className="py-24 bg-[#0f172a] text-white relative">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                  <img src="/uk_university_campus_hero.png" alt="Birmingham Campus" className="w-full h-full object-cover" />
                  <div className="absolute top-6 left-6 bg-[#0f172a]/90 backdrop-blur border border-white/10 px-4 py-2 rounded-lg font-bold text-white tracking-wider text-sm shadow-lg">
                    COBALT SQUARE
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-10 order-1 lg:order-2">
                <div className="space-y-4">
                  <h2 className="text-[48px] font-bold text-white tracking-tight">
                    Birmingham Campus
                  </h2>
                  <p className="text-gray-400 text-[17px] leading-relaxed">
                    Situated in the iconic Cobalt Square, our Birmingham campus puts you at the center of the UK's second-largest city, renowned for its innovation and growing tech sector.
                  </p>
                </div>
                
                <div className="space-y-8 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-[#00D8C5] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white text-[17px] mb-1">Address</h4>
                      <p className="text-gray-300 leading-relaxed">
                        14th Floor (South) Cobalt Square<br/>
                        83 Hagley Road<br/>
                        Birmingham<br/>
                        B16 8QG
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-[#00D8C5] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white text-[17px] mb-1">Office Hours</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Monday - Friday<br/>
                        09:30 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#00D8C5] hover:bg-[#00ebd3] text-[#0f172a] font-black tracking-wide transition-all rounded-sm shadow-xl w-full sm:w-auto"
                >
                  <Navigation2 className="w-5 h-5" />
                  <span>Get Directions</span>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Global Contact */}
        <section className="py-16 bg-[#eab308]">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[#0E2A47] mb-2">Need immediate assistance?</h3>
                <p className="text-[#0E2A47]/80 font-medium">Our central admissions and support team is ready to help.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="tel:+4402036090260" className="flex items-center gap-3 text-[#0E2A47] hover:bg-white/20 p-3 rounded-xl transition-colors font-bold">
                  <Phone className="w-6 h-6" />
                  <span>(+44) 0203 609 0260</span>
                </a>
                <a href="mailto:info@ukgraduate.org.uk" className="flex items-center gap-3 text-[#0E2A47] hover:bg-white/20 p-3 rounded-xl transition-colors font-bold">
                  <Mail className="w-6 h-6" />
                  <span>info@ukgraduate.org.uk</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
