"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { productCategories } from "@/misc/misc";

function Categories() {
  const currentPath = usePathname();

  return (
    <ul className=" xs:hidden mt-20 flex flex-col gap-3 pl-5 sm:hidden md:flex">
      {productCategories.map((category) => (
        <Link
          key={category.category}
          href={category.path}
          className={`${
            currentPath === category.path
              ? "underline underline-offset-4"
              : "font-normal"
          }`}
        >
          {category.category}
        </Link>
      ))}
    </ul>
  );
}

export default Categories;
