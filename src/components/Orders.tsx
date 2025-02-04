"use client";

import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await client.fetch(
          `*[_type == "order"]{
            _id,
            customerName,
            email,
            phone,
            address,
            paymentMethod,
            totalAmount,
            status
          }`
        );
        setOrders(data);
      } catch (err) {
        setError("Failed to load orders. Please try again later.");
        console.error("Error fetching orders:", err);
      }
    }
    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-[#FF9F0D]">Orders</h1>
      
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="border border-gray-300 px-4 py-2">Order ID</th>
              <th className="border border-gray-300 px-4 py-2">Customer</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className="border border-gray-300 px-4 py-2">Payment</th>
              <th className="border border-gray-300 px-4 py-2">Total</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{order._id}</td>
                <td className="border border-gray-300 px-4 py-2">{order.customerName}</td>
                <td className="border border-gray-300 px-4 py-2">{order.email}</td>
                <td className="border border-gray-300 px-4 py-2">{order.phone}</td>
                <td className="border border-gray-300 px-4 py-2">{order.paymentMethod}</td>
                <td className="border border-gray-300 px-4 py-2">{order.totalAmount} Rupees</td>
                <td className="border border-gray-300 px-4 py-2">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
