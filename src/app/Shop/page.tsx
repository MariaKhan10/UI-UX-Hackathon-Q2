import React from 'react';
import Navbar from '../components/Navbar';
import Stillyouneed from '../components/Stillyouneed';
import Footer from '../components/Footer';
import Image from 'next/image';

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        {/* First Image */}
        <Image
          src="/pictures/ourmenu.png"
          alt="menu"
          width={1920}
          height={410}
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 my-6 px-4">
        {/* Sort By */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="sort-by"
            className="text-sm font-medium text-gray-700"
          >
            Sort By:
          </label>
          <select
            id="sort-by"
            className="block w-48 bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            defaultValue="newest"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rating</option>
          </select>
        </div>

        {/* Show */}
        <div className="flex items-center gap-2">
          <label htmlFor="show" className="text-sm font-medium text-gray-700">
            Show:
          </label>
          <select
            id="show"
            className="block w-48 bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            defaultValue="default"
          >
            <option value="default">Default</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-24 mt-20 mb-20">
        {[
          '/pictures/shop1.png',
          '/pictures/shop2.png',
          '/pictures/shop3.png',
          '/pictures/shop4.png',
          '/pictures/shop5.png',
          '/pictures/shop6.png',
          '/pictures/shop7.png',
          '/pictures/shop8.png',
          '/pictures/shop9.png',
          '/pictures/shop4.png',
          '/pictures/shop5.png',
          '/pictures/shop6.png',
          '/pictures/shop7.png',
          '/pictures/shop8.png',
          '/pictures/shop9.png',
        ].map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`shop-${index + 1}`}
            width={312}
            height={330}
            className="rounded shadow-lg cursor-pointer"
          />
        ))}
      </div>

      <Stillyouneed />
      <Footer />
    </div>
  );
};

export default page;
