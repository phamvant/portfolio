import Highlight from "./components/highlight";
import Project from "./components/project/project";
import Project2 from "./components/project/project-2";
import Project3 from "./components/project/project-3";
import ComputeHub from "@/public/content/ComputeHub.mdx";
import Dreamhacker from "@/public/content/Dreamhacker.mdx";
import Lychie from "@/public/content/Lychie.mdx";

export default async function Home() {
  return (
    <div>
      <Highlight />
      <Project>
        <ComputeHub />
      </Project>
      <Project2>
        <Lychie />
      </Project2>
      <Project3>
        <Dreamhacker />
      </Project3>
    </div>
  );
}
