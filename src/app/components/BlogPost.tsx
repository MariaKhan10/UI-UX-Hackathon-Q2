import Image from 'next/image';
import React from 'react';
import { Great_Vibes } from '@next/font/google';

const greatVibes = Great_Vibes({
  weight: ['400'], // Specify weights if necessary
  subsets: ['latin'], // Specify subsets
  display: 'swap', // Use font-display: swap for better performance
});

const BlogPost = () => {
  return (
    <div className="bg-black/100 text-center py-12">
      {/* Title Section */}
      <h1
        className={`${greatVibes.className} font-normal text-[24px] md:text-[32px] leading-8 md:leading-10 text-[#FF9F0D]`}
      >
        Blog Post
      </h1>
      <div className="flex flex-wrap justify-center mt-4">
        <span className="text-[#FF9F0D] font-bold text-[40px] md:text-[60px] leading-[48px] md:leading-[68px]">
          La
        </span>
        <span className="font-bold text-[40px] md:text-[60px] leading-[48px] md:leading-[68px] text-[#FFFFFF]">
          test News & Blog
        </span>
      </div>

      {/* Images Section */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-8 cursor-pointer">
        <Image
          className="hover:cursor-pointer w-[90%] sm:w-[80%] md:w-[375px] h-auto"
          src="/pictures/blogcard1.png"
          alt="Item 1"
          width={375}
          height={569}
        />
        <Image
          className="hover:cursor-pointer w-[90%] sm:w-[80%] md:w-[375px] h-auto"
          src="/pictures/blogcard2.png"
          alt="Item 2"
          width={375}
          height={569}
        />
        <Image
          className="hover:cursor-pointer w-[90%] sm:w-[80%] md:w-[375px] h-auto"
          src="/pictures/blogcard3.png"
          alt="Item 3"
          width={375}
          height={569}
        />
      </div>
    </div>
  );
};

export default BlogPost;
