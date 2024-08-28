import type { Metadata } from "next";
import { Inter, Courier_Prime } from "next/font/google";
import "./globals.css";
import Theme from "./providers/theme-provider";
import Cursor from "./components/cursor";
import NavBar from "./components/navbar/nav-bar";

const inter = Inter({ subsets: ["latin"] });
const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"] });

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
      <body className={courier.className}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
