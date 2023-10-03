import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import Link from "next/link";

export type ProductProps = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  rating: number;
};

function Product({ title, thumbnail, price, id }: ProductProps) {
  return (
    <Link href={`/products/${id}`}>
      <Card className="group    relative w-[280px]   max-w-[280px] overflow-hidden shadow-md hover:dark:border-primary ">
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
        <CardTitle className=" mt-2 truncate px-3 text-center text-xl  ">
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
          <Button
            variant="ghost"
            size="icon"
            aria-label="Add to bag"
            title="Add to bag"
            className="hover:cursor-pointer hover:bg-primary hover:text-secondary  "
          >
            <ShoppingBag />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default Product;
