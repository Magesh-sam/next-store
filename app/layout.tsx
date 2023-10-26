import "./globals.css";
import "@smastrom/react-rating/style.css";

import { Analytics } from "@vercel/analytics/react";

import { UserProvider } from "@auth0/nextjs-auth0/client";

import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { Providers } from "@/redux/Providers";
import { Toaster } from "@/components/ui/toaster";

const lora = Lora({ subsets: ["latin"] });

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
  },
  twitter: {
    title: "Next Store",
    description: "An E-commerce website built with Next.js, Stripe",
  },
  generator: "Next.js",
  applicationName: "Next Store",
  publisher: "Mageshkannan",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <UserProvider>
          <Providers>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              {children}

              <Toaster />
              <Analytics />
            </ThemeProvider>
          </Providers>
        </UserProvider>
      </body>
    </html>
  );
}
