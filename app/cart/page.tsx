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
  if (!user) {
    redirect("/localcart");
  }

  const cartitemsRef = collection(db, "cartitems");
  const q = query(cartitemsRef, where("uid", "==", user?.email));
  const querySnapshot = await getDocs(q);

  const data = querySnapshot.docs.map((doc) => doc.data());
  const dataId = querySnapshot.docs.map((doc) => doc.id);
  const cartItems = data.map((item, index) => {
    return {
      id: dataId[index],
      image: item.image,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    };
  });
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <h1>Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id} className="flex">
          <Image src={item.image} alt={item.title} width={200} height={200} />
          <div className="flex flex-col">
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <p>product id:{item.id}</p>
            <QuantityBtn quantity={item.quantity} productId={item.id} />
          </div>
        </div>
      ))}
    </main>
  );
}
