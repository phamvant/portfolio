"use client";

import Highlight from "./components/highlight";
import NavBar from "./components/nav-bar";

export default function Home() {
  // useGSAP(() => {
  //   gsap.from(".next-logo2", {
  //     x: 400,
  //     scale: 0.7,
  //     scrollTrigger: {
  //       trigger: ".next-logo2",
  //       start: "top top%", // when the bottom of the box hits the bottom of the viewport
  //       end: "top 60%", // end when the top of the box hits 20% from the top of the viewport
  //       scrub: true, // scrubbing makes the animation smooth
  //     },
  //     ease: "power1.inOut",
  //   });
  // });
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

      {/* <hr />
      <Highlight
        title={"My Portfolio"}
        content={
          "single keep pocket nature community out art high while bridge knife mean chain lift three stove won climb thin event yet oldest joined actual"
        }
        index={1}
      /> */}
    </main>
  );
}
