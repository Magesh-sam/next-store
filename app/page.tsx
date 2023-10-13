import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Store | Products",
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

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <h1>Welcome to next store built with next js</h1>
    </main>
  );
}
