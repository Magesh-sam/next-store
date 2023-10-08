import axios from "axios";
import getStripe from "./getStripe";
import { ProductProps } from "@/components/Product";

export const handleCheckout = async (products: ProductProps[]) => {
  const stripe = await getStripe();
  const checkoutSession = await axios.post("/api/checkout", {
    products,
  });
  console.log(checkoutSession.data);
  const result = await stripe!.redirectToCheckout({
    sessionId: checkoutSession.data.id,
  });
  if (result.error) {
    alert(result.error.message);
  }
};
