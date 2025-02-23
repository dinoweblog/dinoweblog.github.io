import { Box, Button } from "@mui/material";
import { useState } from "react";
import { primary, secondary } from "../../app/index";
import Wrapper from "../wrapper/Wrapper";
import AboutMeInfo from "./AboutMeInfo";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import GithubStats from "./githubStats/GithubStats";
import AnimatedSection from "../animation";
import { useFirestoreCollection } from "../../app/apis/useFirestore";

const About = ({ aboutData }) => {
  const [index, setIndex] = useState(1);
  const handleIndex = (ind) => {
    setIndex(ind);
  };

  const buttonStyles = (isActive) => ({
    width: "100%",
    borderRadius: 0,
    transition: "all .5s ease",
    fontSize: { xs: "1.1rem", sm: "2rem", md: "3rem" },
    bgcolor: isActive ? secondary : "transparent",
    borderColor: isActive ? primary : "#3b3d49",
    color: isActive ? "#fff" : "#BBBFCA",
    "&:hover": {
      bgcolor: isActive ? secondary : "rgba(59, 61, 73, 0.1)",
      borderColor: "#3b3d49",
    },
    "&:active": {
      bgcolor: secondary,
      borderColor: "#3b3d49",
    },
    boxShadow: "rgba(187, 134, 252, 0.3) -3px 3px",

    // boxShadow: 'rgba(137, 46, 240, 0.4) -5px 5px, rgba(89, 20, 153, 0.3) -10px 10px, rgba(60, 20, 94, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px',
    // boxShadow:
    //   "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  });

  const {
    data: experienceData,
    loading,
    error,
  } = useFirestoreCollection(
    ["experience", "experience"],
    ["createdAt", "desc"]
  );

  console.log("Firestore error: ", error);

  return (
    <Box className="item" sx={{ transition: "all 400ms" }}>
      <Wrapper page="About Me" title="About Me" color={primary} id="about">
        {/* <AnimatedSection animation="slide-right"> */}
        <AboutMeInfo aboutData={aboutData} />
        {/* </AnimatedSection> */}
      </Wrapper>

      <Box sx={{ bgcolor: primary, pt: 0, pb: 10 }} id="experience">
        <AnimatedSection animation="slide-left">
          <Box sx={{ width: { xs: "90%", md: "80%" }, m: "auto" }}>
            <Box
              sx={{
                height: { xs: "60px", sm: "100px" },
                display: "flex",
                gap: 5,
              }}
            >
              <Button
                sx={buttonStyles(index === 1)}
                variant="outlined"
                onClick={() => handleIndex(1)}
                disableRipple
              >
                Experience
              </Button>

              <Button
                sx={buttonStyles(index === 2)}
                variant="outlined"
                onClick={() => handleIndex(2)}
                disableRipple
              >
                Education
              </Button>
            </Box>
            {index === 1 ? (
              <Experience experienceData={experienceData} loading={loading} />
            ) : (
              <Education />
            )}
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
