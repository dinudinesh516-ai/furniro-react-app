import HeroSection from '../components/home/HeroSection';
import BrowseRange from '../components/home/BrowseRange';
import OurProducts from '../components/home/OurProducts';
import Inspiration from '../components/home/Inspiration';
import FurnitureGallery from '../components/home/FurnitureGallery';
import useProducts from '../hooks/useProducts';

function Home() {
  // useEffect inside useProducts fetches https://dummyjson.com/products/category/furniture
  const { products, loading } = useProducts();

  return (
    <>
      <HeroSection />
      <BrowseRange />
      <OurProducts products={products} loading={loading} />
      <Inspiration />
      <FurnitureGallery />
    </>
  );
}

export default Home;
