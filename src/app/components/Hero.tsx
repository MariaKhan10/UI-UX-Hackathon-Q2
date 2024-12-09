"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiSearch, FiMenu } from "react-icons/fi";
import { Great_Vibes } from "@next/font/google";
import Link from "next/link";

const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-auto bg-[url('/pictures/backgroundimage.png')] bg-cover bg-center">
      <div className="w-full h-full bg-black/90 flex flex-col items-center pt-10">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <h1 className="font-bold text-[24px] leading-8 text-[#FF9F0D]">Food</h1>
          <span className="font-bold text-[24px] leading-8 text-[#FFFFFF]">
            tuck
          </span>
        </div>

        {/* Navbar */}
        <div className="w-full max-w-6xl mt-4 px-4 md:px-0">
          <div className="flex justify-between items-center">
            <div className="text-[#FFFFFF] text-xl md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:text-[#FF9F0D] focus:outline-none"
              >
                <FiMenu />
              </button>
            </div>
            <ul className="hidden md:flex space-x-6 text-[#FFFFFF]">
              <li className="hover:text-[#FF9F0D]">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-[#FF9F0D]">
                <Link href="/Menu">Menu</Link>
              </li>
              <li className="hover:text-[#FF9F0D]">
                <Link href="/Blogs">Blog</Link>
              </li>
              <li className="hover:text-[#FF9F0D]">
                <Link href="/Pages">Pages</Link>
              </li>
              <li className="hover:text-[#FF9F0D]">
                <Link href="/About">About</Link>
              </li>
              <li className="hover:text-[#FF9F0D]">
                <Link href="/Shop">Shop</Link>
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
              <li className="hover:text-[#FF9F0D]">
                <Link href="/Pages">Pages</Link>
              </li>
              <li className="hover:text-[#FF9F0D]">
                <Link href="/About">About</Link>
              </li>
              <li className="hover:text-[#FF9F0D]">
                <Link href="/Shop">Shop</Link>
              </li>
              <li className="hover:text-[#FF9F0D]">
                <Link href="/Contact">Contact</Link>
              </li>
            </ul>
          )}
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mt-16 px-4 md:px-0">
          {/* Left Side */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1
              className={`${greatVibes.className} font-normal text-[28px] md:text-[32px] leading-10 text-[#FF9F0D]`}
            >
              Its Quick & amusing!
            </h1>
            <div className="flex flex-col md:flex-row mt-4">
              <span className="text-[#FF9F0D] font-bold text-[48px] md:text-[60px] leading-[54px] md:leading-[68px]">
                The
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
            <button className="w-[160px] md:w-[190px] h-[50px] md:h-[60px] mt-6 md:mt-8 bg-[#FF9F0D] text-white rounded-3xl">
              See Menu
            </button>
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
  );
};

export default Hero;
