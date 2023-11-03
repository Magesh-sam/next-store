import { buttonVariants } from "@/components/ui/button";
import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { api } from "@/axios/config";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import DeleteItem from "@/components/DeleteItem";
import { WishListItemProps } from "@/types/types";
import WishlistToCartBtn from "@/components/WishlistToCartBtn";

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
      <main className="flex h-screen w-screen flex-col items-center justify-center">
        <h1 className="text-5xl">Wishlist</h1>
        {wishlist.map((item: WishListItemProps) => (
          <div
            key={item.docId}
            className="   w-[300px] gap-3  border-2 border-primary p-3"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={200}
              height={200}
              objectFit="contain"
              objectPosition="center"
              className="mx-auto aspect-square w-[200px]"
            />

            <h3 className="space-y-3 pl-3 pt-3">{item.title}</h3>
            <p className="space-y-3 px-3   py-3 font-bold">${item.price}</p>

            <div className="flex  items-center justify-between pb-3">
              {/* <AddToCartButton
                item={{
                  id: item.id,
                  title: item.title,
                  image: item.image,
                  price: item.price,
                  quantity: 1,
                }}
              /> */}
              <WishlistToCartBtn
                item={{ ...item, quantity: 1 }}
                userId={user?.email}
              />
              <DeleteItem id={item.docId} type="wishlist" />
            </div>
          </div>
        ))}
      </main>
    );
  }
}
