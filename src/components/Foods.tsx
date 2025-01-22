"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Great_Vibes } from '@next/font/google';

const greatVibes = Great_Vibes({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const Foods = () => {
  const [foods, setFoods] = useState<any[]>([]);

  useEffect(() => {
    async function fetchFoods() {
      const data = await client.fetch(
        `*[_type == "food"]{
          name,
          originalPrice,
          category,
          available,
          image,
          description,
          price,
          _id
        }`
      );
      setFoods(data);
    }
    fetchFoods();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className={`${greatVibes.className} font-normal text-[44px] leading-10 text-[#FF9F0D] text-center`}>
        Food Menu
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {foods.map((food) => (
          <div
            key={food._id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-white"
          >
            <Image
              src={urlFor(food.image).url()}
              alt={food.name}
              width={400}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900">{food.name}</h2>
              <p className="text-lg text-gray-600 mt-2">
                {food.price} Rupees
              </p>
              <p className="text-sm text-gray-500 mt-1">{food.category}</p>
              <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                {food.description}
              </p>
              <p
                className={`text-sm font-medium mt-4 ${
                  food.available ? "text-green-600" : "text-red-600"
                }`}
              >
                {food.available ? "Available" : "Not Available"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
