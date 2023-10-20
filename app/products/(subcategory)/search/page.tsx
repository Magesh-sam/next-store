import ProductList from "@/components/ProductList";
import axios from "axios";
import { notFound } from "next/navigation";

export default async function Query({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const data = await axios
    .get(`https://dummyjson.com/products/search?q=${searchParams.q}`)
    .then((res) => res.data.products);

  if (data.length === 0) {
    return notFound();
  }

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <h1>Search</h1>
      <h3>search params from the query</h3>
      <ProductList products={data} />
    </main>
  );
}
