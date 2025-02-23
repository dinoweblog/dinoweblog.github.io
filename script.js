const { addDoc, collection } = require("firebase/firestore");

const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5anSAsioJbNfq9UbHQ-P518iYfyGPXXw",
  authDomain: "dinodev-e022f.firebaseapp.com",
  projectId: "dinodev-e022f",
  storageBucket: "dinodev-e022f.firebasestorage.app",
  messagingSenderId: "984787048298",
  appId: "1:984787048298:web:35fd7fdad5488a19933713",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const projectData = [
  {
    title: "BAAS Dashboard - BatteryPool",
    image: "./assets/projects/batterypool-dashboard.jpeg",
    description:
      "Developed and maintained a comprehensive Battery-as-a-Service (BaaS) dashboard for efficient battery-swapping operations. The platform streamlined driver management, asset tracking (batteries, chargers, swap stations), transactions, and subscriptions. Key features included driver onboarding, rental fee tracking, automated billing, real-time swap station monitoring (door control & energy tracking), and data reporting. Enabled seamless payment processing, subscription management, and activity monitoring for enhanced operational efficiency.",
    techStack: [
      { name: "Angular", logo: { type: { name: "FaAngular" } } },
      { name: "Firebase", logo: { type: { name: "SiFirebase" } } },
      { name: "AWS Lambda", logo: { type: { name: "SiAwslambda" } } },
      {
        name: "AWS Api Gateway",
        logo: { type: { name: "SiAmazonapigateway" } },
      },
    ],
    githubUrl: "https://github.com/dinoweblog",
    url: "https://play.google.com/store/apps/details?id=com.app.linger&pcampaignid=web_share",
  },
  {
    title: "Tools App - BatteryPool",
    image: "./assets/projects/tools-app.jpeg",
    description:
      "A web-based platform designed for managing battery swapping and cash collection for electric vehicle (EV) battery stations. The system streamlines manual battery swaps, tracks financial transactions, and ensures operational efficiency through real-time monitoring.",
    techStack: [
      { name: "React.js", logo: { type: { name: "SiReact" } } },
      { name: "Firebase", logo: { type: { name: "SiFirebase" } } },
    ],
    githubUrl: "https://github.com/dinoweblog",
    url: "https://play.google.com/store/apps/details?id=com.app.linger&pcampaignid=web_share",
  },
  {
    title: "DAK IT HUB - CRM Platform",
    image: "./assets/projects/dak-crm.jpeg",
    description:
      "A powerful CRM platform designed to manage leads and campaigns efficiently. Features include user management, secure authentication, role-based access control, real-time notifications, and analytics dashboards. Streamlined sales and marketing workflows with data management tools for better decision-making.",
    techStack: [
      { name: "Next.js", logo: { type: { name: "SiNextdotjs" } } },
      { name: "Node.js", logo: { type: { name: "IoLogoNodejs" } } },
      { name: "TypeScript", logo: { type: { name: "TbBrandTypescript" } } },
      { name: "MongoDB", logo: { type: { name: "SiMongodb" } } },
      { name: "AWS Services", logo: { type: { name: "FaAws" } } },
    ],
    githubUrl: "https://github.com/dinoweblog",
    url: "https://play.google.com/store/apps/details?id=com.app.linger&pcampaignid=web_share",
  },
  {
    title: "Mobile App - Millat",
    image: "./assets/projects/millat-app.jpg",
    description:
      "Mobile App is an all-in-one Muslim lifestyle app that combines a Halal marketplace, prayer tools, and Islamic content platform. The application features a robust e-commerce system with shopping options, including a dedicated women's section, alongside essential religious tools like prayer notifications and digital Quran. Users can access Halal travel services and earn rewards.",
    techStack: [
      { name: "Flutter", logo: { type: { name: "RiFlutterFill" } } },
      { name: "Node.js", logo: { type: { name: "IoLogoNodejs" } } },
      { name: "Express.js", logo: { type: { name: "SiExpress" } } },
      { name: "MongoDB", logo: { type: { name: "SiMongodb" } } },
      { name: "AWS Services", logo: { type: { name: "FaAws" } } },
      { name: "OneSignal", logo: { type: { name: "OneSignal" } } },
    ],
    githubUrl: "https://github.com/dinoweblog",
    url: "https://play.google.com/store/apps/details?id=com.app.linger&pcampaignid=web_share",
  },
  {
    title: "Dashboard - Millat",
    image: "./assets/projects/millat-dashboard.jpg",
    description:
      "The Dashboard is a web-based admin/seller panel designed for managing products, rewards, and services within an e-commerce and informational platform. It includes features for user authentication, product listing and categorization, reward management, service entries (such as Duas and health tips), and a streamlined product creation process with attributes and pricing options. The dashboard provides an intuitive UI with search, filtering, and CRUD functionalities to enhance administrative efficiency.",
    techStack: [
      { name: "React.js", logo: { type: { name: "SiReact" } } },
      { name: "Node.js", logo: { type: { name: "IoLogoNodejs" } } },
      { name: "Express.js", logo: { type: { name: "SiExpress" } } },
      { name: "MongoDB", logo: { type: { name: "SiMongodb" } } },
      { name: "Redux", logo: { type: { name: "SiRedux" } } },
      { name: "JavaScript", logo: { type: { name: "TbBrandJavascript" } } },
      { name: "AWS Services", logo: { type: { name: "FaAws" } } },
      { name: "OneSignal", logo: { type: { name: "OneSignal" } } },
    ],
    githubUrl: "https://github.com/dinoweblog",
    url: "https://dashboard.millat.co/",
  },
  {
    title: "Official Website - Millat",
    image: "./assets/projects/millat-co.jpg",
    description:
      "That is the official website for Millat (Linger Lifecycle PVT. LTD). I build the project individually for Millat (Linger Lifecycle PVT. LTD), by using React, Redux, Javascript, Mui, CSS.",
    techStack: [
      { name: "React.js", logo: { type: { name: "SiReact" } } },
      { name: "JavaScript", logo: { type: { name: "TbBrandJavascript" } } },
      { name: "Material-UI", logo: { type: { name: "SiMui" } } },
      { name: "CSS", logo: { type: { name: "TbBrandCss3" } } },
    ],
    githubUrl: "https://github.com/dinoweblog",
    url: "https://millat.co/",
  },
  {
    title: "CV Builder - Millat",
    image: "./assets/projects/cv-builder.jpg",
    description:
      "CV Builder is an intuitive web application that enables users to create professional resumes with customizable templates. It features a user-friendly interface for adding personal details, academic history, work experience, skills, and other sections. The platform offers modern, recruiter-approved designs with real-time previews and PDF export functionality.",
    techStack: [
      { name: "React.js", logo: { type: { name: "SiReact" } } },
      { name: "Node.js", logo: { type: { name: "IoLogoNodejs" } } },
      { name: "Express.js", logo: { type: { name: "SiExpress" } } },
      { name: "MongoDB", logo: { type: { name: "SiMongodb" } } },
      { name: "Material-UI", logo: { type: { name: "SiMui" } } },
    ],
    githubUrl: "https://github.com/dinoweblog",
    url: "https://smartmaulvi.com/",
  },
  {
    title: "Community Of Gamers - Good-Game-Nation",
    image: "./assets/projects/ggn.png",
    description:
      "Bootstrapped the platform from scratch and contributed to building the biggest community of gamers. I created many things here, auth page, schedule page(calendar, shows upcoming events), tournament page, team profile page, post feed page. In Post Feed Page, user can post (like - facebook post), also user can be post likes and comments.",
    techStack: [
      { name: "React.js", logo: { type: { name: "SiReact" } } },
      { name: "Redux", logo: { type: { name: "SiRedux" } } },
      { name: "TypeScript", logo: { type: { name: "TbBrandTypescript" } } },
      { name: "Node.js", logo: { type: { name: "IoLogoNodejs" } } },
      { name: "Express.js", logo: { type: { name: "SiExpress" } } },
      { name: "MongoDB", logo: { type: { name: "SiMongodb" } } },
      { name: "Jest", logo: { type: { name: "SiJest" } } },
      { name: "Apollo-graphql", logo: { type: { name: "SiApollographql" } } },
      { name: "Material-UI", logo: { type: { name: "SiMui" } } },
    ],
    githubUrl: "https://github.com/dinoweblog",
    url: "https://main.d36ng4ja7wbcyq.amplifyapp.com/",
  },
  {
    title: "E-commerce Website - AapkaFashion",
    image: "./assets/projects/aapkafashions.jpg",
    description:
      "That is the e-commerce website, I worked as a freelancer and build the project individually in 30 days. I have worked on building UI features for authentication, home, products, product details, cart, wishlist, order, user account, address, and admin dashboard by using React, Redux, MUI",
    techStack: [
      { name: "React.js", logo: { type: { name: "SiReact" } } },
      { name: "Redux", logo: { type: { name: "SiRedux" } } },
      { name: "Node.js", logo: { type: { name: "IoLogoNodejs" } } },
      { name: "Express.js", logo: { type: { name: "SiExpress" } } },
      { name: "MongoDB", logo: { type: { name: "SiMongodb" } } },
      { name: "AWS Services", logo: { type: { name: "FaAws" } } },
      { name: "Material-UI", logo: { type: { name: "SiMui" } } },
      { name: "CSS", logo: { type: { name: "TbBrandCss3" } } },
    ],
    githubUrl: "https://github.com/dinoweblog",
    url: "https://aapka-fashions.vercel.app/",
  },
  {
    title: "Pet Boarding Website",
    image: "./assets/projects/petcare.jpg",
    description:
      "This is a solo project. It is a react and redux pet boarding booking website. A full-stack website developed by 2 days. I added features like login and signup for both users [admin, costumer], filter & sort according to price, & End to End Flow, etc.",
    techStack: [
      { name: "React.js", logo: { type: { name: "SiReact" } } },
      { name: "Redux", logo: { type: { name: "SiRedux" } } },
      { name: "Node.js", logo: { type: { name: "IoLogoNodejs" } } },
      { name: "Express.js", logo: { type: { name: "SiExpress" } } },
      { name: "MongoDB", logo: { type: { name: "SiMongodb" } } },
      { name: "CSS", logo: { type: { name: "TbBrandCss3" } } },
    ],
    githubUrl: "https://github.com/dinoweblog/Pet-Boarding-Site-FB",
    url: "https://petcare.vercel.app/",
  },
  {
    title: "E-commerce Website - E-Mart",
    image: "./assets/projects/e-mart.png",
    description:
      "This is a solo project, It is an e-commerce website that sells clothes products across websites . A full-stack solo project developed by 10 days. I added features like filter and sort products, cart manipulation, search functionality, order tracking, wishlist product & End to End Flow etc.",
    techStack: [
      { name: "React.js", logo: { type: { name: "SiReact" } } },
      { name: "Redux", logo: { type: { name: "SiRedux" } } },
      { name: "Node.js", logo: { type: { name: "IoLogoNodejs" } } },
      { name: "Express.js", logo: { type: { name: "SiExpress" } } },
      { name: "MongoDB", logo: { type: { name: "SiMongodb" } } },
      { name: "CSS", logo: { type: { name: "TbBrandCss3" } } },
    ],
    githubUrl: "https://github.com/dinoweblog/e-Mart-ecommerce-website-FB",
    url: "https://e-mart-shop.vercel.app/",
  },
  {
    title: "Clone Website - Unacademy",
    image: "./assets/projects/unacademy.png",
    description:
      "Unacademy is a learning platform that provides content for major competitive examinations. A collaborative project built by a team of 5 executed in 6 days.",
    techStack: [
      { name: "React.js", logo: { type: { name: "SiReact" } } },
      { name: "Redux", logo: { type: { name: "SiRedux" } } },
      { name: "JavaScript", logo: { type: { name: "TbBrandJavascript" } } },
      { name: "CSS", logo: { type: { name: "TbBrandCss3" } } },
    ],
    githubUrl: "https://github.com/danish4git/UNACADEMY-CLONE",
    url: "https://unacademy-clone-kappa.vercel.app/",
  },

  {
    title: "Clone Website - Nykaa Fashion",
    image: "./assets/projects/nykaafashion.png",
    description:
      "It is an e-commerce website that sells beauty, wellness, and fashion products across websites. A full-stack clone of Nykaa Fashion developed by 6 members in time span of 6 days. We added features like Off Canvas Popup cart, filter products, sort products, cart manipulation& End to End Flow etc.",
    techStack: [
      { name: "JavaScript", logo: { type: { name: "TbBrandJavascript" } } },
      { name: "HTML", logo: { type: { name: "TbBrandHtml5" } } },
      { name: "CSS", logo: { type: { name: "TbBrandCss3" } } },
    ],
    githubUrl: "https://github.com/nitesh172/FW13-CW-T-43-NykaaFashion_Clone",
    url: "https://nykaafashion.netlify.app/",
  },
  {
    title: "Clone Website - BeBodywise",
    image: "./assets/projects/bebodywiseclone.png",
    description:
      "An e-commerce website for health related products. A collaborative project built by a team of 5 executed in 6 days. We added features like Off Canvas Popup cart, cart manipulation & End to End Flow etc.",
    techStack: [
      { name: "Node.js", logo: { type: { name: "IoLogoNodejs" } } },
      { name: "JavaScript", logo: { type: { name: "TbBrandJavascript" } } },
      { name: "HTML", logo: { type: { name: "TbBrandHtml5" } } },
      { name: "CSS", logo: { type: { name: "TbBrandCss3" } } },
    ],
    githubUrl: "https://github.com/dinoweblog/FW13-T48-BebodywiseClone-Project",
    url: "https://bebodywiseclone.netlify.app/",
  },
  {
    title: "Clone Website - Imgur",
    image: "./assets/projects/imgur.png",
    description:
      "This is a plain JavaScript imgur clone project. This project is developed in 3 days. I added different type of filter option, search functionality & two different view layout.",
    techStack: [
      { name: "JavaScript", logo: { type: { name: "TbBrandJavascript" } } },
      { name: "HTML", logo: { type: { name: "TbBrandHtml5" } } },
      { name: "CSS", logo: { type: { name: "TbBrandCss3" } } },
    ],
    githubUrl: "https://github.com/dinoweblog/imgur-clone-website",
    url: "https://imgur-clone-website.vercel.app/",
  },
  {
    title: "Weather App",
    image: "./assets/projects/weather.jpg",
    description:
      "This is a plain JavaScript project. Shows the weather according to the city name you enter. This project is developed in 1 day.",
    techStack: [
      { name: "JavaScript", logo: { type: { name: "TbBrandJavascript" } } },
      { name: "HTML", logo: { type: { name: "TbBrandHtml5" } } },
      { name: "CSS", logo: { type: { name: "TbBrandCss3" } } },
    ],
    githubUrl: "https://github.com/dinoweblog/Weather-App",
    url: "https://weather-checking-app.vercel.app/",
  },
];

