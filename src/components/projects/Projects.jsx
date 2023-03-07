import { Box } from "@mui/material";
import { secondary } from "../../app/index";
import Wrapper from "../wrapper/Wrapper";
import ProjectSlider from "./ProjectSlider";

const Projects = () => {
  return (
    <Wrapper
      page="Awesome Portfolio"
      title="My Complete Projects"
      color={secondary}
      style={{ width: "90%", position: "relative" }}
    >
      <Box sx={{ mt: { xs: 15, sm: 15, md: 0 } }}>
        <ProjectSlider />
      </Box>
      {/* <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "100%", sm: "100%", md: "48% 48%" },
          justifyContent: "space-between",
        }}
      ></Box> */}
    </Wrapper>
  );
};

export default Projects;
