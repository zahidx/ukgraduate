'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck, Heart, Users, Briefcase, Leaf, Globe } from 'lucide-react';

export default function ValuesPage() {
  const values = [
    {
      title: "Business Ethics",
      description: "We conduct our business with the highest standards of integrity, transparency, and fairness in all our dealings.",
      icon: ShieldCheck
    },
    {
      title: "Looking After Learners",
      description: "Our students' success and well-being are at the core of everything we do. We provide unwavering support and guidance.",
      icon: Heart
    },
    {
      title: "Looking After Colleagues",
      description: "We foster an inclusive, respectful workplace that encourages professional growth and values every team member's contribution.",
      icon: Users
    },
    {
      title: "Supplier Standards",
      description: "We partner with suppliers who share our commitment to ethical labor practices, sustainability, and quality.",
      icon: Briefcase
    },
    {
      title: "Protecting the Environment",
      description: "We actively minimize our ecological footprint through sustainable campus practices and green initiatives.",
      icon: Leaf
    },
    {
      title: "Community Engagement",
      description: "We are deeply invested in our local communities, actively participating in outreach and social upliftment programs.",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow bg-[#F7F9FA]">
        
        {/* Hero Section */}
        <section className="bg-white py-20 lg:py-28 border-b border-gray-200">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h1 className="text-[48px] md:text-[56px] font-extrabold text-[#0E2A47] leading-[1.1] tracking-tight">
                  Our Values &<br/>Corporate Social Responsibility
                </h1>
                <p className="text-[18px] text-[#4A5568] leading-relaxed max-w-lg">
                  At UK Graduate College, our principles guide our actions. We believe that true educational excellence goes hand-in-hand with an unwavering commitment to our people, our community, and our planet.
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="/uk_university_campus_hero.png" 
                  alt="Values and Responsibility" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Grid Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[36px] font-bold text-[#0E2A47]">Our Core Pillars</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-[#0f172a] rounded-2xl p-10 text-white shadow-xl hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-[#00D8C5]" />
                    </div>
                    <h3 className="text-[22px] font-bold mb-4">{value.title}</h3>
                    <p className="text-zinc-300 leading-relaxed text-[15px]">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
