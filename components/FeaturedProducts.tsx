import Image from "next/image";
import Link from "next/link";

function FeaturedProducts() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          Featured Products
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="group relative overflow-hidden rounded-lg  shadow-md">
            <Link className="absolute inset-0 z-10" href="/products/1">
              <span className="sr-only">View</span>
            </Link>
            <Image
              alt="iphone 9"
              className="h-60 w-full object-contain "
              height={300}
              src="https://cdn.dummyjson.com/product-images/1/1.jpg"
              width={300}
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="text-lg font-semibold md:text-xl">iphone 9</h3>
              <h4 className="text-base font-semibold md:text-lg">$549</h4>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg  shadow-md">
            <Link className="absolute inset-0 z-10" href="/products/2">
              <span className="sr-only">View</span>
            </Link>
            <Image
              alt="iphone x"
              className="h-60 w-full object-contain "
              height={300}
              src="https://cdn.dummyjson.com/product-images/2/1.jpg"
              width={300}
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="text-lg font-semibold md:text-xl">iphone x</h3>
              <h4 className="text-base font-semibold md:text-lg">$899</h4>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg  shadow-md">
            <Link className="absolute inset-0 z-10" href="/products/7">
              <span className="sr-only">View</span>
            </Link>
            <Image
              alt="Samsung Galaxy book"
              className="h-60 w-full object-contain"
              height={300}
              src="https://cdn.dummyjson.com/product-images/7/1.jpg"
              width={300}
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="text-lg font-semibold md:text-xl">Galaxy Book</h3>
              <h4 className="text-base font-semibold md:text-lg">$79.99</h4>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg  shadow-md">
            <Link className="absolute inset-0 z-10" href="/products/13">
              <span className="sr-only">View</span>
            </Link>
            <Image
              alt="Product 4"
              className="h-60 w-full object-contain"
              height={300}
              src="https://cdn.dummyjson.com/product-images/13/1.jpg"
              width={300}
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="text-lg font-semibold md:text-xl">Fog Scent</h3>
              <h4 className="text-base font-semibold md:text-lg">$59.99</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
