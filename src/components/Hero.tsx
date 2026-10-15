import React from 'react';
import { ATELIER_INFO, buildSMSLink, buildGPSLink } from '../data/atelierData';
import { ArrowRight, MessageSquare, Navigation } from 'lucide-react';

interface HeroProps {
  onOpenBookingModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black border-b border-white/[0.08] pt-28 sm:pt-32 pb-20">
      {/* Background Video Player */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
        <video
          src="/videos/ferrari-ignition.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center scale-[1.02] opacity-85"
        />
        {/* Subtle Gradient Mask for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 w-full flex flex-col items-start justify-center">
        {/* Monospaced Telemetry Index */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-zinc-950/90 border border-white/[0.1] text-zinc-300 font-mono text-xs tracking-wider mb-6 rounded-[2px]">
          <span className="w-2 h-2 bg-[#0A84FF] shadow-[0_0_8px_#0A84FF]"></span>
          <span className="text-white font-semibold">MIAMI DESIGN DISTRICT</span>
          <span className="text-zinc-600">//</span>
          <span className="text-[#C5A48E]">SUNBELT HYPERCAR DEFENSE</span>
        </div>

        {/* Hero Title: Heavy Architectural Typography */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase max-w-5xl leading-[0.92] mb-6">
          SURFACE <span className="text-[#C5A48E]">ARMOUR</span> <br />
          FOR THE SUNBELT CLIMATE.
        </h1>

        {/* Technical Subtitle */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl leading-relaxed mb-10 font-normal">
          Zero-compromise optical paint protection film (PPF), ultrasonic paint correction, and cryogenic dry-ice detailing. Engineered for <strong className="text-white font-semibold">100°F+ thermal shock</strong>, Atlantic coastal salt humidity, and high-velocity highway debris in Florida and Texas.
        </p>

        {/* Action Buttons: iMessage / 1-Tap SMS & GPS / Spec */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-16">
          <a
            href={buildSMSLink("Hero Main Booking")}
            className="flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#0A84FF] to-[#0066E1] hover:from-[#2192FF] hover:to-[#0A73F5] text-white font-mono text-sm tracking-wider font-bold transition-mechanical rounded-[2px] shadow-[0_0_30px_rgba(10,132,255,0.35)] border border-blue-400/40"
          >
            <MessageSquare className="w-4 h-4 text-blue-100" />
            <span>TEXT US FOR INSTANT QUOTE (1-TAP SMS)</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={buildGPSLink()}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-zinc-950/90 hover:bg-zinc-900 text-zinc-200 hover:text-white border border-white/[0.14] hover:border-[#0A84FF]/50 font-mono text-sm tracking-wider font-medium transition-mechanical rounded-[2px]"
          >
            <Navigation className="w-4 h-4 text-[#0A84FF]" />
            <span>SEND EXACT GPS VIA TEXT</span>
          </a>

          <button
            onClick={onOpenBookingModal}
            className="px-6 py-4 bg-zinc-950/80 hover:bg-zinc-900 text-zinc-400 hover:text-white border border-white/[0.08] hover:border-white/[0.24] font-mono text-xs tracking-wider transition-mechanical rounded-[2px]"
          >
            CUSTOM VEHICLE DOSSIER
          </button>
        </div>

        {/* Telemetry Metrics Strip */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 pt-6 border-t border-white/[0.1] font-mono">
          <div className="p-3 bg-zinc-950/60 border border-white/[0.06] rounded-[2px]">
            <div className="text-[10px] text-zinc-400">FILM GAUGE</div>
            <div className="text-lg font-bold text-white">10-MIL THICKNESS</div>
            <div className="text-[11px] text-zinc-400">XPEL Ultimate Plus</div>
          </div>

          <div className="p-3 bg-zinc-950/60 border border-white/[0.06] rounded-[2px]">
            <div className="text-[10px] text-zinc-400">THERMAL STABILITY</div>
            <div className="text-lg font-bold text-[#C5A48E]">280°F RESISTANT</div>
            <div className="text-[11px] text-zinc-400">Sunbelt Proof Polyurethane</div>
          </div>

          <div className="p-3 bg-zinc-950/60 border border-white/[0.06] rounded-[2px]">
            <div className="text-[10px] text-zinc-400">CUT PROTOCOL</div>
            <div className="text-lg font-bold text-white">100% DIGITAL DAP</div>
            <div className="text-[11px] text-zinc-400">Zero Paint Blade Contact</div>
          </div>

          <div className="p-3 bg-zinc-950/60 border border-white/[0.06] rounded-[2px]">
            <div className="text-[10px] text-zinc-400">WARRANTY TERM</div>
            <div className="text-lg font-bold text-white">10-YEAR WRITTEN</div>
            <div className="text-[11px] text-zinc-400">Nationwide Certificate</div>
          </div>
        </div>
      </div>
    </section>
  );
};
