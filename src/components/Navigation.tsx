import React, { useState, useEffect } from 'react';
import { DETAIL_MIAMI_INFO, buildSMSLink } from '../data/detailData';
import { MoreHorizontal, X, Phone, MessageSquare, Calendar } from 'lucide-react';

interface NavigationProps {
  onOpenAppointment: (service?: string) => void;
  onOpenCallback: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenAppointment, onOpenCallback }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { label: "Home", href: "#main" },
    { label: "Services", href: "#services" },
    { label: "Before & After", href: "#before-after" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const sections = [
        { id: 'main', label: 'Home' },
        { id: 'services', label: 'Services' },
        { id: 'before-after', label: 'Before & After' },
        { id: 'testimonials', label: 'Testimonials' },
        { id: 'faq', label: 'FAQ' },
        { id: 'contact', label: 'Contact' },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveLink(sections[i].label);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-6 px-3 sm:px-6 pointer-events-none transition-all">
      {/* Centered Floating Island Navigation Container */}
      <div className="w-full flex items-center justify-center pointer-events-auto">
        <div className="flex items-center gap-2 sm:gap-3 max-w-full">
          {/* Main Floating Liquid Glass Capsule */}
          <div className="liquid-glass-nav flex items-center h-12 sm:h-14 px-3 sm:px-5 rounded-[9999px] transition-all">
            {/* Atelier Brand Crest & Title */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveLink('Home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 sm:gap-3 group shrink-0 mr-2 sm:mr-4"
            >
              {/* Luxury Monogram Crest */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-red-500/40 bg-gradient-to-br from-red-600/30 via-rose-500/20 to-transparent flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform shrink-0">
                <span className="font-black text-xs text-white tracking-wider">DM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.16em] sm:tracking-[0.2em] font-extrabold text-white text-xs sm:text-sm uppercase whitespace-nowrap">
                  DETAIL<span className="text-red-400">MIAMI</span>
                </span>
                <span className="text-[9px] font-mono tracking-widest text-zinc-400 -mt-0.5 hidden sm:block">
                  DESIGN DISTRICT
                </span>
              </div>
            </a>

            {/* Subtle Vertical Divider */}
            <div className="hidden lg:block w-px h-5 bg-white/[0.12] mr-2" />

            {/* Desktop Nav Items with liquid glass pills */}
            <nav className="hidden lg:flex items-center gap-1 text-xs font-sans">
              {navLinks.map((link) => {
                const isActive = activeLink === link.label;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      setActiveLink(link.label);
                      if (link.href === '#main') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className={`px-3 py-1.5 rounded-[9999px] transition-all text-xs font-medium tracking-wide whitespace-nowrap ${
                      isActive
                        ? 'liquid-glass-active-pill text-white shadow-sm'
                        : 'text-zinc-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Mobile menu toggle (three dots / X) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-zinc-300 hover:text-white ml-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <MoreHorizontal className="w-5 h-5 text-zinc-300" />
              )}
            </button>
          </div>

          {/* Desktop Floating Action Pill Buttons */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            {/* Book Now Liquid Glass Button */}
            <button
              onClick={() => onOpenAppointment()}
              className="liquid-glass-btn-book inline-flex items-center justify-center gap-1.5 h-11 sm:h-12 px-4 sm:px-5 rounded-[9999px] text-xs font-sans font-bold text-white tracking-wide transition-all whitespace-nowrap shadow-lg hover:scale-105"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </button>

            {/* 1-Tap SMS Liquid Glass Button */}
            <a
              href={buildSMSLink("Header Liquid Concierge")}
              className="liquid-glass-btn-sms inline-flex items-center justify-center gap-1.5 h-11 sm:h-12 px-4 sm:px-5 rounded-[9999px] text-xs font-sans font-medium text-white tracking-wide transition-all whitespace-nowrap shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5 text-blue-200" />
              <span>1-Tap SMS</span>
            </a>

            {/* Call Direct Liquid Glass Button */}
            <a
              href={`tel:${DETAIL_MIAMI_INFO.phoneRaw}`}
              className="liquid-glass-btn-call inline-flex items-center justify-center gap-1.5 h-11 sm:h-12 px-4 sm:px-5 rounded-[9999px] text-xs font-sans font-medium text-zinc-200 hover:text-white tracking-wide transition-all whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>{DETAIL_MIAMI_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 w-[calc(100vw-32px)] max-w-xs mx-auto p-4 liquid-glass-nav rounded-3xl flex flex-col gap-2 pointer-events-auto border border-white/25 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                setActiveLink(link.label);
                setMobileMenuOpen(false);
                if (link.href === '#main') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className={`px-4 py-2.5 rounded-full text-xs font-sans tracking-wide transition-all ${
                activeLink === link.label
                  ? 'bg-red-600/30 text-white font-semibold border border-red-500/40'
                  : 'text-zinc-200 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Actions: Book Now, 1-Tap SMS & Call */}
          <div className="pt-2.5 mt-1 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full py-2.5 text-center text-xs font-bold text-white rounded-full bg-red-600 shadow-md flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>

            <div className="flex items-center gap-2">
              <a
                href={buildSMSLink("Mobile Menu Concierge")}
                onClick={() => setMobileMenuOpen(false)}
                className="liquid-glass-btn-sms flex-1 py-2 text-center text-xs font-medium text-white rounded-full flex items-center justify-center gap-1.5 transition-all shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-blue-200" />
                <span>1-Tap SMS</span>
              </a>

              <a
                href={`tel:${DETAIL_MIAMI_INFO.phoneRaw}`}
                onClick={() => setMobileMenuOpen(false)}
                className="liquid-glass-btn-call flex-1 py-2 text-center text-xs font-medium text-white rounded-full flex items-center justify-center gap-1.5 transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-300" />
                <span>Call</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
