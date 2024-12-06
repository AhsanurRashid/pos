import type { Metadata } from "next"
import { Plus_Jakarta_Sans as FontSans } from "next/font/google"
import "./globals.css";

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Streamline POS Solutions",
  description: "Discover our cutting-edge POS software designed to simplify your business operations. From inventory management to sales tracking, our intuitive platform empowers retailers and restaurateurs to enhance customer experiences, optimize transactions, and boost productivity. Explore customizable features, real-time analytics, and seamless integrations tailored to your unique needs. Elevate your business with Streamline POS Solutions today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", fontSans.variable)}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
      </body>
    </html>
  );
}
