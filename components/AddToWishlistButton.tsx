"use client";
import { Heart } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { ProductProps } from "@/types/types";
import { useToast } from "./ui/use-toast";
import { useUser } from "@auth0/nextjs-auth0/client";
import { ToastAction } from "./ui/toast";
import { useRouter } from "next/navigation";
import { api } from "@/axios/config";

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
