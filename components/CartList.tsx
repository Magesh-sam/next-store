"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CartItem from "./CartItem";

function CartList() {
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <section className="flex min-h-screen items-center justify-center">
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <p></p>
    </section>
  );
}

export default CartList;