const iconMapping = {
  FaAngular: "FaAngular",
  SiFirebase: "SiFirebase",
  SiAwslambda: "SiAwslambda",
  SiAmazonapigateway: "SiAmazonapigateway",
  SiNextdotjs: "SiNextdotjs",
  FaAws: "FaAws",
  SiMongodb: "SiMongodb",
  TbBrandTypescript: "TbBrandTypescript",
  IoLogoNodejs: "IoLogoNodejs",
  RiFlutterFill: "RiFlutterFill",
  SiExpress: "SiExpress",
  SiRedux: "SiRedux",
  SiReact: "SiReact",
  SiMui: "SiMui",
  SiJest: "SiJest",
  SiApollographql: "SiApollographql",
  TbBrandJavascript: "TbBrandJavascript",
  TbBrandCss3: "TbBrandCss3",
  TbBrandHtml5: "TbBrandHtml5",
};

const transformedProjects = projectData.map((project) => ({
  title: project.title,
  image: project.image,
  description: project.description,
  techStack: project.techStack.map((tech) => ({
    name: tech.name,
    icon: iconMapping[tech.logo.type.name] || tech.logo.type.name,
  })),
  githubUrl: project.githubUrl,
  url: project.url,
}));

// const storeProjects = async () => {
//   try {
//     const projectsRef = collection(db, "MyPortfolio", "experience", "experience");

