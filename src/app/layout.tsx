import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/contexts/CartContext";
import { ToastProvider } from "@/contexts/ToastContext";
import { ToastContainer } from "@/components/ui/Toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medi Ecom - Your Trusted Health & Wellness Store",
  description:
    "Your trusted care now and always. For the best results, align your health needs with your medication plans.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F8F7F4] min-h-screen`}>
        <ToastProvider>
          <CartProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ToastContainer />
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
