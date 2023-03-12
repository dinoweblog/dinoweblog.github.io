import { LinkedIn, Email, Twitter, GitHub } from "@mui/icons-material";

export const socialIcon = [
  {
    title: "GitHub",
    url: "https://github.com/dinoweblog",
    icon: <GitHub sx={{ fontSize: { xs: 16, sm: 18, md: 24 } }} />,
    style: {
      right: { xs: "2%", sm: "14%", md: "10%" },
      top: { xs: "16%", sm: "24%", md: "25%" },
    },
  },

  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/dino-web/",
    icon: <LinkedIn sx={{ fontSize: { xs: 16, sm: 18, md: 24 } }} />,
    style: {
      right: { xs: "19%", sm: "30%", md: "27%" },
      top: { xs: "0%", sm: "12%", md: "10%" },
    },
  },
  {
    title: "Twitter",
    url: "https://twitter.com/imD1nesh",
    icon: <Twitter sx={{ fontSize: { xs: 16, sm: 18, md: 24 } }} />,
    style: {
      right: { xs: "-6%", sm: "8%", md: "6%" },
      top: { xs: "39%", sm: "45%", md: "48%" },
    },
  },
  {
    title: "Email",
    url: "mailto:dinoweblog@gmail.com",
    icon: <Email />,
    style: {
      right: { xs: "-1%", sm: "14%", md: "12%" },
      top: { xs: "64%", sm: "65%", md: "69%" },
    },
  },
];
