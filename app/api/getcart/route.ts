import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { id }: { id: string } = await req.json();
  const cartItemsRef = collection(db, "cartitems");
  const q = query(cartItemsRef, where("uid", "==", id));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => doc.data());
  const dataId = querySnapshot.docs.map((doc) => doc.id);
  const cartItems = data.map((item, index) => {
    return {
      id: dataId[index],
      image: item.image,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    };
  });
  try {
    return NextResponse.json({
      success: true,
      status: 200,
      cartItems,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      status: 500,
      error: err,
    });
  }
}
