// src/app/shop/[id]/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Stillyouneed from "@/app/components/Stillyouneed";

const ProductDetailsPage = ({ params }: { params: { id: string } }) => {
  const { id } = params; // Get the product ID from the dynamic route

  // Sample product data for multiple products
  const products = [
    {
      id: 1,
      name: "Fresh Lime",
      description:
        "A refreshing and zesty lime flavor that awakens your taste buds with its invigorating essence, meticulously crafted to achieve the perfect balance of tanginess and natural sweetness. Each sip delivers a delightful burst of citrusy goodness, making it an irresistible treat for every occasion, leaving you craving more.",
      price: "200 Rupees/-",
      imageUrl: "/pictures/shop1.png",
      additionalInfo:
        "A delightful treat for your taste buds, perfect for any occasion!",
      reviews: 4.5,
      specifications: [
        "Natural lime essence",
        "No artificial additives",
        "Bursting with flavor",
        "Healthy and refreshing",
      ],
    },
    {
      id: 2,
      name: "Burger",
      description:
        "A juicy burger crafted to perfection, packed with fresh, crisp veggies that add a refreshing crunch, complemented by a medley of rich, flavorful sauces for an irresistible taste. Encased in a soft, fluffy bun, each bite delivers a satisfying and delightful culinary experience. Every bite offers a delightful combination of textures and tastes, creating an irresistible treat for your taste buds.",
      price: "500 Rupees/-",
      imageUrl: "/pictures/shop2.png",
      additionalInfo: "Ideal for lunch, dinner, or a quick snack!",
      reviews: 4.8,
      specifications: [
        "Freshly baked bun",
        "Juicy patty",
        "Topped with fresh veggies",
        "Rich and savory",
      ],
    },
    {
      id: 3,
      name: "Country",
      description:
        "Savor the rustic flavors of our Country Burger, made with the finest ingredients for a truly wholesome experience. The juicy, perfectly seasoned patty is complemented by fresh, crisp veggies and rich, savory sauces. All of this is nestled in a soft, freshly baked bun. This hearty burger is sure to satisfy your hunger with every bite, offering a taste of tradition in every mouthful.",
      price: "300 Rupees/-",
      imageUrl: "/pictures/shop3.png",
      additionalInfo:
        "A hearty meal perfect for any time of the day, made with love and care!",
      reviews: 4.7,
      specifications: [
        "Whole-grain bun",
        "Farm-fresh ingredients",
        "Succulent patty",
        "Rich, smoky flavor",
      ],
    },
    {
      id: 4,
      name: "Pizza",
      description:
        "Indulge in the cheesy goodness of our freshly baked pizza, made with a perfectly crispy crust and topped with an array of premium ingredients. Each slice is loaded with rich, melted cheese, savory toppings, and aromatic herbs. Whether shared with friends or enjoyed alone, this pizza delivers a satisfying burst of flavor in every bite. Perfect for any occasion, it promises a delightful experience that will keep you coming back for more.",
      price: "150 Rupees/-",
      imageUrl: "/pictures/shop4.png",
      additionalInfo:
        "Perfect for sharing with friends and family or enjoying all to yourself!",
      reviews: 4.9,
      specifications: [
        "Thin, crispy crust",
        "Rich, melted cheese",
        "Fresh, premium toppings",
        "Authentic Italian flavor",
      ],
    },
    {
      id: 5,
      name: "Cheese Butter",
      description:
        "Experience the rich, creamy delight of our Cheese Butter, crafted with the finest ingredients to deliver a smooth, melt-in-your-mouth texture. This indulgent spread adds a luxurious touch to your dishes, whether used as a topping, dip, or filling. With its velvety consistency and irresistible flavor, it elevates any meal to new heights of deliciousness. Perfect for spreading on toast, pairing with vegetables, or enhancing your favorite recipes, this Cheese Butter is a must-have for any food lover.",
      price: "100 Rupees/-",
      imageUrl: "/pictures/shop5.png",
      additionalInfo:
        "Perfect as a spread, dip, or topping for a variety of dishes!",
      reviews: 4.6,
      specifications: [
        "Made from high-quality cheese",
        "Rich and creamy texture",
        "Versatile usage",
        "Irresistible flavor",
      ],
    },
    {
      id: 6,
      name: "Sandwiches",
      description:
        "Delight in our freshly made sandwiches, expertly crafted with a variety of flavorful fillings to satisfy your cravings. Each sandwich is made with soft, freshly baked bread, and packed with premium ingredients for a wholesome and delicious bite. Whether you're in the mood for something savory or light, our sandwiches are designed to provide a satisfying meal that’s both tasty and fulfilling. Perfect for lunch, dinner, or a quick snack, these sandwiches will leave you feeling nourished and content with every bite.",
      price: "250 Rupees/-",
      imageUrl: "/pictures/shop6.png",
      additionalInfo: "Great for a quick bite or a hearty snack anytime!",
      reviews: 4.7,
      specifications: [
        "Soft and fresh bread",
        "Loaded with delicious fillings",
        "Perfectly balanced flavors",
        "Great for on-the-go meals",
      ],
    },
    {
      id: 7,
      name: "Chicken Chup",
      description:
        "Savor the crispy perfection of our Chicken Chup, a mouthwatering dish that’s infused with a rich blend of aromatic spices. Each piece is expertly seasoned and fried to golden-brown perfection, ensuring a crunchy exterior that gives way to tender, juicy chicken inside. The combination of flavors will tantalize your taste buds, making every bite a satisfying experience. Whether you're a spice lover or enjoy a crispy treat, this dish offers the ideal balance of flavor and texture that will leave you craving more. Perfect for any occasion, our Chicken Chup is sure to impress.",
      price: "550 Rupees/-",
      imageUrl: "/pictures/shop7.png",
      additionalInfo:
        "A delightful treat that’s crispy on the outside and tender on the inside!",
      reviews: 4.8,
      specifications: [
        "Fresh and tender chicken",
        "Crispy golden coating",
        "Infused with aromatic spices",
        "Perfect for any occasion",
      ],
    },
    {
      id: 8,
      name: "Veggie Pasta",
      description:
        "Enjoy a bowl of wholesome Veggie Pasta, bursting with an array of fresh, garden-picked vegetables that add both color and nutrition. Tossed in a rich, savory sauce made from the finest ingredients, this dish offers a perfect balance of flavors. The tender pasta absorbs the sauce beautifully, creating a delightful and satisfying meal that’s both healthy and tasty. Whether you’re looking for a light lunch or a fulfilling dinner, this Veggie Pasta is the perfect choice for those who appreciate fresh, wholesome ingredients in every bite. It's a dish that promises both comfort and satisfaction.",
      price: "320 Rupees/-",
      imageUrl: "/pictures/shop8.png",
      additionalInfo:
        "A healthy and tasty option, perfect for lunch or dinner!",
      reviews: 4.7,
      specifications: [
        "Made with premium pasta",
        "Fresh garden vegetables",
        "Tossed in a rich, savory sauce",
        "Healthy and satisfying",
      ],
    },
    {
      id: 9,
      name: "Muffin",
      description:
        "Treat yourself to our soft and fluffy Muffin, baked to perfection with a golden-brown crust that’s both tender and light. Each bite is filled with delightful flavors that burst in your mouth, whether it’s the sweetness of fruits, the richness of chocolate, or the comforting essence of vanilla. Made with high-quality ingredients, this muffin offers the perfect balance of moist texture and flavor. Ideal for breakfast, an afternoon snack, or a sweet treat anytime, our Muffin is a satisfying indulgence that will leave you coming back for more. Perfectly paired with your favorite beverage or enjoyed on its own, it's the ideal way to brighten your day.",
      price: "180 Rupees/-",
      imageUrl: "/pictures/shop9.png",
      additionalInfo:
        "Perfect for breakfast, dessert, or a quick snack on the go!",
      reviews: 4.6,
      specifications: [
        "Freshly baked daily",
        "Soft and moist texture",
        "Available in various flavors",
        "Ideal for any time of the day",
      ],
    },

    // Add more products as needed
  ];

  // Find the product by ID
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl font-bold text-red-500">
            Product not found!
          </h1>
        </div>
        <Footer />
      </div>
    );
  }

  // Counter Component
