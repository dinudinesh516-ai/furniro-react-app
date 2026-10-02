# Furniro – React Furniture eCommerce (Practical Test)

React 19 + Vite, **Bootstrap 5 / react-bootstrap**, **react-icons**, **react-router-dom**.
Products are fetched from `https://dummyjson.com/products/category/furniture` with `useEffect`
and rendered with `.map()`.

## 1. Setup

```bash
# (already done for this project – shown for reference)
npm create vite@latest furniro -- --template react
cd furniro
npm install bootstrap react-bootstrap react-router-dom react-icons
```

Bootstrap CSS is imported once in `src/main.jsx`, before our own styles:

```js
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
```

Run it:

```bash
npm install      # install dependencies
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
npm run preview  # preview the production build
```

## 2. Folder structure

```
furniro/
├── index.html                 # Poppins + Montserrat fonts
├── vercel.json                # SPA rewrite so /shop, /cart… work on refresh
├── public/
│   └── images/                # DEMO placeholder images – replace with real ones (same names)
└── src/
    ├── main.jsx               # BrowserRouter + CartProvider + Bootstrap CSS
    ├── App.jsx                # Route definitions
    ├── index.css              # Theme tokens + all component styles + responsive rules
    ├── context/CartContext.jsx      # cart, side-cart, wishlist, compare (useState/useEffect)
    ├── hooks/useProducts.js         # fetches DummyJSON with useEffect (+ offline fallback)
    ├── utils/format.js              # US dollar price formatting
    ├── data/                        # products, home sections, blog, comparison specs
    ├── components/
    │   ├── layout/   Navbar, Footer, Layout
    │   ├── common/   Logo, PageBanner, FeaturesBar, Pagination, Rating, SectionTitle
    │   ├── product/  ProductCard, ProductGrid, CartSidebar (Offcanvas)
    │   ├── home/     HeroSection, BrowseRange, OurProducts, Inspiration, FurnitureGallery
    │   ├── shop/     ShopToolbar
    │   └── blog/     BlogPostCard, BlogSidebar
    └── pages/  Home, Shop, ProductDetails, Comparison, Cart, Checkout, Contact, Blog, About, NotFound
```

## 3. Replacing the images

All images live in `public/images/`. Each placeholder shows its file name and size.
Drop your real image in with the **same file name** and it appears everywhere automatically.
API product images come from the DummyJSON CDN.

## 4. Features

- Home: hero, Browse The Range, API-driven Our Products (+ Show More), inspiration slider, #FuniroFurniture collage
- Shop: filter panel (search + room), grid/list view, show-per-page, sort, pagination, -% / New badges
- Product details: thumbnails, size, colour, quantity, Add To Cart → side cart, tabs, related products
- Comparison: design table + "Choose a Product" to add a 3rd column
- Cart: editable quantities, remove, live subtotal/total (saved in localStorage)
- Checkout: validated billing form, payment options, place order
- Contact & Blog: validated contact form; blog search, category filter, recent posts, pagination
- Mobile: hamburger menu, stacked layouts, touch-friendly product actions

## 5. Deploy to Vercel

Push to GitHub → import the repo on vercel.com → Framework: **Vite** → Deploy.
