import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import { rangeCategories } from '../../data/homeData';

function BrowseRange() {
  return (
    <section className="browse-range">
      <div className="container">
        <SectionTitle
          title="Browse The Range"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <div className="row g-4 justify-content-center">
          {rangeCategories.map((cat) => (
            <div key={cat.id} className="col-12 col-sm-6 col-md-4">
              <Link to={`/shop?category=${cat.id}`} className="range-card">
                <div className="range-img">
                  <img src={cat.image} alt={cat.title} loading="lazy" />
                </div>
                <h3>{cat.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrowseRange;
