import React from 'react';
import { SERVICES_LIST, DETAIL_MIAMI_INFO, buildSMSLink } from '../data/detailData';
import { Phone, Check, ArrowRight, MessageSquare, Clock } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-black border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 pb-12 border-b border-white/[0.08]">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono text-red-500 tracking-widest uppercase">
              STUDIO CAPABILITIES // MIAMI DESIGN DISTRICT
            </div>
            <h2 className="font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              Our Premium Service
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-sans leading-relaxed max-w-2xl">
              Our team of certified professionals takes pride in delivering meticulous attention to detail, ensuring your vehicle shines inside and out. Whether you need a quick wash or an extensive detailing service, Detail Miami is here to enhance your car’s appearance and preserve its value. Experience the difference with us— where quality meets convenience!
            </p>
          </div>

          {/* Quick CTA Box (as on detaildubai.ae) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-zinc-950 p-6 rounded-2xl border border-white/[0.1] space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="Master Detailer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-white text-xs font-bold uppercase">
                    Talk to a Master Detailer
                  </div>
                  <div className="text-zinc-400 text-xs">
                    Get an instant quote over phone or text
                  </div>
                </div>
              </div>

              <a
                href={`tel:${DETAIL_MIAMI_INFO.phoneRaw}`}
                className="px-4 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shrink-0 transition-colors shadow-md"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>

            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-3 text-xs text-zinc-400">
              <span>Or pick a slot right now:</span>
              <button
                onClick={() => onSelectService('Car Wash')}
                className="text-red-400 hover:text-white font-semibold underline underline-offset-4"
              >
                Book An Appointment &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="group bg-zinc-950 rounded-2xl border border-white/[0.1] hover:border-red-500/50 transition-all overflow-hidden flex flex-col justify-between shadow-xl"
            >
              {/* Service Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 border border-white/10 text-[10px] font-mono font-bold uppercase tracking-wider text-red-400 backdrop-blur-md">
                  {service.tag}
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-zinc-900/90 border border-white/10 text-xs font-mono font-bold text-white backdrop-blur-md">
                  Starting at ${service.priceUSD}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="text-xs font-mono text-zinc-500 mb-1">
                    {service.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm font-sans leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans">
                        <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4 font-mono text-xs">
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <Clock className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{service.duration}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                    >
                      Book Now
                    </button>
                    <a
                      href={buildSMSLink(service.title)}
                      className="p-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-blue-400 border border-blue-500/30 transition-colors"
                      title="1-Tap SMS Inquiry"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
