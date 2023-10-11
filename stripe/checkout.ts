import axios from "axios";
import getStripe from "./getStripe";
import { ProductProps } from "@/types/types";
export const handleCheckout = async (products: ProductProps[]) => {
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
