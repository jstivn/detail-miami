import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

interface GallerySectionProps {
  onOpenAppointment: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenAppointment }) => {
  return (
    <section className="py-24 bg-zinc-950 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="text-xs font-mono text-red-500 tracking-widest uppercase mb-2">
              STUDIO PORTFOLIO // MIAMI RELEASES
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
              Crafted in the Design District
            </h2>
          </div>
          <button
            onClick={onOpenAppointment}
            className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 self-start md:self-auto shadow-md transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Session</span>
          </button>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Large Item */}
          <div className="md:col-span-8 group relative rounded-2xl overflow-hidden aspect-[16/10] bg-zinc-900 border border-white/[0.1] shadow-xl">
            <img
              src="/images/ferrari-sf90-miami.jpg"
              alt="Ferrari SF90 Stradale in Miami Design District"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                  FULL XPEL PPF + CERAMIC
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white uppercase mt-2">
                  Ferrari SF90 Stradale Assetto Fiorano
                </h4>
                <p className="text-zinc-400 text-xs font-mono">
                  Delivered to Star Island, Miami Beach
                </p>
              </div>
            </div>
          </div>

          {/* Side Tall Item */}
          <div className="md:col-span-4 group relative rounded-2xl overflow-hidden aspect-[16/10] md:aspect-auto bg-zinc-900 border border-white/[0.1] shadow-xl">
            <img
              src="/images/rolls-royce-spectre-miami.jpg"
              alt="Rolls-Royce Spectre Miami"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-[10px] font-mono font-bold uppercase tracking-wider">
                STEALTH MATTE PPF
              </span>
              <h4 className="text-lg font-bold text-white uppercase mt-2">
                Rolls-Royce Spectre
              </h4>
              <p className="text-zinc-400 text-xs font-mono">
                Fisher Island Commission
              </p>
            </div>
          </div>

          {/* Bottom 3 Cards */}
          <div className="md:col-span-4 group relative rounded-2xl overflow-hidden aspect-[16/11] bg-zinc-900 border border-white/[0.1] shadow-xl">
            <img
              src="/images/porsche-gt3rs-miami.jpg"
              alt="Porsche 911 GT3 RS Miami Brickell"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-6 left-6">
              <h4 className="text-base font-bold text-white uppercase">
                Porsche 911 GT3 RS (992)
              </h4>
              <p className="text-zinc-400 text-xs font-mono">
                Track Armor + 1200°C Caliper Ceramic
              </p>
            </div>
          </div>

          <div className="md:col-span-4 group relative rounded-2xl overflow-hidden aspect-[16/11] bg-zinc-900 border border-white/[0.1] shadow-xl">
            <img
              src="/images/service-wash.jpg"
              alt="Snow Foam Car Wash"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-6 left-6">
              <h4 className="text-base font-bold text-white uppercase">
                Lamborghini Urus Hand Wash
              </h4>
              <p className="text-zinc-400 text-xs font-mono">
                De-Ionized Spot-Free Foam Bath
              </p>
            </div>
          </div>

          <div className="md:col-span-4 group relative rounded-2xl overflow-hidden aspect-[16/11] bg-zinc-900 border border-white/[0.1] shadow-xl">
            <img
              src="/images/service-interior.jpg"
              alt="Interior Leather Detailing"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-6 left-6">
              <h4 className="text-base font-bold text-white uppercase">
                Bespoke Leather Spa
              </h4>
              <p className="text-zinc-400 text-xs font-mono">
                Fluoropolymer Hydrophobic Barrier
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
