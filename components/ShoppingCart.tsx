import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import { GanttChart } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
function ShoppingCart() {
  return (
    <Sheet>
    <SheetTrigger className="md:hidden">
      <GanttChart />
    </SheetTrigger>
    <SheetContent>
      <SheetHeader className="text-2xl font-semibold">
        NextStore🛍️
      </SheetHeader>
      <Link
        href="/products"
        className="mt-3 text-xl font-semibold underline underline-offset-4"
      >
        View Products
      </Link>
      <h3 className="py-3 text-xl font-semibold">Categories</h3>
      <Separator />
      <div className="flex flex-col gap-2">
        <Button variant="ghost" asChild>
          <Link href="/products">Men</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/products">Women</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/products">Electronics</Link>
        </Button>
      </div>
    </SheetContent>
  </Sheet>
  )
}

export default ShoppingCart