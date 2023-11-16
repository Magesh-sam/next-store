"use client";
import { ShoppingBag } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addToCart } from "@/redux/Slices/cartSlice";
import { useRouter } from "next/navigation";
import { CartItemAPIProps } from "@/types/types";

function SingleLocalCartBtn({ product }: { product: CartItemAPIProps }) {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const handleAddToCart = () => {
    console.log("Add to cart");
    dispatch(addToCart(product));
    console.log(" added to cart");
    router.replace("/localcart");
  };
  return (
    <Button onClick={handleAddToCart}>
      Add to Cart <ShoppingBag className="ml-2" />
    </Button>
  );
}

export default SingleLocalCartBtn;
