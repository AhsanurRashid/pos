import Navbar from "@/components/layouts/Navbar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shop: Streamline POS Solutions",
  description: "Shop: Discover our cutting-edge POS software designed to simplify your business operations. From inventory management to sales tracking, our intuitive platform empowers retailers and restaurateurs to enhance customer experiences, optimize transactions, and boost productivity. Explore customizable features, real-time analytics, and seamless integrations tailored to your unique needs. Elevate your business with Streamline POS Solutions today!",
}

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>  
      <Navbar />
      {children}
    </main>
  )
}