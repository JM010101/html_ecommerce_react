import { Link } from 'react-router-dom'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { getCartItemCount } = useCart()
  const itemCount = getCartItemCount()

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Strand Supply Co.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Products
            </Link>
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-blue-600 transition font-medium flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Cart
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-blue-600 transition font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/cart"
                className="text-gray-700 hover:text-blue-600 transition font-medium flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ShoppingCart className="w-5 h-5" />
                Cart
                {itemCount > 0 && (
                  <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
