"use client";
import React from "react";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { decrementQuantity, incrementQuantity } from "@/redux/Slices/cartSlice";

function LocalQuantityBtn({ id }: { id: number }) {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch<AppDispatch>();
  const item = cartItems.find((item) => item.id === id);
  const incrementQty = () => {
    dispatch(incrementQuantity(id));
  };

  const decrementQty = () => {
    dispatch(decrementQuantity(id));
  };

  return (
    <div className="flex items-center gap-x-3">
      <Button onClick={() => incrementQty()}>+</Button>
      <p>{item?.quantity}</p>
      <Button onClick={() => decrementQty()}>-</Button>
    </div>
  );
}

export default LocalQuantityBtn;
