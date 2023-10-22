import CartList from "@/components/CartList";
import QuantityBtn from "@/components/QuantityBtn";
import { db } from "@/firebase/config";
import { getSession } from "@auth0/nextjs-auth0";
import { collection, getDocs, query, where } from "firebase/firestore";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Cart() {
  const session = await getSession();
  const user = session?.user;
  const citiesRef = collection(db, "cartitems");
  if (!user) {
    return (
      <>
        <CartList />
      </>
    );
  }

  const q = query(citiesRef, where("uid", "==", user?.email));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => doc.data());

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <h1>Cart</h1>

      {data.map((item) => (
        <div key={item.id} className="flex">
          <Image src={item.image} alt={item.title} width={200} height={200} />
          <div className="flex flex-col">
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <QuantityBtn quantity={item.quantity} />
          </div>
        </div>
      ))}
    </main>
  );
}
