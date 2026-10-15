import React from 'react';
import { SERVICES_DATA, buildSMSLink } from '../data/atelierData';
import { Clock, Award, ArrowUpRight, Check, MessageSquare } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-black border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-[#0A84FF] uppercase mb-2">
              SURFACE ARCHITECTURE // ATELIER CAPABILITIES
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              PRECISION <span className="text-[#C5A48E]">ENGINEERING SERVICES</span>
            </h2>
          </div>
          <div className="max-w-md text-zinc-400 text-sm font-sans leading-relaxed">
            All procedures conducted inside temperature-regulated, positive-pressure cleanroom bays in the Miami Design District. Digital CAD precision plotting eliminates razor contact with factory paint.
          </div>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group bg-[#09090b] border border-white/[0.08] hover:border-[#0A84FF]/50 transition-mechanical flex flex-col justify-between p-8 rounded-[2px]"
            >
              <div>
                {/* Header Tag and Code */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06] font-mono text-[11px]">
                  <span className="text-[#C5A48E] tracking-wider font-semibold">
                    {service.tag}
                  </span>
                  <span className="text-zinc-500">
                    {service.code}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl text-white tracking-wide uppercase mb-4 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Technical Bullet Points */}
                <div className="space-y-2 mb-8">
                  {service.specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] font-sans text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-[#0A84FF] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Specs & Action */}
              <div className="pt-6 border-t border-white/[0.08] space-y-4 font-mono">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{service.warranty}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div>
                    <div className="text-[10px] text-zinc-500">FROM</div>
                    <div className="text-lg font-bold text-white font-mono">
                      ${service.startingPriceUSD.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="px-3 py-2 text-[11px] bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/[0.1] rounded-[2px] transition-colors"
                    >
                      SPECIFY
                    </button>
                    <a
                      href={buildSMSLink(service.title)}
                      className="p-2 bg-gradient-to-r from-[#0A84FF] to-[#0066E1] hover:from-[#2192FF] hover:to-[#0A73F5] text-white rounded-[2px] transition-mechanical shadow-sm"
                      title="Direct 1-Tap SMS Consultation"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
