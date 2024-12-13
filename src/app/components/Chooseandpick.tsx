import Image from 'next/image';
import React from 'react';
import { Great_Vibes } from '@next/font/google';

const greatVibes = Great_Vibes({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const Chooseandpick = () => {
  return (
    <div className="bg-black/100 text-center py-12">
      {/* Title Section */}
      <h1
        className={`${greatVibes.className} font-normal text-[24px] md:text-[32px] leading-8 md:leading-10 text-[#FF9F0D]`}
      >
        Choose & pick
      </h1>
      <div className="flex flex-wrap justify-center mt-4">
        <span className="text-[#FF9F0D] font-bold text-[40px] md:text-[60px] leading-[48px] md:leading-[68px]">
          Fr
        </span>
        <span className="font-bold text-[40px] md:text-[60px] leading-[48px] md:leading-[68px] text-[#FFFFFF]">
          om Our Menu
        </span>
      </div>

      {/* Navigation */}
      <div>
        <ul className="flex flex-wrap justify-center gap-4 md:gap-20 mt-12 px-4 md:px-44 cursor-pointer hover:text-[#FF9F0D]">
          {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drink', 'Snack', 'Soups'].map((item, index) => (
            <li
              key={index}
              className={`${
                index === 0 ? 'text-[#FFFFFF]' : 'text-[#FFFFFF]'
              } hover:text-[#FF9F0D] font-bold text-[16px] md:text-[20px] leading-7`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col md:flex-row mt-12 md:mt-20 items-start justify-between px-4 md:px-16 gap-12">
        {/* Left Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="/pictures/chooseandpick.png"
            alt="Choose and Pick"
            width={300}
            height={300}
            className="w-full max-w-[200px] md:max-w-[300px]"
          />
        </div>

       {/* Right Section */}
<div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 cursor-pointer">
  {[
    "Lettuce Leaf",
    "Fresh Breakfast",
    "Mild Butter",
    "Fresh Bread",
    "Glow Cheese",
    "Italian Pizza",
    "Slice Beef",
    "Mushroom Pizza",
  ].map((title, index) => (
    <div key={index} className="flex items-center gap-4">
      <Image
        src="/pictures/choose1.png"
        alt={`Choose Item ${index + 1}`}
        width={80}
        height={80}
        className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
      />
      <div className="text-left">
        <h2 className="font-bold text-[16px] md:text-[20px] leading-7 text-white">
          {title}
        </h2>
        <p className="font-normal text-[12px] md:text-[14px] leading-5 text-white">
          Lacus nisi, et ac dapibus velit in consequat.
        </p>
        <p className="text-[#FF9F0D] text-[16px] md:text-[18px] leading-6 font-bold">
          $12.5
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Chooseandpick;
