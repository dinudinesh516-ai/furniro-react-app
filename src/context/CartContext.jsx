import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext(null);

const STORAGE_KEY = 'furniro-cart';

const loadCart = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
};

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(loadCart);
  const [showCart, setShowCart] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [compareList, setCompareList] = useState([]);

  // Persist cart whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      /* storage unavailable – ignore */
    }
  }, [cartItems]);

  const addToCart = (product, qty = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item,
        );
      }
      return [
        ...prev,
        { id: product.id, title: product.title, image: product.image, price: product.price, qty },
      ];
    });
    setShowCart(true);
  };

  const updateQty = (id, qty) => {
    const safeQty = Math.max(1, Number(qty) || 1);
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, qty: safeQty } : item)));
  };

  const removeFromCart = (id) => setCartItems((prev) => prev.filter((item) => item.id !== id));

  const clearCart = () => setCartItems([]);

  const toggleWishlist = (id) =>
    setWishlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const addToCompare = (product) =>
    setCompareList((prev) =>
      prev.some((p) => p.id === product.id) ? prev : [...prev, product].slice(-1),
    );

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const value = {
    cartItems,
    addToCart,
    updateQty,
    removeFromCart,
    clearCart,
    subtotal,
    cartCount,
    showCart,
    openCart: () => setShowCart(true),
    closeCart: () => setShowCart(false),
    wishlist,
    toggleWishlist,
    compareList,
    addToCompare,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
