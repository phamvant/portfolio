import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const list = [
  { time: "Jun, 2019", company: "Hanoi University Of Science And Technology" },
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
  });

  return (
    <div className="flex flex-col justify-center min-h-screen timeline-container wrapper">
      <img
        src="/bg2.svg"
        alt="Vercel Logo"
        className="fixed left-[16%] md:left-[10.5%] z-0 w-3/4 opacity-10 "
      />
      <div className="flex justify-center">
        <div className="w-full max-w-6xl px-4 py-24 mx-auto">
          <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
            <div className="w-full max-w-3xl mx-auto">
              <div className="-my-6">
                <div className="relative py-6 ml-8 sm:pl-32 group">
                  {list.map((val, index) => {
                    return (
                      <div className="mb-8 event" key={index}>
                        <div className="flex h-8 gap-4">
                          <div
                            className="flex flex-col sm:flex-row items-start group-last:before:hidden before:absolute before:left-2 mb-12
                  sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 
                after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2  after:border-4 after:box-content 
                after:border-slate-50 after:rounded-full  after:-translate-x-1/2 after:translate-y-1.5 "
                          ></div>
                          <time
                            className="pl-4 w-fit sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs 
                  font-semibold uppercase h-6 sm:mb-0 text-emerald-600  rounded-full"
                          >
                            {val.time}
                          </time>
                        </div>
                        <div className="pl-6 mb-2 font-normal text-gray-100 max-w-60 md:max-w-fit text-md">
                          {val.company}
                        </div>
                        <div className="pl-6 mb-2 font-normal text-gray-100 text-md">
                          {val.stack}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