//   const CounterWithCart = () => {
//     const [count, setCount] = useState(1);

//     const increment = () => setCount(count + 1);
//     const decrement = () => {
//       if (count > 1) setCount(count - 1);
//     };

//     return (
//       <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4">
//   {/* Counter */}
//   <div className="flex items-center border border-gray-300 mb-4 sm:mb-0">
//     <button
//       onClick={decrement}
//       className="px-6 py-2 text-gray-700 hover:bg-gray-100 border-r border-gray-300"
//     >
//       -
//     </button>
//     <span className="px-4 py-2 text-gray-900">{count}</span>
//     <button
//       onClick={increment}
//       className="px-6 py-2 text-gray-700 hover:bg-gray-100 border-l border-gray-300"
//     >
//       +
//     </button>
//   </div>

//   {/* Add to Cart Button */}
//   <button className="flex items-center text-center justify-center m-auto bg-[#FF9F0D] text-white px-4 py-2 hover:bg-orange-600 w-full sm:w-auto">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="currentColor"
//       viewBox="0 0 24 24"
//       className="w-5 h-5 mr-2"
//     >
//       <path d="M16 20a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-8 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm1.26-4h10.77a3.47 3.47 0 0 0 3.39-2.77l1.38-6A1 1 0 0 0 23 7H6.31L5.27 3.41A1 1 0 0 0 4.32 3H1a1 1 0 0 0 0 2h2.31l3.6 10.59a1 1 0 0 0 .95.68H18a1 1 0 1 0 0-2H8.46l-.27-.75ZM18.42 12H7.74L6.28 8h15.07l-1.38 6a1.47 1.47 0 0 1-1.45 1Z" />
//     </svg>
//     Add to Cart
//   </button>
// </div>

