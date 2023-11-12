"use client";
import React from "react";
import { Button } from "./ui/button";
import { CartItemAPIProps, CartItemProps } from "@/types/types";
import { handleCheckout } from "@/stripe/checkout";
import { api } from "@/axios/config";
function CheckoutButton({
  items,
}: {
  items: CartItemProps[] | CartItemAPIProps[];
}) {
  const checkoutCart = async () => {
    try {
      await handleCheckout(items);
    } catch (err) {
      console.log(err);
    }
  };

  return <Button onClick={checkoutCart}>Checkout</Button>;
}

export default CheckoutButton;
