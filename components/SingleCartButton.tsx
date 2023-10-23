"use client";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { ProductProps } from "@/types/types";

import { collection, addDoc } from "firebase/firestore";
import { useUser } from "@auth0/nextjs-auth0/client";
import { db } from "@/firebase/config";

function SingleCartButton({ product }: { product: ProductProps }) {
  const { user, error, isLoading } = useUser();
  const uid = user?.email;

  const addToCart = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const docRef = await addDoc(collection(db, "cartitems"), {
        image: product.thumbnail,
        title: product.title,
        price: product.price,
        productId: Date.now(),
        quantity: 1,
        uid,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  return (
    <Button onClick={addToCart}>
      Add to Cart <ShoppingBag className="ml-2" />
    </Button>
  );
}

export default SingleCartButton;
