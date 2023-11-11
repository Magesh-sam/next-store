import { db } from "@/firebase/config";
import { WishListItemAPIProps, WishListItemProps } from "@/types/types";
import { addDoc, collection } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { product, uid }: { product: WishListItemAPIProps; uid: string } =
    await req.json();

  try {
    await addDoc(collection(db, "wishlist"), {
      image: product.image,
      title: product.title,
      price: product.price,
      uid,
    });

    return NextResponse.json({
      success: true,
      status: 200,
    });
  } catch (err) {
    console.log("req failed", err);
    return NextResponse.json({
      success: false,
      status: 500,
      error: err,
    });
  }
}
