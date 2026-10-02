import { useState } from 'react';
import { Link } from 'react-router-dom';
import { footerLinks } from '../../data/homeData';

function FooterColumn({ title, links }) {
  return (
    <div className="col-6 col-md-3 col-lg-2">
      <h6 className="footer-heading">{title}</h6>
      <ul className="list-unstyled footer-links">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-lg-4">
            <h4 className="footer-brand">Funiro.</h4>
            <p className="footer-address">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>
          <FooterColumn title="Links" links={footerLinks.links} />
          <FooterColumn title="Help" links={footerLinks.help} />
          <div className="col-12 col-md-6 col-lg-4">
            <h6 className="footer-heading">Newsletter</h6>
            <form className="newsletter d-flex align-items-end gap-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
              <button type="submit">SUBSCRIBE</button>
            </form>
            {subscribed && <small className="text-success d-block mt-2">Thanks for subscribing!</small>}
          </div>
        </div>
        <div className="footer-bottom">2023 furino. All rights reverved</div>
      </div>
    </footer>
  );
}

export default Footer;
