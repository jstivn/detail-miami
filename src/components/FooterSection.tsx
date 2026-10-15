import React from 'react';
import { DETAIL_MIAMI_INFO, buildSMSLink } from '../data/detailData';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUpRight, MessageSquare, ExternalLink } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-white border-t border-white/[0.08] relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Col 1: Brand & Credentials */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-600 to-rose-500 flex items-center justify-center text-white font-black text-lg tracking-wider">
                DM
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white uppercase font-sans">
                  DETAIL<span className="text-red-500">MIAMI</span>
                </span>
                <div className="text-[10px] font-mono tracking-widest text-zinc-400">
                  CAR SERVICE, WASH & DETAILING STUDIO
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              South Florida's benchmark automotive studio in the Miami Design District. Hand wash, multi-stage paint correction, 10-Mil XPEL PPF, and 10H ceramic coatings engineered for extreme coastal humidity and subtropical heat.
            </p>

            {/* Mandatory GBP Trust Block */}
            <div className="p-4 rounded-xl bg-zinc-950 border border-white/[0.08] font-mono text-[11px] space-y-1">
              <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>STATE LICENSED & FULLY INSURED:</span>
              </div>
              <div className="text-white">{DETAIL_MIAMI_INFO.licenseInfo}</div>
              <div className="text-zinc-400">{DETAIL_MIAMI_INFO.legalEntity}</div>
              <div className="text-zinc-500">DISPATCH DIRECT: {DETAIL_MIAMI_INFO.phoneDisplay}</div>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-red-500 tracking-widest uppercase font-semibold text-[11px]">
              CORE SERVICES
            </div>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Signature Foam Hand Wash
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Multi-Stage Paint Correction
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  XPEL 10-Mil Self-Healing PPF
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  10H Diamond Matrix Ceramic
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Deep Interior Steam Detailing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Florida DOT Ceramic Window Tint
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Coordinates & Direct Dispatch */}
          <div className="lg:col-span-4 space-y-3 font-mono text-xs">
            <div className="text-red-500 tracking-widest uppercase font-semibold text-[11px]">
              STUDIO LOCATION & DISPATCH
            </div>

            <div className="space-y-2.5 text-zinc-300">
              <a
                href={DETAIL_MIAMI_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-white transition-colors group"
              >
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="font-sans text-xs leading-relaxed group-hover:underline">
                  {DETAIL_MIAMI_INFO.location}
                </span>
              </a>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-red-500 shrink-0" />
                <span>{DETAIL_MIAMI_INFO.hours}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`tel:${DETAIL_MIAMI_INFO.phoneRaw}`} className="hover:text-white font-bold transition-colors">
                  {DETAIL_MIAMI_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`mailto:${DETAIL_MIAMI_INFO.email}`} className="hover:text-white transition-colors">
                  {DETAIL_MIAMI_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <a
                href={buildSMSLink("Footer Quick Text")}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>1-Tap SMS</span>
              </a>

              <a
                href={DETAIL_MIAMI_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/[0.1] font-mono text-xs transition-colors"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3 text-red-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} DETAIL MIAMI STUDIO LLC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span>MIAMI DESIGN DISTRICT, FL</span>
            <span className="text-zinc-700">|</span>
            <span>SUNBIZ #L24000198421</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
