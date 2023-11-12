import React from "react";

function PriceDetails({ item, price }: { item: number; price: number }) {
  return (
    <div className=" sticky -right-16  -top-16 min-h-[300px] min-w-[300px] border-2 border-primary">
      <h3>Price Details</h3>
      <p>Items {item}</p>
      <p>Price ${price}</p>
    </div>
  );
}

export default PriceDetails;
