import React from "react";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CustomerReview from "@/components/CustomerReview";
async function page() {
  return (
    <main className="flex min-h-screen flex-1 flex-col">
      <HeroSection />
      <FeaturedProducts />
      <CustomerReview />
    </main>
  );
}

export default page;
