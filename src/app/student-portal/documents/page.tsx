'use client';
import React from 'react';
import { FileText } from 'lucide-react';

export default function DocumentsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex items-center gap-3">
        <FileText className="w-8 h-8 text-[#00D8C5]" />
        <h1 className="text-3xl font-bold text-white">Document Center</h1>
      </div>
      <div className="bg-[#111111]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 text-center min-h-[400px] flex items-center justify-center">
        <div className="text-white/40">Upload assignments, download forms, and request official documentation.</div>
      </div>
    </div>
  );
}
