import { FaGithub } from "react-icons/fa";

export interface ProjectInfo {
  title: string;
  imgUrl: string;
  url: string;
  describe: string;
}

export function ProjectCard({ project }: { project: ProjectInfo }) {
  return (
    <div className="w-full h-full border-[1px] rounded-xl">
      <div className="group relative flex flex-col dark:bg-slate-900/50 rounded-xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300 h-full">
        <img
          src={project.imgUrl}
          alt="Post Image"
          className="w-full max-h-52 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 dark:bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300"></div>
        <div className="p-4 border-t-[1px] border-gray-300 flex h-full">
          <p className="h-fit">{project.describe}</p>
          <div className="flex items-end">
            <FaGithub size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
