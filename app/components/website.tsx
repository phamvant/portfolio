import { MdAlternateEmail } from "react-icons/md";
import {
  RiFacebookCircleFill,
  RiGithubFill,
  RiLinkedinFill,
} from "react-icons/ri";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const githubData = [
  ["Projects", 20],
  ["Commits", 400],
  ["Days", 200],
  ["Favourite", "Node.JS"],
];

export default function Website() {
  useGSAP(() => {
    gsap.from(".contribute-number", {
      textContent: 0,
      ease: "easeIn",
      duration: 3,
      snap: { textContent: 1 },
    });
  }, []);

  return (
    <>
      <div className="flex lg:flex-1 flex-row justify-between lg:justify-normal gap-20 h-full px-[5%] md:px-0 transition-all md:pl-2 items-end">
        <div className="size-16 flex flex-col justify-end animate-fadeup">
          <RiGithubFill className="size-12 hover:size-14 rounded-full transition-all duration-200" />
        </div>
        <div className="size-16 flex flex-col justify-end animate-fadeup">
          <RiLinkedinFill className="size-12 hover:size-14 rounded-full transition-all duration-200" />
        </div>
        <div className="size-16 flex flex-col justify-end animate-fadeup z-20">
          <RiFacebookCircleFill className="size-12 hover:size-14 rounded-full transition-all duration-200" />
        </div>
        <div className="size-16 flex flex-col justify-end animate-fadeup z-20">
          <MdAlternateEmail className="size-12 hover:size-14 rounded-full transition-all duration-200" />
        </div>
      </div>
      <div className="lg:flex-1 lg:flex hidden">
        {githubData.map((val, index) => {
          return (
            <div className="flex-1 flex flex-col gap-4 z-20" key={index}>
              <div className="text-lg animate-fadeup">{val[0]}</div>
              <div
                className={`lg:text-4xl text-3xl font-semibold hover:text-4xl lg:hover:text-5xl transition-all duration-300 animate-fadeup h-8 items-end ${index < 3 ? "contribute-number" : ""}`}
              >
                {val[1]}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
