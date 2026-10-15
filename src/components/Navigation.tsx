import React, { useState, useEffect } from 'react';
import { DETAIL_MIAMI_INFO, buildSMSLink } from '../data/detailData';
import { Phone, MessageSquare, Menu, X, Calendar, Sparkles } from 'lucide-react';

interface NavigationProps {
  onOpenAppointment: (service?: string) => void;
  onOpenCallback: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenAppointment, onOpenCallback }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 350) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/85 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-600 to-rose-500 flex items-center justify-center text-white font-black text-lg tracking-wider shadow-[0_0_20px_rgba(225,29,72,0.4)] group-hover:scale-105 transition-transform">
            DM
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-white uppercase font-sans">
              DETAIL<span className="text-red-500">MIAMI</span>
            </span>
            <span className="text-[10px] tracking-widest text-zinc-400 font-mono -mt-1 uppercase">
              STUDIO // DESIGN DISTRICT
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <a href="#main" className="hover:text-white transition-colors">Home</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#before-after" className="hover:text-white transition-colors">Before & After</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Direct 1-Tap SMS button */}
          <a
            href={buildSMSLink("Quick Concierge")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-blue-400 border border-blue-500/30 text-xs font-semibold tracking-wide transition-all shadow-sm"
            title="1-Tap SMS Inquiry"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>1-Tap SMS</span>
          </a>

          {/* Direct Phone Call */}
          <a
            href={`tel:${DETAIL_MIAMI_INFO.phoneRaw}`}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/[0.1] text-xs font-semibold tracking-wide transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-red-500" />
            <span>{DETAIL_MIAMI_INFO.phoneDisplay}</span>
          </a>

          {/* Book Now (Appears dynamically like detaildubai.ae) */}
          <button
            onClick={() => onOpenAppointment()}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider text-white transition-all duration-300 ${
              scrolled
                ? 'bg-gradient-to-r from-red-600 to-rose-600 shadow-[0_0_25px_rgba(225,29,72,0.5)] scale-100 opacity-100'
                : 'bg-red-600/90 hover:bg-red-600 shadow-md'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Now</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-300 hover:text-white rounded-lg hover:bg-zinc-900"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-white/[0.1] px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col gap-3 text-sm font-medium text-zinc-300">
            <a 
              href="#main" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/[0.05]"
            >
              Home
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/[0.05]"
            >
              Services
            </a>
            <a 
              href="#before-after" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/[0.05]"
            >
              Before & After
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/[0.05]"
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/[0.05]"
            >
              FAQ
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full py-3.5 rounded-full bg-red-600 text-white font-bold text-xs uppercase tracking-wider text-center shadow-lg"
            >
              Book an Appointment Now
            </button>

            <a
              href={buildSMSLink("Mobile Menu")}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full bg-zinc-900 text-blue-400 border border-blue-500/30 font-semibold text-xs text-center flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>1-Tap SMS Inquiry</span>
            </a>

            <a
              href={`tel:${DETAIL_MIAMI_INFO.phoneRaw}`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full bg-zinc-900 text-zinc-300 border border-white/[0.1] font-semibold text-xs text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call {DETAIL_MIAMI_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
