"use client";
import React from "react";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { CartItemAPIProps, CartItemProps } from "@/types/types";
import { api } from "@/axios/config";
import { useRouter } from "next/navigation";

function WishlistToCartBtn({
  item,
  userId,
}: {
  item: CartItemProps;
  userId: string;
}) {
  const product: CartItemAPIProps = {
    id: item.id,
    title: item.title,
    image: item.image,
    price: item.price,
    quantity: 1,
  };

  const router = useRouter();
  const uid = userId;

  const id = item.docId;

  const handleAddToCart = async () => {
    await api
      .post("/addtocart", { product, uid })
      .then(async (res) => {
        console.log(res);
        router.push("/cart");
        router.refresh();
        await api
          .post("/deleteitem", { id, type: "wishlist" })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        console.log("deleted from wishlist");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Button onClick={handleAddToCart} className="flex items-center gap-3">
      Add To Cart <ShoppingBag />
    </Button>
  );
}

export default WishlistToCartBtn;
