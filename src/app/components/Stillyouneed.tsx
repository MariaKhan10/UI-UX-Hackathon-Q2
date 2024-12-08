import React from 'react';

const Stillyouneed = () => {
  return (
    <div className="bg-black/100 py-8">
      {/* Container with left and right content */}
      <div className="flex items-center justify-between mx-auto max-w-[1200px] px-4">
        {/* Left content */}
        <div>
          <div className="flex items-center">
            <span className="text-[#FF9F0D] font-bold text-[32px] leading-[40px]">
              St
            </span>
            <span className="font-bold text-[32px] leading-[40px] text-[#FFFFFF] ml-1">
              ill You Need Our Support?
            </span>
          </div>
          <p className="text-[#FFFFFF] font-light text-[16px] leading-6 mt-2">
            Don’t wait, make a smart & logical quote here. It’s pretty easy.
          </p>
        </div>

        {/* Right content */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-[200px] h-[46px] bg-transparent border border-[#FF9F0D] text-white placeholder-[#FFFFFF] px-4 focus:outline-none rounded-[4px_0_0_4px]"
          />
          <button className="h-[46px] w-auto px-6 bg-[#FF9F0D] text-white font-bold rounded-[0_4px_4px_0]">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Horizontal line */}
      <div className="mt-20">
        <hr className="w-[85%] mx-auto border-t-1 border-[#FF9F0D]" />
      </div>
    </div>
  );
};

export default Stillyouneed;
