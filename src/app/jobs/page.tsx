import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Building, 
  Filter, 
  ChevronDown, 
  ArrowRight,
  TrendingUp,
  Bookmark,
  Calendar,
  DollarSign
} from 'lucide-react';

const jobsList = [
  {
    title: 'Graduate Cloud Security Analyst',
    company: 'Arup',
    location: 'London, UK (Hybrid)',
    salary: '£39,000 / year',
    type: 'Graduate Scheme',
    posted: '2 days ago',
    logoBg: 'bg-indigo-600',
    tags: ['Tech', 'Security', 'Civil Engineering'],
    description: 'Join a world-class digital security engineering team protecting critical national infrastructure and cloud engineering projects.',
  },
  {
    title: 'Junior Quantitative Trader',
    company: 'Barclays Capital',
    location: 'London (City), UK',
    salary: '£52,000 / year',
    type: 'Immediate Entry',
    posted: '1 day ago',
    logoBg: 'bg-emerald-600',
    tags: ['Finance', 'Quant', 'Python'],
    description: 'Operate in high-frequency trading pipelines. Build machine learning statistical algorithms and optimize currency derivative hedging structures.',
  },
  {
    title: 'Systems & Control Engineer',
    company: 'Rolls-Royce',
    location: 'Bristol, UK',
    salary: '£41,500 / year',
    type: 'Rotational Scheme',
    posted: '3 days ago',
    logoBg: 'bg-amber-600',
    tags: ['Engineering', 'Aerospace', 'Systems'],
    description: 'Rotational placements covering next-gen defense propulsion, thermal aerodynamics, and hydrogen turbine simulation engines.',
  },
  {
    title: 'Associate Product Manager (AI Platforms)',
    company: 'Deliveroo',
    location: 'London, UK (Hybrid)',
    salary: '£45,000 / year',
    type: 'Graduate Scheme',
    posted: '5 days ago',
    logoBg: 'bg-teal-600',
    tags: ['Tech', 'Product', 'AI'],
    description: 'Drive consumer growth initiatives. Partner with core neural net engineers to optimize dynamic delivery routing algorithms.',
  },
  {
    title: 'Graduate Business Consulting Associate',
    company: 'PwC UK',
    location: 'Manchester, UK',
    salary: '£36,500 / year',
    type: 'Rotational Scheme',
    posted: '4 days ago',
    logoBg: 'bg-rose-600',
    tags: ['Consulting', 'Business', 'Strategy'],
    description: 'Advise FTSE 100 leaders through digital transformation, supply chain optimization, and deep capital restructuring programs.',
  },
];

