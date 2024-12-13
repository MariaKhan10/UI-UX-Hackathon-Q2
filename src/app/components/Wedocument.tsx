"use client";

import React from "react";
import { Great_Vibes } from "@next/font/google";
import Image from "next/image";

const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const Wedocument = () => {
  return (
    <div className="relative w-full h-[450px] bg-cover bg-center bg-[url('/pictures/wedocument.png')]">
      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Content */}
      <div className="relative h-full flex flex-col items-center justify-center justify-self-end text-center px-4 md:px-6 lg:px-12">
        {/* Title */}
        <h1
          className={`${greatVibes.className} font-normal text-[22px] md:text-[26px] leading-[28px] md:leading-[34px] text-[#FF9F0D]`}
        >
          Restaurant Active Process
        </h1>

        {/* Main Text */}
        <div className="mt-4">
          <p className="text-[#FF9F0D] font-bold text-[28px] md:text-[36px] leading-[34px] md:leading-[44px]">
            We Document Every Food
          </p>
          <p className="font-bold text-[24px] md:text-[32px] leading-[30px] md:leading-[40px] text-[#FFFFFF] mt-2">
            Bean Process until it is saved
          </p>
        </div>

        {/* Description */}
        <p className="text-[#FFFFFF] font-normal text-[12px] md:text-[14px] leading-5 mt-4 md:mt-6 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna,
        </p>

        {/* Buttons and Play Video */}
        <div className="mt-6 flex flex-col md:flex-row items-center gap-8">
          {/* Read More Button */}
          <button className="w-[120px] md:w-[140px] h-[40px] md:h-[50px] border border-[#FF9F0D] text-[#FF9F0D] rounded-3xl">
            Read More
          </button>

          {/* Play Video */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/pictures/Play.png"
              alt="Play Video"
              width={40}
              height={40}
            />
            <p className="text-white font-bold text-[14px] md:text-[16px] cursor-pointer">
              Play Video
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wedocument;
