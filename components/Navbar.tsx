import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button, buttonVariants } from "./ui/button";
import UserButton from "./UserButton";
import { ShoppingBag } from "lucide-react";
import Sidebar from "./Sidebar";
import { Suspense } from "react";
import { UserButtonSkeleton } from "./Skeletons";
function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-20 flex w-full  items-center  justify-between bg-white p-3  shadow-lg dark:bg-black">
      <span className="flex items-center gap-10">
        <Link href="/" className="text-2xl font-bold" replace>
          Next-Store🛍️
        </Link>
        <Button
          asChild
          variant={"ghost"}
          className=" hidden border-2 border-primary sm:flex"
        >
          <Link href="/products" className="text-xl" replace>
            Products
          </Link>
        </Button>
      </span>
      <span className="mr-2 flex  gap-3">
        <Suspense fallback={<UserButtonSkeleton />}>
          <UserButton />
        </Suspense>
        <ThemeToggle />
        <Sidebar />
        <Link
          href="/cart"
          className={`${buttonVariants({
            variant: "ghost",
            size: "icon",
          })} hidden sm:flex `}
          replace
          prefetch={false}
        >
          <ShoppingBag />
        </Link>
      </span>
    </nav>
  );
}

export default Navbar;
