import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { TbUserExclamation } from 'react-icons/tb';
import { PiMagnifyingGlass, PiHeart, PiShoppingCartSimple } from 'react-icons/pi';
import { IoMenu, IoClose } from 'react-icons/io5';
import Logo from '../common/Logo';
import { navLinks } from '../../data/homeData';
import { useCart } from '../../context/CartContext';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // mobile nav toggle
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { cartCount, openCart, wishlist } = useCart();
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/shop?search=${encodeURIComponent(query.trim())}`);
    setSearchOpen(false);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="container-xl d-flex align-items-center justify-content-between">
        <Link to="/" className="text-decoration-none" aria-label="Furniro home">
          <Logo />
        </Link>

        <ul className={`nav-links list-unstyled mb-0 ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === '/'} className="nav-item-link" onClick={closeMenu}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-icons d-flex align-items-center">
          <Link to="/checkout" className="icon-btn d-none d-sm-inline-flex" aria-label="Account">
            <TbUserExclamation />
          </Link>
          <button type="button" className="icon-btn" aria-label="Search" onClick={() => setSearchOpen((s) => !s)}>
            <PiMagnifyingGlass />
          </button>
          <Link to="/comparison" className="icon-btn position-relative d-none d-sm-inline-flex" aria-label="Wishlist">
            <PiHeart />
            {wishlist.length > 0 && <span className="icon-badge">{wishlist.length}</span>}
          </Link>
          <button type="button" className="icon-btn position-relative" aria-label="Open cart" onClick={openCart}>
            <PiShoppingCartSimple />
            {cartCount > 0 && <span className="icon-badge">{cartCount}</span>}
          </button>
          <button
            type="button"
            className="icon-btn d-lg-none"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </nav>

      {searchOpen && (
        <form className="search-drop container-xl" onSubmit={handleSearch}>
          <input
            autoFocus
            type="search"
            className="form-control"
            placeholder="Search products…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="btn btn-gold">Search</button>
        </form>
      )}
    </header>
  );
}

export default Navbar;
