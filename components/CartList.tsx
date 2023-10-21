"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CartItem from "./CartItem";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";
import { useEffect, useState } from "react";

import { useUser } from "@auth0/nextjs-auth0/client";

function CartList() {
  const { user, error, isLoading } = useUser();
  const [cartItemsFromFireStore, setCartItemsFromFireStore] = useState([]);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const citiesRef = collection(db, "cartitems");

  const q = query(citiesRef, where("uid", "==", user?.email));
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => doc.data());
      console.log("fetching prods from firestore", data);
      //@ts-ignore
      setCartItemsFromFireStore(data);
    };

    fetchData();
  }, [q]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  console.log("cartItemsFromFireStore", cartItemsFromFireStore);
  return (
    <section>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <p></p>
    </section>
  );
}

export default CartList;
