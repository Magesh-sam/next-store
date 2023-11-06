import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button, buttonVariants } from "./ui/button";
import UserButton from "./UserButton";
import { ShoppingBag } from "lucide-react";
import Sidebar from "./Sidebar";
function Navbar() {
  return (
    <nav className="fixed top-0 z-20 flex w-screen items-center  justify-between bg-white p-3 px-3 shadow-lg dark:bg-black">
      <span className="flex items-center gap-10">
        <Link href="/" className="text-2xl font-bold" replace>
          Next-Store🛍️
        </Link>
        <Button
          asChild
          variant={"ghost"}
          className=" hidden border-2 border-primary sm:block"
        >
          <Link href="/products" className="text-xl" replace>
            Products
          </Link>
        </Button>
      </span>
      <span className="flex  gap-3">
        <UserButton />
        <Sidebar />
        <ThemeToggle />
        <Link
          href="/cart"
          className={buttonVariants({ variant: "ghost", size: "icon" })}
          replace
          prefetch={false}
        >
          <ShoppingBag />
        </Link>
        {/* <ShoppingCart /> */}
      </span>
    </nav>
  );
}

export default Navbar;
