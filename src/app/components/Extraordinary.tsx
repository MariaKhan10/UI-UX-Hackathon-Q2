import Image from 'next/image';
import React from 'react';
import { Great_Vibes } from '@next/font/google';

const greatVibes = Great_Vibes({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const Extraordinary = () => {
  return (
    <div className="bg-black/100 px-4 md:px-12 lg:px-20 py-32">
      <div className="flex flex-col lg:flex-row justify-between items-start">
         {/* Left Side - Images */}
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-4">
          {/* Row 1 */}
          <Image
            className="cursor-pointer"
            src="/pictures/extra1.png"
            alt="icon"
            width={270}
            height={320}
          />
          <Image
            className="cursor-pointer mt-6 sm:mt-24 sm:-ml-2"
            src="/pictures/extra2.png"
            alt="icon"
            width={210}
            height={180}
          />

          {/* Row 2 */}
          <Image
            className="cursor-pointer"
            src="/pictures/extra3.png"
            alt="icon"
            width={180}
            height={290}
          />
          <Image
            className="cursor-pointer sm:-ml-24"
            src="/pictures/extra4.png"
            alt="icon"
            width={160}
            height={180}
          />
          <Image
            className="cursor-pointer sm:ml-0"
            src="/pictures/extra5.png"
            alt="icon"
            width={120}
            height={141}
          />
         
        </div>

        {/* Right Side - Content */}
        <div className="mt-8 lg:mt-0 lg:ml-12 flex-1">
          {/* Heading */}
          <h1
            className={`${greatVibes.className} font-normal text-[24px] md:text-[32px] text-center lg:text-left text-[#FF9F0D]`}
          >
            Why Choose us
          </h1>

          {/* Main Heading */}
          <div className="flex flex-col md:flex-row mt-4 text-center lg:text-left">
            <span className="text-[#FF9F0D] font-bold text-[48px] md:text-[60px]">
              Ex
            </span>
            <span className="font-bold text-[48px] md:text-[60px] text-[#FFFFFF]">
              tra ordinary taste
            </span>
          </div>
          <p className="font-bold text-[48px] md:text-[60px] text-[#FFFFFF] text-center lg:text-left">
            And Experienced
          </p>

          {/* Description */}
          <p className="text-[#FFFFFF] text-[14px] md:text-[16px] mt-6 text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non
            dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.
          </p>
{/* Icon Boxes with Labels */}
<div className="flex flex-col items-center sm:items-start gap-6 mt-8 cursor-pointer w-full max-w-[1200px] mx-auto">
  <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-6">
    {["Hamburger", "Cookie", "Wine"].map((icon, index) => (
      <div key={index} className="flex flex-col items-center">
        {/* Icon Box */}
        <div className="relative w-[102px] h-[100px] flex justify-center items-center bg-[#FF9F0D]">
          <Image
            src={`/pictures/${icon}.png`}
            alt={icon}
            width={56}
            height={56}
            className="z-10"
          />
        </div>
        {/* Label Below Each Box */}
        <h1 className="mt-2 text-white text-center font-light">
          {["Fast Food", "Lunch", "Dinner"][index]}
        </h1>
      </div>
    ))}
  </div>
</div>



        {/* Years Image */}
<div className="mt-8 flex justify-center sm:justify-start cursor-pointer">
  <Image
    src="/pictures/years.png"
    alt="icon"
    width={300}
    height={93}
    className="w-[200px] sm:w-[250px] md:w-[300px] h-auto"
  />
</div>

        </div>
      </div>
    </div>
  );
};

export default Extraordinary;
