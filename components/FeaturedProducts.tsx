import Image from "next/image";
import React from "react";

function FeaturedProducts() {
  return (
    <div className="">
      <h2 className=" text-3xl underline underline-offset-8">
        Featured products
      </h2>
      <section className="mb-5 mt-5 grid grid-cols-2 gap-3">
        <Image
          src="https://i.dummyjson.com/data/products/1/1.jpg"
          alt="hero image"
          width={500}
          height={280}
          className="h-[180px] w-full md:h-[280px] "
          priority
        />
        <Image
          src="https://i.dummyjson.com/data/products/4/4.jpg"
          alt="hero image"
          width={500}
          height={280}
          className="h-[180px] w-full md:h-[280px] "
          priority
        />
        <Image
          src="https://i.dummyjson.com/data/products/5/2.jpg"
          alt="hero image"
          width={500}
          height={280}
          className="h-[180px] w-full md:h-[280px]"
          priority
        />
        <Image
          src="https://i.dummyjson.com/data/products/6/1.png"
          alt="hero image"
          width={500}
          height={280}
          className="h-[180px] w-full md:h-[280px]"
          priority
        />
      </section>
    </div>
  );
}

export default FeaturedProducts;
