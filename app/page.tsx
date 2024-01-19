import CategoriesBar from "@/components/CategoriesBar";
import CustomerReview from "@/components/CustomerReview";
import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextstore-stripe.vercel.app"),
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
    images: "/next-store-og.png",
  },
  twitter: {
    title: "Next Store",
    description: "An E-commerce website built with Next.js, Stripe",
    images: "/next-store-og.png",
  },
  generator: "Next.js",
  applicationName: "Next Store",
  publisher: "Mageshkannan",
  colorScheme: "dark",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-1 flex-col">
      <HeroSection />
      <FeaturedProducts />
      <CustomerReview />
    </main>
  );
}
