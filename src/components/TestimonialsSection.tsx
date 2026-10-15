import React from 'react';
import { TESTIMONIALS_LIST, DETAIL_MIAMI_INFO } from '../data/detailData';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-black border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-mono text-red-500 tracking-widest uppercase">
            VERIFIED LOCAL REPUTATION // GOOGLE REVIEWS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
            What Customers Are Saying
          </h2>
          <p className="text-zinc-400 text-sm font-sans leading-relaxed">
            Rated 4.9 stars by luxury and exotic car owners across Miami-Dade, Brickell, Star Island, and Coral Gables.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_LIST.map((rev) => (
            <div
              key={rev.id}
              className="bg-zinc-950 p-8 rounded-2xl border border-white/[0.1] hover:border-red-500/40 transition-all flex flex-col justify-between shadow-xl relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/[0.05]" />

              <div className="space-y-4 mb-6">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-white text-xs font-bold ml-1.5">5.0</span>
                </div>

                <p className="text-zinc-300 text-sm font-sans leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Reviewer info */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <div className="text-white font-bold text-sm">{rev.name}</div>
                  <div className="text-zinc-500 text-xs font-mono">{rev.vehicle}</div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
