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
  return (
    <div className="flex flex-col justify-center md:mb-0 timeline-container">
      <div
        className="flex justify-center gap-20 px-[5%] xl:px-[10%] max-h-[70%] mt-20"
        id="timeline"
      >
        <div className="hidden md:flex-1 w-full h-full md:grid grid-cols-3 grid-rows-3 gap-6">
          <div className="w-full col-span-3 lg:col-span-2 row-span-2 border-[1px] dark:border-0 border-gray-400 rounded-lg">
            <img
              src="/conference.png"
              alt="conference"
              className="object-cover w-max h-[100%] rounded-lg hl-img"
            />
          </div>
          <div className="hidden lg:block w-full border-[1px] dark:border-0 border-gray-400 rounded-lg">
            <img
              src="/sun.jpg"
              alt="sun"
              className="object-cover w-max h-[100%] rounded-lg hl-img"
            />
          </div>
          <div className="hidden lg:block w-full border-[1px] dark:border-0 border-gray-400 rounded-lg">
            <img
              src="/graduate.jpeg"
              alt="sun"
              className="object-cover w-max h-[100%] rounded-lg hl-img"
            />
          </div>
          <div className="rounded-lg col-span-3">
            <div className="py-8 h-full">
              <div>
                Had the privilege of studying at the Hanoi University of Science
                & Technology, a place brimming with talented and passionate
                individuals. During my time there, I seized the opportunity to
                participate in numerous conferences, where I showcased my
                abilities and expanded my horizons.
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full md:px-0 mx-auto flex flex-col gap-6">
          {list.map((val, index) => {
            return (
              <GlassCard className="event" key={index}>
                <div className="border-[1px] py-4 rounded-xl pl-8 border-slate-600">
                  <time className="w-fit left-0 text-xs font-semibold uppercase h-6 text-emerald-600 pointer-events-none">
                    {val.time}
                  </time>
                  <div className="mb-2 font-normal max-w-60 md:max-w-fit text-md pointer-events-none">
                    {val.company}
                  </div>
                  <div className="mb-2 font-normal text-md pointer-events-none">
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
