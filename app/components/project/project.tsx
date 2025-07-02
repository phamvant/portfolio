import { ReactNode } from "react";
import Markdown from "./markdown";
import { DataProps } from "@/app/page";


export default function Project({ children, data }: { children: ReactNode, data: DataProps }) {
  return (
    <div>
      <div className={`${data.settings.isLeft ? "flex flex-row-reverse lg:gap-32" : "flex lg:gap-10"} project-1 py-32 md:py-52 w-full flex-wrap gap-40 *:min-w-[300px] *:flex-1 md:px-[5%] xl:px-[10%] bg-white"`}>
        <div className="flex flex-col gap-10 px-4 md:px-0">
          <p className="text-3xl text-blue-400">{data.year}</p>
          <p className="text-4xl">
            {data.nameEn}
            <br />
            <br />
            {data.nameJa}
          </p>
          <p
            className="text-xl w-full md:w-3/4 border-2 border-slate-300 p-4 
          rounded-2xl shadow-xl hover:shadow-none transition-shadow duration-300"
          >
            {data.short_des}
          </p>
          <Markdown>{children}</Markdown>
        </div>
        {data.settings.isMobile ?
          <div className="relative group *:lg:scale-[60%]  *:absolute *:left-10 *:rounded-2xl *:shadow-2xl *:transition-all *:duration-300 pb-64">
            <img
              src={data.images[0]}
              className="w-3/4 lg:w-full lg:group-hover:-translate-y-60 lg:group-hover:-translate-x-80"
            />
            <img
              src={data.images[1]}
              className="w-3/4 lg:w-full object-cover translate-x-5 lg:-translate-x-10 -translate-y-10 lg:group-hover:-translate-y-60 lg:group-hover:translate-x-40"
            />
            <img
              src={data.images[2]}
              className="w-3/4 lg:w-full object-cover translate-x-10 lg:-translate-x-20 -translate-y-20 lg:group-hover:-translate-y-64"
            />
          </div> :
          <div className="relative group  *:absolute *:left-10 *:rounded-2xl *:shadow-2xl *:transition-all *:duration-300 pb-64">
            <img
              src={data.images[0]}
              className="w-3/4 lg:w-full lg:group-hover:scale-110 translate-x-10 lg:group-hover:-translate-x-[10%]"
            />
            <img
              src={data.images[1]}
              className="w-4/5 lg:w-full object-cover lg:group-hover:scale-50  lg:group-hover:translate-x-[75%] lg:group-hover:translate-y-4"
            />
            {data.images[2] ? <img
              src={data.images[2]}
              className="w-4/5 lg:w-full object-cover lg:group-hover:scale-50  lg:group-hover:translate-x-[75%] lg:group-hover:translate-y-4"
            /> : <></>}
          </div>
        }
      </div>
      <div className="flex flex-col justify-center items-center bg-blue-100 relative">
        <div className="flex flex-col justify-center items-center md:px-[5%] xl:px-[20%] pt-16 pb-16 w-3/4">
          <img
            src={data.gif}
            className="object-cover rounded-xl shadow-2xl hover:shadow-none transition-shadow duration-300"
          />
        </div>
      </div>
      <div className="flex flex-wrap h-1/4 bg-white px-[5%] xl:px-[20%] py-20 justify-center text-lg gap-10">
        <p className="w-full lg:w-3/4">
          {data.long_des}
        </p>

        <div className="flex items-center">
          <a href={data.link} target="_blank">
            <button className="bg-blue-400 w-fit p-2 px-4 rounded-3xl hover:underline">
              ページを開く
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
