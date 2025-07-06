import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SplashCursor from "@/components/ui/splashcursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feralde",
  description: "Discover our exclusive collection of luxury perfumes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SplashCursor />
      </body>
    </html>
  );
}
