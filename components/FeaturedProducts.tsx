import Image from "next/image";
import Link from "next/link";
import React from "react";

function FeaturedProducts() {
  return (
    <div className="">
      <h2 className=" text-3xl underline underline-offset-8">
        Featured products
      </h2>
      <section className="mb-5 mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Link href="/products/1">
          <Image
            title="view product"
            src="https://i.dummyjson.com/data/products/1/1.jpg"
            alt="hero image"
            width={500}
            height={280}
            className="h-[180px] w-full  transition-all duration-200 ease-in hover:scale-110  md:h-[280px] "
            priority
          />
        </Link>
        <Link href="/products/4">
          <Image
            title="view product"
            src="https://i.dummyjson.com/data/products/4/4.jpg"
            alt="hero image"
            width={500}
            height={280}
            className="h-[180px] w-full transition-all duration-200 ease-in hover:scale-110  md:h-[280px] "
            priority
          />
        </Link>
        <Link href="/products/5">
          <Image
            title="view product"
            src="https://i.dummyjson.com/data/products/5/2.jpg"
            alt="hero image"
            width={500}
            height={280}
            className="h-[180px] w-full transition-all duration-200 ease-in hover:scale-110  md:h-[280px]"
            priority
          />
        </Link>
        <Link href="/products/6">
          <Image
            title="view product"
            src="https://i.dummyjson.com/data/products/6/1.png"
            alt="hero image"
            width={500}
            height={280}
            className="h-[180px] w-full transition-all duration-200 ease-in hover:scale-110  md:h-[280px]"
            priority
          />
        </Link>
      </section>
    </div>
  );
}

export default FeaturedProducts;
