import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client"; // Import your Sanity client

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.customerName || !body.email || !body.cartItems || body.cartItems.length === 0) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const orderData = {
      _type: "order",
      customerName: body.customerName,
      email: body.email,
      phone: body.phone,
      address: body.address,
      cartItems: body.cartItems,
      totalAmount: body.totalAmount,
      status: "Pending",
    };

    const response = await client.create(orderData);
    return NextResponse.json({ message: "Order placed successfully", order: response });
  } catch (error) {
    console.error("Error placing order:", error);
    return NextResponse.json({ error: "Failed to place order" }, { status: 500 });
  }
}
