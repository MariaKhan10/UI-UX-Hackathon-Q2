import React from 'react';

const Stillyouneed = () => {
  return (
    <div className="bg-black/100 py-8">
      {/* Container with left and right content */}
      <div className="flex flex-wrap items-center justify-between mx-auto max-w-[1200px] px-4 gap-4 md:gap-0">
        {/* Left content */}
        <div className="w-full md:w-auto text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center">
            <span className="text-[#FF9F0D] font-bold text-[24px] md:text-[32px] leading-[32px] md:leading-[40px]">
              St
            </span>
            <span className="font-bold text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] text-[#FFFFFF]">
              ill You Need Our Support?
            </span>
          </div>
          <p className="text-[#FFFFFF] font-light text-[14px] md:text-[16px] leading-5 md:leading-6 mt-2">
            Don’t wait, make a smart & logical quote here. It’s pretty easy.
          </p>
        </div>

        {/* Right content */}
        <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-4 md:gap-0">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full md:w-[200px] h-[46px] bg-transparent border border-[#FF9F0D] text-white placeholder-[#FFFFFF] px-4 focus:outline-none rounded-[4px] md:rounded-[4px_0_0_4px]"
          />
          <button className="h-[46px] w-full md:w-auto px-6 bg-[#FF9F0D] text-white font-bold rounded-[4px] md:rounded-[0_4px_4px_0]">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Horizontal line */}
      <div className="mt-8 md:mt-20">
        <hr className="w-[90%] md:w-[85%] mx-auto border-t-1 border-[#FF9F0D]" />
      </div>
    </div>
  );
};

export default Stillyouneed;
