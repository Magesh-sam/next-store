import LocalCartList from "@/components/LocalCartList";
import { ProductListSkeleton } from "@/components/Skeletons";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function LocalCart() {
  const session = await getSession();
  const user = session?.user;
  if (user) {
    redirect("/cart");
  }
  return (
    <main className="mt-10 flex h-screen items-center justify-center">
      <Suspense fallback={<ProductListSkeleton/>} >

      <LocalCartList />
      </Suspense>
    </main>
  );
}
