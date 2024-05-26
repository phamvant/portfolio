import { LangProps } from "./project";
import { ProjectInfo } from "./project-card";

export const jsPrjs: ProjectInfo[] = [
  {
    title: "",
    imgUrl: "/project/js/computehub_back.png",
    url: "",
    describe:
      "Node.js project for sharing computing power using a web browser with Pando Computing core module.",
  },
  {
    title: "",
    imgUrl: "/project/js/computehub.png",
    url: "",
    describe: "Next application for front end of ComputeHub project",
  },
  {
    title: "",
    imgUrl: "/project/js/lychie.png",
    url: "",
    describe:
      "E-commerce project for managing my clothes store using NestJS, NextJS and AWS",
  },
  {
    title: "",
    imgUrl: "/project/js/tip.png",
    url: "",
    describe: "E-cormerce API using pure NodeJS for learning purpose",
  },
];

export const cPrjs: ProjectInfo[] = [
  {
    title: "",
    imgUrl: "/project/c/computehub.png",
    url: "",
    describe:
      "Node.js project for sharing computing power using a web browser with Pando Computing core module.",
  },
  {
    title: "",
    imgUrl: "/project/c/computehub.png",
    url: "",
    describe: "Next application for front end of ComputeHub project",
  },
  {
    title: "",
    imgUrl: "/project/c/lychie.png",
    url: "",
    describe:
      "E-commerce project for managing my clothes store using NestJS, NextJS and AWS",
  },
  {
    title: "",
    imgUrl: "/project/c/tip.png",
    url: "",
    describe: "E-cormerce API using pure NodeJS for learning purpose",
  },
];

export const langList: LangProps[] = [
  {
    name: "Javascript",
    color: "bg-yellow-500/40",
    projects: jsPrjs,
  },
  {
    name: "C / C++",
    color: "bg-purple-500/40",
    projects: cPrjs,
  },
  {
    name: "Python",
    color: "bg-blue-400/40",
    projects: jsPrjs,
  },
  {
    name: "Lua",
    color: "bg-blue-600/40",
    projects: jsPrjs,
  },
  {
    name: "PHP (Laravel)",
    color: "bg-orange-600/40",
    projects: jsPrjs,
  },
];
