import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import { OrderFilterProvider } from "@/components/OrderByStatusProvider";
import { OrderInputFilterProvider } from "@/components/OrderFilterProvider";
import { ProductFilterProvider } from "@/components/ProductFilterContext";
import ProductList from "@/components/ProductList";
import ProductFilterByCategory from "@/components/ProductFilterByCategory";
import ProductFilterByPrice from "@/components/ProductFilterByPrice";
import ProductFilterByMonth from "@/components/ProductFilterByMonth";
import { BasketProvider } from "@/components/userComponents/OrderContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>


      <body className={inter.className}>
        <BasketProvider>
          <OrderFilterProvider>
        <OrderInputFilterProvider>
        {children}
        </OrderInputFilterProvider>
        </OrderFilterProvider>
        </BasketProvider>
        </body>
      </AuthProvider>
    </html>
  );
}
