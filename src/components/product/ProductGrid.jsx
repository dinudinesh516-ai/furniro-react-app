import ProductCard from './ProductCard';

// Renders any list of products with .map() – used on Home, Shop and Product pages
function ProductGrid({ products, loading, layout = 'grid', skeletonCount = 8 }) {
  if (loading) {
    return (
      <div className="row g-4">
        {Array.from({ length: skeletonCount }, (_, i) => (
          <div key={i} className="col-6 col-md-4 col-lg-3">
            <div className="product-skeleton" />
          </div>
        ))}
      </div>
    );
  }

  if (!products.length) {
    return <p className="text-center text-muted py-5">No products found.</p>;
  }

  const colClass = layout === 'list' ? 'col-12' : 'col-6 col-md-4 col-lg-3';

  return (
    <div className="row g-3 g-md-4">
      {products.map((product) => (
        <div key={product.id} className={colClass}>
          <ProductCard product={product} layout={layout} />
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
