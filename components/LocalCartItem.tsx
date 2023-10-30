import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { ProductProps } from "@/types/types";
import { DeleteLocalCartItem } from "./DeleteLocalCartItem";
import LocalQuantityBtn from "./LocalQuantityBtn";
function LocalCartItem({ item }: { item: ProductProps }) {
  const { title, thumbnail, price, id } = item;
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
      <CardTitle className=" mt-2 truncate  px-3 text-center text-xl ">
        {title}
      </CardTitle>
      <p className="text-center font-bold">${price}</p>
      <CardFooter className="mt-2 flex justify-between  ">
        <LocalQuantityBtn id={id} />
        <DeleteLocalCartItem id={id} />
      </CardFooter>
    </Card>
  );
}

export default LocalCartItem;
