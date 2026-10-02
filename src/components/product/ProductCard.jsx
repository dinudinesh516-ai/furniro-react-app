import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PiShareNetwork, PiArrowsLeftRight, PiHeart, PiHeartFill } from 'react-icons/pi';
import { useCart } from '../../context/CartContext';
import { formatRp } from '../../utils/format';

// Reusable product card with the hover overlay from the design
function ProductCard({ product, layout = 'grid' }) {
  const { addToCart, toggleWishlist, wishlist, addToCompare } = useCart();
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const liked = wishlist.includes(product.id);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/product/${product.id}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard not available */
    }
  };

  const handleCompare = () => {
    addToCompare(product);
    navigate('/comparison');
  };

  return (
    <article className={`product-card ${layout === 'list' ? 'is-list' : ''}`}>
      <div className="product-img">
        <img src={product.image} alt={product.title} loading="lazy" />
        {product.badge && (
          <span className={`badge-circle ${product.badge.type}`}>{product.badge.label}</span>
        )}

        <div className="product-overlay">
          <button type="button" className="btn-add" onClick={() => addToCart(product)}>
            Add to cart
          </button>
          <div className="overlay-actions">
            <button type="button" onClick={handleShare}>
              <PiShareNetwork /> {copied ? 'Copied' : 'Share'}
            </button>
            <button type="button" onClick={handleCompare}>
              <PiArrowsLeftRight /> Compare
            </button>
            <button type="button" onClick={() => toggleWishlist(product.id)}>
              {liked ? <PiHeartFill className="text-danger" /> : <PiHeart />} Like
            </button>
          </div>
          <Link to={`/product/${product.id}`} className="overlay-link" aria-label={`View ${product.title}`} />
        </div>
      </div>

      <div className="product-info">
        <h3 title={product.title}>
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </h3>
        <p className="product-sub">{product.subtitle}</p>
        <div className="product-price">
          <span>{formatRp(product.price)}</span>
          {product.oldPrice && <del>{formatRp(product.oldPrice)}</del>}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
