import axios from "axios";

export default async function Wishlist() {
  const data = axios
    .post("/api/wishlist", {
      "id": "mageshkannanam@gmil.com",
    })
    .then((res) => res.data);
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="text-5xl">Wishlist</h1>
    </main>
  );
}
