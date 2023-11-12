import React from "react";
import { productCategories } from "@/misc/misc";
import Link from "next/link";

function CategoriesBar() {
  return (
    <div className="flex gap-2 text-lg">
      <Link
        className="  rounded-sm   underline-offset-4 transition-all duration-300 hover:underline "
        href="/products"
      >
        All
      </Link>
      <Link
        className=" rounded-sm   underline-offset-4 transition-all duration-300 hover:underline "
        href="/products/categories/smartphones"
      >
        Smartphones
      </Link>
      <Link
        className=" rounded-sm   underline-offset-4 transition-all duration-300 hover:underline "
        href="/products/categories/laptops"
      >
        Laptops
      </Link>
      <Link
        className=" rounded-sm   underline-offset-4 transition-all duration-300 hover:underline "
        href="/products/categories/mens-shirts"
      >
        Mens
      </Link>
      <Link
        className=" rounded-sm   underline-offset-4 transition-all duration-300 hover:underline "
        href="/products/categories/womens-dresses"
      >
        Womens
      </Link>
    </div>
  );
}

export default CategoriesBar;
