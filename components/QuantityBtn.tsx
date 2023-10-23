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
  const [isUpdating, setIsUpdating] = useState(false);
  const itemRef = doc(db, "cartitems", productId);

  const incrementQty = async () => {
    setIsUpdating(true);
    setItemQuantity((prev) => prev + 1);
    await updateDoc(itemRef, {
      quantity: itemQuantity + 1,
    });
    setIsUpdating(false);
  };

  const decrementQty = async () => {
    if (itemQuantity === 1) {
      return;
    }
    setIsUpdating(true);
    setItemQuantity((prev) => prev - 1);
    await updateDoc(itemRef, {
      quantity: itemQuantity - 1,
    });
    setIsUpdating(false);
  };

  return (
    <div className="flex items-center gap-x-3">
      <Button disabled={isUpdating} onClick={incrementQty}>
        +
      </Button>
      <p>{itemQuantity}</p>
      <Button disabled={isUpdating} onClick={decrementQty}>
        -
      </Button>
    </div>
  );
}

export default QuantityBtn;
