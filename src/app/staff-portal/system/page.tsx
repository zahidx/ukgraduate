'use client';
import React from 'react';
import { Database } from 'lucide-react';

export default function StaffSystemPage() {
  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-8">
      <div className="flex items-center gap-3">
        <Database className="w-8 h-8 text-[#7c3aed]" />
        <h1 className="text-3xl font-bold text-white">System Settings</h1>
      </div>
      <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 text-center min-h-[400px] flex items-center justify-center">
        <div className="text-white/40">Manage terms, global variables, and OpenSIS API configurations.</div>
      </div>
    </div>
  );
}
