import { NextResponse } from 'next/server';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export async function GET() {
  const products: Product[] = [
    { id: 1, name: 'Fresh Lime', price: 200, image: '/pictures/shop1.png' },
    { id: 2, name: 'Burger', price: 500, image: '/pictures/shop2.png' },
    { id: 3, name: 'Country Burger', price: 300, image: '/pictures/shop3.png' },
    { id: 4, name: 'Pizza', price: 150, image: '/pictures/shop4.png' },
    { id: 5, name: 'Cheese Butter', price: 100, image: '/pictures/shop5.png' },
    { id: 6, name: 'Sandwiches', price: 250, image: '/pictures/shop6.png' },
    { id: 7, name: 'Chicken Chup', price: 550, image: '/pictures/shop7.png' },
    { id: 8, name: 'Veggie Pasta', price: 320, image: '/pictures/shop8.png' },
    { id: 9, name: 'Muffin', price: 180, image: '/pictures/shop9.png' },
  ];
  return NextResponse.json(products);
}
