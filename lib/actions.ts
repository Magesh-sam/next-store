"use server";
import { db } from "@/firebase/config";
import { CartItemAPIProps, WishListItemAPIProps } from "@/types/types";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
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

export async function addToCart(product: CartItemAPIProps, uid: string) {
  try {
    await addDoc(cartItemsRef, {
      image: product.image,
      title: product.title,
      price: product.price,
      quantity: 1,
      uid,
    });
    revalidatePath("/cart");
    redirect("/cart");
  } catch (err) {
    console.error(err);
    return {
      message: "Database Error: Failed to add product to cart",
    };
  }
}

export async function addToWishlist(
  product: WishListItemAPIProps,
  uid: string,
) {
  try {
    await addDoc(wishlistRef, {
      image: product.image,
      title: product.title,
      price: product.price,
      uid,
    });
    revalidatePath("/wishlist");
    redirect("/wishlist");
  } catch (err) {
    console.error(err);
    return {
      message: "Database Error: Failed to add product to wishlist",
    };
  }
}
