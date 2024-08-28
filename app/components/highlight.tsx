"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, TextPlugin } from "gsap/all";

import TechStack from "./tech-stack";
import Website from "./website";
import NavBar from "./navbar/nav-bar";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

export default function Highlight() {
  useGSAP(() => {
    var titleTimeline = gsap.timeline({
      delay: 1,
      repeat: -1,
    });

    titleTimeline.to(".hl-title", {
      text: "I'm a Freelance Developer",
      duration: 2,
    });
    titleTimeline.to(".hl-title", {
      text: "I'm a Fullstack Developer",
      duration: 2,
    });
  }, []);

  return (
    <div className="highlight flex flex-col justify-end md:justify-center md:px-[5%] xl:px-[20%] h-full">
      <div className="flex flex-col flex-wrap justify-end md:justify-center md:items-center gap-10 md:gap-24 pb-10 md:pb-0">
        <div className="flex flex-wrap w-full mt-20 gap-20 md:gap-0" id="top">
          <div className="md:flex-1 hover:shadow-sm shadow-2xl transition-all duration-300 border-[1px] border-gray-500 rounded-xl mx-4 md:mx-0">
            <div className="p-4 xl:p-10 row-span-2 pointer-events-none">
              <p className="max-w-[700px] mb-10 text-3xl font-extrabold leading-snug  hl-title md:leading-normal pointer-events-none animate-fadeup">
                I'm a Fullstack Developer
              </p>

              <div className="flex flex-col gap-6">
                <p className="text-xl font-extralight leading-8 max-w-fit hl-content pointer-events-none animate-fadeup">
                  In Love With Node | AWS | Building Scalable Backends in Japan
                  | Using Tech To Solve My Own Real Life Problems | Automation
                  Enthusiast.
                </p>
                <p className="text-xl font-extralight leading-8 max-w-fit hl-content pointer-events-none animate-fadeup">
                  I'm sharing everything I know about software through my blog.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:flex-1 md:justify-center">
            <TechStack />
          </div>
        </div>
        <div className="hidden md:flex lg:px-4 lg:flex-row flex-col-reverse w-full gap-20 mb-20 lg:mb-0 md:flex">
          <Website />
        </div>
      </div>
      {/* <Timeline /> */}
    </div>
  );
}
