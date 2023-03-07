import { Box } from "@mui/material";
import { secondary } from "../app/index";
import { AboutMeInfo } from "../components";
import PageWrapper from "./wrapper/PageWrapper";

const AboutPage = () => {
  return (
    <PageWrapper>
      <Box sx={{ bgcolor: secondary }}>
        <Box
          sx={{
            width: "80%",
            m: "auto",
            pt: 15,
            pb: 15,
          }}
        >
          <AboutMeInfo />
        </Box>
      </Box>
      <Box sx={{ bgcolor: secondary }}></Box>
    </PageWrapper>
  );
};

export default AboutPage;
