'use client';

import React from 'react';
import Link from 'next/link';

// Custom inline SVG icons matching standard platforms for 100% build reliability
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const ArrowUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-zinc-900 to-zinc-900/95 border-t border-white/5 py-16 mt-auto overflow-hidden text-zinc-300">
      {/* Decorative Atmospheric Glows for Premium Aesthetic */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-12 w-80 h-80 rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-white/5">
          {/* Column 1: Social Media & Address */}
          <div className="lg:col-span-5 space-y-6 lg:pr-8">
            <div>
              {/* Heading Text Increased and Styled Extremely Bold */}
              <h4 className="text-2xl sm:text-[23px] font-black uppercase tracking-widest text-[#00dfc8] mb-3 select-none">
                SOCIAL MEDIA
              </h4>
              <p className="text-xs text-zinc-400 font-semibold mb-4">
                Follow us on social media:
              </p>
              
              {/* White Square Social Media Icons with Glowing Hover States */}
              <div className="flex flex-wrap gap-2.5">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8.5 h-8.5 rounded bg-white flex items-center justify-center text-zinc-950 hover:bg-[#00dfc8] hover:text-zinc-950 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,223,200,0.4)] transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4.5 h-4.5 fill-current stroke-[1]" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8.5 h-8.5 rounded bg-white flex items-center justify-center text-zinc-950 hover:bg-[#00dfc8] hover:text-zinc-950 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,223,200,0.4)] transition-all duration-300"
                  aria-label="X (formerly Twitter)"
                >
                  <XIcon className="w-4 h-4 fill-none" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8.5 h-8.5 rounded bg-white flex items-center justify-center text-zinc-950 hover:bg-[#00dfc8] hover:text-zinc-950 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,223,200,0.4)] transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4 fill-none" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8.5 h-8.5 rounded bg-white flex items-center justify-center text-zinc-950 hover:bg-[#00dfc8] hover:text-zinc-950 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,223,200,0.4)] transition-all duration-300"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4.5 h-4.5 fill-none" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8.5 h-8.5 rounded bg-white flex items-center justify-center text-zinc-950 hover:bg-[#00dfc8] hover:text-zinc-950 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,223,200,0.4)] transition-all duration-300"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4 fill-none" />
                </a>
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8.5 h-8.5 rounded bg-white flex items-center justify-center text-zinc-950 hover:bg-[#00dfc8] hover:text-zinc-950 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,223,200,0.4)] transition-all duration-300"
                  aria-label="TikTok"
                >
                  <TiktokIcon className="w-4.5 h-4.5 fill-none" />
                </a>
              </div>
            </div>

            {/* Line Divider */}
            <div className="border-t border-zinc-800 max-w-sm" />

            {/* Contact Details */}
            <div className="space-y-3.5 text-xs sm:text-sm text-zinc-400 font-semibold leading-relaxed">
              <p className="text-zinc-200 font-extrabold text-sm sm:text-base tracking-wide">UKGraduate Career Portal Ltd.</p>
              <p>128 City Road</p>
              <p>London, EC1V 2NX</p>
              <p>United Kingdom</p>
              
              <div className="pt-2">
                <p>
                  Contact us:{' '}
                  <a 
                    href="tel:+442079460192" 
                    className="text-[#00dfc8] hover:text-[#00c4b0] transition-colors border-b border-[#00dfc8]/30 hover:border-[#00dfc8] font-black pb-0.5 tracking-wide"
                  >
                    +44 20 7946 0192
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Explore Portal */}
          <div className="lg:col-span-3 lg:pl-6 lg:border-l lg:border-white/5 space-y-6">
            {/* Heading Text Increased and Styled Extremely Bold */}
            <h4 className="text-2xl sm:text-[23px] font-black uppercase tracking-widest text-[#00dfc8] select-none">
              EXPLORE PORTAL
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm font-bold text-zinc-400">
              <li>
                <Link href="/jobs" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-300 inline-block">
                  Graduate Schemes
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-300 inline-block">
                  Immediate Entry Roles
                </Link>
              </li>
              <li>
                <Link href="/universities" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-300 inline-block">
                  Partner Registry
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-300 inline-block">
                  Salary Calculators
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-300 inline-block">
                  CV Template Bundle
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-300 inline-block">
                  Assessment Prep
                </Link>
              </li>
              <li>
                <Link href="/universities" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-300 inline-block">
                  Institutional Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: The Alliance */}
          <div className="lg:col-span-4 lg:pl-6 lg:border-l lg:border-white/5 space-y-6">
            {/* Heading Text Increased and Styled Extremely Bold */}
            <h4 className="text-2xl sm:text-[23px] font-black uppercase tracking-widest text-[#00dfc8] select-none">
              THE ALLIANCE
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm font-bold text-zinc-400">
              <li>
                <Link href="/universities" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-300 inline-block">
                  Partner Universities
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-300 inline-block">
                  Industry Streams
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-300 inline-block">
                  Employability Metrics
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-300 inline-block">
                  Integration API
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-300 inline-block">
                  Mentorship Programs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-300 inline-block">
                  System Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-300 inline-block">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 text-xs text-zinc-500 font-semibold">
          <div>
            <p>© {new Date().getFullYear()} UKGraduate Career Portal Ltd. All rights reserved.</p>
          </div>
          
          {/* Mini Links from Image */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 max-w-2xl text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            <a href="#" className="hover:text-white transition-colors">Data protection</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            <a href="#" className="hover:text-white transition-colors">Modern slavery</a>
            <a href="#" className="hover:text-white transition-colors">Legal and compliance</a>
            <a href="#" className="hover:text-white transition-colors">Cookie settings</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* STICKY/ABSOLUTE DECORATIVE & INTERACTIVE ELEMENTS FROM THE IMAGE */}
      
      {/* 1. Yellow vertical feedback tab "Help us improve →" */}
      <div className="hidden md:flex absolute right-0 top-12 z-20 items-center">
        <a 
          href="#"
          className="bg-[#ffcc00] hover:bg-[#e6b800] text-zinc-950 font-black text-[11px] uppercase tracking-wider py-4 px-2.5 rounded-l-md shadow-lg transition-colors flex items-center gap-1.5"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
          }}
        >
          <span>Help us improve</span>
          <span className="text-sm">→</span>
        </a>
      </div>

      {/* 2. Sleek Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 z-20 w-14 h-16 rounded bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-200 shadow-xl flex flex-col items-center justify-center transition-all duration-200 group active:scale-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        aria-label="Back to top"
      >
        <ArrowUpIcon className="w-5 h-5 text-zinc-800 group-hover:-translate-y-0.5 transition-transform duration-200" />
        <span className="text-[9px] font-extrabold uppercase tracking-tight text-center leading-none mt-1">
          Back<br />to top
        </span>
      </button>
    </footer>
  );
}
