import Product, { ProductProps } from "./Product";
import ScrollToTop from "./ScrollToTop";

function ProductList({ products }: { products: ProductProps[] }) {
  return (
    <section className="z-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Product key={product.id} item={product} />
      ))}
      <ScrollToTop />
    </section>
  );
}

export default ProductList;
