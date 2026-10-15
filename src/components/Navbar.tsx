import React, { useState, useEffect } from 'react';
import { ATELIER_INFO, buildSMSLink } from '../data/atelierData';
import { MoreHorizontal, X, Phone, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenBookingModal: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Climate", href: "#climate" },
    { label: "Pricing", href: "#pricing" },
    { label: "Cases", href: "#cases" },
    { label: "Cleanroom", href: "#cleanroom" },
    { label: "FAQ", href: "#faq" }
  ];

  // Dynamic active link tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      const sections = [
        { id: 'hero', label: 'Home' },
        { id: 'climate', label: 'Climate' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'cases', label: 'Cases' },
        { id: 'cleanroom', label: 'Cleanroom' },
        { id: 'faq', label: 'FAQ' },
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
        <div className="flex items-center gap-2.5 sm:gap-3.5 max-w-full">
          {/* Main Floating Liquid Glass Capsule */}
          <div className="liquid-glass-nav flex items-center h-12 sm:h-14 px-3 sm:px-5 rounded-[9999px] transition-all">
            {/* Atelier Brand Emblem & Title */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveLink('Home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 sm:gap-3 group shrink-0 mr-2 sm:mr-4"
            >
              {/* Sacred Triangle Luxury Crest in Champagne Accent */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#C5A48E]/40 bg-gradient-to-br from-[#C5A48E]/25 via-[#A37F67]/15 to-transparent flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform shrink-0">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E2CDBE]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <polygon points="12 3 22 20 2 20" />
                  <polygon points="12 8 18 18 6 18" strokeWidth="1.2" />
                  <circle cx="12" cy="14" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.18em] sm:tracking-[0.22em] font-semibold text-white text-xs sm:text-sm uppercase whitespace-nowrap">
                  APEX USA
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#C5A48E] -mt-0.5 hidden sm:block">
                  MIAMI • DALLAS • AUSTIN
                </span>
              </div>
            </a>

            {/* Subtle Divider (Desktop only) */}
            <div className="hidden lg:block w-px h-5 bg-white/[0.12] mr-2" />

            {/* Desktop Nav Items */}
            <nav className="hidden lg:flex items-center gap-1 sm:gap-1.5 text-xs font-sans">
              {navLinks.map((link) => {
                const isActive = activeLink === link.label;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      setActiveLink(link.label);
                      if (link.href === '#hero') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className={`px-3.5 py-1.5 rounded-[9999px] transition-all text-xs font-medium tracking-wide whitespace-nowrap ${
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

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-zinc-300 hover:text-white ml-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <MoreHorizontal className="w-5 h-5 text-[#E2CDBE]" />
              )}
            </button>
          </div>

          {/* Desktop Only Action Pill Buttons: 1-Tap SMS & Call */}
          <div className="hidden lg:flex items-center gap-2 sm:gap-2.5 shrink-0">
            <a
              href={buildSMSLink("Header Liquid Concierge")}
              className="liquid-glass-btn-sms inline-flex items-center justify-center gap-1.5 h-11 sm:h-12 px-4 sm:px-5 rounded-[9999px] text-xs font-sans font-medium text-white tracking-wide transition-all whitespace-nowrap shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5 text-blue-200" />
              <span>1-Tap SMS</span>
            </a>

            <a
              href={`tel:${ATELIER_INFO.phoneRaw}`}
              className="liquid-glass-btn-call inline-flex items-center justify-center h-11 sm:h-12 px-4 sm:px-5 rounded-[9999px] text-xs font-sans font-medium text-white tracking-wide transition-all whitespace-nowrap"
            >
              <span>Call (305) 555-0199</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown (With 1-Tap SMS, Call, Links & Specify Build) */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 w-[calc(100vw-32px)] max-w-xs mx-auto p-4 liquid-glass-nav rounded-3xl flex flex-col gap-2 pointer-events-auto border border-white/25 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                setActiveLink(link.label);
                setMobileMenuOpen(false);
                if (link.href === '#hero') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className={`px-4 py-2.5 rounded-full text-xs font-sans tracking-wide transition-all ${
                activeLink === link.label
                  ? 'bg-[#C5A48E]/25 text-white font-semibold border border-[#C5A48E]/40'
                  : 'text-zinc-200 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Direct Action Buttons: 1-Tap SMS & Direct Call */}
          <div className="pt-2.5 mt-1 border-t border-white/10 flex items-center gap-2">
            <a
              href={buildSMSLink("Mobile Menu Concierge")}
              onClick={() => setMobileMenuOpen(false)}
              className="liquid-glass-btn-sms flex-1 py-2.5 text-center text-xs font-medium text-white rounded-full flex items-center justify-center gap-1.5 transition-all shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5 text-blue-200" />
              <span>1-Tap SMS</span>
            </a>

            <a
              href={`tel:${ATELIER_INFO.phoneRaw}`}
              onClick={() => setMobileMenuOpen(false)}
              className="liquid-glass-btn-call flex-1 py-2.5 text-center text-xs font-medium text-white rounded-full flex items-center justify-center gap-1.5 transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-300" />
              <span>Call</span>
            </a>
          </div>

          {/* Specify Build Button */}
          <div className="pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-2.5 text-center text-xs font-medium text-zinc-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors"
            >
              Specify Build
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
