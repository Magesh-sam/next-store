import Product from "./Product";
import ScrollToTop from "./ScrollToTop";
import { ProductProps } from "@/types/types";
import CategoryMobile from "./CategoryMobile";

function ProductList({ products }: { products: ProductProps[] }) {
  return (
    <section className="mx-auto mt-3 flex flex-col gap-5 bg-background">
      <CategoryMobile />
      <section className="z-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Product key={product.id} item={product} />
        ))}
        <ScrollToTop />
      </section>
    </section>
  );
}

export default ProductList;
