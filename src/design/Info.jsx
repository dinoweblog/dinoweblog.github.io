import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import ResumeBtn from "../components/button/ResumeBtn";

const Info = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 5, sm: 8 },
        mt: { xs: 10, sm: 10, md: 0 },
        ml: { xs: "5%", sm: "5%", md: 0 },
      }}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "2rem !important",
              sm: "3rem !important",
              md: "4rem !important",
            },
            fontWeight: 500,
          }}
        >
          Hello! I’m
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "3rem !important",
              sm: "4rem !important",
              md: "5rem !important",
            },
          }}
        >
          Dinesh Sharma
        </Typography>
      </Box>
      <Typography
        variant="body1"
        sx={{ color: (theme) => theme.palette.secondary.main }}
      >
        Full Stack Web Developer & Freelancer
      </Typography>

      <ResumeBtn endIcon={<KeyboardDoubleArrowRight />}>Get Resume</ResumeBtn>
    </Box>
  );
};

export default Info;
