"use client";

import { MdAlternateEmail } from "react-icons/md";
import {
  RiFacebookCircleFill,
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiXboxFill,
} from "react-icons/ri";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

export default function Website() {
  const [data, setData] = useState<Record<string, any>[]>([
    { Commits: 500 },
    { Days: 1000 },
    { Favourite: "Node.js" },
  ]);

  useEffect(() => {
    async function getContributions(token: string, username: string) {
      const headers = {
        Authorization: `bearer ${token}`,
      };
      const body = {
        query: `query {
                user(login: "${username}") {
                  name
                  contributionsCollection {
                    contributionYears
                    contributionCalendar {
                      colors
                      totalContributions
                      weeks {
                        contributionDays {
                          color
                          contributionCount
                          date
                          weekday
                        }
                        firstDay
                      }
                    }
                  }
                }
              }`,
      };
      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        body: JSON.stringify(body),
        headers: headers,
      });
      if (!response.ok) {
        return;
      }
      const resJson = await response.json();
      if (resJson) {
        setData((prev) => [
          {
            Commits:
              resJson?.data.user.contributionsCollection.contributionCalendar
                .totalContributions,
          },
          {
            Days: resJson?.data.user.contributionsCollection.contributionCalendar.weeks.reduce(
              (week: any, currentWeek: any) => {
                let count = currentWeek.contributionDays.reduce(
                  (day: any, currentDay: any) => {
                    if (currentDay.contributionCount != 0) {
                      return day + 1;
                    }
                    return day;
                  },
                  0,
                );
                return week + count;
              },
              0,
            ),
          },
          { Favourite: "Node.JS" },
        ]);
      }
    }

    getContributions(process.env.NEXT_PUBLIC_SECRET!, "phamvant");
  }, []);

  return (
    <>
      <div className="flex lg:flex-1 flex-row justify-around gap-8 md:gap-10 h-full transition-all items-end pb-10">
        <div className="size-16 flex flex-col justify-end animate-fadeup cursor-pointer">
          <a href="https://github.com/phamvant" target="_blank">
            <RiGithubFill className="size-12 hover:size-14 rounded-full transition-all duration-200" />
          </a>
        </div>
        <div className="size-16 flex flex-col justify-end animate-fadeup cursor-pointer">
          <a
            href="https://www.linkedin.com/in/pham-van-thuan-527778256/"
            target="_blank"
          >
            <RiLinkedinFill className="size-12 hover:size-14 rounded-full transition-all duration-200" />
          </a>
        </div>
        <div className="size-16 flex flex-col justify-end animate-fadeup cursor-pointer z-20">
          <a href="mailto:pham.t.286.01@gmail.com">
            <MdAlternateEmail className="size-12 hover:size-14 rounded-full transition-all duration-200" />
          </a>
        </div>
        <div className="size-16 flex flex-col justify-end animate-fadeup cursor-pointer z-20">
          <RiTwitterFill className="size-12 hover:size-14 rounded-full transition-all duration-200" />
        </div>
      </div>
      <div className="lg:flex-1 lg:flex hidden">
        {data.map((val, index) => {
          return (
            <div className="flex-1 flex flex-col gap-4 z-20" key={index}>
              <div className="text-lg animate-fadeup">
                {Object.keys(val)[0]}
              </div>
              <div
                className={`text-3xl font-semibold hover:text-4xl transition-all duration-300 animate-fadeup h-8 items-end ${index < 3 ? "contribute-number" : ""}`}
              >
                {Object.values(val)[0]}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
