import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  title: string;
  content: string;
  index: number;
}

export default function Highlight({ title, content, index }: Props) {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top bottom",
        // end: "top 70%",
        // scrub: true,
      },

      duration: 0.5,
    });
    gsap.from(contentRef.current, {
      y: 50,
      opacity: 0,
      delay: 0.2,
      duration: 0.5,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "bottom bottom", // when the bottom of the box hits the bottom of the viewport
        // end: "top 70%", // end when the top of the box hits 20% from the top of the viewport
        // scrub: true, // scrubbing makes the animation smooth
      },
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="relative min-h-screen mx-4">
      <div
        className={`absolute md:bottom-auto bottom-10 mt-96 ${index % 2 == 0 ? "md:left-40" : "md:right-40"}`}
      >
        <p
          className="w-40 mb-10 text-5xl font-extrabold leading-snug md:leading-normal md:text-7xl"
          ref={titleRef}
        >
          My Portfolio
        </p>
        <div
          className="max-w-[550px] text-xl md:text-2xl md:leading-10 font-thin leading-8"
          ref={contentRef}
        >
          pig farther dawn connected thing factory giving flame cat tight seen
          beat plus sand cry military desert pale variety present voyage himself
          shore instrument zero team or eat beat plus sand cry military desert
          pale variety present voyage himself shore instrument zero team or eat
        </div>
      </div>
    </div>
  );
}
