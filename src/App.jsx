import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AgeGate from './components/AgeGate'
import Header from './components/Header'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'

function App() {
  const [ageVerified, setAgeVerified] = useState(() => {
    return localStorage.getItem('ageVerified') === 'true'
  })

  const handleAgeVerification = () => {
    setAgeVerified(true)
    localStorage.setItem('ageVerified', 'true')
  }

  if (!ageVerified) {
    return <AgeGate onVerify={handleAgeVerification} />
  }

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
