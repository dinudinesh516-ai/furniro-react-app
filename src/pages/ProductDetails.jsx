import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PiCaretRight, PiHeart, PiHeartFill } from 'react-icons/pi';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Rating from '../components/common/Rating';
import OurProducts from '../components/home/OurProducts';
import useProducts from '../hooks/useProducts';
import { useCart } from '../context/CartContext';
import { formatRs } from '../utils/format';

const sizes = ['L', 'XL', 'XS'];
const colors = ['#816DFA', '#000000', '#B88E2F'];
const tabs = ['Description', 'Additional Information', 'Reviews'];

// The `key` remounts the page when the id changes, so all selections reset
function ProductDetailsPage() {
  const { id } = useParams();
  return <ProductDetails key={id} id={id} />;
}

function ProductDetails({ id }) {
  const navigate = useNavigate();
  const { products, loading } = useProducts();
  const { addToCart, wishlist, toggleWishlist, addToCompare } = useCart();

  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState('L');
  const [color, setColor] = useState(colors[0]);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('Description');

  const product = products.find((p) => p.id === id);

  if (loading) return <div className="container py-5 text-center">Loading product…</div>;
  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Product not found</h2>
        <Link to="/shop" className="btn-outline-gold d-inline-block mt-3">Back to shop</Link>
      </div>
    );
  }

  const thumbs = product.images.slice(0, 4);
  const related = products.filter((p) => p.id !== product.id && p.room === product.room)
    .concat(products.filter((p) => p.id !== product.id && p.room !== product.room));
  const liked = wishlist.includes(product.id);

  return (
    <>
      {/* Breadcrumb bar */}
      <div className="detail-crumbs">
        <div className="container-xl d-flex align-items-center flex-wrap gap-3">
          <Link to="/">Home</Link> <PiCaretRight />
          <Link to="/shop">Shop</Link> <PiCaretRight />
          <span className="crumb-divider" />
          <span className="text-dark">{product.title}</span>
        </div>
      </div>

      <section className="detail-main">
        <div className="container-xl">
          <div className="row g-4 g-lg-5">
            {/* Gallery */}
            <div className="col-lg-6">
              <div className="d-flex flex-column-reverse flex-md-row gap-3 gap-md-4">
                <div className="thumbs d-flex flex-md-column gap-3">
                  {thumbs.map((src, i) => (
                    <button
                      key={src + i}
                      type="button"
                      className={`thumb ${i === activeImage ? 'active' : ''}`}
                      onClick={() => setActiveImage(i)}
                      aria-label={`Show image ${i + 1}`}
                    >
                      <img src={src} alt="" />
                    </button>
                  ))}
                </div>
                <div className="main-image flex-grow-1">
                  <img src={thumbs[activeImage]} alt={product.title} />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="col-lg-6">
              <div className="detail-info">
                <h1>{product.title}</h1>
                <p className="detail-price">{formatRs(product.price)}</p>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <Rating value={product.rating} />
                  <span className="v-divider" />
                  <span className="text-gray small">{product.reviewsCount} Customer Review</span>
                </div>
                <p className="detail-desc">{product.description}</p>

                <p className="opt-label">Size</p>
                <div className="d-flex gap-3 mb-3">
                  {sizes.map((s) => (
                    <button key={s} type="button" className={`size-btn ${size === s ? 'active' : ''}`} onClick={() => setSize(s)}>
                      {s}
                    </button>
                  ))}
                </div>

                <p className="opt-label">Color</p>
                <div className="d-flex gap-3 mb-4">
                  {colors.map((c) => (
                    <button
                      key={c}
                      type="button"
                      className={`color-btn ${color === c ? 'active' : ''}`}
                      style={{ background: c }}
                      onClick={() => setColor(c)}
                      aria-label={`Color ${c}`}
                    />
                  ))}
                </div>

                <div className="d-flex flex-wrap gap-3 detail-actions">
                  <div className="qty-box">
                    <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
                    <span>{qty}</span>
                    <button type="button" onClick={() => setQty((q) => q + 1)}>+</button>
                  </div>
                  <button type="button" className="outline-btn" onClick={() => addToCart(product, qty)}>
                    Add To Cart
                  </button>
                  <button
                    type="button"
                    className="outline-btn"
                    onClick={() => {
                      addToCompare(product);
                      navigate('/comparison');
                    }}
                  >
                    + Compare
                  </button>
                </div>

                <hr className="my-5" />

                <dl className="meta-list">
                  <div><dt>SKU</dt><dd>: {product.sku}</dd></div>
                  <div><dt>Category</dt><dd>: {product.category}</dd></div>
                  <div><dt>Tags</dt><dd>: {product.tags.join(', ')}</dd></div>
                  <div>
                    <dt>Share</dt>
                    <dd className="d-flex align-items-center gap-3">
                      : <FaFacebook /> <FaLinkedin /> <FaTwitter />
                      <button type="button" className="like-btn ms-auto" onClick={() => toggleWishlist(product.id)} aria-label="Like">
                        {liked ? <PiHeartFill /> : <PiHeart />}
                      </button>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="detail-tabs">
        <div className="container-xl">
          <div className="tab-heads d-flex justify-content-center flex-wrap gap-4 gap-md-5">
            {tabs.map((tab) => (
              <button key={tab} type="button" className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>
                {tab === 'Reviews' ? `Reviews [${product.reviewsCount}]` : tab}
              </button>
            ))}
          </div>

          <div className="tab-body">
            {activeTab === 'Description' && (
              <>
                <p>{product.description}</p>
                <p>
                  Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced.
                </p>
              </>
            )}
            {activeTab === 'Additional Information' && (
              <table className="table info-table">
                <tbody>
                  <tr><th>Brand</th><td>{product.brand || 'Furniro'}</td></tr>
                  <tr><th>Weight</th><td>{product.weight ? `${product.weight} kg` : '—'}</td></tr>
                  <tr><th>Dimensions</th><td>{product.dimensions ? `${product.dimensions.width} × ${product.dimensions.height} × ${product.dimensions.depth} cm` : '—'}</td></tr>
                  <tr><th>Warranty</th><td>{product.warranty || '1 year warranty'}</td></tr>
                  <tr><th>Shipping</th><td>{product.shipping || 'Ships in 3–5 business days'}</td></tr>
                </tbody>
              </table>
            )}
            {activeTab === 'Reviews' && (
              <p className="text-center">
                Rated <strong>{Number(product.rating).toFixed(1)}</strong> / 5 by {product.reviewsCount} customers.
              </p>
            )}
          </div>

          <div className="row g-4 mt-2">
            {['/images/detail-1.jpg', '/images/detail-2.jpg'].map((src) => (
              <div key={src} className="col-md-6">
                <img src={src} alt="Product in use" className="detail-wide" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="related">
        <OurProducts title="Related Products" products={related} loading={false} initial={4} />
      </div>
    </>
  );
}

export default ProductDetailsPage;
