"use client";

import Highlight from "./components/highlight";
import NavBar from "./components/navbar/nav-bar";
import Project from "./components/project/project";
import Project2 from "./components/project/project-2";
import Project3 from "./components/project/project-3";

export default function Home() {
  return (
    <div>
      <div className="h-screen flex flex-col">
        <NavBar />
        <Highlight />
      </div>
      <Project />
      <Project2 />
      <Project3 />
    </div>
  );
}
