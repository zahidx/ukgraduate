'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, BookOpen, Globe2, Briefcase, Code } from 'lucide-react';
import Link from 'next/link';

export default function CoursesPage() {
  const categories = [
    {
      title: "University Pathway Programmes",
      description: "Fast-track your route to a Top 50 UK University. Our intensive foundation and pathway diplomas are meticulously designed to equip international and domestic students with the academic rigor and English proficiency required for premier higher education.",
      icon: Globe2,
      color: "bg-blue-600",
      image: "/uk_university_campus_hero.png"
    },
    {
      title: "Employability & Career Skills",
      description: "Bridge the gap between education and the corporate world. These short, high-impact courses focus on leadership, critical thinking, and technical literacies demanded by modern employers.",
      icon: Briefcase,
      color: "bg-emerald-600",
      image: "/uk_university_campus_hero.png"
    },
    {
      title: "Technology & Digital Innovation",
      description: "Master the tools of tomorrow. From foundational coding bootcamps to advanced data analysis, our tech curriculum is built in partnership with industry leaders to guarantee relevance.",
      icon: Code,
      color: "bg-purple-600",
      image: "/uk_university_campus_hero.png"
    },
    {
      title: "English & ESOL",
      description: "Communicate with absolute confidence. Our ESOL programs are tailored to all proficiency levels, focusing on immersive, practical language skills for both academic environments and professional workplaces.",
      icon: BookOpen,
      color: "bg-rose-600",
      image: "/uk_university_campus_hero.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow bg-white">
        
        {/* Hero Section */}
        <section className="bg-[#f4f4f0] py-24 lg:py-32 border-b border-gray-200">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h1 className="text-[56px] md:text-[72px] font-bold text-[#0E2A47] tracking-tight leading-tight">
              Explore our Courses
            </h1>
            <p className="text-[18px] md:text-[20px] text-gray-600 font-light max-w-2xl mx-auto tracking-wide">
              Develop new skills, unlock your potential, and take the definitive next step in your career with our industry-aligned curriculum.
            </p>
          </div>
        </section>

        {/* Course Categories List */}
        <section className="py-20 lg:py-32 space-y-24 lg:space-y-40">
          {categories.map((category, index) => (
            <div key={index} className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Text Content */}
                <div className={`space-y-8 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center shadow-lg`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-[40px] font-bold text-[#0E2A47] leading-[1.1] tracking-tight">
                    {category.title}
                  </h2>
                  <p className="text-[17px] text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="pt-4">
                    <Link 
                      href="#" 
                      className={`inline-flex items-center justify-center gap-3 px-8 py-4 ${category.color} hover:opacity-90 text-white font-bold tracking-wide transition-all shadow-xl hover:shadow-2xl rounded-sm`}
                    >
                      <span>GET STARTED</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className={`absolute inset-0 opacity-20 mix-blend-multiply ${category.color}`} />
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
              </div>
            </div>
          ))}
        </section>

      </main>
      <Footer />
    </div>
  );
}
