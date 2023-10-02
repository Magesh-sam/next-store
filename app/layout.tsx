import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
