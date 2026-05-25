'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  LogOut, Bell, Search, LayoutDashboard, Users, 
  BookCheck, Settings, FileText, MessageSquare, 
  BarChart4, DownloadCloud, PenTool, Database, Activity
} from 'lucide-react';

export default function StaffPortalLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const navItems = [
    { href: '/staff-portal', icon: LayoutDashboard, label: 'Admin Dashboard' },
    { href: '/staff-portal/classes', icon: BookCheck, label: 'My Classes' },
    { href: '/staff-portal/students', icon: Users, label: 'Student Directory' },
    { href: '/staff-portal/gradebook', icon: PenTool, label: 'Gradebook Entry' },
    { href: '/staff-portal/reports', icon: BarChart4, label: 'Academic Reports' },
    { href: '/staff-portal/documents', icon: FileText, label: 'Document Center' },
    { href: '/staff-portal/messages', icon: MessageSquare, label: 'Communications', badge: 12 },
    { href: '/staff-portal/system', icon: Database, label: 'System Settings' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex overflow-hidden selection:bg-[#7c3aed] selection:text-white">
      
      {/* Global SVG Noise Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-overlay">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter>
          <rect width="100%" height="100%" filter="url(#n)"/>
        </svg>
      </div>

      {/* Advanced Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? '280px' : '80px' }}
        className="h-screen bg-[#0a0a0a] border-r border-white/5 flex flex-col relative z-20 shrink-0 transition-all duration-300"
      >
        <div className="h-20 flex items-center px-6 border-b border-white/5">
          <Link href="/" className="flex items-center gap-3 overflow-hidden">
            <img src="/images/project.png" alt="Logo" className="h-10 w-auto shrink-0" />
            <motion.span 
              animate={{ opacity: isSidebarOpen ? 1 : 0 }}
              className="font-bold text-[15px] tracking-wide whitespace-nowrap text-white/90"
            >
              OpenSIS <span className="text-[#7c3aed]">Admin</span>
            </motion.span>
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 scrollbar-hide">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 group relative ${
                    isActive ? 'bg-[#7c3aed]/10 text-[#7c3aed]' : 'text-white/50 hover:bg-white/5 hover:text-white/90'
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabStaff" 
                      className="absolute left-0 w-1 h-6 bg-[#7c3aed] rounded-r-full"
                    />
                  )}
                  <item.icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-[#7c3aed]' : 'group-hover:text-white/90'}`} />
                  
                  <span className={`font-medium text-sm whitespace-nowrap transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 w-0 hidden'}`}>
                    {item.label}
                  </span>

                  {item.badge && isSidebarOpen && (
                    <span className="ml-auto bg-[#7c3aed] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="mt-12 px-3">
            <div className={`text-xs font-semibold text-white/30 uppercase tracking-wider mb-4 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
              Database Status
            </div>
            <div className="bg-[#111] border border-white/5 rounded-xl p-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="relative flex items-center justify-center">
                  <Activity className="w-4 h-4 text-[#7c3aed]" />
                </div>
                {isSidebarOpen && (
                  <div>
                    <div className="text-sm font-medium text-white/90">Sync Active</div>
                    <div className="text-[11px] text-white/50">Last Backup: 12m ago</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-white/5">
          <Link href="/staff-login" className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/50 hover:bg-white/5 hover:text-red-400 transition-all duration-300 group">
            <LogOut className="w-5 h-5 shrink-0" />
            {isSidebarOpen && <span className="font-medium text-sm">Secure Logout</span>}
          </Link>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Dynamic Background Effects */}
        <div className="absolute -top-[20%] left-[10%] w-[1000px] h-[1000px] bg-radial-gradient from-[#7c3aed]/5 to-transparent rounded-full blur-[120px] pointer-events-none opacity-50" />
        
        {/* Top Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 relative z-10 bg-[#050505]/80 backdrop-blur-xl">
          <div className="flex items-center gap-6 flex-1">
            <button 
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="w-8 h-8 flex flex-col justify-center gap-1.5 text-white/50 hover:text-white transition-colors"
            >
              <span className="w-5 h-0.5 bg-current rounded-full" />
              <span className="w-4 h-0.5 bg-current rounded-full" />
              <span className="w-6 h-0.5 bg-current rounded-full" />
            </button>

            <div className="relative max-w-2xl w-full hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input 
                type="text" 
                placeholder="Global Search (Press '/' to focus) - Find students, classes, or records..." 
                className="w-full bg-[#111111] border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7c3aed]/50 focus:ring-1 focus:ring-[#7c3aed]/50 transition-all shadow-inner"
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <button className="hidden lg:flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-medium text-white/70 transition-colors">
              <DownloadCloud className="w-3.5 h-3.5" /> Data Export
            </button>

            <button className="relative p-2 text-white/50 hover:text-white transition-colors rounded-full hover:bg-white/5">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#00D8C5] rounded-full border-2 border-[#050505]" />
            </button>

            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#7c3aed] to-[#00D8C5] p-0.5">
                <div className="w-full h-full rounded-full bg-[#111] border-2 border-[#050505] flex items-center justify-center overflow-hidden">
                  <span className="font-bold text-sm text-white/80">JS</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto relative z-10 scrollbar-hide">
          {children}
        </div>
      </main>
    </div>
  );
}
