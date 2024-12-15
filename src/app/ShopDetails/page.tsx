"use client";
import Navbar from "../components/Navbar";
import Stillyouneed from "../components/Stillyouneed";
import Footer from "../components/Footer";
import Image from "next/image";
import React, { useState } from "react";
import { PiTote } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";

const Page = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div>
      <Navbar />
      <div className="relative">
        {/* First Image */}
        <Image
          src="/pictures/ourmenu.png"
          alt="menu"
          width={1920}
          height={550}
          className="w-full object-cover"
        />

        {/* Second Image (Centered) */}
        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            src="/pictures/shopdetails.png"
            alt="ourmenu"
            width={160}
            height={104}
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center mt-20 px-10 py-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-6xl">
          {/* Left Part */}
          <div className="flex flex-col lg:flex-row gap-4">
           {/* Left side with 4 images in a column */}
<div className="grid grid-cols-2 md:flex md:flex-col gap-5 md:gap-4">
  {/* For mobile screens, show images in a 2x2 grid */}
  <Image src="/pictures/shopdetail1.png" alt="img" width={290} height={190} className="md:w-auto" />
  <Image src="/pictures/shopdetail2.png" alt="img" width={290} height={190} className="md:w-auto" />
  <Image src="/pictures/shopdetail3.png" alt="img" width={290} height={190} className="md:w-auto" />
  <Image src="/pictures/shopdetail4.png" alt="img" width={290} height={190} className="md:w-auto" />
</div>


            {/* Right side with the 5th image */}
            <div>
              <Image
                src="/pictures/shopdetail5.png"
                alt="img"
                width={570}
                height={580}
                className="lg:w-[472px]"
              />
            </div>
          </div>

          {/* Right Part */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Stock Badge */}
            <h1 className="text-white bg-[#FF9F0D] w-24 lg:w-32 text-center rounded">
              In stock
            </h1>

            {/* Product Title */}
            <h1 className="font-bold text-[28px] lg:text-[48px] leading-10 text-[#333333]">
              Yummy Chicken Chup
            </h1>

            {/* Description */}
            <p className="font-normal text-[14px] lg:text-[18px] leading-6 text-[#4F4F4F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, urna, vitae feugiat pretium donec id elementum. Ultrices
              mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit
              in consequat.
            </p>

            <hr />

            {/* Price */}
            <h1 className="font-bold text-[24px] lg:text-[32px] leading-10 text-[#333333]">
              54.00$
            </h1>

            {/* Rating */}
            <div className="flex flex-row items-center space-x-2 mt-4">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <span
                    key={index}
                    className="text-[#FF9F0D] text-lg lg:text-3xl"
                  >
                    ★
                  </span>
                ))}
              <span className="text-gray-300 text-lg lg:text-3xl">★</span>
              <p className="font-normal text-[14px] lg:text-[16px] leading-6 text-[#828282]">
                | 5.0 Rating |
              </p>
              <p className="font-normal text-[14px] lg:text-[16px] leading-6 text-[#828282]">
                22 Review
              </p>
            </div>

            {/* Subtitle */}
            <h2 className="font-semibold text-[16px] lg:text-[18px] leading-6 text-[#333333]">
              Dictum/cursus/Risus
            </h2>

            {/* Counter and Add to Cart Button */}
            <div className="flex flex-row items-center gap-4 mt-4">
              {/* Counter Component */}
              <div className="flex flex-row items-center border border-gray-400 rounded p-2 w-fit space-x-4">
                <button
                  onClick={decrement}
                  className="text-lg font-bold px-4 py-1 hover:bg-gray-200 focus:outline-none"
                >
                  -
                </button>
                <span className="text-xl font-semibold">{count}</span>
                <button
                  onClick={increment}
                  className="text-lg font-bold px-4 py-1 hover:bg-gray-200 focus:outline-none"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="bg-[#FF9F0D] hover:bg-[#ff960dcc] text-white flex items-center gap-2 px-4 py-2">
                <PiTote className="text-white text-[20px]" />
                <h1>Add to cart</h1>
              </button>
            </div>

            <hr />

            {/* Wishlist */}
            <div className="flex items-center gap-2">
              <IoIosHeartEmpty className="text-[20px] hover:text-[#FF9F0D] cursor-pointer" />
              <h1 className="font-normal text-[16px] lg:text-[18px] leading-6 text-[#4F4F4F] ">
                Add to Wishlist
              </h1>
            </div>

            {/* Category and Tag */}
            <p className="font-normal text-[16px] lg:text-[18px] leading-6 text-[#4F4F4F]">
              Category: Pizza
            </p>
            <p className="font-normal text-[16px] lg:text-[18px] leading-6 text-[#4F4F4F]">
              Tag: Our Shop
            </p>

            {/* Share */}
            <div className="flex gap-2 items-center">
              <p className="font-normal text-[16px] lg:text-[18px] leading-6 text-[#4F4F4F]">
                Share :
              </p>
              <Image
                className="cursor-pointer"
                src="/pictures/Social content.png"
                alt="social icons"
                width={170}
                height={15}
              />
            </div>

            <hr />
          </div>
        </div>
      </div>


{/* Second Section Starts */}
<div className="px-8 lg:px-28 my-12">
  {/* Tabs for Description and Reviews */}
  <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
    <h1 className="bg-[#FF9F0D] text-white w-32 text-center p-2">Description</h1>
    <div className="flex items-center">
      <h1 className="text-center">Reviews (24)</h1>
    </div>
  </div>

  {/* Content Section */}
  <div className="my-8">
    <p className="font-normal text-[16px] leading-6 text-[#828282]">
      Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus
      augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis.
      Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor
      auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis
      dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem
      hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam,
      lacinia eu aliquam ac, aliquam in nisl.
    </p>
    <br />
    <p className="font-normal text-[16px] leading-6 text-[#828282]">
      Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit
      justo urna, id porttitor est dignissim nec. Pellentesque scelerisque
      hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis
      massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa
      at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu
      vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu
      fringilla leo, non aliquet sem.
    </p>
    <br />

    {/* Key Benefits Section */}
    <h1 className="text-[#4F4F4F] font-normal text-[18px] leading-6 mt-4">Key Benefits</h1>
    <ol className="font-normal text-[16px] leading-6 text-[#828282] list-inside list-disc mt-4">
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
      <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
      <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
      <li>Mauris eget diam magna, in blandit turpis.</li>
    </ol>
  </div>
</div>
{/* Second Section Ends */}



{/* Third Section Starts */}
<div className="my-14 px-8 lg:px-28">
  {/* Heading */}
  <h1 className="text-[#333333] font-bold text-[32px] leading-10">Similar Products</h1>

  {/* Image Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
    <Image src="/pictures/Fresh Lime.png" alt="img" width={270} height={330} />
    <Image src="/pictures/Fresh Lime (1).png" alt="img" width={270} height={330} />
    <Image src="/pictures/Fresh Lime (3).png" alt="img" width={270} height={330} />
    <Image src="/pictures/Fresh Lime (1).png" alt="img" width={270} height={330} />
  </div>
</div>
{/* Third Section Ends */}



      <Stillyouneed />
      <Footer />
    </div>
  );
};

export default Page;
