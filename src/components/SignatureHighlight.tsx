import React from 'react';
import { Sparkles, ArrowRight, Flame } from 'lucide-react';
import { RESTAURANT_IMAGES } from '../data/restaurantData';

interface SignatureHighlightProps {
  onOrderNow: () => void;
}

export const SignatureHighlight: React.FC<SignatureHighlightProps> = ({ onOrderNow }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#090a0c] via-[#121318] to-[#090a0c] relative overflow-hidden border-y border-orange-950/40">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-[#0f1115] border border-orange-500/30 overflow-hidden shadow-2xl glow-orange-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/40 text-orange-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Yamama Favourite · Must Try</span>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f4efe6]">
                  Shawaya Chicken with Bishawari Rice Combo
                </h2>
                <div className="flex items-center gap-3 text-sm text-orange-400 font-medium">
                  <Flame className="w-4 h-4" />
                  <span>The Crowd Favourite Across Angadipuram</span>
                </div>
              </div>

              <p className="text-base text-[#cfc7bc] leading-relaxed">
                Tender, slow-roasted chicken infused with authentic Arabian spices, served with fragrant Bishawari rice and homemade dips. Also available with Unlimited Rice option!
              </p>

              {/* Exact Menu Prices */}
              <div className="pt-2">
                <div className="text-[11px] uppercase tracking-wider text-[#9e968a] font-medium mb-2">
                  Portion Rates
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <div className="px-3.5 py-2 rounded-xl bg-[#14161c] border border-orange-500/30">
                    <span className="text-[11px] text-[#a8a195] block">Quarter</span>
                    <span className="text-lg font-bold font-mono text-orange-400">₹ 180</span>
                  </div>
                  <div className="px-3.5 py-2 rounded-xl bg-[#14161c] border border-orange-500/30">
                    <span className="text-[11px] text-[#a8a195] block">Half</span>
                    <span className="text-lg font-bold font-mono text-orange-400">₹ 340</span>
                  </div>
                  <div className="px-3.5 py-2 rounded-xl bg-[#14161c] border border-orange-500/50 shadow-md">
                    <span className="text-[11px] text-[#a8a195] block">Full</span>
                    <span className="text-lg font-bold font-mono text-orange-400">₹ 660</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6">
                <button
                  onClick={onOrderNow}
                  className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 rounded-xl shadow-lg shadow-orange-950/60 glow-orange transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>Order This Combo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-6 text-xs text-[#9e968a]">
                <span>✓ Freshly Grilled Daily</span>
                <span>✓ Authentic Spices</span>
                <span>✓ Dine-In & Takeaway</span>
              </div>

            </div>

            {/* Right Large Image */}
            <div className="lg:col-span-6 relative h-[380px] sm:h-[460px] lg:h-full min-h-[420px]">
              <img
                src={RESTAURANT_IMAGES.masalaShawaya}
                alt="Masala Shawaya with Fragrant Rice - Yamama Favourite"
                className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.05] hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0f1115] via-transparent to-transparent lg:w-32" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
