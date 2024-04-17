import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import { OrderFilterProvider } from "@/components/OrderByStatusProvider";
import { OrderInputFilterProvider } from "@/components/OrderFilterProvider";
import { BasketProvider } from "@/components/userComponents/OrderContext";
import { DraftProvider } from "@/components/userComponents/DraftContext";

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
            <DraftProvider>
            <OrderFilterProvider>
              <OrderInputFilterProvider>{children}</OrderInputFilterProvider>
            </OrderFilterProvider>
            </DraftProvider>
          </BasketProvider>
        </body>
      </AuthProvider>
    </html>
  );
}
