const CART_KEY = "cart";

export const getCart = () => JSON.parse(localStorage.getItem(CART_KEY)) || [];

const setCart = (cart) => localStorage.setItem(CART_KEY, JSON.stringify(cart));

export const addToCart = (product) => {
  if (!product?.id) return;
  const cart = getCart();
  const existing = cart.find((p) => p.id === product.id);
  if (existing) existing.qty = (existing.qty || 1) + 1;
  else cart.push({ ...product, qty: 1 });
  setCart(cart);
};

export const removeFromCart = (id) => {
  const cart = getCart().filter((p) => String(p.id) !== String(id));
  setCart(cart);
};

export const updateQty = (id, action) => {
  const cart = getCart().map((p) => {
    if (String(p.id) === String(id)) {
      let qty = p.qty || 1;
      if (action === "increase") qty += 1;
      if (action === "decrease") qty = Math.max(1, qty - 1);
      return { ...p, qty };
    }
    return p;
  });
  setCart(cart);
};

export const clearCart = () => localStorage.removeItem(CART_KEY);
