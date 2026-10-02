import { useEffect, useState } from 'react';
import {
  API_URL,
  designProducts,
  fallbackApiData,
  normalizeApiProduct,
} from '../data/products';

/**
 * Fetches furniture products from DummyJSON with useEffect.
 * Returns API products first, followed by the products from the design,
 * so every grid in the app has enough cards to render with .map().
 */
export default function useProducts() {
  const [apiProducts, setApiProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL, { signal: controller.signal });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const data = await res.json();
        setApiProducts(data.products.map(normalizeApiProduct));
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') return;
        // Keep the UI working even when offline
        setApiProducts(fallbackApiData.map(normalizeApiProduct));
        setError(err.message);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    fetchProducts();
    return () => controller.abort(); // cleanup when component unmounts
  }, []);

  const products = [...apiProducts, ...designProducts];

  return { products, apiProducts, loading, error };
}
