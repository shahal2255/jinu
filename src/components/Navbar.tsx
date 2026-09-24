import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { RESTAURANT_INFO, RESTAURANT_IMAGES } from '../data/restaurantData';

interface NavbarProps {
  currentView: 'home' | 'menu';
  onNavigate: (view: 'home' | 'menu', sectionId?: string) => void;
  onOpenOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenOrder }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavLinkClick = (sectionId?: string) => {
    setMobileMenuOpen(false);
    if (sectionId === 'menu-page') {
      onNavigate('menu');
    } else {
      onNavigate('home', sectionId);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#090a0c]/95 backdrop-blur-md border-b border-orange-900/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Brand Logo & Wordmark */}
          <button
            onClick={() => handleNavLinkClick()}
            className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
            aria-label="Yamama Shawaya Home"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500/60 shadow-lg shadow-orange-950/70 group-hover:border-orange-400 group-hover:scale-105 transition-all duration-300 bg-black flex items-center justify-center">
              <img
                src={RESTAURANT_IMAGES.logo}
                alt="Yamama Shawaya Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-[#f4efe6] group-hover:text-orange-400 transition-colors uppercase">
                  Yamama Shawaya
                </span>
              </div>
              <span className="block text-[11px] text-orange-400 font-semibold tracking-wider uppercase">
                {RESTAURANT_INFO.category} · <span className="text-amber-300/90 font-medium">Refill Your Energy</span>
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Clean text links with subtle hover) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#d4cdc3]">
            <button
              onClick={() => handleNavLinkClick('hero')}
              className={`hover:text-orange-400 transition-colors ${currentView === 'home' ? 'text-orange-400 font-semibold' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavLinkClick('about')}
              className="hover:text-orange-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleNavLinkClick('menu-page')}
              className={`hover:text-orange-400 transition-colors flex items-center gap-1.5 ${currentView === 'menu' ? 'text-orange-400 font-semibold underline underline-offset-8 decoration-orange-500' : ''}`}
            >
              Menu
              <span className="text-[10px] uppercase font-bold text-orange-400 bg-orange-950/70 border border-orange-500/30 px-1.5 py-0.5 rounded">
                Full
              </span>
            </button>
            <button
              onClick={() => handleNavLinkClick('why-yamama')}
              className="hover:text-orange-400 transition-colors"
            >
              Why Yamama
            </button>
            <button
              onClick={() => handleNavLinkClick('contact')}
              className="hover:text-orange-400 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: Primary Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={RESTAURANT_INFO.phones[0].tel}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#f4efe6] bg-[#17191e] border border-orange-900/40 rounded-lg hover:border-orange-500/50 hover:bg-[#202228] transition-all whitespace-nowrap"
              aria-label="Call Yamama Shawaya"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>{RESTAURANT_INFO.phones[0].display}</span>
            </a>

            <button
              onClick={onOpenOrder}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 rounded-lg shadow-md shadow-orange-900/40 hover:shadow-orange-700/50 glow-orange-subtle transition-all duration-200 whitespace-nowrap"
            >
              Order Now
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenOrder}
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-orange-600 rounded-md"
            >
              Order
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#f4efe6] hover:text-orange-400 rounded-lg bg-[#17191e] border border-orange-900/30 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0d0f12] border-b border-orange-900/40 px-5 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-2 pt-2 border-b border-white/5 pb-3">
            <button
              onClick={() => handleNavLinkClick('hero')}
              className="text-left py-2 text-base font-medium text-[#f4efe6] hover:text-orange-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavLinkClick('about')}
              className="text-left py-2 text-base font-medium text-[#f4efe6] hover:text-orange-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleNavLinkClick('menu-page')}
              className="text-left py-2 text-base font-medium text-orange-400 hover:text-orange-300 transition-colors flex items-center justify-between"
            >
              <span>Explore Full Menu</span>
              <span className="text-xs uppercase bg-orange-600/30 border border-orange-500/40 text-orange-300 px-2 py-0.5 rounded">
                View
              </span>
            </button>
            <button
              onClick={() => handleNavLinkClick('why-yamama')}
              className="text-left py-2 text-base font-medium text-[#f4efe6] hover:text-orange-400 transition-colors"
            >
              Why Yamama
            </button>
            <button
              onClick={() => handleNavLinkClick('contact')}
              className="text-left py-2 text-base font-medium text-[#f4efe6] hover:text-orange-400 transition-colors"
            >
              Contact & Location
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={RESTAURANT_INFO.phones[0].tel}
              className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#f4efe6] bg-[#1a1d24] border border-orange-900/50 rounded-lg"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call: {RESTAURANT_INFO.phones[0].display}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder();
              }}
              className="w-full py-3 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-orange-600 to-amber-600 rounded-lg shadow-lg shadow-orange-950/60"
            >
              Order Now / Inquire
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
