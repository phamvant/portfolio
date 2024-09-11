import { LuArrowUpRight } from "react-icons/lu";

export default function Project3() {
  return (
    <div>
      <div className="project-3 py-20 w-full flex flex-wrap gap-40 lg:gap-10 *:min-w-[300px] *:flex-1 md:px-[5%] xl:px-[20%] bg-white">
        <div className="flex flex-col gap-10 px-4 md:px-0">
          <p className="text-3xl text-blue-400">2024</p>
          <p className="text-4xl">Dreamhacker</p>
          <p
            className="text-xl w-full md:w-3/4 border-2 border-slate-300 p-4 
          rounded-2xl shadow-xl hover:shadow-none transition-shadow duration-300"
          >
            A platform for young professionals and students to share experiences
          </p>
          <div className="flex gap-2 items-center cursor-pointer hover:underline animate-bounce">
            How I built this
            <LuArrowUpRight />
          </div>
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
          Dedicated to developing a leading international online and offline
          community professionals. People can share experiences on GMAT and
          TOEFL preparation, business-school application, school lives, career
          development, and to explore business opportunitie. Helping others
          achieve both personal and professional goals, and to cultivating
          long-term trusted relationship among members.
        </p>
        <div className="flex items-center">
          <a href="https://app.dreamhacker.online/" target="_blank">
            <button className="bg-blue-400 w-fit p-2 px-4 rounded-3xl hover:underline">
              View Page
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}