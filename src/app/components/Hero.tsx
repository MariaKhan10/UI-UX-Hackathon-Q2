import Image from 'next/image';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Great_Vibes } from '@next/font/google';

const greatVibes = Great_Vibes({
  weight: ['400'], // Specify weights if necessary
  subsets: ['latin'], // Specify subsets
  display: 'swap', // Use font-display: swap for better performance
});

const Hero = () => {
  return (
    <div className="w-full h-[950px] bg-[url('/pictures/backgroundimage.png')] bg-cover bg-center">
      <div className="w-full h-full bg-black/90 flex flex-col items-center pt-10">

        {/* Logo */}
        <div className="flex items-center space-x-1">
          <h1 className="font-bold text-[24px] leading-8 text-[#FF9F0D]">Food</h1>
          <span className="font-bold text-[24px] leading-8 text-[#FFFFFF]">tuck</span>
        </div>

        {/* Navbar */}
        <div className="flex justify-between items-center w-full max-w-6xl mt-4">
          {/* Nav Items */}
          <ul className="flex space-x-6 text-[#FFFFFF]">
            <li>Home</li>
            <li>Menu</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>About</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>

          {/* Search Bar */}
          <div className="relative flex items-center w-80 bg-transparent rounded-full overflow-hidden border border-[#FF9F0D]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 bg-transparent text-white placeholder-white focus:outline-none"
            />
            <FiSearch className="absolute right-3 text-white text-lg" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex justify-between items-center w-full max-w-6xl mt-28">
          {/* Left Side */}
          <div className="w-1/2">
            <h1 className={`${greatVibes.className} font-normal text-[32px] leading-10 text-[#FF9F0D]`}>Its Quick & amusing!</h1>
            <div className="flex mt-4">
              <span className="text-[#FF9F0D] font-bold text-[60px] leading-[68px]">Th</span>
              <span className="font-bold text-[60px] leading-[68px] text-[#FFFFFF] ">
                e Art of speed 
              </span>
            </div>
            <p className='font-bold text-[60px] leading-[68px] text-[#FFFFFF]'>food Quality</p>
            <p className="text-[#FFFFFF] font-normal text-[16px] leading-6 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
            </p>
            <button className="w-[190px] h-[60px] mt-8 bg-[#FF9F0D] text-white rounded-3xl">
              See Menu
            </button>
          </div>

          {/* Right Side */}
          <div className="w-1/2 flex justify-center">
            <Image src="/pictures/heroimg.png" alt="heroimg" width={877.8} height={670} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
