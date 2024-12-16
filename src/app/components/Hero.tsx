"use client";
import Image from "next/image";
import { FiSearch,} from "react-icons/fi";
import { Great_Vibes } from "@next/font/google";
import Link from "next/link";
import React, { useState } from "react";
import {FiMenu } from "react-icons/fi";




const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  const toggleShopDropdown = () => {
    setIsShopOpen((prev) => !prev);
  };
  
  const togglePagesDropdown = () => {
    setIsPagesOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-auto bg-[url('/pictures/backgroundimage.png')] bg-cover bg-center">
      <div className="w-full h-full bg-black/90 flex">
        {/* Very Left Section */}
        <div className="hidden md:flex flex-col items-center w-[80px] bg-transparent mt-44 gap-9">
          {/* First Vertical Line */}
          <div className="w-px h-40 bg-[#FFFFFF] opacity-50"></div>

          {/* Social Icons */}
          <div className="flex flex-col items-center gap-4 my-4">
            <a className="text-white hover:text-[#FF9F0D] cursor-pointer">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="text-white hover:text-[#FF9F0D] cursor-pointer">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="text-white hover:text-[#FF9F0D] cursor-pointer">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
          </div>

          {/* Second Vertical Line */}
          <div className="w-px h-40 bg-[#FFFFFF] opacity-50"></div>
        </div>

        {/* Main Content */}
        <div className="flex-grow flex flex-col items-center pt-10 px-4 md:px-10">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <h1 className="font-bold text-[24px] leading-8 text-[#FF9F0D]">
              Food
            </h1>
            <span className="font-bold text-[24px] leading-8 text-[#FFFFFF]">
              tuck
            </span>
          </div>










          {/* Navbar */}
          <div className="w-full max-w-6xl mt-4">
            <div className="flex justify-between items-center">
              <div className="text-[#FFFFFF] text-xl md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="hover:text-[#FF9F0D] focus:outline-none"
                >
                  <FiMenu />
                </button>
              </div>
             <ul className="hidden md:flex space-x-6 text-[#FFFFFF] relative">
  <li className="hover:text-[#FF9F0D]">
    <Link href="/">Home</Link>
  </li>
  <li className="hover:text-[#FF9F0D]">
    <Link href="/Menu">Menu</Link>
  </li>
  <li className="hover:text-[#FF9F0D]">
    <Link href="/Blogs">Blog</Link>
  </li>





{/* Pages  */}



  

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
        <Link href="/ShopDetails">Shop Details</Link>
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


              {/* Search Bar */}
              <div className="hidden md:flex relative items-center w-80 bg-transparent rounded-full overflow-hidden border border-[#FF9F0D]">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-2 px-4 bg-transparent text-white placeholder-white focus:outline-none"
                />
                <FiSearch className="absolute right-3 text-white text-lg hover:text-[#FF9F0D] cursor-pointer" />
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <ul className="flex flex-col mt-4 space-y-2 text-[#FFFFFF] bg-black/90 p-4 rounded-lg md:hidden">
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
    className="flex w-full hover:text-[#FF9F0D] focus:outline-none"
  >
    Pages
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`ml-0 mt-1 w-4 h-4 transition-transform ${
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
    <ul className="absolute top-full left-0 ml-14 bg-[#FFFFFF] text-[#000000] space-y-2 py-2 shadow-lg rounded z-50">
      <li className="hover:bg-[#FF9F0D] hover:text-[#FFFFFF] px-4">
        <Link href="/Ourchefs">Ourchefs</Link>
      </li>
      <li className="hover:bg-[#FF9F0D] hover:text-[#FFFFFF] px-4">
        <Link href="/Signin">Signin</Link>
      </li>
      <li className="hover:bg-[#FF9F0D] hover:text-[#FFFFFF] px-4">
        <Link href="/Signup">Signup</Link>
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
    className="flex w-full hover:text-[#FF9F0D] focus:outline-none"
  >
    Shop
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`ml-0 mt-1 w-4 h-4 transition-transform ${
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
    <ul className="absolute top-full left-0 ml-14 bg-[#FFFFFF] text-[#000000] space-y-2 py-2 shadow-lg rounded z-50">
      <li className="hover:bg-[#FF9F0D] hover:text-[#FFFFFF] px-4">
        <Link href="/ShopList">Shop List</Link>
      </li>
      <li className="hover:bg-[#FF9F0D] hover:text-[#FFFFFF] px-4">
        <Link href="/ShopDetails">Shop Details</Link>
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
            )}
          </div>






          {/* Main Content */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mt-16">
            {/* Left Side */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1
                className={`${greatVibes.className} font-normal text-[28px] md:text-[32px] leading-10 text-[#FF9F0D]`}
              >
                Its Quick & amusing!
              </h1>
              <div className="flex flex-col md:flex-row mt-4">
                <span className="text-[#FF9F0D] font-bold text-[48px] md:text-[60px] leading-[54px] md:leading-[68px]">
                  The&nbsp;
                </span>
                <span className="font-bold text-[48px] md:text-[60px] leading-[54px] md:leading-[68px] text-[#FFFFFF]">
                  Art of speed
                </span>
              </div>
              <p className="font-bold text-[48px] md:text-[60px] leading-[54px] md:leading-[68px] text-[#FFFFFF]">
                food Quality
              </p>
              <p className="text-[#FFFFFF] font-normal text-[14px] md:text-[16px] leading-6 mt-4 md:mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                sed pharetra dictum neque massa congue
              </p>
             <Link href="/Menu">
             <button className="w-[160px] md:w-[190px] h-[50px] md:h-[60px] mt-6 md:mt-8 bg-[#FF9F0D] text-white rounded-3xl hover:bg-[#ff9e0da9]">
                See Menu
              </button></Link>
              
              

            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
              <Image
                src="/pictures/heroimg.png"
                alt="heroimg"
                width={877.8}
                height={670}
                className="w-full h-auto max-w-md md:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
