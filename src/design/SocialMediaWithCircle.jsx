import { Box } from "@mui/material";
import CircleBorder from "./CircleBorder";
import SocialMedia from "./SocialMedia";

const SocialMediaWithCircle = () => {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: { xs: "300px", sm: "450px", md: "650px" },
        height: { xs: "300px", sm: "450px", md: "650px" },
        right: { xs: 0, sm: 0, md: -30 },
      }}
    >
      <CircleBorder />
      <SocialMedia />
    </Box>
  );
};

export default SocialMediaWithCircle;
