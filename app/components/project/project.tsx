import { ReactNode } from "react";
import Markdown from "./markdown";

export default function Project({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="project-1 py-32 md:py-52 w-full flex flex-wrap gap-40 lg:gap-10 *:min-w-[300px] *:flex-1 md:px-[5%] xl:px-[20%] bg-white">
        <div className="flex flex-col gap-10 px-4 md:px-0">
          <p className="text-3xl text-blue-400">2023</p>
          <p className="text-4xl">
            ComputeHub
            <br />
            <br />
            分散コンピューティング
          </p>
          <p
            className="text-xl w-full md:w-3/4 border-2 border-slate-300 p-4 
          rounded-2xl shadow-xl hover:shadow-none transition-shadow duration-300"
          >
            ブラウザーでコンピューティングパワーを共有するプロジェクト。「PandoComputingコアモジュールを使用」
          </p>
          <Markdown>{children}</Markdown>
        </div>
        <div className="relative group  *:absolute *:left-10 *:rounded-2xl *:shadow-2xl *:transition-all *:duration-300 pb-64">
          <img
            src="/project/dreamhacker/monitor_1.png"
            className="w-3/4 lg:w-full lg:group-hover:scale-110 translate-x-10 lg:group-hover:-translate-x-[10%]"
          />
          <img
            src="/project/js/computehub.png"
            className="w-4/5 lg:w-full object-cover lg:group-hover:scale-50  lg:group-hover:translate-x-[75%] lg:group-hover:translate-y-4"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-blue-100/60 relative">
        <div className="flex flex-col justify-center items-center md:px-[5%] xl:px-[20%] pt-16 pb-16 w-3/4">
          <img
            src="/compute.gif"
            className="object-cover rounded-xl shadow-2xl hover:shadow-none transition-shadow duration-300"
          />
        </div>
      </div>
      <div className="flex flex-wrap h-1/4 bg-white px-[5%] xl:px-[20%] py-20 justify-center text-lg gap-10">
        <p className="w-full lg:w-3/4">
          提案された解決策は、個人がコンピュータ、ノートパソコン、モバイルフォンなどの個人デバイスを通じて計算能力を提供できるボランティアコンピューティングシステムを構築することです。このシステムは、ボランティアが登録し、計算能力を提供し、研究プロジェクトに参加できるように、シンプルで使いやすいユーザーインターフェースを提供します。同時に、高度なアルゴリズムを使用してタスクを管理し、リソースを分配し、計算パフォーマンスを最適化します。
        </p>

        <div className="flex items-center">
          <a href="https://compute-hub-fe-vert.vercel.app/" target="_blank">
            <button className="bg-blue-400 w-fit p-2 px-4 rounded-3xl hover:underline">
              ページを開く
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