//     const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//     // Store each project one by one with delay
//     for (let i = transformedProjects.length - 1; i >= 0; i--) {
//       const project = transformedProjects[i];
//       console.log("Storing project:", project.title);
//       await addDoc(projectsRef, { ...project, createdAt: new Date() });

//       console.log("Project stored in Firestore:", project.title);

//       // Wait for 2 seconds before processing the next project
//       await delay(2000);
//     }

//     console.log("Projects successfully stored in Firestore");
//   } catch (error) {
//     console.error("Error storing projects:", error);
//   }
// };

// storeProjects();

const experienceData = [
  {
    position: "Full-Stack Engineer",
    comapny: "Divish Mobility Pvt Ltd (BatteryPool), Pune",
    description:
      "Led and developed multiple platforms with optimized performance and scalable architecture.",
    date: "Jul 2024 - Present",
    roles: [
      {
        title: "My Responsibility",
        points: [
          "Led the development of a mobile app, company website, e-commerce platform, role-based dashboard, travel booking system, and resume builder.",
          "Completed the majority of tasks, including architecture design, feature implementation, and deployment.",
          "Ensured responsive design, optimized performance, and seamless user experience.",
        ],
      },
      {
        title: "Key Features Developed",
        points: [
          "E-commerce: Cart, payment gateway, order tracking, and referral system.",
          "Travel Booking: Destination search, booking system, and payment integration.",
          "Admin Dashboard: Role-based access for inventory, orders, users, and content management.",
          "Resume builder with live previews and multiple templates.",
          "Additional Features: Prayer tracker, referral system with coin rewards, user feedback, and product review system.",
        ],
      },
      {
        title: "Tech Stack / Services",
        points: [
          "Frontend: Angular, React.js, Tailwind CSS, Material-UI, Redux",
          "Backend: AWS Lambda & API Gateway (Node.js), Firestore, Timescaledb",
          "Cloud & DevOps: Firebase, GCP, AWS (Lambda, IoT Core, EC2, ECS, Amplify, API Gateway, CloudWatch, S3, Step Functions, EventBridge, Kinesis, SQS, Cognito), CI/CD, MQTT, GitHub Actions",
          "Integrations & Tools: Razorpay, Grafana, Docker",
        ],
      },
    ],
  },
  {
    position: "Software Development Engineer",
    comapny: "Linger Lifecycle Pvt Ltd (Millat), Lucknow",
    description:
      "Led and developed multiple platforms with optimized performance and scalable architecture.",
    date: "Feb 2023 - Jun 2024",
    roles: [
      {
        title: "My Responsibility",
        points: [
          "Led the development of a mobile app, company website, e-commerce platform, role-based dashboard, travel booking system, and resume builder.",
          "Completed the majority of tasks, including architecture design, feature implementation, and deployment.",
          "Ensured responsive design, optimized performance, and seamless user experience.",
        ],
      },
      {
        title: "Key Features Developed",
        points: [
          "E-commerce: Cart, payment gateway, order tracking, and referral system.",
          "Travel Booking: Destination search, booking system, and payment integration.",
          "Admin Dashboard: Role-based access for inventory, orders, users, and content management.",
          "Resume builder with live previews and multiple templates.",
          "Additional Features: Prayer tracker, referral system with coin rewards, user feedback, and product review system.",
        ],
      },
      {
        title: "Tech Stack / Services",
        points: [
          "Frontend: React.js, Next.js, TypeScript, Tailwind CSS, Material-UI, Redux",
          "Backend: Node.js, Express.js, MongoDB",
          "Cloud & DevOps: AWS (EC2, S3, ECS, Route 53, Amplify), CI/CD, GitHub Actions",
          "Integrations & Tools: Razorpay, PhonePe, JWT, OAuth, Shiprocket, OneSignal",
        ],
      },
    ],
  },
  {
    position: "Software Engineer",
    comapny: "Good Game Nation Pvt Ltd, Chennai",
    description: "Building the biggest community of gamers",
    date: "Feb 2022 - Feb 2023",
    roles: [
      {
        title: "My Responsibility",
        points: [
          "Bootstrapped the platform from scratch and contributed to building the biggest community of gamers.",
          "Developed UI features for authentication, my schedules, my teams, tournaments, and feeds using React, Redux, and MUI.",
          "Implemented unit testing for UI components using Jest and @testing-library.",
          "Developed REST APIs and GraphQL APIs for various features using Express.js, MongoDB, Typegoose (Mongoose), Type-GraphQL, and Apollo Server & Client.",
          "Extensively used Supertest for end-to-end testing of REST APIs.",
          "Performed code reviews for pull requests to maintain high code quality.",
        ],
      },
      {
        title: "Key Features Developed",
        points: [
          "Authentication: Secure login with AWS Cognito, role-based access, 2FA, and password recovery.",
          "My Schedules: Calendar-based match & event scheduling, availability tracking, and Google Calendar sync.",
          "My Teams: Team management with roster updates, player roles, invites, and announcements.",
          "Tournaments: Auto-generated fixtures, live brackets, score updates, and leaderboards.",
          "Feeds: Social feed for posting, liking, commenting, with real-time updates and content moderation.",
        ],
      },
      {
        title: "Tech Stack / Services",
        points: [
          "Frontend: React.js, TypeScript, Material-UI, Redux, Apollo Client, Storybook",
          "Backend: Node.js, Express.js, MongoDB, Typegoose, Apollo Server, Type-GraphQL",
          "Cloud & DevOps: AWS(Cognito, EC2, S3, Amplify), CI/CD, GitHub Actions",
          "Testing & Integrations: Jest, Supertest, Razorpay, JWT, OAuth",
        ],
      },
    ],
  },
];

