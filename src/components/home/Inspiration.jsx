import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiArrowRight, PiCaretRight } from 'react-icons/pi';
import { inspirationSlides } from '../../data/homeData';

// "50+ Beautiful rooms inspiration" slider
function Inspiration() {
  const [active, setActive] = useState(0);
  const total = inspirationSlides.length;

  const next = () => setActive((i) => (i + 1) % total);

  // Put the active slide first, followed by the rest in order
  const ordered = inspirationSlides.map((_, i) => inspirationSlides[(active + i) % total]);
  const current = ordered[0];

  return (
    <section className="inspiration">
      <div className="container-xl">
        <div className="row align-items-center g-4">
          <div className="col-lg-4">
            <h2>50+ Beautiful rooms inspiration</h2>
            <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <Link to="/shop" className="btn-gold-sm">Explore More</Link>
          </div>

          <div className="col-lg-8">
            <div className="slider">
              <div className="slide-main">
                <img src={current.image} alt={current.title} />
                <div className="slide-info">
                  <p>
                    {current.number} <span className="line" /> {current.room}
                  </p>
                  <h3>{current.title}</h3>
                </div>
                <Link to="/shop" className="slide-go" aria-label="Go to shop">
                  <PiArrowRight />
                </Link>
              </div>

              <div className="slide-rest">
                {ordered.slice(1).map((slide) => (
                  <img key={slide.id} src={slide.image} alt={slide.title} />
                ))}
                <button type="button" className="slide-next" onClick={next} aria-label="Next slide">
                  <PiCaretRight />
                </button>
              </div>

              <div className="slide-dots">
                {inspirationSlides.map((slide, i) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={i === active ? 'active' : ''}
                    onClick={() => setActive(i)}
                    aria-label={`Show slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inspiration;
