import type { Metadata } from "next";
import {  Courier_Prime, Rampart_One, Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const courier = Zen_Maru_Gothic({ subsets: ["latin"], weight: ["400", "700"] });

export const RampartOneFont = Rampart_One({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thuan's Portfolio",
  description: "Pham Van Thuan portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={courier.className}>{children}</body>
    </html>
  );
}
