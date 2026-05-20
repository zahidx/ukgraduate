import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  FileText, 
  Download, 
  Calculator, 
  Clock, 
  Sparkles, 
  HelpCircle, 
  ChevronRight, 
  ArrowUpRight,
  ShieldAlert
} from 'lucide-react';

const resources = [
  {
    title: 'ATS-Optimized CV Templates',
    type: 'Downloadable Asset',
    size: '1.2 MB • DOCX',
    icon: FileText,
    description: 'Highly-stylized CV layouts engineered specifically to clear modern Applicant Tracking Systems utilized by Goldman Sachs, Google, and Rolls-Royce.',
    action: 'Download Template Bundle',
  },
  {
    title: 'UK Graduate Salary Calculator',
    type: 'Interactive Tool',
    size: 'Web Application',
    icon: Calculator,
    description: 'Calculate net take-home salaries incorporating Student Loan Plan 2 repayments, national insurance bands, and regional UK tax brackets.',
    action: 'Launch Calculator',
  },
  {
    title: 'Assessment Centre Simulation Tests',
    type: 'Mock Assessments',
    size: '12 Exercises',
    icon: HelpCircle,
    description: 'Prepare with authentic situational judgment exams, numerical reasoning structures, and collaborative case-study blueprints.',
    action: 'Start Practice Exam',
  },
  {
    title: 'Graduate Scheme Timeline Roadmap',
    type: 'Planning Blueprint',
    size: '800 KB • PDF',
    icon: Clock,
    description: 'Stay ahead of standard recruitment cycles. Comprehensive visual map outlining critical opening, closing, and interviewing phases.',
    action: 'View Interactive Map',
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-mesh-glow bg-grid-pattern min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
              Career Toolkit
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Graduate Career Hub & Resources
            </h1>
            <p className="text-zinc-400 text-sm mt-2 max-w-2xl">
              Equip yourself with premium materials, guides, and instruments crafted to maximize your interview conversion ratios and corporate potential.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((res, idx) => {
              const Icon = res.icon;
              return (
                <div 
                  key={idx}
                  className="glass-panel p-6 sm:p-8 rounded-3xl hover:border-indigo-500/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-indigo-400 group-hover:scale-105 duration-200">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider bg-zinc-900 border border-white/5 px-3 py-1 rounded-full">
                        {res.type}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="font-extrabold text-white text-base sm:text-lg group-hover:text-indigo-300 transition-colors mt-2">
                        {res.title}
                      </h3>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-2.5">
                        {res.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between border-t border-white/5 mt-8 pt-4.5">
                    <span className="text-[10px] text-zinc-500 font-medium tracking-wide">
                      {res.size}
                    </span>
                    <button className="flex items-center gap-1.5 text-xs font-bold text-white bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-xl border border-white/10 transition-colors duration-200">
                      {res.action}
                      <Download className="w-3.5 h-3.5 text-zinc-400" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Premium Mentorship Card */}
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-indigo-500/20 mt-12 relative overflow-hidden flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full blur-3xl bg-indigo-500/10 pointer-events-none" />
            
            <div className="space-y-3 relative z-10 max-w-xl text-center sm:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-sm shadow-indigo-500/10">
                <Sparkles className="w-3.5 h-3.5" /> High Potential Exclusive
              </span>
              <h3 className="font-extrabold text-white text-xl sm:text-2xl leading-snug">
                One-on-One Interview Blueprint Mock Sessions
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Connect with corporate alumni from Google and McKinsey. Refine your narrative formulas, leadership profiles, and whiteboard execution.
              </p>
            </div>

            <button className="flex-shrink-0 relative z-10 px-6 py-3.5 rounded-2xl bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-xs tracking-wider uppercase shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 group">
              Apply for Mentorship
              <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
