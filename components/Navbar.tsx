import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import Sidebar from "./Sidebar";
import { Button, buttonVariants } from "./ui/button";
import ShoppingCart from "./ShoppingCart";
import UserButton from "./UserButton";
import { ShoppingBag } from "lucide-react";
<<<<<<< HEAD
import { getSession } from "@auth0/nextjs-auth0";
import { api } from "@/axios/config";
import CartCount from "./CartCount";
async function Navbar() {
  const session = await getSession();
  const id = session?.user?.email;

  const cartItems = await api
    .post("/getcart", {
      id,
    })
    .then((response) => response.data.cartItems).catch(err => console.log(err))

  const cartCount = cartItems.length;
=======
function Navbar() {
>>>>>>> parent of ea81695 (fix: types for cart/wishlist, cart total button)
  return (
    <nav className="fixed top-0 z-20 flex w-screen items-center  justify-between bg-white p-3 px-3 shadow-lg dark:bg-black">
      <span className="flex items-center gap-10">
        <Link href="/" className="text-2xl font-bold">
          Next-Store🛍️
        </Link>
        <Button
          asChild
          variant={"ghost"}
          className=" hidden border-2 border-primary sm:block"
        >
          <Link href="/products" className="text-xl">
            Products
          </Link>
        </Button>
      </span>
      <span className="flex  gap-3">
        <UserButton />
        {/* <Sidebar /> */}
        <ThemeToggle />
        <Link
          href="/cart"
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
<<<<<<< HEAD
          {cartCount && cartCount > 0 && <CartCount count={cartCount} />}
=======
>>>>>>> parent of ea81695 (fix: types for cart/wishlist, cart total button)
          <ShoppingBag />
        </Link>
        {/* <ShoppingCart /> */}
      </span>
    </nav>
  );
}

export default Navbar;
