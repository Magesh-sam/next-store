import React from "react";

function Sidebar() {
<<<<<<< HEAD
  return <div>Sidebar</div>;
=======
  const { isCartOpen, cart } = useSelector((state: RootState) => state.cart);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const handlePaymentCheckout = async () => {
    setLoading(true);
    await handleCheckout(cart);
    setLoading(false);
  };

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
>>>>>>> parent of ea81695 (fix: types for cart/wishlist, cart total button)
}

export default Sidebar;
