import CategoriesBar from "@/components/CategoriesBar";
import FeaturedProducts from "@/components/FeaturedProducts";
import ImageSlider from "@/components/ImageSlider";
import { ImageSliderSkeleton } from "@/components/Skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

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
    <main className="mt-3 flex min-h-screen  flex-col items-center justify-center ">
      <CategoriesBar />
      <FeaturedProducts />
      <Suspense fallback={<ImageSliderSkeleton />}>
        <ImageSlider />
      </Suspense>
    </main>
  );
}
