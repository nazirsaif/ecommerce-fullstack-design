import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Watch, Camera, Laptop, Shirt, Briefcase, Star, SendIcon } from 'lucide-react';

const HomePage = () => {
  const [rfqSuppliers, setRfqSuppliers] = useState('');

  const categories = [
    { name: 'Electronics', icon: Smartphone, path: '/category/electronics' },
    { name: 'Fashion', icon: Shirt, path: '/category/fashion' },
    { name: 'Home & Garden', icon: Briefcase, path: '/category/home' },
    { name: 'Sports & Outdoor', icon: Camera, path: '/category/sports' },
    { name: 'Beauty & Health', icon: Watch, path: '/category/beauty' },
    { name: 'Automotive', icon: Laptop, path: '/category/automotive' },
  ];

  const trendingProducts = [
    { id: 1, name: 'Smart Watch Pro', price: 'Rs. 29,999', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop', rating: 4.5 },
    { id: 2, name: 'Premium Wireless Headphones', price: 'Rs. 29,999', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop', rating: 4.8 },
    { id: 3, name: 'Bluetooth Speaker', price: 'Rs. 8,999', image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=200&h=200&fit=crop', rating: 4.4 },
    { id: 4, name: 'Running Shoes', price: 'Rs. 12,999', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop', rating: 4.6 },
  ];

  const recommendedProducts = [
    { id: 5, name: 'Leather Jacket', price: 'Rs. 19,999', image: 'https://images.unsplash.com/photo-1551028719-00167b16eef5?w=200&h=200&fit=crop', rating: 4.7 },
    { id: 6, name: 'Smart LED Lamp', price: 'Rs. 7,999', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop', rating: 4.5 },
    { id: 7, name: 'Wireless Hair Dryer', price: 'Rs. 8,999', image: 'https://images.unsplash.com/photo-1522338140269-f46f5913618a?w=200&h=200&fit=crop', rating: 4.4 },
    { id: 8, name: 'Premium Cotton T-Shirt', price: 'Rs. 2,499', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop', rating: 4.3 },
  ];

  const topCategories = [
    { name: 'Electronics', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop', count: '1,234 products' },
    { name: 'Fashion', image: 'https://images.unsplash.com/photo-1551028719-00167b16eef5?w=300&h=200&fit=crop', count: '2,156 products' },
    { name: 'Home & Garden', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop', count: '987 products' },
    { name: 'Sports & Outdoor', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop', count: '756 products' },
  ];

  const handleRFQSubmit = (e) => {
    e.preventDefault();
    if (rfqSuppliers) {
      alert(`RFQ submitted successfully for ${rfqSuppliers} suppliers!`);
      setRfqSuppliers('');
    } else {
      alert('Please enter the number of suppliers');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Welcome to <span className="text-yellow-300">TehWiz</span>
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Pakistan's leading B2B marketplace connecting businesses with trusted suppliers. 
              Find quality products, competitive prices, and reliable suppliers across Pakistan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/category/electronics"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Explore Products
              </Link>
              <Link
                to="/category/fashion"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                View Categories
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=400&fit=crop"
              alt="TehWiz Marketplace"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition-shadow"
            >
              <category.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Trending Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">{product.price}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Top Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topCategories.map((category, index) => (
            <Link key={index} to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="group">
              <div className="relative bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.count}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Recommended for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">{product.price}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-2xl p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Request for Quotation (RFQ)</h2>
          <p className="text-gray-600 mb-6">
            Need bulk quantities? Submit an RFQ and get competitive quotes from multiple suppliers.
          </p>
          <form onSubmit={handleRFQSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="number"
              placeholder="Number of suppliers"
              value={rfqSuppliers}
              onChange={(e) => setRfqSuppliers(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <SendIcon className="h-4 w-4 mr-2" />
              Submit RFQ
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-2">Developed by <span className="font-semibold text-blue-600">Saifullah Nazir</span></p>
        <p className="text-sm text-gray-500">TehWiz - Pakistan's B2B Marketplace | Made in Pakistan 🇵🇰</p>
      </div>
    </div>
  );
};

export default HomePage;
