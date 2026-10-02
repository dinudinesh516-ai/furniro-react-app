import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner';
import FeaturesBar from '../components/common/FeaturesBar';
import Pagination from '../components/common/Pagination';
import ShopToolbar from '../components/shop/ShopToolbar';
import ProductGrid from '../components/product/ProductGrid';
import useProducts from '../hooks/useProducts';

const rooms = ['all', 'dining', 'living', 'bedroom'];

function Shop() {
  const { products, loading, error } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const [view, setView] = useState('grid');
  const [perPage, setPerPage] = useState(8);
  const [sortBy, setSortBy] = useState('default');
  const [page, setPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);

  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || 'all';

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (!value || value === 'all') next.delete(key);
    else next.set(key, value);
    setSearchParams(next);
    setPage(1);
  };

  // Any filter change jumps back to page 1
  const changePerPage = (n) => {
    setPerPage(n);
    setPage(1);
  };
  const changeSort = (value) => {
    setSortBy(value);
    setPage(1);
  };

  // Filter + sort (memoised so it only recalculates when inputs change)
  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
      const matchesRoom = category === 'all' || p.room === category;
      return matchesSearch && matchesRoom;
    });
    if (sortBy === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === 'name') list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }, [products, search, category, sortBy]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const startIndex = (page - 1) * perPage;
  const pageItems = filtered.slice(startIndex, startIndex + perPage);

  const changePage = (p) => {
    setPage(p);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <>
      <PageBanner title="Shop" />
      <ShopToolbar
        view={view}
        setView={setView}
        perPage={perPage}
        setPerPage={changePerPage}
        sortBy={sortBy}
        setSortBy={changeSort}
        start={startIndex + 1}
        end={Math.min(startIndex + perPage, filtered.length)}
        total={filtered.length}
        onToggleFilter={() => setShowFilter((s) => !s)}
      />

      {showFilter && (
        <div className="filter-panel">
          <div className="container-xl d-flex flex-wrap gap-3 align-items-center">
            <input
              type="search"
              className="form-control filter-input"
              placeholder="Search by name"
              value={search}
              onChange={(e) => updateParam('search', e.target.value)}
            />
            <div className="d-flex flex-wrap gap-2">
              {rooms.map((room) => (
                <button
                  key={room}
                  type="button"
                  className={`chip ${category === room ? 'active' : ''}`}
                  onClick={() => updateParam('category', room)}
                >
                  {room}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <section className="shop-section">
        <div className="container">
          {error && (
            <p className="small text-muted text-center mb-4">
              Live API unavailable – showing cached furniture data.
            </p>
          )}
          <ProductGrid products={pageItems} loading={loading} layout={view} />
          <div className="mt-5 pt-3">
            <Pagination currentPage={page} totalPages={totalPages} onPageChange={changePage} />
          </div>
        </div>
      </section>

      <FeaturesBar />
    </>
  );
}

export default Shop;
