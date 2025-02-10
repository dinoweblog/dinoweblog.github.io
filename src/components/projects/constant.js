import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { FaAngular, FaAws } from "react-icons/fa";
import {
  SiFirebase,
  SiAwslambda,
  SiAmazonapigateway,
  SiNextdotjs,
  SiAmazonec2,
  SiAwsamplify,
} from "react-icons/si";
import {
  SiJest,
  SiMui,
  SiReact,
  SiApollographql,
  SiMongodb,
  SiRedux,
  SiExpress,
} from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

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
  name: "Node.js",
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
  name: "React.js",
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
  name: "Express.js",
};

const Angular = {
  logo: <FaAngular />,
  name: "Angular",
};

const Firebase = {
  logo: <SiFirebase />,
  name: "Firebase",
};

const Aws = {
  logo: <FaAws />,
  name: "AWS Services",
};

const AwsLambda = {
  logo: <SiAwslambda />,
  name: "AWS Lambda",
};
const AmazonApiGateway = {
  logo: <SiAmazonapigateway />,
  name: "AWS Api Gateway",
};

const Nextjs = {
  logo: <SiNextdotjs />,
  name: "Next.js",
};
const Flutter = {
  logo: <RiFlutterFill />,
  name: "Flutter",
};
const EC2 = {
  logo: <SiAmazonec2 />,
  name: "AWS EC2",
};
const Amplify = {
  logo: <SiAwsamplify />,
  name: "AWS Amplify ",
};

const OneSignal = {
  logo: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 56 56"
    >
      <path d="M27.948 0C12.498.03-.086 12.745 0 28.233a28.11 28.11 0 0 0 7.274 18.713 27.978 27.978 0 0 0 17.883 9.052.321.321 0 0 0 .355-.322V28.072h-2.176a.322.322 0 0 1-.322-.323v-4.356a.323.323 0 0 1 .322-.322h6.83a.321.321 0 0 1 .322.322v32.283a.323.323 0 0 0 .354.322 27.98 27.98 0 0 0 18.416-9.657 28.116 28.116 0 0 0 6.704-19.721 28.102 28.102 0 0 0-8.7-18.922A27.965 27.965 0 0 0 27.947 0Zm7.958 49.745a.32.32 0 0 1-.394-.156.323.323 0 0 1-.035-.149v-4.607a.485.485 0 0 1 .276-.438 18.056 18.056 0 0 0 8.505-8.487 18.12 18.12 0 0 0 1.308-11.959 18.084 18.084 0 0 0-6.467-10.134 18.005 18.005 0 0 0-11.378-3.822c-9.579.147-17.439 7.89-17.743 17.49a18.135 18.135 0 0 0 2.626 9.99 18.07 18.07 0 0 0 7.65 6.922.483.483 0 0 1 .277.438v4.607a.325.325 0 0 1-.278.32.321.321 0 0 1-.152-.015 23.062 23.062 0 0 1-11.015-8.543A23.152 23.152 0 0 1 4.99 27.859C5.1 15.327 15.315 5.093 27.821 5c12.776-.103 23.195 10.287 23.195 23.07 0 9.942-6.299 18.435-15.11 21.674Z"></path>
    </svg>
  ),
  name: "OneSignal",
};

