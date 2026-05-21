'use client';

import React from 'react';
import { Mail, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow bg-[#F7F9FA] pt-12 md:pt-20 pb-24">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column - Form */}
          <div className="lg:col-span-8">
            <h1 className="text-[44px] md:text-[52px] font-bold text-[#0E2A47] mb-6 tracking-tight">
              Get in touch 🖐
            </h1>
            <p className="text-[17px] text-[#4A5568] mb-12 leading-[1.8] max-w-3xl">
              Want to get in touch? We'd love to hear from you. Here's how you can reach us: either complete the form, email us or just pick up the phone to chat with a member of our team.
            </p>

            <form className="space-y-10 max-w-[650px]" onSubmit={(e) => e.preventDefault()}>
              {/* Name Field */}
              <div className="flex flex-col group">
                <label htmlFor="name" className="text-[#0E2A47] font-semibold text-[15px] mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="type full name" 
                  className="w-full bg-transparent border-0 border-b-[2px] border-[#CBD5E0] focus:border-[#0E2A47] focus:ring-0 px-0 py-2.5 text-[#0E2A47] placeholder:text-[#A0AEC0] placeholder:italic transition-colors focus:outline-none"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-[#0E2A47] font-semibold text-[15px] mb-2">E-Mail</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="hello@youremail.com" 
                  className="w-full bg-transparent border-0 border-b-[2px] border-[#CBD5E0] focus:border-[#0E2A47] focus:ring-0 px-0 py-2.5 text-[#0E2A47] placeholder:text-[#A0AEC0] placeholder:italic transition-colors focus:outline-none"
                />
              </div>

              {/* Telephone Field */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-[#0E2A47] font-semibold text-[15px] mb-2">Telephone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="enter phone number" 
                  className="w-full bg-transparent border-0 border-b-[2px] border-[#CBD5E0] focus:border-[#0E2A47] focus:ring-0 px-0 py-2.5 text-[#0E2A47] placeholder:text-[#A0AEC0] placeholder:italic transition-colors focus:outline-none"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-[#0E2A47] font-semibold text-[15px] mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="enter your message.." 
                  className="w-full bg-transparent border-0 border-b-[2px] border-[#CBD5E0] focus:border-[#0E2A47] focus:ring-0 px-0 py-2.5 text-[#0E2A47] placeholder:text-[#A0AEC0] placeholder:italic transition-colors resize-none focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  className="bg-[#0E2A47] hover:bg-[#163e6e] text-white font-bold py-[18px] px-12 rounded-[2px] transition-colors w-full sm:w-auto text-[16px] tracking-wide"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right Column - Info */}
          <div className="lg:col-span-4 space-y-12 pt-4 lg:pt-[110px]">
            
            {/* London */}
            <div>
              <h3 className="text-[#0E2A47] font-bold text-[19px] mb-3">London</h3>
              <div className="text-[#4A5568] leading-[1.8] text-[16px]">
                <p>UK Graduate College</p>
                <p>3-5 Eastern Road,</p>
                <p>Romford</p>
                <p>RM1 3NH</p>
              </div>
            </div>

            {/* London Office Hours */}
            <div>
              <h3 className="text-[#0E2A47] font-bold text-[19px] mb-3">London Office Hours</h3>
              <div className="text-[#4A5568] leading-[1.8] text-[16px]">
                <p>Monday - Friday</p>
                <p>9.30 AM - 5.30 PM</p>
              </div>
            </div>

            {/* Birmingham */}
            <div>
              <h3 className="text-[#0E2A47] font-bold text-[19px] mb-3">Birmingham</h3>
              <div className="text-[#4A5568] leading-[1.8] text-[16px]">
                <p>14th Floor (South) Cobalt Square,</p>
                <p>83 Hagley Road,</p>
                <p>Birmingham</p>
                <p>B16 8QG</p>
              </div>
            </div>

            {/* Birmingham Office Hours */}
            <div>
              <h3 className="text-[#0E2A47] font-bold text-[19px] mb-3">Birmingham Office Hours</h3>
              <div className="text-[#4A5568] leading-[1.8] text-[16px]">
                <p>Monday - Friday</p>
                <p>09:30 AM - 6 PM</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-[#0E2A47] font-bold text-[19px] mb-5">Contact</h3>
              <div className="space-y-4">
                <a href="mailto:info@ukgraduate.org.uk" className="flex items-center gap-3 group w-fit">
                  <Mail className="w-[18px] h-[18px] text-[#4A5568] group-hover:text-[#0E2A47] transition-colors mt-0.5" />
                  <span className="text-[#0E2A47] italic font-medium group-hover:underline text-[16.5px]">info@ukgraduate.org.uk</span>
                </a>
                <a href="tel:+4402036090260" className="flex items-center gap-3 group w-fit">
                  <Phone className="w-[18px] h-[18px] text-[#4A5568] group-hover:text-[#0E2A47] transition-colors mt-0.5" />
                  <span className="text-[#0E2A47] italic font-medium group-hover:underline text-[16.5px]">UK (+44) 0203 609 0260</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
