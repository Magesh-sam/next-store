import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import { Rating } from "@smastrom/react-rating";
import { notFound } from "next/navigation";
import { ProductProps } from "@/types/types";

export default async function Product({ params }: { params: { id: number } }) {
  if (typeof params.id === "string") return notFound();

  if (params.id <= 0 || params.id > 100) {
    return (
      <main className="flex h-screen w-screen flex-col items-center justify-center gap-3 ">
        <h1 className="text-3xl font-semibold">Product not found</h1>

        <Button asChild>
          <Link href="/products">Back to Shopping🛍️</Link>
        </Button>
      </main>
    );
  }

  const { data }: { data: ProductProps } = await axios.get(
    `https://dummyjson.com/products/${params.id}`,
  );

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
