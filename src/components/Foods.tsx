import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

const Foods = async () => {
  const query = await client.fetch(
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

  console.log(query);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Food Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {query.map((food: any) => (
          <div
            key={food._id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <Image
              src={urlFor(food.image).url()}
              alt={food.name}
              width={150}
              height={150}
              className="w-full h-auto rounded-md"
            />
            <h2 className="text-lg font-semibold mt-4">{food.name}</h2>
            <p className="text-gray-600 mt-2">${food.price}</p>
            <p className="text-sm text-gray-500 mt-1">{food.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
