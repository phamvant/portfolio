"use client";

import Highlight from "./components/highlight";
import NavBar from "./components/nav-bar";

export default function Home() {
  return (
    <main className="flex flex-col bg-gradient-to-b from-gray-900 to-zinc-900 h-[3000px]">
      <NavBar />
      <Highlight
        title={"My Portfolio"}
        content={
          "single keep pocket nature community out art high while bridge knife mean chain lift three stove won climb thin event yet oldest joined actual"
        }
        index={0}
      ></Highlight>
    </main>
  );
}
