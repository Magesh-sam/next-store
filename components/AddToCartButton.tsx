"use client";
import { ShoppingBag } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { ProductProps } from "@/types/types";
import { AppDispatch } from "@/redux/store";
import { addToCart } from "@/redux/Slices/cartSlice";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import axios from "axios";
function AddToCartButton({ item: product }: { item: ProductProps }) {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isLoading } = useUser();
  const router = useRouter();
  if (isLoading) {
    return <> </>;
  }

  const handleAddToCart = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!user) {
      dispatch(addToCart(product));
      router.replace("/localcart");
      router.refresh();
    }

    const uid = user?.email;
    await axios
      .post("/api/addtocart", { product, uid })
      .then(() => {
        router.replace("/cart");
        router.refresh();
      })
      .catch((err) => console.log(err));
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
