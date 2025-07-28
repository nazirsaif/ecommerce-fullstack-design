export const products = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 29999,
    originalPrice: 39999,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop',
    ],
    rating: 4.8,
    reviews: 1247,
    brand: 'AudioTech',
    inStock: true,
    colors: ['black', 'white', 'blue'],
    sizes: ['One Size'],
    description: 'High-quality wireless headphones with noise cancellation technology. Perfect for music lovers and professionals. Features 30-hour battery life and premium sound quality.',
    specifications: {
      'Brand': 'AudioTech',
      'Model': 'WH-2000XM4',
      'Connectivity': 'Bluetooth 5.0',
      'Battery Life': '30 hours',
      'Weight': '250g',
      'Warranty': '2 years'
    },
    supplier: {
      name: 'TechAudio Solutions',
      rating: 4.9,
      location: 'Karachi, Pakistan',
      verified: true
    }
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    price: 19999,
    originalPrice: 24999,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop',
    ],
    rating: 4.6,
    reviews: 892,
    brand: 'TechWear',
    inStock: true,
    colors: ['silver', 'black', 'gold'],
    sizes: ['42mm', '44mm'],
    description: 'Advanced smartwatch with health monitoring, GPS tracking, and smartphone connectivity. Water-resistant and long battery life.',
    specifications: {
      'Brand': 'TechWear',
      'Model': 'SW-Pro-2024',
      'Display': 'AMOLED 1.4"',
      'Battery': '7 days',
      'Water Resistance': '5ATM',
      'GPS': 'Built-in'
    },
    supplier: {
      name: 'SmartTech Manufacturing',
      rating: 4.7,
      location: 'Lahore, Pakistan',
      verified: true
    }
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 8999,
    originalPrice: 11999,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop',
    ],
    rating: 4.4,
    reviews: 567,
    brand: 'SoundMax',
    inStock: true,
    colors: ['black', 'white', 'red'],
    sizes: ['One Size'],
    description: 'Portable Bluetooth speaker with 360-degree sound and 20-hour battery life. Perfect for outdoor activities and parties.',
    specifications: {
      'Brand': 'SoundMax',
      'Model': 'BT-Speaker-360',
      'Power': '20W',
      'Battery': '20 hours',
      'Waterproof': 'IPX7',
      'Range': '100m'
    },
    supplier: {
      name: 'Audio Solutions Ltd',
      rating: 4.5,
      location: 'Islamabad, Pakistan',
      verified: true
    }
  },
  {
    id: 4,
    name: 'Premium Cotton T-Shirt',
    price: 2499,
    originalPrice: 3499,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop',
    ],
    rating: 4.3,
    reviews: 445,
    brand: 'FashionCo',
    inStock: true,
    colors: ['white', 'black', 'navy', 'gray'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Premium cotton t-shirt with comfortable fit and breathable fabric. Available in multiple colors and sizes.',
    specifications: {
      'Material': '100% Cotton',
      'Fit': 'Regular',
      'Care': 'Machine wash cold',
      'Origin': 'Made in Pakistan'
    },
    supplier: {
      name: 'Fashion Textiles Co',
      rating: 4.4,
      location: 'Faisalabad, Pakistan',
      verified: true
    }
  },
  {
    id: 5,
    name: 'Leather Jacket',
    price: 19999,
    originalPrice: 29999,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eef5?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eef5?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1521223890158-7d0b7d4c2c1b?w=400&h=400&fit=crop',
    ],
    rating: 4.7,
    reviews: 234,
    brand: 'LeatherCraft',
    inStock: true,
    colors: ['brown', 'black'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Genuine leather jacket with classic design and comfortable fit. Perfect for casual and formal occasions.',
    specifications: {
      'Material': 'Genuine Leather',
      'Lining': 'Polyester',
      'Closure': 'Zipper',
      'Pockets': '2 side pockets'
    },
    supplier: {
      name: 'Leather Goods International',
      rating: 4.6,
      location: 'Sialkot, Pakistan',
      verified: true
    }
  },
  {
    id: 6,
    name: 'Smart LED Lamp',
    price: 7999,
    originalPrice: 9999,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop',
    ],
    rating: 4.5,
    reviews: 189,
    brand: 'HomeTech',
    inStock: true,
    colors: ['white', 'black', 'silver'],
    sizes: ['One Size'],
    description: 'Smart LED lamp with voice control and customizable colors. Compatible with Alexa and Google Home.',
    specifications: {
      'Brand': 'HomeTech',
      'Power': '15W',
      'Colors': '16 million',
      'Control': 'Voice/App',
      'Lifespan': '25,000 hours'
    },
    supplier: {
      name: 'Smart Home Solutions',
      rating: 4.5,
      location: 'Rawalpindi, Pakistan',
      verified: true
    }
  },
  {
    id: 7,
    name: 'Running Shoes',
    price: 12999,
    originalPrice: 15999,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
    ],
    rating: 4.6,
    reviews: 567,
    brand: 'SportMax',
    inStock: true,
    colors: ['black', 'white', 'blue'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    description: 'Professional running shoes with advanced cushioning technology and breathable mesh upper.',
    specifications: {
      'Brand': 'SportMax',
      'Type': 'Running',
      'Cushioning': 'Air Max',
      'Weight': '280g',
      'Terrain': 'Road/Track'
    },
    supplier: {
      name: 'Sports Equipment Co',
      rating: 4.7,
      location: 'Multan, Pakistan',
      verified: true
    }
  },
  {
    id: 8,
    name: 'Wireless Hair Dryer',
    price: 8999,
    originalPrice: 11999,
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1522338140269-f46f5913618a?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1522338140269-f5913618a?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
    ],
    rating: 4.4,
    reviews: 234,
    brand: 'BeautyTech',
    inStock: true,
    colors: ['pink', 'white', 'black'],
    sizes: ['One Size'],
    description: 'Cordless hair dryer with ionic technology and multiple heat settings. Perfect for professional and home use.',
    specifications: {
      'Brand': 'BeautyTech',
      'Power': '2000W',
      'Battery': '30 minutes',
      'Heat Settings': '3 levels',
      'Ionic Technology': 'Yes'
    },
    supplier: {
      name: 'Beauty Products Ltd',
      rating: 4.3,
      location: 'Peshawar, Pakistan',
      verified: true
    }
  }
];

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getAllProducts = () => {
  return products;
}; 