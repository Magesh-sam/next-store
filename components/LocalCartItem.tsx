import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { ProductProps } from "@/types/types";
import { DeleteProduct } from "./DeleteProduct";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { decrementQuantity, incrementQuantity } from "@/redux/Slices/cartSlice";
function LocalCartItem({ item }: { item: ProductProps }) {
  const { title, thumbnail, price, id, quantity } = item;
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Card className="  group  relative w-[280px]   max-w-[280px] overflow-hidden bg-background shadow-md hover:border-primary dark:bg-[#383838] ">
      <CardHeader className=" items-center rounded-t-md bg-white ">
        <Image
          src={thumbnail}
          width={250}
          height={250}
          alt={title}
          objectFit="contain"
          objectPosition="center"
          className="h-[250px] w-[250px] transition-all duration-200 ease-in-out "
        />
      </CardHeader>
      <CardTitle className=" mt-2 truncate  px-3 text-center text-xl  ">
        {title}
      </CardTitle>
      <p className="text-center font-bold">${price}</p>
      <CardFooter className="mt-2 flex items-center justify-between ">
        <div className="item-center flex gap-2 ">
          <Button
            disabled={quantity === 1}
            onClick={() => dispatch(decrementQuantity(id))}
          >
            -
          </Button>
          <p className="self-center ">{quantity}</p>
          <Button onClick={() => dispatch(incrementQuantity(id))}>+</Button>
        </div>
        <DeleteProduct id={id} />
      </CardFooter>
    </Card>
  );
}

export default LocalCartItem;
