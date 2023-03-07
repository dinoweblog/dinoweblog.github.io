import { Box } from "@mui/material";
import { primary } from "../app/uiCore/themeColor";
import SocialMediaWithCircle from "./SocialMediaWithCircle";

const ProfilePicWithIcon = () => {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: { xs: "300px", sm: "450px", md: "800px" },
        m: { xs: "auto", sm: "auto", md: 0 },
        right: { xs: 0, sm: 0, md: -100 },
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
        }}
      />
      <Box
        component="img"
        src={"./assets/profile-pic.png"}
        alt="profile-pic"
        sx={{
          width: { xs: "85%", sm: "75%", md: "85%" },
          position: "relative",
          zIndex: 10,
          mt: { xs: -2, sm: -2, md: -8 },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 40,
          right: { xs: 0, sm: 0, md: -30 },
          width: "100%",
        }}
      >
        <SocialMediaWithCircle />
      </Box>
    </Box>
  );
};

export default ProfilePicWithIcon;