const skills = [
  // Frontend Skills
  {
    title: "Development",
    subTitle: "Frontend",
    skills: [
      { icon: "SiReact", name: "React" },
      { icon: "SiRedux", name: "Redux" },
      { icon: "SiJavascript", name: "JavaScript" },
      { icon: "SiTypescript", name: "TypeScript" },
      { icon: "SiNextdotjs", name: "Next.js" },
      { icon: "SiAngular", name: "Angular" },
      { icon: "SiApollographql", name: "Apollo-client" },
      { icon: "SiMaterialui", name: "Material-UI" },
      { icon: "SiHtml5", name: "HTML" },
      { icon: "SiCss3", name: "CSS" },
      { icon: "SiGit", name: "Git" },
    ],
  },

  // Backend Skills
  {
    title: "Development",
    subTitle: "Backend",
    skills: [
      { icon: "SiNodedotjs", name: "Node.js" },
      { icon: "SiExpress", name: "Express.js" },
      { icon: "SiMongodb", name: "MongoDB" },
      { icon: "SiTimescale", name: "TimescaleDB" },
      { icon: "SiGraphql", name: "GraphQL" },
      { icon: "SiAmazonaws", name: "@aws-sdk" },
      { icon: "SiRazorpay", name: "Razorpay" },
      { icon: "SiNodemon", name: "Nodemailer" },
      { icon: "SiSharp", name: "Sharp/Jimp" },
    ],
  },

  // AWS Skills
  {
    title: "AWS Services",
    subTitle: "Services",
    skills: [
      { icon: "SiAmazons3", name: "AWS S3 Storage" },
      { icon: "SiAwsamplify", name: "AWS Amplify" },
      { icon: "SiAwslambda", name: "AWS Lambda" },
      { icon: "SiAmazoncloudwatch", name: "AWS CloudWatch" },
      { icon: "SiAmazonapigateway", name: "AWS API Gateway" },
      { icon: "SiAmazonroute53", name: "AWS Route 53" },
      { icon: "SiAwskinesis", name: "AWS Kinesis" },
      { icon: "SiAmazoncloudfront", name: "AWS CloudFront" },
      { icon: "SiAmazonecs", name: "AWS Elastic Container Service" },
      { icon: "SiAmazonrds", name: "AWS Elastic Container Registry" },
    ],
  },

  // Firebase/Other Services
  {
    title: "Firebase/Other Services",
    subTitle: "Services",
    skills: [
      { icon: "SiFirebase", name: "Firebase Storage" },
      { icon: "SiGooglefirestore", name: "Firestore Database" },
      { icon: "SiOnesignal", name: "OneSignal" },
      { icon: "SiShiprocket", name: "Shiprocket" },
      { icon: "SiGrafana", name: "Grafana" },
    ],
  },
];


const storeProjects = async () => {
  try {
    const projectsRef = collection(
      db,
      "MyPortfolio",
      "skills",
      "skills"
    );

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Store each project one by one with delay
    for (let i = skills.length - 1; i >= 0; i--) {
      const project = skills[i];
      console.log("Storing project:", project.title);
      await addDoc(projectsRef, { ...project, createdAt: new Date() });

      console.log("Project stored in Firestore:", project.title);

      // Wait for 2 seconds before processing the next project
      await delay(2000);
    }

    console.log("Projects successfully stored in Firestore");
  } catch (error) {
    console.error("Error storing projects:", error);
  }
};

// storeProjects();
