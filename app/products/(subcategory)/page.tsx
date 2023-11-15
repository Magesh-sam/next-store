import { Metadata } from "next";
import { ProductProps } from "@/types/types";
import ProductList from "@/components/ProductList";
import axios from "axios";
import Categories from "@/components/Categories";
import { Suspense } from "react";
import { CategorySkeleton, ProductListSkeleton } from "@/components/Skeletons";

export const metadata: Metadata = {
  title: "Next Store | Products",
  description: "An E-commerce website built with Next.js, Stripe",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Stripe",
    "E-commerce",
    "E-commerce website",
    "Next.js E-commerce website",
    "Stripe checkout",
  ],
  authors: [
    {
      name: "Mageshkannan",
      url: "https://mageshkannan.netlify.app",
    },
  ],
  creator: "Mageshkannan",
  openGraph: {
    title: "Next Store",
    description: "An E-commerce website built with Next.js, Stripe",
  },
  twitter: {
    title: "Next Store",
    description: "An E-commerce website built with Next.js, Stripe",
  },
  generator: "Next.js",
  applicationName: "Next Store",
  publisher: "Mageshkannan",
};

async function page() {
  const products: ProductProps[] = await axios
    .get("https://dummyjson.com/products?limit=100")
    .then((res) => res.data.products);

  return (
    <main className=" flex gap-3 bg-background">
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList products={products} />
      </Suspense>
    </main>
  );
}

export default page;
