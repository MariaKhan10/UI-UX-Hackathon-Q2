import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import Stillyouneed from "../components/Stillyouneed";
import Footer from "../components/Footer";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
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
            src="/pictures/404.png"
            alt="ourmenu"
            width={160}
            height={104}
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-center min-h-screen px-4 py-4 sm:px-10 lg:p-20">
        <h1 className="text-[#FF9F0D] font-bold text-6xl sm:text-8xl leading-tight mt-4">
          404
        </h1>
        <p className="font-bold text-xl sm:text-2xl text-[#333333] mt-6 text-center">
          Oops! Looks like something went wrong.
        </p>
        <p className="text-[#4F4F4F] font-normal text-base sm:text-lg mt-4 text-center">
          Page cannot be found! We’ll have it figured out in no time.
        </p>
        <p className="text-[#4F4F4F] font-normal text-base sm:text-lg text-center">
          Meanwhile, check out these fresh ideas:
        </p>
        <Link href="/">
          <button className="bg-[#FF9F0D] text-white mt-6 px-6 py-3 rounded-md text-sm sm:text-base">
            Go to Home
          </button>
        </Link>
      </div>

      <Stillyouneed />
      <Footer />
    </div>
  );
};

export default page;
