import { api } from "@/axios/config";

import QuantityBtn from "@/components/QuantityBtn";

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
      {/* //Todo change any to proper types */}
      {cartItems.map((item: any) => (
        <div key={item.id} className="flex">
          <Image src={item.image} alt={item.title} width={200} height={200} />
          <div className="flex flex-col">
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <p>product id:{item.id}</p>
            <QuantityBtn quantity={item.quantity} productId={item.id} />
          </div>
        </div>
      ))}
    </main>
  );
}
