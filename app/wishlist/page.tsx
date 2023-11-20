import { buttonVariants } from "@/components/ui/button";
import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { api } from "@/axios/config";
import Image from "next/image";

import { WishListItemProps } from "@/types/types";
import WishlistItem from "@/components/WishlistItem";
import { Suspense } from "react";
import { ProductListSkeleton } from "@/components/Skeletons";
import { redirect } from "next/navigation";
import { getWishlistItems } from "@/lib/actions";

export default async function Wishlist() {
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    redirect("/api/auth/login");
  }

  const wishlist = await getWishlistItems(user?.email);

  if (!wishlist || wishlist.length === 0) {
    return (
      <main className=" flex h-screen flex-col items-center justify-center gap-3">
        <h1 className="text-3xl font-semibold">
          No Items found in the wishlist 😔
        </h1>
        <Image
          src="/empty_wishlist.svg"
          alt="Empty cart"
          width={700}
          height={600}
        />
        <Link href="/products" className={buttonVariants({})}>
          Explore Products
        </Link>
      </main>
    );
  }

  return (
    <main className=" flex justify-center ">
      <Suspense fallback={<ProductListSkeleton />}>
        <section className="mb-8 mt-20 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlist.map((item: WishListItemProps) => (
            <WishlistItem key={item.docId} item={item} userId={user?.email} />
          ))}
        </section>
      </Suspense>
    </main>
  );
}
