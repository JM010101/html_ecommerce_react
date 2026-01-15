function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Strand Supply Co.</h3>
            <p className="text-gray-400 text-sm">
              Your trusted source for research reference materials and analytical standards.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/products" className="hover:text-white transition">Products</a></li>
              <li><a href="/cart" className="hover:text-white transition">Shopping Cart</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm">
              For inquiries, please contact us through our order system.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Strand Supply Co. All rights reserved.
            </p>
            <div className="bg-amber-500 text-black px-4 py-2 rounded font-bold text-sm">
              ⚠️ RESEARCH USE ONLY - NOT FOR HUMAN CONSUMPTION
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
