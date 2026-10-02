import { Link } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner';
import FeaturesBar from '../components/common/FeaturesBar';
import BrowseRange from '../components/home/BrowseRange';

function About() {
  return (
    <>
      <PageBanner title="About" />
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-md-6">
              <img src="/images/inspiration-1.jpg" alt="Furniro showroom" className="img-fluid rounded-3 w-100" />
            </div>
            <div className="col-md-6">
              <h2>Furniture that feels like home</h2>
              <p className="text-gray">
                Furniro designs timeless pieces for dining, living and bedroom spaces. Every product is
                crafted from top materials and backed by a 2-year warranty, so you can furnish your home
                with confidence.
              </p>
              <Link to="/shop" className="btn-gold-sm">Shop Now</Link>
            </div>
          </div>
        </div>
      </section>
      <BrowseRange />
      <FeaturesBar />
    </>
  );
}

export default About;
