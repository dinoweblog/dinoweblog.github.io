import { Box, Button } from "@mui/material";
import { useState } from "react";
import { primary, secondary } from "../../app/index";
import Wrapper from "../wrapper/Wrapper";
import AboutMeInfo from "./AboutMeInfo";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import GithubStats from "./githubStats/GithubStats";
import AnimatedSection from "../animation";

const About = () => {
  const [index, setIndex] = useState(1);
  const handleIndex = (ind) => {
    setIndex(ind);
  };

  return (
    <Box className="item" sx={{ transition: "all 400ms" }}>
      <Wrapper page="About Me" title="About Me" color={primary} id="about">
        <AnimatedSection animation="slide-right">
          <AboutMeInfo />
        </AnimatedSection>
      </Wrapper>

      <Box sx={{ bgcolor: primary, pt: 5, pb: 10 }} id="experience">
        <AnimatedSection animation="slide-left">
          <Box sx={{ width: "80%", m: "auto" }}>
            <Box
              sx={{
                height: { xs: "60px", sm: "100px" },
                display: "flex",
                gap: 5,
              }}
            >
              <Button
                sx={{
                  width: "100%",
                  borderRadius: 0,
                  transition: "all .5s ease",
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
                Experience
              </Button>

              <Button
                sx={{
                  width: "100%",
                  borderRadius: 0,
                  transition: "all .5s ease",
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
                Education
              </Button>
            </Box>
            {index === 1 ? <Experience /> : <Education />}
          </Box>
        </AnimatedSection>
        <AnimatedSection className="animate-scale-in-on-scroll">
          <GithubStats />
        </AnimatedSection>
      </Box>
    </Box>
  );
};

export default About;
