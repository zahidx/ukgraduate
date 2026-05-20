'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Briefcase, GraduationCap, FileText, Menu, X, ArrowRight, Compass } from 'lucide-react';
import { motion, LayoutGroup } from 'framer-motion';

/** Shared layout animation — slow, smooth slide between nav items */
const navPillTransition = {
  layout: {
    duration: 0.65,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },
  type: 'spring' as const,
  stiffness: 120,
  damping: 24,
  mass: 1.1,
};

const navLinks = [
  { href: '/', label: 'Home', icon: Compass },
  { href: '/jobs', label: 'Graduate Jobs', icon: Briefcase },
  { href: '/universities', label: 'Universities', icon: GraduationCap },
  { href: '/resources', label: 'Resources', icon: FileText },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'glass-nav shadow-lg shadow-black/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Top Utility Bar with Staff/Student Logins */}
      <div className={`border-b border-white/5 bg-zinc-900/40 hidden md:block transition-all duration-300 ease-in-out overflow-hidden ${scrolled ? 'max-h-0 border-b-0 opacity-0' : 'max-h-10 opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end h-10">
            <div className="flex items-center divide-x divide-white/5 border-l border-r border-white/5 h-full">
              <Link 
                href="/staff-login" 
                className="flex items-center gap-2 px-5 h-full text-sm font-bold tracking-wider text-zinc-100 hover:text-white hover:bg-white/5 transition-all"
              >
                <span>Staff login</span>
                <Briefcase className="w-4 h-4 text-zinc-400" />
              </Link>
              <Link 
                href="/student-login" 
                className="flex items-center gap-2 px-5 h-full text-sm font-bold tracking-wider text-zinc-100 hover:text-white hover:bg-white/5 transition-all"
              >
                <span>Student login</span>
                <GraduationCap className="w-4 h-4 text-zinc-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled ? 'py-2.5' : 'py-4'}`}>
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <img 
                src="/images/project.png" 
                alt="UKGraduate Logo" 
                className="h-24 md:h-20 w-auto object-contain img-hover-zoom img-hover-zoom--subtle"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <LayoutGroup id="main-nav">
            <nav className="relative hidden md:flex items-center gap-1 bg-zinc-900/50 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname === link.href || pathname.startsWith(`${link.href}/`);
                const isHovered = hoveredIndex === index;
                const showHoverPill = isHovered && !isActive;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`group relative z-10 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium tracking-wide select-none transition-[color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px ${
                      isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {/* Hover pill — slides between items; hidden on active item */}
                    {showHoverPill && (
                      <motion.div
                        layoutId="navHoverPill"
                        layout
                        className="absolute inset-0 rounded-full bg-white/[0.07] z-0"
                        transition={navPillTransition}
                        initial={false}
                      />
                    )}

                    {/* Active pill — slides smoothly on route change */}
                    {isActive && (
                      <motion.div
                        layoutId="navActivePill"
                        layout
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600/90 to-indigo-500/80 shadow-md shadow-indigo-500/10 z-0"
                        transition={navPillTransition}
                        initial={false}
                      >
                        <div className="absolute inset-0 rounded-full border border-indigo-300/20" />
                      </motion.div>
                    )}

                    <motion.span
                      layout="position"
                      className="relative z-10 flex items-center gap-2"
                      transition={{ layout: navPillTransition.layout }}
                    >
                      <Icon
                        className={`w-4 h-4 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isActive
                            ? 'text-white'
                            : 'text-zinc-400 group-hover:text-zinc-200'
                        }`}
                      />
                      <span className="transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                        {link.label}
                      </span>
                    </motion.span>
                  </Link>
                );
              })}
            </nav>
          </LayoutGroup>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/jobs"
              className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-blue-800"
            >
              <span className="relative flex items-center gap-1.5 px-5 py-2 transition-all ease-in duration-75 bg-zinc-900 rounded-full group-hover:bg-opacity-0">
                Explore Schemes
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-200" />
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-4 space-y-1 bg-zinc-900/95 border-b border-white/5 backdrop-blur-lg">
          {/* Staff & Student login buttons inside mobile menu drawer */}
          <div className="grid grid-cols-2 gap-2 p-2 border-b border-zinc-900 mb-2">
            <Link
              href="/staff-login"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/5 border border-white/5 text-sm font-bold text-zinc-300 hover:text-white transition-all"
            >
              Staff login
              <Briefcase className="w-4 h-4 text-indigo-400" />
            </Link>
            <Link
              href="/student-login"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/5 border border-white/5 text-sm font-bold text-zinc-300 hover:text-white transition-all"
            >
              Student login
              <GraduationCap className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>
          <LayoutGroup id="mobile-nav">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`relative flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/80'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="mobileNavActivePill"
                      layout
                      className="absolute inset-0 rounded-xl bg-indigo-500/20 border-l-4 border-indigo-500"
                      transition={navPillTransition}
                      initial={false}
                    />
                  )}
                  <Icon className="relative z-10 w-5 h-5 text-indigo-400" />
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </LayoutGroup>
          <div className="pt-4 pb-2 border-t border-zinc-900 px-4 flex flex-col gap-3">
            <Link
              href="/jobs"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-center font-semibold text-white shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/25 transition-all"
            >
              Explore Schemes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
