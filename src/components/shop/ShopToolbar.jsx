import { PiSlidersHorizontal, PiDotsNine, PiSquareSplitVertical } from 'react-icons/pi';

// Filter / view / count / sort bar under the Shop banner
function ShopToolbar({
  view, setView, perPage, setPerPage, sortBy, setSortBy,
  start, end, total, onToggleFilter,
}) {
  return (
    <section className="shop-toolbar">
      <div className="container-xl d-flex flex-wrap align-items-center justify-content-between gap-3">
        <div className="d-flex align-items-center gap-3 gap-md-4">
          <button type="button" className="tool-btn" onClick={onToggleFilter}>
            <PiSlidersHorizontal /> Filter
          </button>
          <button
            type="button"
            className={`tool-btn ${view === 'grid' ? 'active' : ''}`}
            onClick={() => setView('grid')}
            aria-label="Grid view"
          >
            <PiDotsNine />
          </button>
          <button
            type="button"
            className={`tool-btn ${view === 'list' ? 'active' : ''}`}
            onClick={() => setView('list')}
            aria-label="List view"
          >
            <PiSquareSplitVertical />
          </button>
          <span className="tool-divider" />
          <span className="tool-count">
            Showing {total ? start : 0}–{end} of {total} results
          </span>
        </div>

        <div className="d-flex align-items-center gap-3 flex-wrap">
          <label className="tool-label">
            Show
            <select value={perPage} onChange={(e) => setPerPage(Number(e.target.value))} className="tool-input narrow">
              {[4, 8, 12, 16].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </label>
          <label className="tool-label">
            Short by
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="tool-input">
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name: A–Z</option>
            </select>
          </label>
        </div>
      </div>
    </section>
  );
}

export default ShopToolbar;
