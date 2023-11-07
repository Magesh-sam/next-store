import CategoriesBar from "@/components/CategoriesBar";
import FeaturedProducts from "@/components/FeaturedProducts";
import ImageSlider from "@/components/ImageSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Store",
  description: "An E-commerce website built with Next.js, Stripe",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Stripe",
    "E-commerce",
    "E-commerce website",
    "Next.js E-commerce website",
    "Stripe checkout",
  ],
  authors: [
    {
      name: "Mageshkannan",
      url: "https://mageshkannan.netlify.app",
    },
  ],
  creator: "Mageshkannan",
  openGraph: {
    title: "Next Store",
    description: "An E-commerce website built with Next.js, Stripe",
    images: [
      {
        url: "https://nextstore-stripe.vercel.app/next-store-og.png",
        width: 1200,
        height: 600,
        alt: "next store",
      },
    ],
  },
  twitter: {
    title: "Next Store",
    description: "An E-commerce website built with Next.js, Stripe",
    images: [
      {
        url: "https://nextstore-stripe.vercel.app/next-store-og.png",
        width: 1200,
        height: 600,
        alt: "next store",
      },
    ],
  },
  generator: "Next.js",
  applicationName: "Next Store",
  publisher: "Mageshkannan",
  colorScheme: "dark",
};

// TODO: make it responsive and fix the overflow

export default function Home() {
  return (
    <main className="mt-20 flex h-screen  flex-col items-center justify-center ">
      <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
        Welcome to next store built with next js
      </h1>
      <CategoriesBar/>
      <FeaturedProducts />
      <ImageSlider />
    </main>
  );
}
