"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { CartItemAPIProps, CartItemProps, ProductProps } from "@/types/types";
import LocalCartItem from "./LocalCartItem";
import CheckoutButton from "./CheckoutButton";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

function CartList() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  if (cart.length === 0) {
    return (
      <main className="mt-20 flex h-screen flex-col items-center justify-center gap-3">
        <h1 className="text-3xl font-semibold">
          No Items found in the cart 😔
        </h1>
        <Image
          src="/empty_cart.svg"
          alt="Empty cart"
          width={700}
          height={600}
        />
        <Link href="/products" className={buttonVariants({})}>
          Explore Products
        </Link>
      </main>
    );
  }

  return (
    <>
      <section className="mt-20 grid grid-cols-1 gap-3  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cart.map((item: CartItemAPIProps) => (
          <LocalCartItem key={item.id} item={item} />
        ))}
        {cart.length > 0 && (
          <div className="col-span-full mb-8 mt-3 flex items-center justify-center">
            <CheckoutButton items={cart} />
          </div>
        )}
      </section>
    </>
  );
}

export default CartList;
