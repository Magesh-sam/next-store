import React from "react";

function CartCount({ count }: { count: number }) {
  return (
    <span className="absolute bottom-1 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-primary ">
      {count}
    </span>
  );
}

export default CartCount;
