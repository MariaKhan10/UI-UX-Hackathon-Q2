"use client"
import React, { createContext, useState, ReactNode, useEffect } from "react";

// Define the types for your cart item
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartItem = Product & { quantity: number; total: number };

// Define the context type
type CartContextType = {
  cartItems: CartItem[];
  cartSubtotal: number;
  shippingCharge: number;
  totalAmount: number;
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  updateCartItem: (productId: number, quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartSubtotal, setCartSubtotal] = useState<number>(0);
  const [shippingCharge, setShippingCharge] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const addToCart = (product: Product) => {
    const cartItem: CartItem = {
      ...product,
      quantity: 1,
      total: product.price, // Initialize total when the item is added
    };
    setCartItems((prevItems) => [...prevItems, cartItem]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const updateCartItem = (productId: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity, total: item.price * quantity } : item
      )
    );
  };

  // Calculate cartSubtotal, shippingCharge, and totalAmount
  useEffect(() => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.total, 0);
    setCartSubtotal(subtotal);

    // Example shipping charge logic (could be more complex based on your requirements)
    const shipping = subtotal > 50 ? 10 : 5; // Shipping charge based on subtotal
    setShippingCharge(shipping);

    const total = subtotal + shipping;
    setTotalAmount(total);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartSubtotal,
        shippingCharge,
        totalAmount,
        addToCart,
        removeFromCart,
        clearCart,
        updateCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
