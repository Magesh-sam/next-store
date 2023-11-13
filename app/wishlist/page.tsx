import { buttonVariants } from "@/components/ui/button";
import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { api } from "@/axios/config";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import DeleteItem from "@/components/DeleteItem";
import { WishListItemProps } from "@/types/types";
import WishlistToCartBtn from "@/components/WishlistToCartBtn";
import WishlistItem from "@/components/WishlistItem";
import { Suspense } from "react";
import { ProductListSkeleton } from "@/components/Skeletons";

export default async function Wishlist() {
  const session = await getSession();
  const user = session?.user;
  const data = await api
    .post("/getwishlist", {
      id: user?.email,
    })
    .then((res) => res.data)
    .catch((err) => err);

  if (data.message) {
    return (
      <main className="flex h-screen w-screen flex-col items-center justify-center">
        <h1 className="text-5xl">Wishlist</h1>
        <p className="text-3xl font-bold text-red-400">{data.message}</p>
        <Link href="/products" className={buttonVariants({})}>
          Back to Shopping🛍️
        </Link>
      </main>
    );
  }

  if (data.wishlist) {
    const wishlist = data.wishlist;

    return (
      <main className="mt-3 flex justify-center ">
        <Suspense fallback={<ProductListSkeleton />}>
          <section className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {wishlist.map((item: WishListItemProps) => (
              <WishlistItem key={item.docId} item={item} userId={user?.email} />
            ))}
          </section>
        </Suspense>
      </main>
    );
  }
}
