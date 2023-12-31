import { CartItemProps, ProductProps } from "@/types/types";
import Image from "next/image";

import DeleteItem from "./DeleteItem";
import QuantityBtn from "./QuantityBtn";
import { Card, CardHeader, CardTitle, CardFooter } from "./ui/card";

// BUG This is not working component

function CartItem({ item }: { item: CartItemProps }) {
  return (
    <Card className="  group  relative w-[280px]   max-w-[280px] overflow-hidden bg-background shadow-md hover:border-primary dark:bg-[#383838] ">
      <CardHeader className=" items-center rounded-t-md bg-white ">
        <Image
          src={item.image}
          width={250}
          height={250}
          alt={item.title}
          className="h-[250px] w-[250px] transition-all duration-200 ease-in-out "
        />
      </CardHeader>
      <CardTitle className=" mt-2 truncate  px-3 text-center text-xl  ">
        {item.title}
      </CardTitle>
      <p className="text-center font-bold">${item.price}</p>
      <CardFooter className="mt-2 flex items-center justify-between ">
        <QuantityBtn quantity={item.quantity} productId={item.docId} />
        <DeleteItem id={item.docId} type="cartitems" />
      </CardFooter>
    </Card>
  );
}

export default CartItem;
