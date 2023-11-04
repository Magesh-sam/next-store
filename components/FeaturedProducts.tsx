import Image from "next/image";
import React from "react";

function FeaturedProducts() {
  return (
    <div>
      <h2 className=" text-3xl underline underline-offset-8">
        Featured products
      </h2>
      <section className="mb-5 mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
        <Image
          src="https://i.dummyjson.com/data/products/1/1.jpg"
          alt="hero image"
          width={500}
          height={280}
          className="h-[280px] w-full"
        />
        <Image
          src="https://i.dummyjson.com/data/products/4/4.jpg"
          alt="hero image"
          width={500}
          height={280}
          className="h-[280px] w-full"
        />
        <Image
          src="https://i.dummyjson.com/data/products/5/2.jpg"
          alt="hero image"
          width={500}
          height={280}
          className="h-[280px] w-full"
        />
        <Image
          src="https://i.dummyjson.com/data/products/6/1.png"
          alt="hero image"
          width={500}
          height={280}
          className="h-[280px] w-full"
        />
      </section>
    </div>
  );
}

export default FeaturedProducts;
