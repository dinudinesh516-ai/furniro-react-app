import { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import ProductGrid from '../product/ProductGrid';

// "Our Products" – shows 8 cards and reveals 4 more on each "Show More" click
function OurProducts({ products, loading, title = 'Our Products', initial = 8 }) {
  const [visible, setVisible] = useState(initial);
  const hasMore = visible < products.length;

  return (
    <section className="our-products">
      <div className="container">
        <SectionTitle title={title} />
        <ProductGrid products={products.slice(0, visible)} loading={loading} skeletonCount={initial} />
        {!loading && hasMore && (
          <div className="text-center mt-5">
            <button type="button" className="btn-outline-gold" onClick={() => setVisible((v) => v + 4)}>
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default OurProducts;
