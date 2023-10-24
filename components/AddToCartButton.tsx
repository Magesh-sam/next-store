"use client";
import { ShoppingBag } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { ProductProps } from "@/types/types";
import { AppDispatch } from "@/redux/store";
import { addToCart } from "@/redux/Slices/cartSlice";
import { useUser } from "@auth0/nextjs-auth0/client";
import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { redirect, useRouter } from "next/navigation";
function AddToCartButton({ item: product }: { item: ProductProps }) {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isLoading } = useUser();
  const router = useRouter();
  const uid = user?.email;

  if (isLoading) {
    return <> </>;
  }

  const handleAddToCart = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!user) {
      dispatch(addToCart(product));
      router.replace("/localcart");
    }
    try {
      await addDoc(collection(db, "cartitems"), {
        image: product.thumbnail,
        title: product.title,
        price: product.price,
        productId: Date.now(),
        quantity: 1,
        uid,
      });
      router.replace("/cart");
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Add to cart"
      title="Add to cart"
      className="hover:cursor-pointer hover:bg-primary hover:text-secondary "
      onClick={(e) => handleAddToCart(e)}
    >
      <ShoppingBag />
    </Button>
  );
}

export default AddToCartButton;
