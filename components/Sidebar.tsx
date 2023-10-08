"use client";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import CartList from "./CartList";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { toggleCart } from "@/redux/cartSlice";

function Sidebar() {
  const { isCartOpen } = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <Sheet open={isCartOpen} onOpenChange={() => dispatch(toggleCart())}>
      <SheetTrigger>
        <ShoppingBag
          onClick={() => {
            dispatch(toggleCart);
          }}
        />
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll">
        <SheetHeader className=" text-2xl font-semibold">
          Items in the Bag
        </SheetHeader>
        <CartList />
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;
