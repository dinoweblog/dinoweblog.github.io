import { Download } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import {
  MdKeyboardDoubleArrowRight,
  primary,
  secondary,
} from "../../app/index";
import { CustomButton } from "../button";
import ResumeBtn from "../button/ResumeBtn";
import profileImage from "../assets/Profile.png";
import { jobTitle } from "../../constant";

const AboutMeInfo = ({ isShow, aboutData }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        gap: 10,
      }}
    >
      <Box
        flex={3}
        sx={{
          bgcolor: secondary,
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
          gap: 4,
        }}
      >
        <Box
          component="img"
          src={profileImage}
          sx={{
            width: "60%",
            border: "1px solid",
            borderColor: "#3b3d49",
            p: 3,
            pt: 1,
          }}
        />
        <ResumeBtn
          endIcon={<Download />}
          href={aboutData?.resumeDriverLink}
          isDownload
        >
          Resume
        </ResumeBtn>
      </Box>
      <Box flex={5}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "3rem", sm: "4rem" },
            lineHeight: 1.5,
          }}
        >
          {`I'm ${aboutData?.name || "Dinesh Sharma"}`}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            color: (theme) => theme.palette.secondary.main,
            fontSize: { xs: "1.5rem", sm: "2rem" },
            lineHeight: 1.5,
          }}
        >
          {aboutData?.jobTitle || jobTitle}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: (theme) => theme.palette.secondary.main, mt: 4 }}
        >
          {aboutData?.professionalSummary}
        </Typography>

        {isShow ? (
          <CustomButton
            icon={<MdKeyboardDoubleArrowRight />}
            style={{
              height: "40px",
              mt: 5,
              "&:hover": {
                bgcolor: "#fff",
                color: primary,
              },
            }}
            to={"/about"}
          >
            Education
          </CustomButton>
        ) : null}
      </Box>
    </Box>
  );
};

export default AboutMeInfo;
