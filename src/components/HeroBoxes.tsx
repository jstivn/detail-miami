import React from 'react';
import { DETAIL_MIAMI_INFO } from '../data/detailData';
import { MapPin, Star, ExternalLink, ShieldCheck } from 'lucide-react';

export const HeroBoxes: React.FC = () => {
  const brands = [
    "FERRARI", "PORSCHE", "LAMBORGHINI", "ROLLS-ROYCE", "BENTLEY", "MCLAREN", "MERCEDES-AMG", "BMW M"
  ];

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-14 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Map Box (In the heart of Miami) */}
        <a
          href={DETAIL_MIAMI_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="lg:col-span-6 group relative min-h-[280px] rounded-2xl overflow-hidden border border-white/[0.14] p-8 flex flex-col justify-between hover:border-red-500/60 transition-all shadow-2xl bg-black"
        >
          {/* Google Maps Dark Mode Background Image */}
          <div className="absolute inset-0">
            <img
              src="/images/miami-map-dark.jpg"
              alt="Google Maps Miami Design District"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-65"
              loading="lazy"
            />
            {/* Vignette gradients for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/30" />
          </div>

          {/* Top tag & pin */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 border border-white/15 text-xs font-mono text-zinc-200 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>{DETAIL_MIAMI_INFO.coordinates}</span>
            </span>
            <div className="w-8 h-8 rounded-full bg-black/75 border border-white/15 flex items-center justify-center backdrop-blur-md group-hover:border-red-500/50 transition-colors">
              <ExternalLink className="w-4 h-4 text-zinc-300 group-hover:text-red-400" />
            </div>
          </div>

          {/* Bottom Title & Link */}
          <div className="relative z-10 space-y-1.5">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono text-emerald-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>GOOGLE MAPS VERIFIED LOCATION</span>
            </div>
            <h3 className="font-extrabold text-2xl sm:text-3xl text-white tracking-tight uppercase drop-shadow-md">
              In the heart of Miami
            </h3>
            <p className="text-zinc-300 text-sm font-sans flex items-center gap-2 drop-shadow">
              <span>{DETAIL_MIAMI_INFO.location}</span>
              <span className="text-red-400 font-bold group-hover:underline">
                • Open Directions &rarr;
              </span>
            </p>
          </div>
        </a>

        {/* Right: Brand Box & Google 4.9 Stars */}
        <div className="lg:col-span-6 rounded-2xl border border-white/[0.12] bg-zinc-950 p-8 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-extrabold text-xl sm:text-2xl text-white tracking-tight uppercase">
                Best at serving every car brand
              </h3>
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>

            {/* Brand Badges Matrix */}
            <div className="flex flex-wrap gap-2 mb-6">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="px-3 py-1 bg-zinc-900 border border-white/[0.08] text-[11px] font-mono tracking-wider font-semibold text-zinc-300 rounded-[4px]"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Google Review Badge (matching detaildubai.ae) */}
          <div className="pt-4 border-t border-white/[0.08] flex items-center gap-4">
            {/* Avatars */}
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                alt="Client"
                className="w-10 h-10 rounded-full border-2 border-black object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                alt="Client"
                className="w-10 h-10 rounded-full border-2 border-black object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
                alt="Client"
                className="w-10 h-10 rounded-full border-2 border-black object-cover"
              />
            </div>

            <div className="space-y-0.5">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-white font-bold text-sm ml-1.5">
                  {DETAIL_MIAMI_INFO.stats.rating}
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-sans">
                {DETAIL_MIAMI_INFO.stats.rating} star rating on Google Maps, {DETAIL_MIAMI_INFO.stats.reviewsCount} verified reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
