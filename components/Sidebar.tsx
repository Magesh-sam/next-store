import React from "react";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Sheet,
} from "./ui/sheet";
import { Equal } from "lucide-react";
import { productCategories } from "@/misc/misc";
import Link from "next/link";

function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger className=" sm:hidden">
        <Equal aria-label="open sidebar" role="button" />
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Next-Store🛍️</SheetTitle>
        </SheetHeader>
        <SheetDescription>
          <SheetTitle>Categories</SheetTitle>
          <div className="flex flex-col gap-3 ">
            {productCategories.map((category) => (
              <Link
                key={category.category}
                href={category.path}
                className="text-xl font-semibold"
              >
                {category.category}
              </Link>
            ))}
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;
