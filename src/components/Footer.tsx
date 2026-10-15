import React from 'react';
import { ATELIER_INFO, buildSMSLink, buildGPSLink } from '../data/atelierData';
import { MapPin, Phone, Mail, Clock, Shield, ArrowUpRight, Compass, MessageSquare, Navigation } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-white/[0.08] relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Col 1: Brand & Credentials (GBP Trust Footer) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-950 border border-white/[0.14] flex items-center justify-center text-[#0A84FF] rounded-[2px]">
                <Shield className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <span className="font-display font-bold text-2xl tracking-wider text-white">APEX MIAMI</span>
                <div className="text-[10px] font-mono tracking-widest text-[#0A84FF]">
                  HYPERCAR SURFACE ENGINEERING ATELIER // MIAMI DESIGN DISTRICT
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed max-w-md">
              Specialized exotic and hypercar surface protection atelier in the Miami Design District, FL. Purpose-built ISO-certified cleanroom application of 10-Mil self-healing PPF, ultrasonic paint depth profiling, and cryogenic dry-ice detailing engineered for US Sunbelt and coastal environments.
            </p>

            {/* Strict Trust Footer Block for Google Maps Moderation */}
            <div className="p-4 bg-zinc-950 border border-white/[0.08] rounded-[2px] font-mono text-[11px] space-y-1.5">
              <div className="text-blue-400 font-semibold tracking-wide">STATE REGISTRATION & TRUST CREDENTIALS:</div>
              <div className="text-white">LICENSED IN FLORIDA: Division of Corporations Entity #L24000198421</div>
              <div className="text-zinc-300">LEGAL ENTITY: APEX SURFACE ENGINEERING LLC • FULLY INSURED</div>
              <div className="text-zinc-400">STATEWIDE ENCLOSED DISPATCH: (305) 555-0199</div>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="lg:col-span-3 space-y-4 font-mono text-xs">
            <div className="text-[#C5A48E] tracking-widest uppercase font-semibold text-[11px]">
              ENGINEERING REGIMES
            </div>
            <ul className="space-y-2.5 text-zinc-400">
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  XPEL 10-Mil Self-Healing PPF
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Multi-Stage Nanotech Correction
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  10H Diamond Matrix Ceramic
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Sub-Zero Cryogenic Dry-Ice Cleaning
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Florida DOT-Spec Ceramic Window Tint
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Bespoke Leather & Alcantara Barrier
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Coordinates & Direct Intake */}
          <div className="lg:col-span-4 space-y-4 font-mono text-xs">
            <div className="text-[#0A84FF] tracking-widest uppercase font-semibold text-[11px]">
              ATELIER COORDINATES // MIAMI DESIGN DISTRICT
            </div>

            <div className="space-y-3 text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0A84FF] shrink-0 mt-0.5" />
                <span className="font-sans text-xs leading-relaxed text-zinc-300">
                  {ATELIER_INFO.location}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-[#0A84FF] shrink-0" />
                <span>{ATELIER_INFO.coordinates}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#0A84FF] shrink-0" />
                <span>{ATELIER_INFO.hours}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0A84FF] shrink-0" />
                <a href={`tel:${ATELIER_INFO.phoneRaw}`} className="hover:text-white transition-colors font-semibold">
                  {ATELIER_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0A84FF] shrink-0" />
                <a href={`mailto:${ATELIER_INFO.email}`} className="hover:text-white transition-colors">
                  {ATELIER_INFO.email}
                </a>
              </div>
            </div>

            {/* Direct Action Buttons: 1-Tap SMS & Send GPS */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <a
                href={buildSMSLink("Footer Direct Inquire")}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#0A84FF] to-[#0066E1] hover:from-[#2192FF] hover:to-[#0A73F5] text-white font-mono text-xs font-bold transition-mechanical rounded-[2px] shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-blue-100" />
                <span>TEXT US (1-TAP SMS)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={buildGPSLink()}
                className="inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/[0.1] font-mono text-xs transition-mechanical rounded-[2px]"
              >
                <Navigation className="w-3.5 h-3.5 text-[#0A84FF]" />
                <span>SEND GPS</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} APEX MIAMI // HYPERCAR SURFACE ENGINEERING LLC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>MIAMI DESIGN DISTRICT, FL</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">FL SUNBIZ #L24000198421 // FULLY INSURED</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
