import Link from 'next/link';
import React from 'react';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";
import { PiTote } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="bg-black/90 w-full h-[80px] flex items-center px-6">
      {/* Left Content */}
      <div className="flex items-center">
        <h1 className="font-bold text-[24px] leading-8 text-[#FF9F0D]">
          Food
        </h1>
        <span className="font-bold text-[24px] leading-8 text-[#FFFFFF] ml-1">
          tuck
        </span>
      </div>

      {/* Center Menu */}
      <ul className="flex-grow flex justify-center space-x-6 text-[#FFFFFF] ">
        <li className='hover:text-[#FF9F0D] '>
          <Link href="/">Home</Link>
        </li>
        <li className='hover:text-[#FF9F0D] '>
          <Link href="/Menu">Menu</Link>
        </li>
        <li className='hover:text-[#FF9F0D] '>
          <Link href="/Blogs">Blog</Link>
        </li>
        <li className='hover:text-[#FF9F0D] '>
          <Link href="/Pages">Pages</Link>
        </li>
        <li className='hover:text-[#FF9F0D] '>
          <Link href="/About">About</Link>
        </li>
        <li className='hover:text-[#FF9F0D] '>
          <Link href="/Shop">Shop</Link>
        </li>
        <li className='hover:text-[#FF9F0D] '>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>

      {/* Right Icons */}
      <div className="flex space-x-4 cursor-pointer">
        <HiMiniMagnifyingGlass className="text-white text-[20px] hover:text-[#FF9F0D] '" />
        <FiUser className="text-white text-[20px] hover:text-[#FF9F0D] '" />
        <PiTote className="text-white text-[20px] hover:text-[#FF9F0D] '" />
      </div>
    </div>
  );
};

export default Navbar;
