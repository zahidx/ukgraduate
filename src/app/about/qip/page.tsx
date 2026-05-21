'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, GraduationCap, TrendingUp, Target, Mail } from 'lucide-react';

export default function QIPPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow bg-[#faf9f6]">
        
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[2rem] shadow-xl p-8 lg:p-16 border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative aspect-square lg:aspect-auto lg:h-[500px] rounded-3xl overflow-hidden bg-[#f3f4f6]">
                  <img src="/uk_university_campus_hero.png" alt="QIP Planning" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
                </div>
                <div className="order-1 lg:order-2 space-y-8">
                  <h1 className="text-[44px] md:text-[56px] font-extrabold tracking-tight leading-[1.1]">
                    <span className="text-[#0E2A47]">Quality Improvement</span><br/>
                    <span className="text-[#eab308]">Plan</span>
                  </h1>
                  <p className="text-[17px] text-gray-600 leading-relaxed">
                    Our Quality Improvement Plan (QIP) is the strategic roadmap driving continuous enhancement across all facets of UK Graduate College. It sets ambitious targets and holds us accountable for delivering excellence.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="mt-1 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-500 font-bold">1</span>
                      </div>
                      <span className="text-gray-700 font-medium">Data-driven performance metrics.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-500 font-bold">2</span>
                      </div>
                      <span className="text-gray-700 font-medium">Regular peer and external reviews.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-500 font-bold">3</span>
                      </div>
                      <span className="text-gray-700 font-medium">Student feedback integration.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning & Teaching */}
        <section className="py-20">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border-4 border-white">
                <img src="/uk_university_campus_hero.png" alt="Learning" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-pink-500" />
                </div>
                <h2 className="text-[36px] font-bold text-[#0E2A47]">Learning & Teaching</h2>
                <p className="text-gray-600 text-[17px] leading-relaxed">
                  We are committed to innovative pedagogies. Our plan emphasizes active learning frameworks, technology-enhanced classrooms, and personalized academic support mechanisms to ensure every student maximizes their potential.
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-4 font-medium">
                  <li>Integration of AI-assisted learning tools.</li>
                  <li>Expanding the peer-mentorship network.</li>
                  <li>Reducing student-to-tutor ratios in practical workshops.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Development */}
        <section className="py-20 bg-white">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-blue-500" />
                </div>
                <h2 className="text-[36px] font-bold text-[#0E2A47]">Professional Development of Staff</h2>
                <p className="text-gray-600 text-[17px] leading-relaxed">
                  Exceptional teaching requires exceptional educators. We heavily invest in the continuous professional development (CPD) of our faculty, ensuring they remain at the forefront of educational research and industry practices.
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-4 font-medium">
                  <li>Mandatory annual industry shadowing.</li>
                  <li>Pedagogical research grants for faculty.</li>
                  <li>Advanced digital literacy certifications.</li>
                </ul>
              </div>
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border-4 border-gray-50 order-1 lg:order-2">
                <img src="/uk_university_campus_hero.png" alt="Development" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes & Areas to Improve */}
        <section className="py-20">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 space-y-6 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-emerald-500" />
                </div>
                <h3 className="text-[28px] font-bold text-[#0E2A47]">Outcomes</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tracking destination data is critical. We aim for a 95% positive outcome rate, measuring graduates who secure relevant employment or progress to higher levels of study within 6 months.
                </p>
              </div>

              <div className="bg-[#0E2A47] text-white p-10 rounded-[2rem] shadow-lg space-y-6 hover:shadow-2xl transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                  <Target className="w-7 h-7 text-[#00D8C5]" />
                </div>
                <h3 className="text-[28px] font-bold text-white">Areas to Improve</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-[#00D8C5] font-bold">→</span>
                    <span className="text-gray-300">Enhancing digital resource accessibility for remote learners.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#00D8C5] font-bold">→</span>
                    <span className="text-gray-300">Expanding corporate partnership pipelines in the biotech sector.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#00D8C5] font-bold">→</span>
                    <span className="text-gray-300">Streamlining the internal extenuating circumstances process.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-[900px] mx-auto px-4 text-center space-y-8">
            <div className="w-20 h-20 rounded-full bg-blue-50 mx-auto flex items-center justify-center">
              <Mail className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-[32px] font-bold text-[#0E2A47]">View the full Quality Improvement Plan</h2>
            <p className="text-[18px] text-gray-600 max-w-2xl mx-auto">
              If you would like to see our complete, detailed Quality Improvement Plan document and its strategic timelines, please contact a member of the management team.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0E2A47] hover:bg-[#163e6e] text-white font-bold rounded-xl transition-colors shadow-lg"
            >
              Contact Management
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
