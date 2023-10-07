"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CartItem from "./CartItem";
function CartList() {
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <section>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </section>
  );
}

export default CartList;
