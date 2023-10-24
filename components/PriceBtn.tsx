"use client ";
function PriceBtn({ price, quantity }: { price: number; quantity: number }) {
  return <div>{price * quantity}</div>;
}

export default PriceBtn;
