/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhyYamamaSection } from './components/WhyYamamaSection';
import { SignatureHighlight } from './components/SignatureHighlight';
import { MenuSection } from './components/MenuSection';
import { AmbianceSection } from './components/AmbianceSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DedicatedMenuPage } from './components/DedicatedMenuPage';
import { OrderModal } from './components/OrderModal';
import { DirectionsModal } from './components/DirectionsModal';
import { MenuItem } from './types/restaurant';
import { MENU_ITEMS, RESTAURANT_INFO } from './data/restaurantData';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'menu'>('home');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isDirectionsModalOpen, setIsDirectionsModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [defaultService, setDefaultService] = useState<'Dine-In' | 'Takeaway' | 'Home Delivery'>('Takeaway');

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleNavigate = (view: 'home' | 'menu', sectionId?: string) => {
    setCurrentView(view);
    if (view === 'home' && sectionId) {
      scrollToSection(sectionId);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleExploreMenu = () => {
    // Navigate to dedicated menu page
    setCurrentView('menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCallNow = () => {
    window.location.href = RESTAURANT_INFO.phones[0].tel;
  };

  const handleOpenOrder = (dish?: MenuItem) => {
    setSelectedDish(dish || MENU_ITEMS[0]);
    setIsOrderModalOpen(true);
  };

  const handleSelectService = (serviceType: 'Dine-In' | 'Takeaway' | 'Home Delivery') => {
    setDefaultService(serviceType);
    setSelectedDish(MENU_ITEMS[0]);
    setIsOrderModalOpen(true);
  };

  const handleOpenDirections = () => {
    setIsDirectionsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090a0c] text-[#f4efe6] flex flex-col font-body selection:bg-orange-600 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenOrder={() => handleOpenOrder()}
      />

      <main className="flex-1">
        {currentView === 'home' ? (
          <>
            {/* 2. Hero Section */}
            <Hero
              onExploreMenu={handleExploreMenu}
              onCallNow={handleCallNow}
            />

            {/* 3. About Yamama Shawaya */}
            <AboutSection />

            {/* 4. Known For / Why Yamama Section */}
            <WhyYamamaSection />

            {/* 6. Signature Dish Highlight: Masala Shawaya with Rice */}
            <SignatureHighlight
              onOrderNow={() => {
                const masalaItem = MENU_ITEMS.find((i) => i.id === 'masala-shawaya-rice') || MENU_ITEMS[0];
                handleOpenOrder(masalaItem);
              }}
            />

            {/* 5. Menu Section (Interactive preview with tabs) */}
            <MenuSection
              onOrderDish={handleOpenOrder}
              onOpenFullMenuPage={() => handleNavigate('menu')}
            />

            {/* 7. Restaurant Experience / Ambiance */}
            <AmbianceSection />

            {/* 8. Services Section */}
            <ServicesSection onSelectService={handleSelectService} />

            {/* 9. Contact & Location Section */}
            <ContactSection
              onCallNow={handleCallNow}
              onOpenOrder={() => handleOpenOrder()}
              onGetDirections={handleOpenDirections}
            />
          </>
        ) : (
          /* Dedicated Menu Page */
          <DedicatedMenuPage
            onBackToHome={() => handleNavigate('home')}
            onOrderDish={handleOpenOrder}
          />
        )}
      </main>

      {/* 10. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenOrder={() => handleOpenOrder()}
      />

      {/* Order & Inquire Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        selectedDish={selectedDish}
        defaultService={defaultService}
      />

      {/* Directions Modal */}
      <DirectionsModal
        isOpen={isDirectionsModalOpen}
        onClose={() => setIsDirectionsModalOpen(false)}
      />
    </div>
  );
}
