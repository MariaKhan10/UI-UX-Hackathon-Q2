import React from 'react';
import Navbar from '../components/Navbar';
import Stillyouneed from '../components/Stillyouneed';
import Footer from '../components/Footer';
import Image from 'next/image';
import Clients from '../components/Clients';

const Page = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <Image
          src="/pictures/ourmenu.png"
          alt="menu"
          width={1920}
          height={550}
          className="w-full object-cover"
        />
        {/* Centered Image */}
        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            src="/pictures/ourchef.png"
            alt="ourmenu"
            width={160}
            height={104}
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Chef Images Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-6 py-12 sm:px-10 lg:px-60">
        {/* Loop to render each chef */}
        {[
          { src: '/pictures/chef1.png', name: 'Tahmina Rumi', role: 'Chef' },
          { src: '/pictures/chef2.png', name: 'Jorina Begum', role: 'Chef' },
          { src: '/pictures/chef3.png', name: 'M. Mohammad', role: 'Chef' },
          { src: '/pictures/chef4.png', name: 'Munna Kathy', role: 'Chef' },
          { src: '/pictures/chef5.png', name: 'Tehmina Rumi', role: 'Chef' },
          { src: '/pictures/chef6.png', name: 'Bisnu Devgon', role: 'Chef' },
          { src: '/pictures/chef7.png', name: 'Motin Molla', role: 'Chef' },
          { src: '/pictures/chef8.png', name: 'William Rumi', role: 'Chef' },
          { src: '/pictures/chef9.png', name: 'Kets William Roy', role: 'Chef' },
          { src: '/pictures/chef10.png', name: 'Mahmud Kholil', role: 'Chef' },
          { src: '/pictures/chef11.png', name: 'Ataur Rahman', role: 'Chef' },
          { src: '/pictures/chef12.png', name: 'Monalisa Holly', role: 'Chef' },
        ].map((chef, index) => (
          <div key={index} className="text-center">
            <Image src={chef.src} alt={chef.name} width={200} height={250} className="mx-auto" />
            <h1 className="text-[#333333] font-bold text-[16px] sm:text-[18px] lg:text-[20px] leading-7 mt-2">
              {chef.name}
            </h1>
            <p className="font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-6 text-[#333333]">
              {chef.role}
            </p>
          </div>
        ))}
      </div>

      <Stillyouneed />
      <Footer />
    </div>
  );
};

export default Page;
