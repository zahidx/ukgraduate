import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventsNoticeDashboard from '@/components/EventsNoticeDashboard';
import { 
  ArrowRight, 
  CheckCircle2,
  Search,
  ChevronDown
} from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-mesh-glow bg-grid-pattern min-h-screen flex flex-col">
      {/* Header / Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-12 lg:py-20 overflow-hidden border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* Left Column: Text Content */}
              <div className="lg:col-span-6 space-y-6 text-left">
                {/* Promotion Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md animate-pulse-slow">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-[#00dfc8]" />
                  <span className="text-[10px] font-bold tracking-wider text-zinc-300 uppercase">
                    Autumn Cohort Admissions
                  </span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-4">
                  Visit our next <br />
                  <span className="text-[#00dfc8]">Open Day</span>
                </h1>

                <p className="text-base sm:text-lg text-zinc-300 max-w-lg leading-relaxed">
                  Explore top UK partner universities and graduate schemes on Saturday 20 June 2026, 10am-2pm.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href="/jobs"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00dfc8] hover:bg-[#00c4b0] text-zinc-950 font-black tracking-wide transition-all duration-200 text-sm rounded shadow-lg shadow-[#00dfc8]/10 hover:shadow-[#00dfc8]/25 active:scale-95"
                  >
                    Register now
                    <ArrowRight className="w-5 h-5 text-zinc-950 stroke-[3px] group-hover:translate-x-1 duration-200" />
                  </Link>
                  <Link
                    href="/universities"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 text-white font-bold transition-all duration-200 text-sm rounded border border-white/10"
                  >
                    Explore Universities
                  </Link>
                </div>

                {/* Quick Trust Checks */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 pt-6 text-zinc-500 text-xs font-semibold">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Verified Partners</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Live Campus Tours</span>
                </div>
              </div>

              {/* Right Column: Campus Image */}
              <div className="lg:col-span-6 relative">
                <div className="relative w-full h-[320px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
                  <img
                    src="/uk_university_campus_hero.png"
                    alt="Historic UK University Open Day Campus"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle glass overlay element matching their premium design */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Absolute Background Glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl -z-10 pointer-events-none" />
        </section>

        {/* Course Search Bar Section */}
        <section className="relative z-20 -mt-10 sm:-mt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl shadow-2xl shadow-black/40 border border-white/10 relative overflow-hidden backdrop-blur-xl bg-zinc-900/80">
            {/* Subtle glow behind the search bar */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00dfc8]/5 via-transparent to-purple-500/5 pointer-events-none" />
            
            <h3 className="text-xl sm:text-2xl font-black text-white mb-6 relative z-10 tracking-tight">
              Find the course that's right for you:
            </h3>
            
            <form className="flex flex-col md:flex-row gap-4 relative z-10">
              {/* Select Course Type */}
              <div className="flex-1 min-w-[200px] lg:min-w-[240px]">
                <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">
                  Select course type
                </label>
                <div className="relative">
                  <select className="w-full h-[56px] appearance-none bg-[#fce7f3] text-zinc-950 font-bold px-5 rounded-xl border border-transparent focus:outline-none focus:ring-4 focus:ring-[#fce7f3]/30 transition-all cursor-pointer shadow-inner">
                    <option value="" className="bg-white text-zinc-950">Undergraduate</option>
                    <option value="postgrad" className="bg-white text-zinc-950">Postgraduate</option>
                    <option value="short" className="bg-white text-zinc-950">Short Courses</option>
                    <option value="apprenticeship" className="bg-white text-zinc-950">Degree Apprenticeships</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-950 pointer-events-none" />
                </div>
              </div>

              {/* Keyword Search */}
              <div className="flex-[2]">
                <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">
                  Enter course, subject or keyword
                </label>
                <div className="relative flex items-center">
                  <input 
                    type="text" 
                    placeholder="e.g. Computer Science, Business Management..." 
                    className="w-full h-[56px] bg-white text-zinc-950 px-5 rounded-xl border border-transparent focus:outline-none focus:ring-4 focus:ring-white/30 transition-all placeholder:text-zinc-500 font-semibold shadow-inner"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex items-end">
                <button 
                  type="button" 
                  className="w-full md:w-auto h-[56px] flex items-center justify-center gap-2 px-8 bg-[#00dfc8] hover:bg-[#00c4b0] text-zinc-950 font-black uppercase tracking-wider text-sm rounded-xl shadow-lg shadow-[#00dfc8]/20 hover:shadow-[#00dfc8]/40 transition-all active:scale-95"
                >
                  <span>Search Courses</span>
                  <Search className="w-4 h-4 stroke-[3px]" />
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Section 1: The UEL-Inspired 3-Column Bold Statistics Banner */}
        <section className="relative z-10 border-y border-white/5 bg-zinc-900">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Column 1: Vibrant Teal block */}
            <div className="group bg-[#00dfc8] text-zinc-950 p-12 lg:p-16 flex flex-col justify-between min-h-[320px] transition-colors duration-500 ease-out hover:bg-[#00ebd3] z-10 cursor-default">
              <div className="space-y-4 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1 group-hover:translate-x-1">
                <span className="text-4xl sm:text-5xl font-black tracking-tighter block leading-none">
                  96% SUCCESS
                </span>
                <h4 className="text-lg font-black uppercase tracking-wider">
                  Career Success Outcomes
                </h4>
                <p className="text-sm font-semibold leading-relaxed text-zinc-900/80">
                  Graduate placement, rotational scheme, or further academic specialization within 6 months of corporate matching.
                </p>
              </div>
              <div className="pt-8 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1 group-hover:translate-x-1">
                <a href="/resources" className="inline-flex items-center gap-2 font-black text-sm uppercase tracking-wider border-b-2 border-zinc-950 pb-0.5 hover:border-zinc-700 transition-colors">
                  Explore Outcomes Report →
                </a>
              </div>
            </div>

            {/* Column 2: Vibrant Soft Gold/Yellow block */}
            <div className="group bg-[#ffcc00] text-zinc-950 p-12 lg:p-16 flex flex-col justify-between min-h-[320px] transition-colors duration-500 ease-out hover:bg-[#ffd633] z-10 cursor-default">
              <div className="space-y-4 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1 group-hover:translate-x-1">
                <span className="text-4xl sm:text-5xl font-black tracking-tighter block leading-none">
                  £42,500 AVG
                </span>
                <h4 className="text-lg font-black uppercase tracking-wider">
                  Starting Graduate Salary
                </h4>
                <p className="text-sm font-semibold leading-relaxed text-zinc-900/80">
                  Average base salary recorded across our technology, finance, and system engineering schemes last term.
                </p>
              </div>
              <div className="pt-8 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1 group-hover:translate-x-1">
                <a href="/resources" className="inline-flex items-center gap-2 font-black text-sm uppercase tracking-wider border-b-2 border-zinc-950 pb-0.5 hover:border-zinc-700 transition-colors">
                  Salary Benchmark Tool →
                </a>
              </div>
            </div>

            {/* Column 3: Soft Dark Charcoal block */}
            <div className="group bg-[#27272a] text-zinc-100 p-12 lg:p-16 flex flex-col justify-between min-h-[320px] transition-colors duration-500 ease-out hover:bg-[#323236] z-10 cursor-default">
              <div className="space-y-4 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1 group-hover:translate-x-1">
                <span className="text-4xl sm:text-5xl font-black tracking-tighter block leading-none text-[#00dfc8]">
                  12,000+ ROLES
                </span>
                <h4 className="text-lg font-black uppercase tracking-wider text-zinc-300">
                  Active Hiring Pipelines
                </h4>
                <p className="text-sm font-medium leading-relaxed text-zinc-400">
                  Verified entry-level vacancies, rotational programs, and corporate fast-track schemes currently open.
                </p>
              </div>
              <div className="pt-8 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1 group-hover:translate-x-1">
                <Link href="/jobs" className="inline-flex items-center gap-2 font-black text-sm uppercase tracking-wider text-[#00dfc8] border-b-2 border-[#00dfc8]/30 hover:border-[#00dfc8] pb-0.5 transition-colors">
                  Search active vacancies →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1.2: Events & Notices Dashboard */}
        <EventsNoticeDashboard />

        {/* Section 1.5: UEL-Inspired Interactive Pathway & Scheme Finder */}
        <section className="py-12 bg-zinc-800/40 border-b border-white/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#00dfc8] block mb-2">
              DISCOVER YOUR PATH
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-6">
              Search Graduate Schemes & Industry Tracks
            </h3>
            
            {/* Quick search input */}
            <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-3 bg-zinc-900 p-2.5 rounded-2xl border border-white/5 shadow-2xl">
              <input 
                type="text" 
                placeholder="What industry, scheme or job title are you looking for?" 
                className="flex-1 bg-transparent px-4 py-3 text-white placeholder-zinc-500 text-sm font-semibold focus:outline-none"
              />
              <Link 
                href="/jobs"
                className="px-8 py-3.5 bg-[#00dfc8] hover:bg-[#00c4b0] text-zinc-950 font-black uppercase tracking-wider text-xs rounded-xl shadow-lg transition-all text-center"
              >
                Search Pathways
              </Link>
            </div>
            
            {/* Quick Tags filter links */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6 max-w-2xl mx-auto text-[11px] font-bold text-zinc-400">
              <span className="text-zinc-500">Popular Searches:</span>
              <Link href="/jobs" className="px-3 py-1 bg-white/5 rounded-md hover:bg-white/10 hover:text-white transition-colors border border-white/5">Rotational Finance</Link>
              <Link href="/jobs" className="px-3 py-1 bg-white/5 rounded-md hover:bg-white/10 hover:text-white transition-colors border border-white/5">AI Engineer</Link>
              <Link href="/jobs" className="px-3 py-1 bg-white/5 rounded-md hover:bg-white/10 hover:text-white transition-colors border border-white/5">Clinical Biotech</Link>
              <Link href="/jobs" className="px-3 py-1 bg-white/5 rounded-md hover:bg-white/10 hover:text-white transition-colors border border-white/5">Media & UX</Link>
            </div>
          </div>
        </section>

        {/* Section 2: Alternating 50/50 Split Blocks (Copying UEL Layout Format) */}
        <section className="relative">
          {/* Split 1: Startup Incubator (Image Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Image Box */}
            <div className="relative min-h-[360px] sm:min-h-[480px] bg-zinc-800 overflow-hidden">
              <img 
                src="/images/incubator.png" 
                alt="UKGraduate Startup Incubator london" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent pointer-events-none" />
            </div>
            
            {/* Text Box: Soft Beige/Stone background with high-contrast black text */}
            <div className="bg-[#f5f5f4] text-zinc-950 p-12 sm:p-20 flex flex-col justify-center space-y-6 text-left relative">
              <div className="w-1.5 h-16 bg-[#00dfc8] absolute left-0 top-12 lg:top-20" />
              <span className="text-xs font-black uppercase tracking-widest text-zinc-500">
                INNOVATION & ADVENTURE
              </span>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Accelerate Your Trajectory: The Graduate Incubator
              </h3>
              <p className="text-zinc-700 text-sm sm:text-base font-semibold leading-relaxed">
                Got a ground-breaking idea? Our startup accelerator gives you physical co-working space access, up to £10k equity-free seed funding, and direct lines to premier venture capitalists in the London tech corridor.
              </p>
              <div className="pt-4">
                <Link 
                  href="/resources" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-950 hover:bg-zinc-900 text-white font-black uppercase tracking-wider text-xs transition-all duration-200"
                >
                  Launch your start-up
                </Link>
              </div>
            </div>
          </div>

          {/* Split 2: 1-on-1 Mentorship (Text Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Text Box: Dark Charcoal background with white text */}
            <div className="bg-[#1f2022] text-white p-12 sm:p-20 flex flex-col justify-center space-y-6 text-left relative lg:order-1 order-2">
              <div className="w-1.5 h-16 bg-[#ffcc00] absolute left-0 top-12 lg:top-20" />
              <span className="text-xs font-black uppercase tracking-widest text-zinc-400">
                1-ON-1 GUIDANCE
              </span>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Elite Corporate Mentorship Programs
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Every UKGraduate member is paired 1-on-1 with a senior industry executive from organizations like Google, Bloomberg, or McKinsey. Gain access to weekly strategy calls, mock panels, and direct referrals.
              </p>
              <div className="pt-4">
                <Link 
                  href="/resources" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00dfc8] hover:bg-[#00c4b0] text-zinc-950 font-black uppercase tracking-wider text-xs transition-all duration-200 shadow-md shadow-[#00dfc8]/10"
                >
                  Apply for mentorship
                </Link>
              </div>
            </div>

            {/* Image Box */}
            <div className="relative min-h-[360px] sm:min-h-[480px] bg-zinc-800 overflow-hidden lg:order-2 order-1">
              <img 
                src="/images/mentorship.png" 
                alt="Elite Business Mentorship Meeting" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Split 3: Global Placements (Image Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Image Box */}
            <div className="relative min-h-[360px] sm:min-h-[480px] bg-zinc-800 overflow-hidden">
              <img 
                src="/images/techtrek.png" 
                alt="International technology consulting trek Singapore" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent pointer-events-none" />
            </div>

            {/* Text Box: Soft Pink/Rose background with high-contrast black text */}
            <div className="bg-[#fce7f3] text-zinc-950 p-12 sm:p-20 flex flex-col justify-center space-y-6 text-left relative">
              <div className="w-1.5 h-16 bg-[#a855f7] absolute left-0 top-12 lg:top-20" />
              <span className="text-xs font-black uppercase tracking-widest text-pink-600">
                GLOBAL OPPORTUNITY
              </span>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Global Placements & Innovation Treks
              </h3>
              <p className="text-zinc-700 text-sm sm:text-base font-semibold leading-relaxed">
                Gain international experience with paid, short-term summer consulting sprints in Silicon Valley, Zurich, and Singapore. Expand your network, solve real-world problems, and master global work cultures.
              </p>
              <div className="pt-4">
                <Link 
                  href="/universities" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-950 hover:bg-zinc-900 text-white font-black uppercase tracking-wider text-xs transition-all duration-200"
                >
                  View international tracks
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2.3: "Pioneering Futures" Graduate Success Spotlights (Testimonials Grid) */}
        <section className="py-20 bg-zinc-900 border-t border-white/5 relative overflow-hidden">
          {/* Subtle bg glow */}
          <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#00dfc8]">
                PIONEERING FUTURES
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Our Graduates. Elite Outcomes.
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                See how actual graduates accelerated their career trajectory and secured premium placements with UK’s FTSE 100 leaders.
              </p>
            </div>
            
            {/* Testimonials 3-Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Sophia */}
              <div className="bg-[#1f2022] rounded-3xl overflow-hidden border border-white/5 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#00dfc8]/5 transition-all duration-300 hover:-translate-y-1">
                <div className="p-8 space-y-6">
                  {/* Quote text */}
                  <p className="text-sm font-semibold text-zinc-300 italic leading-relaxed">
                    "The Incubator startup accelerator gave me the core technical confidence and peer network to ace my Mock Panels. Today, I lead cloud security initiatives at Google."
                  </p>
                  
                  {/* Profile section */}
                  <div className="flex items-center gap-4">
                    <img 
                      src="/images/sophia.png" 
                      alt="Sophia Chen Tech Graduate" 
                      className="w-12 h-12 rounded-full object-cover border border-white/10"
                    />
                    <div>
                      <h4 className="text-sm font-black text-white">Sophia Chen</h4>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Software Architect, Google</p>
                    </div>
                  </div>
                </div>
                <div className="px-8 py-4 bg-zinc-950/40 border-t border-white/5 flex justify-between items-center text-[10px] font-black uppercase tracking-wider text-[#00dfc8]">
                  <span>Incubator Cohort 2025</span>
                  <span>Teal Track</span>
                </div>
              </div>

              {/* Card 2: Marcus */}
              <div className="bg-[#1f2022] rounded-3xl overflow-hidden border border-white/5 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#ffcc00]/5 transition-all duration-300 hover:-translate-y-1">
                <div className="p-8 space-y-6">
                  {/* Quote text */}
                  <p className="text-sm font-semibold text-zinc-300 italic leading-relaxed">
                    "My 1-on-1 industry mentor from Barclays Capital helped refine my financial modeling skills and gave me direct referrals that got me in the door."
                  </p>
                  
                  {/* Profile section */}
                  <div className="flex items-center gap-4">
                    <img 
                      src="/images/marcus.png" 
                      alt="Marcus Vance Finance Graduate" 
                      className="w-12 h-12 rounded-full object-cover border border-white/10"
                    />
                    <div>
                      <h4 className="text-sm font-black text-white">Marcus Vance</h4>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Investment Banker, Barclays</p>
                    </div>
                  </div>
                </div>
                <div className="px-8 py-4 bg-zinc-950/40 border-t border-white/5 flex justify-between items-center text-[10px] font-black uppercase tracking-wider text-[#ffcc00]">
                  <span>Mentorship Cohort 2025</span>
                  <span>Gold Track</span>
                </div>
              </div>

              {/* Card 3: Eleanor */}
              <div className="bg-[#1f2022] rounded-3xl overflow-hidden border border-white/5 flex flex-col justify-between hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-300 hover:-translate-y-1">
                <div className="p-8 space-y-6">
                  {/* Quote text */}
                  <p className="text-sm font-semibold text-zinc-300 italic leading-relaxed">
                    "Participating in the Singapore biotech innovation trek changed everything. Working inside clean labs gave me the global resume to secure AstraZeneca immediately."
                  </p>
                  
                  {/* Profile section */}
                  <div className="flex items-center gap-4">
                    <img 
                      src="/images/eleanor.png" 
                      alt="Eleanor Vance Science Graduate" 
                      className="w-12 h-12 rounded-full object-cover border border-white/10"
                    />
                    <div>
                      <h4 className="text-sm font-black text-white">Eleanor Vance</h4>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Biotech Lead, AstraZeneca</p>
                    </div>
                  </div>
                </div>
                <div className="px-8 py-4 bg-zinc-950/40 border-t border-white/5 flex justify-between items-center text-[10px] font-black uppercase tracking-wider text-purple-400">
                  <span>Placements Cohort 2024</span>
                  <span>Rose Track</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2.6: Careers News & Insights Hub */}
        <section className="py-20 bg-zinc-900 border-t border-white/5 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#00dfc8]">
                  NEWS & INSIGHTS HUB
                </span>
                <h3 className="text-3xl font-bold text-white tracking-tight mt-2">
                  Latest Placement News
                </h3>
              </div>
              <Link 
                href="/resources" 
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#00dfc8] hover:text-[#00c4b0] border-b border-[#00dfc8]/30 hover:border-[#00dfc8] pb-0.5 transition-all"
              >
                Read all insights
              </Link>
            </div>

            {/* 3-Column News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {/* News 1 */}
              <div className="space-y-4 group cursor-pointer">
                <div className="relative aspect-[16/10] bg-zinc-800 rounded-2xl overflow-hidden border border-white/5">
                  <img src="/images/news_alliance.png" alt="Alliance News" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/40 via-transparent to-zinc-950/80 pointer-events-none transition-opacity duration-500 group-hover:opacity-80" />
                  <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded text-[9px] font-black uppercase tracking-wider text-[#00dfc8] border border-white/5 z-10">
                    ALLIANCE NEWS
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-zinc-500">MAY 19, 2026</span>
                  <h4 className="text-lg font-black text-white group-hover:text-[#00dfc8] transition-colors leading-snug">
                    UKGraduate Partners with FTSE 100 leaders to expand 1-on-1 mentorship scheme.
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                    Over 500 senior directors from tech, investment banking, and biomedical firms join our weekly curriculum alignment panels.
                  </p>
                </div>
              </div>

              {/* News 2 */}
              <div className="space-y-4 group cursor-pointer">
                <div className="relative aspect-[16/10] bg-zinc-800 rounded-2xl overflow-hidden border border-white/5">
                  <img src="/images/news_awards.png" alt="Awards & Honours" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/40 via-transparent to-zinc-950/80 pointer-events-none transition-opacity duration-500 group-hover:opacity-80" />
                  <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded text-[9px] font-black uppercase tracking-wider text-[#ffcc00] border border-white/5 z-10">
                    AWARDS & HONOURS
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-zinc-500">MAY 15, 2026</span>
                  <h4 className="text-lg font-black text-white group-hover:text-[#00dfc8] transition-colors leading-snug">
                    Tech Nation awards UKGraduate "Top Employability Platform 2026".
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                    Recognized for bridging the curriculum gap and establishing high-trust entry pipelines directly into UK technology corridors.
                  </p>
                </div>
              </div>

              {/* News 3 */}
              <div className="space-y-4 group cursor-pointer">
                <div className="relative aspect-[16/10] bg-zinc-800 rounded-2xl overflow-hidden border border-white/5">
                  <img src="/images/news_vacancy.png" alt="Vacancy Announcement" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/40 via-transparent to-zinc-950/80 pointer-events-none transition-opacity duration-500 group-hover:opacity-80" />
                  <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded text-[9px] font-black uppercase tracking-wider text-purple-400 border border-white/5 z-10">
                    VACANCY ANNOUNCEMENT
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-zinc-500">MAY 12, 2026</span>
                  <h4 className="text-lg font-black text-white group-hover:text-[#00dfc8] transition-colors leading-snug">
                    New Rotational Engineering Placements open in Bristol and Cambridge for Autumn Cohort.
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                    Arup and Rolls-Royce launch systems and control placements welcoming direct applications from partner directories immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: High-Contrast Action Ribbons (Banner highlights) */}
        <section className="relative z-10 text-left">
          {/* Ribbon 1: The Warm Gold Pathways Ribbon */}
          <div className="bg-[#ffcc00] text-zinc-950 py-8 px-6 sm:px-12 border-b border-zinc-950/10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-1 max-w-3xl">
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-800">
                  UPCOMING CAREERS EVENT
                </span>
                <p className="text-lg sm:text-xl font-black tracking-tight">
                  Autumn Cohort Careers Launchpad: Meet 80+ FTSE 100 hiring managers in London on Saturday 24 October.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-[#ffcc00] font-black uppercase tracking-wider text-xs transition-all duration-200"
                >
                  Secure Free Pass
                </a>
              </div>
            </div>
          </div>

          {/* Ribbon 2: The Teal Advisory Ribbon */}
          <div className="bg-[#00dfc8] text-zinc-950 py-8 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-1 max-w-3xl">
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-800">
                  1-ON-1 STRATEGY SUPPORT
                </span>
                <p className="text-lg sm:text-xl font-black tracking-tight">
                  Need customized career mapping? Connect with a pathway strategist to tailor your graduate applications.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-zinc-950 text-white hover:bg-white hover:text-zinc-950 font-black uppercase tracking-wider text-xs transition-all duration-200"
                >
                  Get Pathway Advice
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Accreditations Alliance trust badge ribbon */}
        <section className="py-20 bg-zinc-950 border-b border-white/5 relative overflow-hidden select-none">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 relative z-10">
            <div className="space-y-3">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-cyan-400 bg-cyan-400/5 border border-cyan-400/20 px-3 py-1 rounded-full inline-block">
                Trusted Academic & Industry Partners
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight">
                Partnered with Leaders in British Industry & Education
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto font-medium leading-relaxed">
                Syncing directly with elite corporate recruiters, research initiatives, and higher education leaders to power seamless graduate career pathways.
              </p>
            </div>

            {/* Custom CSS for seamless infinite loop marquee */}
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                display: flex;
                width: max-content;
                animation: marquee 30s linear infinite;
              }
              .animate-marquee:hover {
                animation-play-state: paused;
              }
            `}</style>

            {/* Infinite Loop Marquee Container */}
            <div className="relative w-full overflow-hidden py-4">
              {/* Fade masks for smooth edges */}
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
              
              <div className="animate-marquee flex gap-12 sm:gap-20 items-center">
                {/* First Set of Logos */}
                <div className="flex gap-12 sm:gap-20 items-center">
                  <span className="text-base sm:text-lg font-black tracking-tighter text-zinc-500 hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> TECH NATION UK
                  </span>
                  <span className="text-base sm:text-lg font-black tracking-tighter text-zinc-500 hover:text-purple-400 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> CDA ALLIANCE
                  </span>
                  <span className="text-base sm:text-lg font-black tracking-tighter text-zinc-500 hover:text-pink-400 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400" /> NESTA INNOVATE
                  </span>
                  <span className="text-base sm:text-lg font-black tracking-tighter text-zinc-500 hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> HESA INSIGHTS
                  </span>
                  <span className="text-base sm:text-lg font-black tracking-tighter text-zinc-500 hover:text-yellow-400 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" /> GRADUATE OUTCOMES
                  </span>
                  
                  {/* Universities in the marquee */}
                  <span className="text-base sm:text-lg font-black tracking-tighter text-zinc-500 hover:text-indigo-400 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> IMPERIAL LONDON
                  </span>
                  <span className="text-base sm:text-lg font-black tracking-tighter text-zinc-500 hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> UNIVERSITY COLLEGE LONDON
                  </span>
                  <span className="text-base sm:text-lg font-black tracking-tighter text-zinc-500 hover:text-rose-400 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" /> MANCHESTER ALLIANCE
                  </span>
                  <span className="text-base sm:text-lg font-black tracking-tighter text-zinc-500 hover:text-teal-400 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" /> BRISTOL PLACEMENTS
                  </span>
                </div>

                {/* Second Duplicate Set for Infinite Scroll */}
                <div className="flex gap-12 sm:gap-20 items-center">
                  <span className="text-base sm:text-lg font-black tracking-tighter text-zinc-500 hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> TECH NATION UK
                  </span>
                  <span className="text-base sm:text-lg font-black tracking-tighter text-zinc-500 hover:text-purple-400 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> CDA ALLIANCE
                  </span>
                  <span className="text-base sm:text-lg font-black tracking-tighter text-zinc-500 hover:text-pink-400 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400" /> NESTA INNOVATE
                  </span>
                  <span className="text-base sm:text-lg font-black tracking-tighter text-zinc-500 hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> HESA INSIGHTS
                  </span>
                  <span className="text-base sm:text-lg font-black tracking-tighter text-zinc-500 hover:text-yellow-400 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" /> GRADUATE OUTCOMES
                  </span>
                  
                  {/* Universities in the marquee */}
                  <span className="text-base sm:text-lg font-black tracking-tighter text-zinc-500 hover:text-indigo-400 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> IMPERIAL LONDON
                  </span>
                  <span className="text-base sm:text-lg font-black tracking-tighter text-zinc-500 hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> UNIVERSITY COLLEGE LONDON
                  </span>
                  <span className="text-base sm:text-lg font-black tracking-tighter text-zinc-500 hover:text-rose-400 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" /> MANCHESTER ALLIANCE
                  </span>
                  <span className="text-base sm:text-lg font-black tracking-tighter text-zinc-500 hover:text-teal-400 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" /> BRISTOL PLACEMENTS
                  </span>
                </div>
              </div>
            </div>
            
            {/* Grid of Verified Badges/Cards below the marquee */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-4">
              <div className="glass-panel p-4 rounded-2xl border border-white/5 bg-zinc-900/40 hover:border-cyan-500/25 transition-all duration-300">
                <span className="text-[10px] font-extrabold text-[#00dfc8] uppercase tracking-wider block">TECH NATION</span>
                <span className="text-[9px] text-zinc-500 font-semibold mt-1 block">Accredited Member</span>
              </div>
              <div className="glass-panel p-4 rounded-2xl border border-white/5 bg-zinc-900/40 hover:border-purple-500/25 transition-all duration-300">
                <span className="text-[10px] font-extrabold text-purple-400 uppercase tracking-wider block">CDA ALLIANCE</span>
                <span className="text-[9px] text-zinc-500 font-semibold mt-1 block">Founding Member</span>
              </div>
              <div className="glass-panel p-4 rounded-2xl border border-white/5 bg-zinc-900/40 hover:border-pink-500/25 transition-all duration-300">
                <span className="text-[10px] font-extrabold text-pink-400 uppercase tracking-wider block">NESTA UK</span>
                <span className="text-[9px] text-zinc-500 font-semibold mt-1 block">Innovation Hub</span>
              </div>
              <div className="glass-panel p-4 rounded-2xl border border-white/5 bg-zinc-900/40 hover:border-blue-500/25 transition-all duration-300">
                <span className="text-[10px] font-extrabold text-blue-400 uppercase tracking-wider block">HESA INSIGHTS</span>
                <span className="text-[9px] text-zinc-500 font-semibold mt-1 block">Metrics Sync</span>
              </div>
              <div className="glass-panel p-4 rounded-2xl border border-white/5 bg-zinc-900/40 hover:border-yellow-500/25 transition-all duration-300 col-span-2 sm:col-span-1">
                <span className="text-[10px] font-extrabold text-yellow-400 uppercase tracking-wider block">GRADUATE HUB</span>
                <span className="text-[9px] text-zinc-500 font-semibold mt-1 block">Outcomes Verified</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