export default function JobsPage() {
  return (
    <div className="bg-mesh-glow bg-grid-pattern min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
              Active Vacancies
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Graduate Schemes & Opportunities
            </h1>
            <p className="text-zinc-400 text-sm mt-2 max-w-2xl">
              Discover verified, top-tier rotational programs and entry-level positions currently open for application across the UK.
            </p>
          </div>

          {/* Search Controls */}
          <div className="glass-panel p-4 rounded-2xl mb-8 flex flex-col md:flex-row gap-3">
            <div className="flex-1 flex items-center gap-3 px-3 py-2 bg-zinc-900/40 rounded-xl border border-white/5">
              <Search className="w-5 h-5 text-zinc-500" />
              <input 
                type="text" 
                placeholder="Job title, keyword, skills or company..." 
                className="bg-transparent border-0 text-white placeholder-zinc-500 text-sm focus:outline-none w-full"
              />
            </div>
            <div className="flex-shrink-0 flex items-center gap-3 px-3 py-2 bg-zinc-900/40 rounded-xl border border-white/5 md:w-64">
              <MapPin className="w-5 h-5 text-zinc-500" />
              <input 
                type="text" 
                placeholder="City, region or Remote" 
                className="bg-transparent border-0 text-white placeholder-zinc-500 text-sm focus:outline-none w-full"
              />
            </div>
            <button className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-md shadow-indigo-500/10 flex items-center justify-center gap-2">
              Filter Results
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Filters */}
            <div className="lg:col-span-3 space-y-6">
              <div className="glass-panel p-6 rounded-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                  <h3 className="font-bold text-white text-sm flex items-center gap-2">
                    <Filter className="w-4 h-4 text-indigo-400" />
                    Refine Search
                  </h3>
                  <button className="text-[10px] text-zinc-500 hover:text-white transition-colors uppercase tracking-wider font-semibold">
                    Clear All
                  </button>
                </div>

                {/* Industry Filter */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Industry Sector</h4>
                  <div className="space-y-2">
                    {['Technology & AI', 'Finance & Banking', 'Engineering & Biotech', 'Consulting & Strategy'].map((industry) => (
                      <label key={industry} className="flex items-center gap-2.5 text-xs text-zinc-400 hover:text-white cursor-pointer select-none">
                        <input type="checkbox" className="rounded border-white/10 bg-zinc-900 text-indigo-600 focus:ring-indigo-500/30" />
                        {industry}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Salary Filter */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Salary Ceiling</h4>
                  <div className="space-y-2">
                    {['£30k - £35k', '£35k - £40k', '£40k - £45k', '£45k+'].map((salary) => (
                      <label key={salary} className="flex items-center gap-2.5 text-xs text-zinc-400 hover:text-white cursor-pointer select-none">
                        <input type="checkbox" className="rounded border-white/10 bg-zinc-900 text-indigo-600 focus:ring-indigo-500/30" />
                        {salary}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Scheme Type */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Placement Class</h4>
                  <div className="space-y-2">
                    {['Rotational Graduate Scheme', 'Direct Entry Role', 'Summer Internship', 'Industrial Placement'].map((type) => (
                      <label key={type} className="flex items-center gap-2.5 text-xs text-zinc-400 hover:text-white cursor-pointer select-none">
                        <input type="checkbox" className="rounded border-white/10 bg-zinc-900 text-indigo-600 focus:ring-indigo-500/30" />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Jobs Listings */}
            <div className="lg:col-span-9 space-y-4">
              <div className="flex items-center justify-between text-xs text-zinc-500 font-semibold mb-2">
                <span>Showing 5 verified positions</span>
                <span className="flex items-center gap-1 cursor-pointer hover:text-white">
                  Sort: Relevance <ChevronDown className="w-3.5 h-3.5" />
                </span>
              </div>

              {jobsList.map((job, idx) => (
                <div 
                  key={idx}
                  className="glass-panel p-6 rounded-2xl hover:border-indigo-500/20 hover:shadow-xl transition-all duration-300 relative group"
                >
                  <div className="flex flex-col sm:flex-row gap-6 justify-between items-start">
                    <div className="flex gap-4 items-start">
                      <div className={`w-12 h-12 rounded-xl ${job.logoBg} flex items-center justify-center text-white font-bold shadow-md flex-shrink-0`}>
                        {job.company.substring(0, 2).toUpperCase()}
                      </div>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-bold text-white text-base hover:text-indigo-300 cursor-pointer transition-colors">
                            {job.title}
                          </h3>
                          <span className="text-[10px] text-zinc-500 bg-white/5 border border-white/5 px-2 py-0.5 rounded font-semibold tracking-wider uppercase">
                            {job.type}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-zinc-400">{job.company}</p>
                        
                        <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-2 text-xs text-zinc-500">
                          <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                          <span className="flex items-center gap-1.5 text-indigo-400 font-medium"><DollarSign className="w-3.5 h-3.5" /> {job.salary}</span>
                          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Posted {job.posted}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:flex-col gap-2 w-full sm:w-auto items-center sm:items-end justify-between border-t border-white/5 pt-4 sm:border-t-0 sm:pt-0">
                      <button className="text-zinc-500 hover:text-white transition-colors p-2 bg-white/5 rounded-xl border border-white/5">
                        <Bookmark className="w-4 h-4" />
                      </button>
                      <button className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-xs tracking-wider uppercase shadow-md transition-all group-hover:translate-x-0.5 duration-200">
                        Apply Direct
                      </button>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-4 pt-4 border-t border-white/5">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {job.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-400 text-[10px] font-semibold border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
