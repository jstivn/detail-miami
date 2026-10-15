import React from 'react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

interface PreFooterProps {
  onOpenAppointment: () => void;
}

export const PreFooter: React.FC<PreFooterProps> = ({ onOpenAppointment }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-950 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden border border-white/[0.12] bg-gradient-to-r from-zinc-950 via-zinc-900 to-black p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text */}
          <div className="relative z-10 space-y-3 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/15 border border-red-500/30 text-xs font-mono font-semibold text-red-400 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ELEVATE YOUR CAR'S GLOSS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Give your car the care it deserves
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-sans">
              Experience the finest detailing, hand wash, and paint protection services in the Miami Design District.
            </p>
          </div>

          {/* Right Action */}
          <div className="relative z-10 shrink-0">
            <button
              onClick={onOpenAppointment}
              className="px-8 py-5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-xs uppercase tracking-widest shadow-[0_0_35px_rgba(225,29,72,0.45)] flex items-center gap-2.5 transition-all hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Appointment Today</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
