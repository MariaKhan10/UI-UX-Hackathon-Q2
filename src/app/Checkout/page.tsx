"use client";
"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Stillyouneed from "../components/Stillyouneed";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const Page = () => {
  const { cartItems, cartSubtotal, shippingCharge, totalAmount } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phoneNumber: "",
    country: "",
    city: "",
    zipCode: "",
    address1: "",
    address2: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    // Check if all required fields are filled
    if (
      !formValues.firstName ||
      !formValues.lastName ||
      !formValues.email ||
      !formValues.company ||
      !formValues.phoneNumber ||
      !formValues.country ||
      !formValues.city ||
      !formValues.zipCode ||
      !formValues.zipCode ||
      !formValues.address1
    ) {
      setErrorMessage("Please fill in all required shipping address details before placing the order.");
      setOrderPlaced(false);
      return;
    }

    // Clear error message if form is valid
    setErrorMessage("");
    setOrderPlaced(true);

    // Optional: Hide the success message after a few seconds
    setTimeout(() => setOrderPlaced(false), 3000);
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
          <h1 className="text-white font-bold text-[20px]">Check out Page</h1>
        </div>
      </div>

      {/* Left Section Starts */}
      <div className="flex flex-col sm:flex-row p-16 sm:px-14 sm:py-10 gap-6">
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
                value={formValues.firstName}
                onChange={handleInputChange}
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
                value={formValues.lastName}
                onChange={handleInputChange}
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
                value={formValues.email}
                onChange={handleInputChange}
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
                placeholder="Enter your company name"
                value={formValues.company}
                onChange={handleInputChange}
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
                value={formValues.phoneNumber}
                onChange={handleInputChange}
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
                value={formValues.country}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              >
                <option value="" disabled>
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
                value={formValues.city}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              >
                <option value="" disabled>
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
                value={formValues.zipCode}
                onChange={handleInputChange}
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
                value={formValues.address1}
                onChange={handleInputChange}
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
                value={formValues.address2}
                onChange={handleInputChange}
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
        <div className="w-full sm:w-1/3 px-8 py-6 gap-6 rounded-lg shadow-md mt-20 bg-white">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>

          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between text-gray-700">
                <span>{item.name}</span>
                <span>${item.total.toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-between text-lg font-bold text-gray-800 mt-4">
            <span>Total</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="flex items-center justify-between w-full bg-[#FF9F0D] text-white hover:bg-[#e88d0c] focus:ring-2 focus:ring-orange-400 px-8 py-4 rounded-md mt-10"
          >
            <span>Place an Order</span>
            <span className="text-xl">&rarr;</span>
          </button>

          {errorMessage && (
            <div className="mt-6 p-4 rounded-md bg-red-100 text-red-800 text-center shadow-md">
              {errorMessage}
            </div>
          )}

{orderPlaced && (
  <div className="mt-6 p-6 rounded-lg bg-gradient-to-r from-green-400 to-green-500 text-white text-center shadow-lg flex items-center justify-center gap-4">
   <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-12 w-12 text-white"
  viewBox="0 0 20 20"
  fill="currentColor"
>
  <path
    fillRule="evenodd"
    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
    clipRule="evenodd"
  />
</svg>

    <span className="font-semibold text-lg">
      Your order has been placed successfully!
    </span>
  </div>
)}


        </div>
      </div>

      <Stillyouneed />
      <Footer />
    </div>
  );
};

export default Page;
