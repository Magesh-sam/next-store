import axios from "axios";
import Image from "next/image";
import { ProductProps } from "@/components/Product";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";

export default async function Product({ params }: { params: { id: number } }) {
  const data: ProductProps = await axios
    .get(`https://dummyjson.com/products/${params.id}`)
    .then((res) => res.data);

  console.log("single product", data);
  console.log(data.thumbnail);

  return (
    <main className="flex h-screen flex-col items-center justify-center border-2 border-red-400">
      <section>
        <Image src={data.thumbnail} alt={data.title} width={500} height={500} />
      </section>
      <section className="flex flex-col gap-3 ">
        <h1>{data.title}</h1>
        <h3>{data.description}</h3>
        <span className="flex justify-between">
          <Button>
            Add to Wishlist <Heart />
          </Button>
          <Button variant="secondary">
            Add to Card <ShoppingBag />
          </Button>
        </span>
      </section>
    </main>
  );
}
