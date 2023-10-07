import axios from "axios";
import Image from "next/image";
import { ProductProps } from "@/components/Product";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import { Rating } from "@smastrom/react-rating";

export default async function Product({ params }: { params: { id: number } }) {
  const data: ProductProps = await axios
    .get(`https://dummyjson.com/products/${params.id}`)
    .then((res) => res.data);

  return (
    <main className=" flex h-screen w-screen  items-center justify-center  ">
      <div className="max-w-600[px] space-y-5 rounded-lg px-4 py-8 shadow-lg dark:border dark:border-primary">
        <section>
          <Image
            src={data.thumbnail}
            alt={data.title}
            width={500}
            height={500}
          />
        </section>
        <section className=" flex flex-col gap-3 ">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <h3>{data.description}</h3>
          <div className="w-100% max-w-[180px]">
            <Rating value={data.rating} readOnly />
          </div>
          <span className="flex justify-between">
            <Button className="bg-[#2B6AEB] hover:bg-[#2B6AEB]/90">
              Add to Wishlist <Heart className="ml-2" />
            </Button>
            <Button>
              Add to Cart <ShoppingBag className="ml-2" />
            </Button>
          </span>
        </section>
      </div>
    </main>
  );
}
