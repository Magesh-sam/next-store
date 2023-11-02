"use client";
import { Heart } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import axios from "axios";
import { ToastAction } from "./ui/toast";
import { useToast } from "./ui/use-toast";
import { WishListItemAPIProps } from "@/types/types";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { api } from "@/axios/config";

function SingleWishlistButton({ product }: { product: WishListItemAPIProps }) {
  const { toast } = useToast();
  const { user, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) {
    return <> </>;
  }
  const uid = user?.email;

  const handleAddToWishlist = async () => {
    if (!uid || uid.length === 0) {
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
      return;
    }
    await api
      .post("/addtowishlist", { product, uid })
      .then(() => {
        toast({
          title: "Added to wishlist successfully",
          description: `Product: ${product.title}`,
        });
        router.replace("/wishlist");
        router.refresh();
      })
      .catch((err) =>
        toast({
          title: "Error adding to wishlist",
          description: err.message,
        }),
      );
  };
  return (
    <Button
      className="bg-[#2B6AEB] hover:bg-[#2B6AEB]/90"
      onClick={handleAddToWishlist}
    >
      Add to Wishlist <Heart className="ml-2" />
    </Button>
  );
}

export default SingleWishlistButton;
