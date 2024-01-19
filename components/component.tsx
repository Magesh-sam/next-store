import Image from "next/image";
import Link from "next/link";
import FeaturedProducts from "./FeaturedProducts";
import HeroSection from "./HeroSection";

export function Component() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <FeaturedProducts />
      </main>
    </div>
  );
}
