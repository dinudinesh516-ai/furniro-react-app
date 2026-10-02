import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import PageBanner from '../components/common/PageBanner';
import FeaturesBar from '../components/common/FeaturesBar';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

const initialForm = {
  firstName: '', lastName: '', company: '', country: 'Sri Lanka', street: '',
  city: '', province: 'Western Province', zip: '', phone: '', email: '', notes: '',
};

// Field config – the form inputs are rendered with .map()
const fields = [
  { name: 'company', label: 'Company Name (Optional)' },
  { name: 'country', label: 'Country / Region', options: ['Sri Lanka', 'India', 'Indonesia', 'United States'] },
  { name: 'street', label: 'Street address', required: true },
  { name: 'city', label: 'Town / City', required: true },
  { name: 'province', label: 'Province', options: ['Western Province', 'Central Province', 'Southern Province', 'Northern Province'] },
  { name: 'zip', label: 'ZIP code', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: true },
  { name: 'email', label: 'Email address', type: 'email', required: true },
];

function Checkout() {
  const { cartItems, subtotal, clearCart } = useCart();
  const [form, setForm] = useState(initialForm);
  const [payment, setPayment] = useState('bank');
  const [errors, setErrors] = useState({});
  const [placed, setPlaced] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const errs = {};
    ['firstName', 'lastName', 'street', 'city', 'zip', 'phone', 'email'].forEach((key) => {
      if (!form[key].trim()) errs[key] = 'Required';
    });
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length || !cartItems.length) return;
    setPlaced(true);
    clearCart();
    setForm(initialForm);
  };

  const inputClass = (name) => `form-control f-input ${errors[name] ? 'is-invalid' : ''}`;

  return (
    <>
      <PageBanner title="Checkout" />

      <section className="checkout-section">
        <div className="container">
          {placed && (
            <Alert variant="success" onClose={() => setPlaced(false)} dismissible>
              Thank you! Your order has been placed successfully.
            </Alert>
          )}
          <form className="row g-4 g-lg-5" onSubmit={handleSubmit} noValidate>
            <div className="col-lg-6">
              <div className="billing">
                <h2>Billing details</h2>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <label className="f-label" htmlFor="firstName">First Name</label>
                    <input id="firstName" name="firstName" className={inputClass('firstName')} value={form.firstName} onChange={handleChange} />
                  </div>
                  <div className="col-sm-6">
                    <label className="f-label" htmlFor="lastName">Last Name</label>
                    <input id="lastName" name="lastName" className={inputClass('lastName')} value={form.lastName} onChange={handleChange} />
                  </div>
                </div>

                {fields.map((field) => (
                  <div key={field.name} className="mb-4">
                    <label className="f-label" htmlFor={field.name}>{field.label}</label>
                    {field.options ? (
                      <select id={field.name} name={field.name} className="form-select f-input" value={form[field.name]} onChange={handleChange}>
                        {field.options.map((opt) => <option key={opt}>{opt}</option>)}
                      </select>
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type || 'text'}
                        className={inputClass(field.name)}
                        value={form[field.name]}
                        onChange={handleChange}
                      />
                    )}
                    {errors[field.name] && <div className="invalid-feedback d-block">{errors[field.name]}</div>}
                  </div>
                ))}

                <textarea
                  name="notes"
                  rows="1"
                  className="form-control f-input mt-2"
                  placeholder="Additional information"
                  value={form.notes}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="order-summary">
                <div className="d-flex justify-content-between sum-head">
                  <span>Product</span>
                  <span>Subtotal</span>
                </div>
                {cartItems.length === 0 && <p className="text-gray small mt-3">Your cart is empty.</p>}
                {cartItems.map((item) => (
                  <div key={item.id} className="d-flex justify-content-between sum-row">
                    <span className="text-gray">
                      {item.title} <span className="text-dark ms-2">X {item.qty}</span>
                    </span>
                    <span>{formatPrice(item.price * item.qty)}</span>
                  </div>
                ))}
                <div className="d-flex justify-content-between sum-row">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="d-flex justify-content-between sum-row align-items-center">
                  <span>Total</span>
                  <span className="text-gold fs-4 fw-bold">{formatPrice(subtotal)}</span>
                </div>
                <hr className="my-4" />

                <label className="pay-option active-label">
                  <input type="radio" name="payment" checked={payment === 'bank'} onChange={() => setPayment('bank')} />
                  Direct Bank Transfer
                </label>
                {payment === 'bank' && (
                  <p className="pay-note">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                  </p>
                )}
                <label className="pay-option">
                  <input type="radio" name="payment" checked={payment === 'cod'} onChange={() => setPayment('cod')} />
                  Cash On Delivery
                </label>

                <p className="privacy mt-4">
                  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy.</strong>
                </p>

                <div className="text-center mt-4">
                  <button type="submit" className="outline-btn wide" disabled={!cartItems.length}>
                    Place order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <FeaturesBar />
    </>
  );
}

export default Checkout;
