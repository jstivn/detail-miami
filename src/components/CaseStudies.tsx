import React from 'react';
import { CASE_STUDIES, buildSMSLink } from '../data/atelierData';
import { ShieldCheck, MapPin, Gauge, ArrowUpRight, MessageSquare } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  return (
    <section id="cases" className="py-24 bg-[#08080a] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-[#0A84FF] uppercase mb-2">
              PROVEN TELEMETRY // US DELIVERIES
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              COMMISSIONED <span className="text-[#C5A48E]">CASE STUDIES</span>
            </h2>
          </div>
          <div className="max-w-md text-zinc-400 text-sm font-sans leading-relaxed">
            Full technical dossiers on exotic hypercars delivered from our Miami Design District cleanroom facility. Precise paint depth profiling and written nationwide warranties.
          </div>
        </div>

        {/* 3 Case Study Cards */}
        <div className="space-y-12">
          {CASE_STUDIES.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-12 border border-white/[0.08] bg-[#09090b] rounded-[2px] overflow-hidden"
            >
              {/* Image Column */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
                <img
                  src={item.image}
                  alt={item.vehicle}
                  className="w-full h-full object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-black/80 border border-white/[0.1] text-xs font-mono text-[#0A84FF] rounded-[2px] backdrop-blur-md">
                  CASE 0{index + 1} // {item.year}
                </div>
              </div>

              {/* Data & Telemetry Column */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                      <MapPin className="w-3.5 h-3.5 text-[#0A84FF]" />
                      <span>{item.clientArea}</span>
                    </div>
                    <div className="px-2 py-0.5 bg-zinc-900 border border-white/[0.08] text-[11px] font-mono text-zinc-300 rounded-[2px]">
                      {item.color}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-wide mb-4">
                    {item.vehicle}
                  </h3>

                  <div className="mb-6 p-4 bg-zinc-950 border border-white/[0.06] rounded-[2px]">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1">
                      SCOPE OF COMMISSION
                    </div>
                    <div className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                      {item.scope}
                    </div>
                  </div>

                  {/* Telemetry Matrix Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 font-mono text-xs">
                    <div className="p-3 bg-zinc-900/40 border border-white/[0.04] rounded-[2px]">
                      <div className="text-zinc-500 text-[10px]">OEM CLEARCOAT</div>
                      <div className="text-white font-bold">{item.specs.paintDepthBefore}</div>
                    </div>
                    <div className="p-3 bg-zinc-900/40 border border-white/[0.04] rounded-[2px]">
                      <div className="text-zinc-500 text-[10px]">CORRECTED + PPF</div>
                      <div className="text-emerald-400 font-bold">{item.specs.paintDepthAfter}</div>
                    </div>
                    <div className="p-3 bg-zinc-900/40 border border-white/[0.04] rounded-[2px]">
                      <div className="text-zinc-500 text-[10px]">FINAL GLOSS</div>
                      <div className="text-[#0A84FF] font-bold">{item.specs.glossLevel}</div>
                    </div>
                    <div className="p-3 bg-zinc-900/40 border border-white/[0.04] rounded-[2px]">
                      <div className="text-zinc-500 text-[10px]">FILM PROFILE</div>
                      <div className="text-white font-bold">{item.specs.filmThickness}</div>
                    </div>
                    <div className="p-3 bg-zinc-900/40 border border-white/[0.04] rounded-[2px] col-span-2 sm:col-span-2">
                      <div className="text-zinc-500 text-[10px]">CURING SPEC</div>
                      <div className="text-zinc-300 font-bold">{item.specs.curingCycle}</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Invoice & Inquire */}
                <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500">COMMISSION INVOICE TOTAL</div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                      ${item.priceUSD.toLocaleString()}
                    </div>
                  </div>

                  <a
                    href={buildSMSLink(`Case Study Inquire: ${item.vehicle}`, item.vehicle, item.scope)}
                    className="flex items-center gap-2 px-5 py-3 bg-zinc-900 hover:bg-zinc-800 border border-white/[0.12] hover:border-[#0A84FF] text-white hover:text-blue-300 font-mono text-xs tracking-wider transition-mechanical rounded-[2px]"
                  >
                    <MessageSquare className="w-4 h-4 text-blue-400" />
                    <span>INQUIRE BUILD (1-TAP SMS)</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
