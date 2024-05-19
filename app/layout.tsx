import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Theme from "./providers/theme-provider";
import Cursor from "./components/cursor";
import NavBar from "./components/navbar/nav-bar";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Cursor />
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
