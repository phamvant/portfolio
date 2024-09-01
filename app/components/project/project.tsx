import { useState } from "react";
import { ProjectInfo } from "./project-card";
import { jsPrjs } from "./data";
import { LuArrowUpRight } from "react-icons/lu";

export interface LangProps {
  color: string;
  name: string;
  projects: any;
}

function LangList({ lang, setState }: { lang: LangProps; setState: any }) {
  return (
    <li
      className={`hover:bg-transparent ${lang.color} p-2 rounded border-[1px] size-fit transition duration-200 cursor-pointer`}
      onClick={() => {
        setState(lang.projects);
      }}
    >
      {lang.name}
    </li>
  );
}

export default function Project() {
  const [curLang, setCurLang] = useState<ProjectInfo[]>(jsPrjs);

  return (
    <div>
      <div className="project-1 py-32 md:py-52 w-full flex flex-wrap gap-40 lg:gap-10 *:min-w-[300px] *:flex-1 md:px-[5%] xl:px-[20%] bg-white">
        <div className="flex flex-col gap-10 px-4 md:px-0">
          <p className="text-3xl text-blue-400">2023</p>
          <p className="text-4xl">ComputeHub</p>
          <p
            className="text-xl w-full md:w-3/4 border-2 border-slate-300 p-4 
          rounded-2xl shadow-xl hover:shadow-none transition-shadow duration-300"
          >
            Node.js project for sharing computing power using a web browser with
            Pando Computing core module.
          </p>
          <div className="flex gap-2 items-center cursor-pointer hover:underline animate-bounce">
            How I built this
            <LuArrowUpRight />
          </div>
        </div>
        <div className="relative group *:absolute *:left-10 *:rounded-2xl *:shadow-2xl *:transition-all *:duration-300 pb-64">
          <img
            src="/project/js/computehub.png"
            className="w-3/4 lg:w-full lg:group-hover:scale-110 translate-x-10 lg:group-hover:translate-x-52"
          />
          <img
            src="/project/js/computehub.png"
            className="w-3/4 lg:w-full object-cover lg:group-hover:scale-50 -translate-y-10 lg:group-hover:-translate-x-60"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-blue-100/60 relative">
        <div className="flex flex-col justify-center items-center md:px-[5%] xl:px-[20%] pt-16 pb-16 w-3/4">
          <img
            src="/compute.gif"
            className="object-cover rounded-xl shadow-2xl hover:shadow-none transition-shadow duration-300"
          />
        </div>
      </div>
      <div className="flex flex-wrap h-1/4 bg-white px-[5%] xl:px-[20%] py-20 justify-center text-lg gap-10">
        <p className="w-full lg:w-3/4">
          The proposed solution is to build a volunteer computing system that
          allows individuals to contribute their computing power through
          personal devices such as computers, laptops, and mobile phones. The
          system will provide a user-friendly interface that is simple and easy
          to use, enabling volunteers to register, provide computing power, and
          participate in research projects. At the same time, it will use
          advanced algorithms to manage tasks, distribute resources, and
          optimize computing performance.
        </p>
        <div className="flex items-center">
          <a href="https://compute-hub-fe-vert.vercel.app/" target="_blank">
            <button className="bg-blue-400 w-fit p-2 px-4 rounded-3xl hover:underline">
              View Page
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