export const projectData = [
  {
    title: "BatteryPool BAAS Dashboard",
    image: "./assets/projects/batterypool-dashboard.jpeg",
    description:
      "Developed and maintained a comprehensive Battery-as-a-Service (BaaS) dashboard for efficient battery-swapping operations. The platform streamlined driver management, asset tracking (batteries, chargers, swap stations), transactions, and subscriptions. Key features included driver onboarding, rental fee tracking, automated billing, real-time swap station monitoring (door control & energy tracking), and data reporting. Enabled seamless payment processing, subscription management, and activity monitoring for enhanced operational efficiency.",
    techStack: [Angular, Firebase, AwsLambda, AmazonApiGateway],
    githubUrl: "https://github.com/dinoweblog",
    url: "https://play.google.com/store/apps/details?id=com.app.linger&pcampaignid=web_share",
  },
  {
    title: "DAK IT HUB - CRM Platform",
    image: "./assets/projects/dak-crm.jpeg",
    description:
      "A powerful CRM platform designed to manage leads and campaigns efficiently. Features include user management, secure authentication, role-based access control, real-time notifications, and analytics dashboards. Streamlined sales and marketing workflows with data management tools for better decision-making.",
    techStack: [Nextjs, Nodejs, Typescript, Mongodb, Aws],
    githubUrl: "https://github.com/dinoweblog",
    url: "https://play.google.com/store/apps/details?id=com.app.linger&pcampaignid=web_share",
  },
  {
    title: "Millat App",
    image: "./assets/projects/millat-app.jpg",
    description:
      "Millat App is an all-in-one Muslim lifestyle app that combines a Halal marketplace, prayer tools, and Islamic content platform. The application features a robust e-commerce system with shopping options, including a dedicated women's section, alongside essential religious tools like prayer notifications and digital Quran. Users can access Halal travel services and earn rewards.",
    techStack: [Flutter, Nodejs, Express, Mongodb, AWS, OneSignal],
    githubUrl: "https://github.com/dinoweblog",
    url: "https://play.google.com/store/apps/details?id=com.app.linger&pcampaignid=web_share",
  },
  {
    title: "Millat Dashboard",
    image: "./assets/projects/millat-dashboard.jpg",
    description:
      "Millat Dashboard is a web-based admin/seller panel designed for managing products, rewards, and services within an e-commerce and informational platform. It includes features for user authentication, product listing and categorization, reward management, service entries (such as Duas and health tips), and a streamlined product creation process with attributes and pricing options. The dashboard provides an intuitive UI with search, filtering, and CRUD functionalities to enhance administrative efficiency.",
    techStack: [
      React,
      Nodejs,
      Express,
      Mongodb,
      Redux,
      Javascript,
      AWS,
      OneSignal,
    ],
    githubUrl: "https://github.com/dinoweblog",
    url: "https://dashboard.millat.co/",
  },
  {
    title: "Millat Official Website",
    image: "./assets/projects/millat-co.jpg",
    description:
      "That is the official website for Millat (Linger Lifecycle PVT. LTD). I build the project individually for Millat (Linger Lifecycle PVT. LTD), by using React, Redux, Javascript, Mui, CSS.",
    techStack: [React, Javascript, Mui, CSS],
    githubUrl: "https://github.com/dinoweblog",
    url: "https://millat.co/",
  },
  {
    title: "CV Builder",
    image: "./assets/projects/cv-builder.jpg",
    description:
      "CV Builder is an intuitive web application that enables users to create professional resumes with customizable templates. It features a user-friendly interface for adding personal details, academic history, work experience, skills, and other sections. The platform offers modern, recruiter-approved designs with real-time previews and PDF export functionality.",
    techStack: [React, Nodejs, Express, Mongodb, Mui],
    githubUrl: "https://github.com/dinoweblog",
    url: "https://smartmaulvi.com/",
  },
  {
    title: "AapkaFashion E-commerce Website",
    image: "./assets/projects/aapkafashions.jpg",
    description:
      "That is the e-commerce website, I worked as a freelancer and build the project individually in 30 days. I have worked on building UI features for authentication, home, products, product details, cart, wishlist, order, user account, address, and admin dashboard by using React, Redux, MUI",
    techStack: [React, Redux, Nodejs, Express, Mongodb, AWS, Mui, CSS],
    githubUrl: "https://github.com/dinoweblog",
    url: "https://aapka-fashions.vercel.app/",
  },

  {
    title: "Pet Boarding Website",
    image: "./assets/projects/petcare.jpg",
    description:
      "This is a solo project. It is a react and redux pet boarding booking website. A full-stack website developed by 2 days. I added features like login and signup for both users [admin, costumer], filter & sort according to price, & End to End Flow, etc.",
    techStack: [React, Redux, Nodejs, Express, Mongodb, CSS],
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
    ],
    githubUrl: "https://github.com/dinoweblog",
    url: "https://main.d36ng4ja7wbcyq.amplifyapp.com/",
  },

  {
    title: "e-Mart E-commerce Website",
    image: "./assets/projects/e-mart.png",
    description:
      "This is a solo project, It is an e-commerce website that sells clothes products across websites . A full-stack solo project developed by 10 days. I added features like filter and sort products, cart manipulation, search functionality, order tracking, wishlist product & End to End Flow etc.",
    techStack: [React, Redux, Nodejs, Express, Mongodb, CSS],
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
