'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, ArrowRight } from 'lucide-react';

export default function PoliciesPage() {
  const policies = [
    "Academic Appeals Policy",
    "Admissions Policy",
    "Anti-Bullying and Harassment Policy",
    "Attendance and Punctuality Policy",
    "Complaints Policy",
    "Data Protection (GDPR) Policy",
    "Equality and Diversity Policy",
    "Health and Safety Policy",
    "Malpractice and Maladministration Policy",
    "Prevent Duty and Safeguarding Policy",
    "Recognition of Prior Learning (RPL) Policy",
    "Student Disciplinary Policy",
    "Teaching, Learning and Assessment Policy"
  ];

  const forms = [
    "Extenuating Circumstances Form",
    "Reasonable Adjustment Request Form",
    "Student Appeal Form",
    "Student Complaint Form",
    "Withdrawal from Study Form"
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow bg-[#F8F9FA] py-20 lg:py-32">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-24">
            {/* Policies Section */}
            <section>
              <h1 className="text-[48px] md:text-[64px] font-extrabold text-[#0E2A47] mb-12 tracking-tight">
                Policies
              </h1>
              <div className="space-y-3">
                {policies.map((policy, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    className="group flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,216,197,0.1)] hover:border-[#00D8C5]/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-lg bg-[#f8fafc] flex items-center justify-center group-hover:bg-[#00D8C5]/10 transition-colors">
                        <FileText className="w-5 h-5 text-[#64748b] group-hover:text-[#00D8C5]" />
                      </div>
                      <span className="text-[17px] font-semibold text-[#1e293b] group-hover:text-[#0E2A47]">{policy}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#00D8C5] group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </section>

            {/* Student Forms Section */}
            <section>
              <h2 className="text-[36px] md:text-[48px] tracking-tight mb-12">
                <span className="text-[#eab308] font-medium">Student</span> <span className="font-extrabold text-[#0E2A47]">Forms</span>
              </h2>
              <div className="space-y-3">
                {forms.map((form, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    className="group flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(234,179,8,0.1)] hover:border-[#eab308]/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-lg bg-[#f8fafc] flex items-center justify-center group-hover:bg-[#eab308]/10 transition-colors">
                        <FileText className="w-5 h-5 text-[#64748b] group-hover:text-[#eab308]" />
                      </div>
                      <span className="text-[17px] font-semibold text-[#1e293b] group-hover:text-[#0E2A47]">{form}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#eab308] group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </section>

          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
