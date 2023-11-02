"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { CartItemAPIProps, CartItemProps, ProductProps } from "@/types/types";
import LocalCartItem from "./LocalCartItem";

function CartList() {
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <section className=" grid grid-cols-1 gap-3   sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cart.map((item: CartItemAPIProps) => (
        <LocalCartItem key={item.id} item={item} />
      ))}

      <p></p>
    </section>
  );
}

export default CartList;
