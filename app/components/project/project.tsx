import { ProjectCard } from "./project-card";

const jsPrjs = [
  {
    title: "",
    imgUrl: "/project/computehub.png",
    url: "",
    describe:
      "Node.js project for sharing computing power using a web browser with Pando Computing core module.",
  },
  {
    title: "",
    imgUrl: "/project/lychie.png",
    url: "",
    describe:
      "E-cormerse project for managing my clothes store using NestJS, NextJS and AWS",
  },
  {
    title: "",
    imgUrl: "/graduate.jpeg",
    url: "",
    describe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
  },
  {
    title: "",
    imgUrl: "/sun.jpg",
    url: "",
    describe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
  },
];

export default function Project() {
  return (
    <div className="w-[100%] h-[100%] md:px-[5%] xl:px-[10%] project">
      <div className="h-full flex flex-col justify-center">
        <div className="grid grid-cols-6 gap-20 h-4/6 mt-28">
          <div className="col-span-2">
            <div className="flex flex-col gap-8">
              <div className="text-6xl">Languages</div>
              <div className="text-xl">All the language i've used</div>
              <div>
                <ul className="space-y-4">
                  <li className="hover:bg-transparent bg-yellow-500/40 p-2 rounded border-[1px] size-fit transition duration-200">
                    Javascript
                  </li>
                  <li className="hover:bg-transparent bg-purple-500/40 p-2 rounded border-[1px] size-fit transition duration-200">
                    C / C++
                  </li>
                  <li className="hover:bg-transparent bg-blue-400/40 p-2 rounded border-[1px] size-fit transition duration-200">
                    Python
                  </li>
                  <li className="hover:bg-transparent bg-blue-600/40 p-2 rounded border-[1px] size-fit transition duration-200">
                    Lua
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-lg col-span-4 flex flex-col gap-10">
            <div className="text-3xl text-right">Javascript</div>
            <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-10">
              {jsPrjs.map((project, idx) => {
                return (
                  <div
                    className="w-full h-full border-[1px] rounded-xl"
                    key={idx}
                  >
                    <ProjectCard project={project} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
