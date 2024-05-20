"use client";

import Highlight from "./components/highlight";
import NavBar from "./components/navbar/nav-bar";

export default function Home() {
  return (
    <main className="flex flex-col bg-gradient-to-b dark:from-gray-900 dark:to-zinc-900 transition duration-300 h-[3000px]">
      <NavBar />
      <Highlight />
    </main>
  );
}
