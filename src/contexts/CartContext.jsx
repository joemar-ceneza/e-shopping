import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  // cart state
  const [cart, setCart] = useState([]);

  // derived totals — recomputed on every render, no extra state/effects needed
  const itemAmount = cart.reduce((accumulator, item) => accumulator + item.amount, 0);
  const total = cart.reduce((accumulator, item) => accumulator + item.price * item.amount, 0);

  // add to cart
  const addToCart = (product, id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
  };

  // remove from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      addToCart(cartItem, id);
    }
  };

  // decrease amount — removes the item once its amount would drop below 1
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (!cartItem) return;
    if (cartItem.amount <= 1) {
      removeFromCart(id);
      return;
    }
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, amount: item.amount - 1 } : item
    );
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total }}
    >
      {children}
    </CartContext.Provider>
  );
}
