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
      "Next.js",
      "Angular",
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
      "TimescaleDB",
      "Multer",
      "Mongoose / Typegoose",
      "Graphql(type-graphql)",
      "@aws-sdk",
      "Razorpay",
      "PhonePe",
      "Nodemailer",
      "Sharp/Jimp",
    ],
  },
  {
    title: "AWS Services",
    subTitle: "Services",
    icon: (
      <MdOutlineMiscellaneousServices style={{ fontSize: 80, color: "#fff" }} />
    ),
    skills: [
      "AWS S3 Storage",
      "AWS Cognito",
      "AWS Amplify",
      "AWS Lambda",
      "AWS CloudWatch",
      "AWS API Gateway",
      "AWS Route 53",
      "AWS Kinesis",
      "AWS CloudFront",
      "AWS Amazon EventBridge",
      "AWS Elastic Container Service",
      "AWS Elastic Container Registry",
    ],
  },
  {
    title: "Firebase/Other Services",
    subTitle: "Services",
    icon: (
      <MdOutlineMiscellaneousServices style={{ fontSize: 80, color: "#fff" }} />
    ),
    skills: [
      "Firebase Storage",
      "Firestore Database",
      "Razorpay",
      "PhonePe",
      "OneSignal (Notification)",
      "Shiprocket",
      "Grafana",
    ],
  },
];
