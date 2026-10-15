import React, { useState } from 'react';
import { DETAIL_MIAMI_INFO, buildCallbackSMS } from '../data/detailData';
import { X, Phone, User, Send, CheckCircle2 } from 'lucide-react';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const smsUrl = buildCallbackSMS(name, phone);
    window.location.href = smsUrl;
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl bg-zinc-950 border border-white/[0.14] p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
            <h3 className="text-xl font-bold text-white uppercase">Request Transmitted!</h3>
            <p className="text-zinc-400 text-xs">
              One of our Detail Miami specialists will reach out shortly.
            </p>
          </div>
        ) : (
          <div>
            <div className="space-y-1 mb-6">
              <div className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>DIRECT CONCIERGE LINE</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white uppercase tracking-tight">
                Request a call back
              </h3>
              <p className="text-zinc-400 text-xs">
                One of our experts will get in touch with you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase mb-1.5">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Michael Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border border-white/[0.1] focus:border-red-500 text-white text-sm outline-none font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase mb-1.5">
                  Phone Number ((305) 555-0199) *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="tel"
                    required
                    placeholder="(305) 555-0199"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border border-white/[0.1] focus:border-red-500 text-white text-sm outline-none font-sans"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2 mt-4"
              >
                <Send className="w-4 h-4" />
                <span>Request A Free Call Back</span>
              </button>

              <div className="text-center pt-2">
                <a
                  href={`tel:${DETAIL_MIAMI_INFO.phoneRaw}`}
                  className="text-xs text-zinc-400 hover:text-white underline"
                >
                  Or call directly now: {DETAIL_MIAMI_INFO.phoneDisplay}
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
