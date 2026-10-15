import React, { useState } from 'react';
import { FAQ_LIST } from '../data/detailData';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-black border-t border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="text-xs font-mono text-red-500 tracking-widest uppercase">
            CLEAR ANSWERS // WHAT TO EXPECT
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-sm font-sans max-w-xl mx-auto">
            Everything you need to know about our products, booking procedures, and guarantees in Miami.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-xl border border-white/[0.08] bg-zinc-950/70 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-zinc-900/50 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-zinc-100 font-sans tracking-wide">
                    Q. {item.q}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-zinc-900 border border-white/[0.1] text-red-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-red-600/20 text-red-400' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-zinc-400 font-sans leading-relaxed border-t border-white/[0.04]">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
