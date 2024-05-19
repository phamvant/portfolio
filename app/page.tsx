"use client";

import Highlight from "./components/highlight";
import NavBar from "./components/navbar/nav-bar";

export default function Home() {
  return (
    <main className="flex flex-col bg-gradient-to-b dark:from-gray-900 dark:to-zinc-900 transition duration-300 h-[3000px]">
      <NavBar />
      <Highlight
        title={"My Portfolio"}
        content={
          "single keep pocket nature community out art high while bridge knife mean chain lift three stove won climb thin event yet oldest joined actual"
        }
        index={0}
      />
    </main>
  );
}
