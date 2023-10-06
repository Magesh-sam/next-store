import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTrigger,
} from "./ui/sheet";
import { ShoppingBag } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingBag />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="text-2xl font-semibold">
          Items in the Bag
        </SheetHeader>
        
        <h3>item1</h3>
        <h3>item2</h3>
        <h3>item3</h3>
        <h3>item4</h3>
        <h3>item5</h3>
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;
