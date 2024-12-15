import React from 'react';
import Navbar from '../components/Navbar';
import Stillyouneed from '../components/Stillyouneed';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

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
          <h1 className="text-white font-bold text-[20px]">Check out Page</h1>
        </div>
      </div>

      {/* Left Section Starts */}
      <div className="flex flex-col sm:flex-row p-10 sm:px-14 sm:py-10 gap-6">
        <div className="w-full sm:w-1/2">
          <h1 className="text-xl font-bold text-gray-700 mb-4 mt-2">Shipping Address</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="text-gray-700 font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                className="border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="text-gray-700 font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                className="border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="text-gray-700 font-medium">
                Email Address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="text-gray-700 font-medium">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
                className="border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="text-gray-700 font-medium">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Enter your company"
                className="border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="text-gray-700 font-medium">
                Country
              </label>
              <select
                id="country"
                name="country"
                className="border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              >
                <option value="" disabled selected>
                  Choose Country
                </option>
                <option value="PAK">Pakistan</option>
                <option value="USA">United States</option>
                <option value="Canada">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="Australia">Australia</option>
              </select>
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="text-gray-700 font-medium">
                City
              </label>
              <select
                id="city"
                name="city"
                className="border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              >
                <option value="" disabled selected>
                  Choose City
                </option>
                <option value="Khi">Karachi</option>
                <option value="Toronto">Toronto</option>
                <option value="London">London</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Sydney">Sydney</option>
              </select>
            </div>

            {/* Zip Code */}
            <div>
              <label htmlFor="zipCode" className="text-gray-700 font-medium">
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                placeholder="Enter your zip code"
                className="border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              />
            </div>

            {/* Address 1 */}
            <div>
              <label htmlFor="address1" className="text-gray-700 font-medium">
                Address 1
              </label>
              <input
                type="text"
                id="address1"
                name="address1"
                placeholder="Enter your address"
                className="border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              />
            </div>

            {/* Address 2 */}
            <div>
              <label htmlFor="address2" className="text-gray-700 font-medium">
                Address 2
              </label>
              <input
                type="text"
                id="address2"
                name="address2"
                placeholder="Enter your address"
                className="border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              />
            </div>
          </div>

          {/* Billing Address */}
          <div className="mt-10">
            <h1 className="text-xl font-bold text-gray-700 mb-4 mt-2">Billing Address</h1>

            {/* Same as Shipping Address Checkbox */}
            <div className="flex items-center space-x-2 mb-4">
              <input
                type="checkbox"
                id="sameAsShipping"
                name="sameAsShipping"
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="sameAsShipping" className="text-gray-700 font-medium">
                Same as shipping address
              </label>
            </div>

            {/* Buttons */}
<div className="flex flex-col sm:flex-row justify-center sm:justify-between mt-4 w-full max-w-lg mx-auto gap-4">
  {/* Back to Cart Button */}
  <Link href="ShoppingCart">
    <button
      className="font-bold flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
      style={{ width: '260px', height: '48px' }} // Match input field dimensions
    >
      <span className="text-xl mr-2">&lt;</span> Back to cart
    </button>
  </Link>

  {/* Proceed to Shipping Button */}
  <Link href="">
    <button
      className="flex items-center justify-center bg-[#FF9F0D] text-white hover:bg-[#e88d0c] focus:ring-2 focus:ring-orange-400"
      style={{ width: '260px', height: '48px' }}
    >
      Proceed to shipping <span className="text-xl ml-2">&gt;</span>
    </button>
  </Link>
</div>



          </div>
        </div>

        {/* Right Section Starts */}
        <div className="w-full sm:w-1/3 px-8 py-6 gap-6 rounded-lg shadow-md mt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>

          {/* Items List */}
          <div className="mb-4">
            <ul className="space-y-4"> {/* Increased gap between items */}
              <li className="flex justify-between text-gray-700">
                <span>Item 1</span>
                <span>$50.00</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>Item 2</span>
                <span>$30.00</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>Item 3</span>
                <span>$50.00</span>
              </li>
            </ul>
          </div>

          <hr className="my-4 border-gray-300" />

          {/* Calculations */}
          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between">
              <span>Sub-total</span>
              <span>$130.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Discount (25%)</span>
              <span>-$32.50</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>$56.70</span>
            </div>
          </div>

          <hr className="my-4 border-gray-300" />

          {/* Total */}
          <div className="flex justify-between text-lg font-bold text-gray-800">
            <span>Total</span>
            <span>$154.20</span>
          </div>

          {/* Place an Order Button */}
          <Link href="">
            <button
              className="flex items-center justify-between w-full bg-[#FF9F0D] text-white hover:bg-[#e88d0c] focus:ring-2 focus:ring-orange-400 px-8 py-4 rounded-md mt-10"
            >
              <span>Place an Order</span>
              <span className="text-xl">&rarr;</span>
            </button>
          </Link>
        </div>
        {/* Right Section Ends */}
      </div>

      <Stillyouneed />
      <Footer />
    </div>
  );
};

export default Page;
