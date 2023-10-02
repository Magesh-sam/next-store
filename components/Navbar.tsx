import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
function Navbar() {
  return (
    <nav className="fixed flex w-screen items-center justify-between  p-3  pr-5 shadow-lg">
      <Link href="/" className="text-2xl font-semibold">
        Next-Store
      </Link>
      <ThemeToggle />
    </nav>
  );
}

export default Navbar;
