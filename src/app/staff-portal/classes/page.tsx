'use client';
import React from 'react';
import { BookCheck } from 'lucide-react';

export default function StaffClassesPage() {
  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-8">
      <div className="flex items-center gap-3">
        <BookCheck className="w-8 h-8 text-[#7c3aed]" />
        <h1 className="text-3xl font-bold text-white">My Classes</h1>
      </div>
      <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 text-center min-h-[400px] flex items-center justify-center">
        <div className="text-white/40">Manage your currently assigned courses and sections.</div>
      </div>
    </div>
  );
}
