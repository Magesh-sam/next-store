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
    <main className="max-w-screen flex  flex-col ">
      <ProductList products={data} />
    </main>
  );
}
