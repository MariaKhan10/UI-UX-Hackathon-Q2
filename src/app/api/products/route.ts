import { NextResponse } from 'next/server';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  loading : string;
  category : string;
  tags: string[]
};

export async function GET() {
  const products: Product[] = [
    { id: 1, name: "Fresh Lime", price: 200, image: "/pictures/shop1.png", loading: "lazy" ,category: "Drink", tags: ["Healthy", "Drink"] },
    { id: 2, name: "Burger", price: 500, image: "/pictures/shop2.png", loading: "lazy" ,category: "Fast Food", tags: ["Fast Food"] },
    { id: 3, name: "Country", price: 300, image: "/pictures/shop3.png", loading: "lazy" ,category:"Fast Food" , tags: ["Fast Food"] },
    { id: 4, name: "Pizza", price: 150, image: "/pictures/shop4.png", loading: "lazy" ,category: "Fast Food", tags: ["Cheesy", "Fast Food"] },
    { id: 5, name: "Cheese Butter", price: 100, image: "/pictures/shop5.png", loading: "lazy" ,category: "Dairy", tags: ["Dairy", "Creamy"] },
    { id: 6, name: "Sandwiches", price: 250, image: "/pictures/shop6.png", loading: "lazy" ,category: "Fast Food", tags: ["Healthy", "Quick Bite"] },
    { id: 7, name: "Chicken Chup", price: 550, image: "/pictures/shop7.png", loading: "lazy" ,category: "Fast Food", tags: ["Chicken", "Spicy"] },
    { id: 8, name: "Veggie Pasta", price: 320, image: "/pictures/shop8.png", loading: "lazy" ,category: "Italian", tags: ["Vegetarian", "Italian"] },
    { id: 9, name: "Muffin", price: 180, image: "/pictures/shop9.png", loading: "lazy" ,category: "Bakery", tags: ["Sweet", "Bakery"] },
  ];
  return NextResponse.json(products)
}
