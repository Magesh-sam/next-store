import { Button } from "@/components/ui/button";
import React from "react";
import { getCartItems } from "@/lib/actions";
import { getSession } from "@auth0/nextjs-auth0";
import { ProductListSkeleton } from "@/components/Skeletons";
async function page() {
  const session = await getSession();
  const getCartItemsWithID = getCartItems.bind(null, session?.user.email);
  return (
    <main className="max-w-screen flex h-screen flex-col items-center justify-center">
      <ProductListSkeleton />
      <form action={getCartItemsWithID}>
        <Button type="submit">Fetch Cart Items</Button>
      </form>
    </main>
  );
}

export default page;
