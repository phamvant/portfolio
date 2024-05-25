"use client";

import Highlight from "./components/highlight";
import NavBar from "./components/navbar/nav-bar";
import Project from "./components/project/project";

export default function Home() {
  return (
    <>
      <NavBar />
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Highlight />
      <div className="h-[1px] bg-black dark:bg-white mx-20"></div>
      <Project />
    </>
  );
}
