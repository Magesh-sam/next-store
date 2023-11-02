import { db } from "@/firebase/config";
import { deleteDoc, doc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { id, type }: { id: string; type: "wishlist" | "cartitems" } =
    await req.json();
  try {
    await deleteDoc(doc(db, type, id));
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
