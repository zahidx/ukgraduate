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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to our Career Newsletter!');
  };

  return (
    <footer className="relative bg-gradient-to-b from-zinc-950 via-zinc-950 to-[#0e0c1a] border-t border-white/5 py-20 mt-auto overflow-hidden text-zinc-300">
      {/* Decorative Atmospheric Glows for Premium Aesthetic */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-12 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
      
      {/* Ultra-Premium Glowing Gradient Border Line at Top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 via-purple-500 via-pink-500 via-yellow-400 to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tier 1: Branding and Dynamic Newsletter Row */}
        <div className="pb-12 mb-12 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/project.png" 
                alt="UKGraduate Logo" 
                className="h-10 md:h-12 w-auto object-contain brightness-110 filter drop-shadow-[0_0_10px_rgba(0,223,200,0.2)]" 
              />
              <span className="text-zinc-600 text-lg font-light">|</span>
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#00dfc8] bg-[#00dfc8]/5 border border-[#00dfc8]/20 px-2.5 py-1 rounded">
                Alliance Gateway
              </span>
            </div>
            <p className="text-sm text-zinc-400 max-w-xl leading-relaxed">
              UKGraduate is the premier digital gateway bridging British industry leadership and exceptional academic talent, fostering strategic hiring pipelines across international technology, finance, and engineering sectors.
            </p>
          </div>
          
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-purple-500/10 blur-2xl group-hover:bg-purple-500/20 transition-all duration-500" />
              <h4 className="text-sm font-extrabold text-white mb-2 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                Join the Career Newsletter
              </h4>
              <p className="text-xs text-zinc-400 mb-4 font-medium">
                Get notified instantly when premium FTSE 100 graduate schemes go live.
              </p>
              <form
                onSubmit={handleSubscribe}
                className="footer-newsletter-form grid grid-cols-1 gap-2 lg:grid-cols-[minmax(0,1fr)_auto]"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full min-w-0 h-11 bg-zinc-950/70 border border-white/10 focus:border-[#00dfc8]/60 focus:ring-2 focus:ring-[#00dfc8]/10 text-white rounded-xl px-4 text-xs font-semibold placeholder:text-zinc-500 outline-none transition-all"
                />
                <button
                  type="submit"
                  className="w-full lg:w-auto h-11 px-5 justify-self-stretch lg:justify-self-auto bg-gradient-to-r from-[#00dfc8] to-[#00bda9] text-zinc-950 font-black text-xs uppercase tracking-wider rounded-xl hover:shadow-[0_0_20px_rgba(0,223,200,0.3)] transition-all active:scale-95 duration-200 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Tier 2: 4-Column Directory Links & Contacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Column 1: Alliance Office & Direct Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#00dfc8] mb-4">
                Alliance Headquarters
              </h4>
              <div className="space-y-2 text-sm text-zinc-400 font-semibold leading-relaxed">
                <p className="text-zinc-200 font-extrabold tracking-wide">UKGraduate Career Portal Ltd.</p>
                <p>128 City Road</p>
                <p>London, EC1V 2NX</p>
                <p>United Kingdom</p>
              </div>
            </div>

            <div className="space-y-3.5 pt-2">
              <div className="text-xs sm:text-sm text-zinc-400 font-semibold">
                <span className="text-zinc-500 font-bold block mb-1">Direct Inquiries:</span>
                <a 
                  href="tel:+442036090260" 
                  className="text-white hover:text-[#00dfc8] transition-colors border-b border-white/10 hover:border-[#00dfc8]/50 font-black pb-0.5 tracking-wide text-sm"
                >
                  (+44) 0203 609 0260
                </a>
              </div>
              <div className="text-xs sm:text-sm text-zinc-400 font-semibold">
                <span className="text-zinc-500 font-bold block mb-1">Email:</span>
                <a 
                  href="mailto:info@ukgraduate.org.uk" 
                  className="text-white hover:text-[#00dfc8] transition-colors border-b border-white/10 hover:border-[#00dfc8]/50 font-black pb-0.5 tracking-wide text-sm"
                >
                  info@ukgraduate.org.uk
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Explore Portal */}
          <div className="lg:col-span-3 lg:pl-4 space-y-5">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">
              Explore Portal
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-bold text-zinc-400">
              <li>
                <Link href="/jobs" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 group">
                  <span className="h-[1px] w-0 bg-[#00dfc8] group-hover:w-2 transition-all duration-200" />
                  Graduate Schemes
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 group">
                  <span className="h-[1px] w-0 bg-[#00dfc8] group-hover:w-2 transition-all duration-200" />
                  Immediate Entry Roles
                </Link>
              </li>
              <li>
                <Link href="/universities" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 group">
                  <span className="h-[1px] w-0 bg-[#00dfc8] group-hover:w-2 transition-all duration-200" />
                  Partner Registry
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 group">
                  <span className="h-[1px] w-0 bg-[#00dfc8] group-hover:w-2 transition-all duration-200" />
                  Salary Calculators
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 group">
                  <span className="h-[1px] w-0 bg-[#00dfc8] group-hover:w-2 transition-all duration-200" />
                  CV Template Bundle
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 group">
                  <span className="h-[1px] w-0 bg-[#00dfc8] group-hover:w-2 transition-all duration-200" />
                  Assessment Prep
                </Link>
              </li>
              <li>
                <Link href="/universities" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 group">
                  <span className="h-[1px] w-0 bg-[#00dfc8] group-hover:w-2 transition-all duration-200" />
                  Institutional Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: The Alliance */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">
              The Alliance
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-bold text-zinc-400">
              <li>
                <Link href="/universities" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 group">
                  <span className="h-[1px] w-0 bg-[#00dfc8] group-hover:w-2 transition-all duration-200" />
                  Partner Universities
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 group">
                  <span className="h-[1px] w-0 bg-[#00dfc8] group-hover:w-2 transition-all duration-200" />
                  Industry Streams
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 group">
                  <span className="h-[1px] w-0 bg-[#00dfc8] group-hover:w-2 transition-all duration-200" />
                  Employability Metrics
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 group">
                  <span className="h-[1px] w-0 bg-[#00dfc8] group-hover:w-2 transition-all duration-200" />
                  Integration API
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 group">
                  <span className="h-[1px] w-0 bg-[#00dfc8] group-hover:w-2 transition-all duration-200" />
                  Mentorship Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: System Info & Support */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-5">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">
                Support & Status
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm font-bold text-zinc-400">
                <li>
                  <a href="#" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 group">
                    <span className="h-[1px] w-0 bg-[#00dfc8] group-hover:w-2 transition-all duration-200" />
                    Help & Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00dfc8] hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 group">
                    <span className="h-[1px] w-0 bg-[#00dfc8] group-hover:w-2 transition-all duration-200" />
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Elegant Operational Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 shadow-inner">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse-slow" />
                <span className="text-[10px] font-black tracking-wider text-emerald-400 uppercase">
                  System Status: Operational
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 3: Bottom Legal strip & Social Connect Row */}
        <div className="pt-8 flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-8 text-xs text-zinc-500 font-semibold">
          
          <div className="space-y-4">
            <p>© {new Date().getFullYear()} UKGraduate Career Portal Ltd. All rights reserved.</p>
            
            {/* Legal / Policy Links */}
            <div className="flex flex-wrap gap-x-5 gap-y-2.5 text-zinc-400 font-bold max-w-3xl">
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
              <span className="text-zinc-800">·</span>
              <a href="#" className="hover:text-white transition-colors">Data protection</a>
              <span className="text-zinc-800">·</span>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              <span className="text-zinc-800">·</span>
              <a href="#" className="hover:text-white transition-colors">Modern slavery</a>
              <span className="text-zinc-800">·</span>
              <a href="#" className="hover:text-white transition-colors">Legal and compliance</a>
              <span className="text-zinc-800">·</span>
              <a href="#" className="hover:text-white transition-colors">Cookie settings</a>
              <span className="text-zinc-800">·</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-zinc-800">·</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>

          {/* Glowing Glassmorphic Social Media Connect Circle Badges */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest self-start lg:self-end">
              CONNECT WITH THE ALLIANCE
            </span>
            <div className="flex flex-wrap gap-2.5">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#1877F2]/10 hover:border-[#1877F2]/40 hover:text-[#1877F2] hover:scale-110 hover:shadow-[0_0_15px_rgba(24,119,242,0.2)] transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5 fill-current stroke-[1]" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-white hover:border-white hover:text-zinc-950 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300"
                aria-label="X (formerly Twitter)"
              >
                <XIcon className="w-4.5 h-4.5 fill-none" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/40 hover:text-[#0A66C2] hover:scale-110 hover:shadow-[0_0_15px_rgba(10,102,194,0.2)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4.5 h-4.5 fill-none" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#FF0000]/10 hover:border-[#FF0000]/40 hover:text-[#FF0000] hover:scale-110 hover:shadow-[0_0_15px_rgba(255,0,0,0.2)] transition-all duration-300"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-5 h-5 fill-none" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#E1306C]/10 hover:border-[#E1306C]/40 hover:text-[#E1306C] hover:scale-110 hover:shadow-[0_0_15px_rgba(225,48,108,0.2)] transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4.5 h-4.5 fill-none" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* STICKY/ABSOLUTE DECORATIVE & INTERACTIVE ELEMENTS */}
      
      {/* 1. Yellow vertical feedback tab "Help us improve →" */}
      <div className="hidden md:flex absolute right-0 top-16 z-20 items-center">
        <a 
          href="#"
          className="bg-[#ffcc00] hover:bg-[#ffd633] text-zinc-950 font-black text-[10px] uppercase tracking-wider py-4 px-2.5 rounded-l-xl shadow-2xl hover:shadow-[0_0_20px_rgba(255,204,0,0.35)] transition-all hover:-translate-x-1 duration-300 flex items-center gap-2 group cursor-pointer"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
          }}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 animate-ping" />
            <span>Help us improve</span>
          </span>
          <span className="text-sm font-black transition-transform group-hover:translate-y-1 duration-200">→</span>
        </a>
      </div>

      {/* 2. Sleek Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 z-20 w-14 h-16 rounded-xl bg-zinc-900 border border-white/10 hover:border-[#00dfc8]/50 text-white flex flex-col items-center justify-center transition-all duration-300 group active:scale-95 shadow-2xl hover:shadow-[0_0_20px_rgba(0,223,200,0.2)] cursor-pointer"
        aria-label="Back to top"
      >
        <ArrowUpIcon className="w-5 h-5 text-[#00dfc8] group-hover:-translate-y-1 transition-transform duration-300" />
        <span className="text-[9px] font-black uppercase tracking-tight text-center leading-none mt-1.5 text-zinc-400 group-hover:text-white transition-colors">
          Back<br />to top
        </span>
      </button>
    </footer>
  );
}
