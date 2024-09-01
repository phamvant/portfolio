import { LuArrowUpRight } from "react-icons/lu";

export default function Project2() {
  return (
    <div className="border-t-2">
      <div className="project-1 py-24 md:pt-44 w-full flex flex-wrap-reverse gap-52 lg:gap-10 *:min-w-[300px] *:flex-1 md:px-[5%] xl:px-[20%] bg-blue-100/60">
        <div className="relative group *:lg:hover:scale-[60%] *:absolute *:left-10 *:rounded-2xl *:shadow-2xl *:transition-all *:duration-300 pb-64">
          <p className="-translate-y-40 translate-x-32 group-hover:scale-0 transition-all animate-pulse duration-75 font-bold border-2 border-black p-2 hidden lg:block">
            Hover
          </p>
          <img
            src="/project/lychie/3.jpg"
            className="w-3/4 lg:w-full lg:group-hover:-translate-y-60 lg:group-hover:-translate-x-80"
          />
          <img
            src="/project/lychie/2.jpg"
            className="w-3/4 lg:w-full object-cover translate-x-5 lg:-translate-x-10 -translate-y-10 lg:group-hover:-translate-y-64 lg:group-hover:translate-x-44"
          />
          <img
            src="/project/lychie/1.jpg"
            className="w-3/4 lg:w-full object-cover translate-x-10 lg:-translate-x-20 -translate-y-20 lg:group-hover:-translate-y-64"
          />
        </div>
        <div className="flex flex-col items-end gap-10 px-4 md:px-0">
          <p className="text-3xl text-blue-400">2024</p>
          <p className="text-4xl text-right">Lychie Store management</p>
          <p
            className="text-xl w-full md:w-3/4 border-2 border-slate-300 p-4 
            rounded-2xl shadow-xl hover:shadow-none transition-shadow duration-300"
          >
            Developed a comprehensive E-commerce Store Management to manage my
            store
          </p>
          <div className="flex gap-2 items-center cursor-pointer hover:underline animate-bounce">
            How I built this
            <LuArrowUpRight />
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
          Developed a comprehensive E-commerce Store Management System that
          includes product and inventory management, order processing, customer
          relationship management, and payment processing. Using NextJS for
          Front-end, Nest.JS for Backend and AWS for Infra. You can login and
          experience your self.
        </p>
        <div className="flex items-center">
          <a href="https://lychie.vercel.app" target="_blank">
            <button className="bg-blue-400 w-fit p-2 px-4 rounded-3xl hover:underline">
              View Page
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
