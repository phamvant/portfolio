"use client";

import Highlight from "./components/highlight";
import NavBar from "./components/navbar/nav-bar";
import Project from "./components/project/project";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="h-screen">
        <Highlight />
      </div>
      <Project />
    </div>
  );
}
