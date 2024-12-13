import Image from 'next/image';
import React from 'react';
import { Great_Vibes } from '@next/font/google';

const greatVibes = Great_Vibes({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const Testimonials = () => {
  return (
    <div className="bg-black text-center py-24 flex flex-col items-center px-4 md:px-8">
      {/* Title Section */}
      <div className="self-start text-left w-full max-w-[800px]">
        <h1
          className={`${greatVibes.className} font-normal text-[20px] md:text-[28px] leading-7 md:leading-9 text-[#FF9F0D]`}
        >
          Testimonials
        </h1>
        <div className="mt-4 mb-14">
          <span className="font-bold text-[24px] md:text-[48px] leading-[32px] md:leading-[56px] text-[#FFFFFF]">
            What our clients are saying
          </span>
        </div>
      </div>

      {/* White Box Section */}
      <div className="relative mt-12 w-full flex justify-center">
        {/* Human Image */}
        <div className="absolute -top-8 md:-top-1 z-10">
          <Image
            src="/pictures/human.png"
            alt="Human"
            width={72} // Reduced size for smaller screens
            height={72}
            className="block md:w-[96px] md:h-[96px]" // Restore size for larger screens
          />
        </div>

        {/* White Box */}
        <div className="bg-white flex flex-col items-center p-4 md:p-8 w-full max-w-[650px] rounded-lg relative z-0 mt-16 shadow-lg">
          <Image
            src="/pictures/Quotes.png"
            alt="Quotes"
            width={32} // Adjusted for small screens
            height={32}
            className="md:w-[36px] md:h-[36px]" // Restore size for larger screens
          />
          <p className="font-normal text-[14px] md:text-[18px] leading-6 md:leading-7 text-center text-black mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
            fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed
            vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>
          <div className="flex items-center justify-center space-x-2 mt-6">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <span key={index} className="text-[#FF9F0D] text-xl md:text-3xl">
                  ★
                </span>
              ))}
            <span className="text-gray-300 text-xl md:text-3xl">★</span>
          </div>
          <h1 className="text-black font-bold text-[18px] md:text-[24px] leading-8 mt-6">
            Alamin Hasan
          </h1>
          <p className="text-[#828282] font-normal text-[12px] md:text-[16px] leading-6 mt-2">
            Food Specialist
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
