import { Link } from 'react-router-dom';
import { PiCaretRight } from 'react-icons/pi';
import Logo from './Logo';

// Blurred hero banner used at the top of Shop, Cart, Checkout, Contact, Blog…
function PageBanner({ title, crumb }) {
  return (
    <section className="page-banner">
      <div className="page-banner-bg" style={{ backgroundImage: 'url(/images/banner.jpg)' }} />
      <div className="page-banner-content text-center">
        <Logo showText={false} size={56} />
        <h1>{title}</h1>
        <nav className="crumbs" aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <PiCaretRight />
          <span>{crumb || title}</span>
        </nav>
      </div>
    </section>
  );
}

export default PageBanner;
