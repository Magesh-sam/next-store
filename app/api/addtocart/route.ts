import { ProductProps } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";

export async function POST(req: NextRequest) {
  const { product, uid }: { product: ProductProps; uid: string } =
    await req.json();

  try {
    await addDoc(collection(db, "cartitems"), {
      image: product.thumbnail,
      title: product.title,
      price: product.price,
      productId: Date.now(),
      quantity: 1,
      uid,
    });
    return NextResponse.json({
      success: true,
      status: 200,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      status: 500,
      message: err,
    });
  }
}
