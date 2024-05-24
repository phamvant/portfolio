import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import GlassCard from "./glass-card";

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
    <div className="flex flex-col justify-center md:mb-0 timeline-container wrapper w-[100%] h-[100%]">
      <img
        src="/bg2.svg"
        alt="bg2"
        className="fixed left-[16%] md:left-[10.5%] z-0 w-3/4 opacity-10 "
      />
      <div className="flex justify-center" id="timeline">
        <div className="w-full max-w-3xl px-4 mx-auto flex flex-col gap-6">
          {list.map((val, index) => {
            return (
              <GlassCard className="event" key={index}>
                <div className="border-[1px] py-4 rounded-xl pl-8 border-slate-600">
                  <time className="w-fit left-0 text-xs font-semibold uppercase h-6 text-emerald-600 pointer-events-none">
                    {val.time}
                  </time>
                  <div className=" mb-2 font-normal max-w-60 md:max-w-fit text-md pointer-events-none">
                    {val.company}
                  </div>
                  <div className=" mb-2 font-normal text-md pointer-events-none">
                    {val.stack}
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
