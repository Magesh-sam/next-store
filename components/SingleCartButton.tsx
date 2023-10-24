"use client";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { ProductProps } from "@/types/types";

import { collection, addDoc } from "firebase/firestore";
import { useUser } from "@auth0/nextjs-auth0/client";
import { db } from "@/firebase/config";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/Slices/cartSlice";

function SingleCartButton({ product }: { product: ProductProps }) {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const uid = user?.email;
  const dispatch = useDispatch();
  if (isLoading) {
    return <> </>;
  }
  const handleAddToCart = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Adding to cart button working");
    if (!user) {
      dispatch(addToCart(product));
      router.replace("/localcart");
    }
    try {
      await addDoc(collection(db, "cartitems"), {
        image: product.thumbnail,
        title: product.title,
        price: product.price,
        productId: Date.now(),
        quantity: 1,
        uid,
      });
      router.replace("/cart");
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  return (
    <Button onClick={handleAddToCart}>
      Add to Cart <ShoppingBag className="ml-2" />
    </Button>
  );
}

export default SingleCartButton;
