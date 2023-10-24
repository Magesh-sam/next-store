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
    <main>
      <h1>Local Cart</h1>
      <CartList />
    </main>
  );
}
