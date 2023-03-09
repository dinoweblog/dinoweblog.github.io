import { Box, Button } from "@mui/material";
import { useState } from "react";
import { primary, secondary } from "../app/index";
import { AboutMeInfo, Education, Experience } from "../components";
import { BlockWrapper, PageWrapper } from "./wrapper";

const AboutPage = () => {
  const [index, setIndex] = useState(1);
  const handleIndex = (ind) => {
    setIndex(ind);
  };

  return (
    <PageWrapper pageTitle="About Us" page="About">
      <BlockWrapper>
        <AboutMeInfo />
      </BlockWrapper>
      <BlockWrapper sx={{ bgcolor: primary }}>
        <Box
          sx={{ height: { xs: "60px", sm: "100px" }, display: "flex", gap: 5 }}
        >
          <Button
            sx={{
              width: "100%",
              borderRadius: 0,
              fontSize: { xs: "1.1rem", sm: "2rem", md: "3rem" },
              bgcolor: index === 1 ? secondary : "transparent",
              borderColor: index === 1 ? primary : "#3b3d49",
              "&:hover": {
                borderColor: "#3b3d49",
              },
            }}
            variant="outlined"
            onClick={() => handleIndex(1)}
          >
            Education
          </Button>
          <Button
            sx={{
              width: "100%",
              borderRadius: 0,
              fontSize: { xs: "1.1rem", sm: "2rem", md: "3rem" },
              bgcolor: index === 2 ? secondary : "transparent",
              borderColor: index === 2 ? primary : "#3b3d49",
              "&:hover": {
                borderColor: "#3b3d49",
              },
            }}
            variant="outlined"
            onClick={() => handleIndex(2)}
          >
            Experience
          </Button>
        </Box>
        {index === 1 ? <Education /> : <Experience />}
      </BlockWrapper>
    </PageWrapper>
  );
};

export default AboutPage;
