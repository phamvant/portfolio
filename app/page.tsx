import Highlight from "./components/highlight";
import Project from "./components/project/project";
import Project2 from "./components/project/project-2";
import Project3 from "./components/project/project-3";
import ComputeHub from "@/public/content/ComputeHub.mdx";

export default async function Home() {
  return (
    <div>
      <Highlight />
      <Project>
        <ComputeHub />
      </Project>
      <Project2 />
      <Project3 />
    </div>
  );
}
