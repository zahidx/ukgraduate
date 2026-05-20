"use client";

import { ArrowRight, BellRing, CalendarDays, Clock, Shield } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const slideEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const slideFadeTransition = {
  duration: 0.85,
  ease: slideEase,
};

export default function EventsNoticeDashboard() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);

  const images = [
    { src: "/images/techtrek.png", title: "Global Tech Summit 2026 insights on artificial intelligence in finance", category: "Innovation" },
    { src: "/images/incubator.png", title: "London Campus expansion brings new state-of-the-art robotics labs", category: "Campus News" },
    { src: "/images/news_alliance.png", title: "Strategic partnership forged with leading tech firms", category: "Partnerships" }
  ];

  const notices = [
    { dept: "Office of the Registrar", deadline: "31/08/2026", title: "ADD/DROP/Late Registration, Autumn Cohort 2026" },
    { dept: "Admissions", deadline: "15/09/2026", title: "Final deadline for postgraduate scholarship applications" },
    { dept: "Student Services", deadline: "01/10/2026", title: "Campus housing registration for winter semester" },
    { dept: "Career Services", deadline: "10/11/2026", title: "Submit resumes for the upcoming Autumn careers fair" }
  ];

  const events = [
    { date: "24 Oct", title: "Autumn Cohort Careers Launchpad 2026", time: "10:00 AM - 4:00 PM" },
    { date: "15 Jun - 16 Jun", title: "International Conference on Innovation & Technology (ICIT)", time: "9:00 AM - 7:00 PM" },
    { date: "02 Dec", title: "Alumni Networking Dinner & Awards", time: "6:30 PM - 9:30 PM" },
    { date: "10 Jan", title: "Winter Industry Mixer", time: "5:00 PM - 8:00 PM" }
  ];

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    const noticeTimer = setInterval(() => {
      setCurrentNoticeIndex((prev) => (prev + 1) % notices.length);
    }, 8000);

    return () => {
      clearInterval(imageTimer);
      clearInterval(noticeTimer);
    };
  }, [images.length, notices.length]);

  return (
    <section className="py-16 bg-white relative overflow-hidden border-t border-zinc-100">
      {/* Premium subtle background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-to-b from-indigo-50/50 to-transparent rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-rose-50/50 to-transparent rounded-full blur-3xl opacity-60 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
          
          {/* Col 1: Image Auto Slider (Reduced border-radius to xl, enhanced UI) */}
          <div className="relative rounded-xl overflow-hidden h-[420px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-zinc-100 bg-zinc-900">
            <div
              className="flex h-full dashboard-slide-track"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {images.map((img, idx) => (
                <div key={idx} className="w-full h-full shrink-0 relative">
                  <img
                    src={img.src}
                    alt={img.title}
                    className={`w-full h-full object-cover dashboard-slide-image ${idx === currentImageIndex ? 'scale-110' : 'scale-100'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Caption fades smoothly between slides */}
            <div className="absolute bottom-0 left-0 right-0 p-8 pb-10 z-10 pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={slideFadeTransition}
                >
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-4 border border-white/20 shadow-sm">
                    {images[currentImageIndex].category}
                  </span>
                  <h4 className="text-white font-bold text-xl leading-tight mb-2 drop-shadow-lg">
                    {images[currentImageIndex].title}
                  </h4>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-20">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-1.5 rounded-full dashboard-slide-dot ${idx === currentImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Col 2: Events Calendar */}
          <div className="bg-white rounded-xl p-8 h-[420px] flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-zinc-100">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-100">
              <div className="p-2 bg-rose-50 text-rose-600 rounded-lg">
                <CalendarDays className="w-5 h-5" />
              </div>
              <h3 className="text-zinc-900 font-bold text-xl tracking-tight">Events calendar</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto pr-4 space-y-2 relative [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-zinc-300">
              {events.map((evt, idx) => (
                <div key={idx} className="group cursor-pointer p-4 -mx-4 rounded-xl transition-all duration-300 hover:bg-zinc-50 border border-transparent hover:border-zinc-100">
                  <span className="inline-block px-3 py-1 bg-rose-50 group-hover:bg-rose-100 transition-colors text-rose-600 text-[10px] font-bold uppercase tracking-wider rounded-md mb-2">
                    {evt.date}
                  </span>
                  <h4 className="text-zinc-800 font-bold text-sm leading-snug mb-2 group-hover:text-rose-600 transition-colors">
                    {evt.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-zinc-500 text-[11px] font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{evt.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Notice Board Slider */}
          <div className="bg-gradient-to-b from-indigo-50/40 to-white rounded-xl p-8 h-[420px] flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-indigo-50 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-indigo-100/50">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                <BellRing className="w-5 h-5" />
              </div>
              <h3 className="text-zinc-900 font-bold text-xl tracking-tight">Notice board</h3>
            </div>
            
            <div className="relative flex-1 rounded-xl shadow-sm border border-zinc-100/60 overflow-hidden bg-white group">
              <div
                className="flex h-full dashboard-slide-track"
                style={{ transform: `translateX(-${currentNoticeIndex * 100}%)` }}
              >
                {notices.map((notice, idx) => (
                  <div
                    key={idx}
                    className="w-full h-full shrink-0 p-8 flex flex-col justify-center bg-white cursor-pointer hover:bg-zinc-50/50 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Shield className="w-4 h-4 text-indigo-500" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">{notice.dept}</span>
                    </div>
                    <div className="inline-block self-start px-2 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold rounded mb-3">
                      Deadline: {notice.deadline}
                    </div>
                    <h4 className="text-base font-bold text-zinc-900 leading-snug mb-6 group-hover:text-indigo-600 transition-colors duration-500">
                      {notice.title}
                    </h4>
                    <a
                      href="#"
                      className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 mt-auto"
                    >
                      View Document
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6 z-20 relative">
              {notices.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentNoticeIndex(idx)}
                  className={`h-1.5 rounded-full dashboard-slide-dot ${idx === currentNoticeIndex ? 'w-6 bg-indigo-600' : 'w-1.5 bg-indigo-200 hover:bg-indigo-300'}`}
                  aria-label={`Go to notice ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
