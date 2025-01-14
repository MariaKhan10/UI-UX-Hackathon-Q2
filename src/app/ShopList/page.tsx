"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Stillyouneed from "../components/Stillyouneed";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const ShopList = () => {
 
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products") // Adjust API route if needed
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);





type CartItem = Product & { quantity: number; total: number };

const handleAddToCart = (product: Product) => {
  const cartItem: CartItem = {
    ...product,
    quantity: 1,
    total: product.price, // Calculate total
  };

  console.log("Adding to cart:", cartItem); // Log for debugging
  addToCart(cartItem); // Pass the cartItem to addToCart
  
  // Show toast notification
  toast.success(`${product.name} added to cart!`, {
    position: "top-right",
    autoClose: 2000, // Duration in ms
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
  

  return (
    <div>
      <Navbar />
      <div className="relative">
        <Image
          src="/pictures/ourmenu.png"
          alt="menu"
          width={1920}
          height={410}
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 my-6 px-4">
        <div className="flex items-center gap-2">
          <label htmlFor="sort-by" className="text-sm font-medium text-gray-700">
            Sort By:
          </label>
          <select
            id="sort-by"
            className="block w-48 bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            defaultValue="newest"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rating</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="show" className="text-sm font-medium text-gray-700">
            Show:
          </label>
          <select
            id="show"
            className="block w-48 bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            defaultValue="default"
          >
            <option value="default">Default</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-24 mt-20 mb-20">
        {products.map((product) => (
          <div key={product.id} className="rounded shadow-lg p-4 bg-white">
            <Image
              src={product.image}
              alt={product.name}
              width={312}
              height={330}
              className="rounded cursor-pointer"
            />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">Price: Rs {product.price}</p>
            <div className="flex gap-4 mt-4">
              <Link
                href={`/shop/${product.id}`}
                className="bg-indigo-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                View Details
              </Link>
              <button
                onClick={() => handleAddToCart(product)}
                className="flex items-center text-center justify-center m-auto bg-[#ff6a25] text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                 <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-5 h-5 mr-2"
    >
      <path d="M16 20a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-8 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm1.26-4h10.77a3.47 3.47 0 0 0 3.39-2.77l1.38-6A1 1 0 0 0 23 7H6.31L5.27 3.41A1 1 0 0 0 4.32 3H1a1 1 0 0 0 0 2h2.31l3.6 10.59a1 1 0 0 0 .95.68H18a1 1 0 1 0 0-2H8.46l-.27-.75ZM18.42 12H7.74L6.28 8h15.07l-1.38 6a1.47 1.47 0 0 1-1.45 1Z" />
    </svg>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer /> {/* Ensure this is rendered */}
      <Stillyouneed />
      <Footer />
    </div>
  );
};

export default ShopList;
