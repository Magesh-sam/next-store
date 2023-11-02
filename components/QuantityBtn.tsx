"use client";
import { Button } from "./ui/button";
import { db } from "@/firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";

function QuantityBtn({
  quantity,
  productId,
}: {
  quantity: number;
  productId: string;
}) {
  // TODO - quantity is not updating on client side, cached data is showing | next js issue
  const [quantityState, setQuantityState] = useState(quantity);

  const [isIncrementUpdating, setIsIncrementUpdating] = useState(false);
  const [isDecrementUpdating, setIsDecrementUpdating] = useState(false);
  const itemRef = doc(db, "cartitems", productId);

  const incrementQty = async () => {
    setIsIncrementUpdating(true);
    const newQuantity = quantityState + 1;
    setQuantityState(newQuantity);
    await updateDoc(itemRef, {
      quantity: newQuantity,
    });
    setIsIncrementUpdating(false);
  };

  const decrementQty = async () => {
    if (quantityState === 1) {
      return;
    }
    setIsDecrementUpdating(true);
    const newQuantity = quantityState - 1;
    setQuantityState(newQuantity);
    await updateDoc(itemRef, {
      quantity: newQuantity,
    });
    setIsDecrementUpdating(false);
  };
  
  return (
    <div className="flex items-center gap-x-3">
      <Button disabled={isIncrementUpdating} onClick={incrementQty}>
        +
      </Button>
      <p>{quantityState}</p>
      <Button
        disabled={isDecrementUpdating || quantityState === 1}
        onClick={decrementQty}
      >
        -
      </Button>
    </div>
  );
}

export default QuantityBtn;
