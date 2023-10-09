import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

export type ProductProps = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  rating: number;
};

function Product({ item }: { item: ProductProps }) {
  const { title, thumbnail, price, id } = item;
  return (
    <Link href={`/products/${id}`}>
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
          <Button
            variant="ghost"
            size="icon"
            aria-label="Add to wishlist"
            title="Add to wishlist"
            className="hover:cursor-pointer hover:bg-primary hover:text-secondary "
          >
            <Heart />
          </Button>
          <p className="font-bold">${price}</p>
          <AddToCartButton item={item} />
        </CardFooter>
      </Card>
    </Link>
  );
}

export default Product;
