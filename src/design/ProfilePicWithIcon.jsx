import { Box } from "@mui/material";
import { primary } from "../app/uiCore/themeColor";
import SocialMediaWithCircle from "./SocialMediaWithCircle";
import profileImage from "../components/assets/Profile.png";

const ProfilePicWithIcon = () => {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: { xs: "300px", sm: "450px", md: "100%", lg: "100%" },
        m: { xs: "auto", sm: "auto", md: 0 },
        mt: { xs: 0, sm: 0, lg: -4 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bgcolor: primary,
          width: "40%",
          height: "100%",
          left: 0,
          zIndex: 9,
          ml: { xs: -8, sm: 0 },
        }}
      />
      <Box
        component="img"
        src={profileImage}
        alt="profile"
        sx={{
          width: { xs: "90%", sm: "75%", md: "85%" },
          position: "relative",
          zIndex: 10,
          mt: { xs: -4, sm: -2, md: 0, lg: -8 },
          ml: { xs: -4, sm: -2 },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 40,
          width: "100%",
          ml: { xs: -3, sm: 0 },
        }}
      >
        <SocialMediaWithCircle />
      </Box>
    </Box>
  );
};

export default ProfilePicWithIcon;
