import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import {
  SiJest,
  SiMui,
  SiReact,
  SiApollographql,
  SiMongodb,
  SiRedux,
  SiExpress,
} from "react-icons/si";

const css = {
  logo: <TbBrandCss3 />,
  name: "CSS",
};
const html = {
  logo: <TbBrandHtml5 />,
  name: "HTML",
};
const JS = {
  logo: <TbBrandJavascript />,
  name: "JavaScript",
};
const nodejs = {
  logo: <IoLogoNodejs />,
  name: "Nodejs",
};

const Typescript = {
  logo: <TbBrandTypescript />,
  name: "Typescript",
};
const Jest = {
  logo: <SiJest />,
  name: "Jest",
};
const Mui = {
  logo: <SiMui />,
  name: "Material-UI",
};
const React = {
  logo: <SiReact />,
  name: "React",
};
const Apollographql = {
  logo: <SiApollographql />,
  name: "Apollo-graphql",
};
const Mongodb = {
  logo: <SiMongodb />,
  name: "Mongodb",
};
const Redux = {
  logo: <SiRedux />,
  name: "Redux",
};
const Express = {
  logo: <SiExpress />,
  name: "Express",
};

export const techStack = [nodejs, JS, css, html];
