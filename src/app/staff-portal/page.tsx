'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, BookCheck, Settings, FileText, 
  ArrowUpRight, BarChart4, Filter, 
  MoreHorizontal, PenTool, Database,
  AlertCircle
} from 'lucide-react';

export default function StaffPortalOverview() {
  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-sm text-white/50 font-medium mb-2">
            <span className="text-[#7c3aed]">Staff Portal</span>
            <span>/</span>
            <span>Administrative Dashboard</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl font-bold tracking-tight text-white flex items-center gap-3">
            Welcome, Prof. Smith
            <span className="inline-flex px-2 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-semibold text-white/40 align-middle">ID: 884920</span>
          </motion.h1>
        </div>
        
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex gap-3">
          <button className="px-5 py-2.5 bg-[#7c3aed] text-white hover:bg-[#6d28d9] rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(124,58,237,0.2)]">
            + Create Announcement
          </button>
        </motion.div>
      </div>

      {/* Admin Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Total Enrolled Students', value: '142', trend: '+12 this term', icon: Users, color: '#00D8C5' },
          { title: 'Classes Managed', value: '4', subtitle: '12 Credit Hours', icon: BookCheck, color: '#7c3aed' },
          { title: 'Unsubmitted Grades', value: '28', subtitle: 'Action Required', icon: FileText, color: '#f59e0b', alert: true },
          { title: 'Department Rank', value: '#3', subtitle: 'Based on eval scores', icon: BarChart4, color: '#ec4899' }
        ].map((kpi, i) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 * i }}
            key={i} className={`bg-[#0a0a0a]/80 backdrop-blur-md border ${kpi.alert ? 'border-[#f59e0b]/30 shadow-[0_0_15px_rgba(245,158,11,0.05)]' : 'border-white/5'} hover:border-white/10 rounded-2xl p-6 relative overflow-hidden group transition-all`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="text-white/50 text-sm font-medium">{kpi.title}</div>
              <div className={`p-2 rounded-lg ${kpi.alert ? 'bg-[#f59e0b]/10' : 'bg-white/5'}`} style={{ color: kpi.color }}>
                <kpi.icon className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-bold tracking-tight text-white">{kpi.value}</span>
            </div>
            <div className="text-xs text-white/40">
              {kpi.trend || kpi.subtitle}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Advanced Dashboard Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Complex Data Table area */}
        <div className="lg:col-span-2 bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Active Course Roster</h2>
              <p className="text-sm text-white/40">Manage your current term class assignments</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 border border-white/10 rounded-lg hover:bg-white/5 transition-colors text-white/60">
                <Filter className="w-4 h-4" />
              </button>
              <button className="p-2 border border-white/10 rounded-lg hover:bg-white/5 transition-colors text-white/60">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs font-semibold text-white/40 uppercase tracking-wider">
                  <th className="pb-3 pl-2">Course Name & Code</th>
                  <th className="pb-3">Schedule</th>
                  <th className="pb-3 text-center">Students</th>
                  <th className="pb-3 text-center">Class Avg</th>
                  <th className="pb-3 text-right pr-2">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { code: 'CS 402', name: 'Advanced Artificial Intelligence', time: 'MWF 09:00 AM', loc: 'Sci 101', students: 45, avg: 'A-', color: '#00D8C5' },
                  { code: 'ENG 305', name: 'Software Architecture Patterns', time: 'TTh 11:30 AM', loc: 'Lab A', students: 38, avg: 'B+', color: '#7c3aed' },
                  { code: 'MTH 410', name: 'Applied Cryptography', time: 'MW 02:00 PM', loc: 'Math 204', students: 59, avg: 'B', color: '#f59e0b' }
                ].map((course, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                    <td className="py-4 pl-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: course.color }} />
                        <div>
                          <div className="font-bold text-white/90">{course.name}</div>
                          <div className="text-xs text-white/40">{course.code}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="text-white/80">{course.time}</div>
                      <div className="text-xs text-white/40">{course.loc}</div>
                    </td>
                    <td className="py-4 text-center font-medium text-white/70">
                      {course.students}
                    </td>
                    <td className="py-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-white/5 border border-white/10 font-bold text-white/90">
                        {course.avg}
                      </span>
                    </td>
                    <td className="py-4 text-right pr-2">
                      <button className="opacity-0 group-hover:opacity-100 px-3 py-1.5 bg-[#7c3aed]/10 text-[#7c3aed] border border-[#7c3aed]/20 hover:bg-[#7c3aed]/20 rounded-md text-xs font-semibold transition-all">
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Administrative Actions & Urgent tasks */}
        <div className="space-y-6">
          
          {/* Grading Action Required */}
          <div className="bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-[#f59e0b]/20 rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 text-[#f59e0b]/10">
              <AlertCircle className="w-32 h-32" />
            </div>
            <h3 className="font-bold text-white mb-2 relative z-10">Attention Required</h3>
            <p className="text-sm text-white/60 mb-6 relative z-10">You have 28 pending assignments waiting for grading review.</p>
            
            <Link href="/staff-portal/gradebook" className="w-full py-3 px-4 bg-[#f59e0b] text-black hover:bg-[#fcd34d] font-bold rounded-xl transition-colors flex justify-center items-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <PenTool className="w-4 h-4" /> Open Gradebook
            </Link>
          </div>

          {/* OpenSIS Sync Control Panel */}
          <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-5 h-5 text-[#00D8C5]" />
              <h3 className="font-bold text-white">OpenSIS Control Panel</h3>
            </div>
            
            <div className="space-y-2">
              {[
                { label: 'Submit Attendance', desc: 'Syncs to central database', icon: Users, href: '/staff-portal/classes' },
                { label: 'Incident Report', desc: 'Log behavioral incidents', icon: FileText, href: '/staff-portal/documents' },
                { label: 'System Settings', desc: 'Manage configurations', icon: Settings, href: '/staff-portal/system' }
              ].map((btn, i) => (
                <Link href={btn.href} key={i} className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all group text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#111] border border-white/10 flex items-center justify-center shrink-0">
                      <btn.icon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white/90">{btn.label}</div>
                      <div className="text-xs text-white/40">{btn.desc}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#00D8C5] transition-colors" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
