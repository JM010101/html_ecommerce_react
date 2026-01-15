import { useState } from 'react'
import { Link } from 'react-router-dom'
import { products, getProductsByCategory } from '../data/products'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const { addToCart } = useCart()
  
  const categories = ['All', ...new Set(products.map(p => p.category))]
  const filteredProducts = getProductsByCategory(selectedCategory === 'All' ? '' : selectedCategory)

  const handleAddToCart = (e, product) => {
    e.preventDefault()
    addToCart(product, 1)
    alert(`${product.name} added to cart!`)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Products</h1>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedCategory === category || (category === 'All' && selectedCategory === '')
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Link to={`/products/${product.id}`}>
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23ddd" width="400" height="400"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EProduct Image%3C/text%3E%3C/svg%3E'
                    }}
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link to={`/products/${product.id}`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-gray-500 mb-2">CAS: {product.casNumber}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
