"use client";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Stillyouneed from '../components/Stillyouneed';
import { PiCheckSquareOffset } from "react-icons/pi";
import Link from 'next/link';

const Page = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Burger", price: 35, quantity: 0, total: 0, image: "/pictures/product_img.png" },
    { id: 2, name: "Fresh Lime", price: 25, quantity: 0, total: 0, image: "/pictures/product_img (1).png" },
    { id: 3, name: "Pizza", price: 15, quantity: 0, total: 0, image: "/pictures/product_img (2).png" },
    { id: 4, name: "Muffin", price: 45, quantity: 0, total: 0, image: "/pictures/product_img4.png" },
    { id: 5, name: "Cheese", price: 15, quantity: 0, total: 0, image: "/pictures/product_img (5).png" },
  ]);

  const increment = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1, total: (product.quantity + 1) * product.price }
          : product
      )
    );
  };

  const decrement = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1, total: (product.quantity - 1) * product.price }
          : product
      )
    );
  };

  const removeProduct = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: 0, total: 0 } : product
      )
    );
  };

  const cartSubtotal = products.reduce((total, product) => total + product.total, 0);
  const shippingCharge = cartSubtotal > 0 ? 20 : 0; // Example shipping charge condition
  const totalAmount = cartSubtotal + shippingCharge;

  return (
    <div>
      <Navbar />
      <div className="relative">
        <Image src="/pictures/ourmenu.png" alt="menu" width={1920} height={550} className="w-full object-cover" />
        <div className="absolute inset-0 flex justify-center items-center">
          <Image src="/pictures/shoppingcart.png" alt="ourmenu" width={160} height={104} className="max-w-full h-auto" />
        </div>
      </div>

      <div className="p-4 sm:p-8 lg:p-24 my-5">
        <div className="flex flex-col space-y-4 lg:space-y-8">
          <div className="hidden lg:grid grid-cols-5 gap-4 text-center">
            <h1 className="text-[#333333] font-bold text-[16px] sm:text-[18px] leading-7 -ml-40">Product</h1>
            <h1 className="text-[#333333] font-bold text-[16px] sm:text-[18px] leading-7">Price</h1>
            <h1 className="text-[#333333] font-bold text-[16px] sm:text-[18px] leading-7">Quantity</h1>
            <h1 className="text-[#333333] font-bold text-[16px] sm:text-[18px] leading-7">Total</h1>
            <h1 className="text-[#333333] font-bold text-[16px] sm:text-[18px] leading-7">Remove</h1>
          </div>

          {products.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center text-center my-4"
            >
              <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-4">
                <Image src={product.image} alt={product.name} width={93} height={97} />
                <div className="flex flex-col items-center lg:items-start space-y-1">
                  <p className="text-[#333333] font-bold text-[16px] sm:text-[18px]">{product.name}</p>
                  <div className="flex flex-row items-center space-x-1">
                    {Array(3)
                      .fill(0)
                      .map((_, index) => (
                        <span key={index} className="text-[#FF9F0D] text-base">★</span>
                      ))}
                    <span className="text-gray-300 text-sm">★</span>
                    <span className="text-gray-300 text-sm">★</span>
                  </div>
                </div>
              </div>

              <p className="text-[#333333] font-bold text-[16px] sm:text-[18px] lg:text-center">${product.price.toFixed(2)}</p>

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

              <p className="text-[#333333] font-bold text-[16px] sm:text-[18px]">${product.total.toFixed(2)}</p>

              <RxCross1
                className="w-[20px] h-[20px] mx-auto hover:text-[#FF9F0D] cursor-pointer"
                onClick={() => removeProduct(product.id)}
              />
            </div>
          ))}
        </div>
        <hr />
      </div>
      <br />

      <div className="flex flex-col lg:flex-row justify-between items-start lg:space-x-6 space-y-6 lg:space-y-0 mx-auto max-w-5xl my-16 mb-32">
        <div className="p-6 border border-gray-300 rounded-lg w-full lg:w-1/2">
          <h1 className="text-[#333333] font-bold text-[32px] leading-10">Coupon Code</h1>
          <p className="font-normal text-[18px] leading-7 text-[#828282] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non.
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <input
              type="text"
              placeholder="Enter your code"
              className="border border-gray-400 rounded-md px-4 py-2 text-[16px] text-[#333333] w-full lg:w-3/4 focus:outline-none"
            />
            <button className="bg-[#FF9F0D] text-white font-bold px-6 py-2 rounded-md hover:bg-[#e8900d]">
              Apply
            </button>
          </div>
        </div>

        <div className="border border-gray-300 rounded-lg p-6 w-full lg:w-1/2 relative">
          <h1 className="text-[#333333] font-bold text-[32px] leading-10 absolute top-[-30px] bg-white px-2">
            Total Bill
          </h1>
          <div className="space-y-4 mt-6">
            <div className="flex justify-between">
              <p className="font-bold text-[20px] leading-7">Cart Subtotal</p>
              <p className="font-bold text-[20px] leading-7">${cartSubtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[18px] leading-7">Shipping Charge</p>
              <p className="text-[18px] leading-7">${shippingCharge.toFixed(2)}</p>
            </div>
            <hr className="border-gray-300 my-4" />
            <div className="flex justify-between">
              <p className="font-bold text-[20px] leading-7">Total Amount</p>
              <p className="font-bold text-[20px] leading-7">${totalAmount.toFixed(2)}</p>
            </div>
          </div>

          <Link href="/Checkout">
          <button className="bg-[#FF9F0D] text-white font-bold w-full py-4 mt-5 -ml-5 hover:bg-[#e8900d] absolute bottom-[-80px] flex items-center justify-center gap-6 text-lg">
            Proceed to Checkout <PiCheckSquareOffset className="font-extrabold text-xl" />
          </button></Link>
          
        </div>
      </div>

      <Stillyouneed />
      <Footer />
    </div>
  );
};

export default Page;
