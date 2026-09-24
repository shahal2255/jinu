import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  Flame, 
  Sparkles, 
  Search, 
  ShoppingBag, 
  Phone, 
  MessageSquare,
  Check, 
  Info,
  ChevronRight,
  Filter
} from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES, RESTAURANT_IMAGES, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuCategory, MenuItem, PortionOption } from '../types/restaurant';

interface DedicatedMenuPageProps {
  onBackToHome: () => void;
  onOrderDish: (dish: MenuItem) => void;
}

export const DedicatedMenuPage: React.FC<DedicatedMenuPageProps> = ({
  onBackToHome,
  onOrderDish,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTag, setFilterTag] = useState<string>('all');
  
  // Track selected portion per item id
  const [selectedPortions, setSelectedPortions] = useState<Record<string, PortionOption>>({});

  const handleSelectPortion = (itemId: string, portion: PortionOption) => {
    setSelectedPortions((prev) => ({
      ...prev,
      [itemId]: portion,
    }));
  };

  const getEffectivePortion = (item: MenuItem): PortionOption | null => {
    if (!item.portions || item.portions.length === 0) return null;
    return selectedPortions[item.id] || item.portions[0];
  };

  // Filter items based on Category, Search query, and Tag filter
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

      // Search query
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = !query || 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        (item.notes && item.notes.toLowerCase().includes(query)) ||
        (item.tags && item.tags.some((t) => t.toLowerCase().includes(query)));

      // Quick filter tags
      let matchesTag = true;
      if (filterTag === 'unlimited-rice') {
        matchesTag = item.tags?.includes('Unlimited Rice') || false;
      } else if (filterTag === 'spicy') {
        matchesTag = Boolean(item.spicyLevel) || item.notes?.toLowerCase().includes('chilly') || false;
      } else if (filterTag === 'drinks') {
        matchesTag = item.category.includes('Mojitos');
      } else if (filterTag === 'combos') {
        matchesTag = item.category.includes('Combos');
      }

      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [selectedCategory, searchQuery, filterTag]);

  // Direct WhatsApp Quick Order
  const handleDirectWhatsApp = (item: MenuItem) => {
    const phone = '919747362101';
    const portion = getEffectivePortion(item);
    const portionText = portion ? ` (${portion.portion} - ₹${portion.price}${portion.note ? ' [' + portion.note + ']' : ''})` : ` (${item.price})`;
    const text = encodeURIComponent(
      `Hello Yamama Shawaya, I would like to order from your menu:\n\n*Dish:* ${item.name}${portionText}\n\nPlease confirm availability and delivery / takeaway details. Thank you!`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  // Smooth Category Click
  const handleCategoryClick = (category: MenuCategory) => {
    setSelectedCategory(category);
    const element = document.getElementById('menu-items-grid');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07080a] text-[#f4efe6] pt-4 pb-28 selection:bg-orange-600 selection:text-white">
      
      {/* Top Banner Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center justify-between py-3 border-b border-white/5">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-4 text-xs font-semibold text-[#a8a195]">
            <a 
              href="tel:+919747362101" 
              className="flex items-center gap-1.5 text-orange-400 hover:text-orange-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Call Kitchen:</span>
              <span className="font-mono">9747362101</span>
            </a>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="text-[#8e877c] hidden md:inline">
              Angadipuram, Perinthalmanna
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Hero Header with Arabian Motifs */}
        <div className="relative text-center max-w-4xl mx-auto space-y-5 pt-4 pb-6">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Official Restaurant Logo Badge */}
          <div className="flex justify-center">
            <div className="relative group cursor-pointer" onClick={onBackToHome}>
              <div className="absolute -inset-1.5 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500" />
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-orange-500/80 shadow-2xl bg-black flex items-center justify-center">
                <img
                  src={RESTAURANT_IMAGES.logo}
                  alt="Yamama Shawaya Official Mascot Logo"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12141a] border border-orange-500/40 text-xs font-bold uppercase tracking-widest text-orange-400 shadow-lg">
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            <span>Refill Your Energy · Authentic Arabian Grills</span>
          </div>

          {/* Main Title */}
          <div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#f4efe6] uppercase">
              Yamama Shawaya <span className="text-gradient-orange">Menu</span>
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[#b8b0a5] max-w-2xl mx-auto">
              Authentic charcoal-grilled Al Faham, traditional rotisserie shawaya, fragrant Bishawari rice, and chilled exotic fruit mojitos.
            </p>
          </div>

          {/* Arabian Decorative Divider Line */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="w-16 sm:w-28 h-px bg-gradient-to-r from-transparent to-orange-500/50" />
            <div className="w-2 h-2 rotate-45 bg-orange-500 border border-amber-300" />
            <div className="w-16 sm:w-28 h-px bg-gradient-to-l from-transparent to-orange-500/50" />
          </div>

          {/* Quick Notice Banner on Menu Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto pt-2 text-left">
            <div className="p-3.5 rounded-xl bg-[#12141a]/90 border border-orange-500/30 flex items-start gap-3">
              <div className="p-1 rounded-md bg-orange-500/20 text-orange-400 shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#f4efe6] block uppercase tracking-wider text-[11px]">
                  Popular Combos · Unlimited Rice
                </span>
                <span className="text-[#a8a195] block mt-0.5">
                  Quarter (1 Person) • Half (2 Persons) • Full (4 Persons)
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#12141a]/90 border border-orange-500/30 flex items-start gap-3">
              <div className="p-1 rounded-md bg-orange-500/20 text-orange-400 shrink-0 mt-0.5">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#f4efe6] block uppercase tracking-wider text-[11px]">
                  Direct Orders & Inquiries
                </span>
                <span className="text-orange-400 font-mono font-bold block mt-0.5">
                  9747 36 21 01 · 9747 36 21 02
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Sticky Interactive Navigation & Search Controls */}
        <div className="sticky top-20 z-40 bg-[#07080a]/95 backdrop-blur-md pt-2 pb-3 border-y border-orange-950/60 shadow-xl -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="space-y-3">
            
            {/* Search Input Bar */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-400/80" />
                <input
                  type="text"
                  placeholder="Search dishes (e.g. Shawaya, Kondattam, Peri Peri, Mojito, Rice)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#12141a] border border-orange-900/40 focus:border-orange-500 text-sm text-[#f4efe6] placeholder-[#7a746b] outline-none transition-all shadow-inner"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#a8a195] hover:text-white bg-white/10 px-2 py-0.5 rounded cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Tag Quick Filters */}
              <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto scrollbar-none no-scrollbar">
                <button
                  onClick={() => setFilterTag('all')}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    filterTag === 'all'
                      ? 'bg-orange-500 text-black font-bold'
                      : 'bg-[#12141a] text-[#a8a195] hover:text-white border border-white/5'
                  }`}
                >
                  All Items
                </button>
                <button
                  onClick={() => setFilterTag('unlimited-rice')}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    filterTag === 'unlimited-rice'
                      ? 'bg-orange-500 text-black font-bold'
                      : 'bg-[#12141a] text-[#a8a195] hover:text-white border border-white/5'
                  }`}
                >
                  Unlimited Rice Combos
                </button>
                <button
                  onClick={() => setFilterTag('spicy')}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    filterTag === 'spicy'
                      ? 'bg-orange-500 text-black font-bold'
                      : 'bg-[#12141a] text-[#a8a195] hover:text-white border border-white/5'
                  }`}
                >
                  Spicy Specialties
                </button>
                <button
                  onClick={() => setFilterTag('drinks')}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    filterTag === 'drinks'
                      ? 'bg-orange-500 text-black font-bold'
                      : 'bg-[#12141a] text-[#a8a195] hover:text-white border border-white/5'
                  }`}
                >
                  Mojitos Only
                </button>
              </div>
            </div>

            {/* Sticky Category Tabs with Smooth Scroll */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
              {MENU_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                const count = category === 'All' 
                  ? MENU_ITEMS.length 
                  : MENU_ITEMS.filter((i) => i.category === category).length;

                return (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg shadow-orange-950/60 glow-orange-subtle border border-orange-400/40'
                        : 'bg-[#111318] text-[#c2bab0] hover:text-[#f4efe6] hover:bg-[#181b22] border border-white/5'
                    }`}
                  >
                    <span>{category}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-black/40 text-amber-200' : 'bg-white/5 text-[#8e877c]'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>
        </div>

        {/* Results Count & Current Filter State */}
        <div id="menu-items-grid" className="flex items-center justify-between pt-2">
          <div className="text-xs text-[#a8a195] font-medium">
            Showing <strong className="text-orange-400 font-bold">{filteredItems.length}</strong> authentic dish{filteredItems.length === 1 ? '' : 'es'}
            {selectedCategory !== 'All' && <span> in <strong className="text-[#f4efe6]">{selectedCategory}</strong></span>}
            {searchQuery && <span> matching "<strong>{searchQuery}</strong>"</span>}
          </div>

          {(selectedCategory !== 'All' || searchQuery || filterTag !== 'all') && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setFilterTag('all');
              }}
              className="text-xs text-orange-400 hover:text-orange-300 font-semibold cursor-pointer underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const currentPortion = getEffectivePortion(item);
              const displayPrice = currentPortion ? `₹ ${currentPortion.price}` : item.price;

              return (
                <div
                  key={item.id}
                  className="group rounded-2xl bg-[#0f1116] border border-orange-950/70 hover:border-orange-500/60 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl glow-orange-card"
                >
                  <div>
                    {/* Dish Image Container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#161820]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1116] via-transparent to-transparent opacity-85" />

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#090a0c]/85 border border-orange-500/40 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-orange-300">
                        {item.category}
                      </div>

                      {/* Special Tags (e.g. Unlimited Rice / Spicy / Signature) */}
                      <div className="absolute top-3 right-3 flex flex-col items-end gap-1">
                        {item.isSignature && (
                          <span className="px-2 py-0.5 rounded bg-orange-600/90 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                            Signature
                          </span>
                        )}
                        {item.tags?.includes('Unlimited Rice') && (
                          <span className="px-2 py-0.5 rounded bg-amber-500/90 text-black text-[10px] font-bold uppercase tracking-wider shadow-sm">
                            Unlimited Rice
                          </span>
                        )}
                        {item.spicyLevel && (
                          <span className="px-2 py-0.5 rounded bg-red-950/90 border border-red-500/50 text-red-300 text-[10px] font-bold uppercase tracking-wider">
                            {'🌶️'.repeat(item.spicyLevel)} Spicy
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Dish Details */}
                    <div className="p-5 space-y-3">
                      <h3 className="font-display text-lg sm:text-xl font-bold text-[#f4efe6] group-hover:text-orange-400 transition-colors leading-snug">
                        {item.name}
                      </h3>

                      <p className="text-xs text-[#a8a195] leading-relaxed line-clamp-2">
                        {item.description}
                      </p>

                      {item.notes && (
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-300/90 bg-amber-950/40 px-2.5 py-1 rounded-md border border-amber-500/30">
                          <Info className="w-3 h-3 text-amber-400 shrink-0" />
                          <span>{item.notes}</span>
                        </div>
                      )}

                      {/* Interactive Portion Selector (for items with portions) */}
                      {item.portions && item.portions.length > 0 && (
                        <div className="pt-2 border-t border-white/5 space-y-2">
                          <div className="flex items-center justify-between text-[11px] text-[#8e877c] font-medium">
                            <span>Select Portion:</span>
                            {currentPortion?.note && (
                              <span className="text-amber-400 font-semibold text-[10px]">
                                {currentPortion.note}
                              </span>
                            )}
                          </div>
                          <div className="grid grid-cols-3 gap-1.5">
                            {item.portions.map((p) => {
                              const isSelected = currentPortion?.portion === p.portion;
                              return (
                                <button
                                  key={p.portion}
                                  type="button"
                                  onClick={() => handleSelectPortion(item.id, p)}
                                  className={`p-2 rounded-lg text-center transition-all cursor-pointer ${
                                    isSelected
                                      ? 'bg-orange-600/30 border border-orange-500 text-orange-300 shadow-sm'
                                      : 'bg-[#151820] border border-white/5 text-[#a8a195] hover:text-[#f4efe6] hover:bg-[#1a1e27]'
                                  }`}
                                >
                                  <div className="text-[11px] font-bold">{p.portion}</div>
                                  <div className="text-xs font-mono font-bold text-[#f4efe6]">
                                    ₹ {p.price}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Price & Order Action Bar */}
                  <div className="p-5 pt-3 border-t border-white/5 bg-[#0b0c10]/60 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#7a746b] block">
                        {currentPortion ? `${currentPortion.portion} Rate` : 'Price'}
                      </span>
                      <span className="text-xl font-bold font-mono text-orange-400">
                        {displayPrice}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* WhatsApp Direct */}
                      <button
                        onClick={() => handleDirectWhatsApp(item)}
                        className="p-2.5 rounded-xl bg-[#14171f] hover:bg-emerald-950 border border-white/10 hover:border-emerald-500 text-[#a8a195] hover:text-emerald-400 transition-colors cursor-pointer"
                        title="Order via WhatsApp"
                        aria-label={`WhatsApp order for ${item.name}`}
                      >
                        <MessageSquare className="w-4 h-4" />
                      </button>

                      {/* Open Full Order Modal */}
                      <button
                        onClick={() => onOrderDish(item)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-300 hover:to-amber-300 rounded-xl shadow-md hover:shadow-orange-950/60 transition-all duration-200 cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-black" />
                        <span>Order</span>
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-20 bg-[#0e1014] rounded-3xl border border-orange-950/50 p-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-orange-950/50 border border-orange-500/30 text-orange-400 flex items-center justify-center mx-auto">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#f4efe6]">
              No dishes found matching "{searchQuery}"
            </h3>
            <p className="text-sm text-[#a8a195] max-w-md mx-auto">
              Try searching for popular Arabian specialties like Shawaya, Al Faham, Kondattam, Peri Peri, Beef Mashwi, or Mojito.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setFilterTag('all');
              }}
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-orange-400 hover:bg-orange-300 rounded-xl transition-all cursor-pointer"
            >
              View Full Menu
            </button>
          </div>
        )}

        {/* Bottom Ordering & Dine-in Information Card */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#12141a] via-[#1a1715] to-[#12141a] border border-orange-500/30 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400">
                <Flame className="w-4 h-4" />
                <span>Visit Us or Order Takeaway</span>
              </div>
              
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#f4efe6]">
                Craving Hot, Charcoal-Grilled Arabian Delights?
              </h3>
              
              <p className="text-sm text-[#c8c0b4] leading-relaxed max-w-2xl">
                Dine-in peak hours start from 12:00 PM onwards. Contact us directly to book your family table, arrange takeaway packets, or have hot shawaya delivered to your door in Angadipuram and Perinthalmanna.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="tel:+919747362101"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-black font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: 9747 36 21 01</span>
                </a>
                
                <a
                  href="tel:+919747362102"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1d2028] hover:bg-[#252934] border border-orange-500/40 text-[#f4efe6] font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>Call: 9747 36 21 02</span>
                </a>

                <button
                  onClick={onBackToHome}
                  className="inline-flex items-center gap-1.5 text-xs text-[#a8a195] hover:text-white font-medium cursor-pointer ml-auto"
                >
                  <span>Back to Home Overview</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-orange-500/60 shadow-2xl bg-black flex items-center justify-center">
                <img
                  src={RESTAURANT_IMAGES.logo}
                  alt="Yamama Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
