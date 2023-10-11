import { ProductProps } from "@/types/types";
import ProductList from "@/components/ProductList";
import axios from "axios";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  const categoryType = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];

  if (!categoryType.includes(category)) {
    notFound();
  }

  const { products }: { products: ProductProps[] } = await axios
    .get(`https://dummyjson.com/products/category/${category}`)
    .then((res) => res.data);

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <h1>Category: {category}</h1>
      <ProductList products={products} />
    </main>
  );
}
