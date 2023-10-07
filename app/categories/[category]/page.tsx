import { notFound } from "next/navigation";

export default function Home({ params }: { params: { category: string } }) {
  const { category } = params;
  const categoryType = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];

  // Todo : the prop should match the type CategoryString else throw notFound();
  if (!categoryType.includes(category)) {
    notFound();
  }

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <h1>Category: {category}</h1>
    </main>
  );
}
