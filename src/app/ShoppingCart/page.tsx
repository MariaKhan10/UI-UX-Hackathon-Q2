"use client"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import Stillyouneed from "../components/Stillyouneed";
import { PiCheckSquareOffset } from "react-icons/pi";
import Link from "next/link";
import { useCart } from "../context/CartContext";

// Define the type for Product
type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

// Define the type for CartItem
type CartItem = Product & {
  total: number;
};

const ShoppingCart = () => {
  const { cartItems, updateCartItem, removeFromCart } = useCart();
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(10); // Default shipping charge
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Calculate subtotal and total amount whenever the cart items change
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const total = subtotal + shippingCharge;

    setCartSubtotal(subtotal);
    setTotalAmount(total);
  }, [cartItems, shippingCharge]);

  const increment = (id: number) => {
    const product = cartItems.find((item) => item.id === id);
    if (product) {
      updateCartItem(id, product.quantity + 1);
    }
  };

  const decrement = (id: number) => {
    const product = cartItems.find((item) => item.id === id);
    if (product && product.quantity > 1) {
      updateCartItem(id, product.quantity - 1);
    }
  };

  return (
    <div className="shopping-cart-container">
    <Navbar />
    <div className="relative">
      <Image
        src="/pictures/ourmenu.png"
        alt="menu"
        width={1920}
        height={550}
        className="w-full object-cover"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src="/pictures/shoppingcart.png"
          alt="shopping cart"
          width={160}
          height={104}
          className="max-w-full h-auto"
        />
      </div>
    </div>
  
    <div className="p-12 sm:p-6 lg:p-16 my-5">
  <div className="hidden lg:grid grid-cols-5 gap-6 items-center text-center">
    <h1 className="text-[#333333] font-bold text-[18px] leading-7">Product</h1>
    <h1 className="text-[#333333] font-bold text-[18px] leading-7">Price</h1>
    <h1 className="text-[#333333] font-bold text-[18px] leading-7">Quantity</h1>
    <h1 className="text-[#333333] font-bold text-[18px] leading-7">Total</h1>
    <h1 className="text-[#333333] font-bold text-[18px] leading-7">Remove</h1>
  </div>

  {cartItems.map((item) => (
    <div
      key={item.id}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-center text-center mt-4 lg:mt-6 p-4 border border-gray-200 rounded-lg"
    >
      <div className="flex flex-col lg:flex-row items-center space-x-4">
        <Image src={item.image} alt={item.name} width={70} height={70} className="rounded" />
        <p className="text-[#333333] font-bold text-[16px] sm:text-[18px]">{item.name}</p>
      </div>

      <p className="text-[#333333] font-bold text-[16px] sm:text-[18px]">${item.price.toFixed(2)}</p>

      <div className="flex justify-center">
        <div className="flex flex-row items-center border border-gray-300 rounded-full p-1 w-fit space-x-3">
          <button
            onClick={() => decrement(item.id)}
            className="text-base font-bold px-3 py-1 hover:bg-gray-100 focus:outline-none"
          >
            -
          </button>
          <span className="text-base font-semibold">{item.quantity}</span>
          <button
            onClick={() => increment(item.id)}
            className="text-base font-bold px-3 py-1 hover:bg-gray-100 focus:outline-none"
          >
            +
          </button>
        </div>
      </div>

      <p className="text-[#333333] font-bold text-[16px] sm:text-[18px]">${(item.price * item.quantity).toFixed(2)}</p>

      <RxCross1
        className="cursor-pointer text-2xl text-[#FF9F0D] hover:text-red-600 mx-auto"
        onClick={() => removeFromCart(item.id)}
      />
    </div>
  ))}
</div>

  
    {/* Total Bill Section */}
    <div className="flex flex-col lg:flex-row justify-between items-start lg:space-x-6 space-y-6 lg:space-y-0 mx-auto max-w-5xl my-16 mb-32">
      <div className="p-6 border border-gray-300 rounded-lg w-full lg:w-1/2">
        <h1 className="text-[#333333] font-bold text-[24px] sm:text-[32px]">Coupon Code</h1>
        <p className="text-[#828282] mt-2 text-[14px] sm:text-[18px]">
          Enter your coupon code for discounts.
        </p>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
          <input
            type="text"
            placeholder="Enter your code"
            className="border border-gray-400 rounded-md px-4 py-2 text-[16px] w-full sm:w-auto"
          />
          <button className="bg-[#FF9F0D] text-white font-bold px-6 py-2 rounded-md hover:bg-[#e8900d]">
            Apply
          </button>
        </div>
      </div>
  
      <div className="p-6 border border-gray-300 rounded-lg w-full lg:w-1/2">
        <h1 className="text-[#333333] font-bold text-[24px] sm:text-[32px]">Total Bill</h1>
        <div className="mt-4 space-y-4">
          <div className="flex justify-between">
            <p className="font-bold text-[16px] sm:text-[20px]">Cart Subtotal</p>
            <p className="font-bold text-[16px] sm:text-[20px]">${cartSubtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[14px] sm:text-[18px]">Shipping Charge</p>
            <p className="text-[14px] sm:text-[18px]">${shippingCharge.toFixed(2)}</p>
          </div>
          <hr className="border-gray-300" />
          <div className="flex justify-between">
            <p className="font-bold text-[16px] sm:text-[20px]">Total Amount</p>
            <p className="font-bold text-[16px] sm:text-[20px]">${totalAmount.toFixed(2)}</p>
          </div>
        </div>
  
        <Link href="/Checkout">
          <button
            className={`bg-[#FF9F0D] text-white font-bold w-full py-3 mt-5 hover:bg-[#f58e4a] ${
              cartSubtotal === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={cartSubtotal === 0}
          >
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  
    <Stillyouneed />
    <Footer />
  </div>
  
  );
};

const ProductRow = ({
  product,
  increment,
  decrement,
  removeProduct,
}: {
  product: CartItem;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  removeProduct: (id: number) => void;
}) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-32 items-center text-center my-4">
    <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-4">
      <Image src={product.image} alt={product.name} width={93} height={97} />
      <div className="flex flex-col items-center lg:items-start space-y-1">
        <p className="text-[#333333] font-bold text-[16px] sm:text-[18px]">
          {product.name}
        </p>
        <div className="flex flex-row items-center space-x-1">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <span key={index} className="text-[#FF9F0D] text-base">
                ★
              </span>
            ))}
          <span className="text-gray-300 text-sm">★</span>
          <span className="text-gray-300 text-sm">★</span>
        </div>
      </div>
    </div>

    <p className="text-[#333333] font-bold text-[16px] sm:text-[18px] lg:text-center">
      ${product.price.toFixed(2)}
    </p>

    <div className="flex justify-center">
      <div className="flex flex-row items-center border border-gray-400 rounded-full p-1 w-fit space-x-4">
        <button
          onClick={() => decrement(product.id)}
          className="text-base font-bold px-4 py-1 hover:bg-gray-200 focus:outline-none"
        >
          -
        </button>
        <span className="text-base font-semibold">{product.quantity}</span>
        <button
          onClick={() => increment(product.id)}
          className="text-base font-bold px-4 py-1 hover:bg-gray-200 focus:outline-none"
        >
          +
        </button>
      </div>
    </div>

    <p className="text-[#333333] font-bold text-[16px] sm:text-[18px]">
      ${product.total.toFixed(2)}
    </p>

    <RxCross1
      className="cursor-pointer text-xl text-[#FF9F0D] hover:text-red-600"
      onClick={() => removeProduct(product.id)}
    />
  </div>
);

export default ShoppingCart;
