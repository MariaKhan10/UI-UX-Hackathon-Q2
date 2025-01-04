"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FiUser, FiMenu } from "react-icons/fi";
import { PiTote } from "react-icons/pi";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  // Calculate total items in the cart
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false); // State for "Shop" dropdown
   const [isPagesOpen, setIsPagesOpen] = useState(false);

  const toggleShopDropdown = () => {
    setIsShopOpen(!isShopOpen);
  };

  const togglePagesDropdown = () => {
    setIsPagesOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-[80px] flex items-center px-6 md:h-[80px] sticky top-0 bg-black z-50 shadow-lg ">
      {/* Left Content */}
      <div className="flex items-center">
        <h1 className="font-bold text-[24px] leading-8 text-[#FF9F0D]">
          Food
        </h1>
        <span className="font-bold text-[24px] leading-8 text-[#FFFFFF]">
          tuck
        </span>
      </div>

      {/* Center Menu */}
      <div className="flex-grow">
        {/* Hamburger Menu for Small Screens */}
        <div className="flex justify-end md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-[24px] hover:text-[#FF9F0D] focus:outline-none"
          >
            <FiMenu />
          </button>
          <div className="relative inline-block">
        <Link href="/ShoppingCart">
          <PiTote className="text-white text-[22px] hover:text-[#FF9F0D] cursor-pointer ml-3 " />
        </Link>
        {totalItems > 0 && (
          <span className="absolute top-[-8px] right-[-8px] bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </div>
        </div>

        {/* Menu Items */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col absolute top-[80px] left-0 w-full bg-black/90 text-center space-y-4 py-4 text-[#FFFFFF] md:relative md:top-0 md:w-auto md:flex md:flex-row md:space-x-6 md:space-y-0 md:justify-center z-50`}
        >
          <li className="hover:text-[#FF9F0D]">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-[#FF9F0D]">
            <Link href="/Menu">Menu</Link>
          </li>
          <li className="hover:text-[#FF9F0D]">
            <Link href="/Blogs">Blog</Link>
          </li>




















          <li className="hover:text-[#FF9F0D] relative">
  <button
    onClick={(e) => {
      e.stopPropagation(); // Prevent closing when clicking the button
      togglePagesDropdown();
    }}
    className="flex justify-center items-center w-full hover:text-[#FF9F0D] focus:outline-none"
  >
    Pages
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`ml-2 w-4 h-4 transition-transform ${
        isPagesOpen ? "rotate-180" : "rotate-0"
      }`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 011.414 1.415l-4 4.667a1 1 0 01-1.414 0l-4-4.667a1 1 0 010-1.415z"
        clipRule="evenodd"
      />
    </svg>
  </button>
  {isPagesOpen && (
    <ul className="absolute top-full left-1/2 transform -translate-x-1/2 bg-[#FFFFFF] text-[#000000] mt-1 space-y-2 py-2 shadow-lg rounded z-50">
      <li className="hover:bg-[#FF9F0D] hover:text-[#FFFFFF] px-4">
        <Link href="/Ourchefs">Our Chefs</Link>
      </li>
      <li className="hover:bg-[#FF9F0D] hover:text-[#FFFFFF] px-4">
        <Link href="/Signin">Sign In</Link>
      </li>
      <li className="hover:bg-[#FF9F0D] hover:text-[#FFFFFF] px-4">
        <Link href="/Signup">Sign Up</Link>
      </li>
      <li className="hover:bg-[#FF9F0D] hover:text-[#FFFFFF] px-4">
        <Link href="/Checkout">Checkout</Link>
      </li>
      <li className="hover:bg-[#FF9F0D] hover:text-[#FFFFFF] px-4">
        <Link href="/BlogDetails">BlogDetails</Link>
      </li>
      <li className="hover:bg-[#FF9F0D] hover:text-[#FFFFFF] px-4">
        <Link href="/FAQ">FAQ</Link>
      </li>
      <li className="hover:bg-[#FF9F0D] hover:text-[#FFFFFF] px-4">
        <Link href="/404">404</Link>
      </li>
    </ul>
  )}
</li>











































          <li className="hover:text-[#FF9F0D]">
            <Link href="/About">About</Link>
          </li>
          <li className="hover:text-[#FF9F0D] relative">
  <button
    onClick={(e) => {
      e.stopPropagation(); // Prevent closing when clicking the button
      toggleShopDropdown();
    }}
    className="flex justify-center items-center w-full hover:text-[#FF9F0D] focus:outline-none"
  >
    Shop
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`ml-2 w-4 h-4 transition-transform ${
        isShopOpen ? "rotate-180" : "rotate-0"
      }`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 011.414 1.415l-4 4.667a1 1 0 01-1.414 0l-4-4.667a1 1 0 010-1.415z"
        clipRule="evenodd"
      />
    </svg>
  </button>
  {isShopOpen && (
    <ul className="absolute top-full left-1/2 transform -translate-x-1/2 bg-[#FFFFFF] text-[#000000] mt-1 space-y-2 py-2 shadow-lg rounded z-50">
      <li className="hover:bg-[#FF9F0D] hover:text-[#FFFFFF] px-4">
        <Link href="/ShopList">Shop List</Link>
      </li>
      
      <li className="hover:bg-[#FF9F0D] hover:text-[#FFFFFF] px-4">
        <Link href="/ShoppingCart">Shopping Cart</Link>
      </li>
    </ul>
  )}
</li>

          <li className="hover:text-[#FF9F0D]">
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Right Icons */}
      <div className="hidden md:flex space-x-4 cursor-pointer">
        <HiMiniMagnifyingGlass className="text-white text-[20px] hover:text-[#FF9F0D] cursor-pointer" />
        
<Link href="/Signin">
  <FiUser className="text-white text-[20px] hover:text-[#FF9F0D] cursor-pointer" />
</Link>

<div className="relative inline-block">
        <Link href="/ShoppingCart">
          <PiTote className="text-white text-[20px] hover:text-[#FF9F0D] hover:font-bold hover:text-[24px] cursor-pointer transition-all duration-300 ease-in-out" />
        </Link>
        {totalItems > 0 && (
          <span className="absolute top-[-8px] right-[-8px] bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </div>
        
      </div>
    </div>
  );
};

export default Navbar;
