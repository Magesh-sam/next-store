import React from "react";
import { productCategories } from "@/misc/misc";
import Link from "next/link";

function CategoriesBar() {
  return (
    <div className="flex gap-2 text-lg">
      <Link
        className="underline-offset-4  transition-all duration-300 hover:text-primary "
        href="/products"
      >
        All
      </Link>
      <Link
        className="underline-offset-4 transition-all duration-300 hover:text-primary "
        href="/products/categories/smartphones"
      >
        Smartphones
      </Link>
      <Link
        className="underline-offset-4 transition-all duration-300 hover:text-primary "
        href="/products/categories/laptops"
      >
        Laptops
      </Link>
      <Link
        className="underline-offset-4 transition-all duration-300 hover:text-primary "
        href="/products/categories/mens-shirts"
      >
        Mens
      </Link>
      <Link
        className="underline-offset-4 transition-all duration-300 hover:text-primary "
        href="/products/categories/womens-dresses"
      >
        Womens
      </Link>
    </div>
  );
}

export default CategoriesBar;
