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
    height={550} 
    className="w-full object-cover"
  />

  {/* Second Image (Centered) */}
  <div className="absolute inset-0 flex justify-center items-center">
    <Image
      src="/pictures/blogdetails.png"
      alt="ourmenu"
      width={219}
      height={104}
      className="max-w-full h-auto"
    />
  </div>
</div>

      {/* Blog Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-20 py-10 space-y-8">
        {/* Main Blog Image */}
        <Image
          src="/pictures/blogdetailimg1.png"
          alt="blog"
          width={800}
          height={600}
          className="w-full rounded-lg"
        />

        {/* Blog Title */}
        <h1 className="font-bold text-3xl text-[#333333]">
          10 Reasons To Do A Digital Detox Challenge
        </h1>

        {/* Main Blog Text */}
        <p className="text-[#4F4F4F] text-lg leading-7">
          Netus pretium tellus nulla commodo massa adipiscing in elementum magna
          congue condimentum placerat habitasse potenti ac orci a quisque
          tristique elementum et viverra at condimentum scelerisque eu mi. Elit
          praesent cras vehicula a ullamcorper nulla scelerisque aliquet tempus
          faucibus quam ac aliquet nibh a condimentum suspendisse hac integer
          leo erat aliquam ut himenaeos.
        </p>

        <p className="text-[#4F4F4F] text-lg leading-7">
          Ac haca ullamcorper donec ante habitasse donec imperdiet turpis varius
          per a augue magna hac. Nec hac et vestibulum duis a tincidunt per a
          aptent interdum purus feugiat a id aliquet erat himenaeos nunc
          torquent euismod adipiscing adipiscing dui gravida justo.
        </p>

        {/* Highlighted Section */}
        <p className="bg-[#FF9F0D] text-white font-bold text-lg p-6 rounded-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>

        {/* Additional Paragraphs */}
        <p className="text-[#4F4F4F] text-lg leading-7">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>

        {/* Second Blog Image */}
        <Image
          src="/pictures/blogdetailimg2.png"
          alt="blog"
          width={400}
          height={300}
          className="w-full rounded-lg mx-auto"
        />

        <p className="text-[#4F4F4F] text-lg leading-7">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </div>

      {/* Comment Section */}
      <div className="max-w-4xl mx-auto px-6 lg:px-20 py-10">
        <h1 className="text-2xl font-bold mb-6">Comments - 03</h1>

        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg">Placeholder for Comment 1</div>
          <div className="bg-gray-100 p-6 rounded-lg">Placeholder for Comment 2</div>
          <div className="bg-gray-100 p-6 rounded-lg">Placeholder for Comment 3</div>
        </div>

        {/* Post a Comment */}
        <h1 className="text-xl font-bold mt-12 mb-4">Post a Comment</h1>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Name*"
              className="border px-4 py-2 w-full md:w-[48%] rounded-md"
            />
            <input
              type="email"
              placeholder="Email*"
              className="border px-4 py-2 w-full md:w-[48%] rounded-md"
            />
          </div>
          <textarea
            placeholder="Write a Comment..."
            className="border px-4 py-2 w-full h-32 rounded-md"
          ></textarea>
          <button className="bg-[#FF9F0D] text-white px-6 py-2 rounded-md hover:bg-white/35 hover:text-[#FF9F0D] border border-[#FF9F0D] transition">
            Post a Comment
          </button>
        </div>
      </div>

      <Stillyouneed />
      <Footer />
    </div>
  );
};

export default page;
