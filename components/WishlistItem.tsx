import React from "react";
import DeleteItem from "./DeleteItem";
import { Card, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { WishListItemProps } from "@/types/types";
import WishlistToCartBtn from "./WishlistToCartBtn";
import Image from "next/image";

function WishlistItem({
  item,
  userId,
}: {
  item: WishListItemProps;
  userId: string;
}) {
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
        <WishlistToCartBtn item={item} userId={userId} />
        <DeleteItem id={item.docId} type="wishlist" />
      </CardFooter>
    </Card>
  );
}

export default WishlistItem;
