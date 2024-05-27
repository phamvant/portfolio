import { useState } from "react";
import { ProjectCard, ProjectInfo } from "./project-card";
import { cPrjs, jsPrjs, langList } from "./data";

export interface LangProps {
  color: string;
  name: string;
  projects: any;
}

function LangList({ lang, setState }: { lang: LangProps; setState: any }) {
  console.log(lang.color);
  return (
    <li
      className={`hover:bg-transparent ${lang.color} p-2 rounded border-[1px] size-fit transition duration-200`}
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
    <div className="w-[100%] h-[100%] md:px-[5%] xl:px-[10%] project flex flex-col justify-center">
      {/* <div className="h-full flex flex-col justify-center max-h-[60%]"> */}
      <div className="grid grid-cols-6 gap-20 max-h-[60%]">
        <div className="col-span-2">
          <div className="flex-col gap-8 hidden md:flex">
            <div className="text-6xl">Projects</div>
            <div className="text-xl">All the language i've used</div>
            <div>
              <ul className="space-y-4">
                {langList.map((lang, idx) => {
                  return (
                    <LangList lang={lang} setState={setCurLang} key={idx} />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-lg col-span-6 md:col-span-4 flex flex-col gap-10 mx-4 md:mx-0">
          <div className="text-3xl text-right">Javascript</div>
          <div className="w-full h-full grid grid-cols-2 gap-10">
            {curLang.map((project, idx) => {
              return <ProjectCard project={project} key={idx} />;
            })}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
