"use client";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { ProductProps } from "@/types/types";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/Slices/cartSlice";
import axios from "axios";
import { useToast } from "./ui/use-toast";
import { useUser } from "@auth0/nextjs-auth0/client";

function SingleCartButton({ product }: { product: ProductProps }) {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { user, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) {
    return <> </>;
  }
  const uid = user?.email;

  const handleAddToCart = async () => {
    if (!uid || uid.length === 0) {
      dispatch(addToCart(product));
      router.replace("/localcart");
      router.refresh();
    }

    await axios
      .post("/api/addtocart", { product, uid })
      .then(() => {
        router.replace("/cart");
        router.refresh();
      })
      .catch((err) => toast({ title: "Error", description: err.message }));
  };

  return (
    <Button onClick={handleAddToCart}>
      Add to Cart <ShoppingBag className="ml-2" />
    </Button>
  );
}

export default SingleCartButton;
