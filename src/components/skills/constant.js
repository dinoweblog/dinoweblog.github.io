import { BsCodeSlash, MdOutlineMiscellaneousServices } from "../../app/index";

export const skills = [
  {
    title: "Development",
    subTitle: "Frontend",
    icon: <BsCodeSlash style={{ fontSize: 80, color: "#fff" }} />,
    skills: [
      "React",
      "Redux",
      "JavaScript",
      "TypeScript",
      "Apollo-client",
      "Material-UI",
      "HTML/CSS",
      "Git",
    ],
  },
  {
    title: "Development",
    subTitle: "Backend",
    icon: <BsCodeSlash style={{ fontSize: 80, color: "#fff" }} />,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Multer",
      "Mongoose",
      "Typegoose",
      "Graphql(type-graphql)",
    ],
  },
  {
    title: "AWS/Firebase",
    subTitle: "Services",
    icon: (
      <MdOutlineMiscellaneousServices style={{ fontSize: 80, color: "#fff" }} />
    ),
    skills: [
      "AWS S3 Storage",
      "AWS Cognito",
      "AWS Amplify",
      "Firebase Storage",
      "Firestore Database",
    ],
  },
];
