import React from 'react';
import Navbar from '../components/Navbar';
import Stillyouneed from '../components/Stillyouneed';
import Footer from '../components/Footer';
import Image from 'next/image';
import Foods from '@/components/Foods';

const Page = () => {
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
      src="/pictures/Our Menu.png"
      alt="ourmenu"
      width={160}
      height={104}
      className="max-w-full h-auto"
    />
  </div>
</div>

      <Foods />


      <div className="flex flex-col items-center justify-center py-16 px-4 md:px-8">
  <p className="text-[#333333] font-normal text-[16px] md:text-[18px] leading-6 md:leading-7 text-center">
    Partners & Clients
  </p>
  <h1 className="font-bold text-[28px] md:text-[36px] lg:text-[48px] leading-[34px] md:leading-[42px] lg:leading-[56px] text-[#333333] text-center">
    We work with the best people
  </h1>
  <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-12 mt-8 md:mt-10">
    <Image src="/pictures/partner1.png" alt="partner" width={150} height={100} />
    <Image src="/pictures/partner2.png" alt="partner" width={130} height={90} />
    <Image src="/pictures/partner3.png" alt="partner" width={120} height={80} />
    <Image src="/pictures/partner4.png" alt="partner" width={120} height={80} />
    <Image src="/pictures/partner5.png" alt="partner" width={130} height={90} />
    <Image src="/pictures/partner6.png" alt="partner" width={110} height={70} />
  </div>
</div>



      <Stillyouneed />
      <Footer />
    </div>
  );
};

export default Page;
