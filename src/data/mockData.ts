import { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 99.99,
    originalPrice: 149.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.',
    category: 'Electronics',
    rating: 4.5,
    reviews: 128,
    inStock: true,
    features: ['Noise Cancellation', '30h Battery', 'Wireless Charging', 'Premium Sound']
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    description: 'Advanced fitness tracking with heart rate monitor, GPS, and water resistance.',
    category: 'Electronics',
    rating: 4.7,
    reviews: 89,
    inStock: true,
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Water Resistant', '7-day Battery']
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    description: 'Comfortable organic cotton t-shirt made from sustainable materials.',
    category: 'Clothing',
    rating: 4.3,
    reviews: 256,
    inStock: true,
    features: ['100% Organic Cotton', 'Sustainable', 'Machine Washable', 'Comfortable Fit']
  },
  {
    id: '4',
    name: 'Professional Camera Lens',
    price: 899.99,
    originalPrice: 1199.99,
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop',
    description: 'Professional-grade camera lens with image stabilization and weather sealing.',
    category: 'Electronics',
    rating: 4.8,
    reviews: 67,
    inStock: true,
    features: ['Image Stabilization', 'Weather Sealed', 'Professional Grade', 'Sharp Images']
  },
  {
    id: '5',
    name: 'Leather Crossbody Bag',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    description: 'Genuine leather crossbody bag with multiple compartments and adjustable strap.',
    category: 'Accessories',
    rating: 4.4,
    reviews: 142,
    inStock: true,
    features: ['Genuine Leather', 'Multiple Compartments', 'Adjustable Strap', 'Durable']
  },
  {
    id: '6',
    name: 'Wireless Charging Pad',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    category: 'Electronics',
    rating: 4.2,
    reviews: 203,
    inStock: true,
    features: ['Fast Charging', 'Qi Compatible', 'LED Indicator', 'Compact Design']
  },
  {
    id: '7',
    name: 'Denim Jacket',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=500&fit=crop',
    description: 'Classic denim jacket with vintage wash and comfortable fit.',
    category: 'Clothing',
    rating: 4.6,
    reviews: 178,
    inStock: true,
    features: ['Vintage Wash', 'Comfortable Fit', 'Durable Denim', 'Classic Style']
  },
  {
    id: '8',
    name: 'Bluetooth Speaker',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
    description: 'Portable Bluetooth speaker with 360-degree sound and waterproof design.',
    category: 'Electronics',
    rating: 4.3,
    reviews: 95,
    inStock: true,
    features: ['360° Sound', 'Waterproof', '12h Battery', 'Portable']
  },
  {
    id: '9',
    name: 'Running Shoes',
    price: 129.99,
    originalPrice: 159.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    description: 'Lightweight running shoes with advanced cushioning and breathable mesh.',
    category: 'Shoes',
    rating: 4.7,
    reviews: 312,
    inStock: true,
    features: ['Lightweight', 'Advanced Cushioning', 'Breathable Mesh', 'Durable Sole']
  },
  {
    id: '10',
    name: 'Smartphone Case',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop',
    description: 'Protective smartphone case with shock absorption and wireless charging compatibility.',
    category: 'Accessories',
    rating: 4.1,
    reviews: 189,
    inStock: true,
    features: ['Shock Absorption', 'Wireless Charging Compatible', 'Precise Cutouts', 'Slim Design']
  },
  {
    id: '11',
    name: 'Coffee Maker',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop',
    description: 'Programmable coffee maker with built-in grinder and thermal carafe.',
    category: 'Home & Kitchen',
    rating: 4.5,
    reviews: 87,
    inStock: true,
    features: ['Built-in Grinder', 'Programmable', 'Thermal Carafe', 'Auto Shut-off']
  },
  {
    id: '12',
    name: 'Yoga Mat',
    price: 34.99,
    originalPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop',
    description: 'Non-slip yoga mat with excellent grip and cushioning for all yoga practices.',
    category: 'Sports & Fitness',
    rating: 4.4,
    reviews: 156,
    inStock: true,
    features: ['Non-slip Surface', 'Excellent Grip', 'Cushioned', 'Easy to Clean']
  }
];

export const categories = [
  'All',
  'Electronics',
  'Clothing',
  'Accessories',
  'Shoes',
  'Home & Kitchen',
  'Sports & Fitness'
];

