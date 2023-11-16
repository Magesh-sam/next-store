import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { CartItemAPIProps } from "@/types/types";
import { addToCartToDB } from "@/lib/actions";
import { getSession } from "@auth0/nextjs-auth0";
import SingleLocalCartBtn from "./SingleLocalCartBtn";

async function SingleCartButton({ product }: { product: CartItemAPIProps }) {
  const session = await getSession();
  if (!session) {
    return <SingleLocalCartBtn product={product} />;
  }
  const addCartItemToDB = addToCartToDB.bind(
    null,
    product,
    session?.user.email,
  );

  return (
    <form action={addCartItemToDB}>
      <Button>
        Add to Cart <ShoppingBag className="ml-2" />
      </Button>
    </form>
  );
}

export default SingleCartButton;
