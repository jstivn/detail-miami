import React from 'react';
import { DETAIL_MIAMI_INFO, buildSMSLink } from '../data/detailData';
import { ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';

interface HeroProps {
  onOpenAppointment: () => void;
  onOpenCallback: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment, onOpenCallback }) => {
  return (
    <section id="main" className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden bg-black pt-28 pb-16">
      {/* Background Video Player with high-contrast overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
        <video
          src="/videos/ferrari-ignition.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center scale-105 opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/75" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 font-mono text-xs uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
          <span>{DETAIL_MIAMI_INFO.eyebrow}</span>
        </div>

        {/* Hero Title (matching detaildubai.ae) */}
        <h1 className="font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase max-w-4xl leading-[1.02] mb-6">
          Car Detailing & Wash <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
            Service in Miami
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed mb-10 font-normal">
          Welcome to <strong className="text-white font-semibold">Detail Miami</strong>, your premier destination for top-notch car wash and detailing services in the heart of the Miami Design District. Exceptional care using eco-friendly products and advanced techniques.
        </p>

        {/* Hero CTA Buttons matching detaildubai.ae exactly */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Make An Appointment Now */}
          <button
            onClick={onOpenAppointment}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-widest shadow-[0_0_35px_rgba(225,29,72,0.45)] transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <span>MAKE AN APPOINTMENT NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Request a Call Back (with green active pulse dot as in detaildubai.ae) */}
          <button
            onClick={onOpenCallback}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-white border border-white/[0.15] hover:border-white/[0.3] font-semibold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2.5"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10B981]"></span>
            <span>REQUEST A CALL BACK</span>
          </button>

          {/* 1-Tap SMS Instant Quote */}
          <a
            href={buildSMSLink("Hero Instant Quote")}
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-blue-600/90 hover:bg-blue-600 text-white border border-blue-400/40 font-semibold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageSquare className="w-4 h-4" />
            <span>1-TAP SMS</span>
          </a>
        </div>
      </div>
    </section>
  );
};
