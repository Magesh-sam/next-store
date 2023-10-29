"use client";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import CartList from "./CartList";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { toggleCart } from "@/redux/Slices/cartSlice";
import { handleCheckout } from "@/stripe/checkout";
import { useState } from "react";
function Sidebar() {
  const { isCartOpen, cart } = useSelector((state: RootState) => state.cart);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const handlePaymentCheckout = async () => {
    setLoading(true);
    await handleCheckout(cart);
    setLoading(false);
  };

  return (
    <Sheet open={true} onOpenChange={() => dispatch(toggleCart())}>
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
        {cart.length === 0 ? <p>Bag is empty😔</p> : <CartList />}

        {cart.length > 0 && (
          <Button disabled={loading} onClick={handlePaymentCheckout}>
            payment checkout
          </Button>
        )}

        <SheetHeader className=" text-2xl font-semibold">WishList</SheetHeader>
        {cart.length === 0 ? <p>Wishlist is empty😔</p> : <CartList />}
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;
