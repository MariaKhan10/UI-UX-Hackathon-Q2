// "use client";

// import Image from "next/image";
// import { useRouter } from "next/router";
// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Stillyouneed from "../components/Stillyouneed";
// import Footer from "../components/Footer";

// // Mock product data
// const products = [
//   {
//     id: "1",
//     name: "Fresh Lime",
//     price: "200",
//     stock: "In Stock",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.",
//     rating: 5.0,
//     reviews: 22,
//     images: [
//       "/pictures/shopdetail1.png",
//       "/pictures/shopdetail2.png",
//       "/pictures/shopdetail3.png",
//       "/pictures/shopdetail4.png",
//       "/pictures/shopdetail5.png",
//     ],
//     category: "Pizza",
//     tag: "Our Shop",
//   },
//   // Add more products as needed
// ];

// const ShopDetails = () => {
//   const router = useRouter();
//   const { id } = router.query; // Get dynamic id from route
//   const product = products.find((p) => p.id === id);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const [count, setCount] = useState(0);

//   const increment = () => setCount(count + 1);
//   const decrement = () => {
//     if (count > 0) setCount(count - 1);
//   };

//   return (
//     <div>
//       <Navbar />

//       {/* Hero Section */}
//       <div className="relative">
//         <Image
//           src="/pictures/ourmenu.png"
//           alt="menu"
//           width={1920}
//           height={550}
//           className="w-full object-cover"
//         />
//         <div className="absolute inset-0 flex justify-center items-center">
//           <Image
//             src="/pictures/shopdetails.png"
//             alt={product.name}
//             width={160}
//             height={104}
//             className="max-w-full h-auto"
//           />
//         </div>
//       </div>

//       {/* Product Details Section */}
//       <div className="flex justify-center items-center mt-20 px-10 py-4">
//         <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-6xl">
//           {/* Images */}
//           <div className="grid grid-cols-2 md:flex md:flex-col gap-4">
//             {product.images.map((img, index) => (
//               <Image key={index} src={img} alt="img" width={290} height={190} />
//             ))}
//           </div>

//           {/* Product Info */}
//           <div className="w-full lg:w-1/2 space-y-6">
//             <h1 className="text-white bg-[#FF9F0D] w-24 lg:w-32 text-center rounded">
//               {product.stock}
//             </h1>
//             <h1 className="font-bold text-[28px] lg:text-[48px] leading-10 text-[#333333]">
//               {product.name}
//             </h1>
//             <p className="font-normal text-[14px] lg:text-[18px] leading-6 text-[#4F4F4F]">
//               {product.description}
//             </p>
//             <hr />
//             <h1 className="font-bold text-[24px] lg:text-[32px] leading-10 text-[#333333]">
//               {product.price}
//             </h1>
//             <div className="flex flex-row items-center space-x-2 mt-4">
//               {Array.from({ length: Math.floor(product.rating) }).map((_, i) => (
//                 <span key={i} className="text-[#FF9F0D] text-lg lg:text-3xl">
//                   ★
//                 </span>
//               ))}
//               <span className="text-gray-300 text-lg lg:text-3xl">★</span>
//               <p className="font-normal text-[14px] lg:text-[16px] leading-6 text-[#828282]">
//                 | {product.rating} Rating |
//               </p>
//               <p className="font-normal text-[14px] lg:text-[16px] leading-6 text-[#828282]">
//                 {product.reviews} Review
//               </p>
//             </div>
//             <div className="flex flex-row items-center gap-4 mt-4">
//               <div className="flex flex-row items-center border border-gray-400 rounded p-2 w-fit space-x-4">
//                 <button
//                   onClick={decrement}
//                   className="text-lg font-bold px-4 py-1 hover:bg-gray-200 focus:outline-none"
//                 >
//                   -
//                 </button>
//                 <span className="text-xl font-semibold">{count}</span>
//                 <button
//                   onClick={increment}
//                   className="text-lg font-bold px-4 py-1 hover:bg-gray-200 focus:outline-none"
//                 >
//                   +
//                 </button>
//               </div>
//               <button className="bg-[#FF9F0D] hover:bg-[#ff960dcc] text-white flex items-center gap-2 px-4 py-2">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Stillyouneed/>
//       <Footer />
//     </div>
//   );
// };

// export default ShopDetails;
