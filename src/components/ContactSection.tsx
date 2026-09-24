import React from 'react';
import { MapPin, Phone, Clock, Navigation, ShoppingBag, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ContactSectionProps {
  onCallNow: () => void;
  onOpenOrder: () => void;
  onGetDirections: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onCallNow,
  onOpenOrder,
  onGetDirections,
}) => {
  return (
    <section id="contact" className="py-24 bg-[#0c0d11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us & Connect</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f4efe6]">
            Find Yamama Shawaya
          </h2>
          <p className="text-base text-[#b8b0a5]">
            Conveniently situated on Calicut Road at Angadipuram. Join us for a feast or contact our team for takeaway and deliveries.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Details Column */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address Card */}
              <div className="p-6 rounded-2xl bg-[#121419] border border-orange-950/60 hover:border-orange-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-orange-950/50 border border-orange-500/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-orange-400" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-orange-400">
                      Restaurant Address
                    </h3>
                    <p className="text-base font-semibold text-[#f4efe6]">
                      {RESTAURANT_INFO.address.line1}
                    </p>
                    <p className="text-sm text-[#c8c1b5]">
                      {RESTAURANT_INFO.address.city}
                    </p>
                    <p className="text-sm text-[#a8a195]">
                      {RESTAURANT_INFO.address.district}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Numbers Card */}
              <div className="p-6 rounded-2xl bg-[#121419] border border-orange-950/60 hover:border-orange-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-orange-950/50 border border-orange-500/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-orange-400" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-orange-400">
                      Direct Telephone & Orders
                    </h3>
                    <div className="flex flex-wrap gap-4 pt-1">
                      {RESTAURANT_INFO.phones.map((phone) => (
                        <a
                          key={phone.tel}
                          href={phone.tel}
                          className="inline-flex items-center gap-2 text-base font-bold font-mono text-[#f4efe6] hover:text-orange-400 transition-colors bg-[#1a1d24] px-3.5 py-1.5 rounded-lg border border-white/5"
                        >
                          <Phone className="w-3.5 h-3.5 text-orange-500" />
                          <span>{phone.display}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours Card */}
              <div className="p-6 rounded-2xl bg-[#121419] border border-orange-950/60 hover:border-orange-500/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-orange-950/50 border border-orange-500/30 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-orange-400" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-orange-400">
                      Operating Hours
                    </h3>
                    <p className="text-base font-semibold text-[#f4efe6]">
                      {RESTAURANT_INFO.openingHours.general}
                    </p>
                    <p className="text-xs text-orange-300/90 font-medium">
                      Note: {RESTAURANT_INFO.openingHours.peakNote}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Action Buttons Row */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onCallNow}
                className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 rounded-xl shadow-md glow-orange-subtle transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </button>

              <button
                onClick={onGetDirections}
                className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#f4efe6] bg-[#1a1d24] hover:bg-[#242730] border border-orange-900/50 hover:border-orange-500/50 rounded-xl transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-orange-400" />
                <span>Get Directions</span>
              </button>

              <button
                onClick={onOpenOrder}
                className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-orange-400 hover:bg-orange-300 rounded-xl font-bold transition-all cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Now</span>
              </button>
            </div>

          </div>

          {/* Interactive Map Visual Column */}
          <div className="lg:col-span-6">
            <div className="h-full min-h-[380px] rounded-3xl bg-[#111317] border border-orange-950/70 overflow-hidden relative flex flex-col justify-between p-8 shadow-xl">
              
              {/* Map background styling */}
              <div className="absolute inset-0 bg-[#0e1014] opacity-90">
                {/* Decorative map grid lines */}
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(234, 88, 12, 0.15) 1px, transparent 0)`,
                    backgroundSize: '24px 24px',
                  }}
                />
              </div>

              {/* Top Location Info */}
              <div className="relative z-10 space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/80 border border-orange-500/40 text-[11px] font-semibold text-orange-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Open Today · Dine-in & Takeaway</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#f4efe6]">
                  {RESTAURANT_INFO.address.mapLabel}
                </h3>
                <p className="text-xs text-[#a8a195]">
                  Situated on Calicut Road connecting Angadipuram with Perinthalmanna town.
                </p>
              </div>

              {/* Central Map Pin Graphic */}
              <div className="relative z-10 py-10 flex flex-col items-center justify-center text-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-orange-600/30 animate-ping absolute inset-0" />
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-700 flex items-center justify-center shadow-xl shadow-orange-950/80 relative z-10">
                    <MapPin className="w-8 h-8 text-black fill-black" />
                  </div>
                </div>

                <div className="mt-4 px-4 py-2 rounded-xl bg-[#090a0c]/90 border border-orange-500/40 backdrop-blur-md">
                  <span className="font-bold text-sm text-[#f4efe6]">Yamama Shawaya</span>
                  <span className="text-[11px] text-orange-400 block">Angadipuram</span>
                </div>
              </div>

              {/* Bottom Direction Card */}
              <div className="relative z-10 p-4 rounded-xl bg-[#14161b]/95 border border-white/10 flex items-center justify-between gap-4">
                <div className="text-xs text-[#b8b0a5]">
                  <span className="font-semibold text-[#f4efe6] block">Need assistance finding us?</span>
                  <span>Call our counter for real-time turn-by-turn guidance.</span>
                </div>
                <button
                  onClick={onGetDirections}
                  className="px-3.5 py-2 text-xs font-bold text-orange-400 hover:text-orange-300 bg-orange-950/50 hover:bg-orange-900/60 border border-orange-500/30 rounded-lg flex items-center gap-1.5 shrink-0"
                >
                  <span>Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
