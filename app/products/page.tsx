import { ProductProps } from "@/components/Product";
import ProductList from "@/components/ProductList";
import axios from "axios";

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
