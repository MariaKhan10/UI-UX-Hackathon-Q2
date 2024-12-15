import React from 'react'
import Navbar from '../components/Navbar'
import Stillyouneed from '../components/Stillyouneed'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'

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
      src="/pictures/bloglist.png"
      alt="ourmenu"
      width={160}
      height={104}
      className="max-w-full h-auto"
    />
  </div>
</div>


      {/* Blog Posts */}
      {['10 Reasons To Do A Digital Detox Challenge', 'Traditional Soft Pretzels with Sweet Beer Cheese', 'The Ultimate Hangover Burger: Egg in a Hole Burger', 'My Favorite Easy Black Pizza Toast Recipe'].map((title, index) => (
        <div className="p-20" key={index}>
          <Image
            src={`/pictures/blogimg${index + 1}.png`}
            alt="blog"
            width={500}
            height={400}
            className="w-full md:w-[500px] cursor-pointer" // Ensure it scales well on small screens but maintains size on larger screens
          />
          <h1 className="font-bold text-[24px] leading-8 text-[#333333] mt-4 text-center md:text-left">{title}</h1>
          <p className="text-[#4F4F4F] font-normal text-[16px] leading-6 mt-2 text-center md:text-left">
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <Link href="/BlogDetails">
          <button className="text-[#FF9F0D] border border-[#FF9F0D] px-4 py-2 rounded mt-4 block mx-auto md:mx-0">
            Read More
          </button></Link>
          
        </div>
      ))}

      <Stillyouneed />
      <Footer />
    </div>
  );
}

export default Page
