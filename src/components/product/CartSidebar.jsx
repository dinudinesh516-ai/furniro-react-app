import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsBagX } from 'react-icons/bs';
import { PiXCircleFill } from 'react-icons/pi';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/format';

// Side-cart preview (react-bootstrap Offcanvas) shown after "Add to cart"
function CartSidebar() {
  const { showCart, closeCart, cartItems, removeFromCart, subtotal } = useCart();

  return (
    <Offcanvas show={showCart} onHide={closeCart} placement="end" className="cart-sidebar">
      <div className="cart-sidebar-head d-flex justify-content-between align-items-center">
        <h2>Shopping Cart</h2>
        <button type="button" className="icon-btn small" onClick={closeCart} aria-label="Close cart">
          <BsBagX />
        </button>
      </div>

      <Offcanvas.Body className="cart-sidebar-body">
        {cartItems.length === 0 && <p className="text-muted">Your cart is empty.</p>}
        {cartItems.map((item) => (
          <div key={item.id} className="side-item d-flex align-items-center gap-3">
            <img src={item.image} alt={item.title} />
            <div className="flex-grow-1 min-w-0">
              <p className="side-title text-truncate">{item.title}</p>
              <p className="side-qty">
                {item.qty} <span className="mx-2">X</span>
                <span className="text-gold">{formatPrice(item.price)}</span>
              </p>
            </div>
            <button
              type="button"
              className="side-remove"
              onClick={() => removeFromCart(item.id)}
              aria-label={`Remove ${item.title}`}
            >
              <PiXCircleFill />
            </button>
          </div>
        ))}
      </Offcanvas.Body>

      <div className="cart-sidebar-foot">
        <div className="d-flex justify-content-between px-4 pb-3">
          <span>Subtotal</span>
          <strong className="text-gold">{formatPrice(subtotal)}</strong>
        </div>
        <div className="side-buttons d-flex gap-2 px-3 py-4">
          <Link to="/cart" className="pill-btn" onClick={closeCart}>Cart</Link>
          <Link to="/checkout" className="pill-btn" onClick={closeCart}>Checkout</Link>
          <Link to="/comparison" className="pill-btn" onClick={closeCart}>Comparison</Link>
        </div>
      </div>
    </Offcanvas>
  );
}

export default CartSidebar;
