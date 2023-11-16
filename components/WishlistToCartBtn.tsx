import React from "react";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { CartItemAPIProps, WishListItemProps } from "@/types/types";

import { addToWishlist_to_Cart } from "@/lib/actions";

function WishlistToCartBtn({
  item,
  userId,
}: {
  item: WishListItemProps;
  userId: string;
}) {
  const product: WishListItemProps = {
    id: item.id,
    title: item.title,
    image: item.image,
    price: item.price,
    docId: item.docId,
    uid: userId,
  };

  const addCartItemToDB = addToWishlist_to_Cart.bind(null, product, userId);

  return (
    <form action={addCartItemToDB}>
      <Button className="flex items-center gap-3">
        Add To Cart <ShoppingBag />
      </Button>
    </form>
  );
}

export default WishlistToCartBtn;
