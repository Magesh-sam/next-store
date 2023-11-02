"use client";
import { Button } from "./ui/button";
import { db } from "@/firebase/config";
import { doc, updateDoc, query, where } from "firebase/firestore";
import { useState } from "react";

function QuantityBtn({
  quantity,
  productId,
}: {
  quantity: number;
  productId: string;
}) {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const [isIncrementUpdating, setIsIncrementUpdating] = useState(false);
  const [isDecrementUpdating, setIsDecrementUpdating] = useState(false);
  const itemRef = doc(db, "cartitems", productId);

  const incrementQty = async () => {
    setIsIncrementUpdating(true);
    setItemQuantity((prev) => prev + 1);
    await updateDoc(itemRef, {
      quantity: itemQuantity + 1,
    });
    setIsIncrementUpdating(false);
  };

  const decrementQty = async () => {
    if (itemQuantity === 1) {
      return;
    }
    setIsDecrementUpdating(true);
    setItemQuantity((prev) => prev - 1);
    await updateDoc(itemRef, {
      quantity: itemQuantity - 1,
    });
    setIsDecrementUpdating(false);
  };

  return (
    <div className="flex items-center gap-x-3">
      <Button disabled={isIncrementUpdating} onClick={incrementQty}>
        +
      </Button>
      <p>{itemQuantity}</p>
      <Button
        disabled={isDecrementUpdating || itemQuantity === 1}
        onClick={decrementQty}
      >
        -
      </Button>
    </div>
  );
}

export default QuantityBtn;
