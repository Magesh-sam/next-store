"use client";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { ProductProps } from "@/types/types";
import { useUser } from "@auth0/nextjs-auth0/client";
import setCart from "@/kv/setCart";
import getCart from "@/kv/getCart";
function SingleCartButton({ product }: { product: ProductProps }) {
  const { user, error, isLoading } = useUser();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  const addToCart = async (item: ProductProps) => {
    const userID = user?.email;
    //@ts-ignore
    await setCart({ key: userID, value: item });
    //@ts-ignore
    await getCart({ key: userID });
  };

  return (
    <Button onClick={() => addToCart(product)}>
      Add to Cart <ShoppingBag className="ml-2" />
    </Button>
  );
}

export default SingleCartButton;