//     );
//   };

  return (
    <div>
  <Navbar />
  <div className="flex justify-center items-center px-10 py-10 bg-gray-100">
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl bg-white rounded-lg shadow-lg p-6">
      {/* Image Section */}
      <div className="w-full lg:w-auto h-[450px]">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={480}
          height={500}
          className="rounded-lg object-cover h-[450px] w-full"
        />
      </div>

      {/* Product Details Section */}
      <div className="space-y-6">
        <h1 className="font-bold text-4xl">{product.name}</h1>
        <p className="text-lg text-gray-700">{product.description}</p>
        <p className="border-b border-dotted border-gray-300"></p>

        <h2 className="font-bold text-2xl text-[#333333]">
          {product.price}
        </h2>
        <div className="flex items-center space-x-2">
          <div className="flex text-[#FF9F0D]">
            {Array(Math.round(product.reviews))
              .fill("")
              .map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
          </div>
          <span className="text-gray-700 font-medium text-sm">
            {product.reviews} Rating
          </span>
          <span className="text-gray-500 text-sm">(22 Reviews)</span>
        </div>
        {/* <CounterWithCart /> */}

        <p className="border-b border-dotted border-gray-300"></p>

        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <button>
              <span className="text-lg hover:text-red-700">
                Add to Wishlist
              </span>
            </button>
            <button className="hover:text-red-700 text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </button>
          </div>
          <span className="text-lg text-gray-600">Category: </span>
          <br />
          <span className="text-lg text-gray-600">Tag: Our Shop</span>
        </div>

        {/* Share Icons Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <span className="text-[#333333] text-base sm:text-lg font-bold">
            Share:
          </span>
          <div className="flex space-x-3">
            <a className="text-[#333333] bg-white cursor-pointer hover:text-[#FF9F0D]">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="text-[#333333] bg-white cursor-pointer hover:text-[#FF9F0D]">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="text-[#333333] bg-white cursor-pointer hover:text-[#FF9F0D]">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="text-[#333333] bg-white cursor-pointer hover:text-[#FF9F0D]">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="w-full lg:col-span-2 text-left py-6 gap-6">
        <div className="flex items-center space-x-4">
          <h1 className="text-white bg-[#FF9F0D] px-5 py-1 w-fit">
            Description
          </h1>
          <span className="text-gray-700 font-medium">Reviews (24)</span>
        </div>

        <br />

        <p className="text-[#828282]">
        Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
        </p>
        <br />
        <p className="text-[#828282]">
        Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.
        </p>
        <br />

        <h2 className="text-[#828282]">Key Benefits</h2>
        <br />

        <ul className="list-disc ml-8 text-[#828282]">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
          <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
          <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
          <li>Mauris eget diam magna, in blandit turpis.</li>
        </ul>
      </div>



      <div>
  <h1 className="text-2xl font-bold">Similar Products</h1>

  <br />
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
    <div className="text-center">
      <Image
        src="/pictures/shop1.png"
        alt="Fresh Lime"
        width={350}
        height={330}
        className="w-full h-auto"
      />
      <h1 className="font-bold py-2">Fresh Lime</h1>
      <p className="text-[#FF9F0D]">
        <span className="line-through">250 Rs/-</span> 200 Rs/-
      </p>
    </div>

    <div className="text-center">
      <Image
        src="/pictures/shop6.png"
        alt="Sandwiches"
        width={350}
        height={330}
        className="w-full h-auto"
      />
      <h1 className="font-bold py-2">Sandwiches</h1>
      <p className="text-[#FF9F0D]">250 Rs/-</p>
    </div>

    <div className="text-center">
      <Image
        src="/pictures/shop3.png"
        alt="Country Burger"
        width={350}
        height={330}
        className="w-full h-auto"
      />
      <h1 className="font-bold py-2">Country Burger</h1>
      <p className="text-[#FF9F0D]">300 Rs/-</p>
    </div>

    <div className="text-center">
      <Image
        src="/pictures/shop7.png"
        alt="Country Burger"
        width={350}
        height={330}
        className="w-full h-auto"
      />
      <h1 className="font-bold py-2">Chicken Chup</h1>
      <p className="text-[#FF9F0D]">550 Rs/-</p>
    </div>

    <div className="text-center">
      <Image
        src="/pictures/shop9.png"
        alt="Country Burger"
        width={350}
        height={330}
        className="w-full h-auto"
      />
      <h1 className="font-bold py-2">Muffin</h1>
      <p className="text-[#FF9F0D]">180 Rs/-</p>
    </div>
  </div>
</div>
 </div>
  </div>
<Stillyouneed />
<Footer />
</div>


  );
};

export default ProductDetailsPage;
