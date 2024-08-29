import { useEffect, useState } from "react";
import { ProjectCard, ProjectInfo } from "./project-card";
import { cPrjs, jsPrjs, langList } from "./data";

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
    <div className="project flex flex-col justify-center h-screen bg-blue-100/60 md:px-[5%] xl:px-[20%]">
      <div className="w-full flex flex-wrap gap-10 *:min-w-[400px] *:flex-1">
        <div className="flex flex-col gap-10">
          <p className="text-4xl">ComputeHub</p>
          <p
            className="text-xl w-3/4 border-2 border-slate-300 p-4 
          rounded-2xl shadow-xl hover:shadow-none transition-shadow duration-300"
          >
            Node.js project for sharing computing power using a web browser with
            Pando Computing core module.
          </p>
        </div>
        <div className="relative group *:absolute *:rounded-2xl *:shadow-2xl *:transition-all *:duration-300">
          <img
            src="/project/js/computehub.png"
            className=" group-hover:scale-110 group-hover:translate-y-40"
          />
          <img
            src="/project/js/computehub.png"
            className=" group-hover:scale-110 translate-x-10 group-hover:translate-x-0 -translate-y-10 group-hover:-translate-y-64"
          />
        </div>
      </div>
    </div>
  );
}

// <div className="grid grid-cols-6 gap-20 md:max-h-[70%]">
//   <div className="col-span-2">
//     <div className="flex-col gap-8 hidden md:flex">
//       <div className="text-6xl">Projects</div>
//       <div className="text-xl">
//         All the language i've used in my personal projects
//       </div>
//       <div>
//         <ul className="space-y-4">
//           {langList.map((lang, idx) => {
//             return (
//               <LangList lang={lang} setState={setCurLang} key={idx} />
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   </div>
//   <div className="rounded-lg col-span-6 md:col-span-4 flex flex-col gap-10">
//     <div className="text-3xl text-right">Javascript</div>
//     <div className="w-full h-full grid grid-cols-2 gap-10">
//       {curLang.map((project, idx) => {
//         return <ProjectCard project={project} key={idx} />;
//       })}
//     </div>
//   </div>
// </div>
