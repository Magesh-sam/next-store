import { ProductProps } from "@/types/types";
import Image from "next/image";

import { DeleteDialog } from "./DeleteDialog";
import { Button } from "./ui/button";

// BUG This is not working component

function CartItem({ item }: { item: ProductProps }) {
  const { title, thumbnail, price, id, quantity } = item;
  return (
    <div className="    gap-3 border-2 border-primary p-3">
      <Image
        src={thumbnail}
        alt={title}
        width={300}
        height={300}
        objectFit="contain"
        objectPosition="center"
        className="mx-auto aspect-square w-[300px]"
      />
      <div className="h-[300px] w-[300px] bg-primary">
        <h1>sample text to check quantity</h1>
        <Button>-</Button>
        <span>{quantity}</span>
        <Button>+</Button>
      </div>
      <div className="mt-5 flex justify-around">
        <h3 className="font-bold">{title}</h3>
        <p className="font-bold">${price}</p>
      </div>

      <DeleteDialog id={id} />
      <p>End of cart</p>
    </div>
  );
}

export default CartItem;
