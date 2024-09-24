import { ReactNode } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import Markdown from "./markdown";

export default function Project3({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="project-3 py-32 w-full flex flex-wrap gap-40 lg:gap-10 *:min-w-[300px] *:flex-1 md:px-[5%] xl:px-[20%] bg-white md:min-h-[60vh]">
        <div className="flex flex-col gap-10 px-4 md:px-0">
          <p className="text-3xl text-blue-400">2024</p>
          <p className="text-4xl">Dreamhacker</p>
          <p
            className="text-xl w-full md:w-3/4 border-2 border-slate-300 p-4 
          rounded-2xl shadow-xl hover:shadow-none transition-shadow duration-300"
          >
            若い者向け留学体験共有Forum。
            <br />
            <br />
            応募体験、勉強方法、大学評判等。
          </p>
          <Markdown>{children}</Markdown>
        </div>

        <div className="relative group *:lg:scale-[60%]  *:absolute *:left-10 *:rounded-2xl *:shadow-2xl *:transition-all *:duration-300 pb-64">
          {/* <p className="-translate-y-40 translate-x-80 group-hover:scale-0 transition-all animate-pulse duration-75 font-bold border-2 border-black p-2 hidden lg:block">
            Hover
          </p> */}
          <img
            src="/project/dreamhacker/3.jpg"
            className="w-3/4 lg:w-full lg:group-hover:-translate-y-[25%] lg:group-hover:-translate-x-[40%]"
          />
          <img
            src="/project/dreamhacker/2.jpg"
            className="w-3/4 lg:w-full object-cover translate-x-5 lg:translate-x-10 -translate-y-10 lg:group-hover:-translate-y-[25%] lg:group-hover:translate-x-[60%]"
          />
          <img
            src="/project/dreamhacker/1.jpg"
            className="w-3/4 lg:w-full object-cover translate-x-10 lg:translate-x-20 -translate-y-20 lg:group-hover:-translate-y-[30%]"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-blue-100 relative">
        <div className="flex flex-col justify-center items-center md:px-[5%] xl:px-[20%] py-28 w-3/4">
          <img
            src="/blog.gif"
            className="object-cover rounded-xl shadow-2xl hover:shadow-none transition-shadow duration-300"
          />
        </div>
      </div>
      <div className="flex flex-wrap h-1/4 bg-white px-[5%] xl:px-[20%] py-20 justify-center text-lg gap-10">
        <p className="w-full lg:w-3/4">
          国際的なオンラインおよびオフラインのコミュニティを発展させることに専念しています。メンバーはGMATやTOEFLの準備、ビジネススクールへの出願、学校生活、キャリア開発、ビジネスの機会を探るなどの経験を共有することができます。他者が個人的および専門的な目標を達成する手助けをし、メンバー同士の信頼できる長期的な関係を築くことを目指しています。
        </p>
        <div className="flex items-center">
          <a href="https://app.dreamhacker.online/" target="_blank">
            <button className="bg-blue-400 w-fit p-2 px-4 rounded-3xl hover:underline">
              ページを開く
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
