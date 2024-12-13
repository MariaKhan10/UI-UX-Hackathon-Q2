import Image from 'next/image';
import React from 'react';
import { Great_Vibes } from '@next/font/google';

const greatVibes = Great_Vibes({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const Createthebest = () => {
  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center p-4 py-28">
      <div className="w-full max-w-6xl">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full">
          {/* Left Side */}
          <div className="w-full md:w-1/2 md:pr-6 mb-8 md:mb-0">
            <h1 className={`${greatVibes.className} font-normal text-[32px] leading-10 text-[#FF9F0D] text-center md:text-left`}>
              About us
            </h1>
            <div className="flex justify-center md:justify-start mt-4">
              <span className="text-[#FF9F0D] font-bold text-[40px] md:text-[60px] leading-[48px] md:leading-[68px]">
                We&nbsp;
              </span>
              <span className="font-bold text-[40px] md:text-[60px] leading-[48px] md:leading-[68px] text-[#FFFFFF]">
                Create the best
              </span>
            </div>
            <p className="font-bold text-[40px] md:text-[60px] leading-[48px] md:leading-[68px] text-[#FFFFFF] text-center md:text-left">
              foody product
            </p>
            <p className="text-[#FFFFFF] font-normal text-[14px] md:text-[16px] leading-6 mt-6 text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
              bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat
              pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac
              dapibus sit eu velit in consequat.
            </p>
            <p className="text-[#FFFFFF] font-normal text-[14px] md:text-[16px] leading-6 mt-6 text-center md:text-left">
              &#10003; &nbsp; Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <p className="text-[#FFFFFF] font-normal text-[14px] md:text-[16px] leading-6 mt-6 text-center md:text-left">
              &#10003; &nbsp; Quisque diam pellentesque bibendum non dui volutpat fringilla
            </p>
            <p className="text-[#FFFFFF] font-normal text-[14px] md:text-[16px] leading-6 mt-6 text-center md:text-left">
              &#10003; &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="w-[160px] md:w-[190px] h-[50px] md:h-[60px] mt-8 bg-[#FF9F0D] text-white rounded-3xl">
                Read More
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 flex flex-col items-center space-y-6">
            <Image
              src="/pictures/img2.png"
              alt="Main image"
              width={650}
              height={320}
              className="w-full rounded-md"
            />
            <div className="flex flex-wrap justify-center md:justify-between gap-4">
              <Image
                src="/pictures/img3.png"
                alt="Small image 1"
                width={280}
                height={194}
                className="w-full max-w-[47%] rounded-md"
              />
              <Image
                src="/pictures/img4.png"
                alt="Small image 2"
                width={280}
                height={194}
                className="w-full max-w-[47%] rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createthebest;
