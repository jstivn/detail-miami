import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, ArrowLeftRight } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  return (
    <section id="before-after" className="py-24 bg-zinc-950 border-t border-white/[0.08] relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/15 border border-red-500/30 text-xs font-mono font-semibold text-red-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OPTICAL TRANSFORMATION // MIAMI STUDIO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
            Trusted by owners of the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              World's Finest Automobiles
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-sans leading-relaxed">
            Drag the splitter to inspect the difference between sand-pitted swirl damage and our surgical multi-stage paint correction with XPEL 10-Mil protection.
          </p>
        </div>

        {/* Interactive Before & After Slider */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/[0.12] shadow-2xl bg-black">
          <div
            ref={containerRef}
            onMouseDown={() => (isDragging.current = true)}
            onMouseUp={() => (isDragging.current = false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => (isDragging.current = true)}
            onTouchEnd={() => (isDragging.current = false)}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-[16/9] sm:aspect-[21/9] cursor-ew-resize overflow-hidden"
          >
            {/* AFTER Layer (Right / Full Background) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/images/service-polish.jpg"
                alt="After Paint Restoration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-6 right-6 p-4 bg-black/85 border border-white/[0.1] rounded-xl font-mono text-xs space-y-1 backdrop-blur-md">
                <div className="text-emerald-400 font-bold">AFTER // COMPLETED</div>
                <div className="text-zinc-300">GLOSS DEPTH: 99.2 GU</div>
                <div className="text-zinc-400">DEFECT REMOVAL: 99.4%</div>
                <div className="text-red-400">XPEL 10-MIL INSTALLED</div>
              </div>
            </div>

            {/* BEFORE Layer (Left / Clipped) */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full">
                <img
                  src="/images/service-polish.jpg"
                  alt="Before Paint Restoration"
                  className="absolute inset-0 w-full h-full object-cover filter contrast-125 brightness-75 sepia-[0.35]"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    maxWidth: 'none'
                  }}
                  loading="lazy"
                />
                {/* Simulated Swirl Texture */}
                <div
                  className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 60%)'
                  }}
                />
                <div className="absolute bottom-6 left-6 p-4 bg-black/85 border border-white/[0.1] rounded-xl font-mono text-xs space-y-1 backdrop-blur-md">
                  <div className="text-red-400 font-bold">BEFORE // FACTORY HAZE</div>
                  <div className="text-zinc-400">MICRO-SWIRLS: HEAVY</div>
                  <div className="text-zinc-500">GLOSS: 74.2 GU (OXIDIZED)</div>
                  <div className="text-zinc-500">PROTECTION: NONE</div>
                </div>
              </div>
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-red-600 text-white border-2 border-white flex items-center justify-center shadow-xl">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
