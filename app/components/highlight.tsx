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

          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="fixed left-[16%] md:left-[25.5%] z-0 w-4/5 md:w-1/2"
            style={{
              opacity: 0.2,
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinejoin: "round",
              strokeMiterlimit: 2,
            }}
            viewBox="0 0 660 491"
          >
            <path
              z={0}
              d="M566 223h-1 1-8c-2-5 12-6 15-2l-7 2Zm-24 69 1 1-2 1 1-2ZM347 19l-1-2-12-2-6-1h1c27-5 52-7 77-7l2-1v2c44 5-55 1-61 11Zm0 5v-1h1l1 2-2-1Zm-4-1c-82 9-162 40-235 49 63-27 132-40 204-54l14-2 2-1v2l-2 1 8 1 9 2 2 3-2-1ZM108 392h27c-26 9-82 1-27 0Zm105 59c-2-1-4-3-4-5l1-3 4 3-1 5ZM66 100l-1 3-5-7c8-2 22 4 6 4ZM55 215v1l-11 2-8 1-8-2h-1c2-4 6-8 10-8h2v2h20c-1 3-1 5-4 4Zm-19 15 1-4 9-2 11-2h1l1 1c-6 11-9 4-23 7Zm1 20-2-1 2-1v2Zm-5 171 5-2c5-1 11-1 16 1-6 2-13 2-21 1Zm-15-61h-1l5-5-1 2c5 1 12 0 15 3-6 2-12 1-18 0Zm-9-21 2-1 1 2-3-1Zm12-160-1-2h2l6-5 1 1v4c4 0 8 0 10 2-6 2-14 3-18 0Zm-4-18-1-3h11l2-1v8l-12-4Zm640-59-5 1h-5c-4-13-25-8-34-15h11c5 1 11 0 18-2a6 6 0 0 1-6-5c0-3 1-5 3-6-4 2-9 2-15 2h-7c0-6 10-2 11-8-8-2-25 5-27-4 10-2 28 5 31-4-2 0-4-3 0-3v-1l18 1 7 1c2 1 3-1 4-3 0-2-2-4-4-4l-6-1-21-1-1 1-1-1c1-10-21 2-23-7h12c2 0 4-2 4-5 0-2-2-4-4-4h-3c-6 0-12 0-17 3v-2c-14-6 12-1 8-8-7-2-22 5-23-4 6-1 14 1 15-4v-1c7-1 14 1 21 2l16 2c3 1 5-1 5-4s-2-5-5-6l-14-2c-8-1-15-3-23-2-17 0-35 0-15-8H404l1 1c-26 0-51 2-79 7h-1l-2 3c1-1 3-2 4-1l2 2-1 1-3-2-14 3C238 27 162 41 96 72l1-3c-17 3-32 6-42 16v1l-3 1-8 3c-2 1-4 3-3 5 1 3 3 4 5 3l8-2 4 8c-6 6-17 8-30 7v3c-4-3-10-3-15-3H7l-3 2c0 2 1 3 2 3h8l9 1c-1 3-6 2-7 6 11 2 31-5 35 4-9 0-11 6-23 4v1c-5-2-11-2-16-2H3c-1 0-3 1-3 3 0 1 1 2 3 2h9l12 1 4 6c-10 0-16 2-19 8 5 2 19-5 19 4h-1l-1-1H13l-3-1-3 1H3c-1 0-3 1-3 3l3 2h4l3 11 2-1 9 2-2 2-6 2v2c-1 3 1 6 4 8 7 4 20 2 27-2l-1 2c3 1 5 1 4 4-3 1-8 0-8 4 6 0 14 0 12 8-6-5-10-5-16 0l1 2c-7 0-14 5-18 15l-2 4 3 1 8 2 4 2-1 9-2-1c1 8-5 8-8 12 4 0 10 0 11 3l-3 2v-1c-6-3-17 7-8 7 2-9 8 13 11-3l5-3-1 3c3 0 5 0 4 3-6 0-10 3-11 8 4 2 9 4 11 8-6 1-13 0-18-3a5 5 0 1 0-6 9c8 5 16 5 24 5 3 1 5 1 4 4-11-3-10 6-19 4l1 2c-5-2-9-3-14-3H7c-2 0-3 1-3 3l2 3h13c-9 10 11 2 13 10-3 1-7 1-8 4H3l-3 2 3 3h21c0 6-4 8-12 7-1 7 6 7 8 11H9v3l-6-3c-1-1-2 0-2 1-1 1 0 3 1 4h2c-8 9 9 7 12 14-4 3-6 6-6 9v2l6 1c8 1 17 2 24-3l-1 3c6 4-1 6 8 12-5 0-13-1-15 3l-6-1a5 5 0 0 0-4 10c4 2 9 2 14 1l-1 2c11 2 31-5 35 4-5 0-5 5-11 4v1c-8-3-16-2-23-2H22c-1 0-2 1-2 3 0 1 0 2 2 2h14c7 0 14-1 20 1 3 5 9 2 3 10v2c-6-3-15-5-23-3-6 2-9 4-11 8l-2 3 4 1c11 2 23 2 33-3l-1 4c53 2 116-5 165 2l7 1-7-1c-7 1-7 10-16 9 0-4-6-5-7 0 2 1 6 0 7 3h-2c-3 0-6 2-6 4-1 3 0 5 3 6h10l-1 2c16 9 32-6 46 4-16 0-9 2-3 8-7 2-23-5-24 4 3 1 8 0 8 4-9-3-17 2-23 7l-4 3c-2 1-3 4-1 5 1 2 4 3 5 2l5-4c7-5 12-8 18-4 2 1 4 0 5-1 100 10 180-26 246-38l4 2 30-6 25-4c2 0 3-2 2-3 0-2-2-3-3-3l-25 4-30 6v-9c11 8 25-9 42-7v-5c9 7 20 6 31 6h13l3-3c0-2-1-3-3-3h-13c-9 1-17 1-24-2l12-2 7-1c2 0 3-2 3-4-1-2-3-4-5-3h-6c-6 1-12 2-18 5v-4c-5 0-11 1-12-4 20 1 29-9 42-14h7a2 2 0 1 0 0-5h-6c6-6 17-6 23-11l-1-2c5 1 10 1 15-1a3 3 0 0 0-2-6h-9c-4-8-14-9-21-14h3l16-3c3 0 3-3 2-6 0-3-5-5-8-4l-10 1-9 1 1-1c-3 0-5 0-4-4 12 2 16-5 19-11-4 0-10-2-4-4l14 1 11 1c2 0 4-2 4-4s-2-3-4-4l-10-1-17-1-1 1-1-1c3-10-16 2-15-6l2-1h3c2-1 3-3 3-5s-3-4-5-3h-2l-5 1v-1c-2-1-6-1-7-3h2l2-4c-1-1-2-2-3-1l-6 3 1-3c-3-1-8 0-8-4 5 0 11 1 12-4l-1-1c5-1 10 1 16 2l18 2c3 1 4-1 4-4 0-2-3-5-5-5l-15-2c-5-2-11-3-18-2l1-1c-6-1-15 1-16-4h16c2 0 4-1 4-4 0-2-2-4-4-4h-14l-2 1v-1c11-6 28-8 46-7v-4l1-1c11 8 26 7 39 6h8c2 0 3-2 3-3 0-2-1-3-3-3h-8c-11 1-23 2-32-2l11-2 11-1c2 0 3-2 3-4s-3-4-5-3l-10 1c-6 0-12 1-18 4v-4c-6-2-22 5-23-3h12l-1-1 2-1 1-1 10-4-1 3c12 2 15-6 23-8v-1h9l8-1c2-1 4-2 4-4s-1-3-3-3l-10 1-8 1v-1c8-8 26-5 35-11l-1-3 11 1h4l3-4c-1-2-2-4-4-3h-10c-4-8-14-9-21-14h4l15-3c3 0 3-3 3-6-1-3-6-5-9-4l-9 1-9 1v-1c-2 0-4-2-1-3h22a2 2 0 1 0 0-5h-23l-2 1c2-9 20-1 19-11l10 1h12c2 0 3-1 4-4 0-2-3-4-5-4l-10-1h-15v-1c-2-6-18 1-19-7h4v-1l9-1 8-1c2 0 4-2 4-3-1-2-2-4-3-3l-10 1h-8v-2l3-1c-2 0-3 0-3-2-1-1 0-3 1-3l-6 3 1-3c6-8 27-1 39-4l-1-2 10 1 4-1c2 0 4-2 3-4 0-2-1-3-3-3ZM5 269c-2-6 15-9 4-12 0 4-17 8-4 12Zm0-23c-2-6 15-9 4-12 0 4-17 8-4 12Zm211 211c-10 2-21 2-27 8 9-3 30 7 27-8Z"
              style={{ fill: "#40bdbf" }}
            />
          </svg>
          <div className="pb-16 md:p-8 xl:p-20  md:backdrop-blur-md md:border-2 md:border-gray-500 rounded-xl row-span-2 md:row-span-full">
            <BiArrowToRight
              id="nav-to-detail"
              className="absolute right-8 md:hidden"
              size={30}
              // color="white"
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
