import React from 'react';
import Navbar from '../components/Navbar';
import Stillyouneed from '../components/Stillyouneed';
import Footer from '../components/Footer';
import Image from 'next/image';
import Clients from '../components/Clients';

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
  {/* First Image */}
  <Image
    src="/pictures/ourmenu.png"
    alt="menu"
    width={1920}
    height={550} 
    className="w-full object-cover"
  />

  {/* Second Image (Centered) */}
  <div className="absolute inset-0 flex justify-center items-center">
    <Image
      src="/pictures/Our Menu.png"
      alt="ourmenu"
      width={219}
      height={104}
      className="max-w-full h-auto"
    />
  </div>
</div>


      {/* Starter Menu */}
      <div className="flex flex-col md:flex-row justify-between px-8 md:px-14 py-12 space-y-6 md:space-y-0">
        {/* Left Side */}
        <div className="w-full md:w-1/3">
          <Image src="/pictures/starter.png" alt="Starter Menu" width={330} height={560} />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-2/3 space-y-6">
          <h1 className="font-bold text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] text-[#333333]">
            Starter Menu
          </h1>

          {/* Menu Items */}
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="flex justify-between items-start">
                {/* Menu Description */}
                <div>
                  <h2 className="font-bold text-[20px] md:text-[24px] leading-8 text-[#333333]">
                    Alder Grilled Chinook Salmon
                  </h2>
                  <p className="font-normal text-[14px] md:text-[16px] leading-6 text-[#4F4F4F]">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="text-[#828282]">560 CAL</p>
                </div>

                {/* Price */}
                <p className="text-[#FF9F0D] font-bold text-[20px] md:text-[24px] leading-8">
                  32$
                </p>
              </div>
            ))}
        </div>
      </div>

      {/* Main Course */}
      <div className="flex flex-col md:flex-row justify-between px-8 md:px-14 py-12 space-y-6 md:space-y-0">
        {/* Left Side */}
        <div className="w-full md:w-2/3 space-y-6">
          <h1 className="font-bold text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] text-[#333333]">
            Main Course
          </h1>

          {/* Menu Items */}
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="flex justify-between items-start">
                {/* Menu Description */}
                <div>
                  <h2 className="font-bold text-[20px] md:text-[24px] leading-8 text-[#333333]">
                    Alder Grilled Chinook Salmon
                  </h2>
                  <p className="font-normal text-[14px] md:text-[16px] leading-6 text-[#4F4F4F]">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="text-[#828282]">560 CAL</p>
                </div>

                {/* Price */}
                <p className="text-[#FF9F0D] font-bold text-[20px] md:text-[24px] leading-8">
                  45$
                </p>
              </div>
            ))}
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/3 pl-0 md:pl-28">
          <Image src="/pictures/maincourse.png" alt="Main Course" width={300} height={480} />
        </div>
      </div>

      {/* Clients */}
      <Clients />

      {/* Desserts */}
      <div className="flex flex-col md:flex-row justify-between px-8 md:px-14 py-12 space-y-6 md:space-y-0">
        {/* Left Side */}
        <div className="w-full md:w-1/3">
          <Image src="/pictures/deserts.png" alt="Desserts" width={330} height={560} />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-2/3 space-y-6">
          <h1 className="font-bold text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] text-[#333333]">
            Desserts
          </h1>

          {/* Menu Items */}
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="flex justify-between items-start">
                {/* Menu Description */}
                <div>
                  <h2 className="font-bold text-[20px] md:text-[24px] leading-8 text-[#333333]">
                    Alder Grilled Chinook Salmon
                  </h2>
                  <p className="font-normal text-[14px] md:text-[16px] leading-6 text-[#4F4F4F]">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="text-[#828282]">560 CAL</p>
                </div>

                {/* Price */}
                <p className="text-[#FF9F0D] font-bold text-[20px] md:text-[24px] leading-8">
                  24$
                </p>
              </div>
            ))}
        </div>
      </div>

      {/* Drinks */}
      <div className="flex flex-col md:flex-row justify-between px-8 md:px-14 py-12 space-y-6 md:space-y-0">
        {/* Left Side */}
        <div className="w-full md:w-2/3 space-y-6">
          <h1 className="font-bold text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] text-[#333333]">
            Drinks
          </h1>

          {/* Menu Items */}
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="flex justify-between items-start">
                {/* Menu Description */}
                <div>
                  <h2 className="font-bold text-[20px] md:text-[24px] leading-8 text-[#333333]">
                    Alder Grilled Chinook Salmon
                  </h2>
                  <p className="font-normal text-[14px] md:text-[16px] leading-6 text-[#4F4F4F]">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="text-[#828282]">560 CAL</p>
                </div>

                {/* Price */}
                <p className="text-[#FF9F0D] font-bold text-[20px] md:text-[24px] leading-8">
                  53$
                </p>
              </div>
            ))}
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/3 pl-0 md:pl-28">
          <Image src="/pictures/drinks.png" alt="Drinks" width={300} height={480} />
        </div>
      </div>

      <Stillyouneed />
      <Footer />
    </div>
  );
};

export default Page;
