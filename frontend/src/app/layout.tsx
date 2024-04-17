import type { Metadata } from "next";
import dynamic from "next/dynamic"
import { Inter } from "next/font/google";
import "./globals.css";
import { OrderFilterProvider } from "@/components/OrderByStatusProvider";
import { OrderInputFilterProvider } from "@/components/OrderFilterProvider";
import { BasketProvider } from "@/components/userComponents/OrderContext";
import { DraftProvider } from "@/components/userComponents/DraftContext";

const AuthProvider = dynamic(() => import('@/components/AuthProvider'), {
  ssr: false,
})

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

      <body className={inter.className}>
        <AuthProvider>
          <BasketProvider>
            <DraftProvider>
            <OrderFilterProvider>
              <OrderInputFilterProvider>{children}</OrderInputFilterProvider>
            </OrderFilterProvider>
            </DraftProvider>
          </BasketProvider>
        </AuthProvider>
      </body>

    </html>
  );
}


