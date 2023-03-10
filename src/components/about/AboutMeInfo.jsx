import { Download } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import {
  MdKeyboardDoubleArrowRight,
  primary,
  secondary,
} from "../../app/index";
import { CustomButton } from "../button";
import ResumeBtn from "../button/ResumeBtn";

const AboutMeInfo = ({ isShow }) => {
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
          src={"./assets/Profile.png"}
          sx={{
            width: "60%",
            border: "1px solid",
            borderColor: "#3b3d49",
            p: 3,
            pt: 1,
          }}
        />
        <ResumeBtn endIcon={<Download />}>Resume</ResumeBtn>
      </Box>
      <Box flex={5}>
        <Typography
          variant="h1"
          sx={{ fontSize: "4rem !important", lineHeight: 1.5 }}
        >
          I'm Dinesh Sharma
        </Typography>
        <Typography
          variant="h1"
          sx={{
            color: (theme) => theme.palette.secondary.main,
            fontSize: "2.5rem !important",
            lineHeight: 1.5,
          }}
        >
          Full Stack Web Developer & A Freelancer
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: (theme) => theme.palette.secondary.main, mt: 4 }}
        >
          An aspiring full stack developer with a specialization in MERN stack.
          Keenly interested in problem-solving and making user-centric products,
          self-motivated and curious. Looking forward to honing my skills in a
          challenging work environment.
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
