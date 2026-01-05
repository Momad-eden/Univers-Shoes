import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ➕ Ajouter au panier (id + size)
  const addToCart = (product) => {
    const existing = cart.find(
      (item) =>
        item.id === product.id &&
        item.size === product.size
    );

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id &&
          item.size === product.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        { ...product, quantity: 1 }
      ]);
    }
  };

  // ➖ Diminuer quantité (id + size)
  const decreaseQty = (id, size) => {
    setCart(
      cart
        .map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // 🗑️ Supprimer un produit précis (id + size)
  const removeFromCart = (id, size) => {
    setCart(
      cart.filter(
        (item) =>
          !(
            item.id === id &&
            item.size === size
          )
      )
    );
  };

  // 🧹 Vider le panier
  const clearCart = () => {
    setCart([]);
  };

  // 💰 Total
  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseQty,
        removeFromCart,
        clearCart,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
