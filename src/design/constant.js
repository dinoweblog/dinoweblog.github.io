import { LinkedIn, Facebook, Twitter, GitHub } from "@mui/icons-material";

export const socialIcon = [
  {
    title: "GitHub",
    icon: <GitHub sx={{ fontSize: { xs: 16, sm: 18, md: 24 } }} />,
    style: {
      right: { xs: "2%", sm: "14%", md: "10%" },
      top: { xs: "16%", sm: "24%", md: "25%" },
    },
  },

  {
    title: "LinkedIn",
    icon: <LinkedIn sx={{ fontSize: { xs: 16, sm: 18, md: 24 } }} />,
    style: {
      right: { xs: "19%", sm: "30%", md: "27%" },
      top: { xs: "0%", sm: "12%", md: "10%" },
    },
  },
  {
    title: "Twitter",
    icon: <Twitter sx={{ fontSize: { xs: 16, sm: 18, md: 24 } }} />,
    style: {
      right: { xs: "-6%", sm: "8%", md: "6%" },
      top: { xs: "39%", sm: "45%", md: "48%" },
    },
  },
  {
    title: "Facebook",
    icon: <Facebook sx={{ fontSize: { xs: 16, sm: 18, md: 24 } }} />,
    style: {
      right: { xs: "-1%", sm: "14%", md: "12%" },
      top: { xs: "64%", sm: "65%", md: "69%" },
    },
  },
];
