"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { productCategories } from "@/misc/misc";
import Link from "next/link";
import { usePathname } from "next/navigation";
function CategoryMobile() {
  const currentPath = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" mx-3 flex  items-center gap-3 self-end rounded-md border-2 border-primary p-2 md:hidden">
        <span>Categories</span>
        <span>&#8964;</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-2 border-primary p-5">
        <DropdownMenuLabel>Select Category</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {productCategories.map((category) => (
          <DropdownMenuItem key={category.category}>
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
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CategoryMobile;
