import { Box } from "@mui/material";
import { useEffect } from "react";
import {
  About,
  Contact,
  Home,
  Projects,
  Services,
  Skills,
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
      <About />
      <Contact />
    </Box>
  );
};

export default HomePage;
