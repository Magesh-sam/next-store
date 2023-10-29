import CartList from "@/components/CartList";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export default async function LocalCart() {
  const session = await getSession();
  const user = session?.user;
  if (user) {
    redirect("/cart");
  }
  return (
    <main className="mt-10 flex h-screen items-center justify-center">
      <h1>Local cart</h1>
      <CartList />
    </main>
  );
}
