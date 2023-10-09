"use client";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import CartList from "./CartList";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { toggleCart } from "@/redux/Slices/cartSlice";
import { handleCheckout } from "@/stripe/checkout";
function Sidebar() {
  const { isCartOpen, cart } = useSelector((state: RootState) => state.cart);

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
        <Button onClick={() => handleCheckout(cart)}>payment checkout</Button>

        <SheetHeader className=" text-2xl font-semibold">WishList</SheetHeader>
        <CartList />
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;
