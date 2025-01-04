// src/app/shop/[id]/page.tsx

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Stillyouneed from '@/app/components/Stillyouneed';

const ProductDetailsPage = ({ params }: { params: { id: string } }) => {
  const { id } = params; // Get the product ID from the dynamic route

  // Sample product data for multiple products
  const products = [
    {
      id: 1,
      name: "Fresh Lime",
      description: "Refreshing and zesty lime flavor, crafted with a perfect balance of tanginess and natural sweetness.",
      price: "200 Rupees/-",
      imageUrl: "/pictures/shop1.png",
      additionalInfo: "A delightful treat for your taste buds, perfect for any occasion!",
      reviews: 4.5,
      specifications: [
        "Natural lime essence",
        "No artificial additives",
        "Bursting with flavor",
        "Healthy and refreshing"
      ]
    },
    {
      id: 2,
      name: "Burger",
      description: "A juicy burger with fresh veggies, flavorful sauces, and a soft bun for a delightful experience.",
      price: "500 Rupees/-",
      imageUrl: "/pictures/shop2.png",
      additionalInfo: "Ideal for lunch, dinner, or a quick snack!",
      reviews: 4.8,
      specifications: [
        "Freshly baked bun",
        "Juicy patty",
        "Topped with fresh veggies",
        "Rich and savory"
      ]
    },
    {
      id: 3,
      name: "Country Burger",
      description: "Savor the rustic flavors of our Country Burger, crafted with wholesome ingredients and a juicy patty for a satisfying bite.",
      price: "300 Rupees/-",
      imageUrl: "/pictures/shop3.png", 
      additionalInfo: "A hearty meal perfect for any time of the day, made with love and care!",
      reviews: 4.7,
      specifications: [
        "Whole-grain bun",
        "Farm-fresh ingredients",
        "Succulent patty",
        "Rich, smoky flavor"
      ]
    },
    {
      id: 4,
      name: "Pizza",
      description: "Indulge in the cheesy goodness of our freshly baked pizza, topped with premium ingredients for a delightful experience.",
      price: "150 Rupees/-",
      imageUrl: "/pictures/shop4.png", 
      additionalInfo: "Perfect for sharing with friends and family or enjoying all to yourself!",
      reviews: 4.9,
      specifications: [
        "Thin, crispy crust",
        "Rich, melted cheese",
        "Fresh, premium toppings",
        "Authentic Italian flavor"
      ]
    },
    {
      id: 5,
      name: "Cheese Butter",
      description: "Experience the rich, creamy delight of our Cheese Butter, made with the finest ingredients for a melt-in-your-mouth texture.",
      price: "100 Rupees/-",
      imageUrl: "/pictures/shop5.png", 
      additionalInfo: "Perfect as a spread, dip, or topping for a variety of dishes!",
      reviews: 4.6,
      specifications: [
        "Made from high-quality cheese",
        "Rich and creamy texture",
        "Versatile usage",
        "Irresistible flavor"
      ]
    },
    {
      id: 6,
      name: "Sandwiches",
      description: "Delight in our freshly made sandwiches, packed with flavorful fillings and crafted to perfection for a satisfying meal.",
      price: "250 Rupees/-",
      imageUrl: "/pictures/shop6.png",
      additionalInfo: "Great for a quick bite or a hearty snack anytime!",
      reviews: 4.7,
      specifications: [
        "Soft and fresh bread",
        "Loaded with delicious fillings",
        "Perfectly balanced flavors",
        "Great for on-the-go meals"
      ]
    },
    {
      id: 7,
      name: "Chicken Chup",
      description: "Savor the crispy perfection of our Chicken Chup, infused with a rich blend of spices and cooked to golden-brown perfection.",
      price: "550 Rupees/-",
      imageUrl: "/pictures/shop7.png", 
      additionalInfo: "A delightful treat that’s crispy on the outside and tender on the inside!",
      reviews: 4.8,
      specifications: [
        "Fresh and tender chicken",
        "Crispy golden coating",
        "Infused with aromatic spices",
        "Perfect for any occasion"
      ]
    },
    {
      id: 8,
      name: "Veggie Pasta",
      description: "Enjoy a bowl of wholesome Veggie Pasta, loaded with fresh vegetables and tossed in a flavorful sauce for a delightful experience.",
      price: "320 Rupees/-",
      imageUrl: "/pictures/shop8.png", 
      additionalInfo: "A healthy and tasty option, perfect for lunch or dinner!",
      reviews: 4.7,
      specifications: [
        "Made with premium pasta",
        "Fresh garden vegetables",
        "Tossed in a rich, savory sauce",
        "Healthy and satisfying"
      ]
    },
    {
      id: 9,
      name: "Muffin",
      description: "Treat yourself to our soft and fluffy Muffin, baked to perfection and bursting with delightful flavors.",
      price: "180 Rupees/-",
      imageUrl: "/pictures/shop9.png", 
      additionalInfo: "Perfect for breakfast, dessert, or a quick snack on the go!",
      reviews: 4.6,
      specifications: [
        "Freshly baked daily",
        "Soft and moist texture",
        "Available in various flavors",
        "Ideal for any time of the day"
      ]
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
          <h1 className="text-2xl font-bold text-red-500">Product not found!</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center px-10 py-10 bg-gray-100">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-6xl bg-white rounded-lg shadow-lg p-6">
  <div className="flex flex-col lg:flex-row gap-4">
    <div className="w-full lg:w-1/2 h-[450px]">  {/* Set a height for the container */}
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={480}
        height={500} 
        className="rounded-lg object-cover h-[500] w-[480]"  
      />
    </div>
    <div className="w-full lg:w-1/2 space-y-6">
      <h1 className="font-bold text-4xl">{product.name}</h1>
      <p className="text-lg text-gray-700">{product.description}</p>
      <h2 className="font-bold text-2xl text-green-500">{product.price}</h2>

      <div className="mt-4">
        <h3 className="text-xl font-semibold">Additional Information</h3>
        <p className="text-gray-600">{product.additionalInfo}</p>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold">Specifications</h3>
        <ul className="list-disc pl-5 text-gray-600">
          {product.specifications.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
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
