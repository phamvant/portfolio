import { ReactNode } from "react";
import Markdown from "./markdown";

export default function Project2({ children }: { children: ReactNode }) {
  return (
    <div className="border-t-2">
      <div className="project-1 py-10 md:pt-44 w-full flex flex-wrap-reverse gap-52 lg:gap-10 *:min-w-[300px] *:flex-1 md:px-[5%] xl:px-[20%] bg-blue-100/60">
        <div className="relative group *:lg:scale-[60%]  *:absolute *:left-10 *:rounded-2xl *:shadow-2xl *:transition-all *:duration-300 pb-64">
          <p className="-translate-y-40 translate-x-32 group-hover:scale-0 transition-all animate-pulse duration-75 font-bold border-2 border-black p-2 hidden lg:block">
            Hover
          </p>
          <img
            src="/project/lychie/3.jpg"
            className="w-3/4 lg:w-full lg:group-hover:-translate-y-60 lg:group-hover:-translate-x-80"
          />
          <img
            src="/project/lychie/2.jpg"
            className="w-3/4 lg:w-full object-cover translate-x-5 lg:-translate-x-10 -translate-y-10 lg:group-hover:-translate-y-60 lg:group-hover:translate-x-40"
          />
          <img
            src="/project/lychie/1.jpg"
            className="w-3/4 lg:w-full object-cover translate-x-10 lg:-translate-x-20 -translate-y-20 lg:group-hover:-translate-y-64"
          />
        </div>
        <div className="flex flex-col gap-10 px-4 md:px-0 md:min-h-[60vh]">
          <div className="flex flex-col gap-10 items-end justify-center w-full">
            <p className="text-3xl text-blue-400 text-right">2024</p>
            <p className="text-4xl text-right">Store management</p>
            <p
              className="text-xl w-full md:w-3/4 border-2 border-slate-300 p-4 
              rounded-2xl shadow-xl hover:shadow-none transition-shadow duration-300"
            >
              私の店舗を管理するために、包括的なEコマース店舗管理システムを開発しました。
            </p>
            <Markdown>{children}</Markdown>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white relative">
        <div className="flex flex-col justify-center items-center md:px-[5%] xl:px-[20%] py-32 w-3/4">
          <img
            src="/ecom.gif"
            className="object-cover rounded-xl shadow-2xl hover:shadow-none transition-shadow duration-300"
          />
        </div>
      </div>
      <div className="flex flex-wrap h-1/4 bg-blue-100/60 px-[5%] xl:px-[20%] py-20 justify-center text-lg gap-10">
        <p className="w-full lg:w-3/4">
          製品および在庫管理、注文処理、顧客関係管理、支払い処理を含む包括的なEコマースストア管理システムを開発しました。フロントエンドにはNext.js、バックエンドにはNest.js、インフラにはAWSを使用しています。ログインしてご自身で体験することができます。
        </p>
        <div className="flex items-center">
          <a href="https://lychie.vercel.app" target="_blank">
            <button className="bg-blue-400 w-fit p-2 px-4 rounded-3xl hover:underline">
              ページを開く
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
