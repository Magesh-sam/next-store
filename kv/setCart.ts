import { ProductProps } from "@/types/types";
import { kv } from "@vercel/kv";

export default async function setCart({
  key,
  value,
}: {
  key: string;
  value: ProductProps;
}) {
  try {
    await kv.set(key, value);
  } catch (error) {
    console.error(error);
  }
}
