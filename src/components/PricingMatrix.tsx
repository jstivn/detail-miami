import React, { useState } from 'react';
import { PACKAGES_DATA, buildSMSLink } from '../data/atelierData';
import { Check, Shield, ArrowUpRight, MessageSquare } from 'lucide-react';

export const PricingMatrix: React.FC = () => {
  const [vehicleClass, setVehicleClass] = useState<'supercar' | 'sportsCar' | 'hypercar' | 'suv'>('supercar');

  const vehicleOptions = [
    { key: 'sportsCar', label: 'SPORTS CAR', example: '911 Carrera, Cayman GT4, Emira, Corvette Z06' },
    { key: 'supercar', label: 'SUPERCAR', example: '911 GT3 RS, F8 Tributo, Huracán, 720S' },
    { key: 'hypercar', label: 'HYPERCAR', example: 'Ferrari SF90, Revuelto, Chiron, Valkyrie' },
    { key: 'suv', label: 'LUXURY SUV', example: 'Rolls-Royce Cullinan, Urus, G63 AMG, Escalade V' },
  ] as const;

  const getPrice = (pkg: typeof PACKAGES_DATA[0]) => {
    switch (vehicleClass) {
      case 'sportsCar': return pkg.sportsCarUSD;
      case 'supercar': return pkg.supercarUSD;
      case 'hypercar': return pkg.hypercarUSD;
      case 'suv': return pkg.suvUSD;
    }
  };

  return (
    <section id="pricing" className="py-24 bg-black border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-[#0A84FF] uppercase mb-2">
              PRICING ARCHITECTURE // TRANSPARENT USD SCHEDULE
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              COMMISSION <span className="text-[#C5A48E]">TIERS & PRICING</span>
            </h2>
          </div>
          <div className="max-w-md text-zinc-400 text-sm font-sans leading-relaxed">
            All prices quoted in US Dollars (USD) net of applicable sales tax. No hidden surcharges. Includes written 10-year manufacturer warranty certificate.
          </div>
        </div>

        {/* Vehicle Class Selector */}
        <div className="mb-12">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
            SELECT VEHICLE PLATFORM CLASS:
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {vehicleOptions.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setVehicleClass(opt.key)}
                className={`p-4 border text-left transition-mechanical rounded-[2px] font-mono ${
                  vehicleClass === opt.key
                    ? 'border-[#0A84FF] bg-zinc-900/90 text-white ring-1 ring-[#0A84FF]'
                    : 'border-white/[0.08] bg-black/60 text-zinc-400 hover:border-white/[0.2] hover:text-white'
                }`}
              >
                <div className="text-sm font-bold tracking-wide">{opt.label}</div>
                <div className="text-[10px] text-zinc-400 truncate mt-1">{opt.example}</div>
              </button>
            ))}
          </div>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PACKAGES_DATA.map((pkg) => {
            const isFeatured = pkg.id === 'full-body-armour';
            const price = getPrice(pkg);

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between p-8 bg-black border rounded-[2px] transition-mechanical ${
                  isFeatured
                    ? 'border-[#0A84FF] shadow-[0_0_40px_rgba(10,132,255,0.18)]'
                    : 'border-white/[0.08] hover:border-white/[0.2]'
                }`}
              >
                {/* Badge if available */}
                {pkg.badge && (
                  <div className="absolute -top-3 left-8 px-3 py-1 bg-gradient-to-r from-[#0A84FF] to-[#0066E1] text-white font-mono text-[10px] tracking-widest font-extrabold uppercase rounded-[2px] shadow-sm">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="font-display font-extrabold text-2xl text-white tracking-wide uppercase">
                      {pkg.name}
                    </h3>
                    <div className="text-xs font-mono text-[#C5A48E] mt-1">
                      {pkg.subtitle}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-8 pb-6 border-b border-white/[0.08]">
                    <div className="text-[10px] font-mono text-zinc-400">INVESTMENT</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white">
                        ${price.toLocaleString()}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">+ SALES TAX</span>
                    </div>
                    <div className="text-xs font-mono text-zinc-400 mt-2">
                      TURNAROUND: <span className="text-zinc-300 font-semibold">{pkg.turnaround}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans">
                        <Check className="w-4 h-4 text-[#C5A48E] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 border-t border-white/[0.08] space-y-4 font-mono">
                  <div className="text-[11px] text-zinc-400 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#C5A48E]" />
                    <span>{pkg.warranty}</span>
                  </div>

                  <a
                    href={buildSMSLink(pkg.name, vehicleOptions.find(o => o.key === vehicleClass)?.label, `$${price.toLocaleString()}`)}
                    className={`w-full py-3.5 px-4 flex items-center justify-center gap-2 font-mono text-xs tracking-wider font-bold transition-mechanical rounded-[2px] ${
                      isFeatured
                        ? 'bg-gradient-to-r from-[#0A84FF] to-[#0066E1] hover:from-[#2192FF] hover:to-[#0A73F5] text-white shadow-lg border border-blue-400/30'
                        : 'bg-zinc-900 hover:bg-zinc-800 text-white border border-white/[0.12] hover:border-[#0A84FF]/50'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>BOOK VIA 1-TAP SMS</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
