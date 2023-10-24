"use client";
import { Heart } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { ProductProps } from "@/types/types";
import { useToast } from "./ui/use-toast";
import { useUser } from "@auth0/nextjs-auth0/client";
import { ToastAction } from "./ui/toast";
import { useRouter } from "next/navigation";

function AddToWishlistButton({ product }: { product: ProductProps }) {
  const { toast } = useToast();
  const { user, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) {
    return <> </>;
  }
  const uid = user?.email;
  const handleAddToWishlist = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    console.log("it's working!");
    if (!user) {
      toast({
        title: "Login required",
        description: "Please login to add product to wishlist",
        action: (
          <ToastAction
            className="border-black dark:border-white"
            altText="Login"
            onClick={() => router.replace("/api/auth/login")}
          >
            Login
          </ToastAction>
        ),
      });
    }
    try {
      await addDoc(collection(db, "wishlist"), {
        image: product.thumbnail,
        title: product.title,
        price: product.price,
        uid,
      });
      toast({
        title: "Added to wishlist successfully",
        description: `Product: ${product.title}`,
      });
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Add to wishlist"
      title="Add to wishlist"
      className="hover:cursor-pointer hover:bg-primary hover:text-secondary "
      onClick={(e) => handleAddToWishlist(e)}
    >
      <Heart />
    </Button>
  );
}

export default AddToWishlistButton;
