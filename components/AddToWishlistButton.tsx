"use client";
import { Heart } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { WishListItemAPIProps } from "@/types/types";
import { useToast } from "./ui/use-toast";
import { useUser } from "@auth0/nextjs-auth0/client";
import { ToastAction } from "./ui/toast";
import { useRouter } from "next/navigation";
import { api } from "@/axios/config";
import { Skeleton } from "./ui/skeleton";
import { addToWishlist } from "@/lib/actions";

function AddToWishlistButton({ product }: { product: WishListItemAPIProps }) {
  const { toast } = useToast();
  const { user, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) {
    return <Skeleton className="h-8 w-8" />;
  }
  const uid = user?.email || "guest";
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
    await addToWishlist(product, user?.email)
      .then(() => {
        toast({
          title: "Added to wishlist successfully",
          description: `Product: ${product.title}`,
        });
      })
      .catch((err) =>
        toast({
          title: "Error adding to wishlist",
          description: err.err,
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
