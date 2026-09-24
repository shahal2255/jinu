import React from 'react';
import { Sparkles, Flame, Clock, Users } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const WhyYamamaSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'why-1':
        return <Sparkles className="w-6 h-6 text-orange-400" />;
      case 'why-2':
        return <Clock className="w-6 h-6 text-orange-400" />;
      case 'why-3':
        return <Flame className="w-6 h-6 text-orange-400" />;
      case 'why-4':
        return <Users className="w-6 h-6 text-orange-400" />;
      default:
        return <Flame className="w-6 h-6 text-orange-400" />;
    }
  };

  return (
    <section id="why-yamama" className="py-24 bg-[#090a0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400">
            <Flame className="w-3.5 h-3.5" />
            <span>The Yamama Distinction</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f4efe6]">
            Why Yamama Shawaya
          </h2>
          <p className="text-base text-[#b8b0a5] text-balance">
            Every skewer, grill mark, and aromatic grain reflects our dedication to authentic Arabian hospitality and time-honoured technique.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESTAURANT_INFO.whyFeatures.map((feature, idx) => (
            <div
              key={feature.id}
              className="group relative p-8 rounded-2xl bg-[#111317] border border-orange-950/70 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1.5 glow-orange-card flex flex-col justify-between"
            >
              {/* Subtle top indicator */}
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent group-hover:via-orange-500 transition-all duration-500" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-950/40 border border-orange-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(feature.id)}
                </div>

                <div className="text-xs font-mono text-orange-400/80 mb-2 font-medium">
                  0{idx + 1}
                </div>

                <h3 className="font-display text-lg font-bold text-[#f4efe6] mb-3 group-hover:text-orange-300 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-[#b8b0a5] leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Subtle Arabian Motif Line */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#78716c]">
                <span>Yamama Quality</span>
                <span className="text-orange-400/70">✦</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
