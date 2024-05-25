interface ProjectInfoProp {
  title: string;
  imgUrl: string;
  url: string;
  describe: string;
}

export function ProjectCard({ project }: { project: ProjectInfoProp }) {
  return (
    <div className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300">
      <img
        src={project.imgUrl}
        alt="Post Image"
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 dark:bg-opacity-20 group-hover:bg-opacity-0 flex items-center justify-center transition-all duration-300">
        <h3 className="text-white text-xl font-bold group-hover:hidden">
          {project.title}
        </h3>
      </div>
      <div className="p-4">
        <p className="text-gray-700">{project.describe}</p>
      </div>
    </div>
  );
}
