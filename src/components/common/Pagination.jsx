// Numbered pagination with a "Next" button (Shop + Blog pages)
function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="pager d-flex justify-content-center flex-wrap gap-3" aria-label="Pagination">
      {currentPage > 1 && (
        <button type="button" className="pager-btn wide" onClick={() => onPageChange(currentPage - 1)}>
          Prev
        </button>
      )}
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={`pager-btn ${page === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button type="button" className="pager-btn wide" onClick={() => onPageChange(currentPage + 1)}>
          Next
        </button>
      )}
    </nav>
  );
}

export default Pagination;
