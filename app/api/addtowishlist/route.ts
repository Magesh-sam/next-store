import { db } from "@/firebase/config";
import { ProductProps } from "@/types/types";
import { addDoc, collection } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { product, uid }: { product: ProductProps; uid: string } =
    await req.json();

  try {
    await addDoc(collection(db, "wishlist"), {
      image: product.thumbnail,
      title: product.title,
      price: product.price,
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
      error: err,
    });
  }
}
