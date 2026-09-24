import React from 'react';
import { Phone, ArrowRight, Flame, Clock, MapPin } from 'lucide-react';
import { RESTAURANT_INFO, RESTAURANT_IMAGES } from '../data/restaurantData';

interface HeroProps {
  onExploreMenu: () => void;
  onCallNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onCallNow }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#090a0c]">
      {/* Background Image with Dark Vignette & Amber Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={RESTAURANT_IMAGES.hero}
          alt="Yamama Shawaya Charcoal Grills"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.15] scale-105 transform animate-pulse duration-1000"
          style={{ animationDuration: '8s' }}
          referrerPolicy="no-referrer"
        />
        {/* Gradients to blend smoothly into surrounding sections */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c] via-[#090a0c]/60 to-[#090a0c]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090a0c]/90 via-[#090a0c]/60 to-transparent" />
        {/* Subtle warm orange ambient light */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-8">
            {/* Subtle Arabian Motif Tagline with Logo Micro-Badge */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-orange-950/70 border border-orange-500/40 backdrop-blur-md">
              <img
                src={RESTAURANT_IMAGES.logo}
                alt="Yamama Logo Badge"
                className="w-5 h-5 rounded-full object-cover"
              />
              <span className="text-xs uppercase tracking-widest font-semibold text-orange-300">
                Angadipuram, Perinthalmanna · Kerala
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-orange-600/30 text-amber-300 border border-orange-500/30">
                Refill Your Energy
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f4efe6] leading-[1.15] text-balance">
                Authentic Arabian Flavours,{' '}
                <span className="text-gradient-orange drop-shadow-sm">
                  Grilled to Perfection.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-[#d5cec4] font-normal leading-relaxed max-w-2xl text-balance">
                {RESTAURANT_INFO.supportingText}
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 rounded-xl shadow-xl shadow-orange-950/60 glow-orange transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onCallNow}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#f4efe6] bg-[#14161c]/90 hover:bg-[#1f2229] border border-orange-800/40 hover:border-orange-500/60 rounded-xl backdrop-blur-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call: 9747362101</span>
              </button>
            </div>

            {/* Quick Trust Bar */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#b8b0a5]">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                <span>{RESTAURANT_INFO.openingHours.general}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="truncate">Calicut Road, Angadipuram (Opp. Valiyavitilpadi)</span>
              </div>
            </div>
          </div>

          {/* Official Mascot Logo Hero Feature Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group text-center">
              <div className="absolute -inset-3 bg-gradient-to-r from-orange-600/40 via-amber-500/30 to-yellow-500/20 rounded-full blur-2xl opacity-80 group-hover:opacity-100 transition duration-700" />
              
              {/* Outer decorative ring */}
              <div className="relative w-60 sm:w-72 h-60 sm:h-72 rounded-full p-2.5 bg-gradient-to-br from-amber-400 via-orange-600 to-amber-700 shadow-2xl shadow-orange-950/90">
                <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center border-2 border-black/80">
                  <img
                    src={RESTAURANT_IMAGES.logo}
                    alt="Official Yamama Shawaya Logo - Refill Your Energy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Motto badge under the logo with 3-star brand seal */}
              <div className="mt-5 space-y-2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121419]/95 border border-orange-500/50 shadow-xl backdrop-blur-md">
                  <span className="text-amber-400 text-xs">★★★</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Refill Your Energy
                  </span>
                  <span className="text-amber-400 text-xs">★★★</span>
                </div>
                <div className="text-[11px] text-[#a8a195] font-medium tracking-wide">
                  Yamama Shawaya · Angadipuram, Kerala
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Bottom Curve / Hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
    </section>
  );
};
