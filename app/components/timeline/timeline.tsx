import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TimelineCard from "./timeline-card";

const list = [
  {
    time: "Jun, 2019",
    company: "Hanoi University Of Science And Technology",
    stack: "Embedded System ・ IoT",
  },
  {
    time: "Jun, 2021",
    company: "Sun Asterisk",
    stack: "PHP ・ Laravel ・ Backend Developer",
  },
  {
    time: "Feb, 2022",
    company: "FPT Japan",
    stack: "C# ・ Unity ・ Mobile Developer",
  },
  {
    time: "Feb, 2023",
    company: "Morson Japan",
    stack: "C# ・ WPF ・ Flutter ・ Mobile Developer",
  },
];

export default function Timeline() {
  useGSAP(() => {
    gsap.from(".event", {
      y: -500,
      scrollTrigger: {
        trigger: ".timeline-container",
        start: "right right",
        scrub: true,
      },
      stagger: 0.1,
    });

    gsap.from(".event-mask", {
      y: -500,
      scrollTrigger: {
        trigger: ".timeline-container",
        start: "right right",
        scrub: true,
      },
      stagger: 0.1,
    });
  });

  return (
    <div className="flex flex-col justify-end md:justify-center mb-[10%] md:mb-0 min-h-screen timeline-container wrapper">
      <img
        src="/bg2.svg"
        alt="bg2"
        className="fixed left-[16%] md:left-[10.5%] z-0 w-3/4 opacity-10 "
      />
      <div className="flex justify-center">
        <div className="w-full max-w-3xl px-4  mx-auto">
          {list.map((val, index) => {
            return (
              <TimelineCard key={index}>
                <time className=" w-fit left-0 text-xs font-semibold uppercase h-6 text-emerald-600 pointer-events-none">
                  {val.time}
                </time>
                <div className=" mb-2 font-normal max-w-60 md:max-w-fit text-md pointer-events-none">
                  {val.company}
                </div>
                <div className=" mb-2 font-normal text-md pointer-events-none">
                  {val.stack}
                </div>
              </TimelineCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
