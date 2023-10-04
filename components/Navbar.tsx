import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
function Navbar() {
  return (
    <nav className="fixed top-0 z-20 flex w-screen items-center  justify-between bg-white p-3 px-3 shadow-lg dark:bg-black">
      <Link href="/" className="text-2xl font-semibold">
        Next-Store
      </Link>
      <ThemeToggle />
    </nav>
  );
}

export default Navbar;
