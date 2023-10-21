import { kv } from "@vercel/kv";

export default async function getCart(key: string) {
  try {
    const getExample = await kv.get(key);
    console.log(getExample);
  } catch (error) {
    console.error(error);
  }
}
