"use client";

import Highlight from "./components/highlight";
import NavBar from "./components/navbar/nav-bar";
import Project from "./components/project/project";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="md:px-[5%] xl:px-[15%]">
        <Highlight />
        <div className="h-[1px] bg-black dark:bg-white"></div>
        <Project />
      </div>
    </div>
  );
}
