import Image from 'next/image';
import React from 'react';
import { Great_Vibes } from '@next/font/google';

const greatVibes = Great_Vibes({
  weight: ['400'], // Specify weights if necessary
  subsets: ['latin'], // Specify subsets
  display: 'swap', // Use font-display: swap for better performance
});

const Createthebest = () => {
  return (
    <div className="w-full h-screen bg-black/100 flex items-center justify-center p-4 ">
      <div className="w-full max-w-6xl">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full m-auto  ">
          {/* Left Side */}
          <div className="w-full md:w-1/2 md:pr-6 mb-8 md:mb-0">
            <h1 className={`${greatVibes.className} font-normal text-[32px] leading-10 text-[#FF9F0D]`}>About us</h1>
            <div className="flex mt-4">
              <span className="text-[#FF9F0D] font-bold text-[60px] leading-[68px]">We&nbsp;</span>
              <span className="font-bold text-[60px] leading-[68px] text-[#FFFFFF]">
                Create the best
              </span>
            </div>
            <p className="font-bold text-[60px] leading-[68px] text-[#FFFFFF]">foody product</p>
            <p className="text-[#FFFFFF] font-normal text-[16px] leading-6 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
              bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat
              pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac
              dapibus sit eu velit in consequat.
            </p>
            <p className="text-[#FFFFFF] font-normal text-[16px] leading-6 mt-6">
              &#10003; &nbsp; Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <p className="text-[#FFFFFF] font-normal text-[16px] leading-6 mt-6">
              &#10003; &nbsp; Quisque diam pellentesque bibendum non dui volutpat fringilla
            </p>
            <p className="text-[#FFFFFF] font-normal text-[16px] leading-6 mt-6">
              &#10003; &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <button className="w-[190px] h-[60px] mt-8 bg-[#FF9F0D] text-white rounded-3xl">
              Read More
            </button>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 flex flex-col items-center space-y-4">
            <Image src="/pictures/img2.png" alt="img" width={650} height={320} />
            <div className="flex space-x-4">
              <Image src="/pictures/img3.png" alt="img" width={280} height={194} />
              <Image src="/pictures/img4.png" alt="img" width={280} height={194} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createthebest;
