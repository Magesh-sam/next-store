import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardFooter } from "./ui/card";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import { ProductProps } from "@/types/types";
import AddToWishlistButton from "./AddToWishlistButton";
import { DeleteLocalCartItem } from "./DeleteLocalCartItem";
function CartItem({ item }: { item: ProductProps }) {
  const { title, thumbnail, price, id } = item;
  const path = "/products/" + id;
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
      <CardFooter className="mt-2 flex items-center justify-between">
        <p className="font-bold">${price}</p>
        <DeleteLocalCartItem id={id} />
      </CardFooter>
    </Card>
  );
}

export default CartItem;
