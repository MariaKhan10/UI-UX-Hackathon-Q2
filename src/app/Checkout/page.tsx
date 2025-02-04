"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Stillyouneed from "../components/Stillyouneed";
import Footer from "../components/Footer";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import OrderReceipt from "../components/OrderReceipt";
import { client } from "@/sanity/lib/client";
import { nanoid } from "nanoid"; // Import nanoid for unique keys
import Swal from "sweetalert2";

const Page = () => {
  const { cartItems, cartSubtotal, shippingCharge, totalAmount } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [bankDetails, setBankDetails] = useState({
    accountName: "",
    accountNumber: "",
    bankName: "",
  });
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

  const [errorMessages, setErrorMessages] = useState({
    email: "",
    phoneNumber: "",
    zipCode: "",
    firstName: "",
    lastName: "",
    company: "",
    address1: "",
    address2: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let sanitizedValue = value;
    let newErrorMessages = { ...errorMessages };

    // Sanitize input values and validate fields
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      sanitizedValue = value;

      if (!value.includes("@")) {
        newErrorMessages.email = "Email must contain '@'";
      } else if (!emailRegex.test(value) && value.length > 0) {
        newErrorMessages.email = "Invalid email format";
      } else {
        newErrorMessages.email = "";
      }
    } else if (name === "phoneNumber") {
      sanitizedValue = value.replace(/[^0-9]/g, "");
    } else if (name === "zipCode") {
      sanitizedValue = value.replace(/[^0-9]/g, "");
    } else if (["firstName", "lastName", "company"].includes(name)) {
      sanitizedValue = value.replace(/[^a-zA-Z\s]/g, "");
    } else if (["address1", "address2"].includes(name)) {
      sanitizedValue = value.replace(/[<>]/g, ""); // Remove any HTML tags
    }

    setFormValues((prev) => ({ ...prev, [name]: sanitizedValue }));
    setErrorMessages(newErrorMessages); // Update error messages
  };

  const handleBankDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBankDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedPaymentMethod(e.target.value);
  };
  const handlePlaceOrder = async () => {
    try {
      // ⏳ Processing Loader Show Karna
      Swal.fire({
        title: "Placing Order...",
        text: "Please wait while we process your order.",
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
  
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerName: `${formValues.firstName} ${formValues.lastName}`,
          email: formValues.email,
          phone: formValues.phoneNumber,
          address: formValues.address1,
          cartItems: cartItems.map((item) => ({
            ...item,
            _key: nanoid(), // ✅ Unique _key added to each item
          })),
          totalAmount: totalAmount,
        }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error: ${response.status} - ${errorText}`);
      }
  
      if (!selectedPaymentMethod) {
        setErrorMessage("Please select a payment method.");
        Swal.close(); // Loader Band Karna
        return;
      }
  
      setErrorMessage(""); // Error message clear karna
      setOrderPlaced(true); // Order receipt open karna
      const data = await response.json();
      console.log("Order placed successfully:", data);
  
      // ✅ Order Success Message Show Karna
      Swal.fire({
        title: "Order Placed!",
        text: "Your order has been placed successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error placing order:", error);
  
      // ❌ Error Modal Show Karna
      Swal.fire({
        title: "Error!",
        text: "Something went wrong while placing your order. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="relative">
        <Image
          src="/pictures/ourmenu.png"
          alt="menu"
          width={1920}
          height={550}
          className="w-full object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white font-bold text-[20px]">Check out Page</h1>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row p-16 sm:px-14 sm:py-10 gap-6">
        <div className="w-full sm:w-1/2">
          <h1 className="text-xl font-bold text-gray-700 mb-4 mt-2">
            Shipping Address
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {/*shipping address inputs */}
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
              {errorMessages.email && <span>{errorMessages.email}</span>}
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
              <label
                htmlFor="phoneNumber"
                className="text-gray-700 font-medium"
              >
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
            <h1 className="text-xl font-bold text-gray-700 mb-4 mt-2">
              Billing Address
            </h1>

            {/* Same as Shipping Address Checkbox */}
            <div className="flex items-center space-x-2 mb-4">
              <input
                type="checkbox"
                id="sameAsShipping"
                name="sameAsShipping"
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="sameAsShipping"
                className="text-gray-700 font-medium"
              >
                Same as shipping address
              </label>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between mt-4 w-full max-w-lg mx-auto gap-4">
              {/* Back to Cart Button */}
              <Link href="ShoppingCart">
                <button
                  className="font-bold flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                  style={{ width: "260px", height: "48px" }} // Match input field dimensions
                >
                  <span className="text-xl mr-2">&lt;</span> Back to cart
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section Starts  */}
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 sm:px-6 py-6 gap-6 rounded-lg shadow-lg mt-10 sm:mt-20 bg-white border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 text-center sm:text-left">
            Order Summary
          </h2>

          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between p-3 bg-gray-100 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md shadow-md object-cover"
                  />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">
                    {item.name}
                  </span>
                </div>
                <span className="text-gray-900 font-semibold text-sm sm:text-sm sm:ml-4 min-w-[80px] text-right">
                  {item.total.toFixed(2)} Rupees
                </span>
              </li>
            ))}
          </ul>

          <div className="flex justify-between text-base sm:text-lg font-bold text-gray-800 mt-6 border-t pt-4">
            <span>Total</span>
            <span className="text-blue-600">
              {totalAmount.toFixed(2)} Rupees
            </span>
          </div>
        </div>

        {/* Payment Method Section */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Payment Method
          </h2>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer text-gray-700 font-medium">
              <input
                type="radio"
                value="cod"
                name="paymentMethod"
                checked={selectedPaymentMethod === "cod"}
                onChange={handlePaymentMethodChange}
                className="accent-blue-500 w-5 h-5"
              />
              Cash on Delivery (COD)
            </label>

            <label className="flex items-center gap-3 cursor-pointer text-gray-700 font-medium">
              <input
                type="radio"
                value="bankTransfer"
                name="paymentMethod"
                checked={selectedPaymentMethod === "bankTransfer"}
                onChange={handlePaymentMethodChange}
                className="accent-blue-500 w-5 h-5"
              />
              Bank Transfer
            </label>
          </div>

          {selectedPaymentMethod === "bankTransfer" && (
            <div className="mt-6 space-y-3">
              <h2 className="font-bold text-gray-700">Bank Details</h2>
              <input
                type="text"
                name="bankName"
                placeholder="Bank Name"
                value={bankDetails.bankName}
                onChange={handleBankDetailsChange}
                className="border border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-md px-4 py-2 text-gray-800 w-full"
              />
              <input
                type="text"
                name="accountName"
                placeholder="Account Name"
                value={bankDetails.accountName}
                onChange={handleBankDetailsChange}
                className="border border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-md px-4 py-2 text-gray-800 w-full"
              />
              <input
                type="text"
                name="accountNumber"
                placeholder="Account Number"
                value={bankDetails.accountNumber}
                onChange={handleBankDetailsChange}
                className="border border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-md px-4 py-2 text-gray-800 w-full"
              />
            </div>
          )}

          <button
            className="bg-[#FF9F0D] text-white hover:bg-[#f7c780] transition-all font-medium rounded-md px-10 py-3 mt-6 w-full shadow-md"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>

          {errorMessage && (
            <p className="text-red-500 mt-4 text-center">{errorMessage}</p>
          )}
        </div>

        {orderPlaced && (
          <OrderReceipt
            orderPlaced={orderPlaced}
            formValues={formValues}
            cartItems={cartItems}
            selectedPaymentMethod={selectedPaymentMethod}
            bankDetails={bankDetails}
            cartSubtotal={cartSubtotal}
            shippingCharge={shippingCharge}
            totalAmount={totalAmount}
          />
        )}
      </div>

      <Stillyouneed />
      <Footer />
    </div>
  );
};

export default Page;
