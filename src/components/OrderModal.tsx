import React, { useState, useEffect } from 'react';
import { X, Phone, MessageSquare, Check, Utensils, ShoppingBag, Truck, Flame } from 'lucide-react';
import { MenuItem, PortionOption } from '../types/restaurant';
import { RESTAURANT_INFO, MENU_ITEMS, RESTAURANT_IMAGES } from '../data/restaurantData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDish?: MenuItem | null;
  defaultService?: 'Dine-In' | 'Takeaway' | 'Home Delivery';
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  selectedDish,
  defaultService = 'Takeaway',
}) => {
  const dish = selectedDish || MENU_ITEMS[0];
  const [serviceType, setServiceType] = useState<'Dine-In' | 'Takeaway' | 'Home Delivery'>(defaultService);
  const [selectedPortion, setSelectedPortion] = useState<PortionOption | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (dish && dish.portions && dish.portions.length > 0) {
      setSelectedPortion(dish.portions[0]);
    } else {
      setSelectedPortion(null);
    }
    setQuantity(1);
    setIsSubmitted(false);
  }, [dish, isOpen]);

  useEffect(() => {
    setServiceType(defaultService);
  }, [defaultService]);

  if (!isOpen) return null;

  const currentPricePerUnit = selectedPortion ? selectedPortion.price : (parseFloat(dish.price.replace(/[^0-9.]/g, '')) || 0);
  const totalPrice = currentPricePerUnit > 0 ? currentPricePerUnit * quantity : null;

  const handleWhatsAppOrder = () => {
    const phone = '919747362101';
    const portionText = selectedPortion ? ` (${selectedPortion.portion} - ₹${selectedPortion.price}${selectedPortion.note ? ' [' + selectedPortion.note + ']' : ''})` : '';
    const priceText = totalPrice ? ` | Total: ₹${totalPrice}` : ` | Price: ${dish.price}`;
    const text = encodeURIComponent(
      `Hello Yamama Shawaya, I would like to place an order:\n\n*Item:* ${dish.name}${portionText}\n*Quantity:* ${quantity}\n*Service:* ${serviceType}${priceText}\n${notes ? `*Notes:* ${notes}\n` : ''}${customerName ? `*Name:* ${customerName}\n` : ''}Thank you!`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-[#0d0f14] border border-orange-500/40 shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto glow-orange-subtle text-[#f4efe6]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#1a1d24] text-[#a8a195] hover:text-white hover:bg-orange-600 transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#f4efe6]">
              Order Request Received!
            </h3>
            <p className="text-sm text-[#b8b0a5] max-w-sm mx-auto">
              Thank you {customerName || 'valued customer'}. Our team at Yamama Shawaya will confirm your {serviceType.toLowerCase()} order for <strong className="text-orange-400">{dish.name}</strong> {selectedPortion ? `(${selectedPortion.portion})` : ''} shortly.
            </p>
            <div className="p-4 rounded-xl bg-[#14161c] border border-orange-950 text-xs text-[#a8a195]">
              You can also reach our kitchen team directly at:
              <div className="mt-1 font-mono font-bold text-orange-400 text-sm">
                +91 9747362101 / +91 9747362102
              </div>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-orange-400 hover:bg-orange-300 rounded-xl cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Header */}
            <div className="flex items-center gap-3 pr-8">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500/50 shadow-md bg-black shrink-0">
                <img
                  src={RESTAURANT_IMAGES.logo}
                  alt="Yamama Shawaya Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-400">
                  <Flame className="w-3.5 h-3.5" />
                  <span>Yamama Shawaya · Refill Your Energy</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#f4efe6]">
                  Order Your Arabian Feast
                </h2>
              </div>
            </div>

            {/* Selected Dish Card */}
            <div className="p-4 rounded-2xl bg-[#14161c] border border-orange-950/60 flex items-center gap-4">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-20 h-20 rounded-xl object-cover border border-white/10 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase text-orange-400 font-semibold">{dish.category}</div>
                <h4 className="font-bold text-sm sm:text-base text-[#f4efe6] truncate">{dish.name}</h4>
                <p className="text-xs text-[#a8a195] line-clamp-1">{dish.description}</p>
                <div className="mt-1 text-xs font-bold font-mono text-orange-400">
                  Rate: {dish.price}
                </div>
              </div>
            </div>

            {/* Portion Option Selector if Available */}
            {dish.portions && dish.portions.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-[#c8c0b4] block">
                    Select Portion:
                  </label>
                  {selectedPortion?.note && (
                    <span className="text-[11px] text-amber-400 font-medium">
                      ★ {selectedPortion.note}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {dish.portions.map((p) => {
                    const isSelected = selectedPortion?.portion === p.portion;
                    return (
                      <button
                        key={p.portion}
                        type="button"
                        onClick={() => setSelectedPortion(p)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-orange-600/25 border-orange-500 text-orange-300 shadow-sm'
                            : 'bg-[#14161c] border-white/5 text-[#a8a195] hover:text-[#f4efe6]'
                        }`}
                      >
                        <div className="text-xs font-bold">{p.portion}</div>
                        <div className="text-sm font-mono font-bold text-[#f4efe6]">₹ {p.price}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Service Type Selection */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#c8c0b4] block">
                Select Dining Preference:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setServiceType('Dine-In')}
                  className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                    serviceType === 'Dine-In'
                      ? 'bg-orange-600/20 border-orange-500 text-orange-300'
                      : 'bg-[#14161c] border-white/5 text-[#a8a195] hover:text-[#f4efe6]'
                  }`}
                >
                  <Utensils className="w-4 h-4" />
                  <span>Dine-In</span>
                </button>

                <button
                  type="button"
                  onClick={() => setServiceType('Takeaway')}
                  className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                    serviceType === 'Takeaway'
                      ? 'bg-orange-600/20 border-orange-500 text-orange-300'
                      : 'bg-[#14161c] border-white/5 text-[#a8a195] hover:text-[#f4efe6]'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Takeaway</span>
                </button>

                <button
                  type="button"
                  onClick={() => setServiceType('Home Delivery')}
                  className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                    serviceType === 'Home Delivery'
                      ? 'bg-orange-600/20 border-orange-500 text-orange-300'
                      : 'bg-[#14161c] border-white/5 text-[#a8a195] hover:text-[#f4efe6]'
                  }`}
                >
                  <Truck className="w-4 h-4" />
                  <span>Delivery</span>
                </button>
              </div>
            </div>

            {/* Quantity & Estimated Total */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#14161c] border border-white/5">
              <div>
                <span className="text-xs font-semibold text-[#f4efe6] block">Quantity</span>
                {totalPrice && (
                  <span className="text-xs text-orange-400 font-mono font-bold">
                    Total: ₹ {totalPrice}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg bg-[#20222a] text-[#f4efe6] font-bold text-sm hover:bg-orange-600 transition-colors flex items-center justify-center cursor-pointer"
                >
                  -
                </button>
                <span className="font-mono font-bold text-base w-6 text-center">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg bg-[#20222a] text-[#f4efe6] font-bold text-sm hover:bg-orange-600 transition-colors flex items-center justify-center cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-semibold text-[#c8c0b4]">Instant Direct Order:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Order via WhatsApp</span>
                </button>

                <a
                  href="tel:+919747362101"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#20222a] hover:bg-[#2b2e38] border border-orange-900/60 text-[#f4efe6] font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>Call: 9747362101</span>
                </a>
              </div>
            </div>

            {/* Form for Callback */}
            <form onSubmit={handleConfirmOrder} className="space-y-3 pt-3 border-t border-white/5">
              <div className="text-xs text-[#8e877c]">Or send an order callback request:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="px-3 py-2 text-xs rounded-lg bg-[#14161c] border border-white/10 focus:border-orange-500 text-[#f4efe6] outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number *"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="px-3 py-2 text-xs rounded-lg bg-[#14161c] border border-white/10 focus:border-orange-500 text-[#f4efe6] outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Optional notes or Angadipuram address..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg bg-[#14161c] border border-white/10 focus:border-orange-500 text-[#f4efe6] outline-none"
              />
              <button
                type="submit"
                className="w-full py-3 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-300 hover:to-amber-300 rounded-xl transition-all cursor-pointer shadow-lg shadow-orange-950/50"
              >
                Send Order Request
              </button>
            </form>

          </div>
        )}
      </div>
    </div>
  );
};
