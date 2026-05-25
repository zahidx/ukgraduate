'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, ArrowRight, Lock, User, Sparkles, Database, Fingerprint } from 'lucide-react';
import { authenticateStudent } from '@/lib/opensis';

export default function AdvancedStudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    setMousePosition({ x, y });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await authenticateStudent(email, password);
      if (response.success) {
        window.location.href = '/student-portal';
      } else {
        setError(response.message || 'Authentication failed. Access denied.');
      }
    } catch (err) {
      setError('System connection error. OpenSIS node unreachable.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden selection:bg-[#00D8C5] selection:text-black font-sans"
    >
      {/* Deep Space / Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
          backgroundSize: '40px 40px',
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
        }} />
      </div>

      {/* Dynamic Glows */}
      <motion.div 
        animate={{ 
          x: mousePosition.x * -50,
          y: mousePosition.y * -50,
        }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00D8C5] rounded-full blur-[150px] opacity-10 pointer-events-none mix-blend-screen"
      />
      <motion.div 
        animate={{ 
          x: mousePosition.x * 50,
          y: mousePosition.y * 50,
        }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#3b82f6] rounded-full blur-[150px] opacity-10 pointer-events-none mix-blend-screen"
      />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12 gap-12 lg:gap-0">
        
        {/* Left Side - Typography & Branding */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Link href="/">
              <img src="/images/project.png" alt="Logo" className="h-20 w-auto object-contain drop-shadow-2xl" />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D8C5]/10 border border-[#00D8C5]/20 mb-6 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#00D8C5]" />
              <span className="text-[#00D8C5] text-xs font-bold tracking-[0.2em] uppercase">Student Portal</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tighter">
              <span className="block text-white/50">Enter the</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
                Academic Nexus.
              </span>
            </h1>
            
            <p className="text-lg text-white/40 max-w-md font-light leading-relaxed mb-10">
              Securely authenticate via OpenSIS to access your real-time academic records, course loads, and financial data.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-[#00D8C5]" />
                <span className="text-xs font-medium text-white/50 uppercase tracking-widest">Encrypted</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-3">
                <Fingerprint className="w-5 h-5 text-[#00D8C5]" />
                <span className="text-xs font-medium text-white/50 uppercase tracking-widest">Biometric Ready</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Glass Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }} 
          animate={{ opacity: 1, scale: 1, rotateY: 0 }} 
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          style={{
            transformStyle: 'preserve-3d',
            transform: `perspective(1000px) rotateX(${mousePosition.y * -5}deg) rotateY(${mousePosition.x * 5}deg)`
          }}
          className="w-full lg:w-[480px] relative group"
        >
          {/* Animated border glow */}
          <div className="absolute -inset-[1px] bg-gradient-to-b from-[#00D8C5] to-[#3b82f6] rounded-[32px] opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500" />
          
          <div className="relative bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 rounded-[32px] p-10 md:p-12 overflow-hidden">
            
            {/* Inner noise for texture */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white tracking-tight">Identity Verification</h2>
              <GraduationCap className="w-8 h-8 text-[#00D8C5]" />
            </div>

            <form onSubmit={handleLogin} className="space-y-6 relative z-10">
              <AnimatePresence>
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium backdrop-blur-sm">
                      {error}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-5">
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-white/30 group-focus-within/input:text-[#00D8C5] transition-colors" />
                  </div>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:bg-white/10 focus:border-[#00D8C5] focus:ring-1 focus:ring-[#00D8C5] outline-none transition-all duration-300 font-medium"
                    placeholder="Student ID / OpenSIS Identity"
                    required
                  />
                </div>

                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-white/30 group-focus-within/input:text-[#00D8C5] transition-colors" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:bg-white/10 focus:border-[#00D8C5] focus:ring-1 focus:ring-[#00D8C5] outline-none transition-all duration-300 font-medium tracking-wider"
                    placeholder="Access Code"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-medium">
                <label className="flex items-center gap-2 cursor-pointer group/cb">
                  <div className="relative flex items-center justify-center">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="w-4 h-4 rounded border border-white/20 bg-white/5 peer-checked:bg-[#00D8C5] peer-checked:border-[#00D8C5] transition-all" />
                    <svg className="w-3 h-3 text-[#050505] absolute opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-white/50 group-hover/cb:text-white transition-colors">Trust this device</span>
                </label>
                <Link href="/forgot-password" className="text-[#00D8C5] hover:text-[#00e6d2] transition-colors">
                  Reset protocol?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-4 relative group/btn overflow-hidden bg-white text-black rounded-2xl font-bold py-4 px-8 flex items-center justify-center gap-2 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(0,216,197,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D8C5] to-[#3b82f6] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin relative z-10" />
                ) : (
                  <>
                    <span className="relative z-10 group-hover/btn:text-white transition-colors">Authenticate</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
