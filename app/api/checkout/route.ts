import { ProductProps } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const { products }: { products: ProductProps[] } = await req.json();
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-08-16",
  });
  const checkoutItems = products.map((product: ProductProps) => ({
    price_data: {
      currency: "usd",
      unit_amount: product.price * 100,
      product_data: {
        name: product.title,
        images: [product.thumbnail],
        metadata: {
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
        },
      },
    },
    quantity: 1,
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: checkoutItems,
    success_url: `${req.nextUrl.origin}/payment/success`,
    cancel_url: `${req.nextUrl.origin}/products`,
  });

  return NextResponse.json({
    success: true,
    status: 200,
    id: session.id,
  });
}
