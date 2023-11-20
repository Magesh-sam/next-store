import { Heart } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { WishListItemAPIProps } from "@/types/types";
import { getSession } from "@auth0/nextjs-auth0";
import LocalWishlistBtn from "./LocalWishlistBtn";
import { addToWishlist } from "@/lib/actions";

async function AddToWishlistButton({
  product,
}: {
  product: WishListItemAPIProps;
}) {
  const session = await getSession();

  const uid = session?.user.email;

  if (!session || uid === undefined || uid.length === 0) {
    return <LocalWishlistBtn />;
  }
  const AddToWishlistWithProduct = addToWishlist.bind(null, product, uid);
  return (
    <form action={AddToWishlistWithProduct}>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Add to wishlist"
        title="Add to wishlist"
        className="hover:cursor-pointer hover:bg-primary hover:text-secondary "
      >
        <Heart />
      </Button>
    </form>
  );
}

export default AddToWishlistButton;
