import React from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook, Share2 } from 'lucide-react';
import { RESTAURANT_INFO, RESTAURANT_IMAGES } from '../data/restaurantData';

interface FooterProps {
  onNavigate: (view: 'home' | 'menu', sectionId?: string) => void;
  onOpenOrder: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenOrder }) => {
  return (
    <footer className="bg-[#07080a] text-[#d5cec4] border-t border-orange-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Column (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-full p-1 bg-gradient-to-br from-amber-400 via-orange-600 to-amber-700 shadow-xl shadow-orange-950/70 shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={RESTAURANT_IMAGES.logo}
                    alt="Yamama Shawaya Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-[#f4efe6] uppercase">
                  Yamama Shawaya
                </span>
                <span className="block text-[11px] text-amber-400 font-bold tracking-wider uppercase">
                  ★★★ Refill Your Energy ★★★
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#a8a195] leading-relaxed">
              Yamama Shawaya brings authentic Arabian grilled flavours to Angadipuram. Experience the rich taste of traditional shawaya, fragrant Mandi rice, and smoky charcoal-grilled favourites prepared with care and tradition.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#8c857b]">
              <span>Follow Our Flavours:</span>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#14161b] border border-white/5 flex items-center justify-center text-orange-400 hover:text-white hover:bg-orange-600 transition-colors cursor-pointer" title="Instagram">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#14161b] border border-white/5 flex items-center justify-center text-orange-400 hover:text-white hover:bg-orange-600 transition-colors cursor-pointer" title="Facebook">
                  <Facebook className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#14161b] border border-white/5 flex items-center justify-center text-orange-400 hover:text-white hover:bg-orange-600 transition-colors cursor-pointer" title="Share Restaurant">
                  <Share2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home', 'hero')}
                  className="hover:text-orange-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'about')}
                  className="hover:text-orange-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-orange-400 transition-colors text-orange-400 font-semibold"
                >
                  Dedicated Menu Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'why-yamama')}
                  className="hover:text-orange-400 transition-colors"
                >
                  Why Yamama
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'contact')}
                  className="hover:text-orange-400 transition-colors"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#b8b0a5]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <p>
                  {RESTAURANT_INFO.address.line1},<br />
                  {RESTAURANT_INFO.address.city},<br />
                  {RESTAURANT_INFO.address.district}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <div className="space-y-0.5">
                  {RESTAURANT_INFO.phones.map((phone) => (
                    <a
                      key={phone.tel}
                      href={phone.tel}
                      className="block font-mono text-[#f4efe6] hover:text-orange-400 transition-colors"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours & Order CTA (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Hours of Service
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#b8b0a5]">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#f4efe6]">{RESTAURANT_INFO.openingHours.general}</p>
                  <p className="text-[11px] text-orange-400/90 mt-1">{RESTAURANT_INFO.openingHours.peakNote}</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenOrder}
                className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 rounded-lg shadow-sm glow-orange-subtle transition-all cursor-pointer"
              >
                Place Quick Order
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7e766c]">
          <p>© 2026 Yamama Shawaya. All Rights Reserved.</p>
          <p className="flex items-center gap-2 text-[11px]">
            <span>Authentic</span>
            <span>·</span>
            <span>Smoky</span>
            <span>·</span>
            <span>Arabian</span>
            <span>·</span>
            <span>Premium</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
