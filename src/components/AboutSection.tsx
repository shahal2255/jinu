import React from 'react';
import { Flame, Sparkles, ChefHat, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_IMAGES } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0c0d10] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-60 h-60 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-orange-900/40 bg-[#14151a] shadow-2xl">
              <img
                src={RESTAURANT_IMAGES.chickenShawaya}
                alt="Authentic Arabian Chicken Shawaya roasting on grill"
                className="w-full h-[400px] sm:h-[480px] object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-transparent to-transparent opacity-80" />

              {/* Float Experience Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#0e1014]/90 backdrop-blur-md border border-orange-500/30 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-orange-600/20 border border-orange-500/40 flex items-center justify-center shrink-0">
                  <Flame className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#f4efe6] uppercase tracking-wide">
                    Authentic Charcoal Rotisserie
                  </h4>
                  <p className="text-xs text-[#b8b0a5] mt-0.5">
                    Marinated in secret Arabian spices and slow-rotated over open coals.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Corner Element */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-orange-500/40 rounded-tl-xl pointer-events-none" />
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Heritage & Craft</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f4efe6] leading-tight">
              Rooted in Arabian Tradition,{' '}
              <span className="text-orange-400">Perfected in Angadipuram</span>
            </h2>

            <p className="text-base sm:text-lg text-[#d5cec4] leading-relaxed font-normal">
              Yamama Shawaya brings authentic Arabian grilled flavours to Angadipuram. From traditionally spiced shawaya to smoky charcoal-grilled favourites, every dish is prepared with care to deliver rich flavour and a satisfying dining experience.
            </p>

            {/* Highlights of Traditional Cooking Approach */}
            <div className="pt-2 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-1 rounded-md bg-orange-500/10 text-orange-400 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#f4efe6]">Secret Arabian Spice Blends</h3>
                  <p className="text-xs text-[#a8a195] mt-0.5">
                    Each cut is hand-rubbed hours before roasting using authentic Middle Eastern spices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-1 rounded-md bg-orange-500/10 text-orange-400 mt-1">
                  <ChefHat className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#f4efe6]">Natural Wood & Charcoal Embers</h3>
                  <p className="text-xs text-[#a8a195] mt-0.5">
                    No artificial flavouring or quick-cuts. We let smoke and heat lock in natural juices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-1 rounded-md bg-orange-500/10 text-orange-400 mt-1">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#f4efe6]">Served Hot with Arabian Complements</h3>
                  <p className="text-xs text-[#a8a195] mt-0.5">
                    Paired with fluffy Kuboos, signature garlic toum, tangy sahawiq, and aromatic spiced rice.
                  </p>
                </div>
              </div>
            </div>

            {/* Location Quote */}
            <div className="p-4 rounded-xl bg-[#14161b] border-l-4 border-orange-500 text-xs sm:text-sm text-[#c8c0b4] italic">
              "We take pride in bringing families and friends together over honest, fragrant, and smoky grilled food right here on Calicut Road."
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
