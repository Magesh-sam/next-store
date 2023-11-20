import { ShoppingBag } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { CartItemAPIProps } from "@/types/types";

import { addToCart } from "@/lib/actions";
import LocalCartButton from "./LocalCartButton";
import { getSession } from "@auth0/nextjs-auth0";
async function AddToCartButton({ item: product }: { item: CartItemAPIProps }) {
  const session = await getSession();

  if (!session) {
    return <LocalCartButton productToDispatch={product} />;
  }
  const addCartItemToDB = addToCart.bind(null, product, session.user.email);
  return (
    <form action={addCartItemToDB}>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Add to cart"
        title="Add to cart"
        className="hover:cursor-pointer hover:bg-primary hover:text-secondary "
      >
        <ShoppingBag />
      </Button>
    </form>
  );
}

export default AddToCartButton;
