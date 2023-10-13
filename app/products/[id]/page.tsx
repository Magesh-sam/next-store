import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import { Rating } from "@smastrom/react-rating";
import { ProductProps } from "@/types/types";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);

  const { data }: { data: ProductProps } = await axios.get(
    `https://dummyjson.com/products/${productId}`,
  );
  return {
    title: data.title,
    description: data.description,
    keywords: [
      "Next.js",
      "React",
      "JavaScript",
      "Stripe",
      "E-commerce",
      "E-commerce website",
      "Next.js E-commerce website",
      "Stripe checkout",
      data.title,
      data.brand,
    ],
    authors: [
      {
        name: "Mageshkannan",
        url: "https://mageshkannan.netlify.app",
      },
    ],
    creator: "Mageshkannan",
    openGraph: {
      title: data.title,
      description: data.description,
      images: [
        {
          url: data.thumbnail,
          width: 800,
          height: 600,
          alt: data.title,
        },
      ],
    },
    twitter: {
      title: data.title,
      description: data.description,
      images: [
        {
          url: data.thumbnail,
          width: 800,
          height: 600,
          alt: data.title,
        },
      ],
    },
    generator: "Next.js",
    applicationName: "Next Store",
    publisher: "Mageshkannan",
    colorScheme: "dark",
  };
}

export default async function SingleProduct({
  params,
}: {
  params: { id: string };
}) {
  const productId = parseInt(params.id);

  if (isNaN(productId)) {
    notFound();
  }

  if (productId <= 0 || productId > 100) {
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
    `https://dummyjson.com/products/${productId}`,
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
