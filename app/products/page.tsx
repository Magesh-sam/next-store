import { Metadata } from "next";
import { ProductProps } from "@/types/types";
import ProductList from "@/components/ProductList";
import axios from "axios";

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
  colorScheme: "dark",
};

async function page() {
  const products: ProductProps[] = await axios
    .get("https://dummyjson.com/products?limit=100")
    .then((res) => res.data.products);

  return (
    <main className="mt-5 flex flex-col items-center justify-center gap-5 bg-background">
      <h1 className="text-3xl font-bold ">Products page</h1>
      <ProductList products={products} />
    </main>
  );
}

export default page;
