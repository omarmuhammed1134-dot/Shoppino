import React, { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const addToCart = (product) => {
    setCartItems((currItems) => {
      const existingItem = currItems.find((item) => item.id === product.id);
      if (existingItem) {
        return currItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...currItems, { ...product, quantity: 1 }];
      }
    });
  };
  const removeFromCart = (id) => {
    setCartItems((currItems) =>
      currItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const deleteFromCart = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };
  const cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getItemQuantity,
        addToCart,
        removeFromCart,
        deleteFromCart,
        cartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
