"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { productCategories } from "@/misc/misc";

function Categories() {
  const currentPath = usePathname();

  return (
    <ul className=" sticky top-20 mt-3 hidden  h-full flex-col gap-3 pl-8 sm:hidden md:hidden lg:flex">
      {productCategories.map((category) => (
        <Link
          key={category.category}
          href={category.path}
          className={`${
            currentPath === category.path
              ? "underline underline-offset-4"
              : "font-normal"
          } underline-offset-4 hover:underline`}
        >
          {category.category}
        </Link>
      ))}
    </ul>
  );
}

export default Categories;
