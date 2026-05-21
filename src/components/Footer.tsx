'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Custom inline SVG icons matching standard platforms
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const AnimatedLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="relative inline-block transition-colors pb-1 font-normal group after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#00D8C5] after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
  >
    {children}
  </Link>
);

export default function Footer() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [dismissHelp, setDismissHelp] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="relative bg-[#2c2c2c] pt-16 pb-20 w-full overflow-hidden text-white font-sans">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 xl:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Column 1: Social Media & Address */}
          <div className="flex flex-col">
            <h2 className="text-[#00D8C5] text-3xl font-bold mb-8 tracking-wide">
              SOCIAL MEDIA
            </h2>
            <p className="text-white text-[15px] mb-4 font-normal tracking-wide">
              Follow us on social media:
            </p>
            <div className="flex gap-3 mb-8">
              {[
                { Icon: FacebookIcon, label: 'Facebook' },
                { Icon: XIcon, label: 'X' },
                { Icon: LinkedinIcon, label: 'LinkedIn' },
                { Icon: YoutubeIcon, label: 'YouTube' },
                { Icon: InstagramIcon, label: 'Instagram' },
                { Icon: TiktokIcon, label: 'TikTok' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={social.label}
                  className="w-[30px] h-[30px] bg-white flex items-center justify-center rounded-[2px] hover:bg-gray-200 transition-colors"
                >
                  <social.Icon className="w-[18px] h-[18px] text-[#2c2c2c]" />
                </a>
              ))}
            </div>

            <hr className="border-t-[1.5px] border-[#9ca3af] w-full max-w-[280px] mb-8 opacity-50" />

            <div className="space-y-1.5 text-[15px] font-normal tracking-wide text-white/95">
              <p>UK Graduate College</p>
              <p>3-5 Eastern Road,</p>
              <p>Romford</p>
              <p className="pb-3">RM1 3NH</p>
              
              <div className="flex flex-col gap-2 pt-2">
                <p>
                  Contact us:{' '}
                  <a href="tel:+4402036090260" className="relative inline-block transition-colors pb-0.5 font-normal group after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#00D8C5] after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left">
                    (+44) 0203 609 0260
                  </a>
                </p>
                <p>
                  Mobile:{' '}
                  <a href="tel:+447305179186" className="relative inline-block transition-colors pb-0.5 font-normal group after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#00D8C5] after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left">
                    (+44) 7305 179 186
                  </a>
                </p>
                <p>
                  Email:{' '}
                  <a href="mailto:info@ukgraduate.org.uk" className="relative inline-block transition-colors pb-0.5 font-normal group after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#00D8C5] after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left">
                    info@ukgraduate.org.uk
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Explore UEL */}
          <div className="flex flex-col">
            <h2 className="text-[#00D8C5] text-3xl font-bold mb-8 tracking-wide">
              EXPLORE UEL
            </h2>
            <ul className="space-y-3 text-[15px] tracking-wide text-white/95">
              {[
                'About UEL',
                'Take a virtual tour',
                'Calendars',
                'Accreditations',
                'Governance management',
                'Services and departments',
                'Find us',
                'Contact us'
              ].map((item, idx) => (
                <li key={idx}>
                  <AnimatedLink href="#">{item}</AnimatedLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: The University */}
          <div className="flex flex-col">
            <h2 className="text-[#00D8C5] text-3xl font-bold mb-8 tracking-wide">
              THE UNIVERSITY
            </h2>
            <ul className="space-y-3 text-[15px] tracking-wide text-white/95">
              {[
                'Undergraduate',
                'Postgraduate',
                'News',
                'Events',
                'Blog',
                'Jobs'
              ].map((item, idx) => (
                <li key={idx}>
                  <AnimatedLink href="#">{item}</AnimatedLink>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="mt-20 flex flex-col xl:flex-row items-start xl:items-end gap-12 text-[14px] font-normal text-white/90 tracking-wide">
          <p className="max-w-[200px] leading-relaxed">
            Copyright @2026 UK Graduate College
          </p>
          
          <div className="flex flex-col gap-5 flex-1 w-full xl:ml-12">
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <AnimatedLink href="#">Accessibility</AnimatedLink>
              <AnimatedLink href="#">Data protection</AnimatedLink>
              <AnimatedLink href="#">Sitemap</AnimatedLink>
              <AnimatedLink href="#">AccessAble</AnimatedLink>
              <AnimatedLink href="#">Modern slavery</AnimatedLink>
              <AnimatedLink href="#">Legal and compliance</AnimatedLink>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <AnimatedLink href="#">Cookie settings</AnimatedLink>
              <AnimatedLink href="#">Privacy</AnimatedLink>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Buttons with Scroll Visibility and Close on Hover */}
      <div 
        className={`fixed right-0 top-1/4 z-50 transition-all duration-700 ease-in-out group ${
          isFooterVisible && !dismissHelp ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <button 
          onClick={(e) => { e.preventDefault(); setDismissHelp(true); }}
          className="absolute -top-3 -left-3 bg-[#2c2c2c] border border-white/20 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md z-10 hover:bg-gray-700"
          aria-label="Close"
        >
          <CloseIcon className="w-2.5 h-2.5" />
        </button>
        <a 
          href="#"
          className="bg-[#FFC72C] text-[#2c2c2c] hover:bg-[#ffda66] transition-colors font-semibold text-[16px] py-4 w-11 flex flex-col items-center justify-center rounded-l-md shadow-lg"
        >
          <svg className="w-5 h-5 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
          </svg>
          <span 
            style={{ 
              writingMode: 'vertical-rl', 
              transform: 'rotate(180deg)' 
            }}
            className="tracking-wide"
          >
            Help us improve
          </span>
        </a>
      </div>

      <div
        className={`fixed right-4 bottom-4 lg:right-6 lg:bottom-6 z-50 transition-all duration-700 ease-in-out group ${
          isFooterVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <button 
          onClick={scrollToTop}
          className="w-16 py-3 bg-[#f8f9fa] text-[#2c2c2c] flex flex-col items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:bg-gray-200 transition-colors rounded-md relative"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
          </svg>
          <span className="text-[12px] font-light tracking-wide text-center leading-[1.2]">
            Back<br />to top
          </span>
        </button>
      </div>

    </footer>
  );
}
