# Strand Supply Co. - Ecommerce Website

A functional ecommerce website for Strand Supply Co., a distributor of research reference materials and analytical standards.

## Features

- ✅ **Age Gate Verification** - Mandatory age verification (18+) before accessing the site
- ✅ **Product Catalog** - Browse products with categories and filters
- ✅ **Product Details** - Detailed product pages with specifications
- ✅ **Shopping Cart** - Add, remove, and update quantities
- ✅ **Checkout Flow** - Complete order form with validation
- ✅ **Zelle Payment Instructions** - Payment instructions displayed after order
- ✅ **Research Use Only Footer** - Prominent disclaimer on all pages
- ✅ **Responsive Design** - Mobile-friendly interface
- ✅ **Local Storage** - Cart and age verification persist across sessions

## Tech Stack

- **React 18** - UI framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool and dev server

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to Vercel, Netlify, or any static hosting service.

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── AgeGate.jsx   # Age verification modal
│   ├── Header.jsx    # Site header with navigation
│   └── Footer.jsx    # Footer with disclaimer
├── context/          # React context providers
│   └── CartContext.jsx  # Shopping cart state management
├── data/             # Data files
│   └── products.js   # Product catalog data
├── pages/            # Page components
│   ├── Home.jsx      # Homepage
│   ├── Products.jsx  # Product listing
│   ├── ProductDetail.jsx  # Individual product page
│   ├── Cart.jsx      # Shopping cart
│   └── Checkout.jsx  # Checkout form
├── App.jsx           # Main app component with routing
├── main.jsx          # Entry point
└── index.css         # Global styles with Tailwind
```

## Customization

### Adding Products

Edit `src/data/products.js` to add or modify products. Each product should have:
- `id` - Unique identifier
- `name` - Product name
- `casNumber` - CAS registry number
- `description` - Product description
- `price` - Price in USD
- `image` - Image URL (replace with actual product images)
- `category` - Product category
- `inStock` - Boolean for availability

### Replacing Logo

Replace the placeholder logo in `src/components/Header.jsx`:
- Currently uses a blue square with "S"
- Replace with actual logo image or SVG

### Updating Payment Information

Edit the Zelle payment details in `src/pages/Checkout.jsx`:
- Search for "payments@strandsupply.com"
- Update with actual payment email/account

### Styling

The site uses Tailwind CSS. Customize colors, fonts, and spacing in:
- `tailwind.config.js` - Theme configuration
- Individual components - Inline Tailwind classes

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Connect your domain (strandsupply.com)
4. Deploy

### Netlify

1. Push code to GitHub
2. Import project in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Connect your domain

### Other Platforms

Any static hosting service that supports React SPA:
- Build: `npm run build`
- Serve the `dist` directory
- Configure redirects for client-side routing

## Important Notes

- **Age Gate**: The age verification modal is mandatory and cannot be bypassed
- **Research Use Only**: The disclaimer footer must remain visible on all pages
- **Payment**: Currently uses Zelle instructions (no payment processor integration)
- **Product Images**: Replace placeholder images with actual product photography
- **Backend**: This is a frontend-only application. For production, you'll need:
  - Backend API for order processing
  - Database for product and order management
  - Email service for order confirmations
  - Payment processor integration (optional)

## License

Proprietary - Strand Supply Co.
