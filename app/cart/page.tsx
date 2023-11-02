import { api } from "@/axios/config";
import DeleteItem from "@/components/DeleteItem";

import QuantityBtn from "@/components/QuantityBtn";
import { CartItemProps } from "@/types/types";

import { getSession } from "@auth0/nextjs-auth0";

import { revalidatePath } from "next/cache";
import Image from "next/image";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Cart() {
  revalidatePath("/cart");
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
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <h1>Cart</h1>
      <div className="flex flex-col gap-y-5">
        {cartItems.map((item: CartItemProps) => (
          <div key={item.docId} className="flex">
            <Image
              src={item.image}
              alt={item.title}
              width={200}
              height={200}
              className="w-200 aspect-square"
            />
            <div className="flex flex-col justify-between p-3 ">
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <div className="flex items-center justify-between gap-3">
                <QuantityBtn quantity={item.quantity} productId={item.docId} />
                <DeleteItem id={item.docId} type="cartitems" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
