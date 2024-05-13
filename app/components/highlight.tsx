import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { BiArrowToRight } from "react-icons/bi";
import Timeline from "./timeline";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  title: string;
  content: string;
  index: number;
}

export default function Highlight({ title, content, index }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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

    const wrappers = gsap.utils.toArray(".wrapper");

    const scrollTween = gsap.to(wrappers, {
      xPercent: -104,
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
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
  }, []);

  return (
    <div className="container grid grid-cols-2 w-[200%]" ref={containerRef}>
      <div className="relative min-h-screen mx-4 wrapper">
        <div
          className={`absolute md:bottom-auto bottom-12 mt-96 ${index % 2 == 0 ? "md:left-40" : "md:right-40"}`}
        >
          <BiArrowToRight
            id="nav-to-detail"
            className="absolute right-0"
            size={30}
          />
          <p className="w-40 mb-10 text-5xl font-extrabold leading-snug hl-title md:leading-normal md:text-7xl">
            I'm a Fullstack Developer
          </p>

          <div className="hl-content max-w-[550px] text-xl md:text-2xl md:leading-10 font-thin leading-8">
            In Love With Node | AWS | Building Scalable Backends in Japan |
            Automation Enthusiast.
            <div>
              Have spent a great deal of time to thoroughly research and try
              many aspects so that may have a quite late start in this Web
              industry. Nevertheless, I realize that it is actually my
              destination which I am finding and heading to.
            </div>
          </div>
        </div>
      </div>
      <Timeline />
    </div>
  );
}
