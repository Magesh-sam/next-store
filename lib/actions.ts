"use server";

import { db } from "@/firebase/config";
import {
  CartItemAPIProps,
  CartItemProps,
  WishListItemAPIProps,
  WishListItemProps,
} from "@/types/types";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const cartItemsRef = collection(db, "cartitems");
const wishlistRef = collection(db, "wishlist");

export async function getCartItems(uid: string) {
  const q = query(cartItemsRef, where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => doc.data());
  const dataId = querySnapshot.docs.map((doc) => doc.id);
  const cartItems = data.map((item, index) => {
    return {
      docId: dataId[index],
      image: item.image,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
      id: item.id,
      uid: item.uid,
    };
  });

  return cartItems;
}

// export const fetchCartItems = getCartItems.bind(this);

export async function addToCartToDB(product: CartItemAPIProps, uid: string) {
  try {
    const cartItems = await getCartItems(uid);

    const data = cartItems.find(
      (item: CartItemProps) => item.id === product.id,
    );
    if (data) {
      const docRef = doc(db, "cartitems", data.docId);
      try {
        await updateDoc(docRef, {
          quantity: data.quantity + 1,
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        await addDoc(cartItemsRef, {
          id: product.id,
          image: product.image,
          title: product.title,
          price: product.price,
          quantity: 1,
          uid,
        });
        console.log("added product to cart");
      } catch (err) {
        console.error(err);
        return {
          message: "Database Error: Failed to add product to cart",
        };
      }
    }
  } catch (err) {
    console.error(err);
    return {
      message: "Database Error: Failed to add product to cart",
    };
  }

  revalidatePath("/cart");

  redirect("/cart");
}

export async function addToWishlist_to_Cart(
  product: WishListItemProps,
  uid: string,
) {
  const item = {
    id: product.id,
    image: product.image,
    title: product.title,
    price: product.price,
    quantity: 1,
    uid,
  };
  try {
    await deleteDoc(doc(db, "wishlist", product.docId));
  } catch (err) {
    console.error(err);
    return {
      message: "Database Error: Failed to add product to wishlist",
    };
  }
  await addToCartToDB(item, uid);
  revalidatePath("/wishlist");
}

export async function addToWishlist(
  product: WishListItemAPIProps,
  uid: string | null | undefined,
) {
  try {
    await addDoc(collection(db, "wishlist"), {
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      uid,
    });
    
  } catch (err) {
    console.error(err);
    return {
      message: "Database Error: Failed to add product to wishlist",
    };
  }
  revalidatePath("wishlist");
}
