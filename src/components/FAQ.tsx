import React, { useState } from 'react';
import { FAQ_DATA } from '../data/atelierData';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#08080a] border-b border-white/[0.08] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-[11px] font-mono tracking-widest text-[#0A84FF] uppercase mb-2">
            TECHNICAL ASSURANCE // OWNER FAQS
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            FREQUENTLY ASKED <span className="text-[#C5A48E]">QUESTIONS</span>
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-zinc-400 text-sm font-sans leading-relaxed">
            Essential operational queries regarding dealership warranty retention, Sunbelt heat tolerance, and Florida DOT vehicle compliance.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-white/[0.08] bg-black/60 rounded-[2px] overflow-hidden transition-mechanical"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-zinc-900/40 transition-colors"
                >
                  <span className="font-mono font-bold text-sm sm:text-base text-zinc-100 tracking-wide">
                    {item.q}
                  </span>
                  <div
                    className={`p-1.5 bg-zinc-900 border border-white/[0.08] text-[#0A84FF] rounded-[2px] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-white/[0.04]">
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
