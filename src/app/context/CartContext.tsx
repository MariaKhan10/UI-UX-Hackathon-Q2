"use client";
import React, { createContext, useState, ReactNode, useEffect } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartItem = Product & { quantity: number; total: number };

type CartContextType = {
  cartItems: CartItem[];
  cartSubtotal: number;
  shippingCharge: number;
  totalAmount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  updateCartItem: (productId: number, quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartSubtotal, setCartSubtotal] = useState<number>(0);
  const [shippingCharge, setShippingCharge] = useState<number>(5); // Default value
  const [totalAmount, setTotalAmount] = useState<number>(5); // Default value

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1, total: item.total + product.price }
            : item
        );
      }
      const cartItem: CartItem = {
        ...product,
        quantity: 1,
        total: product.price,
      };
      return [...prevItems, cartItem];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems"); // Local storage ko bhi clear karen
  };
  
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  
    const subtotal = cartItems.reduce((acc, item) => acc + item.total, 0);
    setCartSubtotal(subtotal);
  
    const shipping = calculateShippingCharge(subtotal);
    setShippingCharge(shipping);
  
    const total = subtotal + shipping;
    setTotalAmount(total);
  }, [cartItems]);
  

  const updateCartItem = (productId: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity, total: item.price * quantity } : item
      )
    );
  };

  const calculateShippingCharge = (subtotal: number): number => {
    return subtotal > 50 ? 10 : 5;
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    const subtotal = cartItems.reduce((acc, item) => acc + item.total, 0);
    setCartSubtotal(subtotal);

    const shipping = calculateShippingCharge(subtotal);
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

export const useCart = () => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
