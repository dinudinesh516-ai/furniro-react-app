import { Link } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner';

function NotFound() {
  return (
    <>
      <PageBanner title="Page Not Found" crumb="404" />
      <div className="container text-center py-5 my-5">
        <p className="text-gray">The page you are looking for doesn&apos;t exist.</p>
        <Link to="/" className="btn-gold-sm">Back Home</Link>
      </div>
    </>
  );
}

export default NotFound;
