import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner';
import FeaturesBar from '../components/common/FeaturesBar';
import Rating from '../components/common/Rating';
import useProducts from '../hooks/useProducts';
import { useCart } from '../context/CartContext';
import { comparisonSections, defaultCompareProducts, toCompareProduct } from '../data/comparison';
import { formatRs } from '../utils/format';

function Comparison() {
  const { products } = useProducts();
  const { compareList, addToCart } = useCart();
  // Third column: the product sent from a card's "Compare" button, or chosen below
  const [extra, setExtra] = useState(compareList[0] ? toCompareProduct(compareList[0]) : null);

  const columns = extra ? [...defaultCompareProducts, extra] : defaultCompareProducts;

  const handleChoose = (e) => {
    const chosen = products.find((p) => p.id === e.target.value);
    setExtra(chosen ? toCompareProduct(chosen) : null);
  };

  return (
    <>
      <PageBanner title="Product Comparison" crumb="Comparison" />

      <section className="compare-section">
        <div className="table-responsive">
          <table className="compare-table">
            <thead>
              <tr>
                <th className="compare-intro">
                  <h2>Go to Product page for more Products</h2>
                  <Link to="/shop" className="view-more">View More</Link>
                </th>
                {columns.map((p) => (
                  <th key={p.id} className="compare-product">
                    <div className="compare-img">
                      <img src={p.image} alt={p.title} />
                    </div>
                    <h3>{p.title}</h3>
                    <p className="mb-1">{formatRs(p.price)}</p>
                    <div className="d-flex align-items-center gap-2 small">
                      <strong>{p.rating}</strong>
                      <Rating value={Number(p.rating)} />
                      <span className="v-divider" />
                      <span className="text-gray">{p.reviews} Review</span>
                    </div>
                  </th>
                ))}
                <th className="compare-add">
                  <h3>Add A Product</h3>
                  <select className="choose-select" value={extra?.id || ''} onChange={handleChoose}>
                    <option value="">Choose a Product</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </select>
                </th>
              </tr>
            </thead>

            {comparisonSections.map((section) => (
              <tbody key={section.title}>
                <tr className="section-row">
                  <th>{section.title}</th>
                  {columns.map((p) => <td key={p.id} />)}
                  <td />
                </tr>
                {section.rows.map((row) => (
                  <tr key={row.key}>
                    <th>{row.label}</th>
                    {columns.map((p) => (
                      <td key={p.id}>{p.specs[row.key]}</td>
                    ))}
                    <td />
                  </tr>
                ))}
              </tbody>
            ))}

            <tbody>
              <tr>
                <th />
                {columns.map((p) => (
                  <td key={p.id} className="pt-4 pb-5">
                    <button type="button" className="btn-gold-sm" onClick={() => addToCart(p)}>
                      Add To Cart
                    </button>
                  </td>
                ))}
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <FeaturesBar />
    </>
  );
}

export default Comparison;
