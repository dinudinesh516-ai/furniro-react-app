import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CartSidebar from '../product/CartSidebar';

function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on every page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartSidebar />
    </>
  );
}

export default Layout;
