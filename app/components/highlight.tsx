"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import {   Rampart_One } from "next/font/google";

export const RampartOneFont = Rampart_One({
  weight: "400",
  subsets: ["latin"],
})

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
      text: "私はフリーランス開発者",
      duration: 2,
    });
    titleTimeline.to(".hl-title", {
      text: "私はフールスタック開発者",
      duration: 2,
    });
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <div className="highlight flex flex-col justify-end md:justify-center md:px-[5%] xl:px-[20%] flex-1">
        <div className="flex flex-col flex-wrap justify-end md:justify-evenly md:items-center gap-10 pb-10 md:pb-0 h-full">
          <div className="flex flex-wrap w-full mt-10 gap-20 md:gap-0" id="top">
            <div className="md:flex-1 hover:shadow-sm shadow-2xl transition-all duration-300 border-[1px] border-gray-500 rounded-xl mx-4 md:mx-0">
              <div className="p-4 xl:p-10 row-span-2 pointer-events-none">
                <p className={`${RampartOneFont.className} max-w-[699px] mb-10 text-3xl font-extrabold leading-snug  hl-title md:leading-normal pointer-events-none animate-fadeup`}>
                  私はフールスタック開発者
                </p>

                <div className="flex flex-col gap-6">
                  <p className="text-lg font-extralight max-w-fit hl-content pointer-events-none animate-fadeup">
                    Nodeが大好き｜AWS｜スケーラブルなバックエンドを建築｜テクノロジーで日常の課題を解決
                    | 自動化マニア
                  </p>
                  <p className="text-lg font-extralight max-w-fit hl-content pointer-events-none animate-fadeup">
                    以下のブログでソフトウェアに関する知識を全て共有します。
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:flex-1 md:justify-center">
              <TechStack />
            </div>
          </div>
          <div className="hidden md:flex w-full mb-20 lg:mb-0 gap-20">
            <Website />
          </div>
        </div>
      </div>
    </div>
  );
}
