import React, { useState } from 'react';
import { DETAIL_MIAMI_INFO } from '../data/detailData';
import { X, Send, Calendar, Car, MessageSquare, Clock } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Car Wash'
}) => {
  const [service, setService] = useState(defaultService);
  const [vehicle, setVehicle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const buildDossier = () => {
    return [
      `*DETAIL MIAMI // APPOINTMENT BOOKING*`,
      `Service: ${service}`,
      `Vehicle: ${vehicle || 'Exotic / Luxury Vehicle'}`,
      `Date: ${date || 'Earliest Available'}`,
      `Time: ${time}`,
      `Client: ${name || 'Private Client'}`,
      `Phone: ${phone || '(305) 555-0199'}`,
      `Location: 2420 NE 2nd Ave, Miami Design District`
    ].join('\n');
  };

  const handleSMSSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = buildDossier();
    const smsUrl = `sms:${DETAIL_MIAMI_INFO.smsRaw}?&body=${encodeURIComponent(text)}`;
    window.location.href = smsUrl;
    onClose();
  };

  const handleWASubmit = () => {
    const text = buildDossier();
    const waUrl = `https://wa.me/${DETAIL_MIAMI_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-2xl bg-zinc-950 border border-white/[0.14] p-8 shadow-2xl font-sans">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
          <div>
            <div className="text-[10px] font-mono tracking-widest text-red-500 uppercase">
              STUDIO RESERVATION // MIAMI DESIGN DISTRICT
            </div>
            <h3 className="font-extrabold text-2xl text-white uppercase tracking-tight">
              Book Your Appointment
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSMSSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">
                Selected Service *
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/[0.1] focus:border-red-500 text-white text-sm outline-none font-sans"
              >
                <option value="Signature Hand Car Wash ($95)">Signature Hand Car Wash ($95)</option>
                <option value="Car Polish & Paint Correction ($450)">Car Polish & Paint Correction ($450)</option>
                <option value="Ceramic & XPEL PPF Armor ($1,850)">Ceramic & XPEL PPF Armor ($1,850)</option>
                <option value="Complete Detailing Reconditioning ($280)">Complete Detailing Reconditioning ($280)</option>
                <option value="Custom Exotic Bespoke Package">Custom Exotic Bespoke Package</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">
                Vehicle Make & Model *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Porsche 911 GT3 / Urus"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/[0.1] focus:border-red-500 text-white text-sm outline-none font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/[0.1] focus:border-red-500 text-white text-sm outline-none font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">
                Preferred Time Slot
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/[0.1] focus:border-red-500 text-white text-sm outline-none font-sans"
              >
                <option value="09:00 AM">09:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="01:30 PM">01:30 PM</option>
                <option value="03:30 PM">03:30 PM</option>
                <option value="05:30 PM">05:30 PM</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/[0.1] focus:border-red-500 text-white text-sm outline-none font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">
                Cell Phone / iMessage *
              </label>
              <input
                type="tel"
                required
                placeholder="(305) 555-0199"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/[0.1] focus:border-red-500 text-white text-sm outline-none font-sans"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 space-y-2">
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Confirm via 1-Tap SMS</span>
            </button>

            <button
              type="button"
              onClick={handleWASubmit}
              className="w-full py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/[0.08] text-xs font-mono transition-colors"
            >
              Alternative: Book via WhatsApp (International)
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
