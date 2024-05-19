"use client";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import { BiArrowToRight } from "react-icons/bi";
import Timeline from "./timeline";
import TechStack from "./tech-stack";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

interface Props {
  title: string;
  content: string;
  index: number;
}

export default function Highlight({ title, content, index }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

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

    gsap.from(".hl-title", {
      y: 50,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".hl-title",
        start: "top bottom",
      },
    });

    gsap.from(".hl-content", {
      y: 50,
      opacity: 0,
      delay: 0.1,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".hl-title",
        start: "top bottom",
      },
    });

    //---------------------------TITLE-------------------------//

    const wrappers = gsap.utils.toArray(".wrapper");

    const scrollTween = gsap.to(wrappers, {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "bottom bottom",
        pin: true,
        scrub: true,
      },
    });

    gsap.to("#nav-to-detail", {
      opacity: 0,
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: "#nav-to-detail",
        start: "bottom bottom",
        scrub: true,
      },
    });

    gsap.from("#nav-to-detail", {
      x: -10,
      repeat: -1,
      yoyo: true,
      duration: 1,
      // ease: "none",
    });
  }, []);

  return (
    <div
      className="scroll-container grid grid-cols-2 w-[200%]"
      ref={containerRef}
    >
      <div className="flex flex-col items-end justify-end md:justify-center min-h-screen pb-4 md:pb-0 md:items-center wrapper">
        <div
          className={`grid md:grid-cols-2 md:grid-rows-none grid-rows-3 px-4 md:px-[5%] xl:px-[10%] md:bottom-auto bottom-12  ${index % 2 == 0 ? "md:left-40" : "md:right-40"}`}
        >
          <div className="md:hidden">
            <TechStack />
          </div>
          <div className="pb-16 md:p-8 xl:p-20  md:backdrop-blur-md md:border-2 md:border-gray-500 rounded-xl row-span-2 md:row-span-full">
            <BiArrowToRight
              id="nav-to-detail"
              className="absolute right-8 md:hidden"
              size={30}
            />
            <p className="max-w-[700px] mb-10 text-4xl font-extrabold leading-snug  hl-title md:leading-normal md:text-5xl xl:text-7xl">
              I'm a Fullstack Developer
            </p>

            <div className="text-xl font-extralight leading-8 max-w-fit hl-content md:text-2xl md:leading-10">
              In Love With Node | AWS | Building Scalable Backends in Japan |
              Automation Enthusiast.
              <div>
                Have spent a great deal of time to thoroughly research and try
                many aspects. Nevertheless, I realize that web is actually my
                destination which I am finding and heading to.
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:justify-center">
            <TechStack />
          </div>
        </div>
      </div>
      <Timeline />
    </div>
  );
}
