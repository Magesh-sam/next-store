import CartList from "@/components/CartList";
import { Button } from "@/components/ui/button";

export default function Cart() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Cart Items 🛍️</h1>
      <CartList />
      <br />
      <Button>Checkout</Button>
    </main>
  );
}
