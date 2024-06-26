import { FaGithub } from "react-icons/fa";

export interface ProjectInfo {
  title: string;
  imgUrl: string;
  url: string;
  describe: string;
}

export function ProjectCard({ project }: { project: ProjectInfo }) {
  return (
    <div className="flex justify-center">
      <div
        className="w-[95%] h-[95%] hover:w-full hover:h-full border-[1px] max-h-80 group relative flex flex-col dark:bg-slate-900/50
        rounded-xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300"
      >
        <img
          src={project.imgUrl}
          alt="Post Image"
          className="object-cover w-auto min-h-40"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 dark:bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300"></div>
        <div className="p-4 border-t-[1px] border-gray-300 flex h-full flex-1 justify-between">
          <p className="h-fit">{project.describe}</p>
          <div className="flex items-end">
            <FaGithub size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
