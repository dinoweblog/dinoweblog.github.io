import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";
import { FaAws } from "react-icons/fa";
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

const CSS = {
  logo: <TbBrandCss3 />,
  name: "CSS",
};
const HTML = {
  logo: <TbBrandHtml5 />,
  name: "HTML",
};
const Javascript = {
  logo: <TbBrandJavascript />,
  name: "JavaScript",
};
const Nodejs = {
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
const AWS = {
  logo: <FaAws />,
  name: "AWS Services",
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

export const projectData = [
  {
    title: "AapkaFashion E-commerce Website",
    image: "./assets/projects/aapkafashions.jpg",
    description:
      "That is the e-commerce website, I worked as a freelancer and build the project individually in 30 days. I have worked on building UI features for authentication, home, products, product details, cart, wishlist, order, user account, address, and admin dashboard by using React, Redux, MUI",
    techStack: [
      React,
      Redux,
      Javascript,
      Nodejs,
      Express,
      Mongodb,
      AWS,
      Mui,
      CSS,
    ],
    githubUrl: "https://github.com/dinoweblog",
    url: "https://aapka-fashions.vercel.app/",
  },

  {
    title: "Pet Boarding Website",
    image: "./assets/projects/petcare.png",
    description:
      "This is a solo project. It is a react and redux pet boarding booking website. A full-stack website developed by 2 days. I added features like login and signup for both users [admin, costumer], filter & sort according to price, & End to End Flow, etc.",
    techStack: [React, Redux, Javascript, Nodejs, Express, Mongodb, CSS],
    githubUrl: "https://github.com/dinoweblog/Pet-Boarding-Site-FB",
    url: "https://petcare.vercel.app/",
  },

  {
    title: "Good Game Nation Project",
    image: "./assets/projects/ggn.png",
    description:
      "I worked as a MERN stack developer at GGN project. I created many things here, auth page, schedule page(calendar, shows upcoming events), tournament page, team profile page, post feed page. In Post Feed Page, user can post (like - facebook post), also user can be post likes and comments.",
    techStack: [
      React,
      Redux,
      Typescript,
      Nodejs,
      Express,
      Mongodb,
      Jest,
      Apollographql,
      Mui,
      CSS,
    ],
    githubUrl: "https://github.com/dinoweblog",
    url: "https://main.d36ng4ja7wbcyq.amplifyapp.com/",
  },

  {
    title: "e-Mart E-commerce Website",
    image: "./assets/projects/e-mart.png",
    description:
      "This is a solo project, It is an e-commerce website that sells clothes products across websites . A full-stack solo project developed by 10 days. I added features like filter and sort products, cart manipulation, search functionality, order tracking, wishlist product & End to End Flow etc.",
    techStack: [React, Redux, Javascript, Nodejs, Express, Mongodb, CSS],
    githubUrl: "https://github.com/dinoweblog/e-Mart-ecommerce-website-FB",
    url: "https://e-mart-shop.vercel.app/",
  },
  {
    title: "Unacademy Clone Website",
    image: "./assets/projects/unacademy.png",
    description:
      "Unacademy is a learning platform that provides content for major competitive examinations. A collaborative project built by a team of 5 executed in 6 days.",
    techStack: [React, Redux, Javascript, CSS],
    githubUrl: "https://github.com/danish4git/UNACADEMY-CLONE",
    url: "https://unacademy-clone-kappa.vercel.app/",
  },
  {
    title: "Nykaa Fashion Clone Website",
    image: "./assets/projects/nykaafashion.png",
    description:
      "It is an e-commerce website that sells beauty, wellness, and fashion products across websites . A full-stack clone of Nykaa Fashion developed by 6 members in time span of 6 days. We added features like Off Canvas Popup cart, filter products, sort products, cart manipulation& End to End Flow etc.",
    techStack: [Javascript, HTML, CSS],
    githubUrl: "https://github.com/nitesh172/FW13-CW-T-43-NykaaFashion_Clone",
    url: "https://nykaafashion.netlify.app/",
  },
  {
    title: "Be Bodywise Clone Website",
    image: "./assets/projects/bebodywiseclone.png",
    description:
      "An e-commerce website for health related products. A collaborative project built by a team of 5 executed in 6 days. We added features like Off Canvas Popup cart, cart manipulation & End to End Flow etc.",
    techStack: [Nodejs, Javascript, HTML, CSS],
    githubUrl: "https://github.com/dinoweblog/FW13-T48-BebodywiseClone-Project",
    url: "https://bebodywiseclone.netlify.app/",
  },

  {
    title: "Imgur Clone Website",
    image: "./assets/projects/imgur.png",
    description:
      "This is a plain JavaScript imgur clone project. This project is developed in 3 days. I added different type of filter option, search functionality & two different view layout.",
    techStack: [Javascript, HTML, CSS],
    githubUrl: "https://github.com/dinoweblog/imgur-clone-website",
    url: "https://imgur-clone-website.vercel.app/",
  },
  {
    title: "Weather App",
    image: "./assets/projects/weather.jpg",
    description:
      "This is a plain JavaScript project. Shows the weather according to the city name you enter. This project is developed in 1 day.",
    techStack: [Javascript, HTML, CSS],
    githubUrl: "https://github.com/dinoweblog/Weather-App",
    url: "https://weather-checking-app.vercel.app/",
  },
];
