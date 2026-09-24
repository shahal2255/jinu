import React from 'react';
import { Users, Heart, Coffee, ShieldCheck, SunMedium } from 'lucide-react';
import { RESTAURANT_IMAGES } from '../data/restaurantData';

export const AmbianceSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0c0e12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex justify-center mb-2">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-orange-500/70 bg-black shadow-lg">
              <img
                src={RESTAURANT_IMAGES.logo}
                alt="Yamama Shawaya Hospitality"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400">
            <SunMedium className="w-3.5 h-3.5" />
            <span>The Yamama Dining Experience · Refill Your Energy</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f4efe6] text-balance">
            Good Food. Warm Ambience. Great Moments.
          </h2>
          <p className="text-base text-[#b8b0a5] text-balance">
            Whether you are gathering for a family dinner, catching up with friends over charcoal platters, or enjoying a relaxed weekend feast in Angadipuram.
          </p>
        </div>

        {/* Ambiance Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Photo Showcase */}
          <div className="lg:col-span-7 relative">
            <div className="rounded-3xl overflow-hidden border border-orange-900/40 bg-[#14161b] shadow-2xl relative">
              <img
                src={RESTAURANT_IMAGES.ambiance}
                alt="Yamama Shawaya Restaurant Dining Ambience in Angadipuram"
                className="w-full h-[400px] sm:h-[480px] object-cover filter brightness-[0.92] contrast-[1.05] hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-transparent to-transparent opacity-60" />

              {/* Tag overlay */}
              <div className="absolute bottom-6 left-6 p-4 rounded-xl bg-[#090a0c]/85 backdrop-blur-md border border-orange-500/20 max-w-sm">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block">
                  Angadipuram, Calicut Road
                </span>
                <span className="text-xs text-[#cfc7bc] mt-1 block">
                  Designed for cozy family seating, clean dining spaces, and relaxed evenings.
                </span>
              </div>
            </div>
          </div>

          {/* Ambiance Feature Points */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="p-5 rounded-2xl bg-[#121419] border border-orange-950/60 hover:border-orange-500/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-950/60 border border-orange-500/30 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#f4efe6]">Cozy Interior & Warm Lighting</h3>
                  <p className="text-xs text-[#a8a195] mt-1 leading-relaxed">
                    Thoughtfully designed lighting creates an inviting, mellow atmosphere that makes every meal feel special.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#121419] border border-orange-950/60 hover:border-orange-500/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-950/60 border border-orange-500/30 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#f4efe6]">Suitable for Families & Friends</h3>
                  <p className="text-xs text-[#a8a195] mt-1 leading-relaxed">
                    Spacious tables with dedicated family-friendly seating areas so everyone can dine comfortably together.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#121419] border border-orange-950/60 hover:border-orange-500/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-950/60 border border-orange-500/30 flex items-center justify-center shrink-0">
                  <Coffee className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#f4efe6]">Comfortable Casual Dining</h3>
                  <p className="text-xs text-[#a8a195] mt-1 leading-relaxed">
                    Quick table turnaround with attentive service whether you are stopping by for lunch or late-night grills.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#121419] border border-orange-950/60 hover:border-orange-500/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-950/60 border border-orange-500/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#f4efe6]">Hygienic Open Kitchen</h3>
                  <p className="text-xs text-[#a8a195] mt-1 leading-relaxed">
                    Watch our grill masters hand-rub chicken with Arabian marinades and rotate skewers over glowing charcoal.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
