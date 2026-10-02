import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="hero" style={{ backgroundImage: 'url(/images/hero.jpg)' }}>
      <div className="container-xl h-100 d-flex align-items-center justify-content-lg-end">
        <div className="hero-box">
          <p className="hero-tag">New Arrival</p>
          <h1>
            Discover Our
            <br />
            New Collection
          </h1>
          <p className="hero-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis.
          </p>
          <Link to="/shop" className="btn-hero">BUY Now</Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
