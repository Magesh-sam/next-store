"use client";
import { ShoppingBag } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { ProductProps } from "./Product";
import { AppDispatch } from "@/redux/store";
import { addToCart } from "@/redux/cartSlice";

function AddToCartButton({ item }: { item: ProductProps }) {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(addToCart(item));
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Add to bag"
      title="Add to bag"
      className="hover:cursor-pointer hover:bg-primary hover:text-secondary  "
      onClick={(e) => handleAddToCart(e)}
    >
      <ShoppingBag />
    </Button>
  );
}

export default AddToCartButton;
