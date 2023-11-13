import React from "react";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { addToCart } from "@/redux/Slices/cartSlice";
import { useDispatch } from "react-redux";
import { CartItemAPIProps } from "@/types/types";
import { useRouter } from "next/navigation";

function LocalCartButton({
  productToDispatch,
}: {
  productToDispatch: CartItemAPIProps;
}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleAddToCart = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addToCart(productToDispatch));
    router.push("/localcart");
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

export default LocalCartButton;
