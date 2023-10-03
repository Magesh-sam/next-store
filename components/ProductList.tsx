import axios from "axios";
import Product, { ProductProps } from "./Product";

function ProductList({ products }: { products: ProductProps[] }) {
  return (
    <section className="z-10 grid grid-cols-4 gap-3">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
}

export default ProductList;
