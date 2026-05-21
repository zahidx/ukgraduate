'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Briefcase, GraduationCap, Search, Menu, X, ChevronDown, Building2, Target, HeartHandshake, Award } from 'lucide-react';

const mainNavLinks = [
  { href: '/resources', label: 'Resources' },
  { href: '/courses', label: 'Courses/Programs' },
  { href: '/campus', label: 'Campus' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#2c2c2c] text-white font-sans z-50 relative">
      {/* Top Utility Bar */}
      <div className="hidden lg:block w-full">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end h-[48px]">
            <Link 
              href="/staff-login" 
              className="flex items-center gap-2 px-6 text-[15px] font-bold text-white hover:text-[#00D8C5] transition-colors border-l border-[#4a4a4a]"
            >
              Staff login
              <Briefcase className="w-4 h-4" />
            </Link>
            <Link 
              href="/student-login" 
              className="flex items-center gap-2 px-6 text-[15px] font-bold text-white hover:text-[#00D8C5] transition-colors border-l border-r border-[#4a4a4a]"
            >
              Student login
              <GraduationCap className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 lg:py-2">
          
          {/* Logo - Kept original logo reference */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/images/project.png" 
                alt="UKGraduate Logo" 
                className="h-24 md:h-24 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center gap-8 mr-10 relative">
              {mainNavLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
                const isAbout = link.label === 'About Us';

                return (
                  <div key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      className={`relative py-1 text-[18px] font-bold tracking-[0.02em] transition-colors flex items-center gap-1.5 ${
                        isActive ? 'text-[#00D8C5]' : 'text-white'
                      } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-bottom-left`}
                    >
                      {link.label}
                      {isAbout && <ChevronDown className="w-4 h-4 mt-0.5 transition-transform duration-300 group-hover:rotate-180" />}
                    </Link>

                    {/* About Us Dropdown */}
                    {isAbout && (
                      <div className="absolute left-1/2 -translate-x-1/2 pt-6 w-[360px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                        <div className="bg-[#f8fafc] rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden">
                          <div className="p-3">
                            <Link href="/about" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white transition-colors group/item">
                              <div className="w-[52px] h-[52px] rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover/item:shadow-md transition-all border border-zinc-100">
                                <Building2 className="w-6 h-6 text-[#0E2A47]" />
                              </div>
                              <span className="text-[#0E2A47] font-medium text-[16px]">About Us</span>
                            </Link>
                            
                            <Link href="/about/mission" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white transition-colors group/item">
                              <div className="w-[52px] h-[52px] rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover/item:shadow-md transition-all border border-zinc-100">
                                <Target className="w-6 h-6 text-[#0E2A47]" />
                              </div>
                              <span className="text-[#0E2A47] font-medium text-[16px]">Our Mission & Vision</span>
                            </Link>

                            <Link href="/about/values" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white transition-colors group/item">
                              <div className="w-[52px] h-[52px] rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover/item:shadow-md transition-all border border-zinc-100">
                                <HeartHandshake className="w-6 h-6 text-[#0E2A47]" />
                              </div>
                              <span className="text-[#0E2A47] font-medium text-[16px] leading-tight">Our Values & Social<br/>Responsibility</span>
                            </Link>

                            <Link href="/about/accreditations" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white transition-colors group/item">
                              <div className="w-[52px] h-[52px] rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover/item:shadow-md transition-all border border-zinc-100">
                                <Award className="w-6 h-6 text-[#0E2A47]" />
                              </div>
                              <span className="text-[#0E2A47] font-medium text-[16px]">Accreditations</span>
                            </Link>
                          </div>
                          
                          <div className="bg-[#f1f5f9] p-6 border-t border-zinc-200">
                            <h4 className="text-[#4A5568] font-medium mb-4 text-[16px]">Documentation</h4>
                            <div className="flex flex-col gap-3">
                              <Link href="/about/policies" className="text-[#7c3aed] hover:text-[#6d28d9] font-medium text-[15px]">Policies</Link>
                              <Link href="/about/qip" className="text-[#7c3aed] hover:text-[#6d28d9] font-medium text-[15px]">QIP</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Search Button */}
            <button 
              className="w-[50px] h-[50px] bg-[#4A4A4A] hover:bg-[#5A5A5A] flex items-center justify-center transition-colors rounded-[2px]"
              aria-label="Search"
            >
              <Search className="w-6 h-6 text-white" />
            </button>
          </nav>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-4 pb-2">
            <button 
              className="w-10 h-10 bg-[#4A4A4A] flex items-center justify-center rounded-[2px]"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 text-white hover:text-[#00D8C5] transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#2c2c2c] ${
          isOpen ? 'max-h-[600px] border-t border-[#4a4a4a]' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-2 space-y-1">
          {mainNavLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-bold border-b border-[#3a3a3a] transition-colors ${
                  isActive ? 'text-[#00D8C5]' : 'text-white hover:text-[#00D8C5]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="grid grid-cols-2 gap-4 py-6">
            <Link
              href="/staff-login"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 py-3 bg-[#3a3a3a] hover:bg-[#4a4a4a] text-sm font-bold text-white rounded transition-colors"
            >
              Staff login <Briefcase className="w-4 h-4" />
            </Link>
            <Link
              href="/student-login"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 py-3 bg-[#3a3a3a] hover:bg-[#4a4a4a] text-sm font-bold text-white rounded transition-colors"
            >
              Student login <GraduationCap className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
