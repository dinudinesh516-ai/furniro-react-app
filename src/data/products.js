// -----------------------------------------------------------------------------
// Product data
// 1. API_URL           -> DummyJSON furniture endpoint (fetched in useProducts)
// 2. designProducts    -> the 8 cards from the Figma design (Syltherine, Leviosa…)
// 3. fallbackApiData   -> used only if the API request fails (offline etc.)
// 4. normalizeApiProduct converts an API product into the shape our cards use
// -----------------------------------------------------------------------------

export const API_URL = 'https://dummyjson.com/products/category/furniture';

// Replace the files in /public/images with your real images (keep the names)
const img = (name) => `/images/${name}`;

const galleryImages = [img('asgaard-sofa.jpg'), img('outdoor-sofa.jpg'), img('casaliving.jpg')];

export const designProducts = [
  { id: 'syltherine', title: 'Syltherine', subtitle: 'Stylish cafe chair', price: 250, oldPrice: 350, badge: { type: 'discount', label: '-30%' }, image: img('syltherine.jpg'), room: 'dining' },
  { id: 'leviosa', title: 'Leviosa', subtitle: 'Stylish cafe chair', price: 250, image: img('leviosa.jpg'), room: 'dining' },
  { id: 'lolito', title: 'Lolito', subtitle: 'Luxury big sofa', price: 700, oldPrice: 1400, badge: { type: 'discount', label: '-50%' }, image: img('lolito.jpg'), room: 'living' },
  { id: 'respira', title: 'Respira', subtitle: 'Outdoor bar table and stool', price: 50, badge: { type: 'new', label: 'New' }, image: img('respira.jpg'), room: 'dining' },
  { id: 'grifo', title: 'Grifo', subtitle: 'Night lamp', price: 150, image: img('grifo.jpg'), room: 'bedroom' },
  { id: 'muggo', title: 'Muggo', subtitle: 'Small mug', price: 15, badge: { type: 'new', label: 'New' }, image: img('muggo.jpg'), room: 'dining' },
  { id: 'pingky', title: 'Pingky', subtitle: 'Cute bed set', price: 700, oldPrice: 1400, badge: { type: 'discount', label: '-50%' }, image: img('pingky.jpg'), room: 'bedroom' },
  { id: 'potty', title: 'Potty', subtitle: 'Minimalist flower pot', price: 50, badge: { type: 'new', label: 'New' }, image: img('potty.jpg'), room: 'living' },
].map((p) => ({
  ...p,
  source: 'design',
  category: 'Sofas',
  description:
    'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',
  images: [p.image, ...galleryImages],
  rating: 4.5,
  reviewsCount: 5,
  sku: `SS-${p.id.slice(0, 3).toUpperCase()}`,
  tags: ['Sofa', 'Chair', 'Home', 'Shop'],
}));

// Prices are kept in US dollars exactly as the API returns them
const round2 = (n) => Math.round(n * 100) / 100;

const guessRoom = (title = '') => {
  const t = title.toLowerCase();
  if (t.includes('bed')) return 'bedroom';
  if (t.includes('chair') || t.includes('table')) return 'dining';
  return 'living';
};

export const normalizeApiProduct = (p) => {
  const price = p.price;
  const discount = Math.round(p.discountPercentage || 0);

  let badge = null;
  let oldPrice = null;
  if (discount >= 10) {
    badge = { type: 'discount', label: `-${discount}%` };
    oldPrice = round2(price / (1 - discount / 100));
  } else if (discount < 5) {
    badge = { type: 'new', label: 'New' };
  }

  return {
    id: String(p.id),
    source: 'api',
    title: p.title,
    subtitle: p.brand || p.category,
    price,
    oldPrice,
    badge,
    image: p.thumbnail,
    images: p.images?.length ? p.images : [p.thumbnail],
    description: p.description,
    category: p.category,
    room: guessRoom(p.title),
    rating: p.rating,
    reviewsCount: p.reviews?.length ?? 0,
    sku: p.sku,
    tags: p.tags || [],
    weight: p.weight,
    dimensions: p.dimensions,
    warranty: p.warrantyInformation,
    shipping: p.shippingInformation,
    brand: p.brand,
  };
};

// Minimal copy of the API response – used only when the network request fails
const cdn = (slug) => `https://cdn.dummyjson.com/product-images/furniture/${slug}/thumbnail.webp`;
export const fallbackApiData = [
  { id: 11, title: 'Annibale Colombo Bed', brand: 'Annibale Colombo', category: 'furniture', price: 1899.99, discountPercentage: 8.57, rating: 4.77, sku: 'FUR-ANN-ANN-011', tags: ['furniture', 'beds'], description: 'The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.', thumbnail: cdn('annibale-colombo-bed') },
  { id: 12, title: 'Annibale Colombo Sofa', brand: 'Annibale Colombo', category: 'furniture', price: 2499.99, discountPercentage: 14.4, rating: 3.92, sku: 'FUR-ANN-ANN-012', tags: ['furniture', 'sofas'], description: 'The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.', thumbnail: cdn('annibale-colombo-sofa') },
  { id: 13, title: 'Bedside Table African Cherry', brand: 'Furniture Co.', category: 'furniture', price: 299.99, discountPercentage: 19.09, rating: 2.87, sku: 'FUR-FUR-BED-013', tags: ['furniture', 'bedside tables'], description: 'The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.', thumbnail: cdn('bedside-table-african-cherry') },
  { id: 14, title: 'Knoll Saarinen Executive Conference Chair', brand: 'Knoll', category: 'furniture', price: 499.99, discountPercentage: 2.01, rating: 4.88, sku: 'FUR-KNO-KNO-014', tags: ['furniture', 'office chairs'], description: 'The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.', thumbnail: cdn('knoll-saarinen-executive-conference-chair') },
  { id: 15, title: 'Wooden Bathroom Sink With Mirror', brand: 'Bath Trends', category: 'furniture', price: 799.99, discountPercentage: 8.8, rating: 3.59, sku: 'FUR-BAT-WOO-015', tags: ['furniture', 'bathroom'], description: 'The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.', thumbnail: cdn('wooden-bathroom-sink-with-mirror') },
];
