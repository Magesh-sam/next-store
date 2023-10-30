import { buttonVariants } from "@/components/ui/button";
import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { api } from "@/axios/config";
import Image from "next/image";

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
    console;
    return (
      <main className="flex h-screen w-screen flex-col items-center justify-center">
        <h1 className="text-5xl">Wishlist</h1>
        {/* //Todo change any to proper types */}
        {wishlist.map((item: any) => (
          <div key={item.id} className="   w-[400px] gap-3  p-3">
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={300}
              objectFit="contain"
              objectPosition="center"
              className="mx-auto aspect-square w-[300px]"
            />
            <div className="mt-5 flex justify-around">
              <h3 className="font-bold">{item.title}</h3>
              <p className="font-bold">${item.price}</p>
            </div>
          </div>
        ))}
      </main>
    );
  }
}
