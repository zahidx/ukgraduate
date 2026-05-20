'use client';

import React, { useState } from 'react';
import { Code, DollarSign, Building, TrendingUp, Cpu, Landmark, HardHat, Palette, ArrowUpRight } from 'lucide-react';

const tracks = [
  {
    id: 'tech',
    title: 'Technology & AI',
    icon: Cpu,
    salary: '£42,500',
    growth: '+14% YoY',
    demand: 'High',
    description: 'Lead the digital revolution. Next-gen opportunities in artificial intelligence, software engineering, cloud architecture, and cybersecurity across London, Cambridge, and Bristol.',
    employers: ['Google', 'DeepMind', 'ARM', 'Meta', 'Deliveroo'],
    skills: ['React / Next.js', 'Python & AI Models', 'TypeScript', 'AWS / GCP'],
    color: 'from-cyan-500 to-blue-500',
    glow: 'rgba(6, 182, 212, 0.15)',
  },
  {
    id: 'finance',
    title: 'Investment & Finance',
    icon: Landmark,
    salary: '£48,000',
    growth: '+8% YoY',
    demand: 'Very High',
    description: 'Navigate the global markets. Join elite analyst tracks, quantitative trading desks, corporate M&A advisory, and FinTech pioneers in the City of London.',
    employers: ['Barclays', 'Goldman Sachs', 'HSBC', 'Rothschild & Co', 'Revolut'],
    skills: ['Financial Modeling', 'Quantitative Analysis', 'Python', 'Asset Allocation'],
    color: 'from-emerald-500 to-teal-500',
    glow: 'rgba(16, 185, 129, 0.15)',
  },
  {
    id: 'engineering',
    title: 'Engineering & Biotech',
    icon: HardHat,
    salary: '£38,500',
    growth: '+11% YoY',
    demand: 'High',
    description: 'Construct the future. From sustainable energy grids and aerospace engineering to cutting-edge CRISPR research and medical robotics in Oxford\'s biotech hub.',
    employers: ['Rolls-Royce', 'AstraZeneca', 'Dyson', 'Jaguar Land Rover', 'Arup'],
    skills: ['CAD & Revit', 'Clinical Trialling', 'MATLAB', 'Systems Engineering'],
    color: 'from-amber-500 to-orange-500',
    glow: 'rgba(245, 158, 11, 0.15)',
  },
  {
    id: 'creative',
    title: 'Design & Marketing',
    icon: Palette,
    salary: '£32,000',
    growth: '+18% YoY',
    demand: 'Medium',
    description: 'Shape brand narratives. Lead product design pipelines, digital advertising algorithms, user experience strategy, and dynamic media campaigns in Manchester\'s MediaCity.',
    employers: ['WPP', 'BBC', 'Spotify', 'Dentsu', 'TikTok'],
    skills: ['Figma & UI/UX', 'SEO Optimization', 'Brand Strategy', 'Data Analytics'],
    color: 'from-pink-500 to-rose-500',
    glow: 'rgba(236, 72, 153, 0.15)',
  },
];

export default function CareerTracks() {
  const [activeTrack, setActiveTrack] = useState(tracks[0]);

  return (
    <div className="w-full">
      {/* Navigation tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {tracks.map((track) => {
          const Icon = track.icon;
          const isActive = activeTrack.id === track.id;
          return (
            <button
              key={track.id}
              onClick={() => setActiveTrack(track)}
              className={`flex items-center gap-3 p-4 rounded-2xl text-left border transition-all duration-300 ${
                isActive
                  ? `glass-panel border-indigo-500/40 shadow-lg shadow-indigo-500/5 translate-y-[-2px]`
                  : 'bg-zinc-900/30 border-white/5 hover:border-white/10 hover:bg-zinc-900/50'
              }`}
            >
              <div
                className={`p-2.5 rounded-xl bg-gradient-to-tr ${track.color} text-white shadow-md`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-zinc-100">{track.title}</h4>
                <p className="text-[11px] text-zinc-500 font-medium">Avg: {track.salary}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Details Panel */}
      <div
        className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden transition-all duration-500"
        style={{
          boxShadow: `0 20px 40px -15px ${activeTrack.glow}`,
        }}
      >
        {/* Absolute glow element background */}
        <div
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-30 animate-pulse-slow bg-gradient-to-tr transition-all duration-500"
          style={{
            backgroundImage: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${activeTrack.color} text-white shadow-sm`}>
                <TrendingUp className="w-3.5 h-3.5" />
                {activeTrack.growth} Growth
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
                {activeTrack.title}
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-4">
                {activeTrack.description}
              </p>
            </div>

            {/* Core Stats Grid */}
            <div className="grid grid-cols-3 gap-4 bg-zinc-900/40 p-4.5 rounded-2xl border border-white/5">
              <div>
                <p className="text-zinc-500 text-xs font-medium">Average Starting</p>
                <p className="text-white text-lg sm:text-xl font-bold mt-1 tracking-tight flex items-center">
                  <DollarSign className="w-4 h-4 text-indigo-400 inline-block mr-0.5 -mt-0.5" />
                  {activeTrack.salary.replace('£', '')}
                </p>
              </div>
              <div className="border-l border-white/5 pl-4">
                <p className="text-zinc-500 text-xs font-medium">Market Demand</p>
                <p className="text-cyan-400 text-lg sm:text-xl font-bold mt-1 tracking-tight">
                  {activeTrack.demand}
                </p>
              </div>
              <div className="border-l border-white/5 pl-4">
                <p className="text-zinc-500 text-xs font-medium">YoY Expansion</p>
                <p className="text-emerald-400 text-lg sm:text-xl font-bold mt-1 tracking-tight">
                  {activeTrack.growth.split(' ')[0]}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Lists */}
          <div className="lg:col-span-5 space-y-6 w-full">
            {/* Top Employers */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-indigo-400" />
                Featured UK Partners Hiring
              </h5>
              <div className="flex flex-wrap gap-2">
                {activeTrack.employers.map((emp, index) => (
                  <span
                    key={emp}
                    className="px-3.5 py-1.5 rounded-xl bg-zinc-900/60 border border-white/5 text-xs text-zinc-300 font-medium hover:border-indigo-500/20 hover:text-white transition-all cursor-default"
                  >
                    {emp}
                  </span>
                ))}
              </div>
            </div>

            {/* In-Demand Skill sets */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-cyan-400" />
                Essential Graduate Skillset
              </h5>
              <div className="space-y-2">
                {activeTrack.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/30 border border-white/5 text-xs text-zinc-400 font-medium"
                  >
                    <span>{skill}</span>
                    <span className="text-[10px] text-zinc-500 bg-white/5 px-2 py-0.5 rounded">
                      Standard
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs tracking-wider uppercase transition-all duration-300 group">
              View {activeTrack.title} Vacancies
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
