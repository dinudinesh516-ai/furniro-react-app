import { Link } from 'react-router-dom';
import { PiTrashFill } from 'react-icons/pi';
import PageBanner from '../components/common/PageBanner';
import FeaturesBar from '../components/common/FeaturesBar';
import { useCart } from '../context/CartContext';
import { formatRs } from '../utils/format';

function Cart() {
  const { cartItems, updateQty, removeFromCart, subtotal } = useCart();

  return (
    <>
      <PageBanner title="Cart" />

      <section className="cart-section">
        <div className="container-xl">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="table-responsive">
                <table className="cart-table">
                  <thead>
                    <tr>
                      <th />
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.length === 0 && (
                      <tr>
                        <td colSpan={6} className="text-center py-5">
                          Your cart is empty. <Link to="/shop" className="text-gold">Continue shopping</Link>
                        </td>
                      </tr>
                    )}
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="cart-thumb"><img src={item.image} alt={item.title} /></div>
                        </td>
                        <td className="text-gray">{item.title}</td>
                        <td className="text-gray">{formatRs(item.price)}</td>
                        <td>
                          <input
                            type="number"
                            min="1"
                            className="qty-input"
                            value={item.qty}
                            onChange={(e) => updateQty(item.id, e.target.value)}
                            aria-label={`Quantity of ${item.title}`}
                          />
                        </td>
                        <td>{formatRs(item.price * item.qty)}</td>
                        <td>
                          <button type="button" className="trash-btn" onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.title}`}>
                            <PiTrashFill />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="totals-box text-center">
                <h2>Cart Totals</h2>
                <div className="totals-row">
                  <span>Subtotal</span>
                  <span className="text-gray">{formatRs(subtotal)}</span>
                </div>
                <div className="totals-row">
                  <span>Total</span>
                  <span className="text-gold fs-5 fw-medium">{formatRs(subtotal)}</span>
                </div>
                <Link to="/checkout" className={`outline-btn d-inline-block mt-4 ${cartItems.length ? '' : 'disabled'}`}>
                  Check Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturesBar />
    </>
  );
}

export default Cart;
