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


      {/* Starter Menu */}
      <div className="flex flex-col md:flex-row justify-between px-8 md:px-14 p-24 space-y-4 md:space-y-0">
        {/* Left Side */}
        <div className="w-full md:w-1/3">
          <Image src="/pictures/starter.png" alt="Starter Menu" width={350} height={1000} />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-2/3 space-y-4">
          <h1 className="font-bold text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] text-[#333333]">
            Starter Menu
          </h1>

          {/* Menu Items */}
         
              <div className="flex justify-between items-start">
                {/* Menu Description */}
                <div>
                  <h2 className="font-bold text-[20px] md:text-[24px] leading-8 text-[#333333] cursor-pointer hover:text-[#FF9F0D]">
                    Alder Grilled Chinook Salmon
                  </h2>
                  <p className="font-normal text-[14px] md:text-[16px] leading-6 text-[#4F4F4F]">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="text-[#828282]">560 CAL</p>
                </div>

                {/* Price */}
                <p className="text-[#FF9F0D] font-bold text-[20px] md:text-[24px] leading-8">
                  32$
                </p>

            </div>

            <p className="border-b border-dotted border-gray-300"></p>


              
              <div className="flex justify-between items-start">
                {/* Menu Description */}
                <div>
                  <h2 className="font-bold text-[20px] md:text-[24px] leading-8 text-[#333333] cursor-pointer hover:text-[#FF9F0D]">
                  Berries and creme tart
                  </h2>
                  <p className="font-normal text-[14px] md:text-[16px] leading-6 text-[#4F4F4F]">
                  Gorgonzola, ricotta, mozzarella, taleggio
                  </p>
                  <p className="text-[#828282]">700 CAL</p>
                </div>

                {/* Price */}
                <p className="text-[#FF9F0D] font-bold text-[20px] md:text-[24px] leading-8">
                  43$
                </p>
              </div>

              <p className="border-b border-dotted border-gray-300"></p>

              <div className="flex justify-between items-start">
                {/* Menu Description */}
                <div>
                  <h2 className="font-bold text-[20px] md:text-[24px] leading-8 text-[#333333] cursor-pointer hover:text-[#FF9F0D]">
                  Tormentoso Bush Pizza Pintoage
                  </h2>
                  <p className="font-normal text-[14px] md:text-[16px] leading-6 text-[#4F4F4F]">
                  Ground cumin, avocados, peeled and cubed
                  </p>
                  <p className="text-[#828282]">1000 CAL</p>
                </div>

                {/* Price */}
                <p className="text-[#FF9F0D] font-bold text-[20px] md:text-[24px] leading-8">
                  14$
                </p>
              </div>
              <p className="border-b border-dotted border-gray-300"></p>


              <div className="flex justify-between items-start">
                {/* Menu Description */}
                <div>
                  <h2 className="font-bold text-[20px] md:text-[24px] leading-8 text-[#333333] cursor-pointer hover:text-[#FF9F0D]">
                  Spicy Vegan Potato Curry
                  </h2>
                  <p className="font-normal text-[14px] md:text-[16px] leading-6 text-[#4F4F4F]">
                  Spreadable cream cheese, crumbled blue cheese
                  </p>
                  <p className="text-[#828282]">560 CAL</p>
                </div>

                {/* Price */}
                <p className="text-[#FF9F0D] font-bold text-[20px] md:text-[24px] leading-8">
                  35$
                </p>
              </div>

              <p className="border-b border-dotted border-gray-300"></p>
           
        </div>
      </div>

      {/* Main Course */}
      <div className="flex flex-col md:flex-row justify-between px-8 md:px-14 py-12 space-y-4 md:space-y-0">
        {/* Left Side */}
        <div className="w-full md:w-2/3 space-y-4">
          <h1 className="font-bold text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] text-[#333333]">
            Main Course
          </h1>

          {/* Menu Items */}
         
              <div className="flex justify-between items-start">
                {/* Menu Description */}
                <div>
                  <h2 className="font-bold text-[20px] md:text-[24px] leading-8 text-[#333333] cursor-pointer hover:text-[#FF9F0D]">
                  Optic Big Breakfast Combo Menu
                  </h2>
                  <p className="font-normal text-[14px] md:text-[16px] leading-6 text-[#4F4F4F]">
                  Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="text-[#828282]">560 CAL</p>
                </div>

                {/* Price */}
                <p className="text-[#FF9F0D] font-bold text-[20px] md:text-[24px] leading-8">
                32$
                </p>
              </div>
              <p className="border-b border-dotted border-gray-300"></p>

              
              <div className="flex justify-between items-start">
                {/* Menu Description */}
                <div>
                  <h2 className="font-bold text-[20px] md:text-[24px] leading-8 text-[#333333] cursor-pointer hover:text-[#FF9F0D]">
                  Cashew Chicken With Stir-Fry
                  </h2>
                  <p className="font-normal text-[14px] md:text-[16px] leading-6 text-[#4F4F4F]">
                  Gorgonzola, ricotta, mozzarella, taleggio
                  </p>
                  <p className="text-[#828282]">700 CAL</p>
                </div>

                {/* Price */}
                <p className="text-[#FF9F0D] font-bold text-[20px] md:text-[24px] leading-8">
                  43$
                </p>
              </div>

              <p className="border-b border-dotted border-gray-300"></p>

              <div className="flex justify-between items-start">
                {/* Menu Description */}
                <div>
                  <h2 className="font-bold text-[20px] md:text-[24px] leading-8 text-[#333333] cursor-pointer hover:text-[#FF9F0D]">
                  Vegetables & Green Salad
                  </h2>
                  <p className="font-normal text-[14px] md:text-[16px] leading-6 text-[#4F4F4F]">
                  Ground cumin, avocados, peeled and cubed
                  </p>
                  <p className="text-[#828282]">1000 CAL</p>
                </div>

                {/* Price */}
                <p className="text-[#FF9F0D] font-bold text-[20px] md:text-[24px] leading-8">
                  14$
                </p>
              </div>

              <p className="border-b border-dotted border-gray-300"></p>

              <div className="flex justify-between items-start">
                {/* Menu Description */}
                <div>
                  <h2 className="font-bold text-[20px] md:text-[24px] leading-8 text-[#333333] cursor-pointer hover:text-[#FF9F0D]">
                  Spicy Vegan Potato Curry
                  </h2>
                  <p className="font-normal text-[14px] md:text-[16px] leading-6 text-[#4F4F4F]">
                  Spreadable cream cheese, crumbled blue cheese
                  </p>
                  <p className="text-[#828282]">560 CAL</p>
                </div>

                {/* Price */}
                <p className="text-[#FF9F0D] font-bold text-[20px] md:text-[24px] leading-8">
                  35$
                </p>
              </div>

              <p className="border-b border-dotted border-gray-300"></p>
           
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/3 pl-0 md:pl-28">
          <Image src="/pictures/maincourse.png" alt="Main Course" width={390} height={1000} />
        </div>
      </div>

      {/* Clients */}
      <Clients />

      {/* Desserts */}
      <div className="flex flex-col md:flex-row justify-between px-8 md:px-14 py-12 space-y-4 md:space-y-0">
        {/* Left Side */}
        <div className="w-full md:w-1/3">
          <Image src="/pictures/deserts.png" alt="Desserts" width={350} height={1000} />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-2/3 space-y-4">
          <h1 className="font-bold text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] text-[#333333]">
            Desserts
          </h1>

          {/* Menu Items */}
          
              <div className="flex justify-between items-start">
                {/* Menu Description */}
                <div>
                  <h2 className="font-bold text-[20px] md:text-[24px] leading-8 text-[#333333] cursor-pointer hover:text-[#FF9F0D]">
                  Fig and lemon cake
                  </h2>
                  <p className="font-normal text-[14px] md:text-[16px] leading-6 text-[#4F4F4F]">
                  Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="text-[#828282]">560 CAL</p>
                </div>

                {/* Price */}
                <p className="text-[#FF9F0D] font-bold text-[20px] md:text-[24px] leading-8">
                  32$
                </p>
              </div>

              <div className="flex justify-between items-start">
                {/* Menu Description */}
                <div>
                  <h2 className="font-bold text-[20px] md:text-[24px] leading-8 text-[#333333] cursor-pointer hover:text-[#FF9F0D]">
                  Creamy mascarpone cake
                  </h2>
                  <p className="font-normal text-[14px] md:text-[16px] leading-6 text-[#4F4F4F]">
                  Gorgonzola, ricotta, mozzarella, taleggio
                  </p>
                  <p className="text-[#828282]">700 CAL</p>
                </div>

                {/* Price */}
                <p className="text-[#FF9F0D] font-bold text-[20px] md:text-[24px] leading-8">
                  43$
                </p>
              </div>

              <p className="border-b border-dotted border-gray-300"></p>

              
              <div className="flex justify-between items-start">
                {/* Menu Description */}
                <div>
                  <h2 className="font-bold text-[20px] md:text-[24px] leading-8 text-[#333333] cursor-pointer hover:text-[#FF9F0D]">
                  Pastry, blueberries, lemon juice
                  </h2>
                  <p className="font-normal text-[14px] md:text-[16px] leading-6 text-[#4F4F4F]">
                  Ground cumin, avocados, peeled and cubed
                  </p>
                  <p className="text-[#828282]">1000 CAL</p>
                </div>

                {/* Price */}
                <p className="text-[#FF9F0D] font-bold text-[20px] md:text-[24px] leading-8">
                  14$
                </p>
              </div>

              <p className="border-b border-dotted border-gray-300"></p>


              <div className="flex justify-between items-start">
                {/* Menu Description */}
                <div>
                  <h2 className="font-bold text-[20px] md:text-[24px] leading-8 text-[#333333] cursor-pointer hover:text-[#FF9F0D]">
                  Pain au chocolate
                  </h2>
                  <p className="font-normal text-[14px] md:text-[16px] leading-6 text-[#4F4F4F]">
                  Spreadable cream cheese, crumbled blue cheese
                  </p>
                  <p className="text-[#828282]">560 CAL</p>
                </div>

                {/* Price */}
                <p className="text-[#FF9F0D] font-bold text-[20px] md:text-[24px] leading-8">
                  35$
                </p>
              </div>

              <p className="border-b border-dotted border-gray-300"></p>
            
        </div>
      </div>

      {/* Drinks */}
      <div className="flex flex-col md:flex-row justify-between px-8 md:px-14 py-12 space-y-4 md:space-y-0">
        {/* Left Side */}
        <div className="w-full md:w-2/3 space-y-4">
          <h1 className="font-bold text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] text-[#333333]">
            Drinks
          </h1>

          {/* Menu Items */}
         
              <div className="flex justify-between items-start">
                {/* Menu Description */}
                <div>
                  <h2 className="font-bold text-[20px] md:text-[24px] leading-8 text-[#333333] cursor-pointer hover:text-[#FF9F0D]">
                  Caffè macchiato
                  </h2>
                  <p className="font-normal text-[14px] md:text-[16px] leading-6 text-[#4F4F4F]">
                  Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="text-[#828282]">560 CAL</p>
                </div>

                {/* Price */}
                <p className="text-[#FF9F0D] font-bold text-[20px] md:text-[24px] leading-8">
                  32$
                </p>
              </div>

              <p className="border-b border-dotted border-gray-300"></p>

              
              <div className="flex justify-between items-start">
                {/* Menu Description */}
                <div>
                  <h2 className="font-bold text-[20px] md:text-[24px] leading-8 text-[#333333] cursor-pointer hover:text-[#FF9F0D]">
                  Aperol Spritz Capacianno
                  </h2>
                  <p className="font-normal text-[14px] md:text-[16px] leading-6 text-[#4F4F4F]">
                  Gorgonzola, ricotta, mozzarella, taleggio
                  </p>
                  <p className="text-[#828282]">700 CAL</p>
                </div>

                {/* Price */}
                <p className="text-[#FF9F0D] font-bold text-[20px] md:text-[24px] leading-8">
                43$
                </p>
              </div>


              <p className="border-b border-dotted border-gray-300"></p>

                
              <div className="flex justify-between items-start">
                {/* Menu Description */}
                <div>
                  <h2 className="font-bold text-[20px] md:text-[24px] leading-8 text-[#333333] cursor-pointer hover:text-[#FF9F0D]">
                  Caffe Latte Campuri
                  </h2>
                  <p className="font-normal text-[14px] md:text-[16px] leading-6 text-[#4F4F4F]">
                  Ground cumin, avocados, peeled and cubed
                  </p>
                  <p className="text-[#828282]">1000 CAL</p>
                </div>

                {/* Price */}
                <p className="text-[#FF9F0D] font-bold text-[20px] md:text-[24px] leading-8">
                14$
                </p>
              </div>

              <p className="border-b border-dotted border-gray-300"></p>

              <div className="flex justify-between items-start">
                {/* Menu Description */}
                <div>
                  <h2 className="font-bold text-[20px] md:text-[24px] leading-8 text-[#333333] cursor-pointer hover:text-[#FF9F0D]">
                  Tormentoso BushTea Pintoage
                  </h2>
                  <p className="font-normal text-[14px] md:text-[16px] leading-6 text-[#4F4F4F]">
                  Spreadable cream cheese, crumbled blue cheese                  </p>
                  <p className="text-[#828282]">560 CAL</p>
                </div>

                {/* Price */}
                <p className="text-[#FF9F0D] font-bold text-[20px] md:text-[24px] leading-8">
                35$
                </p>
              </div>

              <p className="border-b border-dotted border-gray-300"></p>
            
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/3 pl-0 md:pl-28">
          <Image src="/pictures/drinks.png" alt="Drinks" width={350} height={1000} />
        </div>
      </div>

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
