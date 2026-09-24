import React, { useState } from 'react';
import { ArrowRight, Flame, ShoppingBag } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES, RESTAURANT_IMAGES } from '../data/restaurantData';
import { MenuCategory, MenuItem } from '../types/restaurant';

interface MenuSectionProps {
  onOrderDish: (dish: MenuItem) => void;
  onOpenFullMenuPage: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOrderDish, onOpenFullMenuPage }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('All');

  const filteredItems = selectedCategory === 'All'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="menu" className="py-24 bg-[#090a0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-orange-500/70 bg-black shrink-0 shadow-md">
                <img
                  src={RESTAURANT_IMAGES.logo}
                  alt="Yamama Shawaya Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400">
                <Flame className="w-3.5 h-3.5" />
                <span>Fire & Charcoal Specialties · Refill Your Energy</span>
              </div>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f4efe6]">
              Our Signature Menu
            </h2>
            <p className="text-base text-[#b8b0a5]">
              Handcrafted Arabian dishes cooked slow over charcoal and rotisserie grills. Freshly prepared for dine-in, takeaway, and delivery.
            </p>
          </div>

          <div>
            <button
              onClick={onOpenFullMenuPage}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-orange-400 hover:text-white bg-[#14161b] hover:bg-orange-600 border border-orange-500/40 hover:border-orange-500 rounded-xl transition-all duration-300 shadow-sm"
            >
              <span>View Dedicated Menu Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Tabs (Segmented control style) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none no-scrollbar">
          {MENU_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg shadow-orange-950/50 glow-orange-subtle'
                    : 'bg-[#121419] text-[#c2bab0] hover:text-[#f4efe6] hover:bg-[#191c23] border border-white/5'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-[#111317] border border-orange-950/70 hover:border-orange-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 glow-orange-card flex flex-col justify-between"
            >
              <div>
                {/* Image Container with aspect ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1a1d24]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-transparent opacity-70" />

                  {/* Clean text tag (anti-slop, not pill badge sandwich) */}
                  {item.isSignature && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#090a0c]/85 border border-orange-500/40 backdrop-blur-sm text-[11px] font-semibold text-orange-300">
                      Yamama Signature
                    </div>
                  )}
                  {!item.isSignature && item.isPopular && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#090a0c]/85 border border-white/10 backdrop-blur-sm text-[11px] font-medium text-[#f4efe6]">
                      Popular Choice
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 space-y-2.5">
                  <div className="text-[11px] uppercase tracking-wider text-orange-400/90 font-medium">
                    {item.category}
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#f4efe6] group-hover:text-orange-300 transition-colors line-clamp-1">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#a8a195] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  {item.notes && (
                    <div className="text-[10px] font-semibold text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/30 inline-block">
                      ★ {item.notes}
                    </div>
                  )}
                </div>
              </div>

              {/* Price & Action Footer */}
              <div className="p-5 pt-3 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-[#7a746b] block">Price</span>
                  <span className="text-base sm:text-lg font-bold font-mono text-orange-400">
                    {item.price}
                  </span>
                </div>

                <button
                  onClick={() => onOrderDish(item)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-300 hover:to-amber-300 rounded-lg shadow-sm hover:shadow-orange-950/60 transition-all duration-200 cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* View All Bottom Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-[#121419] via-[#1a1512] to-[#121419] border border-orange-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-[#f4efe6]">
              Looking for our complete Arabian selection and combos?
            </h4>
            <p className="text-xs text-[#b8b0a5]">
              Explore our full digital menu page with live category filters, platters, and beverages.
            </p>
          </div>

          <button
            onClick={onOpenFullMenuPage}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-orange-400 hover:bg-orange-300 rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
          >
            Open Dedicated Menu
          </button>
        </div>

      </div>
    </section>
  );
};
