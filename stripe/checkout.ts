import axios from "axios";
import getStripe from "./getStripe";
import { CartItemProps, ProductProps } from "@/types/types";

export const handleCheckout = async (products: CartItemProps[]) => {
  const stripe = await getStripe();
  const checkoutSession = await axios.post("/api/checkout", {
    products,
  });
  const result = await stripe!.redirectToCheckout({
    sessionId: checkoutSession.data.id,
  });
  if (result.error) {
    alert(result.error.message);
  }
};
