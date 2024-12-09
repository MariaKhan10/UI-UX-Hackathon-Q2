"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FiUser, FiMenu } from "react-icons/fi";
import { PiTote } from "react-icons/pi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black/100 w-full h-[80px] flex items-center px-6">
      {/* Left Content */}
      <div className="flex items-center ">
        <h1 className="font-bold text-[24px] leading-8 text-[#FF9F0D]">
          Food
        </h1>
        <span className="font-bold text-[24px] leading-8 text-[#FFFFFF] ml-1">
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
        </div>

        {/* Menu Items */}
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } flex-col absolute top-[80px] left-0 w-full bg-black/90 text-center space-y-4 py-4 text-[#FFFFFF] md:relative md:top-0 md:w-auto md:flex md:flex-row md:space-x-6 md:space-y-0 md:justify-center`}
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
      </div>

      {/* Right Icons */}
      <div className="hidden md:flex space-x-4 cursor-pointer">
        <HiMiniMagnifyingGlass className="text-white text-[20px] hover:text-[#FF9F0D]" />
        <FiUser className="text-white text-[20px] hover:text-[#FF9F0D]" />
        <PiTote className="text-white text-[20px] hover:text-[#FF9F0D]" />
      </div>
    </div>
  );
};

export default Navbar;
