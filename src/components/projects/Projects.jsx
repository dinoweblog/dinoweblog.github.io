import { Box } from "@mui/material";
import { secondary } from "../../app/index";
import Wrapper from "../wrapper/Wrapper";
import ProjectSlider from "./ProjectSlider";

const Projects = () => {
  return (
    <Wrapper
      page="Awesome Portfolio"
      title="Projects"
      color={secondary}
      style={{ width: "90%", position: "relative" }}
      id="projects"
    >
      <Box sx={{ mt: { xs: 15, sm: 15, md: 0 } }}>
        <ProjectSlider />
      </Box>
    </Wrapper>
  );
};

export default Projects;
