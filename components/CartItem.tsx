import { ProductProps } from "@/types/types";
import Image from "next/image";

import { DeleteDialog } from "./DeleteDialog";

function CartItem({ item }: { item: ProductProps }) {
  const { title, thumbnail, price, id } = item;
  return (
    <div className="   w-[400px] gap-3 border-2 border-primary p-3">
      <Image
        src={thumbnail}
        alt={title}
        width={400}
        height={400}
        objectFit="contain"
        objectPosition="center"
        className="self-center"
      />
      <div className="mt-5 flex justify-around">
        <h3 className="font-bold">{title}</h3>
        <p className="font-bold">${price}</p>
      </div>
      <DeleteDialog id={id} />
    </div>
  );
}

export default CartItem;
