import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GraduationCap, MapPin, Award, Users, ChevronRight, Search, ShieldCheck } from 'lucide-react';

const universities = [
  {
    name: 'Imperial College London',
    abbreviation: 'ICL',
    location: 'Kensington, London',
    rating: '98.5',
    activeSchemes: '3,450',
    topSector: 'Artificial Intelligence & Robotics',
    color: 'from-blue-600 to-indigo-600',
    employers: ['DeepMind', 'ARM', 'Goldman Sachs'],
  },
  {
    name: 'University College London',
    abbreviation: 'UCL',
    location: 'Bloomsbury, London',
    rating: '96.2',
    activeSchemes: '2,900',
    topSector: 'Biotechnology & FinTech',
    color: 'from-purple-600 to-indigo-600',
    employers: ['AstraZeneca', 'HSBC', 'Deliveroo'],
  },
  {
    name: 'The University of Manchester',
    abbreviation: 'UoM',
    location: 'Manchester, UK',
    rating: '94.8',
    activeSchemes: '2,100',
    topSector: 'Advanced Materials & Graphene',
    color: 'from-amber-600 to-rose-600',
    employers: ['Rolls-Royce', 'Dyson', 'WPP'],
  },
  {
    name: 'University of Bristol',
    abbreviation: 'BRIS',
    location: 'Bristol, UK',
    rating: '93.5',
    activeSchemes: '1,850',
    topSector: 'Aerospace & Microelectronics',
    color: 'from-cyan-600 to-blue-600',
    employers: ['Arup', 'BBC', 'Jaguar Land Rover'],
  },
];

export default function UniversitiesPage() {
  return (
    <div className="bg-mesh-glow bg-grid-pattern min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
              Higher Education Alliance
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Our UK Partner Universities
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              We sync academic excellence with industry pipelines. Explore our founding institutional partners providing direct corporate hiring schemes.
            </p>

            {/* Quick Mock Interactive Search */}
            <div className="max-w-md mx-auto pt-4">
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-zinc-900/60 border border-white/10 backdrop-blur-md">
                <Search className="w-4 h-4 text-zinc-500" />
                <input 
                  type="text" 
                  placeholder="Search partner universities by name or city..." 
                  className="bg-transparent border-0 text-white placeholder-zinc-600 text-xs focus:outline-none w-full"
                />
              </div>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {universities.map((uni, idx) => (
              <div 
                key={idx}
                className="glass-panel rounded-3xl p-6 sm:p-8 hover:border-indigo-500/30 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Background glow shadow */}
                <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-indigo-500/5 blur-2xl pointer-events-none group-hover:bg-indigo-500/10 transition-all duration-300" />

                <div>
                  {/* Header Row */}
                  <div className="flex gap-4 items-center">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${uni.color} text-white font-extrabold flex items-center justify-center text-lg tracking-wider shadow-lg`}>
                      {uni.abbreviation}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-white text-lg sm:text-xl group-hover:text-indigo-200 transition-colors">
                        {uni.name}
                      </h3>
                      <span className="flex items-center gap-1 text-xs text-zinc-500 font-semibold mt-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {uni.location}
                      </span>
                    </div>
                  </div>

                  {/* Core Metrics grid */}
                  <div className="grid grid-cols-2 gap-4 my-8 bg-zinc-900/40 p-4.5 rounded-2xl border border-white/5">
                    <div>
                      <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider block">Employability Rating</span>
                      <span className="text-emerald-400 text-lg font-extrabold flex items-center gap-1 mt-1">
                        <Award className="w-4 h-4 text-emerald-400" />
                        {uni.rating}%
                      </span>
                    </div>
                    <div className="border-l border-white/5 pl-4">
                      <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider block">Direct Open Schemes</span>
                      <span className="text-white text-lg font-extrabold flex items-center gap-1 mt-1">
                        <Users className="w-4 h-4 text-indigo-400" />
                        {uni.activeSchemes}
                      </span>
                    </div>
                  </div>

                  {/* Top Sector and Employers */}
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">Leading Research Field</span>
                      <span className="text-zinc-300 text-xs font-semibold">{uni.topSector}</span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">Top Recruiters This Term</span>
                      <div className="flex flex-wrap gap-1.5">
                        {uni.employers.map((emp) => (
                          <span 
                            key={emp}
                            className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-white/5 text-[10px] text-zinc-400 font-semibold"
                          >
                            {emp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 mt-8 pt-6">
                  <span className="flex items-center gap-1.5 text-xs text-zinc-500 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" /> Verified Partner Institution
                  </span>
                  <button className="flex items-center gap-1 text-xs font-bold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                    Explore Placement Tracks
                    <ChevronRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
