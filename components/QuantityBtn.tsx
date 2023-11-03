"use client";
import { Button } from "./ui/button";
import { db } from "@/firebase/config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

function QuantityBtn({
  quantity,
  productId,
}: {
  quantity: number;
  productId: string;
}) {
  const [quantityState, setQuantityState] = useState(quantity);
  useEffect(() => {
    const fetchQuantity = async () => {
      const itemRef = doc(db, "cartitems", productId);
      const docSnap = await getDoc(itemRef);
      if (docSnap.exists()) {
        setQuantityState(docSnap.data().quantity);
      }
    };
    fetchQuantity();
  }, [productId, quantityState]);

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
  console.log(quantityState);
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
