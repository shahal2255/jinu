import React, { useState } from 'react';
import { X, MapPin, Navigation, Copy, Check, Phone } from 'lucide-react';
import { RESTAURANT_INFO, RESTAURANT_IMAGES } from '../data/restaurantData';

interface DirectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DirectionsModal: React.FC<DirectionsModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenGoogleMaps = () => {
    const query = encodeURIComponent('Yamama Shawaya, Angadipuram, Perinthalmanna, Kerala');
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-[#0e1015] border border-orange-500/30 rounded-3xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#181a21] text-[#a8a195] hover:text-white border border-white/5 cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-orange-500/80 shadow-md bg-black shrink-0">
              <img
                src={RESTAURANT_IMAGES.logo}
                alt="Yamama Shawaya Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[11px] uppercase font-bold text-amber-400 tracking-wider">
                Refill Your Energy · Location
              </span>
              <h3 className="font-display text-xl font-bold text-[#f4efe6]">
                Yamama Shawaya
              </h3>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#14161c] border border-orange-950/60 space-y-2">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-[#f4efe6] font-medium leading-relaxed">
                {RESTAURANT_INFO.address.full}
              </div>
            </div>
            <div className="text-[11px] text-[#a8a195] pl-6">
              Landmark: Oradampalam-Valiyavitilpadi stretch along Calicut Road, Angadipuram.
            </div>
          </div>

          <div className="space-y-2.5">
            <button
              onClick={handleOpenGoogleMaps}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg glow-orange flex items-center justify-center gap-2 cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps</span>
            </button>

            <button
              onClick={handleCopyAddress}
              className="w-full py-3 px-4 rounded-xl bg-[#181a21] hover:bg-[#22252e] border border-white/10 text-xs font-semibold text-[#f4efe6] flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-orange-400" />}
              <span>{copied ? 'Address Copied to Clipboard!' : 'Copy Full Address'}</span>
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-[#121419] border border-white/5 flex items-center justify-between text-xs">
            <span className="text-[#a8a195]">Need counter directions?</span>
            <a
              href="tel:+919747362101"
              className="font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 9747362101</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
