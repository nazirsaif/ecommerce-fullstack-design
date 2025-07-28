import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star, Grid, List, ChevronRight, MessageCircle } from 'lucide-react';
import { getProductsByCategory, getAllProducts } from '../data/products';
import ContactForm from '../components/ContactForm';

const ProductListingPage = () => {
  const { category } = useParams();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    brands: [],
    ratings: []
  });
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const allProducts = category ? getProductsByCategory(category) : getAllProducts();
  const products = allProducts;

  const filterOptions = {
    brands: [...new Set(products.map(p => p.brand))],
    priceRanges: [
      { label: 'Under $50', value: [0, 50] },
      { label: '$50 - $100', value: [50, 100] },
      { label: '$100 - $200', value: [100, 200] },
      { label: '$200 - $500', value: [200, 500] },
      { label: 'Over $500', value: [500, 1000] },
    ],
    ratings: [4, 3, 2, 1]
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const handleAddToCart = (productId) => {
    alert(`Added ${products.find(p => p.id === productId)?.name} to cart!`);
  };

  const handleContactSupplier = (productId) => {
    const product = products.find(p => p.id === productId);
    setSelectedProduct(product);
    setShowContactForm(true);
  };

  const getCategoryTitle = () => {
    const categoryMap = {
      'electronics': 'Electronics',
      'fashion': 'Fashion',
      'home': 'Home & Garden',
      'sports': 'Sports & Outdoor',
      'beauty': 'Beauty & Health',
      'automotive': 'Automotive',
      'toys': 'Toys & Games',
      'books': 'Books & Media'
    };
    return categoryMap[category] || 'Products';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900">{getCategoryTitle()}</span>
      </nav>

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            
            {/* Price Range */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
              <div className="space-y-2">
                {filterOptions.priceRanges.map((range) => (
                  <label key={range.label} className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleFilterChange('priceRange', range.value);
                        }
                      }}
                    />
                    <span className="ml-2 text-sm text-gray-700">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3">Brands</h4>
              <div className="space-y-2">
                {filterOptions.brands.map((brand) => (
                  <label key={brand} className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      onChange={(e) => {
                        const currentBrands = filters.brands;
                        if (e.target.checked) {
                          handleFilterChange('brands', [...currentBrands, brand]);
                        } else {
                          handleFilterChange('brands', currentBrands.filter(b => b !== brand));
                        }
                      }}
                    />
                    <span className="ml-2 text-sm text-gray-700">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Ratings */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3">Rating</h4>
              <div className="space-y-2">
                {filterOptions.ratings.map((rating) => (
                  <label key={rating} className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      onChange={(e) => {
                        const currentRatings = filters.ratings;
                        if (e.target.checked) {
                          handleFilterChange('ratings', [...currentRatings, rating]);
                        } else {
                          handleFilterChange('ratings', currentRatings.filter(r => r !== rating));
                        }
                      }}
                    />
                    <div className="ml-2 flex items-center">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="ml-1 text-sm text-gray-700">& up</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            <button
              onClick={() => setFilters({ priceRange: [0, 1000], brands: [], ratings: [] })}
              className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{getCategoryTitle()}</h1>
              <p className="text-gray-600">{products.length} products found</p>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>

              {/* View Mode */}
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {products.map((product) => (
              <div key={product.id} className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden ${
                viewMode === 'list' ? 'flex' : ''
              }`}>
                <div className={`${viewMode === 'list' ? 'w-48' : ''}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full object-cover ${viewMode === 'list' ? 'h-32' : 'h-48'}`}
                  />
                </div>
                
                <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{product.brand}</span>
                    {!product.inStock && (
                      <span className="text-sm text-red-600 font-medium">Out of Stock</span>
                    )}
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                    <span className="mx-1 text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{product.reviews} reviews</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-lg font-bold text-blue-600">${product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleAddToCart(product.id)}
                      disabled={!product.inStock}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleContactSupplier(product.id)}
                      className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center"
                    >
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Load More Products
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {selectedProduct && (
        <ContactForm
          isOpen={showContactForm}
          onClose={() => {
            setShowContactForm(false);
            setSelectedProduct(null);
          }}
          productId={selectedProduct.id}
          supplierName={selectedProduct.supplier.name}
        />
      )}
    </div>
  );
};

export default ProductListingPage;
  