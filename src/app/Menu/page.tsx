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
          height={410}
        />

        
        {/* Second Image (Centered) */}
        
        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            src="/pictures/Our Menu.png"
            alt="ourmenu"
            width={219}
            height={104}
          />
        </div>
      </div>

{/* Starter Menu */}
<div className="flex justify-between px-14 py-12">
  {/* Left Side */}
  <div className="w-1/3">
    <Image src="/pictures/starter.png" alt="Starter Menu"  width={330} height={560} />
  </div>

  {/* Right Side */}
  <div className="w-2/3 space-y-6">
    <h1 className="font-bold text-[48px] leading-[56px] text-[#333333]">Starter Menu</h1>

    {/* Menu Items */}
    {Array(4)
      .fill(0)
      .map((_, index) => (
        <div key={index} className="flex justify-between items-start">
          {/* Menu Description */}
          <div>
            <h2 className="font-bold text-[24px] leading-8 text-[#333333]">
              Alder Grilled Chinook Salmon
            </h2>
            <p className="font-normal text-[16px] leading-6 text-[#4F4F4F]">
              Toasted French bread topped with romano, cheddar
            </p>
            <p className="text-[#828282]">560 CAL</p>
          </div>

          {/* Price */}
          <p className="text-[#FF9F0D] font-bold text-[24px] leading-8">32$</p>
        </div>
      ))}
  </div>
</div>






{/* Main Course */}

<div className="flex justify-between px-14 py-12">
 

  {/* left Side */}
  <div className="w-2/3 space-y-6">
    <h1 className="font-bold text-[48px] leading-[56px] text-[#333333]">Main Course</h1>

    {/* Menu Items */}
    {Array(4)
      .fill(0)
      .map((_, index) => (
        <div key={index} className="flex justify-between items-start">
          {/* Menu Description */}
          <div>
            <h2 className="font-bold text-[24px] leading-8 text-[#333333]">
              Alder Grilled Chinook Salmon
            </h2>
            <p className="font-normal text-[16px] leading-6 text-[#4F4F4F]">
              Toasted French bread topped with romano, cheddar
            </p>
            <p className="text-[#828282]">560 CAL</p>
          </div>

          {/* Price */}
          <p className="text-[#FF9F0D] font-bold text-[24px] leading-8">32$</p>
        </div>
      ))}
  </div>

   {/* right Side */}
   <div className="w-1/3 pl-28">
    <Image src="/pictures/maincourse.png" alt="Starter Menu" width={300} height={480} />
  </div>

</div>







<Clients/>



{/* Starter Menu */}
<div className="flex justify-between px-14 py-12">
  {/* Left Side */}
  <div className="w-1/3">
    <Image src="/pictures/deserts.png" alt="Starter Menu" width={330} height={560} />
  </div>

  {/* Right Side */}
  <div className="w-2/3 space-y-6">
    <h1 className="font-bold text-[48px] leading-[56px] text-[#333333]">Desserts</h1>

    {/* Menu Items */}
    {Array(4)
      .fill(0)
      .map((_, index) => (
        <div key={index} className="flex justify-between items-start">
          {/* Menu Description */}
          <div>
            <h2 className="font-bold text-[24px] leading-8 text-[#333333]">
              Alder Grilled Chinook Salmon
            </h2>
            <p className="font-normal text-[16px] leading-6 text-[#4F4F4F]">
              Toasted French bread topped with romano, cheddar
            </p>
            <p className="text-[#828282]">560 CAL</p>
          </div>

          {/* Price */}
          <p className="text-[#FF9F0D] font-bold text-[24px] leading-8">32$</p>
        </div>
      ))}
  </div>
</div>






{/* Main Course */}

<div className="flex justify-between px-14 py-12">
 

  {/* left Side */}
  <div className="w-2/3 space-y-6">
    <h1 className="font-bold text-[48px] leading-[56px] text-[#333333]">Drinks</h1>

    {/* Menu Items */}
    {Array(4)
      .fill(0)
      .map((_, index) => (
        <div key={index} className="flex justify-between items-start">
          {/* Menu Description */}
          <div>
            <h2 className="font-bold text-[24px] leading-8 text-[#333333]">
              Alder Grilled Chinook Salmon
            </h2>
            <p className="font-normal text-[16px] leading-6 text-[#4F4F4F]">
              Toasted French bread topped with romano, cheddar
            </p>
            <p className="text-[#828282]">560 CAL</p>
          </div>

          {/* Price */}
          <p className="text-[#FF9F0D] font-bold text-[24px] leading-8">32$</p>
        </div>
      ))}
  </div>

   {/* right Side */}
   <div className="w-1/3 pl-28">
    <Image src="/pictures/drinks.png" alt="Starter Menu" width={300} height={480} />
  </div>

</div>









      <Stillyouneed />
      <Footer />
    </div>
  );
};

export default Page;
