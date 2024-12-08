import Image from 'next/image';
import React from 'react';
import { Great_Vibes } from '@next/font/google';

const greatVibes = Great_Vibes({
  weight: ['400'], // Specify weights if necessary
  subsets: ['latin'], // Specify subsets
  display: 'swap', // Use font-display: swap for better performance
});

const Foodcategory = () => {
  return (
    <div className="bg-black/100 text-center py-12">
      {/* Title Section */}
      <h1
        className={`${greatVibes.className} font-normal text-[32px] leading-10 text-[#FF9F0D]`}
      >
        Food Category
      </h1>
      <div className="flex justify-center mt-4">
        <span className="text-[#FF9F0D] font-bold text-[60px] leading-[68px]">
          Ch
        </span>
        <span className="font-bold text-[60px] leading-[68px] text-[#FFFFFF]">
          oose Food Item
        </span>
      </div>

      {/* Images Section */}
      <div className="flex flex-wrap justify-center items-center gap-6 mt-8 cursor-pointer">
        <Image className='hover:cursor-pointer'
          src="/pictures/foodcategoryimg1.png"
          alt="Food Item 1"
          width={275}
          height={329}
        />
        <Image className='hover:cursor-pointer'
          src="/pictures/foodcategoryimg2.png"
          alt="Food Item 2"
          width={275}
          height={329}
        />
        <Image className='hover:cursor-pointer'
          src="/pictures/foodcategoryimg3.png"
          alt="Food Item 3"
          width={275}
          height={329}
        />
        <Image className='hover:cursor-pointer' 
          src="/pictures/foodcategoryimg4.png"
          alt="Food Item 4"
          width={275}
          height={329}
        />
      </div>
    </div>
  );
};

export default Foodcategory;
