"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Stillyouneed from "../components/Stillyouneed";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
};

const ShopList = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(1000);
  

  useEffect(() => {
    fetch("/api/products") 
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
        setFilteredProducts(data); 
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const matchesPrice = product.price <= priceRange;
  
      console.log({
        product,
        matchesSearch,
        matchesCategory,
        matchesPrice,
      });
  
      return matchesSearch && matchesCategory && matchesPrice;
    });
  
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategories, priceRange, products]);
  

  const handleAddToCart = (product: Product) => {
    const cartItem = { ...product, quantity: 1, total: product.price };

    addToCart(cartItem);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };


 

  return (
    <div>
      <Navbar />
      <div className="relative">
        <Image
          src="/pictures/ourmenu.png"
          alt="menu"
          width={1920}
          height={410}
        />
      </div>

      <div className="flex flex-col-reverse lg:flex-row-reverse px-4 sm:px-8 lg:px-12 mt-16 mb-10 gap-8">
        {/* Filter Sidebar */}
        <div className="lg:w-1/4 bg-gray-50 p-6 shadow-lg rounded-md">
          <div className="mb-6">
            <label
              htmlFor="search"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Search Product
            </label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search product"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-2">Category</p>
            {["Fast Food", "Bakery", "Dairy", "Drink", "Italian",].map(
              (category) => (
                <div key={category} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={category}
                    className="ml-2 text-sm text-gray-700"
                  >
                    {category}
                  </label>
                </div>
              )
            )}
          </div>


          <div>
            <Image src="/pictures/Banner.png" alt="img" width={250} height={250}></Image>
          </div>
          <br/>

          <div className="mb-6">
            <label
              htmlFor="price-range"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Filter by Price
            </label>
            <input
              type="range"
              id="price-range"
              min="0"
              max="1000"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>0 Rupees</span>
              <span>{priceRange} Rupees</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Product Tags</p>
            <br/>
            <div className="flex flex-wrap gap-2">
              {["Healthy", "Drink", "Sandwiches", "Fast Food","Fresh", "Bakery","Cheesy","Dairy", "Creamy","Vegetarian", "Italian"].map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            </div>
        </div>

        {/* Products Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 mt-2 mb-9">
          {filteredProducts.map((product) => (
            <div key={product.id} className="rounded shadow-lg p-4 bg-white">
              <Image
                src={product.image}
                alt={product.name}
                width={312}
                height={330}
                className="rounded cursor-pointer"
              />
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">Price: Rs {product.price}</p>
              <div className="flex gap-4 mt-4">
                <Link
                  href={`/shop/${product.id}`}
                  className="bg-indigo-500 text-white text-sm px-5 py-2 rounded-lg shadow hover:bg-indigo-600"
                >
                  View Details
                </Link>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-orange-500 text-white text-sm px-5 py-2 rounded-lg shadow hover:bg-orange-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <ToastContainer />
      <Stillyouneed />
      <Footer />
    </div>
  );
};

export default ShopList;
