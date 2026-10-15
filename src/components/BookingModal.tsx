import React, { useState } from 'react';
import { ATELIER_INFO } from '../data/atelierData';
import { X, Send, MessageSquare, Car, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Full Body 10-Mil PPF'
}) => {
  const [vehicle, setVehicle] = useState('');
  const [year, setYear] = useState('2024');
  const [service, setService] = useState(defaultService);
  const [transport, setTransport] = useState('Self Drop-off (Miami Design District)');
  const [date, setDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  if (!isOpen) return null;

  const generateDossierText = () => {
    return [
      `*APEX USA // BAY ADMISSION DOSSIER*`,
      `Client: ${clientName || 'Private Collector'}`,
      `Phone: ${clientPhone || '(305) 555-0199'}`,
      `Vehicle: ${vehicle || 'Exotic Hypercar'} (${year})`,
      `Requested Service: ${service}`,
      `Transport Option: ${transport}`,
      `Preferred Bay Date: ${date || 'Earliest Available Bay'}`,
      `Facility: Miami Design District Atelier`
    ].join('\n');
  };

  const handleSMSSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = generateDossierText();
    const smsUrl = `sms:${ATELIER_INFO.smsRaw}?&body=${encodeURIComponent(text)}`;
    window.location.href = smsUrl;
    onClose();
  };

  const handleWASubmit = () => {
    const text = generateDossierText();
    const waUrl = `https://wa.me/${ATELIER_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-[#09090b] border border-white/[0.14] rounded-[2px] shadow-2xl p-6 sm:p-8 font-sans">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
          <div>
            <div className="text-[10px] font-mono tracking-widest text-[#0A84FF] uppercase">
              CONFIDENTIAL INTAKE // MIAMI DESIGN DISTRICT ATELIER
            </div>
            <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wide">
              SPECIFY VEHICLE ADMISSION
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white border border-white/[0.08] bg-zinc-900 rounded-[2px]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSMSSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                Vehicle Make & Model *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ferrari SF90 Stradale"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/[0.1] focus:border-[#0A84FF] text-white text-sm outline-none rounded-[2px] font-sans"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                Model Year
              </label>
              <input
                type="text"
                placeholder="2024 / 2025"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/[0.1] focus:border-[#0A84FF] text-white text-sm outline-none rounded-[2px] font-sans"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
              Required Specification / Package *
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/[0.1] focus:border-[#0A84FF] text-white text-sm outline-none rounded-[2px] font-sans"
            >
              <option value="FULL BODY ARMOUR (10-Mil PPF)">FULL BODY ARMOUR (10-Mil PPF)</option>
              <option value="TRACK ARMOUR PPF">TRACK ARMOUR PPF</option>
              <option value="APEX CONNOISSEUR (Full Suite + Cryo)">APEX CONNOISSEUR (Full Suite + Cryo)</option>
              <option value="Multi-Stage Nanotech Paint Correction">Multi-Stage Nanotech Paint Correction</option>
              <option value="10H Diamond Matrix Ceramic">10H Diamond Matrix Ceramic</option>
              <option value="Sub-Zero Dry-Ice Cryogenic Detailing">Sub-Zero Dry-Ice Cryogenic Detailing</option>
              <option value="Florida DOT-Spec Nano-Ceramic Window Tint">Florida DOT-Spec Nano-Ceramic Window Tint</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                Logistics / Transport
              </label>
              <select
                value={transport}
                onChange={(e) => setTransport(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/[0.1] focus:border-[#0A84FF] text-white text-sm outline-none rounded-[2px] font-sans"
              >
                <option value="Self Drop-off (Miami Design District)">Self Drop-off (Miami Design District)</option>
                <option value="Enclosed Hydraulic Transporter (Miami-Dade / Broward)">Enclosed Hydraulic Carrier (Miami-Dade)</option>
                <option value="Enclosed Hydraulic Transporter (Palm Beach / Naples)">Enclosed Hydraulic Carrier (Palm Beach)</option>
                <option value="Interstate Enclosed Transport (Texas / Dallas / Austin)">Interstate Carrier (Dallas / Austin)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                Target Bay Ingress Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/[0.1] focus:border-[#0A84FF] text-white text-sm outline-none rounded-[2px] font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                Client Name / Title
              </label>
              <input
                type="text"
                placeholder="Full Name"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/[0.1] focus:border-[#0A84FF] text-white text-sm outline-none rounded-[2px] font-sans"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-zinc-400 uppercase mb-1">
                Cell / iMessage ((305) 555-0199)
              </label>
              <input
                type="tel"
                placeholder="(305) 555-0199"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/[0.1] focus:border-[#0A84FF] text-white text-sm outline-none rounded-[2px] font-sans"
              />
            </div>
          </div>

          {/* Submit Actions */}
          <div className="pt-4 space-y-2">
            <button
              type="submit"
              className="w-full py-4 px-6 bg-gradient-to-r from-[#0A84FF] to-[#0066E1] hover:from-[#2192FF] hover:to-[#0A73F5] text-white font-mono text-xs tracking-wider font-extrabold flex items-center justify-center gap-2 transition-mechanical rounded-[2px] shadow-lg border border-blue-400/30"
            >
              <MessageSquare className="w-4 h-4 text-blue-100" />
              <span>TRANSMIT VIA 1-TAP SMS (INSTANT DOSSIER)</span>
            </button>

            <button
              type="button"
              onClick={handleWASubmit}
              className="w-full py-2.5 px-4 bg-zinc-950 hover:bg-zinc-900 text-zinc-400 hover:text-white border border-white/[0.08] font-mono text-[11px] tracking-wider transition-colors rounded-[2px]"
            >
              Alternative: Transmit via WhatsApp (International Clients)
            </button>

            <p className="pt-1 text-center text-[11px] font-mono text-zinc-500">
              Direct telemetry dispatched to Chief Engineer in Miami Design District. Zero sales spam.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
