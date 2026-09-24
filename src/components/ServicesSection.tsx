import React from 'react';
import { Utensils, ShoppingBag, Truck, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ServicesSectionProps {
  onSelectService: (serviceType: 'Dine-In' | 'Takeaway' | 'Home Delivery') => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section className="py-20 bg-[#090a0c] relative border-t border-orange-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-orange-400">
            How We Serve You
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#f4efe6]">
            Dining & Order Options
          </h2>
          <p className="text-sm sm:text-base text-[#b8b0a5]">
            Relish your favourite Arabian grilled dishes whichever way suits your schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Dine-In */}
          <div className="group p-8 rounded-2xl bg-[#111317] border border-orange-950/60 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 glow-orange-card flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-orange-950/40 border border-orange-500/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <Utensils className="w-7 h-7 text-orange-400" />
              </div>

              <h3 className="font-display text-xl font-bold text-[#f4efe6] mb-3 group-hover:text-orange-300 transition-colors">
                Dine-In
              </h3>

              <p className="text-sm text-[#b8b0a5] leading-relaxed">
                Enjoy freshly prepared Arabian favourites in a comfortable atmosphere with warm lighting and prompt table service.
              </p>
            </div>

            <button
              onClick={() => onSelectService('Dine-In')}
              className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400 group-hover:text-orange-300 cursor-pointer"
            >
              <span>Visit Restaurant</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Takeaway */}
          <div className="group p-8 rounded-2xl bg-[#111317] border border-orange-950/60 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 glow-orange-card flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-orange-950/40 border border-orange-500/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <ShoppingBag className="w-7 h-7 text-orange-400" />
              </div>

              <h3 className="font-display text-xl font-bold text-[#f4efe6] mb-3 group-hover:text-orange-300 transition-colors">
                Takeaway
              </h3>

              <p className="text-sm text-[#b8b0a5] leading-relaxed">
                Order your favourites in advance and pick them up hot, fresh, and securely packaged to enjoy wherever you are.
              </p>
            </div>

            <button
              onClick={() => onSelectService('Takeaway')}
              className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400 group-hover:text-orange-300 cursor-pointer"
            >
              <span>Quick Takeaway Order</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Home Delivery */}
          <div className="group p-8 rounded-2xl bg-[#111317] border border-orange-950/60 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 glow-orange-card flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-orange-950/40 border border-orange-500/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <Truck className="w-7 h-7 text-orange-400" />
              </div>

              <h3 className="font-display text-xl font-bold text-[#f4efe6] mb-3 group-hover:text-orange-300 transition-colors">
                Home Delivery
              </h3>

              <p className="text-sm text-[#b8b0a5] leading-relaxed">
                Get your favourite Yamama Shawaya dishes delivered to your doorstep in and around Angadipuram & Perinthalmanna.
              </p>
            </div>

            <button
              onClick={() => onSelectService('Home Delivery')}
              className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400 group-hover:text-orange-300 cursor-pointer"
            >
              <span>Order Delivery</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
