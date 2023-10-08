"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CartItem from "./CartItem";
import { Button } from "./ui/button";
import { handleCheckout } from "@/stripe/checkout";
function CartList() {
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <section>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <Button variant="ghost" onClick={() => handleCheckout(cart)}>
        payment checkout
      </Button>
    </section>
  );
}

export default CartList;
