export type MenuCategory = 
  | 'All'
  | 'Popular Combos'
  | 'Shawaya & Combos'
  | 'Al Faham & Grills'
  | 'Bishawari Rice'
  | 'Mojitos (Bene Tibi)'
  | 'Classic Mojitos';

export interface PortionOption {
  portion: 'Quarter' | 'Half' | 'Full' | 'Standard';
  price: number;
  note?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  price: string;
  portions?: PortionOption[];
  image: string;
  isSignature?: boolean;
  isPopular?: boolean;
  spicyLevel?: 1 | 2 | 3;
  notes?: string;
  tags?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'utensils' | 'shopping-bag' | 'truck';
}

export interface OrderDetails {
  dish?: MenuItem;
  selectedPortion?: string;
  serviceType: 'Dine-In' | 'Takeaway' | 'Home Delivery';
  quantity: number;
  customerName?: string;
  customerPhone?: string;
  notes?: string;
}
