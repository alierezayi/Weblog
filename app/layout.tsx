import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeContextProvider from "@/context/ThemeContext";
import NextAuthProvider from "@/providers/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weblog",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <NextAuthProvider>
            <div className="layout-container py-5">
              <div className="wrapper">
                <Header />
                {children}
                <Footer />
              </div>
            </div>
          </NextAuthProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
