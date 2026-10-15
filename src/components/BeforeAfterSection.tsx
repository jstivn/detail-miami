import React, { useState, useRef, useCallback, useEffect } from 'react';
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

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      handleMove(e.clientX);
    };

    const handleGlobalMouseUp = () => {
      isDragging.current = false;
    };

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (!isDragging.current || !e.touches[0]) return;
      handleMove(e.touches[0].clientX);
    };

    const handleGlobalTouchEnd = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchmove', handleGlobalTouchMove);
    window.addEventListener('touchend', handleGlobalTouchEnd);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
      window.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, [handleMove]);

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
            onMouseDown={(e) => {
              isDragging.current = true;
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              isDragging.current = true;
              handleMove(e.touches[0].clientX);
            }}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-[16/9] sm:aspect-[21/9] cursor-ew-resize overflow-hidden"
          >
            {/* AFTER Layer (Right / Full Background) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/images/after-polish.jpg"
                alt="After Paint Restoration - Mirror Finish"
                className="w-full h-full object-cover select-none pointer-events-none"
                loading="lazy"
                draggable={false}
              />
              <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 p-3 sm:p-4 bg-black/85 border border-white/[0.1] rounded-xl font-mono text-[11px] sm:text-xs space-y-1 backdrop-blur-md shadow-lg pointer-events-none">
                <div className="text-emerald-400 font-bold">AFTER // COMPLETED</div>
                <div className="text-zinc-300">GLOSS DEPTH: 99.2 GU</div>
                <div className="text-zinc-400">DEFECT REMOVAL: 99.4%</div>
                <div className="text-red-400">XPEL 10-MIL INSTALLED</div>
              </div>
            </div>

            {/* BEFORE Layer (Left / Clipped via hardware-accelerated clipPath) */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="/images/before-polish.jpg"
                alt="Before Paint Restoration - Heavy Swirls"
                className="w-full h-full object-cover select-none pointer-events-none"
                loading="lazy"
                draggable={false}
              />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 p-3 sm:p-4 bg-black/85 border border-white/[0.1] rounded-xl font-mono text-[11px] sm:text-xs space-y-1 backdrop-blur-md shadow-lg pointer-events-none">
                <div className="text-red-400 font-bold">BEFORE // HEAVY SWIRLS</div>
                <div className="text-zinc-300">MICRO-SWIRLS: HEAVY</div>
                <div className="text-zinc-400">GLOSS: 74.2 GU (OXIDIZED)</div>
                <div className="text-zinc-500">PROTECTION: NONE</div>
              </div>
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)] z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-600 text-white border-2 border-white flex items-center justify-center shadow-2xl">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
