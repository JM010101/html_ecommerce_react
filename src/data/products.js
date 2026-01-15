// Sample product data - Replace with actual products from client
export const products = [
  {
    id: 1,
    name: 'Research Compound A',
    casNumber: '123-45-6',
    description: 'High-purity research reference material for laboratory use. Suitable for analytical and research applications.',
    price: 89.99,
    image: '/api/placeholder/400/400',
    category: 'Analytical Standards',
    inStock: true,
  },
  {
    id: 2,
    name: 'Research Compound B',
    casNumber: '234-56-7',
    description: 'Premium grade research material with certificate of analysis. Ideal for method development and validation.',
    price: 129.99,
    image: '/api/placeholder/400/400',
    category: 'Analytical Standards',
    inStock: true,
  },
  {
    id: 3,
    name: 'Reference Standard C',
    casNumber: '345-67-8',
    description: 'Certified reference material meeting ISO 17034 requirements. Includes full documentation package.',
    price: 199.99,
    image: '/api/placeholder/400/400',
    category: 'Certified Standards',
    inStock: true,
  },
  {
    id: 4,
    name: 'Research Compound D',
    casNumber: '456-78-9',
    description: 'Laboratory-grade research material. Suitable for research and development applications.',
    price: 79.99,
    image: '/api/placeholder/400/400',
    category: 'Research Materials',
    inStock: true,
  },
  {
    id: 5,
    name: 'Analytical Standard E',
    casNumber: '567-89-0',
    description: 'High-purity analytical standard with detailed specifications. Perfect for quality control applications.',
    price: 149.99,
    image: '/api/placeholder/400/400',
    category: 'Analytical Standards',
    inStock: true,
  },
  {
    id: 6,
    name: 'Reference Material F',
    casNumber: '678-90-1',
    description: 'Premium research reference material with extended shelf life. Includes storage and handling instructions.',
    price: 169.99,
    image: '/api/placeholder/400/400',
    category: 'Certified Standards',
    inStock: true,
  },
]

export function getProductById(id) {
  return products.find(product => product.id === parseInt(id))
}

export function getProductsByCategory(category) {
  if (!category) return products
  return products.filter(product => product.category === category)
}
