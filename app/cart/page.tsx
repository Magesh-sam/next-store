import { api } from "@/axios/config";
import CartItem from "@/components/CartItem";
import CheckoutButton from "@/components/CheckoutButton";

import { ProductListSkeleton } from "@/components/Skeletons";

import { CartItemProps } from "@/types/types";

import { getSession } from "@auth0/nextjs-auth0";

import { redirect } from "next/navigation";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Cart() {
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    redirect("/localcart");
  }

  const cartItems = await api
    .post("/getcart", {
      id: user?.email,
    })
    .then((response) => response.data.cartItems);

  return (
    <main className="mb-5 flex justify-center">
      <Suspense fallback={<ProductListSkeleton />}>
        <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cartItems.map((item: CartItemProps) => (
            <CartItem key={item.docId} item={item} />
          ))}
          {cartItems.length !== 0 && (
            <div className="col-span-full mt-3 flex items-center justify-center">
              <CheckoutButton items={cartItems} />
            </div>
          )}
        </section>
      </Suspense>
    </main>
  );
}
