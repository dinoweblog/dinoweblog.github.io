import { Box } from "@mui/material";
import {
  About,
  Home,
  Projects,
  Services,
  Skills,
  WorkExperience,
} from "../components";

const HomePage = () => {
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
