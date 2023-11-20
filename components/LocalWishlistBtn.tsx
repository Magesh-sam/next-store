"use client";

import React from "react";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";
import { useRouter } from "next/navigation";

function LocalWishlistBtn() {
  const { toast } = useToast();
  const router = useRouter();

  const handleAddToWishlist = () => {
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
  };
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Add to wishlist"
      title="Add to wishlist"
      className="hover:cursor-pointer hover:bg-primary hover:text-secondary "
      onClick={() => handleAddToWishlist()}
    >
      <Heart />
    </Button>
  );
}

export default LocalWishlistBtn;
