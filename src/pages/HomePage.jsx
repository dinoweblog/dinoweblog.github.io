import { Box } from "@mui/material";
import { useEffect } from "react";
import {
  About,
  Home,
  Projects,
  Services,
  Skills,
  WorkExperience,
} from "../components";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Home />
      <Skills />
      <Services />
      <Projects />
      <WorkExperience />
      <About />
    </Box>
  );
};

export default HomePage;
