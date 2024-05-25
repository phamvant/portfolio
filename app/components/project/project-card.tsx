interface ProjectInfoProp {
  title: string;
  imgUrl: string;
  url: string;
  describe: string;
}

export function ProjectCard({ project }: { project: ProjectInfoProp }) {
  return (
    <div className="group relative dark:bg-slate-900/50 rounded-xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300 h-full">
      <img
        src={project.imgUrl}
        alt="Post Image"
        className="w-full h-56 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 dark:bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300"></div>
      <div className="p-4 border-t-[1px] border-gray-300">
        <p className="">{project.describe}</p>
      </div>
    </div>
  );
}
