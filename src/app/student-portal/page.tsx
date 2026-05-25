'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, Calendar as CalendarIcon, Award, 
  FileText, MessageSquare, Clock, 
  AlertCircle, Download, Activity,
  BarChart3, CreditCard, ChevronRight
} from 'lucide-react';

export default function StudentPortalOverview() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-sm text-[#00D8C5] font-medium mb-2">
            <span className="px-2 py-0.5 rounded bg-[#00D8C5]/10 border border-[#00D8C5]/20">Spring 2026</span>
            <span>•</span>
            <span>Week 4 of 16</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl font-bold tracking-tight text-white">
            Academic Overview
          </motion.h1>
        </div>
        
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex gap-3">
          <button className="px-4 py-2 bg-[#111] border border-white/10 hover:border-white/20 rounded-xl text-sm font-medium transition-all flex items-center gap-2 hover:bg-white/5">
            <Download className="w-4 h-4" />
            Unofficial Transcript
          </button>
          <button className="px-4 py-2 bg-[#00D8C5] text-black hover:bg-[#00e6d2] rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(0,216,197,0.2)]">
            Register for Classes
          </button>
        </motion.div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Cumulative GPA', value: '3.92', trend: '+0.04', trendUp: true, subtitle: 'Top 5% of class', icon: Activity, color: '#00D8C5' },
          { title: 'Credits Earned', value: '86', total: '/ 120', subtitle: '71% towards graduation', icon: Award, color: '#7c3aed' },
          { title: 'Attendance Rate', value: '98%', trend: 'Excellent', trendUp: true, subtitle: 'Across 5 active courses', icon: CalendarIcon, color: '#10b981' },
          { title: 'Account Balance', value: '$0.00', subtitle: 'Next billing: Aug 15', icon: CreditCard, color: '#6366f1' }
        ].map((kpi, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }}
            key={i} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 hover:border-white/10 rounded-2xl p-6 relative overflow-hidden group transition-all"
          >
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex justify-between items-start mb-4">
              <div className="text-white/50 text-sm font-medium">{kpi.title}</div>
              <div className="p-2 rounded-lg bg-white/5" style={{ color: kpi.color }}>
                <kpi.icon className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold tracking-tight text-white">{kpi.value}</span>
              {kpi.total && <span className="text-lg text-white/40">{kpi.total}</span>}
            </div>
            <div className="flex items-center gap-2 text-xs">
              {kpi.trend && (
                <span className={`px-1.5 py-0.5 rounded font-medium ${kpi.trendUp ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                  {kpi.trend}
                </span>
              )}
              <span className="text-white/40">{kpi.subtitle}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Current Courses (2 Columns) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#111111]/80 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold">Active Courses</h2>
              <Link href="/student-portal/courses" className="text-sm text-[#00D8C5] hover:text-[#00e6d2] font-medium flex items-center gap-1">
                View All Courses <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {[
                { code: 'CS 402', name: 'Advanced Artificial Intelligence', prof: 'Dr. Sarah Chen', grade: 'A', progress: 85, color: '#00D8C5', next: 'Midterm Exam - Tomorrow' },
                { code: 'ENG 305', name: 'Software Architecture Patterns', prof: 'Prof. James Wilson', grade: 'A-', progress: 60, color: '#7c3aed', next: 'Project Milestone 2 - Friday' },
                { code: 'MTH 410', name: 'Applied Cryptography', prof: 'Dr. Alan Turing', grade: 'B+', progress: 45, color: '#f59e0b', next: 'Problem Set 4 - Mon 10:00 AM' }
              ].map((course, i) => (
                <div key={i} className="group relative bg-[#1a1a1a] border border-white/5 hover:border-white/10 rounded-2xl p-5 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10" style={{ color: course.color }}>
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xs font-bold px-2 py-0.5 rounded bg-white/10 text-white/80">{course.code}</span>
                          <h3 className="font-bold text-white group-hover:text-[#00D8C5] transition-colors">{course.name}</h3>
                        </div>
                        <p className="text-sm text-white/50">{course.prof}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-8 md:justify-end">
                      <div className="hidden md:block w-32">
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-white/50">Progress</span>
                          <span className="text-white/90 font-medium">{course.progress}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }} animate={{ width: `${course.progress}%` }} 
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full rounded-full" style={{ backgroundColor: course.color }} 
                          />
                        </div>
                      </div>

                      <div className="flex flex-col items-end">
                        <span className="text-xs text-white/50 mb-0.5">Current Grade</span>
                        <span className="text-xl font-bold text-white">{course.grade}</span>
                      </div>
                    </div>

                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-[#00D8C5]">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Up Next: {course.next}</span>
                    </div>
                    <button className="text-xs font-semibold text-white/50 hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 hover:border-white/20">
                      Course Dashboard
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Visualization / Activity Graph placeholder */}
          <div className="bg-[#111111]/80 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8 flex items-center justify-center min-h-[300px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#00D8C5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-center z-10">
              <BarChart3 className="w-12 h-12 text-white/20 mx-auto mb-4" />
              <h3 className="text-white/80 font-bold mb-2">Advanced Analytics Engine</h3>
              <p className="text-sm text-white/40 max-w-sm mx-auto">OpenSIS predictive modeling for grade trajectories and degree audit visualization will load here.</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          
          {/* Upcoming Schedule Mini */}
          <div className="bg-gradient-to-b from-[#111111] to-[#1a1a1a] border border-white/5 rounded-3xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-white">Today's Schedule</h3>
              <Link href="/student-portal/schedule" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <CalendarIcon className="w-4 h-4 text-white/50" />
              </Link>
            </div>

            <div className="relative border-l border-white/10 ml-3 space-y-6 pb-2">
              {[
                { time: '10:00 AM', event: 'CS 402 Lecture', location: 'Science Center 101', status: 'now', duration: '1h 30m' },
                { time: '01:00 PM', event: 'Advisor Meeting', location: 'Admin Block C', status: 'upcoming', duration: '30m' },
                { time: '03:30 PM', event: 'MTH 410 Seminar', location: 'Math Building 204', status: 'upcoming', duration: '2h' }
              ].map((item, i) => (
                <div key={i} className="relative pl-6">
                  <div className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#1a1a1a] ${item.status === 'now' ? 'bg-[#00D8C5] shadow-[0_0_10px_#00D8C5]' : 'bg-white/20'}`} />
                  <div className="text-xs font-bold text-[#00D8C5] mb-1">{item.time} <span className="text-white/30 font-normal ml-2">{item.duration}</span></div>
                  <div className="font-bold text-white/90 text-sm mb-0.5">{item.event}</div>
                  <div className="text-xs text-white/50">{item.location}</div>
                </div>
              ))}
            </div>
          </div>

          {/* OpenSIS Action Center */}
          <div className="bg-[#111111] border border-white/5 rounded-3xl p-6 relative overflow-hidden">
            <h3 className="font-bold text-white mb-6 relative z-10">Administrative Actions</h3>
            
            <div className="space-y-3 relative z-10">
              <Link href="/student-portal/documents" className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#7c3aed]/50 hover:bg-[#7c3aed]/10 transition-all group">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-[#7c3aed]" />
                  <span className="text-sm font-medium text-white/80 group-hover:text-white">Request Official Transcript</span>
                </div>
                <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white/70" />
              </Link>
              <Link href="/student-portal/financial" className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#00D8C5]/50 hover:bg-[#00D8C5]/10 transition-all group">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-4 h-4 text-[#00D8C5]" />
                  <span className="text-sm font-medium text-white/80 group-hover:text-white">Make a Tuition Payment</span>
                </div>
                <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white/70" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
