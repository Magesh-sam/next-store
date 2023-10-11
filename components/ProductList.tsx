"use client";
import Product from "./Product";
import ScrollToTop from "./ScrollToTop";
import { useState, useMemo } from "react";
import { ProductProps } from "@/types/types";

function ProductList({ products }: { products: ProductProps[] }) {
  const [searchValue, setSearchValue] = useState("");

  // Memoize the filtered products
  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchValue.toLowerCase()) ||
        product.description.toLowerCase().includes(searchValue.toLowerCase()) ||
        product.category.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [products, searchValue]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearchValue(searchValue);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search Products"
        className="p-3"
        onChange={(e) => handleSearch(e)}
      />
      <section className="z-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <Product key={product.id} item={product} />
        ))}
        <ScrollToTop />
      </section>
    </>
  );
}

export default ProductList;
