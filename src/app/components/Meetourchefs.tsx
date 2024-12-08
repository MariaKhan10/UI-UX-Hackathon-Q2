import Image from 'next/image';
import React from 'react';
import { Great_Vibes } from '@next/font/google';

const greatVibes = Great_Vibes({
  weight: ['400'], // Specify weights if necessary
  subsets: ['latin'], // Specify subsets
  display: 'swap', // Use font-display: swap for better performance
});

const Meetourchefs = () => {
  return (
    <div className="bg-black/100 text-center py-12">
      {/* Title Section */}
      <h1
        className={`${greatVibes.className} font-normal text-[32px] leading-10 text-[#FF9F0D]`}
      >
        Chefs
      </h1>
      <div className="flex justify-center mt-4">
        <span className="text-[#FF9F0D] font-bold text-[60px] leading-[68px]">
          Me
        </span>
        <span className="font-bold text-[60px] leading-[68px] text-[#FFFFFF]">
          et Our Chef
        </span>
      </div>

      {/* Images Section */}
      <div className="flex flex-wrap justify-center items-center gap-6 mt-8 cursor-pointer">
        <Image
          src="/pictures/Chef card1.png"
          alt="Food Item 1"
          width={275}
          height={329}
        />
        <Image
          src="/pictures/Chef card2.png"
          alt="Food Item 2"
          width={275}
          height={329}
        />
        <Image
          src="/pictures/Card 3.png"
          alt="Food Item 3"
          width={275}
          height={329}
        />
        <Image
          src="/pictures/Card 4.png"
          alt="Food Item 4"
          width={275}
          height={329}
        />
      </div>
    </div>
  );
};

export default Meetourchefs;
