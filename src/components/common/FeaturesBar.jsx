import { features } from '../../data/homeData';

function FeaturesBar() {
  return (
    <section className="features-bar">
      <div className="container-fluid">
        <div className="row gy-4">
          {features.map(({ id, icon: Icon, title, text }) => (
            <div key={id} className="col-12 col-sm-6 col-lg-3">
              <div className="feature d-flex align-items-center gap-2">
                <Icon className="feature-icon" />
                <div>
                  <h5>{title}</h5>
                  <p>{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesBar;
